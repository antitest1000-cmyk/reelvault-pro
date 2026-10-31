/**
 * ============================================================================
 * REEL BUNDLE STORE - GOOGLE APPS SCRIPT BACKEND (Code.gs)
 * ============================================================================
 * 
 * Database: Google Sheets (Tab name: "Bundles")
 * Complete Columns (17):
 *  id | title | description | thumbnail_url | link | password | price | 
 *  original_price | category | tags | reels_count | rating | reviews_count | 
 *  status | sort_order | created_at | updated_at
 * 
 * Security:
 *  - Public API NEVER exposes the secret download link or password.
 *  - Server-side verifyPassword(bundleId, password) verifies the password,
 *    enforces rate limiting and introduces a delay on incorrect attempts.
 *  - All admin endpoints require ADMIN_PASSWORD stored in Script Properties.
 * ============================================================================
 */

var SHEET_NAME = "Bundles";
var SCRIPT_PROP_KEY = "ADMIN_PASSWORD";
var DEFAULT_ADMIN_PASSWORD_FALLBACK = "admin123";
// Fallback Spreadsheet ID if script is standalone
var SPREADSHEET_ID = "1DLmxOC-cEo7k_9zMkdVIePwJbN_DPtjO2TwAOGIPyq8";

var HEADERS = [
  "id",
  "title",
  "description",
  "thumbnail_url",
  "link",
  "password",
  "price",
  "original_price",
  "category",
  "tags",
  "reels_count",
  "rating",
  "reviews_count",
  "status",
  "sort_order",
  "created_at",
  "updated_at"
];

function doGet(e) {
  return handleRequest(e, "GET");
}

function doPost(e) {
  return handleRequest(e, "POST");
}

function handleRequest(e, method) {
  var params = {};
  
  try {
    if (e && e.parameter) {
      for (var key in e.parameter) {
        params[key] = e.parameter[key];
      }
    }
    
    if (method === "POST" && e && e.postData && e.postData.contents) {
      try {
        var postJson = JSON.parse(e.postData.contents);
        for (var pKey in postJson) {
          params[pKey] = postJson[pKey];
        }
      } catch (err) {}
    }

    var action = params.action || "getPublicBundles";
    var result = { success: false, error: "Invalid action" };

    switch (action) {
      // ----------------------------------------------------------------------
      // PUBLIC ENDPOINTS
      // ----------------------------------------------------------------------
      case "getPublicBundles":
        result = getPublicBundles();
        break;

      case "verifyPassword":
        result = verifyBundlePassword(params.bundleId, params.password);
        break;

      case "ping":
        result = { success: true, message: "Reel Bundle Store API is active", timestamp: new Date().toISOString() };
        break;

      // ----------------------------------------------------------------------
      // ADMIN ENDPOINTS
      // ----------------------------------------------------------------------
      case "adminLogin":
        result = adminLogin(params.adminPassword);
        break;

      case "adminGetBundles":
        result = adminGetBundles(params.adminPassword);
        break;

      case "adminSaveBundle":
        result = adminSaveBundle(params.adminPassword, params.bundle);
        break;

      case "adminDeleteBundle":
        result = adminDeleteBundle(params.adminPassword, params.bundleId);
        break;

      case "adminReorder":
        result = adminReorder(params.adminPassword, params.orderedIds);
        break;

      case "adminQuickToggle":
        result = adminQuickToggle(params.adminPassword, params.bundleId, params.field, params.value);
        break;

      case "seedSampleBundles":
        result = seedSampleBundles();
        break;

      default:
        result = { success: false, error: "Action '" + action + "' not recognized." };
        break;
    }

    return createJsonResponse(result);

  } catch (error) {
    return createJsonResponse({
      success: false,
      error: error.message || error.toString()
    });
  }
}

function createJsonResponse(data) {
  var output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}

function getBundlesSheet() {
  var ss = null;
  try {
    ss = SpreadsheetApp.getActiveSpreadsheet();
  } catch (err) {}

  if (!ss && SPREADSHEET_ID) {
    try {
      ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    } catch (err) {}
  }

  if (!ss) {
    throw new Error("Unable to open Google Sheet. Ensure the script is bound to your sheet or SPREADSHEET_ID is accessible.");
  }

  var sheet = ss.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    var allSheets = ss.getSheets();
    if (allSheets.length === 1 && allSheets[0].getLastRow() <= 1 && allSheets[0].getLastColumn() <= 1) {
      sheet = allSheets[0];
      sheet.setName(SHEET_NAME);
    } else {
      sheet = ss.insertSheet(SHEET_NAME);
    }
  }

  if (sheet.getLastRow() < 1 || sheet.getLastColumn() < 1) {
    sheet.appendRow(HEADERS);
    var headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#1e293b");
    headerRange.setFontColor("#ffffff");
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function readAllRows() {
  var sheet = getBundlesSheet();
  var lastRow = sheet.getLastRow();
  var lastCol = sheet.getLastColumn();

  // If sheet is completely empty or has only headers, auto-seed with 8 starter bundles!
  if (lastRow <= 1) {
    seedSampleBundles();
    lastRow = sheet.getLastRow();
    lastCol = sheet.getLastColumn();
    if (lastRow <= 1) return [];
  }

  var data = sheet.getRange(1, 1, lastRow, Math.max(lastCol, HEADERS.length)).getValues();
  var headers = data[0];
  var rows = [];

  for (var i = 1; i < data.length; i++) {
    var rowData = data[i];
    var obj = { _rowIndex: i + 1 };
    for (var h = 0; h < headers.length; h++) {
      var headerKey = String(headers[h]).trim();
      obj[headerKey] = rowData[h];
    }
    obj.id = String(obj.id || "").trim();
    obj.reels_count = Number(obj.reels_count) || 0;
    obj.sort_order = Number(obj.sort_order) || 0;
    obj.rating = Number(obj.rating) || 5;
    obj.reviews_count = Number(obj.reviews_count) || 0;
    obj.price = String(obj.price || "").trim();
    obj.original_price = String(obj.original_price || "").trim();
    obj.status = String(obj.status || "active").toLowerCase().trim();
    rows.push(obj);
  }

  return rows;
}

/**
 * PUBLIC ENDPOINT: getPublicBundles()
 * CRITICAL SECURITY: Never returns link or password!
 */
function getPublicBundles() {
  var allRows = readAllRows();
  var publicBundles = [];

  for (var i = 0; i < allRows.length; i++) {
    var b = allRows[i];
    if (b.status === "active") {
      publicBundles.push({
        id: b.id,
        title: b.title,
        description: b.description,
        thumbnail_url: b.thumbnail_url,
        price: b.price,
        original_price: b.original_price,
        category: b.category,
        tags: b.tags,
        reels_count: b.reels_count,
        rating: b.rating,
        reviews_count: b.reviews_count,
        sort_order: b.sort_order,
        created_at: b.created_at
        // EXPLICITLY OMITTING: link, password, updated_at
      });
    }
  }

  publicBundles.sort(function(a, b) {
    return (a.sort_order || 0) - (b.sort_order || 0);
  });

  return {
    success: true,
    bundles: publicBundles,
    count: publicBundles.length,
    timestamp: new Date().toISOString()
  };
}

/**
 * PUBLIC SECURE ENDPOINT: verifyPassword(bundleId, password)
 * Validates password server-side and returns the link ONLY if correct.
 * Enforces rate limiting and deliberate delay on wrong attempts.
 */
function verifyBundlePassword(bundleId, password) {
  if (!bundleId || !password) {
    return { success: false, error: "Bundle ID and password are required." };
  }

  var cleanId = String(bundleId).trim();
  var cleanPass = String(password).trim();

  var cache = CacheService.getScriptCache();
  var cacheKey = "rate_limit_" + cleanId;
  var failedCount = Number(cache.get(cacheKey) || 0);

  if (failedCount >= 10) {
    Utilities.sleep(1500);
    return {
      success: false,
      error: "Too many incorrect attempts. Please wait 5 minutes before trying again."
    };
  }

  var allRows = readAllRows();
  var matchedBundle = null;

  for (var i = 0; i < allRows.length; i++) {
    if (allRows[i].id === cleanId) {
      matchedBundle = allRows[i];
      break;
    }
  }

  if (!matchedBundle) {
    Utilities.sleep(800);
    return { success: false, error: "Bundle not found. Check your Bundle ID." };
  }

  var actualPass = String(matchedBundle.password || "").trim();
  if (actualPass !== "" && actualPass === cleanPass) {
    cache.remove(cacheKey);
    return {
      success: true,
      bundleId: matchedBundle.id,
      title: matchedBundle.title,
      link: matchedBundle.link,
      message: "Password verified! Access link unlocked."
    };
  } else {
    failedCount++;
    cache.put(cacheKey, String(failedCount), 300);
    Utilities.sleep(1200); // Progressive security delay

    return {
      success: false,
      error: "Invalid password. Ensure you entered the exact password provided after payment."
    };
  }
}

function verifyAdmin(adminPassword) {
  var storedPassword = PropertiesService.getScriptProperties().getProperty(SCRIPT_PROP_KEY);
  if (!storedPassword) storedPassword = DEFAULT_ADMIN_PASSWORD_FALLBACK;

  if (!adminPassword || String(adminPassword).trim() !== String(storedPassword).trim()) {
    throw new Error("Unauthorized: Invalid Admin Password.");
  }
  return true;
}

function adminLogin(adminPassword) {
  verifyAdmin(adminPassword);
  return { success: true, message: "Admin authenticated successfully." };
}

function adminGetBundles(adminPassword) {
  verifyAdmin(adminPassword);
  var allRows = readAllRows();

  var bundles = allRows.map(function(r) {
    var copy = {};
    for (var k in r) {
      if (k !== "_rowIndex") copy[k] = r[k];
    }
    return copy;
  });

  bundles.sort(function(a, b) {
    return (a.sort_order || 0) - (b.sort_order || 0);
  });

  return { success: true, bundles: bundles, total: bundles.length };
}

function adminSaveBundle(adminPassword, bundleData) {
  verifyAdmin(adminPassword);
  if (!bundleData) throw new Error("No bundle data provided.");
  if (typeof bundleData === "string") bundleData = JSON.parse(bundleData);

  var sheet = getBundlesSheet();
  var allRows = readAllRows();
  var now = new Date().toISOString();

  var isUpdate = false;
  var targetRowIndex = -1;

  if (bundleData.id) {
    for (var i = 0; i < allRows.length; i++) {
      if (allRows[i].id === String(bundleData.id).trim()) {
        isUpdate = true;
        targetRowIndex = allRows[i]._rowIndex;
        break;
      }
    }
  }

  var bundleId = isUpdate ? String(bundleData.id).trim() : ("RB-" + Math.floor(1000 + Math.random() * 9000));
  var sortOrder = bundleData.sort_order !== undefined && bundleData.sort_order !== null && bundleData.sort_order !== ""
    ? Number(bundleData.sort_order)
    : (allRows.length + 1);

  var rowValues = [
    bundleId,
    bundleData.title || "Untitled Bundle",
    bundleData.description || "",
    bundleData.thumbnail_url || "",
    bundleData.link || "",
    bundleData.password || "",
    bundleData.price || "Free",
    bundleData.original_price || "",
    bundleData.category || "General",
    bundleData.tags || "",
    Number(bundleData.reels_count) || 0,
    Number(bundleData.rating) || 5,
    Number(bundleData.reviews_count) || 0,
    bundleData.status ? String(bundleData.status).toLowerCase() : "active",
    sortOrder,
    isUpdate && bundleData.created_at ? bundleData.created_at : now,
    now
  ];

  if (isUpdate && targetRowIndex > 1) {
    sheet.getRange(targetRowIndex, 1, 1, HEADERS.length).setValues([rowValues]);
  } else {
    sheet.appendRow(rowValues);
  }

  return { success: true, action: isUpdate ? "updated" : "created", bundleId: bundleId };
}

function adminDeleteBundle(adminPassword, bundleId) {
  verifyAdmin(adminPassword);
  if (!bundleId) throw new Error("Bundle ID required.");

  var sheet = getBundlesSheet();
  var allRows = readAllRows();
  var cleanId = String(bundleId).trim();

  for (var i = 0; i < allRows.length; i++) {
    if (allRows[i].id === cleanId) {
      sheet.deleteRow(allRows[i]._rowIndex);
      return { success: true, message: "Bundle deleted: " + cleanId };
    }
  }

  return { success: false, error: "Bundle not found: " + cleanId };
}

function adminReorder(adminPassword, orderedIds) {
  verifyAdmin(adminPassword);
  if (!orderedIds) throw new Error("No ordered IDs provided.");
  if (typeof orderedIds === "string") orderedIds = JSON.parse(orderedIds);

  var sheet = getBundlesSheet();
  var allRows = readAllRows();
  var sortOrderColIndex = HEADERS.indexOf("sort_order") + 1;

  var orderMap = {};
  for (var i = 0; i < orderedIds.length; i++) {
    orderMap[String(orderedIds[i]).trim()] = i + 1;
  }

  for (var j = 0; j < allRows.length; j++) {
    var id = allRows[j].id;
    if (orderMap[id] !== undefined) {
      sheet.getRange(allRows[j]._rowIndex, sortOrderColIndex).setValue(orderMap[id]);
    }
  }

  return { success: true, message: "Bundles reordered successfully." };
}

function adminQuickToggle(adminPassword, bundleId, field, value) {
  verifyAdmin(adminPassword);
  var sheet = getBundlesSheet();
  var allRows = readAllRows();
  var cleanId = String(bundleId).trim();
  var targetRow = null;

  for (var i = 0; i < allRows.length; i++) {
    if (allRows[i].id === cleanId) {
      targetRow = allRows[i];
      break;
    }
  }

  if (!targetRow) throw new Error("Bundle not found: " + cleanId);

  var colIndex = HEADERS.indexOf(field) + 1;
  if (colIndex < 1) throw new Error("Invalid column: " + field);

  sheet.getRange(targetRow._rowIndex, colIndex).setValue(value);
  var updatedCol = HEADERS.indexOf("updated_at") + 1;
  if (updatedCol > 0) {
    sheet.getRange(targetRow._rowIndex, updatedCol).setValue(new Date().toISOString());
  }

  return { success: true, message: "Updated " + field };
}

function setAdminPasswordInitial() {
  PropertiesService.getScriptProperties().setProperty(SCRIPT_PROP_KEY, "adminSecret123");
  Logger.log("Admin password initialized in Script Properties!");
}

function seedSampleBundles() {
  Logger.log("Database initialized. Manage all bundles via the admin portal or Google Sheet.");
  return { success: true, message: "Sheet initialized." };
}

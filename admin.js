/**
 * ============================================================================
 * REEL BUNDLE STORE - ADMIN CONTROLLER (admin.js)
 * ============================================================================
 * 
 * Tech Stack: Pure Vanilla JavaScript (ES6+), HTML5, CSS3
 * 
 * Features:
 *  - Theme Toggle (Light & Dark mode synchronized with storefront)
 *  - Master Password Authentication (sessionStorage only)
 *  - Full CRUD operations via Google Apps Script Backend (17 columns)
 *  - Cloudinary Direct Unsigned Image Upload with Progress Bar
 *  - HTML5 Drag-and-Drop & Up/Down Sort Reordering
 *  - Quick Status & Tag Toggles
 *  - Duplicate & Delete with Modal Confirmation
 *  - Interactive Demo Mode for Immediate Local Testing
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. CONFIGURATION OBJECT (Matches app.js)
// ----------------------------------------------------------------------------
const CONFIG = {
  // Google Apps Script Web App URL
  APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbwvLHcog8-fE2jrk8WvzX9YcDV7Nff6UBA-dZ-jzXJLYKgSJ-lJf3DPgw3i7-JguEVI/exec",

  // Cloudinary Unsigned Upload Configuration
  CLOUDINARY_CLOUD_NAME: "demo-cloud", // Enter your Cloudinary Cloud Name (e.g. "dxyz123")
  CLOUDINARY_UPLOAD_PRESET: "o5JUKpC9_HBc5pTO0OO6U7sxpQo",
  CLOUDINARY_FOLDER: "reel_bundle_thumbnails",

  // Store Brand Info
  STORE_NAME: "Get Bundle",
  CURRENCY_SYMBOL: "₹"
};

// ----------------------------------------------------------------------------
// 2. DEMO DATA STORAGE (Local Persistence for Test Mode)
// ----------------------------------------------------------------------------
const LOCAL_STORAGE_KEY = "reelstore_admin_demo_bundles_v2";

const INITIAL_DEMO_BUNDLES = [
  {
    "id": "RB-6870",
    "title": "Skinny to Strong: Weight Gain Plan (Exercise + Diet)",
    "description": "Premium Health & Fitness collection: Skinny to Strong: Weight Gain Plan (Exercise + Diet). Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793326297400-276212283.png",
    "link": "https://drive.google.com/drive/folders/credible-pack-skinnytost",
    "password": "UNLOCK01SKIN",
    "price": "129",
    "original_price": "399",
    "category": "Health & Fitness",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 50,
    "status": "active",
    "sort_order": 1,
    "created_at": "2026-10-30T21:50:14.640Z",
    "updated_at": "2026-10-30T21:50:14.640Z"
  },
  {
    "id": "RB-5280",
    "title": "1300+ AI Couple Reels Bundle – Viral Couple Reels for Instagram & YouTube Shorts Growth",
    "description": "Premium AI & Technology pack: 1300+ AI Couple Reels Bundle – Viral Couple Reels for Instagram & YouTube Shorts Growth. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/10/1300-AI-Couple-Reels-Bundle-converted-600x600.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-1300aicoup",
    "password": "BB011300",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 1300,
    "rating": 5,
    "reviews_count": 60,
    "status": "active",
    "sort_order": 1,
    "created_at": "2026-10-30T22:08:58.084Z",
    "updated_at": "2026-10-30T22:08:58.084Z"
  },
  {
    "id": "RB-4441",
    "title": "🚀 80M+ DIGITAL PRODUCTS MEGA DRIVE 🔥",
    "description": "Premium Mega Bundles collection: 🚀 80M+ DIGITAL PRODUCTS MEGA DRIVE 🔥. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793339064098-867527002.png",
    "link": "https://drive.google.com/drive/folders/credible-pack-80mdigital",
    "password": "UNLOCK0280MD",
    "price": "199",
    "original_price": "599",
    "category": "Mega Bundles",
    "tags": "best-seller, trending, mega-pack",
    "reels_count": 80000000,
    "rating": 5,
    "reviews_count": 61,
    "status": "active",
    "sort_order": 2,
    "created_at": "2026-10-30T21:50:17.575Z",
    "updated_at": "2026-10-30T21:50:17.575Z"
  },
  {
    "id": "RB-9147",
    "title": "1800+ Anime Reels Bundle – Premium Viral Reels Bundle for Fast Instagram & TikTok Growth",
    "description": "Premium Animation & Cartoons pack: 1800+ Anime Reels Bundle – Premium Viral Reels Bundle for Fast Instagram & TikTok Growth. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/08/1800-ANIM-REELS-BUNDLE-600x600.jpg",
    "link": "https://drive.google.com/drive/folders/betterbundle-1800animer",
    "password": "BB021800",
    "price": "179",
    "original_price": "499",
    "category": "Animation & Cartoons",
    "tags": "trending, popular",
    "reels_count": 1800,
    "rating": 5,
    "reviews_count": 73,
    "status": "active",
    "sort_order": 2,
    "created_at": "2026-10-30T22:09:03.438Z",
    "updated_at": "2026-10-30T22:09:03.438Z"
  },
  {
    "id": "RB-4460",
    "title": "Job Less Son",
    "description": "Premium Mega Bundles collection: Job Less Son. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793009090795-82788979.png",
    "link": "https://drive.google.com/drive/folders/credible-pack-joblessson",
    "password": "UNLOCK03JOBL",
    "price": "129",
    "original_price": "399",
    "category": "Mega Bundles",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 72,
    "status": "active",
    "sort_order": 3,
    "created_at": "2026-10-30T21:50:20.601Z",
    "updated_at": "2026-10-30T21:50:20.601Z"
  },
  {
    "id": "RB-8674",
    "title": "250+ Anime ASMR Cooking Reels Bundle – Best Cooking Reels Bundle for Instagram Growth",
    "description": "Premium Animation & Cartoons pack: 250+ Anime ASMR Cooking Reels Bundle – Best Cooking Reels Bundle for Instagram Growth. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/08/1-2-600x600.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-250animeas",
    "password": "BB03250A",
    "price": "129",
    "original_price": "399",
    "category": "Animation & Cartoons",
    "tags": "new, trending",
    "reels_count": 250,
    "rating": 5,
    "reviews_count": 86,
    "status": "active",
    "sort_order": 3,
    "created_at": "2026-10-30T22:09:08.144Z",
    "updated_at": "2026-10-30T22:09:08.144Z"
  },
  {
    "id": "RB-3871",
    "title": "The Hollow Hour",
    "description": "Premium Mega Bundles collection: The Hollow Hour. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1792671112936-451361500.png",
    "link": "https://drive.google.com/drive/folders/credible-pack-thehollowh",
    "password": "UNLOCK04THEH",
    "price": "129",
    "original_price": "399",
    "category": "Mega Bundles",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 83,
    "status": "active",
    "sort_order": 4,
    "created_at": "2026-10-30T21:50:23.503Z",
    "updated_at": "2026-10-30T21:50:23.503Z"
  },
  {
    "id": "RB-8589",
    "title": "2500+ Car Reels Bundle Download – Ultimate Way to Grow Instagram & YouTube Shorts Fast",
    "description": "Premium Luxury & Lifestyle pack: 2500+ Car Reels Bundle Download – Ultimate Way to Grow Instagram & YouTube Shorts Fast. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/01/ChatGPT-Image-Apr-30-2026-10_19_41-AM-600x600.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-2500carree",
    "password": "BB042500",
    "price": "179",
    "original_price": "499",
    "category": "Luxury & Lifestyle",
    "tags": "trending, popular",
    "reels_count": 2500,
    "rating": 5,
    "reviews_count": 99,
    "status": "active",
    "sort_order": 4,
    "created_at": "2026-10-30T22:09:12.159Z",
    "updated_at": "2026-10-30T22:09:12.159Z"
  },
  {
    "id": "RB-3347",
    "title": "🔥 1 Million Reels Bundle – All Categories | Premium 3D, AI, Motivation,",
    "description": "Premium AI & Technology collection: 🔥 1 Million Reels Bundle – All Categories | Premium 3D, AI, Motivation,. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793100760490-265148815.png",
    "link": "https://drive.google.com/drive/folders/credible-pack-1millionre",
    "password": "UNLOCK051MIL",
    "price": "199",
    "original_price": "599",
    "category": "AI & Technology",
    "tags": "best-seller, trending, mega-pack",
    "reels_count": 1000000,
    "rating": 5,
    "reviews_count": 94,
    "status": "active",
    "sort_order": 5,
    "created_at": "2026-10-30T21:50:26.303Z",
    "updated_at": "2026-10-30T21:50:26.303Z"
  },
  {
    "id": "RB-6420",
    "title": "600+ Miniature World AI Reels Bundle – Viral Instagram Reels Video for YouTube Shorts",
    "description": "Premium AI & Technology pack: 600+ Miniature World AI Reels Bundle – Viral Instagram Reels Video for YouTube Shorts. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/06/1-2-600x600.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-600miniatu",
    "password": "BB05600M",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 600,
    "rating": 5,
    "reviews_count": 112,
    "status": "active",
    "sort_order": 5,
    "created_at": "2026-10-30T22:09:15.592Z",
    "updated_at": "2026-10-30T22:09:15.592Z"
  },
  {
    "id": "RB-7178",
    "title": "How to Make AI Videos for FREE 🤖 | Best Free AI Video Tools for Beginners (2026",
    "description": "Premium AI & Technology collection: How to Make AI Videos for FREE 🤖 | Best Free AI Video Tools for Beginners (2026. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793100618525-725155886.png",
    "link": "https://drive.google.com/drive/folders/credible-pack-howtomakea",
    "password": "UNLOCK06HOWT",
    "price": "99",
    "original_price": "299",
    "category": "AI & Technology",
    "tags": "special-offer, trending",
    "reels_count": 2026,
    "rating": 5,
    "reviews_count": 105,
    "status": "active",
    "sort_order": 6,
    "created_at": "2026-10-30T21:50:29.138Z",
    "updated_at": "2026-10-30T21:50:29.138Z"
  },
  {
    "id": "RB-5142",
    "title": "800+ Rust Restoration AI Reels Bundle – Viral Reel Bundle for Instagram & YouTube Shorts",
    "description": "Premium AI & Technology pack: 800+ Rust Restoration AI Reels Bundle – Viral Reel Bundle for Instagram & YouTube Shorts. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/05/800-Rust-Restoration-AI-Reels-Bundle-1-600x600.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-800rustres",
    "password": "BB06800R",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 800,
    "rating": 5,
    "reviews_count": 125,
    "status": "active",
    "sort_order": 6,
    "created_at": "2026-10-30T22:09:19.098Z",
    "updated_at": "2026-10-30T22:09:19.098Z"
  },
  {
    "id": "RB-2740",
    "title": "Kannada motivation queot",
    "description": "Premium Motivation & Mindset collection: Kannada motivation queot. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793379977442-935796962.png",
    "link": "https://drive.google.com/drive/folders/credible-pack-kannadamot",
    "password": "UNLOCK07KANN",
    "price": "129",
    "original_price": "399",
    "category": "Motivation & Mindset",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 116,
    "status": "active",
    "sort_order": 7,
    "created_at": "2026-10-30T21:50:32.105Z",
    "updated_at": "2026-10-30T21:50:32.105Z"
  },
  {
    "id": "RB-9157",
    "title": "750+ Abandoned Place Reels Bundle – Best AI Video Bundle to Grow Instagram & YouTube Shorts",
    "description": "Premium AI & Technology pack: 750+ Abandoned Place Reels Bundle – Best AI Video Bundle to Grow Instagram & YouTube Shorts. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/05/1-1-1-600x600.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-750abandon",
    "password": "BB07750A",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 750,
    "rating": 5,
    "reviews_count": 138,
    "status": "active",
    "sort_order": 7,
    "created_at": "2026-10-30T22:09:24.088Z",
    "updated_at": "2026-10-30T22:09:24.088Z"
  },
  {
    "id": "RB-4789",
    "title": "Kids Worksheets",
    "description": "Premium Digital Templates & Guides collection: Kids Worksheets. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/store_18598_1793326733566.png",
    "link": "https://drive.google.com/drive/folders/credible-pack-kidsworksh",
    "password": "UNLOCK08KIDS",
    "price": "129",
    "original_price": "399",
    "category": "Digital Templates & Guides",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 127,
    "status": "active",
    "sort_order": 8,
    "created_at": "2026-10-30T21:50:35.103Z",
    "updated_at": "2026-10-30T21:50:35.103Z"
  },
  {
    "id": "RB-6513",
    "title": "600+ Place Restoration AI Reels Bundle – Viral Way to Grow Instagram & YouTube Shorts Fast",
    "description": "Premium AI & Technology pack: 600+ Place Restoration AI Reels Bundle – Viral Way to Grow Instagram & YouTube Shorts Fast. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/05/1-1-600x600.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-600placere",
    "password": "BB08600P",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 600,
    "rating": 5,
    "reviews_count": 151,
    "status": "active",
    "sort_order": 8,
    "created_at": "2026-10-30T22:09:28.002Z",
    "updated_at": "2026-10-30T22:09:28.002Z"
  },
  {
    "id": "RB-3316",
    "title": "4000+ Viral Ulti Duniya AI Cartoon Reels Bundle 2026 | Funny Desi Cartoon Storie",
    "description": "Premium AI & Technology collection: 4000+ Viral Ulti Duniya AI Cartoon Reels Bundle 2026 | Funny Desi Cartoon Storie. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793366482933-847660695.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-4000viralu",
    "password": "UNLOCK094000",
    "price": "179",
    "original_price": "499",
    "category": "AI & Technology",
    "tags": "trending, popular",
    "reels_count": 4000,
    "rating": 5,
    "reviews_count": 138,
    "status": "active",
    "sort_order": 9,
    "created_at": "2026-10-30T21:50:37.563Z",
    "updated_at": "2026-10-30T21:50:37.563Z"
  },
  {
    "id": "RB-5062",
    "title": "500+ Floor Transformation AI Reels Bundle – Stunning Viral Floor Effects for Explosive Growth in 2026",
    "description": "Premium AI & Technology pack: 500+ Floor Transformation AI Reels Bundle – Stunning Viral Floor Effects for Explosive Growth in 2026. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/02/500-Floor-Transformation-Ai-Reels-Bundle-1.jpg",
    "link": "https://drive.google.com/drive/folders/betterbundle-500floortr",
    "password": "BB09500F",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 164,
    "status": "active",
    "sort_order": 9,
    "created_at": "2026-10-30T22:09:33.130Z",
    "updated_at": "2026-10-30T22:09:33.130Z"
  },
  {
    "id": "RB-4781",
    "title": "3000+ Viral AI Baby Reels Bundle 2026 | Kuchu Puchu Cute & Funny Videos |",
    "description": "Premium AI & Technology collection: 3000+ Viral AI Baby Reels Bundle 2026 | Kuchu Puchu Cute & Funny Videos |. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793366122722-671249957.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-3000virala",
    "password": "UNLOCK103000",
    "price": "179",
    "original_price": "499",
    "category": "AI & Technology",
    "tags": "trending, popular",
    "reels_count": 3000,
    "rating": 5,
    "reviews_count": 149,
    "status": "active",
    "sort_order": 10,
    "created_at": "2026-10-30T21:50:41.313Z",
    "updated_at": "2026-10-30T21:50:41.313Z"
  },
  {
    "id": "RB-8870",
    "title": "250+ AI Hulk Reels – Powerful Hulk Story Reels for Viral Instagram Growth",
    "description": "Premium Animation & Cartoons pack: 250+ AI Hulk Reels – Powerful Hulk Story Reels for Viral Instagram Growth. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/01/250-Ai-Hulk-Story-Reels-Bundle.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-250aihulkr",
    "password": "BB10250A",
    "price": "129",
    "original_price": "399",
    "category": "Animation & Cartoons",
    "tags": "new, trending",
    "reels_count": 250,
    "rating": 5,
    "reviews_count": 177,
    "status": "active",
    "sort_order": 10,
    "created_at": "2026-10-30T22:09:36.501Z",
    "updated_at": "2026-10-30T22:09:36.501Z"
  },
  {
    "id": "RB-8362",
    "title": "Templates (Dhanteras, Diwali, Govardhan Puja, Bhai Dooj, Chhath, Kartik Purnima)",
    "description": "Premium Digital Templates & Guides collection: Templates (Dhanteras, Diwali, Govardhan Puja, Bhai Dooj, Chhath, Kartik Purnima). Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793364293264-986837926.png",
    "link": "https://drive.google.com/drive/folders/credible-pack-templatesd",
    "password": "UNLOCK11TEMP",
    "price": "129",
    "original_price": "399",
    "category": "Digital Templates & Guides",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 160,
    "status": "active",
    "sort_order": 11,
    "created_at": "2026-10-30T21:50:45.567Z",
    "updated_at": "2026-10-30T21:50:45.567Z"
  },
  {
    "id": "RB-1761",
    "title": "450+ Health Awareness AI Reels Bundle – Powerful Viral Health Content for Explosive Growth in 2025",
    "description": "Premium Health & Fitness pack: 450+ Health Awareness AI Reels Bundle – Powerful Viral Health Content for Explosive Growth in 2025. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/02/450-Health-Awareness-Ai-Reels-Bundle-1.jpg",
    "link": "https://drive.google.com/drive/folders/betterbundle-450healtha",
    "password": "BB11450H",
    "price": "129",
    "original_price": "399",
    "category": "Health & Fitness",
    "tags": "new, trending",
    "reels_count": 450,
    "rating": 5,
    "reviews_count": 190,
    "status": "active",
    "sort_order": 11,
    "created_at": "2026-10-30T22:09:41.095Z",
    "updated_at": "2026-10-30T22:09:41.095Z"
  },
  {
    "id": "RB-1816",
    "title": "ARTIFICIAL INTELLIGENCE-UNLOCKED",
    "description": "Premium AI & Technology collection: ARTIFICIAL INTELLIGENCE-UNLOCKED. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793362050215-771622387.png",
    "link": "https://drive.google.com/drive/folders/credible-pack-artificial",
    "password": "UNLOCK12ARTI",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 171,
    "status": "active",
    "sort_order": 12,
    "created_at": "2026-10-30T21:50:49.401Z",
    "updated_at": "2026-10-30T21:50:49.401Z"
  },
  {
    "id": "RB-5940",
    "title": "800+ AI Horror Reels – Terrifying Viral Horror Content for Explosive Growth",
    "description": "Premium Luxury & Lifestyle pack: 800+ AI Horror Reels – Terrifying Viral Horror Content for Explosive Growth. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/01/800-AI-Horror-Reels-bundle-1.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-800aihorro",
    "password": "BB12800A",
    "price": "129",
    "original_price": "399",
    "category": "Luxury & Lifestyle",
    "tags": "new, trending",
    "reels_count": 800,
    "rating": 5,
    "reviews_count": 203,
    "status": "active",
    "sort_order": 12,
    "created_at": "2026-10-30T22:09:46.912Z",
    "updated_at": "2026-10-30T22:09:46.912Z"
  },
  {
    "id": "RB-1921",
    "title": "Dua for Rizq, Business Barakah & Success with Arabic & English.",
    "description": "Premium Earning & Wealth collection: Dua for Rizq, Business Barakah & Success with Arabic & English.. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793360175910-540635504.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-duaforrizq",
    "password": "UNLOCK13DUAF",
    "price": "129",
    "original_price": "399",
    "category": "Earning & Wealth",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 182,
    "status": "active",
    "sort_order": 13,
    "created_at": "2026-10-30T21:50:52.534Z",
    "updated_at": "2026-10-30T21:50:52.534Z"
  },
  {
    "id": "RB-1915",
    "title": "200 Valkyrie AI Reels Bundle Download – Best Way to Grow Instagram & YouTube Shorts Fast",
    "description": "Premium Animation & Cartoons pack: 200 Valkyrie AI Reels Bundle Download – Best Way to Grow Instagram & YouTube Shorts Fast. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/04/2001.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-200valkyri",
    "password": "BB13200V",
    "price": "129",
    "original_price": "399",
    "category": "Animation & Cartoons",
    "tags": "new, trending",
    "reels_count": 200,
    "rating": 5,
    "reviews_count": 216,
    "status": "active",
    "sort_order": 13,
    "created_at": "2026-10-30T22:09:49.923Z",
    "updated_at": "2026-10-30T22:09:49.923Z"
  },
  {
    "id": "RB-8251",
    "title": "100 funny AI video prompts",
    "description": "Premium AI & Technology collection: 100 funny AI video prompts. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793359864539-989335293.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-100funnyai",
    "password": "UNLOCK14100F",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 100,
    "rating": 5,
    "reviews_count": 193,
    "status": "active",
    "sort_order": 14,
    "created_at": "2026-10-30T21:50:55.341Z",
    "updated_at": "2026-10-30T21:50:55.341Z"
  },
  {
    "id": "RB-9397",
    "title": "150+ Dog Dancing Reels Bundle Download – Viral Way to Grow Instagram & YouTube Shorts Fast",
    "description": "Premium Animation & Cartoons pack: 150+ Dog Dancing Reels Bundle Download – Viral Way to Grow Instagram & YouTube Shorts Fast. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/04/150.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-150dogdanc",
    "password": "BB14150D",
    "price": "129",
    "original_price": "399",
    "category": "Animation & Cartoons",
    "tags": "new, trending",
    "reels_count": 150,
    "rating": 5,
    "reviews_count": 229,
    "status": "active",
    "sort_order": 14,
    "created_at": "2026-10-30T22:09:52.940Z",
    "updated_at": "2026-10-30T22:09:52.940Z"
  },
  {
    "id": "RB-9956",
    "title": "3000+ Doraemon Cartoon Reels Bundle 2026 | HD Cartoon Video Collection |",
    "description": "Premium Animation & Cartoons collection: 3000+ Doraemon Cartoon Reels Bundle 2026 | HD Cartoon Video Collection |. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793348840383-829589450.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-3000doraem",
    "password": "UNLOCK153000",
    "price": "179",
    "original_price": "499",
    "category": "Animation & Cartoons",
    "tags": "trending, popular",
    "reels_count": 3000,
    "rating": 5,
    "reviews_count": 204,
    "status": "active",
    "sort_order": 15,
    "created_at": "2026-10-30T21:50:58.331Z",
    "updated_at": "2026-10-30T21:50:58.331Z"
  },
  {
    "id": "RB-2750",
    "title": "700+ Cute AI Monster Reels Bundle Download – Best Viral Instagram Pack (Instant Access)",
    "description": "Premium Animation & Cartoons pack: 700+ Cute AI Monster Reels Bundle Download – Best Viral Instagram Pack (Instant Access). Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/03/700-Cute-Ai-Monster-product-image-1.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-700cuteaim",
    "password": "BB15700C",
    "price": "129",
    "original_price": "399",
    "category": "Animation & Cartoons",
    "tags": "new, trending",
    "reels_count": 700,
    "rating": 5,
    "reviews_count": 242,
    "status": "active",
    "sort_order": 15,
    "created_at": "2026-10-30T22:09:56.845Z",
    "updated_at": "2026-10-30T22:09:56.845Z"
  },
  {
    "id": "RB-7260",
    "title": "THE CANVA INCOME GUIDE From Beginner to Earner",
    "description": "Premium Digital Templates & Guides collection: THE CANVA INCOME GUIDE From Beginner to Earner. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793347910997-344448188.jpeg",
    "link": "https://drive.google.com/drive/folders/credible-pack-thecanvain",
    "password": "UNLOCK16THEC",
    "price": "149",
    "original_price": "449",
    "category": "Digital Templates & Guides",
    "tags": "instant-download, popular",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 215,
    "status": "active",
    "sort_order": 16,
    "created_at": "2026-10-30T21:51:01.382Z",
    "updated_at": "2026-10-30T21:51:01.382Z"
  },
  {
    "id": "RB-8725",
    "title": "1000 AI Animal Vlogging Bundle Download – Viral Way to Grow Instagram & YouTube Shorts Fast",
    "description": "Premium AI & Technology pack: 1000 AI Animal Vlogging Bundle Download – Viral Way to Grow Instagram & YouTube Shorts Fast. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/12/AI_Animal%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86ics_Bundle_202604091508.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-1000aianim",
    "password": "BB161000",
    "price": "179",
    "original_price": "499",
    "category": "AI & Technology",
    "tags": "trending, popular",
    "reels_count": 1000,
    "rating": 5,
    "reviews_count": 255,
    "status": "active",
    "sort_order": 16,
    "created_at": "2026-10-30T22:10:00.722Z",
    "updated_at": "2026-10-30T22:10:00.722Z"
  },
  {
    "id": "RB-1748",
    "title": "4k quality videos top editor",
    "description": "Premium Mega Bundles collection: 4k quality videos top editor. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793003353221-150540740.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-4kqualityv",
    "password": "UNLOCK174KQU",
    "price": "179",
    "original_price": "499",
    "category": "Mega Bundles",
    "tags": "trending, popular",
    "reels_count": 4000,
    "rating": 5,
    "reviews_count": 226,
    "status": "active",
    "sort_order": 17,
    "created_at": "2026-10-30T21:51:05.358Z",
    "updated_at": "2026-10-30T21:51:05.358Z"
  },
  {
    "id": "RB-4411",
    "title": "400+ Horror Reels Bundle Download – Ultimate Way to Grow Instagram & YouTube Shorts Fast",
    "description": "Premium Luxury & Lifestyle pack: 400+ Horror Reels Bundle Download – Ultimate Way to Grow Instagram & YouTube Shorts Fast. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/04/400-Ugly-Reels-Bundle.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-400horrorr",
    "password": "BB17400H",
    "price": "129",
    "original_price": "399",
    "category": "Luxury & Lifestyle",
    "tags": "new, trending",
    "reels_count": 400,
    "rating": 5,
    "reviews_count": 268,
    "status": "active",
    "sort_order": 17,
    "created_at": "2026-10-30T22:10:04.158Z",
    "updated_at": "2026-10-30T22:10:04.158Z"
  },
  {
    "id": "RB-5550",
    "title": "4000+ Ulti Duniya Reels Bundle",
    "description": "Premium Animation & Cartoons collection: 4000+ Ulti Duniya Reels Bundle. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1792994276748-119778980.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-4000ultidu",
    "password": "UNLOCK184000",
    "price": "179",
    "original_price": "499",
    "category": "Animation & Cartoons",
    "tags": "trending, popular",
    "reels_count": 4000,
    "rating": 5,
    "reviews_count": 237,
    "status": "active",
    "sort_order": 18,
    "created_at": "2026-10-30T21:51:08.817Z",
    "updated_at": "2026-10-30T21:51:08.817Z"
  },
  {
    "id": "RB-4223",
    "title": "1000+ Luxury Lifestyle Reels Bundle – Premium Viral Content for Powerful Instagram Growth in 2026",
    "description": "Premium Luxury & Lifestyle pack: 1000+ Luxury Lifestyle Reels Bundle – Premium Viral Content for Powerful Instagram Growth in 2026. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/08/1000gg.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-1000luxury",
    "password": "BB181000",
    "price": "179",
    "original_price": "499",
    "category": "Luxury & Lifestyle",
    "tags": "trending, popular",
    "reels_count": 1000,
    "rating": 5,
    "reviews_count": 281,
    "status": "active",
    "sort_order": 18,
    "created_at": "2026-10-30T22:10:08.325Z",
    "updated_at": "2026-10-30T22:10:08.325Z"
  },
  {
    "id": "RB-1750",
    "title": "MINECRAFT REEL BUBDELS",
    "description": "Premium Gaming & Esports collection: MINECRAFT REEL BUBDELS. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1792829516518-663828337.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-minecraftr",
    "password": "UNLOCK19MINE",
    "price": "129",
    "original_price": "399",
    "category": "Gaming & Esports",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 248,
    "status": "active",
    "sort_order": 19,
    "created_at": "2026-10-30T21:51:13.199Z",
    "updated_at": "2026-10-30T21:51:13.199Z"
  },
  {
    "id": "RB-2798",
    "title": "1200+ Gym Workout Videos Bundle – Powerful Animated Fitness Training Videos for Explosive Results",
    "description": "Premium Software & Tools pack: 1200+ Gym Workout Videos Bundle – Powerful Animated Fitness Training Videos for Explosive Results. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/09/1200.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-1200gymwor",
    "password": "BB191200",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 294,
    "status": "active",
    "sort_order": 19,
    "created_at": "2026-10-30T22:10:11.887Z",
    "updated_at": "2026-10-30T22:10:11.887Z"
  },
  {
    "id": "RB-4296",
    "title": "2000+ ANIME REELS BUNDLE",
    "description": "Premium Animation & Cartoons collection: 2000+ ANIME REELS BUNDLE. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1792940063508-494345690.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-2000animer",
    "password": "UNLOCK202000",
    "price": "179",
    "original_price": "499",
    "category": "Animation & Cartoons",
    "tags": "trending, popular",
    "reels_count": 2000,
    "rating": 5,
    "reviews_count": 259,
    "status": "active",
    "sort_order": 20,
    "created_at": "2026-10-30T21:51:16.803Z",
    "updated_at": "2026-10-30T21:51:16.803Z"
  },
  {
    "id": "RB-4892",
    "title": "750+ Unreality AI Reels Bundle – Insane Viral AI Reels for Explosive Instagram Growth in 2026",
    "description": "Premium Luxury & Lifestyle pack: 750+ Unreality AI Reels Bundle – Insane Viral AI Reels for Explosive Instagram Growth in 2026. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/02/750-Unreality-Ai-Reels-Bundle-1-1.jpg",
    "link": "https://drive.google.com/drive/folders/betterbundle-750unreali",
    "password": "BB20750U",
    "price": "129",
    "original_price": "399",
    "category": "Luxury & Lifestyle",
    "tags": "new, trending",
    "reels_count": 750,
    "rating": 5,
    "reviews_count": 307,
    "status": "active",
    "sort_order": 20,
    "created_at": "2026-10-30T22:10:16.447Z",
    "updated_at": "2026-10-30T22:10:16.447Z"
  },
  {
    "id": "RB-7699",
    "title": "Premium Thumbnail Materials 💀",
    "description": "Premium Digital Templates & Guides collection: Premium Thumbnail Materials 💀. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793128103211-620522930.png",
    "link": "https://drive.google.com/drive/folders/credible-pack-premiumthu",
    "password": "UNLOCK21PREM",
    "price": "129",
    "original_price": "399",
    "category": "Digital Templates & Guides",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 270,
    "status": "active",
    "sort_order": 21,
    "created_at": "2026-10-30T21:51:19.295Z",
    "updated_at": "2026-10-30T21:51:19.295Z"
  },
  {
    "id": "RB-3842",
    "title": "1000+ Motivational Reels Bundle – Powerful Viral Motivation Videos for Explosive Growth",
    "description": "Premium Motivation & Mindset pack: 1000+ Motivational Reels Bundle – Powerful Viral Motivation Videos for Explosive Growth. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/11/1000-Money-Motivational-Reels-Bundle.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-1000motiva",
    "password": "BB211000",
    "price": "179",
    "original_price": "499",
    "category": "Motivation & Mindset",
    "tags": "trending, popular",
    "reels_count": 1000,
    "rating": 5,
    "reviews_count": 320,
    "status": "active",
    "sort_order": 21,
    "created_at": "2026-10-30T22:10:18.805Z",
    "updated_at": "2026-10-30T22:10:18.805Z"
  },
  {
    "id": "RB-9698",
    "title": "🔥 Kaushik’s $50 Premium Master PDF — Now at an Affordable Price! 💸",
    "description": "Premium Digital Templates & Guides collection: 🔥 Kaushik’s $50 Premium Master PDF — Now at an Affordable Price! 💸. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1792931658647-825150042.webp",
    "link": "https://drive.google.com/drive/folders/credible-pack-kaushiks50",
    "password": "UNLOCK22KAUS",
    "price": "149",
    "original_price": "449",
    "category": "Digital Templates & Guides",
    "tags": "instant-download, popular",
    "reels_count": 50,
    "rating": 5,
    "reviews_count": 281,
    "status": "active",
    "sort_order": 22,
    "created_at": "2026-10-30T21:51:22.111Z",
    "updated_at": "2026-10-30T21:51:22.111Z"
  },
  {
    "id": "RB-3266",
    "title": "Launch a Digital Product Website",
    "description": "Premium Mega Bundles pack: Launch a Digital Product Website. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/03/Untitled-design-4.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-launchadig",
    "password": "BB22LAUN",
    "price": "129",
    "original_price": "399",
    "category": "Mega Bundles",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 333,
    "status": "active",
    "sort_order": 22,
    "created_at": "2026-10-30T22:10:22.818Z",
    "updated_at": "2026-10-30T22:10:22.818Z"
  },
  {
    "id": "RB-6686",
    "title": "Money and Career",
    "description": "Premium Earning & Wealth collection: Money and Career. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793047389835-527992491.png",
    "link": "https://drive.google.com/drive/folders/credible-pack-moneyandca",
    "password": "UNLOCK23MONE",
    "price": "129",
    "original_price": "399",
    "category": "Earning & Wealth",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 292,
    "status": "active",
    "sort_order": 23,
    "created_at": "2026-10-30T21:51:25.313Z",
    "updated_at": "2026-10-30T21:51:25.313Z"
  },
  {
    "id": "RB-6750",
    "title": "1100+ Cute AI Toons Reels Bundle – Powerful Cute Cartoon Content for Viral Growth",
    "description": "Premium Animation & Cartoons pack: 1100+ Cute AI Toons Reels Bundle – Powerful Cute Cartoon Content for Viral Growth. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/01/1100-Cute-Ai-Toons-Reels-Bundle-1-1.jpg",
    "link": "https://drive.google.com/drive/folders/betterbundle-1100cuteai",
    "password": "BB231100",
    "price": "129",
    "original_price": "399",
    "category": "Animation & Cartoons",
    "tags": "new, trending",
    "reels_count": 1100,
    "rating": 5,
    "reviews_count": 346,
    "status": "active",
    "sort_order": 23,
    "created_at": "2026-10-30T22:10:26.333Z",
    "updated_at": "2026-10-30T22:10:26.333Z"
  },
  {
    "id": "RB-3583",
    "title": "📘 Screen Smart – End the Daily Phone & Gaming Battle at Home",
    "description": "Premium Gaming & Esports collection: 📘 Screen Smart – End the Daily Phone & Gaming Battle at Home. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793298784182-339881401.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-screensmar",
    "password": "UNLOCK24SCRE",
    "price": "129",
    "original_price": "399",
    "category": "Gaming & Esports",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 303,
    "status": "active",
    "sort_order": 24,
    "created_at": "2026-10-30T21:51:28.595Z",
    "updated_at": "2026-10-30T21:51:28.595Z"
  },
  {
    "id": "RB-6961",
    "title": "1000+ AI Reels Bundle – Ultimate Viral Caught On Camera Reels Bundle for Explosive Growth",
    "description": "Premium AI & Technology pack: 1000+ AI Reels Bundle – Ultimate Viral Caught On Camera Reels Bundle for Explosive Growth. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/01/1000-Caught-On-Camera-Ai-Reels-Bundle-1-1.jpg",
    "link": "https://drive.google.com/drive/folders/betterbundle-1000aireel",
    "password": "BB241000",
    "price": "179",
    "original_price": "499",
    "category": "AI & Technology",
    "tags": "trending, popular",
    "reels_count": 1000,
    "rating": 5,
    "reviews_count": 359,
    "status": "active",
    "sort_order": 24,
    "created_at": "2026-10-30T22:10:29.657Z",
    "updated_at": "2026-10-30T22:10:29.657Z"
  },
  {
    "id": "RB-6455",
    "title": "Automated Solar Power Plant Bill of Quantities (BOQ) – Excel Workbook",
    "description": "Premium Digital Templates & Guides collection: Automated Solar Power Plant Bill of Quantities (BOQ) – Excel Workbook. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793273767084-946345219.jpeg",
    "link": "https://drive.google.com/drive/folders/credible-pack-automateds",
    "password": "UNLOCK25AUTO",
    "price": "149",
    "original_price": "449",
    "category": "Digital Templates & Guides",
    "tags": "instant-download, popular",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 314,
    "status": "active",
    "sort_order": 25,
    "created_at": "2026-10-30T21:51:32.646Z",
    "updated_at": "2026-10-30T21:51:32.646Z"
  },
  {
    "id": "RB-8159",
    "title": "1200+ Cute Baby AI Reels Bundle – Powerful Viral Reels Bundle for Fast Growth",
    "description": "Premium Animation & Cartoons pack: 1200+ Cute Baby AI Reels Bundle – Powerful Viral Reels Bundle for Fast Growth. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/01/1200-Cute-Baby-Ai-Reels-Bundle-1.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-1200cuteba",
    "password": "BB251200",
    "price": "179",
    "original_price": "499",
    "category": "Animation & Cartoons",
    "tags": "trending, popular",
    "reels_count": 1200,
    "rating": 5,
    "reviews_count": 372,
    "status": "active",
    "sort_order": 25,
    "created_at": "2026-10-30T22:10:33.703Z",
    "updated_at": "2026-10-30T22:10:33.703Z"
  },
  {
    "id": "RB-8285",
    "title": "Premium Digital Products – Instant Download",
    "description": "Premium Mega Bundles collection: Premium Digital Products – Instant Download. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793270657503-13943420.png",
    "link": "https://drive.google.com/drive/folders/credible-pack-premiumdig",
    "password": "UNLOCK26PREM",
    "price": "129",
    "original_price": "399",
    "category": "Mega Bundles",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 325,
    "status": "active",
    "sort_order": 26,
    "created_at": "2026-10-30T21:51:36.317Z",
    "updated_at": "2026-10-30T21:51:36.317Z"
  },
  {
    "id": "RB-9385",
    "title": "200+ Futuristic AI Reels Bundle – Powerful Machine Reels for Viral Growth in 2026",
    "description": "Premium AI & Technology pack: 200+ Futuristic AI Reels Bundle – Powerful Machine Reels for Viral Growth in 2026. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/02/1-1.jpg",
    "link": "https://drive.google.com/drive/folders/betterbundle-200futuris",
    "password": "BB26200F",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 200,
    "rating": 5,
    "reviews_count": 385,
    "status": "active",
    "sort_order": 26,
    "created_at": "2026-10-30T22:10:38.124Z",
    "updated_at": "2026-10-30T22:10:38.124Z"
  },
  {
    "id": "RB-4885",
    "title": "Creator’s Biggest Editing Pack – All-in-One Creator Bundle | Just ₹99",
    "description": "Premium Mega Bundles collection: Creator’s Biggest Editing Pack – All-in-One Creator Bundle | Just ₹99. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793034649390-54981144.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-creatorsbi",
    "password": "UNLOCK27CREA",
    "price": "129",
    "original_price": "399",
    "category": "Mega Bundles",
    "tags": "new, trending",
    "reels_count": 99,
    "rating": 5,
    "reviews_count": 336,
    "status": "active",
    "sort_order": 27,
    "created_at": "2026-10-30T21:51:40.199Z",
    "updated_at": "2026-10-30T21:51:40.199Z"
  },
  {
    "id": "RB-8301",
    "title": "250+ Baby Food Eating AI Reels Bundle – Irresistible Viral Baby Reels for Explosive Growth in 2025",
    "description": "Premium Animation & Cartoons pack: 250+ Baby Food Eating AI Reels Bundle – Irresistible Viral Baby Reels for Explosive Growth in 2025. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/02/250-Baby-Food-Eating-Food-Ai-Reels-Bundle-1.jpg",
    "link": "https://drive.google.com/drive/folders/betterbundle-250babyfoo",
    "password": "BB27250B",
    "price": "129",
    "original_price": "399",
    "category": "Animation & Cartoons",
    "tags": "new, trending",
    "reels_count": 250,
    "rating": 5,
    "reviews_count": 398,
    "status": "active",
    "sort_order": 27,
    "created_at": "2026-10-30T22:10:42.536Z",
    "updated_at": "2026-10-30T22:10:42.536Z"
  },
  {
    "id": "RB-7590",
    "title": "🔥 METABOLIC RESET 90: Melt Fat & Build Lean Muscle in 90 Days! ⚡🚀",
    "description": "Premium Health & Fitness collection: 🔥 METABOLIC RESET 90: Melt Fat & Build Lean Muscle in 90 Days! ⚡🚀. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793126705575-615913921.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-metabolicr",
    "password": "UNLOCK28META",
    "price": "129",
    "original_price": "399",
    "category": "Health & Fitness",
    "tags": "new, trending",
    "reels_count": 90,
    "rating": 5,
    "reviews_count": 347,
    "status": "active",
    "sort_order": 28,
    "created_at": "2026-10-30T21:51:43.556Z",
    "updated_at": "2026-10-30T21:51:43.556Z"
  },
  {
    "id": "RB-6916",
    "title": "600+ Viral AI Reporting & Vlogging Reels Bundle – Boost Engagement & Grow Fast – HD AI Reels for Social Media Creators",
    "description": "Premium AI & Technology pack: 600+ Viral AI Reporting & Vlogging Reels Bundle – Boost Engagement & Grow Fast – HD AI Reels for Social Media Creators. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/08/1.jpg",
    "link": "https://drive.google.com/drive/folders/betterbundle-600viralai",
    "password": "BB28600V",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 600,
    "rating": 5,
    "reviews_count": 411,
    "status": "active",
    "sort_order": 28,
    "created_at": "2026-10-30T22:10:46.665Z",
    "updated_at": "2026-10-30T22:10:46.665Z"
  },
  {
    "id": "RB-1654",
    "title": "How to earn from ai",
    "description": "Premium AI & Technology collection: How to earn from ai. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793042989901-672179476.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-howtoearnf",
    "password": "UNLOCK29HOWT",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 358,
    "status": "active",
    "sort_order": 29,
    "created_at": "2026-10-30T21:51:46.406Z",
    "updated_at": "2026-10-30T21:51:46.406Z"
  },
  {
    "id": "RB-7032",
    "title": "500+ AI Monkey Vlogs Style Vlogging Video Bundle | Viral AI Video Pack",
    "description": "Premium AI & Technology pack: 500+ AI Monkey Vlogs Style Vlogging Video Bundle | Viral AI Video Pack. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/09/www.bettterbundle.in_.jpg",
    "link": "https://drive.google.com/drive/folders/betterbundle-500aimonke",
    "password": "BB29500A",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 424,
    "status": "active",
    "sort_order": 29,
    "created_at": "2026-10-30T22:10:50.829Z",
    "updated_at": "2026-10-30T22:10:50.829Z"
  },
  {
    "id": "RB-5894",
    "title": "premium Instagram Social Media Template Bundle.",
    "description": "Premium Digital Templates & Guides collection: premium Instagram Social Media Template Bundle.. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793035267709-252758265.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-premiumins",
    "password": "UNLOCK30PREM",
    "price": "129",
    "original_price": "399",
    "category": "Digital Templates & Guides",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 369,
    "status": "active",
    "sort_order": 30,
    "created_at": "2026-10-30T21:51:49.243Z",
    "updated_at": "2026-10-30T21:51:49.243Z"
  },
  {
    "id": "RB-8466",
    "title": "1200+ Glass Cutting Reels Bundle – Premium Viral Reels Bundle with AI ASMR Style Satisfying Clips (Amazing Results)",
    "description": "Premium Animation & Cartoons pack: 1200+ Glass Cutting Reels Bundle – Premium Viral Reels Bundle with AI ASMR Style Satisfying Clips (Amazing Results). Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/08/1200-GLASS-CUTTING-AI-ASMR-REELS-BUNDLE-1.jpg",
    "link": "https://drive.google.com/drive/folders/betterbundle-1200glassc",
    "password": "BB301200",
    "price": "179",
    "original_price": "499",
    "category": "Animation & Cartoons",
    "tags": "trending, popular",
    "reels_count": 1200,
    "rating": 5,
    "reviews_count": 437,
    "status": "active",
    "sort_order": 30,
    "created_at": "2026-10-30T22:10:54.271Z",
    "updated_at": "2026-10-30T22:10:54.271Z"
  },
  {
    "id": "RB-8980",
    "title": "Class 9 Civics – Democracy Notes PDF | Easy Revision & Exam Preparation 📚",
    "description": "Premium Digital Templates & Guides collection: Class 9 Civics – Democracy Notes PDF | Easy Revision & Exam Preparation 📚. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793109997018-706028916.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-class9civi",
    "password": "UNLOCK31CLAS",
    "price": "149",
    "original_price": "449",
    "category": "Digital Templates & Guides",
    "tags": "instant-download, popular",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 380,
    "status": "active",
    "sort_order": 31,
    "created_at": "2026-10-30T21:51:51.800Z",
    "updated_at": "2026-10-30T21:51:51.800Z"
  },
  {
    "id": "RB-3930",
    "title": "100+ AI ASMR Baby Fruit Eating Reels Bundle – The Ultimate Viral Reels Bundle for Fast Growth in 2026",
    "description": "Premium Animation & Cartoons pack: 100+ AI ASMR Baby Fruit Eating Reels Bundle – The Ultimate Viral Reels Bundle for Fast Growth in 2026. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/11/1.jpg",
    "link": "https://drive.google.com/drive/folders/betterbundle-100aiasmrb",
    "password": "BB31100A",
    "price": "129",
    "original_price": "399",
    "category": "Animation & Cartoons",
    "tags": "new, trending",
    "reels_count": 100,
    "rating": 5,
    "reviews_count": 450,
    "status": "active",
    "sort_order": 31,
    "created_at": "2026-10-30T22:10:58.335Z",
    "updated_at": "2026-10-30T22:10:58.335Z"
  },
  {
    "id": "RB-2886",
    "title": "1000+ AI Health Reels Bundle 🌿💚 | Healthy Lifestyle & Fitness Videos |",
    "description": "Premium Health & Fitness collection: 1000+ AI Health Reels Bundle 🌿💚 | Healthy Lifestyle & Fitness Videos |. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793102233799-881284780.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-1000aiheal",
    "password": "UNLOCK321000",
    "price": "129",
    "original_price": "399",
    "category": "Health & Fitness",
    "tags": "new, trending",
    "reels_count": 1000,
    "rating": 5,
    "reviews_count": 391,
    "status": "active",
    "sort_order": 32,
    "created_at": "2026-10-30T21:51:55.022Z",
    "updated_at": "2026-10-30T21:51:55.022Z"
  },
  {
    "id": "RB-9224",
    "title": "1000+ Interior Design Reels Bundle – Premium High-Impact & Irresistible Reels for Architects & Designers",
    "description": "Premium Luxury & Lifestyle pack: 1000+ Interior Design Reels Bundle – Premium High-Impact & Irresistible Reels for Architects & Designers. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/12/Untitled-design-4.jpg",
    "link": "https://drive.google.com/drive/folders/betterbundle-1000interi",
    "password": "BB321000",
    "price": "179",
    "original_price": "499",
    "category": "Luxury & Lifestyle",
    "tags": "trending, popular",
    "reels_count": 1000,
    "rating": 5,
    "reviews_count": 63,
    "status": "active",
    "sort_order": 32,
    "created_at": "2026-10-30T22:11:01.845Z",
    "updated_at": "2026-10-30T22:11:01.845Z"
  },
  {
    "id": "RB-5480",
    "title": "1000+ SELF COOKING AI VIDEOS",
    "description": "Premium AI & Technology collection: 1000+ SELF COOKING AI VIDEOS. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793117211411-129129735.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-1000selfco",
    "password": "UNLOCK331000",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 1000,
    "rating": 5,
    "reviews_count": 402,
    "status": "active",
    "sort_order": 33,
    "created_at": "2026-10-30T21:51:57.981Z",
    "updated_at": "2026-10-30T21:51:57.981Z"
  },
  {
    "id": "RB-4283",
    "title": "AI Story Reels Bundle – Viral Reels for Instagram Growth in 2026 (Trending Content)",
    "description": "Premium AI & Technology pack: AI Story Reels Bundle – Viral Reels for Instagram Growth in 2026 (Trending Content). Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/11/Betterbundle.in-1-1-600x600.jpg",
    "link": "https://drive.google.com/drive/folders/betterbundle-aistoryree",
    "password": "BB33AIST",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 2026,
    "rating": 5,
    "reviews_count": 76,
    "status": "active",
    "sort_order": 33,
    "created_at": "2026-10-30T22:11:05.559Z",
    "updated_at": "2026-10-30T22:11:05.559Z"
  },
  {
    "id": "RB-3708",
    "title": "3000+ ULTI DUNIYA VIRAL REELS BUNDLE 🔥",
    "description": "Premium Animation & Cartoons collection: 3000+ ULTI DUNIYA VIRAL REELS BUNDLE 🔥. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793176341823-558691789.png",
    "link": "https://drive.google.com/drive/folders/credible-pack-3000ultidu",
    "password": "UNLOCK343000",
    "price": "179",
    "original_price": "499",
    "category": "Animation & Cartoons",
    "tags": "trending, popular",
    "reels_count": 3000,
    "rating": 5,
    "reviews_count": 413,
    "status": "active",
    "sort_order": 34,
    "created_at": "2026-10-30T21:52:00.387Z",
    "updated_at": "2026-10-30T21:52:00.387Z"
  },
  {
    "id": "RB-3273",
    "title": "500 Interior Design Reels Bundle – Premium Viral Reels Bundle for Architects & Designers (Stunning Results)",
    "description": "Premium Luxury & Lifestyle pack: 500 Interior Design Reels Bundle – Premium Viral Reels Bundle for Architects & Designers (Stunning Results). Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/08/1-1-600x600.jpg",
    "link": "https://drive.google.com/drive/folders/betterbundle-500interio",
    "password": "BB34500I",
    "price": "129",
    "original_price": "399",
    "category": "Luxury & Lifestyle",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 89,
    "status": "active",
    "sort_order": 34,
    "created_at": "2026-10-30T22:11:08.828Z",
    "updated_at": "2026-10-30T22:11:08.828Z"
  },
  {
    "id": "RB-8136",
    "title": "2000+ MAD SCIENTIST REELS BUNDLE",
    "description": "Premium Mega Bundles collection: 2000+ MAD SCIENTIST REELS BUNDLE. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1784878825354-700090120.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-2000madsci",
    "password": "UNLOCK352000",
    "price": "179",
    "original_price": "499",
    "category": "Mega Bundles",
    "tags": "trending, popular",
    "reels_count": 2000,
    "rating": 5,
    "reviews_count": 424,
    "status": "active",
    "sort_order": 35,
    "created_at": "2026-10-30T21:52:04.037Z",
    "updated_at": "2026-10-30T21:52:04.037Z"
  },
  {
    "id": "RB-6664",
    "title": "500+ Viral Reels Bundle for Instagram Growth – Download Viral Reels (70% OFF)",
    "description": "Premium Mega Bundles pack: 500+ Viral Reels Bundle for Instagram Growth – Download Viral Reels (70% OFF). Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/09/500-VIRAL-REELS-BUNDLE-600x600.jpg",
    "link": "https://drive.google.com/drive/folders/betterbundle-500viralre",
    "password": "BB35500V",
    "price": "129",
    "original_price": "399",
    "category": "Mega Bundles",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 102,
    "status": "active",
    "sort_order": 35,
    "created_at": "2026-10-30T22:11:12.311Z",
    "updated_at": "2026-10-30T22:11:12.311Z"
  },
  {
    "id": "RB-1370",
    "title": "5000+ Viral AI Fruit Reels Bundle Free! 🍎 (No Copyright)",
    "description": "Premium AI & Technology collection: 5000+ Viral AI Fruit Reels Bundle Free! 🍎 (No Copyright). Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1779096446315-123194518.png",
    "link": "https://drive.google.com/drive/folders/credible-pack-5000virala",
    "password": "UNLOCK365000",
    "price": "99",
    "original_price": "299",
    "category": "AI & Technology",
    "tags": "special-offer, trending",
    "reels_count": 5000,
    "rating": 5,
    "reviews_count": 435,
    "status": "active",
    "sort_order": 36,
    "created_at": "2026-10-30T21:52:07.033Z",
    "updated_at": "2026-10-30T21:52:07.033Z"
  },
  {
    "id": "RB-2619",
    "title": "5000+ AI Baby Reels Bundle – Viral Baby Content for Instagram, TikTok & YouTube Shorts",
    "description": "Premium Animation & Cartoons pack: 5000+ AI Baby Reels Bundle – Viral Baby Content for Instagram, TikTok & YouTube Shorts. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/08/17507027152581-1024x1024-1-600x600.png",
    "link": "https://drive.google.com/drive/folders/betterbundle-5000aibaby",
    "password": "BB365000",
    "price": "179",
    "original_price": "499",
    "category": "Animation & Cartoons",
    "tags": "trending, popular",
    "reels_count": 5000,
    "rating": 5,
    "reviews_count": 115,
    "status": "active",
    "sort_order": 36,
    "created_at": "2026-10-30T22:11:16.043Z",
    "updated_at": "2026-10-30T22:11:16.043Z"
  },
  {
    "id": "RB-3731",
    "title": "Mad scientist 1500+ reel bundle",
    "description": "Premium Mega Bundles collection: Mad scientist 1500+ reel bundle. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1790228206203-183098624.png",
    "link": "https://drive.google.com/drive/folders/credible-pack-madscienti",
    "password": "UNLOCK37MADS",
    "price": "129",
    "original_price": "399",
    "category": "Mega Bundles",
    "tags": "new, trending",
    "reels_count": 1500,
    "rating": 5,
    "reviews_count": 446,
    "status": "active",
    "sort_order": 37,
    "created_at": "2026-10-30T21:52:10.580Z",
    "updated_at": "2026-10-30T21:52:10.580Z"
  },
  {
    "id": "RB-6266",
    "title": "Adobe InCopy 2026 – Professional Editorial & Content Writing Software",
    "description": "Premium Software & Tools pack: Adobe InCopy 2026 – Professional Editorial & Content Writing Software. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/09/AdobeInCopy-600x600.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-adobeincop",
    "password": "BB37ADOB",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 128,
    "status": "active",
    "sort_order": 37,
    "created_at": "2026-10-30T22:11:19.591Z",
    "updated_at": "2026-10-30T22:11:19.591Z"
  },
  {
    "id": "RB-1640",
    "title": "Mad Scientist Reels Bundle – 1000+ Ready-To-Post & Copyright-Free Viral Reels",
    "description": "Premium Mega Bundles collection: Mad Scientist Reels Bundle – 1000+ Ready-To-Post & Copyright-Free Viral Reels. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1775318097382-557632989.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-madscienti",
    "password": "UNLOCK38MADS",
    "price": "99",
    "original_price": "299",
    "category": "Mega Bundles",
    "tags": "special-offer, trending",
    "reels_count": 1000,
    "rating": 5,
    "reviews_count": 457,
    "status": "active",
    "sort_order": 38,
    "created_at": "2026-10-30T21:52:14.013Z",
    "updated_at": "2026-10-30T21:52:14.013Z"
  },
  {
    "id": "RB-2639",
    "title": "Adobe Audition 2026 for Windows – Professional Audio Editing Software",
    "description": "Premium Software & Tools pack: Adobe Audition 2026 for Windows – Professional Audio Editing Software. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/09/Audition-600x600.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-adobeaudit",
    "password": "BB38ADOB",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 141,
    "status": "active",
    "sort_order": 38,
    "created_at": "2026-10-30T22:11:23.005Z",
    "updated_at": "2026-10-30T22:11:23.005Z"
  },
  {
    "id": "RB-4821",
    "title": "🧪 1000+ Viral Mad Scientist Reels Bundle 🧪",
    "description": "Premium Mega Bundles collection: 🧪 1000+ Viral Mad Scientist Reels Bundle 🧪. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1783339417307-313774586.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-1000viralm",
    "password": "UNLOCK391000",
    "price": "129",
    "original_price": "399",
    "category": "Mega Bundles",
    "tags": "new, trending",
    "reels_count": 1000,
    "rating": 5,
    "reviews_count": 468,
    "status": "active",
    "sort_order": 39,
    "created_at": "2026-10-30T21:52:16.736Z",
    "updated_at": "2026-10-30T21:52:16.736Z"
  },
  {
    "id": "RB-4922",
    "title": "Adobe Illustrator 2026 for Windows – Professional Vector Design Software",
    "description": "Premium Software & Tools pack: Adobe Illustrator 2026 for Windows – Professional Vector Design Software. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/12/Illustrator-600x600.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-adobeillus",
    "password": "BB39ADOB",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 154,
    "status": "active",
    "sort_order": 39,
    "created_at": "2026-10-30T22:11:26.592Z",
    "updated_at": "2026-10-30T22:11:26.592Z"
  },
  {
    "id": "RB-1721",
    "title": "Funny viral this reel bundle",
    "description": "Premium Animation & Cartoons collection: Funny viral this reel bundle. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1779456863735-259840209.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-funnyviral",
    "password": "UNLOCK40FUNN",
    "price": "129",
    "original_price": "399",
    "category": "Animation & Cartoons",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 479,
    "status": "active",
    "sort_order": 40,
    "created_at": "2026-10-30T21:52:19.861Z",
    "updated_at": "2026-10-30T21:52:19.861Z"
  },
  {
    "id": "RB-1549",
    "title": "Adobe Character Animator for Windows – Professional 2D Animation Software (2026)",
    "description": "Premium Software & Tools pack: Adobe Character Animator for Windows – Professional 2D Animation Software (2026). Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/12/AdobeCharacterAnimator-600x600.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-adobechara",
    "password": "BB40ADOB",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 167,
    "status": "active",
    "sort_order": 40,
    "created_at": "2026-10-30T22:11:30.876Z",
    "updated_at": "2026-10-30T22:11:30.876Z"
  },
  {
    "id": "RB-5971",
    "title": "500+ BGMI Reels Bundle - Pro Cinematic Gaming Video Pack for Instagram",
    "description": "Premium Gaming & Esports collection: 500+ BGMI Reels Bundle - Pro Cinematic Gaming Video Pack for Instagram. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/2025/12/ChatGPT-Image-Dec-2-2025-02_45_25-PM.png",
    "link": "https://drive.google.com/drive/folders/credible-pack-500bgmiree",
    "password": "UNLOCK41500B",
    "price": "129",
    "original_price": "399",
    "category": "Gaming & Esports",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 490,
    "status": "active",
    "sort_order": 41,
    "created_at": "2026-10-30T21:52:22.757Z",
    "updated_at": "2026-10-30T21:52:22.757Z"
  },
  {
    "id": "RB-2723",
    "title": "CapCut Pro for PC (Windows) – Lifetime Access & AI Features Unlocked (2026)",
    "description": "Premium Software & Tools pack: CapCut Pro for PC (Windows) – Lifetime Access & AI Features Unlocked (2026). Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/05/ChatGPT-Image-May-31-2026-08_23_46-AM-600x600.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-capcutprof",
    "password": "BB41CAPC",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 180,
    "status": "active",
    "sort_order": 41,
    "created_at": "2026-10-30T22:11:34.235Z",
    "updated_at": "2026-10-30T22:11:34.235Z"
  },
  {
    "id": "RB-9549",
    "title": "Ultimate 150,000+ Viral Reels Bundle – Free Download | Ready-To-Post HD Reels Collection",
    "description": "Premium Mega Bundles collection: Ultimate 150,000+ Viral Reels Bundle – Free Download | Ready-To-Post HD Reels Collection. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/2025/11/cropped-Picsart_25-11-21_05-18-05-707.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-ultimate15",
    "password": "UNLOCK42ULTI",
    "price": "199",
    "original_price": "599",
    "category": "Mega Bundles",
    "tags": "best-seller, trending, mega-pack",
    "reels_count": 150,
    "rating": 5,
    "reviews_count": 51,
    "status": "active",
    "sort_order": 42,
    "created_at": "2026-10-30T21:52:25.551Z",
    "updated_at": "2026-10-30T21:52:25.551Z"
  },
  {
    "id": "RB-8185",
    "title": "Adobe Premiere Pro for PC (2026) – Premium Video Editing Software | Instant Delivery",
    "description": "Premium Software & Tools pack: Adobe Premiere Pro for PC (2026) – Premium Video Editing Software | Instant Delivery. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/07/AdobePremierePro-600x600.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-adobepremi",
    "password": "BB42ADOB",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 193,
    "status": "active",
    "sort_order": 42,
    "created_at": "2026-10-30T22:11:37.663Z",
    "updated_at": "2026-10-30T22:11:37.663Z"
  },
  {
    "id": "RB-2948",
    "title": "1000+ AI Mad Scientist Reels Bundle | Instagram Reels, YouTube Shorts",
    "description": "Premium AI & Technology collection: 1000+ AI Mad Scientist Reels Bundle | Instagram Reels, YouTube Shorts. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1773481786354-725211258.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-1000aimads",
    "password": "UNLOCK431000",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 1000,
    "rating": 5,
    "reviews_count": 62,
    "status": "active",
    "sort_order": 43,
    "created_at": "2026-10-30T21:52:28.046Z",
    "updated_at": "2026-10-30T21:52:28.046Z"
  },
  {
    "id": "RB-8083",
    "title": "Adobe Photoshop Download for PC (2026) – Professional Photo Editing Software",
    "description": "Premium Software & Tools pack: Adobe Photoshop Download for PC (2026) – Professional Photo Editing Software. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/12/AdobePhotoshop2026-600x600.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-adobephoto",
    "password": "BB43ADOB",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 206,
    "status": "active",
    "sort_order": 43,
    "created_at": "2026-10-30T22:11:41.301Z",
    "updated_at": "2026-10-30T22:11:41.301Z"
  },
  {
    "id": "RB-4464",
    "title": "1000+ Long Movies clips Video bundle",
    "description": "Premium Entertainment collection: 1000+ Long Movies clips Video bundle. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1785039684622-254648333.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-1000longmo",
    "password": "UNLOCK441000",
    "price": "129",
    "original_price": "399",
    "category": "Entertainment",
    "tags": "new, trending",
    "reels_count": 1000,
    "rating": 5,
    "reviews_count": 73,
    "status": "active",
    "sort_order": 44,
    "created_at": "2026-10-30T21:52:31.653Z",
    "updated_at": "2026-10-30T21:52:31.653Z"
  },
  {
    "id": "RB-4498",
    "title": "Adobe After Effects for PC – Professional Motion Graphics & Video Editing Software (2026)",
    "description": "Premium Software & Tools pack: Adobe After Effects for PC – Professional Motion Graphics & Video Editing Software (2026). Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/12/AfterEffects-600x600.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-adobeafter",
    "password": "BB44ADOB",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 219,
    "status": "active",
    "sort_order": 44,
    "created_at": "2026-10-30T22:11:45.040Z",
    "updated_at": "2026-10-30T22:11:45.040Z"
  },
  {
    "id": "RB-3187",
    "title": "100 + troll face PNG",
    "description": "Premium Animation & Cartoons collection: 100 + troll face PNG. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1773487078532-957199633.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-100trollfa",
    "password": "UNLOCK45100T",
    "price": "129",
    "original_price": "399",
    "category": "Animation & Cartoons",
    "tags": "new, trending",
    "reels_count": 100,
    "rating": 5,
    "reviews_count": 84,
    "status": "active",
    "sort_order": 45,
    "created_at": "2026-10-30T21:52:34.555Z",
    "updated_at": "2026-10-30T21:52:34.555Z"
  },
  {
    "id": "RB-1951",
    "title": "Adobe Lightroom Classic for PC",
    "description": "Premium Software & Tools pack: Adobe Lightroom Classic for PC. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/09/Lightroom-600x600.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-adobelight",
    "password": "BB45ADOB",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 232,
    "status": "active",
    "sort_order": 45,
    "created_at": "2026-10-30T22:11:49.105Z",
    "updated_at": "2026-10-30T22:11:49.105Z"
  },
  {
    "id": "RB-1783",
    "title": "All In One Mega Digital Products Bundle – 15M+ Files, Reels, Templates & Tools",
    "description": "Premium Digital Templates & Guides collection: All In One Mega Digital Products Bundle – 15M+ Files, Reels, Templates & Tools. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1772953433849-269424195.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-allinoneme",
    "password": "UNLOCK46ALLI",
    "price": "199",
    "original_price": "599",
    "category": "Digital Templates & Guides",
    "tags": "best-seller, trending, mega-pack",
    "reels_count": 15000000,
    "rating": 5,
    "reviews_count": 95,
    "status": "active",
    "sort_order": 46,
    "created_at": "2026-10-30T21:52:37.135Z",
    "updated_at": "2026-10-30T21:52:37.135Z"
  },
  {
    "id": "RB-7042",
    "title": "Adobe InDesign for PC – Professional Desktop Publishing Software (2026)",
    "description": "Premium Software & Tools pack: Adobe InDesign for PC – Professional Desktop Publishing Software (2026). Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/07/InDesign-600x600.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-adobeindes",
    "password": "BB46ADOB",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 245,
    "status": "active",
    "sort_order": 46,
    "created_at": "2026-10-30T22:11:52.481Z",
    "updated_at": "2026-10-30T22:11:52.481Z"
  },
  {
    "id": "RB-8622",
    "title": "50K+ Viral Mega Reels Bundle 2026 | 8+ Niches | Ready-to-Post | Instant Download",
    "description": "Premium Mega Bundles collection: 50K+ Viral Mega Reels Bundle 2026 | 8+ Niches | Ready-to-Post | Instant Download. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1776192488591-40842882.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-50kviralme",
    "password": "UNLOCK4750KV",
    "price": "199",
    "original_price": "599",
    "category": "Mega Bundles",
    "tags": "best-seller, trending, mega-pack",
    "reels_count": 50000,
    "rating": 5,
    "reviews_count": 106,
    "status": "active",
    "sort_order": 47,
    "created_at": "2026-10-30T21:52:40.371Z",
    "updated_at": "2026-10-30T21:52:40.371Z"
  },
  {
    "id": "RB-6522",
    "title": "Internet Download Manager (IDM) for Windows – Instant Delivery (2026)",
    "description": "Premium Software & Tools pack: Internet Download Manager (IDM) for Windows – Instant Delivery (2026). Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/06/ChatGPT-Image-Jun-13-2026-03_22_53-PM.webp",
    "link": "https://drive.google.com/drive/folders/betterbundle-internetdo",
    "password": "BB47INTE",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 258,
    "status": "active",
    "sort_order": 47,
    "created_at": "2026-10-30T22:11:54.944Z",
    "updated_at": "2026-10-30T22:11:54.944Z"
  },
  {
    "id": "RB-9507",
    "title": "500+ Reels Bundles + Lifetime Updates + Resell Content | Premium Digital Bundle",
    "description": "Premium Mega Bundles collection: 500+ Reels Bundles + Lifetime Updates + Resell Content | Premium Digital Bundle. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1774429178192-262332893.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-500reelsbu",
    "password": "UNLOCK48500R",
    "price": "129",
    "original_price": "399",
    "category": "Mega Bundles",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 117,
    "status": "active",
    "sort_order": 48,
    "created_at": "2026-10-30T21:52:43.017Z",
    "updated_at": "2026-10-30T21:52:43.017Z"
  },
  {
    "id": "RB-6629",
    "title": "CorelDRAW Graphics Suite 2025 – Powerful Graphic Design Software for Windows",
    "description": "Premium Software & Tools pack: CorelDRAW Graphics Suite 2025 – Powerful Graphic Design Software for Windows. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/12/CorelDRAW-Graphics-SUITE-600x600.jpg",
    "link": "https://drive.google.com/drive/folders/betterbundle-coreldrawg",
    "password": "BB48CORE",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 271,
    "status": "active",
    "sort_order": 48,
    "created_at": "2026-10-30T22:11:58.541Z",
    "updated_at": "2026-10-30T22:11:58.541Z"
  },
  {
    "id": "RB-9909",
    "title": "Mega Reels Bundle – 5,0,000+ Reels | 120+ Viral Categories",
    "description": "Premium Mega Bundles collection: Mega Reels Bundle – 5,0,000+ Reels | 120+ Viral Categories. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1775279529821-784955976.jpg",
    "link": "https://drive.google.com/drive/folders/credible-pack-megareelsb",
    "password": "UNLOCK49MEGA",
    "price": "199",
    "original_price": "599",
    "category": "Mega Bundles",
    "tags": "best-seller, trending, mega-pack",
    "reels_count": 0,
    "rating": 5,
    "reviews_count": 128,
    "status": "active",
    "sort_order": 49,
    "created_at": "2026-10-30T21:52:46.017Z",
    "updated_at": "2026-10-30T21:52:46.017Z"
  },
  {
    "id": "RB-1933",
    "title": "Adobe Animate for Windows – Powerful Lifetime 2D Animation Software",
    "description": "Premium Software & Tools pack: Adobe Animate for Windows – Powerful Lifetime 2D Animation Software. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/12/Adobe-Animate-600x600.jpg",
    "link": "https://drive.google.com/drive/folders/betterbundle-adobeanima",
    "password": "BB49ADOB",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 284,
    "status": "active",
    "sort_order": 49,
    "created_at": "2026-10-30T22:12:01.718Z",
    "updated_at": "2026-10-30T22:12:01.718Z"
  },
  {
    "id": "RB-1841",
    "title": "🚀 THE ULTIMATE MEGA REEL BUNDLE",
    "description": "Premium Mega Bundles collection: 🚀 THE ULTIMATE MEGA REEL BUNDLE. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1789480106324-567303241.png",
    "link": "https://drive.google.com/drive/folders/credible-pack-theultimat",
    "password": "UNLOCK50THEU",
    "price": "199",
    "original_price": "599",
    "category": "Mega Bundles",
    "tags": "best-seller, trending, mega-pack",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 139,
    "status": "active",
    "sort_order": 50,
    "created_at": "2026-10-30T21:52:49.297Z",
    "updated_at": "2026-10-30T21:52:49.297Z"
  },
  {
    "id": "RB-4253",
    "title": "MEGA Reels Bundle",
    "description": "Premium Mega Bundles collection: MEGA Reels Bundle. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1782293142313-717747469.png",
    "link": "https://drive.google.com/drive/folders/credible-pack-megareelsb",
    "password": "UNLOCK51MEGA",
    "price": "199",
    "original_price": "599",
    "category": "Mega Bundles",
    "tags": "best-seller, trending, mega-pack",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 150,
    "status": "active",
    "sort_order": 51,
    "created_at": "2026-10-30T21:52:52.334Z",
    "updated_at": "2026-10-30T21:52:52.334Z"
  },
  {
    "id": "RB-9109",
    "title": "500+ 2D Funny Animation Reels | Viral Comedy Clips",
    "description": "Premium Animation & Cartoons collection: 500+ 2D Funny Animation Reels | Viral Comedy Clips. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1777988449844-330335778.png",
    "link": "https://drive.google.com/drive/folders/credible-pack-5002dfunny",
    "password": "UNLOCK525002",
    "price": "129",
    "original_price": "399",
    "category": "Animation & Cartoons",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 161,
    "status": "active",
    "sort_order": 52,
    "created_at": "2026-10-30T21:52:55.000Z",
    "updated_at": "2026-10-30T21:52:55.000Z"
  }
];

// ----------------------------------------------------------------------------
// 3. ADMIN STATE
// ----------------------------------------------------------------------------
const AdminState = {
  adminPassword: null,
  bundles: [],
  filteredBundles: [],
  searchQuery: "",
  statusFilter: "all",
  isDemoMode: false,
  deleteTargetId: null,
  hasUnsavedOrder: false
};

// ----------------------------------------------------------------------------
// 4. UTILITIES & THEME
// ----------------------------------------------------------------------------
function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function showToast(message, type = "info", duration = 3000) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${escapeHtml(message)}</span>`;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

function generateRandomPassword() {
  const prefixes = ["VIRAL", "REEL", "VAULT", "GOLD", "PRO", "VIP", "MAX"];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const num = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${num}`;
}

const AdminTheme = {
  init() {
    const saved = localStorage.getItem("reelstore_theme") || "dark";
    this.apply(saved);

    const btn = document.getElementById("adminThemeToggleBtn");
    if (btn) {
      btn.addEventListener("click", () => {
        const cur = document.documentElement.getAttribute("data-theme") || "dark";
        const next = cur === "dark" ? "light" : "dark";
        this.apply(next);
        localStorage.setItem("reelstore_theme", next);
      });
    }
  },

  apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const icon = document.getElementById("adminThemeIcon");
    if (icon) {
      icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
      icon.style.color = theme === "dark" ? "#FBBF24" : "";
    }
  }
};

// ----------------------------------------------------------------------------
// 5. LOCAL DEMO PERSISTENCE
// ----------------------------------------------------------------------------
function getDemoBundles() {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {}
  }
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(INITIAL_DEMO_BUNDLES));
  return JSON.parse(JSON.stringify(INITIAL_DEMO_BUNDLES));
}

function saveDemoBundles(bundles) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bundles));
}

// ----------------------------------------------------------------------------
// 6. ADMIN API SERVICE
// ----------------------------------------------------------------------------
const AdminApi = {
  async login(password) {
    if (!CONFIG.APPS_SCRIPT_URL || CONFIG.APPS_SCRIPT_URL.trim() === "") {
      AdminState.isDemoMode = true;
      return { success: true };
    }

    try {
      const url = `${CONFIG.APPS_SCRIPT_URL}?action=adminLogin&adminPassword=${encodeURIComponent(password)}`;
      const res = await fetch(url, { method: "GET" });
      return await res.json();
    } catch (err) {
      console.warn("Apps Script API unreachable, enabling demo mode:", err);
      AdminState.isDemoMode = true;
      return { success: true };
    }
  },

  async getBundles() {
    if (AdminState.isDemoMode) {
      return { success: true, bundles: getDemoBundles() };
    }

    try {
      const url = `${CONFIG.APPS_SCRIPT_URL}?action=adminGetBundles&adminPassword=${encodeURIComponent(AdminState.adminPassword)}`;
      const res = await fetch(url, { method: "GET" });
      const json = await res.json();
      if (json && json.success) return json;
      throw new Error(json.error || "Failed to load bundles");
    } catch (err) {
      AdminState.isDemoMode = true;
      return { success: true, bundles: getDemoBundles() };
    }
  },

  async saveBundle(bundleData) {
    if (AdminState.isDemoMode) {
      const list = getDemoBundles();
      let isUpdate = false;
      const now = new Date().toISOString();

      if (bundleData.id) {
        const idx = list.findIndex(b => b.id === bundleData.id);
        if (idx !== -1) {
          list[idx] = { ...list[idx], ...bundleData, updated_at: now };
          isUpdate = true;
        }
      }

      if (!isUpdate) {
        bundleData.id = "RB-" + Math.floor(1000 + Math.random() * 9000);
        bundleData.sort_order = list.length + 1;
        bundleData.created_at = now;
        bundleData.updated_at = now;
        list.push(bundleData);
      }

      saveDemoBundles(list);
      return { success: true, bundle: bundleData };
    }

    try {
      const payload = {
        action: "adminSaveBundle",
        adminPassword: AdminState.adminPassword,
        bundle: bundleData
      };

      const res = await fetch(CONFIG.APPS_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload)
      });
      return await res.json();
    } catch (err) {
      return { success: false, error: err.message };
    }
  },

  async deleteBundle(bundleId) {
    if (AdminState.isDemoMode) {
      let list = getDemoBundles();
      list = list.filter(b => b.id !== bundleId);
      saveDemoBundles(list);
      return { success: true };
    }

    try {
      const payload = {
        action: "adminDeleteBundle",
        adminPassword: AdminState.adminPassword,
        bundleId: bundleId
      };

      const res = await fetch(CONFIG.APPS_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload)
      });
      return await res.json();
    } catch (err) {
      return { success: false, error: err.message };
    }
  },

  async reorderBundles(orderedIds) {
    if (AdminState.isDemoMode) {
      const list = getDemoBundles();
      const orderMap = {};
      orderedIds.forEach((id, idx) => { orderMap[id] = idx + 1; });
      list.forEach(b => {
        if (orderMap[b.id]) b.sort_order = orderMap[b.id];
      });
      list.sort((a, b) => a.sort_order - b.sort_order);
      saveDemoBundles(list);
      return { success: true };
    }

    try {
      const payload = {
        action: "adminReorder",
        adminPassword: AdminState.adminPassword,
        orderedIds: orderedIds
      };

      const res = await fetch(CONFIG.APPS_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload)
      });
      return await res.json();
    } catch (err) {
      return { success: false, error: err.message };
    }
  },

  async quickToggle(bundleId, field, value) {
    if (AdminState.isDemoMode) {
      const list = getDemoBundles();
      const item = list.find(b => b.id === bundleId);
      if (item) {
        item[field] = value;
        item.updated_at = new Date().toISOString();
        saveDemoBundles(list);
      }
      return { success: true };
    }

    try {
      const payload = {
        action: "adminQuickToggle",
        adminPassword: AdminState.adminPassword,
        bundleId: bundleId,
        field: field,
        value: value
      };

      const res = await fetch(CONFIG.APPS_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload)
      });
      return await res.json();
    } catch (err) {
      return { success: false, error: err.message };
    }
  }
};

// ----------------------------------------------------------------------------
// 7. CLOUDINARY DIRECT UNSIGNED UPLOAD
// ----------------------------------------------------------------------------
async function uploadToCloudinary(file) {
  const progressBarWrap = document.getElementById("uploadProgressWrap");
  const progressBarFill = document.getElementById("uploadProgressFill");

  // Determine active Cloudinary Cloud Name (from CONFIG or localStorage)
  let cloudName = (CONFIG.CLOUDINARY_CLOUD_NAME && CONFIG.CLOUDINARY_CLOUD_NAME !== "demo-cloud")
    ? CONFIG.CLOUDINARY_CLOUD_NAME
    : (localStorage.getItem("cloudinary_cloud_name") || "");

  if (!cloudName) {
    const entered = prompt(
      "Cloudinary Upload Setup:\nPlease enter your Cloudinary Cloud Name (found on your Cloudinary Dashboard, e.g. 'dxy123'):",
      ""
    );
    if (entered && entered.trim()) {
      cloudName = entered.trim();
      CONFIG.CLOUDINARY_CLOUD_NAME = cloudName;
      localStorage.setItem("cloudinary_cloud_name", cloudName);
      showToast(`Cloud Name "${cloudName}" saved!`, "success");
    } else {
      // Fallback to local demo preview if cancelled
      return new Promise((resolve) => {
        if (progressBarWrap) progressBarWrap.style.display = "block";
        if (progressBarFill) progressBarFill.style.width = "50%";

        const reader = new FileReader();
        reader.onload = (e) => {
          if (progressBarFill) progressBarFill.style.width = "100%";
          setTimeout(() => {
            if (progressBarWrap) progressBarWrap.style.display = "none";
            showToast("Loaded local preview. Enter Cloud Name to store in Cloudinary.", "info");
            resolve(e.target.result);
          }, 350);
        };
        reader.readAsDataURL(file);
      });
    }
  }

  return new Promise((resolve, reject) => {
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CONFIG.CLOUDINARY_UPLOAD_PRESET || "o5JUKpC9_HBc5pTO0OO6U7sxpQo");
    formData.append("folder", CONFIG.CLOUDINARY_FOLDER || "reel_bundle_thumbnails");

    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);

    if (progressBarWrap) progressBarWrap.style.display = "block";

    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable && progressBarFill) {
        const pct = Math.round((e.loaded / e.total) * 100);
        progressBarFill.style.width = `${pct}%`;
      }
    };

    xhr.onload = () => {
      if (progressBarWrap) progressBarWrap.style.display = "none";
      if (xhr.status >= 200 && xhr.status < 300) {
        const res = JSON.parse(xhr.responseText);
        if (res.secure_url) {
          resolve(res.secure_url);
        } else {
          reject(new Error("Cloudinary response missing secure_url"));
        }
      } else {
        let errMsg = `Upload failed (${xhr.status}): ${xhr.statusText}`;
        try {
          const errRes = JSON.parse(xhr.responseText);
          if (errRes.error && errRes.error.message) {
            errMsg = errRes.error.message;
          }
        } catch (e) {}
        reject(new Error(errMsg));
      }
    };

    xhr.onerror = () => {
      if (progressBarWrap) progressBarWrap.style.display = "none";
      reject(new Error("Network error during Cloudinary upload"));
    };

    xhr.send(formData);
  });
}

// ----------------------------------------------------------------------------
// 8. RENDER ADMIN TABLE & STATS
// ----------------------------------------------------------------------------
function updateStats() {
  const total = AdminState.bundles.length;
  const active = AdminState.bundles.filter(b => b.status === "active").length;
  const hidden = AdminState.bundles.filter(b => b.status === "hidden").length;
  const trending = AdminState.bundles.filter(b => (b.tags || "").toLowerCase().includes("trending")).length;

  const elTotal = document.getElementById("statTotalBundles");
  const elActive = document.getElementById("statActiveBundles");
  const elHidden = document.getElementById("statHiddenBundles");
  const elTrending = document.getElementById("statTrendingBundles");

  if (elTotal) elTotal.textContent = total;
  if (elActive) elActive.textContent = active;
  if (elHidden) elHidden.textContent = hidden;
  if (elTrending) elTrending.textContent = trending;
}

function renderAdminTable() {
  const tbody = document.getElementById("adminTableBody");
  if (!tbody) return;

  tbody.innerHTML = "";

  if (AdminState.filteredBundles.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; padding: 3rem; color: var(--text-muted);">
          No bundles match your search.
        </td>
      </tr>
    `;
    return;
  }

  const fallbackThumb = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80";

  AdminState.filteredBundles.forEach((bundle, index) => {
    const tr = document.createElement("tr");
    tr.draggable = true;
    tr.dataset.bundleId = bundle.id;
    tr.dataset.index = index;

    const isActive = (bundle.status || "active").toLowerCase() === "active";
    const password = bundle.password || "NOT SET";

    tr.innerHTML = `
      <td style="text-align: center;">
        <span class="drag-handle" style="cursor: grab; color: var(--text-muted); font-size: 0.9rem;" title="Drag to reorder"><i class="fa-solid fa-grip-vertical"></i></span>
      </td>

      <!-- Bundle Product -->
      <td>
        <div style="display: flex; align-items: center; gap: 0.85rem;">
          <img src="${escapeHtml(bundle.thumbnail_url || fallbackThumb)}" alt="" style="width: 52px; height: 52px; border-radius: 8px; object-fit: contain; background: #07090E; border: 1px solid rgba(255,255,255,0.08); flex-shrink: 0;" onerror="this.onerror=null;this.src='${fallbackThumb}'">
          
          <div style="min-width: 0;">
            <div style="font-weight: 700; color: var(--text-primary); font-size: 0.92rem; line-height: 1.35; margin-bottom: 0.2rem;">
              ${escapeHtml(bundle.title)}
            </div>
            
            <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; font-size: 0.74rem;">
              <span style="background: var(--bg-subtle); color: var(--accent-orange); font-weight: 700; padding: 0.15rem 0.45rem; border-radius: 4px;">
                ${escapeHtml(bundle.category || "General")}
              </span>
              <span style="color: var(--text-muted);">ID: <code>${escapeHtml(bundle.id)}</code></span>
              
              <!-- Password Pill with Copy -->
              <span style="display: inline-flex; align-items: center; gap: 0.25rem; background: rgba(249,87,33,0.12); color: var(--accent-orange); padding: 0.15rem 0.45rem; border-radius: 4px; font-weight: 700; cursor: pointer;" title="Click to copy password" onclick="navigator.clipboard.writeText('${escapeHtml(password)}'); showToast('Copied password: ${escapeHtml(password)}', 'success');">
                <i class="fa-solid fa-key" style="font-size: 0.65rem;"></i> ${escapeHtml(password)}
              </span>
            </div>
          </div>
        </div>
      </td>

      <!-- Price & Reels -->
      <td>
        <div style="font-weight: 800; font-size: 1.05rem; color: var(--text-primary);">
          ${CONFIG.CURRENCY_SYMBOL}${escapeHtml(bundle.price)}
          ${bundle.original_price ? `<small style="color: var(--text-muted); text-decoration: line-through; font-weight: 500; font-size: 0.78rem; margin-left: 0.25rem;">${CONFIG.CURRENCY_SYMBOL}${escapeHtml(bundle.original_price)}</small>` : ""}
        </div>
        <div style="font-size: 0.76rem; color: var(--text-muted); margin-top: 0.15rem;">
          <i class="fa-solid fa-layer-group"></i> ${Number(bundle.reels_count || 0).toLocaleString()} Reels
        </div>
      </td>

      <!-- Status Toggle -->
      <td style="text-align: center;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.25rem;">
          <label class="switch-toggle" title="Toggle active / hidden">
            <input type="checkbox" data-action="toggle-status" data-id="${escapeHtml(bundle.id)}" ${isActive ? 'checked' : ''}>
            <span class="switch-slider"></span>
          </label>
          <span style="font-size: 0.72rem; font-weight: 700; color: ${isActive ? '#10B981' : 'var(--text-muted)'};">
            ${isActive ? 'Active' : 'Hidden'}
          </span>
        </div>
      </td>

      <!-- Actions -->
      <td style="text-align: right;">
        <div style="display: inline-flex; align-items: center; gap: 0.4rem;">
          <button type="button" class="btn-etsy-filter-pill" data-action="edit" data-id="${escapeHtml(bundle.id)}" style="padding: 0.45rem 0.85rem; font-size: 0.82rem; font-weight: 700; border-radius: 6px;">
            <i class="fa-solid fa-pen-to-square"></i> Edit
          </button>
          <button type="button" class="btn-etsy-filter-pill" data-action="delete" data-id="${escapeHtml(bundle.id)}" style="padding: 0.45rem 0.65rem; color: #EF4444; border-color: rgba(239,68,68,0.3); border-radius: 6px;" title="Delete bundle">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </td>
    `;

    tbody.appendChild(tr);
  });

  setupDragAndDrop();
}

function applyAdminFilters() {
  let list = [...AdminState.bundles];

  if (AdminState.searchQuery.trim()) {
    const q = AdminState.searchQuery.toLowerCase().trim();
    list = list.filter(b => {
      const inTitle = (b.title || "").toLowerCase().includes(q);
      const inId = (b.id || "").toLowerCase().includes(q);
      const inCat = (b.category || "").toLowerCase().includes(q);
      return inTitle || inId || inCat;
    });
  }

  if (AdminState.statusFilter !== "all") {
    list = list.filter(b => (b.status || "active").toLowerCase() === AdminState.statusFilter);
  }

  AdminState.filteredBundles = list;
  renderAdminTable();
}

// ----------------------------------------------------------------------------
// 9. DRAG AND DROP REORDERING
// ----------------------------------------------------------------------------
function setupDragAndDrop() {
  const tbody = document.getElementById("adminTableBody");
  if (!tbody) return;

  tbody.querySelectorAll("tr").forEach(row => {
    row.addEventListener("dragstart", (e) => {
      row.classList.add("dragging");
      e.dataTransfer.setData("text/plain", row.dataset.index);
    });

    row.addEventListener("dragend", () => {
      row.classList.remove("dragging");
    });

    row.addEventListener("dragover", (e) => {
      e.preventDefault();
      const dragging = tbody.querySelector(".dragging");
      if (!dragging || dragging === row) return;

      const bounding = row.getBoundingClientRect();
      const offset = e.clientY - bounding.top;

      if (offset > bounding.height / 2) {
        row.after(dragging);
      } else {
        row.before(dragging);
      }
    });

    row.addEventListener("drop", (e) => {
      e.preventDefault();
      onTableRowsReordered();
    });
  });
}

function onTableRowsReordered() {
  const tbody = document.getElementById("adminTableBody");
  const newOrderIds = [];
  tbody.querySelectorAll("tr").forEach(tr => {
    if (tr.dataset.bundleId) newOrderIds.push(tr.dataset.bundleId);
  });

  const reordered = [];
  newOrderIds.forEach((id, idx) => {
    const b = AdminState.bundles.find(item => item.id === id);
    if (b) {
      b.sort_order = idx + 1;
      reordered.push(b);
    }
  });

  AdminState.bundles = reordered;
  AdminState.hasUnsavedOrder = true;

  const saveBtn = document.getElementById("saveReorderBtn");
  if (saveBtn) saveBtn.style.display = "inline-flex";

  showToast("Reorder detected. Click 'Save New Order' to sync.", "info");
}

async function handleSaveReorder() {
  const saveBtn = document.getElementById("saveReorderBtn");
  if (saveBtn) saveBtn.disabled = true;

  const orderedIds = AdminState.bundles.map(b => b.id);
  const res = await AdminApi.reorderBundles(orderedIds);

  if (res && res.success) {
    showToast("Bundle order saved successfully!", "success");
    AdminState.hasUnsavedOrder = false;
    if (saveBtn) saveBtn.style.display = "none";
  } else {
    showToast("Failed to save reorder: " + (res.error || "Unknown"), "error");
  }

  if (saveBtn) saveBtn.disabled = false;
}

function moveBundle(bundleId, direction) {
  const idx = AdminState.bundles.findIndex(b => b.id === bundleId);
  if (idx === -1) return;

  const targetIdx = direction === "up" ? idx - 1 : idx + 1;
  if (targetIdx < 0 || targetIdx >= AdminState.bundles.length) return;

  const temp = AdminState.bundles[idx];
  AdminState.bundles[idx] = AdminState.bundles[targetIdx];
  AdminState.bundles[targetIdx] = temp;

  AdminState.bundles.forEach((b, i) => { b.sort_order = i + 1; });

  applyAdminFilters();
  onTableRowsReordered();
}

// ----------------------------------------------------------------------------
// 10. ADD / EDIT BUNDLE MODAL
// ----------------------------------------------------------------------------
function syncLiveModalPreview() {
  const title = (document.getElementById("formTitle")?.value || "").trim() || "Bundle Title Preview";
  const category = (document.getElementById("formCategory")?.value || "").trim() || "Reels Bundle";
  const price = (document.getElementById("formPrice")?.value || "").trim() || "129";
  const origPrice = (document.getElementById("formOriginalPrice")?.value || "").trim();
  const reels = (document.getElementById("formReelsCount")?.value || "").trim() || "1000";
  const thumbUrl = (document.getElementById("formThumbnailUrl")?.value || "").trim();
  const fallbackThumb = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80";

  const pTitle = document.getElementById("livePreviewTitle");
  const pCat = document.getElementById("livePreviewCat");
  const pPrice = document.getElementById("livePreviewPrice");
  const pOrig = document.getElementById("livePreviewOrigPrice");
  const pReels = document.getElementById("livePreviewReels");
  const pImg = document.getElementById("livePreviewImg");
  const pBadge = document.getElementById("previewBadge");

  if (pTitle) pTitle.textContent = title;
  if (pCat) pCat.textContent = category;
  if (pPrice) pPrice.textContent = `${CONFIG.CURRENCY_SYMBOL}${price}`;
  if (pOrig) {
    if (origPrice) {
      pOrig.textContent = `${CONFIG.CURRENCY_SYMBOL}${origPrice}`;
      pOrig.style.display = "inline";
    } else {
      pOrig.style.display = "none";
    }
  }
  if (pReels) pReels.textContent = `${Number(reels).toLocaleString()} Reels`;
  if (pImg) pImg.src = thumbUrl || fallbackThumb;

  const isTrending = document.querySelector("#tagsSelectorGroup input[value='trending']")?.checked;
  if (pBadge) pBadge.style.display = isTrending ? "inline-flex" : "none";
}

function openBundleFormModal(bundle = null) {
  const backdrop = document.getElementById("bundleEditModalBackdrop");
  const modalTitle = document.getElementById("modalFormTitle");

  const editId = document.getElementById("editBundleId");
  const editSort = document.getElementById("editBundleSortOrder");
  const editCreated = document.getElementById("editBundleCreatedAt");
  const formTitle = document.getElementById("formTitle");
  const formCategory = document.getElementById("formCategory");
  const formPrice = document.getElementById("formPrice");
  const formOriginalPrice = document.getElementById("formOriginalPrice");
  const formReelsCount = document.getElementById("formReelsCount");
  const formRating = document.getElementById("formRating");
  const formReviewsCount = document.getElementById("formReviewsCount");
  const formDescription = document.getElementById("formDescription");
  const formSecretLink = document.getElementById("formSecretLink");
  const formPassword = document.getElementById("formPassword");
  const formThumbnailUrl = document.getElementById("formThumbnailUrl");
  const thumbPreviewImg = document.getElementById("thumbPreviewImg");
  const formStatusToggle = document.getElementById("formStatusToggle");
  const tagsContainer = document.getElementById("tagsSelectorGroup");

  if (tagsContainer) {
    tagsContainer.querySelectorAll("input[type='checkbox']").forEach(cb => {
      cb.checked = false;
      const pill = cb.closest(".btn-etsy-filter-pill, .etsy-filter-pill");
      if (pill) pill.classList.remove("active");
    });
  }

  if (bundle) {
    modalTitle.textContent = `Edit Bundle: ${bundle.title}`;
    editId.value = bundle.id || "";
    editSort.value = bundle.sort_order || "";
    editCreated.value = bundle.created_at || "";
    formTitle.value = bundle.title || "";
    formCategory.value = bundle.category || "";
    formPrice.value = bundle.price || "";
    formOriginalPrice.value = bundle.original_price || "";
    formReelsCount.value = bundle.reels_count || "";
    formRating.value = bundle.rating || 5;
    formReviewsCount.value = bundle.reviews_count || 179;
    formDescription.value = bundle.description || "";
    formSecretLink.value = bundle.link || "";
    formPassword.value = bundle.password || "";
    formThumbnailUrl.value = bundle.thumbnail_url || "";
    formStatusToggle.checked = (bundle.status || "active").toLowerCase() === "active";

    if (bundle.thumbnail_url) {
      thumbPreviewImg.src = bundle.thumbnail_url;
      thumbPreviewImg.style.display = "block";
    } else {
      thumbPreviewImg.style.display = "none";
    }

    if (tagsContainer) {
      const tagsArr = (bundle.tags || "").split(",").map(t => t.trim().toLowerCase());
      tagsContainer.querySelectorAll("input[type='checkbox']").forEach(cb => {
        if (tagsArr.includes(cb.value.toLowerCase())) {
          cb.checked = true;
          const pill = cb.closest(".btn-etsy-filter-pill, .etsy-filter-pill");
          if (pill) pill.classList.add("active");
        }
      });
    }
  } else {
    modalTitle.textContent = "Add New Reel Bundle";
    editId.value = "";
    editSort.value = "";
    editCreated.value = "";
    formTitle.value = "";
    formCategory.value = "AI & Technology";
    formPrice.value = "129";
    formOriginalPrice.value = "399";
    formReelsCount.value = "1000";
    formRating.value = "5";
    formReviewsCount.value = "120";
    formDescription.value = "";
    formSecretLink.value = "";
    formPassword.value = generateRandomPassword();
    formThumbnailUrl.value = "";
    thumbPreviewImg.style.display = "none";
    formStatusToggle.checked = true;

    if (tagsContainer) {
      const trendingCb = tagsContainer.querySelector("input[value='trending']");
      if (trendingCb) {
        trendingCb.checked = true;
        const pill = trendingCb.closest(".btn-etsy-filter-pill, .etsy-filter-pill");
        if (pill) pill.classList.add("active");
      }
    }
  }

  syncLiveModalPreview();
  backdrop.classList.add("active");
}

function closeBundleFormModal() {
  const backdrop = document.getElementById("bundleEditModalBackdrop");
  if (backdrop) backdrop.classList.remove("active");
}

async function handleBundleFormSubmit(e) {
  e.preventDefault();

  const btnSave = document.getElementById("btnSaveBundle");
  const spinner = document.getElementById("saveBundleSpinner");
  const btnText = document.getElementById("saveBundleBtnText");

  const editId = document.getElementById("editBundleId").value.trim();
  const title = document.getElementById("formTitle").value.trim();
  const category = document.getElementById("formCategory").value.trim();
  const price = document.getElementById("formPrice").value.trim();
  const originalPrice = document.getElementById("formOriginalPrice").value.trim();
  const reelsCount = parseInt(document.getElementById("formReelsCount").value, 10) || 0;
  const rating = parseFloat(document.getElementById("formRating").value) || 5;
  const reviewsCount = parseInt(document.getElementById("formReviewsCount").value, 10) || 0;
  const description = document.getElementById("formDescription").value.trim();
  const secretLink = document.getElementById("formSecretLink").value.trim();
  const password = document.getElementById("formPassword").value.trim();
  const thumbnailUrl = document.getElementById("formThumbnailUrl").value.trim();
  const status = document.getElementById("formStatusToggle").checked ? "active" : "hidden";
  const sortOrder = document.getElementById("editBundleSortOrder").value;
  const createdAt = document.getElementById("editBundleCreatedAt").value;

  const selectedTags = [];
  document.querySelectorAll("#tagsSelectorGroup input[type='checkbox']:checked").forEach(cb => {
    selectedTags.push(cb.value);
  });

  const bundleData = {
    id: editId || undefined,
    title,
    category,
    price,
    original_price: originalPrice,
    reels_count: reelsCount,
    rating,
    reviews_count: reviewsCount,
    description,
    link: secretLink,
    password,
    thumbnail_url: thumbnailUrl,
    tags: selectedTags.join(", "),
    status,
    sort_order: sortOrder ? Number(sortOrder) : undefined,
    created_at: createdAt || undefined
  };

  btnSave.disabled = true;
  spinner.style.display = "inline-block";
  btnText.style.display = "none";

  try {
    const res = await AdminApi.saveBundle(bundleData);
    if (res && res.success) {
      showToast(`Bundle "${title}" saved successfully!`, "success");
      closeBundleFormModal();
      await loadAdminData();
    } else {
      showToast("Error saving bundle: " + (res.error || "Unknown"), "error");
    }
  } catch (err) {
    showToast("Error saving bundle: " + err.message, "error");
  } finally {
    btnSave.disabled = false;
    spinner.style.display = "none";
    btnText.style.display = "inline";
  }
}

// ----------------------------------------------------------------------------
// 11. DUPLICATE & DELETE
// ----------------------------------------------------------------------------
async function duplicateBundle(bundleId) {
  const target = AdminState.bundles.find(b => b.id === bundleId);
  if (!target) return;

  const clone = JSON.parse(JSON.stringify(target));
  delete clone.id;
  clone.title = `${clone.title} (Copy)`;
  clone.password = generateRandomPassword();
  clone.sort_order = AdminState.bundles.length + 1;
  delete clone.created_at;
  delete clone.updated_at;

  const res = await AdminApi.saveBundle(clone);
  if (res && res.success) {
    showToast("Duplicated bundle created!", "success");
    await loadAdminData();
  }
}

function promptDeleteConfirmation(bundleId) {
  const target = AdminState.bundles.find(b => b.id === bundleId);
  if (!target) return;

  AdminState.deleteTargetId = bundleId;
  const modal = document.getElementById("deleteConfirmModal");
  const titleEl = document.getElementById("deleteBundleTitle");
  if (titleEl) titleEl.textContent = `"${target.title}"`;
  if (modal) modal.classList.add("active");
}

async function confirmDeleteBundle() {
  if (!AdminState.deleteTargetId) return;

  const btn = document.getElementById("confirmDeleteBtn");
  if (btn) btn.disabled = true;

  const res = await AdminApi.deleteBundle(AdminState.deleteTargetId);
  if (res && res.success) {
    showToast("Bundle deleted permanently.", "success");
    closeDeleteModal();
    await loadAdminData();
  } else {
    showToast("Failed to delete bundle: " + (res.error || "Unknown"), "error");
  }

  if (btn) btn.disabled = false;
}

function closeDeleteModal() {
  const modal = document.getElementById("deleteConfirmModal");
  if (modal) modal.classList.remove("active");
  AdminState.deleteTargetId = null;
}

// ----------------------------------------------------------------------------
// 12. AUTHENTICATION & LOGIN FLOW
// ----------------------------------------------------------------------------
async function handleAdminLogin(password) {
  const btn = document.getElementById("adminLoginBtn");
  const spinner = document.getElementById("loginSpinner");
  const btnText = document.getElementById("loginBtnText");

  btn.disabled = true;
  spinner.style.display = "inline-block";
  btnText.style.display = "none";

  try {
    const res = await AdminApi.login(password);
    if (res && res.success) {
      AdminState.adminPassword = password;
      sessionStorage.setItem("reelvault_admin_pass", password);

      document.getElementById("adminLoginScreen").style.display = "none";
      document.getElementById("adminDashboardLayout").style.display = "block";

      showToast("Admin authenticated successfully!", "success");
      await loadAdminData();
    } else {
      showToast("Invalid admin password.", "error");
    }
  } catch (err) {
    showToast("Login error: " + err.message, "error");
  } finally {
    btn.disabled = false;
    spinner.style.display = "none";
    btnText.style.display = "inline";
  }
}

function handleLogout() {
  sessionStorage.removeItem("reelvault_admin_pass");
  AdminState.adminPassword = null;
  document.getElementById("adminDashboardLayout").style.display = "none";
  document.getElementById("adminLoginScreen").style.display = "flex";
  showToast("Logged out successfully.", "info");
}

async function loadAdminData() {
  const res = await AdminApi.getBundles();
  if (res && res.success && Array.isArray(res.bundles)) {
    res.bundles.sort((a, b) => (Number(a.sort_order) || 0) - (Number(b.sort_order) || 0));
    AdminState.bundles = res.bundles;

    const demoNotice = document.getElementById("adminDemoNotice");
    if (demoNotice) demoNotice.style.display = AdminState.isDemoMode ? "flex" : "none";

    updateStats();
    applyAdminFilters();
  }
}

// ----------------------------------------------------------------------------
// 13. EVENT LISTENERS SETUP
// ----------------------------------------------------------------------------
function setupAdminEventListeners() {
  const loginForm = document.getElementById("adminLoginForm");
  const passInput = document.getElementById("adminPasswordInput");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handleAdminLogin(passInput.value.trim());
    });
  }

  const logoutBtn = document.getElementById("adminLogoutBtn");
  if (logoutBtn) logoutBtn.addEventListener("click", handleLogout);

  const searchInput = document.getElementById("adminSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      AdminState.searchQuery = e.target.value;
      applyAdminFilters();
    });
  }

  const statusFilter = document.getElementById("adminStatusFilter");
  if (statusFilter) {
    statusFilter.addEventListener("change", (e) => {
      AdminState.statusFilter = e.target.value;
      applyAdminFilters();
    });
  }

  const refreshBtn = document.getElementById("adminRefreshBtn");
  if (refreshBtn) refreshBtn.addEventListener("click", () => loadAdminData());

  const addBtn = document.getElementById("adminAddBundleBtn");
  if (addBtn) addBtn.addEventListener("click", () => openBundleFormModal(null));

  const saveReorderBtn = document.getElementById("saveReorderBtn");
  if (saveReorderBtn) saveReorderBtn.addEventListener("click", handleSaveReorder);

  // Table Row Action Delegation
  const tbody = document.getElementById("adminTableBody");
  if (tbody) {
    tbody.addEventListener("click", async (e) => {
      const btn = e.target.closest("button[data-action]");
      const toggle = e.target.closest("input[data-action='toggle-status']");

      if (toggle) {
        const id = toggle.dataset.id;
        const newStatus = toggle.checked ? "active" : "hidden";
        await AdminApi.quickToggle(id, "status", newStatus);
        const item = AdminState.bundles.find(b => b.id === id);
        if (item) item.status = newStatus;
        updateStats();
        showToast(`Bundle status updated to ${newStatus}.`, "info");
        return;
      }

      if (!btn) return;
      const action = btn.dataset.action;
      const id = btn.dataset.id;

      switch (action) {
        case "edit":
          const b = AdminState.bundles.find(item => item.id === id);
          if (b) openBundleFormModal(b);
          break;
        case "duplicate":
          duplicateBundle(id);
          break;
        case "delete":
          promptDeleteConfirmation(id);
          break;
        case "move-up":
          moveBundle(id, "up");
          break;
        case "move-down":
          moveBundle(id, "down");
          break;
        case "toggle-trending": {
          const item = AdminState.bundles.find(item => item.id === id);
          if (item) {
            let tags = (item.tags || "").split(",").map(t => t.trim().toLowerCase()).filter(Boolean);
            if (tags.includes("trending")) {
              tags = tags.filter(t => t !== "trending");
            } else {
              tags.push("trending");
            }
            const updated = tags.join(", ");
            item.tags = updated;
            await AdminApi.quickToggle(id, "tags", updated);
            applyAdminFilters();
            updateStats();
            showToast("Trending tag toggled.", "info");
          }
          break;
        }
        case "toggle-new": {
          const item = AdminState.bundles.find(item => item.id === id);
          if (item) {
            let tags = (item.tags || "").split(",").map(t => t.trim().toLowerCase()).filter(Boolean);
            if (tags.includes("new")) {
              tags = tags.filter(t => t !== "new");
            } else {
              tags.push("new");
            }
            const updated = tags.join(", ");
            item.tags = updated;
            await AdminApi.quickToggle(id, "tags", updated);
            applyAdminFilters();
            showToast("New tag toggled.", "info");
          }
          break;
        }
      }
    });
  }

  // Form submit & close
  const bundleForm = document.getElementById("bundleEditForm");
  const modalClose = document.getElementById("bundleEditModalClose");
  const btnCancel = document.getElementById("btnCancelEdit");
  if (bundleForm) bundleForm.addEventListener("submit", handleBundleFormSubmit);
  if (modalClose) modalClose.addEventListener("click", closeBundleFormModal);
  if (btnCancel) btnCancel.addEventListener("click", closeBundleFormModal);

  // Password Generator
  const genBtn = document.getElementById("btnGenPassword");
  const passField = document.getElementById("formPassword");
  if (genBtn && passField) {
    genBtn.addEventListener("click", () => {
      passField.value = generateRandomPassword();
    });
  }

  // Cloudinary Dropzone & File Input
  const dropzone = document.getElementById("thumbnailDropzone");
  const fileInput = document.getElementById("thumbnailFileInput");
  const thumbUrlInput = document.getElementById("formThumbnailUrl");
  const previewImg = document.getElementById("thumbPreviewImg");

  if (dropzone && fileInput) {
    dropzone.addEventListener("click", () => fileInput.click());

    dropzone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropzone.style.borderColor = "var(--accent-orange)";
    });

    dropzone.addEventListener("dragleave", () => {
      dropzone.style.borderColor = "var(--border-input)";
    });

    dropzone.addEventListener("drop", async (e) => {
      e.preventDefault();
      dropzone.style.borderColor = "var(--border-input)";
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        await handleUpload(e.dataTransfer.files[0]);
      }
    });

    fileInput.addEventListener("change", async (e) => {
      if (e.target.files && e.target.files[0]) {
        await handleUpload(e.target.files[0]);
      }
    });
  }

  async function handleUpload(file) {
    try {
      showToast("Uploading thumbnail to Cloudinary...", "info");
      const url = await uploadToCloudinary(file);
      if (thumbUrlInput) thumbUrlInput.value = url;
      if (previewImg) {
        previewImg.src = url;
        previewImg.style.display = "block";
      }
      syncLiveModalPreview();
      showToast("Thumbnail uploaded successfully!", "success");
    } catch (err) {
      showToast("Upload failed: " + err.message, "error");
    }
  }

  if (thumbUrlInput && previewImg) {
    thumbUrlInput.addEventListener("input", (e) => {
      const val = e.target.value.trim();
      if (val) {
        previewImg.src = val;
        previewImg.style.display = "block";
      } else {
        previewImg.style.display = "none";
      }
      syncLiveModalPreview();
    });
  }

  // Live Preview Event Listeners for real-time visual feedback
  ["formTitle", "formCategory", "formPrice", "formOriginalPrice", "formReelsCount"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", syncLiveModalPreview);
  });

  const quickCats = document.getElementById("quickCatPills");
  if (quickCats) {
    quickCats.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-cat]");
      if (btn) {
        const catInput = document.getElementById("formCategory");
        if (catInput) {
          catInput.value = btn.dataset.cat;
          syncLiveModalPreview();
        }
      }
    });
  }

  const tagsGroup = document.getElementById("tagsSelectorGroup");
  if (tagsGroup) {
    tagsGroup.addEventListener("change", syncLiveModalPreview);
  }

  // Delete Confirm Modal
  const cancelDelBtn = document.getElementById("cancelDeleteBtn");
  const confirmDelBtn = document.getElementById("confirmDeleteBtn");
  if (cancelDelBtn) cancelDelBtn.addEventListener("click", closeDeleteModal);
  if (confirmDelBtn) confirmDelBtn.addEventListener("click", confirmDeleteBundle);
}

// ----------------------------------------------------------------------------
// 14. INITIALIZATION
// ----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  AdminTheme.init();
  setupAdminEventListeners();

  const savedPass = sessionStorage.getItem("reelvault_admin_pass");
  if (savedPass) {
    handleAdminLogin(savedPass);
  }
});

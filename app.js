/**
 * ============================================================================
 * REEL BUNDLE STORE - ETSY-STYLE MARKETPLACE CONTROLLER (app.js)
 * ============================================================================
 */

const CONFIG = {
  APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbwvLHcog8-fE2jrk8WvzX9YcDV7Nff6UBA-dZ-jzXJLYKgSJ-lJf3DPgw3i7-JguEVI/exec",
  CLOUDINARY_CLOUD_NAME: "demo-cloud",
  CLOUDINARY_UPLOAD_PRESET: "o5JUKpC9_HBc5pTO0OO6U7sxpQo",
  CLOUDINARY_FOLDER: "reel_bundle_thumbnails",
  STORE_NAME: "ReelVault PRO",
  STORE_TAGLINE: "The Premier Digital Marketplace for Viral Reels Bundles",
  CURRENCY_SYMBOL: "₹",
  CONTACT: {
    instagram: {
      enabled: true,
      username: "giveme_8",
      profileUrl: "https://instagram.com/giveme_8",
      dmUrl: "https://ig.me/m/giveme_8"
    },
    email: "Support@betterbundle.in"
  }
};

const DEMO_BUNDLES = [
  {
    "id": "RB-6870",
    "title": "Skinny to Strong: Weight Gain Plan (Exercise + Diet)",
    "description": "Premium Health & Fitness collection: Skinny to Strong: Weight Gain Plan (Exercise + Diet). Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793326297400-276212283.png",
    "price": "129",
    "original_price": "399",
    "category": "Health & Fitness",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 50,
    "sort_order": 1,
    "created_at": "2026-10-30T21:50:14.640Z"
  },
  {
    "id": "RB-5280",
    "title": "1300+ AI Couple Reels Bundle – Viral Couple Reels for Instagram & YouTube Shorts Growth",
    "description": "Premium AI & Technology pack: 1300+ AI Couple Reels Bundle – Viral Couple Reels for Instagram & YouTube Shorts Growth. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/10/1300-AI-Couple-Reels-Bundle-converted-600x600.webp",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 1300,
    "rating": 5,
    "reviews_count": 60,
    "sort_order": 1,
    "created_at": "2026-10-30T22:08:58.084Z"
  },
  {
    "id": "RB-4441",
    "title": "🚀 80M+ DIGITAL PRODUCTS MEGA DRIVE 🔥",
    "description": "Premium Mega Bundles collection: 🚀 80M+ DIGITAL PRODUCTS MEGA DRIVE 🔥. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793339064098-867527002.png",
    "price": "199",
    "original_price": "599",
    "category": "Mega Bundles",
    "tags": "best-seller, trending, mega-pack",
    "reels_count": 80000000,
    "rating": 5,
    "reviews_count": 61,
    "sort_order": 2,
    "created_at": "2026-10-30T21:50:17.575Z"
  },
  {
    "id": "RB-9147",
    "title": "1800+ Anime Reels Bundle – Premium Viral Reels Bundle for Fast Instagram & TikTok Growth",
    "description": "Premium Animation & Cartoons pack: 1800+ Anime Reels Bundle – Premium Viral Reels Bundle for Fast Instagram & TikTok Growth. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/08/1800-ANIM-REELS-BUNDLE-600x600.jpg",
    "price": "179",
    "original_price": "499",
    "category": "Animation & Cartoons",
    "tags": "trending, popular",
    "reels_count": 1800,
    "rating": 5,
    "reviews_count": 73,
    "sort_order": 2,
    "created_at": "2026-10-30T22:09:03.438Z"
  },
  {
    "id": "RB-4460",
    "title": "Job Less Son",
    "description": "Premium Mega Bundles collection: Job Less Son. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793009090795-82788979.png",
    "price": "129",
    "original_price": "399",
    "category": "Mega Bundles",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 72,
    "sort_order": 3,
    "created_at": "2026-10-30T21:50:20.601Z"
  },
  {
    "id": "RB-8674",
    "title": "250+ Anime ASMR Cooking Reels Bundle – Best Cooking Reels Bundle for Instagram Growth",
    "description": "Premium Animation & Cartoons pack: 250+ Anime ASMR Cooking Reels Bundle – Best Cooking Reels Bundle for Instagram Growth. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/08/1-2-600x600.webp",
    "price": "129",
    "original_price": "399",
    "category": "Animation & Cartoons",
    "tags": "new, trending",
    "reels_count": 250,
    "rating": 5,
    "reviews_count": 86,
    "sort_order": 3,
    "created_at": "2026-10-30T22:09:08.144Z"
  },
  {
    "id": "RB-3871",
    "title": "The Hollow Hour",
    "description": "Premium Mega Bundles collection: The Hollow Hour. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1792671112936-451361500.png",
    "price": "129",
    "original_price": "399",
    "category": "Mega Bundles",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 83,
    "sort_order": 4,
    "created_at": "2026-10-30T21:50:23.503Z"
  },
  {
    "id": "RB-8589",
    "title": "2500+ Car Reels Bundle Download – Ultimate Way to Grow Instagram & YouTube Shorts Fast",
    "description": "Premium Luxury & Lifestyle pack: 2500+ Car Reels Bundle Download – Ultimate Way to Grow Instagram & YouTube Shorts Fast. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/01/ChatGPT-Image-Apr-30-2026-10_19_41-AM-600x600.webp",
    "price": "179",
    "original_price": "499",
    "category": "Luxury & Lifestyle",
    "tags": "trending, popular",
    "reels_count": 2500,
    "rating": 5,
    "reviews_count": 99,
    "sort_order": 4,
    "created_at": "2026-10-30T22:09:12.159Z"
  },
  {
    "id": "RB-3347",
    "title": "🔥 1 Million Reels Bundle – All Categories | Premium 3D, AI, Motivation,",
    "description": "Premium AI & Technology collection: 🔥 1 Million Reels Bundle – All Categories | Premium 3D, AI, Motivation,. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793100760490-265148815.png",
    "price": "199",
    "original_price": "599",
    "category": "AI & Technology",
    "tags": "best-seller, trending, mega-pack",
    "reels_count": 1000000,
    "rating": 5,
    "reviews_count": 94,
    "sort_order": 5,
    "created_at": "2026-10-30T21:50:26.303Z"
  },
  {
    "id": "RB-6420",
    "title": "600+ Miniature World AI Reels Bundle – Viral Instagram Reels Video for YouTube Shorts",
    "description": "Premium AI & Technology pack: 600+ Miniature World AI Reels Bundle – Viral Instagram Reels Video for YouTube Shorts. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/06/1-2-600x600.webp",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 600,
    "rating": 5,
    "reviews_count": 112,
    "sort_order": 5,
    "created_at": "2026-10-30T22:09:15.592Z"
  },
  {
    "id": "RB-7178",
    "title": "How to Make AI Videos for FREE 🤖 | Best Free AI Video Tools for Beginners (2026",
    "description": "Premium AI & Technology collection: How to Make AI Videos for FREE 🤖 | Best Free AI Video Tools for Beginners (2026. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793100618525-725155886.png",
    "price": "99",
    "original_price": "299",
    "category": "AI & Technology",
    "tags": "special-offer, trending",
    "reels_count": 2026,
    "rating": 5,
    "reviews_count": 105,
    "sort_order": 6,
    "created_at": "2026-10-30T21:50:29.138Z"
  },
  {
    "id": "RB-5142",
    "title": "800+ Rust Restoration AI Reels Bundle – Viral Reel Bundle for Instagram & YouTube Shorts",
    "description": "Premium AI & Technology pack: 800+ Rust Restoration AI Reels Bundle – Viral Reel Bundle for Instagram & YouTube Shorts. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/05/800-Rust-Restoration-AI-Reels-Bundle-1-600x600.webp",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 800,
    "rating": 5,
    "reviews_count": 125,
    "sort_order": 6,
    "created_at": "2026-10-30T22:09:19.098Z"
  },
  {
    "id": "RB-2740",
    "title": "Kannada motivation queot",
    "description": "Premium Motivation & Mindset collection: Kannada motivation queot. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793379977442-935796962.png",
    "price": "129",
    "original_price": "399",
    "category": "Motivation & Mindset",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 116,
    "sort_order": 7,
    "created_at": "2026-10-30T21:50:32.105Z"
  },
  {
    "id": "RB-9157",
    "title": "750+ Abandoned Place Reels Bundle – Best AI Video Bundle to Grow Instagram & YouTube Shorts",
    "description": "Premium AI & Technology pack: 750+ Abandoned Place Reels Bundle – Best AI Video Bundle to Grow Instagram & YouTube Shorts. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/05/1-1-1-600x600.webp",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 750,
    "rating": 5,
    "reviews_count": 138,
    "sort_order": 7,
    "created_at": "2026-10-30T22:09:24.088Z"
  },
  {
    "id": "RB-4789",
    "title": "Kids Worksheets",
    "description": "Premium Digital Templates & Guides collection: Kids Worksheets. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/store_18598_1793326733566.png",
    "price": "129",
    "original_price": "399",
    "category": "Digital Templates & Guides",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 127,
    "sort_order": 8,
    "created_at": "2026-10-30T21:50:35.103Z"
  },
  {
    "id": "RB-6513",
    "title": "600+ Place Restoration AI Reels Bundle – Viral Way to Grow Instagram & YouTube Shorts Fast",
    "description": "Premium AI & Technology pack: 600+ Place Restoration AI Reels Bundle – Viral Way to Grow Instagram & YouTube Shorts Fast. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/05/1-1-600x600.webp",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 600,
    "rating": 5,
    "reviews_count": 151,
    "sort_order": 8,
    "created_at": "2026-10-30T22:09:28.002Z"
  },
  {
    "id": "RB-3316",
    "title": "4000+ Viral Ulti Duniya AI Cartoon Reels Bundle 2026 | Funny Desi Cartoon Storie",
    "description": "Premium AI & Technology collection: 4000+ Viral Ulti Duniya AI Cartoon Reels Bundle 2026 | Funny Desi Cartoon Storie. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793366482933-847660695.jpg",
    "price": "179",
    "original_price": "499",
    "category": "AI & Technology",
    "tags": "trending, popular",
    "reels_count": 4000,
    "rating": 5,
    "reviews_count": 138,
    "sort_order": 9,
    "created_at": "2026-10-30T21:50:37.563Z"
  },
  {
    "id": "RB-5062",
    "title": "500+ Floor Transformation AI Reels Bundle – Stunning Viral Floor Effects for Explosive Growth in 2026",
    "description": "Premium AI & Technology pack: 500+ Floor Transformation AI Reels Bundle – Stunning Viral Floor Effects for Explosive Growth in 2026. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/02/500-Floor-Transformation-Ai-Reels-Bundle-1.jpg",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 164,
    "sort_order": 9,
    "created_at": "2026-10-30T22:09:33.130Z"
  },
  {
    "id": "RB-4781",
    "title": "3000+ Viral AI Baby Reels Bundle 2026 | Kuchu Puchu Cute & Funny Videos |",
    "description": "Premium AI & Technology collection: 3000+ Viral AI Baby Reels Bundle 2026 | Kuchu Puchu Cute & Funny Videos |. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793366122722-671249957.jpg",
    "price": "179",
    "original_price": "499",
    "category": "AI & Technology",
    "tags": "trending, popular",
    "reels_count": 3000,
    "rating": 5,
    "reviews_count": 149,
    "sort_order": 10,
    "created_at": "2026-10-30T21:50:41.313Z"
  },
  {
    "id": "RB-8870",
    "title": "250+ AI Hulk Reels – Powerful Hulk Story Reels for Viral Instagram Growth",
    "description": "Premium Animation & Cartoons pack: 250+ AI Hulk Reels – Powerful Hulk Story Reels for Viral Instagram Growth. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/01/250-Ai-Hulk-Story-Reels-Bundle.webp",
    "price": "129",
    "original_price": "399",
    "category": "Animation & Cartoons",
    "tags": "new, trending",
    "reels_count": 250,
    "rating": 5,
    "reviews_count": 177,
    "sort_order": 10,
    "created_at": "2026-10-30T22:09:36.501Z"
  },
  {
    "id": "RB-8362",
    "title": "Templates (Dhanteras, Diwali, Govardhan Puja, Bhai Dooj, Chhath, Kartik Purnima)",
    "description": "Premium Digital Templates & Guides collection: Templates (Dhanteras, Diwali, Govardhan Puja, Bhai Dooj, Chhath, Kartik Purnima). Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793364293264-986837926.png",
    "price": "129",
    "original_price": "399",
    "category": "Digital Templates & Guides",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 160,
    "sort_order": 11,
    "created_at": "2026-10-30T21:50:45.567Z"
  },
  {
    "id": "RB-1761",
    "title": "450+ Health Awareness AI Reels Bundle – Powerful Viral Health Content for Explosive Growth in 2025",
    "description": "Premium Health & Fitness pack: 450+ Health Awareness AI Reels Bundle – Powerful Viral Health Content for Explosive Growth in 2025. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/02/450-Health-Awareness-Ai-Reels-Bundle-1.jpg",
    "price": "129",
    "original_price": "399",
    "category": "Health & Fitness",
    "tags": "new, trending",
    "reels_count": 450,
    "rating": 5,
    "reviews_count": 190,
    "sort_order": 11,
    "created_at": "2026-10-30T22:09:41.095Z"
  },
  {
    "id": "RB-1816",
    "title": "ARTIFICIAL INTELLIGENCE-UNLOCKED",
    "description": "Premium AI & Technology collection: ARTIFICIAL INTELLIGENCE-UNLOCKED. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793362050215-771622387.png",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 171,
    "sort_order": 12,
    "created_at": "2026-10-30T21:50:49.401Z"
  },
  {
    "id": "RB-5940",
    "title": "800+ AI Horror Reels – Terrifying Viral Horror Content for Explosive Growth",
    "description": "Premium Luxury & Lifestyle pack: 800+ AI Horror Reels – Terrifying Viral Horror Content for Explosive Growth. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/01/800-AI-Horror-Reels-bundle-1.webp",
    "price": "129",
    "original_price": "399",
    "category": "Luxury & Lifestyle",
    "tags": "new, trending",
    "reels_count": 800,
    "rating": 5,
    "reviews_count": 203,
    "sort_order": 12,
    "created_at": "2026-10-30T22:09:46.912Z"
  },
  {
    "id": "RB-1921",
    "title": "Dua for Rizq, Business Barakah & Success with Arabic & English.",
    "description": "Premium Earning & Wealth collection: Dua for Rizq, Business Barakah & Success with Arabic & English.. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793360175910-540635504.jpg",
    "price": "129",
    "original_price": "399",
    "category": "Earning & Wealth",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 182,
    "sort_order": 13,
    "created_at": "2026-10-30T21:50:52.534Z"
  },
  {
    "id": "RB-1915",
    "title": "200 Valkyrie AI Reels Bundle Download – Best Way to Grow Instagram & YouTube Shorts Fast",
    "description": "Premium Animation & Cartoons pack: 200 Valkyrie AI Reels Bundle Download – Best Way to Grow Instagram & YouTube Shorts Fast. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/04/2001.webp",
    "price": "129",
    "original_price": "399",
    "category": "Animation & Cartoons",
    "tags": "new, trending",
    "reels_count": 200,
    "rating": 5,
    "reviews_count": 216,
    "sort_order": 13,
    "created_at": "2026-10-30T22:09:49.923Z"
  },
  {
    "id": "RB-8251",
    "title": "100 funny AI video prompts",
    "description": "Premium AI & Technology collection: 100 funny AI video prompts. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793359864539-989335293.jpg",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 100,
    "rating": 5,
    "reviews_count": 193,
    "sort_order": 14,
    "created_at": "2026-10-30T21:50:55.341Z"
  },
  {
    "id": "RB-9397",
    "title": "150+ Dog Dancing Reels Bundle Download – Viral Way to Grow Instagram & YouTube Shorts Fast",
    "description": "Premium Animation & Cartoons pack: 150+ Dog Dancing Reels Bundle Download – Viral Way to Grow Instagram & YouTube Shorts Fast. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/04/150.webp",
    "price": "129",
    "original_price": "399",
    "category": "Animation & Cartoons",
    "tags": "new, trending",
    "reels_count": 150,
    "rating": 5,
    "reviews_count": 229,
    "sort_order": 14,
    "created_at": "2026-10-30T22:09:52.940Z"
  },
  {
    "id": "RB-9956",
    "title": "3000+ Doraemon Cartoon Reels Bundle 2026 | HD Cartoon Video Collection |",
    "description": "Premium Animation & Cartoons collection: 3000+ Doraemon Cartoon Reels Bundle 2026 | HD Cartoon Video Collection |. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793348840383-829589450.jpg",
    "price": "179",
    "original_price": "499",
    "category": "Animation & Cartoons",
    "tags": "trending, popular",
    "reels_count": 3000,
    "rating": 5,
    "reviews_count": 204,
    "sort_order": 15,
    "created_at": "2026-10-30T21:50:58.331Z"
  },
  {
    "id": "RB-2750",
    "title": "700+ Cute AI Monster Reels Bundle Download – Best Viral Instagram Pack (Instant Access)",
    "description": "Premium Animation & Cartoons pack: 700+ Cute AI Monster Reels Bundle Download – Best Viral Instagram Pack (Instant Access). Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/03/700-Cute-Ai-Monster-product-image-1.webp",
    "price": "129",
    "original_price": "399",
    "category": "Animation & Cartoons",
    "tags": "new, trending",
    "reels_count": 700,
    "rating": 5,
    "reviews_count": 242,
    "sort_order": 15,
    "created_at": "2026-10-30T22:09:56.845Z"
  },
  {
    "id": "RB-7260",
    "title": "THE CANVA INCOME GUIDE From Beginner to Earner",
    "description": "Premium Digital Templates & Guides collection: THE CANVA INCOME GUIDE From Beginner to Earner. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793347910997-344448188.jpeg",
    "price": "149",
    "original_price": "449",
    "category": "Digital Templates & Guides",
    "tags": "instant-download, popular",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 215,
    "sort_order": 16,
    "created_at": "2026-10-30T21:51:01.382Z"
  },
  {
    "id": "RB-8725",
    "title": "1000 AI Animal Vlogging Bundle Download – Viral Way to Grow Instagram & YouTube Shorts Fast",
    "description": "Premium AI & Technology pack: 1000 AI Animal Vlogging Bundle Download – Viral Way to Grow Instagram & YouTube Shorts Fast. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/12/AI_Animal%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86ics_Bundle_202604091508.webp",
    "price": "179",
    "original_price": "499",
    "category": "AI & Technology",
    "tags": "trending, popular",
    "reels_count": 1000,
    "rating": 5,
    "reviews_count": 255,
    "sort_order": 16,
    "created_at": "2026-10-30T22:10:00.722Z"
  },
  {
    "id": "RB-1748",
    "title": "4k quality videos top editor",
    "description": "Premium Mega Bundles collection: 4k quality videos top editor. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793003353221-150540740.jpg",
    "price": "179",
    "original_price": "499",
    "category": "Mega Bundles",
    "tags": "trending, popular",
    "reels_count": 4000,
    "rating": 5,
    "reviews_count": 226,
    "sort_order": 17,
    "created_at": "2026-10-30T21:51:05.358Z"
  },
  {
    "id": "RB-4411",
    "title": "400+ Horror Reels Bundle Download – Ultimate Way to Grow Instagram & YouTube Shorts Fast",
    "description": "Premium Luxury & Lifestyle pack: 400+ Horror Reels Bundle Download – Ultimate Way to Grow Instagram & YouTube Shorts Fast. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/04/400-Ugly-Reels-Bundle.webp",
    "price": "129",
    "original_price": "399",
    "category": "Luxury & Lifestyle",
    "tags": "new, trending",
    "reels_count": 400,
    "rating": 5,
    "reviews_count": 268,
    "sort_order": 17,
    "created_at": "2026-10-30T22:10:04.158Z"
  },
  {
    "id": "RB-5550",
    "title": "4000+ Ulti Duniya Reels Bundle",
    "description": "Premium Animation & Cartoons collection: 4000+ Ulti Duniya Reels Bundle. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1792994276748-119778980.jpg",
    "price": "179",
    "original_price": "499",
    "category": "Animation & Cartoons",
    "tags": "trending, popular",
    "reels_count": 4000,
    "rating": 5,
    "reviews_count": 237,
    "sort_order": 18,
    "created_at": "2026-10-30T21:51:08.817Z"
  },
  {
    "id": "RB-4223",
    "title": "1000+ Luxury Lifestyle Reels Bundle – Premium Viral Content for Powerful Instagram Growth in 2026",
    "description": "Premium Luxury & Lifestyle pack: 1000+ Luxury Lifestyle Reels Bundle – Premium Viral Content for Powerful Instagram Growth in 2026. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/08/1000gg.webp",
    "price": "179",
    "original_price": "499",
    "category": "Luxury & Lifestyle",
    "tags": "trending, popular",
    "reels_count": 1000,
    "rating": 5,
    "reviews_count": 281,
    "sort_order": 18,
    "created_at": "2026-10-30T22:10:08.325Z"
  },
  {
    "id": "RB-1750",
    "title": "MINECRAFT REEL BUBDELS",
    "description": "Premium Gaming & Esports collection: MINECRAFT REEL BUBDELS. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1792829516518-663828337.jpg",
    "price": "129",
    "original_price": "399",
    "category": "Gaming & Esports",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 248,
    "sort_order": 19,
    "created_at": "2026-10-30T21:51:13.199Z"
  },
  {
    "id": "RB-2798",
    "title": "1200+ Gym Workout Videos Bundle – Powerful Animated Fitness Training Videos for Explosive Results",
    "description": "Premium Software & Tools pack: 1200+ Gym Workout Videos Bundle – Powerful Animated Fitness Training Videos for Explosive Results. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/09/1200.webp",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 294,
    "sort_order": 19,
    "created_at": "2026-10-30T22:10:11.887Z"
  },
  {
    "id": "RB-4296",
    "title": "2000+ ANIME REELS BUNDLE",
    "description": "Premium Animation & Cartoons collection: 2000+ ANIME REELS BUNDLE. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1792940063508-494345690.jpg",
    "price": "179",
    "original_price": "499",
    "category": "Animation & Cartoons",
    "tags": "trending, popular",
    "reels_count": 2000,
    "rating": 5,
    "reviews_count": 259,
    "sort_order": 20,
    "created_at": "2026-10-30T21:51:16.803Z"
  },
  {
    "id": "RB-4892",
    "title": "750+ Unreality AI Reels Bundle – Insane Viral AI Reels for Explosive Instagram Growth in 2026",
    "description": "Premium Luxury & Lifestyle pack: 750+ Unreality AI Reels Bundle – Insane Viral AI Reels for Explosive Instagram Growth in 2026. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/02/750-Unreality-Ai-Reels-Bundle-1-1.jpg",
    "price": "129",
    "original_price": "399",
    "category": "Luxury & Lifestyle",
    "tags": "new, trending",
    "reels_count": 750,
    "rating": 5,
    "reviews_count": 307,
    "sort_order": 20,
    "created_at": "2026-10-30T22:10:16.447Z"
  },
  {
    "id": "RB-7699",
    "title": "Premium Thumbnail Materials 💀",
    "description": "Premium Digital Templates & Guides collection: Premium Thumbnail Materials 💀. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793128103211-620522930.png",
    "price": "129",
    "original_price": "399",
    "category": "Digital Templates & Guides",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 270,
    "sort_order": 21,
    "created_at": "2026-10-30T21:51:19.295Z"
  },
  {
    "id": "RB-3842",
    "title": "1000+ Motivational Reels Bundle – Powerful Viral Motivation Videos for Explosive Growth",
    "description": "Premium Motivation & Mindset pack: 1000+ Motivational Reels Bundle – Powerful Viral Motivation Videos for Explosive Growth. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/11/1000-Money-Motivational-Reels-Bundle.webp",
    "price": "179",
    "original_price": "499",
    "category": "Motivation & Mindset",
    "tags": "trending, popular",
    "reels_count": 1000,
    "rating": 5,
    "reviews_count": 320,
    "sort_order": 21,
    "created_at": "2026-10-30T22:10:18.805Z"
  },
  {
    "id": "RB-9698",
    "title": "🔥 Kaushik’s $50 Premium Master PDF — Now at an Affordable Price! 💸",
    "description": "Premium Digital Templates & Guides collection: 🔥 Kaushik’s $50 Premium Master PDF — Now at an Affordable Price! 💸. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1792931658647-825150042.webp",
    "price": "149",
    "original_price": "449",
    "category": "Digital Templates & Guides",
    "tags": "instant-download, popular",
    "reels_count": 50,
    "rating": 5,
    "reviews_count": 281,
    "sort_order": 22,
    "created_at": "2026-10-30T21:51:22.111Z"
  },
  {
    "id": "RB-3266",
    "title": "Launch a Digital Product Website",
    "description": "Premium Mega Bundles pack: Launch a Digital Product Website. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/03/Untitled-design-4.webp",
    "price": "129",
    "original_price": "399",
    "category": "Mega Bundles",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 333,
    "sort_order": 22,
    "created_at": "2026-10-30T22:10:22.818Z"
  },
  {
    "id": "RB-6686",
    "title": "Money and Career",
    "description": "Premium Earning & Wealth collection: Money and Career. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793047389835-527992491.png",
    "price": "129",
    "original_price": "399",
    "category": "Earning & Wealth",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 292,
    "sort_order": 23,
    "created_at": "2026-10-30T21:51:25.313Z"
  },
  {
    "id": "RB-6750",
    "title": "1100+ Cute AI Toons Reels Bundle – Powerful Cute Cartoon Content for Viral Growth",
    "description": "Premium Animation & Cartoons pack: 1100+ Cute AI Toons Reels Bundle – Powerful Cute Cartoon Content for Viral Growth. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/01/1100-Cute-Ai-Toons-Reels-Bundle-1-1.jpg",
    "price": "129",
    "original_price": "399",
    "category": "Animation & Cartoons",
    "tags": "new, trending",
    "reels_count": 1100,
    "rating": 5,
    "reviews_count": 346,
    "sort_order": 23,
    "created_at": "2026-10-30T22:10:26.333Z"
  },
  {
    "id": "RB-3583",
    "title": "📘 Screen Smart – End the Daily Phone & Gaming Battle at Home",
    "description": "Premium Gaming & Esports collection: 📘 Screen Smart – End the Daily Phone & Gaming Battle at Home. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793298784182-339881401.jpg",
    "price": "129",
    "original_price": "399",
    "category": "Gaming & Esports",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 303,
    "sort_order": 24,
    "created_at": "2026-10-30T21:51:28.595Z"
  },
  {
    "id": "RB-6961",
    "title": "1000+ AI Reels Bundle – Ultimate Viral Caught On Camera Reels Bundle for Explosive Growth",
    "description": "Premium AI & Technology pack: 1000+ AI Reels Bundle – Ultimate Viral Caught On Camera Reels Bundle for Explosive Growth. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/01/1000-Caught-On-Camera-Ai-Reels-Bundle-1-1.jpg",
    "price": "179",
    "original_price": "499",
    "category": "AI & Technology",
    "tags": "trending, popular",
    "reels_count": 1000,
    "rating": 5,
    "reviews_count": 359,
    "sort_order": 24,
    "created_at": "2026-10-30T22:10:29.657Z"
  },
  {
    "id": "RB-6455",
    "title": "Automated Solar Power Plant Bill of Quantities (BOQ) – Excel Workbook",
    "description": "Premium Digital Templates & Guides collection: Automated Solar Power Plant Bill of Quantities (BOQ) – Excel Workbook. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793273767084-946345219.jpeg",
    "price": "149",
    "original_price": "449",
    "category": "Digital Templates & Guides",
    "tags": "instant-download, popular",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 314,
    "sort_order": 25,
    "created_at": "2026-10-30T21:51:32.646Z"
  },
  {
    "id": "RB-8159",
    "title": "1200+ Cute Baby AI Reels Bundle – Powerful Viral Reels Bundle for Fast Growth",
    "description": "Premium Animation & Cartoons pack: 1200+ Cute Baby AI Reels Bundle – Powerful Viral Reels Bundle for Fast Growth. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/01/1200-Cute-Baby-Ai-Reels-Bundle-1.webp",
    "price": "179",
    "original_price": "499",
    "category": "Animation & Cartoons",
    "tags": "trending, popular",
    "reels_count": 1200,
    "rating": 5,
    "reviews_count": 372,
    "sort_order": 25,
    "created_at": "2026-10-30T22:10:33.703Z"
  },
  {
    "id": "RB-8285",
    "title": "Premium Digital Products – Instant Download",
    "description": "Premium Mega Bundles collection: Premium Digital Products – Instant Download. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793270657503-13943420.png",
    "price": "129",
    "original_price": "399",
    "category": "Mega Bundles",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 325,
    "sort_order": 26,
    "created_at": "2026-10-30T21:51:36.317Z"
  },
  {
    "id": "RB-9385",
    "title": "200+ Futuristic AI Reels Bundle – Powerful Machine Reels for Viral Growth in 2026",
    "description": "Premium AI & Technology pack: 200+ Futuristic AI Reels Bundle – Powerful Machine Reels for Viral Growth in 2026. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/02/1-1.jpg",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 200,
    "rating": 5,
    "reviews_count": 385,
    "sort_order": 26,
    "created_at": "2026-10-30T22:10:38.124Z"
  },
  {
    "id": "RB-4885",
    "title": "Creator’s Biggest Editing Pack – All-in-One Creator Bundle | Just ₹99",
    "description": "Premium Mega Bundles collection: Creator’s Biggest Editing Pack – All-in-One Creator Bundle | Just ₹99. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793034649390-54981144.jpg",
    "price": "129",
    "original_price": "399",
    "category": "Mega Bundles",
    "tags": "new, trending",
    "reels_count": 99,
    "rating": 5,
    "reviews_count": 336,
    "sort_order": 27,
    "created_at": "2026-10-30T21:51:40.199Z"
  },
  {
    "id": "RB-8301",
    "title": "250+ Baby Food Eating AI Reels Bundle – Irresistible Viral Baby Reels for Explosive Growth in 2025",
    "description": "Premium Animation & Cartoons pack: 250+ Baby Food Eating AI Reels Bundle – Irresistible Viral Baby Reels for Explosive Growth in 2025. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/02/250-Baby-Food-Eating-Food-Ai-Reels-Bundle-1.jpg",
    "price": "129",
    "original_price": "399",
    "category": "Animation & Cartoons",
    "tags": "new, trending",
    "reels_count": 250,
    "rating": 5,
    "reviews_count": 398,
    "sort_order": 27,
    "created_at": "2026-10-30T22:10:42.536Z"
  },
  {
    "id": "RB-7590",
    "title": "🔥 METABOLIC RESET 90: Melt Fat & Build Lean Muscle in 90 Days! ⚡🚀",
    "description": "Premium Health & Fitness collection: 🔥 METABOLIC RESET 90: Melt Fat & Build Lean Muscle in 90 Days! ⚡🚀. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793126705575-615913921.jpg",
    "price": "129",
    "original_price": "399",
    "category": "Health & Fitness",
    "tags": "new, trending",
    "reels_count": 90,
    "rating": 5,
    "reviews_count": 347,
    "sort_order": 28,
    "created_at": "2026-10-30T21:51:43.556Z"
  },
  {
    "id": "RB-6916",
    "title": "600+ Viral AI Reporting & Vlogging Reels Bundle – Boost Engagement & Grow Fast – HD AI Reels for Social Media Creators",
    "description": "Premium AI & Technology pack: 600+ Viral AI Reporting & Vlogging Reels Bundle – Boost Engagement & Grow Fast – HD AI Reels for Social Media Creators. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/08/1.jpg",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 600,
    "rating": 5,
    "reviews_count": 411,
    "sort_order": 28,
    "created_at": "2026-10-30T22:10:46.665Z"
  },
  {
    "id": "RB-1654",
    "title": "How to earn from ai",
    "description": "Premium AI & Technology collection: How to earn from ai. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793042989901-672179476.jpg",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 358,
    "sort_order": 29,
    "created_at": "2026-10-30T21:51:46.406Z"
  },
  {
    "id": "RB-7032",
    "title": "500+ AI Monkey Vlogs Style Vlogging Video Bundle | Viral AI Video Pack",
    "description": "Premium AI & Technology pack: 500+ AI Monkey Vlogs Style Vlogging Video Bundle | Viral AI Video Pack. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/09/www.bettterbundle.in_.jpg",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 424,
    "sort_order": 29,
    "created_at": "2026-10-30T22:10:50.829Z"
  },
  {
    "id": "RB-5894",
    "title": "premium Instagram Social Media Template Bundle.",
    "description": "Premium Digital Templates & Guides collection: premium Instagram Social Media Template Bundle.. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793035267709-252758265.jpg",
    "price": "129",
    "original_price": "399",
    "category": "Digital Templates & Guides",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 369,
    "sort_order": 30,
    "created_at": "2026-10-30T21:51:49.243Z"
  },
  {
    "id": "RB-8466",
    "title": "1200+ Glass Cutting Reels Bundle – Premium Viral Reels Bundle with AI ASMR Style Satisfying Clips (Amazing Results)",
    "description": "Premium Animation & Cartoons pack: 1200+ Glass Cutting Reels Bundle – Premium Viral Reels Bundle with AI ASMR Style Satisfying Clips (Amazing Results). Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/08/1200-GLASS-CUTTING-AI-ASMR-REELS-BUNDLE-1.jpg",
    "price": "179",
    "original_price": "499",
    "category": "Animation & Cartoons",
    "tags": "trending, popular",
    "reels_count": 1200,
    "rating": 5,
    "reviews_count": 437,
    "sort_order": 30,
    "created_at": "2026-10-30T22:10:54.271Z"
  },
  {
    "id": "RB-8980",
    "title": "Class 9 Civics – Democracy Notes PDF | Easy Revision & Exam Preparation 📚",
    "description": "Premium Digital Templates & Guides collection: Class 9 Civics – Democracy Notes PDF | Easy Revision & Exam Preparation 📚. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793109997018-706028916.jpg",
    "price": "149",
    "original_price": "449",
    "category": "Digital Templates & Guides",
    "tags": "instant-download, popular",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 380,
    "sort_order": 31,
    "created_at": "2026-10-30T21:51:51.800Z"
  },
  {
    "id": "RB-3930",
    "title": "100+ AI ASMR Baby Fruit Eating Reels Bundle – The Ultimate Viral Reels Bundle for Fast Growth in 2026",
    "description": "Premium Animation & Cartoons pack: 100+ AI ASMR Baby Fruit Eating Reels Bundle – The Ultimate Viral Reels Bundle for Fast Growth in 2026. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/11/1.jpg",
    "price": "129",
    "original_price": "399",
    "category": "Animation & Cartoons",
    "tags": "new, trending",
    "reels_count": 100,
    "rating": 5,
    "reviews_count": 450,
    "sort_order": 31,
    "created_at": "2026-10-30T22:10:58.335Z"
  },
  {
    "id": "RB-2886",
    "title": "1000+ AI Health Reels Bundle 🌿💚 | Healthy Lifestyle & Fitness Videos |",
    "description": "Premium Health & Fitness collection: 1000+ AI Health Reels Bundle 🌿💚 | Healthy Lifestyle & Fitness Videos |. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793102233799-881284780.jpg",
    "price": "129",
    "original_price": "399",
    "category": "Health & Fitness",
    "tags": "new, trending",
    "reels_count": 1000,
    "rating": 5,
    "reviews_count": 391,
    "sort_order": 32,
    "created_at": "2026-10-30T21:51:55.022Z"
  },
  {
    "id": "RB-9224",
    "title": "1000+ Interior Design Reels Bundle – Premium High-Impact & Irresistible Reels for Architects & Designers",
    "description": "Premium Luxury & Lifestyle pack: 1000+ Interior Design Reels Bundle – Premium High-Impact & Irresistible Reels for Architects & Designers. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/12/Untitled-design-4.jpg",
    "price": "179",
    "original_price": "499",
    "category": "Luxury & Lifestyle",
    "tags": "trending, popular",
    "reels_count": 1000,
    "rating": 5,
    "reviews_count": 63,
    "sort_order": 32,
    "created_at": "2026-10-30T22:11:01.845Z"
  },
  {
    "id": "RB-5480",
    "title": "1000+ SELF COOKING AI VIDEOS",
    "description": "Premium AI & Technology collection: 1000+ SELF COOKING AI VIDEOS. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793117211411-129129735.jpg",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 1000,
    "rating": 5,
    "reviews_count": 402,
    "sort_order": 33,
    "created_at": "2026-10-30T21:51:57.981Z"
  },
  {
    "id": "RB-4283",
    "title": "AI Story Reels Bundle – Viral Reels for Instagram Growth in 2026 (Trending Content)",
    "description": "Premium AI & Technology pack: AI Story Reels Bundle – Viral Reels for Instagram Growth in 2026 (Trending Content). Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/11/Betterbundle.in-1-1-600x600.jpg",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 2026,
    "rating": 5,
    "reviews_count": 76,
    "sort_order": 33,
    "created_at": "2026-10-30T22:11:05.559Z"
  },
  {
    "id": "RB-3708",
    "title": "3000+ ULTI DUNIYA VIRAL REELS BUNDLE 🔥",
    "description": "Premium Animation & Cartoons collection: 3000+ ULTI DUNIYA VIRAL REELS BUNDLE 🔥. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1793176341823-558691789.png",
    "price": "179",
    "original_price": "499",
    "category": "Animation & Cartoons",
    "tags": "trending, popular",
    "reels_count": 3000,
    "rating": 5,
    "reviews_count": 413,
    "sort_order": 34,
    "created_at": "2026-10-30T21:52:00.387Z"
  },
  {
    "id": "RB-3273",
    "title": "500 Interior Design Reels Bundle – Premium Viral Reels Bundle for Architects & Designers (Stunning Results)",
    "description": "Premium Luxury & Lifestyle pack: 500 Interior Design Reels Bundle – Premium Viral Reels Bundle for Architects & Designers (Stunning Results). Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/08/1-1-600x600.jpg",
    "price": "129",
    "original_price": "399",
    "category": "Luxury & Lifestyle",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 89,
    "sort_order": 34,
    "created_at": "2026-10-30T22:11:08.828Z"
  },
  {
    "id": "RB-8136",
    "title": "2000+ MAD SCIENTIST REELS BUNDLE",
    "description": "Premium Mega Bundles collection: 2000+ MAD SCIENTIST REELS BUNDLE. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1784878825354-700090120.jpg",
    "price": "179",
    "original_price": "499",
    "category": "Mega Bundles",
    "tags": "trending, popular",
    "reels_count": 2000,
    "rating": 5,
    "reviews_count": 424,
    "sort_order": 35,
    "created_at": "2026-10-30T21:52:04.037Z"
  },
  {
    "id": "RB-6664",
    "title": "500+ Viral Reels Bundle for Instagram Growth – Download Viral Reels (70% OFF)",
    "description": "Premium Mega Bundles pack: 500+ Viral Reels Bundle for Instagram Growth – Download Viral Reels (70% OFF). Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/09/500-VIRAL-REELS-BUNDLE-600x600.jpg",
    "price": "129",
    "original_price": "399",
    "category": "Mega Bundles",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 102,
    "sort_order": 35,
    "created_at": "2026-10-30T22:11:12.311Z"
  },
  {
    "id": "RB-1370",
    "title": "5000+ Viral AI Fruit Reels Bundle Free! 🍎 (No Copyright)",
    "description": "Premium AI & Technology collection: 5000+ Viral AI Fruit Reels Bundle Free! 🍎 (No Copyright). Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1779096446315-123194518.png",
    "price": "99",
    "original_price": "299",
    "category": "AI & Technology",
    "tags": "special-offer, trending",
    "reels_count": 5000,
    "rating": 5,
    "reviews_count": 435,
    "sort_order": 36,
    "created_at": "2026-10-30T21:52:07.033Z"
  },
  {
    "id": "RB-2619",
    "title": "5000+ AI Baby Reels Bundle – Viral Baby Content for Instagram, TikTok & YouTube Shorts",
    "description": "Premium Animation & Cartoons pack: 5000+ AI Baby Reels Bundle – Viral Baby Content for Instagram, TikTok & YouTube Shorts. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/08/17507027152581-1024x1024-1-600x600.png",
    "price": "179",
    "original_price": "499",
    "category": "Animation & Cartoons",
    "tags": "trending, popular",
    "reels_count": 5000,
    "rating": 5,
    "reviews_count": 115,
    "sort_order": 36,
    "created_at": "2026-10-30T22:11:16.043Z"
  },
  {
    "id": "RB-3731",
    "title": "Mad scientist 1500+ reel bundle",
    "description": "Premium Mega Bundles collection: Mad scientist 1500+ reel bundle. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1790228206203-183098624.png",
    "price": "129",
    "original_price": "399",
    "category": "Mega Bundles",
    "tags": "new, trending",
    "reels_count": 1500,
    "rating": 5,
    "reviews_count": 446,
    "sort_order": 37,
    "created_at": "2026-10-30T21:52:10.580Z"
  },
  {
    "id": "RB-6266",
    "title": "Adobe InCopy 2026 – Professional Editorial & Content Writing Software",
    "description": "Premium Software & Tools pack: Adobe InCopy 2026 – Professional Editorial & Content Writing Software. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/09/AdobeInCopy-600x600.webp",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 128,
    "sort_order": 37,
    "created_at": "2026-10-30T22:11:19.591Z"
  },
  {
    "id": "RB-1640",
    "title": "Mad Scientist Reels Bundle – 1000+ Ready-To-Post & Copyright-Free Viral Reels",
    "description": "Premium Mega Bundles collection: Mad Scientist Reels Bundle – 1000+ Ready-To-Post & Copyright-Free Viral Reels. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1775318097382-557632989.jpg",
    "price": "99",
    "original_price": "299",
    "category": "Mega Bundles",
    "tags": "special-offer, trending",
    "reels_count": 1000,
    "rating": 5,
    "reviews_count": 457,
    "sort_order": 38,
    "created_at": "2026-10-30T21:52:14.013Z"
  },
  {
    "id": "RB-2639",
    "title": "Adobe Audition 2026 for Windows – Professional Audio Editing Software",
    "description": "Premium Software & Tools pack: Adobe Audition 2026 for Windows – Professional Audio Editing Software. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/09/Audition-600x600.webp",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 141,
    "sort_order": 38,
    "created_at": "2026-10-30T22:11:23.005Z"
  },
  {
    "id": "RB-4821",
    "title": "🧪 1000+ Viral Mad Scientist Reels Bundle 🧪",
    "description": "Premium Mega Bundles collection: 🧪 1000+ Viral Mad Scientist Reels Bundle 🧪. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1783339417307-313774586.jpg",
    "price": "129",
    "original_price": "399",
    "category": "Mega Bundles",
    "tags": "new, trending",
    "reels_count": 1000,
    "rating": 5,
    "reviews_count": 468,
    "sort_order": 39,
    "created_at": "2026-10-30T21:52:16.736Z"
  },
  {
    "id": "RB-4922",
    "title": "Adobe Illustrator 2026 for Windows – Professional Vector Design Software",
    "description": "Premium Software & Tools pack: Adobe Illustrator 2026 for Windows – Professional Vector Design Software. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/12/Illustrator-600x600.webp",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 154,
    "sort_order": 39,
    "created_at": "2026-10-30T22:11:26.592Z"
  },
  {
    "id": "RB-1721",
    "title": "Funny viral this reel bundle",
    "description": "Premium Animation & Cartoons collection: Funny viral this reel bundle. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1779456863735-259840209.jpg",
    "price": "129",
    "original_price": "399",
    "category": "Animation & Cartoons",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 479,
    "sort_order": 40,
    "created_at": "2026-10-30T21:52:19.861Z"
  },
  {
    "id": "RB-1549",
    "title": "Adobe Character Animator for Windows – Professional 2D Animation Software (2026)",
    "description": "Premium Software & Tools pack: Adobe Character Animator for Windows – Professional 2D Animation Software (2026). Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/12/AdobeCharacterAnimator-600x600.webp",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 167,
    "sort_order": 40,
    "created_at": "2026-10-30T22:11:30.876Z"
  },
  {
    "id": "RB-5971",
    "title": "500+ BGMI Reels Bundle - Pro Cinematic Gaming Video Pack for Instagram",
    "description": "Premium Gaming & Esports collection: 500+ BGMI Reels Bundle - Pro Cinematic Gaming Video Pack for Instagram. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/2025/12/ChatGPT-Image-Dec-2-2025-02_45_25-PM.png",
    "price": "129",
    "original_price": "399",
    "category": "Gaming & Esports",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 490,
    "sort_order": 41,
    "created_at": "2026-10-30T21:52:22.757Z"
  },
  {
    "id": "RB-2723",
    "title": "CapCut Pro for PC (Windows) – Lifetime Access & AI Features Unlocked (2026)",
    "description": "Premium Software & Tools pack: CapCut Pro for PC (Windows) – Lifetime Access & AI Features Unlocked (2026). Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/05/ChatGPT-Image-May-31-2026-08_23_46-AM-600x600.webp",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 180,
    "sort_order": 41,
    "created_at": "2026-10-30T22:11:34.235Z"
  },
  {
    "id": "RB-9549",
    "title": "Ultimate 150,000+ Viral Reels Bundle – Free Download | Ready-To-Post HD Reels Collection",
    "description": "Premium Mega Bundles collection: Ultimate 150,000+ Viral Reels Bundle – Free Download | Ready-To-Post HD Reels Collection. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/2025/11/cropped-Picsart_25-11-21_05-18-05-707.jpg",
    "price": "199",
    "original_price": "599",
    "category": "Mega Bundles",
    "tags": "best-seller, trending, mega-pack",
    "reels_count": 150,
    "rating": 5,
    "reviews_count": 51,
    "sort_order": 42,
    "created_at": "2026-10-30T21:52:25.551Z"
  },
  {
    "id": "RB-8185",
    "title": "Adobe Premiere Pro for PC (2026) – Premium Video Editing Software | Instant Delivery",
    "description": "Premium Software & Tools pack: Adobe Premiere Pro for PC (2026) – Premium Video Editing Software | Instant Delivery. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/07/AdobePremierePro-600x600.webp",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 193,
    "sort_order": 42,
    "created_at": "2026-10-30T22:11:37.663Z"
  },
  {
    "id": "RB-2948",
    "title": "1000+ AI Mad Scientist Reels Bundle | Instagram Reels, YouTube Shorts",
    "description": "Premium AI & Technology collection: 1000+ AI Mad Scientist Reels Bundle | Instagram Reels, YouTube Shorts. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1773481786354-725211258.jpg",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "new, trending",
    "reels_count": 1000,
    "rating": 5,
    "reviews_count": 62,
    "sort_order": 43,
    "created_at": "2026-10-30T21:52:28.046Z"
  },
  {
    "id": "RB-8083",
    "title": "Adobe Photoshop Download for PC (2026) – Professional Photo Editing Software",
    "description": "Premium Software & Tools pack: Adobe Photoshop Download for PC (2026) – Professional Photo Editing Software. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/12/AdobePhotoshop2026-600x600.webp",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 206,
    "sort_order": 43,
    "created_at": "2026-10-30T22:11:41.301Z"
  },
  {
    "id": "RB-4464",
    "title": "1000+ Long Movies clips Video bundle",
    "description": "Premium Entertainment collection: 1000+ Long Movies clips Video bundle. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1785039684622-254648333.jpg",
    "price": "129",
    "original_price": "399",
    "category": "Entertainment",
    "tags": "new, trending",
    "reels_count": 1000,
    "rating": 5,
    "reviews_count": 73,
    "sort_order": 44,
    "created_at": "2026-10-30T21:52:31.653Z"
  },
  {
    "id": "RB-4498",
    "title": "Adobe After Effects for PC – Professional Motion Graphics & Video Editing Software (2026)",
    "description": "Premium Software & Tools pack: Adobe After Effects for PC – Professional Motion Graphics & Video Editing Software (2026). Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/12/AfterEffects-600x600.webp",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 219,
    "sort_order": 44,
    "created_at": "2026-10-30T22:11:45.040Z"
  },
  {
    "id": "RB-3187",
    "title": "100 + troll face PNG",
    "description": "Premium Animation & Cartoons collection: 100 + troll face PNG. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1773487078532-957199633.jpg",
    "price": "129",
    "original_price": "399",
    "category": "Animation & Cartoons",
    "tags": "new, trending",
    "reels_count": 100,
    "rating": 5,
    "reviews_count": 84,
    "sort_order": 45,
    "created_at": "2026-10-30T21:52:34.555Z"
  },
  {
    "id": "RB-1951",
    "title": "Adobe Lightroom Classic for PC",
    "description": "Premium Software & Tools pack: Adobe Lightroom Classic for PC. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/09/Lightroom-600x600.webp",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 232,
    "sort_order": 45,
    "created_at": "2026-10-30T22:11:49.105Z"
  },
  {
    "id": "RB-1783",
    "title": "All In One Mega Digital Products Bundle – 15M+ Files, Reels, Templates & Tools",
    "description": "Premium Digital Templates & Guides collection: All In One Mega Digital Products Bundle – 15M+ Files, Reels, Templates & Tools. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1772953433849-269424195.jpg",
    "price": "199",
    "original_price": "599",
    "category": "Digital Templates & Guides",
    "tags": "best-seller, trending, mega-pack",
    "reels_count": 15000000,
    "rating": 5,
    "reviews_count": 95,
    "sort_order": 46,
    "created_at": "2026-10-30T21:52:37.135Z"
  },
  {
    "id": "RB-7042",
    "title": "Adobe InDesign for PC – Professional Desktop Publishing Software (2026)",
    "description": "Premium Software & Tools pack: Adobe InDesign for PC – Professional Desktop Publishing Software (2026). Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/07/InDesign-600x600.webp",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 245,
    "sort_order": 46,
    "created_at": "2026-10-30T22:11:52.481Z"
  },
  {
    "id": "RB-8622",
    "title": "50K+ Viral Mega Reels Bundle 2026 | 8+ Niches | Ready-to-Post | Instant Download",
    "description": "Premium Mega Bundles collection: 50K+ Viral Mega Reels Bundle 2026 | 8+ Niches | Ready-to-Post | Instant Download. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1776192488591-40842882.jpg",
    "price": "199",
    "original_price": "599",
    "category": "Mega Bundles",
    "tags": "best-seller, trending, mega-pack",
    "reels_count": 50000,
    "rating": 5,
    "reviews_count": 106,
    "sort_order": 47,
    "created_at": "2026-10-30T21:52:40.371Z"
  },
  {
    "id": "RB-6522",
    "title": "Internet Download Manager (IDM) for Windows – Instant Delivery (2026)",
    "description": "Premium Software & Tools pack: Internet Download Manager (IDM) for Windows – Instant Delivery (2026). Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2026/06/ChatGPT-Image-Jun-13-2026-03_22_53-PM.webp",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 258,
    "sort_order": 47,
    "created_at": "2026-10-30T22:11:54.944Z"
  },
  {
    "id": "RB-9507",
    "title": "500+ Reels Bundles + Lifetime Updates + Resell Content | Premium Digital Bundle",
    "description": "Premium Mega Bundles collection: 500+ Reels Bundles + Lifetime Updates + Resell Content | Premium Digital Bundle. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1774429178192-262332893.jpg",
    "price": "129",
    "original_price": "399",
    "category": "Mega Bundles",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 117,
    "sort_order": 48,
    "created_at": "2026-10-30T21:52:43.017Z"
  },
  {
    "id": "RB-6629",
    "title": "CorelDRAW Graphics Suite 2025 – Powerful Graphic Design Software for Windows",
    "description": "Premium Software & Tools pack: CorelDRAW Graphics Suite 2025 – Powerful Graphic Design Software for Windows. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/12/CorelDRAW-Graphics-SUITE-600x600.jpg",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 271,
    "sort_order": 48,
    "created_at": "2026-10-30T22:11:58.541Z"
  },
  {
    "id": "RB-9909",
    "title": "Mega Reels Bundle – 5,0,000+ Reels | 120+ Viral Categories",
    "description": "Premium Mega Bundles collection: Mega Reels Bundle – 5,0,000+ Reels | 120+ Viral Categories. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1775279529821-784955976.jpg",
    "price": "199",
    "original_price": "599",
    "category": "Mega Bundles",
    "tags": "best-seller, trending, mega-pack",
    "reels_count": 0,
    "rating": 5,
    "reviews_count": 128,
    "sort_order": 49,
    "created_at": "2026-10-30T21:52:46.017Z"
  },
  {
    "id": "RB-1933",
    "title": "Adobe Animate for Windows – Powerful Lifetime 2D Animation Software",
    "description": "Premium Software & Tools pack: Adobe Animate for Windows – Powerful Lifetime 2D Animation Software. Lifetime instant digital access with commercial license.",
    "thumbnail_url": "https://betterbundle.in/wp-content/uploads/2025/12/Adobe-Animate-600x600.jpg",
    "price": "199",
    "original_price": "799",
    "category": "Software & Tools",
    "tags": "trending, best-seller, software",
    "reels_count": 1,
    "rating": 5,
    "reviews_count": 284,
    "sort_order": 49,
    "created_at": "2026-10-30T22:12:01.718Z"
  },
  {
    "id": "RB-1841",
    "title": "🚀 THE ULTIMATE MEGA REEL BUNDLE",
    "description": "Premium Mega Bundles collection: 🚀 THE ULTIMATE MEGA REEL BUNDLE. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1789480106324-567303241.png",
    "price": "199",
    "original_price": "599",
    "category": "Mega Bundles",
    "tags": "best-seller, trending, mega-pack",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 139,
    "sort_order": 50,
    "created_at": "2026-10-30T21:52:49.297Z"
  },
  {
    "id": "RB-4253",
    "title": "MEGA Reels Bundle",
    "description": "Premium Mega Bundles collection: MEGA Reels Bundle. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1782293142313-717747469.png",
    "price": "199",
    "original_price": "599",
    "category": "Mega Bundles",
    "tags": "best-seller, trending, mega-pack",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 150,
    "sort_order": 51,
    "created_at": "2026-10-30T21:52:52.334Z"
  },
  {
    "id": "RB-9109",
    "title": "500+ 2D Funny Animation Reels | Viral Comedy Clips",
    "description": "Premium Animation & Cartoons collection: 500+ 2D Funny Animation Reels | Viral Comedy Clips. Instant digital access, copyright-free high-definition files ready to post and monetize.",
    "thumbnail_url": "https://credibleearning.com/uploads/image-1777988449844-330335778.png",
    "price": "129",
    "original_price": "399",
    "category": "Animation & Cartoons",
    "tags": "new, trending",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 161,
    "sort_order": 52,
    "created_at": "2026-10-30T21:52:55.000Z"
  },
  {
    "id": "RB-2186",
    "title": "Mahakal Viral Reels Bundle | Lord Shiva Status Clips",
    "description": "**⚡️ Hook:** Turn every scroll into a Shiva‑shocked gasp – the Mahakal Viral Reels Bundle drops divine drama into every feed!  \n\n**What’s inside:**  \n- 🎥 1,200+ vertical (9:16) HD/4K clips of Lord Shiva’s epic moments  \n- 🕉️ Ready‑to‑use “Lord Shiva Status” captions & sound effects  \n- 📂 Seamless organization by theme – Desi myths, cartoon twists, and ultra‑viral cuts  \n- 🔄 Unlimited remix‑friendly formats for TikTok, Instagram, YouTube Shorts & more  \n\n**Why creators & agencies love it:**  \n- 🚀 Boost watch‑time retention with high‑impact, mythic visuals  \n- ✂️ No filming, no editing hassle – plug‑and‑play content that converts  \n- 📈 Perfect for agencies scaling clients’ social reach in seconds  \n\n**Commercial License:** 100 % PLR/MRR – post, edit, brand, or resell the clips without restrictions.  \n\n**Delivery:** Instant Google Drive link; unlock with password **@giveme_8**.  \n\n*Grab the bundle, unleash Mahakal’s viral power today!*",
    "thumbnail_url": "https://onlinedigitalitems.com/wp-content/uploads/2024/03/mahakal.png",
    "price": "99",
    "original_price": "299",
    "category": "Desi & Cartoon Stories",
    "tags": "bestseller, devotional, viral",
    "reels_count": 1200,
    "rating": 4.9,
    "reviews_count": 118,
    "sort_order": 102,
    "created_at": "2026-10-31T16:03:25.803Z"
  },
  {
    "id": "RB-5706",
    "title": "Y2K Aesthetic Streetwear & Graphic Logo Asset Pack",
    "description": "**Hook:** Turn every scroll into a Y2K‑charged binge—your audience won’t be able to look away.  \n\n**What’s inside**  \n- 🎥 750+ vertical 9:16 clips, HD & 4K, ready‑to‑drop  \n- 🌀 Instant‑mix “glitch‑fade”, neon‑flare & retro‑pixel overlays  \n- 🏷️ Editable graphic logos & street‑wear tags in AI & PNG  \n- 📂 Organized Google‑Drive folders for lightning‑fast browsing  \n\n**Why creators & agencies love it**  \n- Boost watch‑time retention with eye‑popping, on‑trend visuals—no filming required.  \n- Plug‑and‑play content that slashes production costs and speeds up turnaround.  \n\n**Commercial License**  \n- 100 % PLR/MRR: post, edit, brand, or resell the assets as your own.  \n\n**Delivery**  \n- Instant Google‑Drive link, password‑protected via **@giveme_8**.  \n\nGrab the Y2K Aesthetic Streetwear & Graphic Logo Asset Pack and make every reel a retro‑revolution.",
    "thumbnail_url": "https://onlinedigitalitems.com/wp-content/uploads/2024/03/cropped-cropped-Pink-Yellow-Star-Y2k-Style-Streetwear-Logo.png",
    "price": "129",
    "original_price": "399",
    "category": "Creator Tools & Software",
    "tags": "new, aesthetic, graphics",
    "reels_count": 750,
    "rating": 4.9,
    "reviews_count": 49,
    "sort_order": 103,
    "created_at": "2026-10-31T16:03:30.897Z"
  },
  {
    "id": "RB-7216",
    "title": "500+ Cartoon Moral Story Reels Bundle",
    "description": "**Hook:** Turn scroll‑stopping fun into instant moral lessons – 500+ cartoon reels that hook, teach, and convert!  \n\n**What’s inside**  \n- 🎬 500+ vertical (9:16) HD/4K clips – ready‑to‑post  \n- 📚 Universal Indian‑style & cartoon morals for every niche  \n- ✂️ Fully editable – add your branding, voice‑over, or subtitles  \n- 🔄 100% PLR/MRR – remix, resell, or bundle as you wish  \n\n**Why creators & agencies love it**  \n- 📈 Boost watch‑time & retention with bite‑size storytelling  \n- 🎥 Zero filming or editing from scratch – plug‑and‑play content  \n\n**Commercial License:** Complete PLR/MRR rights – post, edit, brand, or sell without restrictions.  \n\n**Delivery:** Instant Google Drive link, password‑protected via **@giveme_8**.  \n\n*Grab the bundle, unleash endless reels, and watch your audience grow!*",
    "thumbnail_url": "https://onlinedigitalitems.com/wp-content/uploads/2024/02/500-moral.jpg",
    "price": "99",
    "original_price": "299",
    "category": "Desi & Cartoon Stories",
    "tags": "trending, kids, moral",
    "reels_count": 500,
    "rating": 5,
    "reviews_count": 80,
    "sort_order": 104,
    "created_at": "2026-10-31T16:03:36.337Z"
  },
  {
    "id": "RB-2006",
    "title": "Digital Marketing Complete Video Course & Masterclass",
    "description": "**Hook:** 🚀 Turn every scroll into a sale—150+ ready‑to‑post reels that do the filming for you!  \n\n**What’s Inside:**  \n- 🎥 150+ 9:16 Vertical videos in HD/4K – plug‑and‑play content for any niche  \n- 📚 Full Digital Marketing Masterclass PDFs & cheat‑sheet checklists  \n- 🎞️ Pre‑designed transitions, captions & brand‑ready overlays  \n- 📈 Proven scripts that boost watch‑time & CTA clicks  \n\n**Why Creators & Agencies Need It:**  \n- Keep viewers glued with high‑impact, algorithm‑approved clips – no camera, no studio, zero editing hassle.  \n- Instantly fill client pipelines or your own feed with fresh, high‑performing reels.  \n\n**Commercial License:** 100 % PLR/MRR – edit, brand, sell, or give away as you wish.  \n\n**Delivery:** Instant Google Drive link – unlock with password **@giveme_8**.  \n\n*Grab the bundle, skip the grind, and watch your ROI skyrocket.*",
    "thumbnail_url": "https://onlinedigitalitems.com/wp-content/uploads/2024/03/Digital-Maketing.png",
    "price": "149",
    "original_price": "499",
    "category": "Creator Tools & Software",
    "tags": "bestseller, course, business",
    "reels_count": 150,
    "rating": 4.8,
    "reviews_count": 54,
    "sort_order": 105,
    "created_at": "2026-10-31T16:03:42.038Z"
  },
  {
    "id": "RB-7810",
    "title": "Spoken English Mastery Complete Video Course",
    "description": "**🚀 Unlock Fluency Fast – 120+ Ready‑to‑Post Reels that Turn Viewers into English‑Speaking Fans!**  \n\n**What’s Inside**  \n- 🎥 120+ 9:16 vertical videos in HD/4K – no filming, no editing skills required  \n- 📚 Proven scripts covering pronunciation, idioms, confidence‑boosting dialogues & exam tips  \n- 🔄 Fully customizable: add your branding, subtitles, or remix any clip  \n- 💰 100 % PLR/MRR – sell, license, or bundle as you wish  \n\n**Why Creators & Agencies Need It**  \n- Sky‑rocket watch‑time & retention with bite‑size, high‑impact lessons  \n- Zero‑recording workflow saves hours and eliminates on‑camera anxiety  \n- Perfect for language schools, tutoring platforms, TikTok/IG reels, and ad campaigns  \n\n**Commercial License** – complete rights to post, edit, brand, or resell.  \n\n**Instant Delivery** – Google Drive link + password unlock via **@giveme_8**.  \n\n*Grab the bundle, post today, and watch the engagement explode!*",
    "thumbnail_url": "https://onlinedigitalitems.com/wp-content/uploads/2024/03/Brown-and-White-Minimalist-English-Course-Instagram-Post.png",
    "price": "129",
    "original_price": "399",
    "category": "Creator Tools & Software",
    "tags": "popular, english, learning",
    "reels_count": 120,
    "rating": 4.8,
    "reviews_count": 50,
    "sort_order": 106,
    "created_at": "2026-10-31T16:03:47.798Z"
  },
  {
    "id": "RB-2017",
    "title": "Ai Anime Reels Bundle",
    "description": "**🚀 Turn AI‑powered anime into endless scroll‑stopping reels—no camera, no editing marathon!**  \n\n**What’s inside**  \n- 🎞️ 1500+ vertical HD/4K clips (9:16) – ready to drop into any feed  \n- 🤖 AI‑generated anime styles from cyber‑punk to pastel‑dream  \n- ⏱️ Pre‑cut to 15‑30 sec reels – perfect for instant upload  \n- 🎨 Fully editable layers & transparent backgrounds  \n\n**Why creators & agencies love it**  \n- Boost watch‑time retention with eye‑catching motion graphics  \n- Zero filming or animation work—just plug, play, and publish  \n- Unlimited brand customization for campaigns, ads, or client deliverables  \n\n**Commercial License** – 100 % PLR/MRR: post, edit, rebrand, or resell the footage as your own.  \n\n**Delivery** – Instant Google Drive link, password‑protected via **@giveme_8**.  \n\n*Grab the Ai Anime Reels Bundle now and flood timelines with viral anime magic!*",
    "thumbnail_url": "https://onlinedigitalitems.com/wp-content/uploads/2024/03/5-1-1024x1024.png",
    "price": "129",
    "original_price": "399",
    "category": "AI & Technology",
    "tags": "bestseller, anime, ai-art",
    "reels_count": 1500,
    "rating": 4.9,
    "reviews_count": 109,
    "sort_order": 107,
    "created_at": "2026-10-31T16:03:55.983Z"
  },
  {
    "id": "RB-7039",
    "title": "Satisfying Reel Bundle",
    "description": "",
    "thumbnail_url": "https://onlinedigitalitems.com/wp-content/uploads/2024/03/9-1024x1024.png",
    "price": "99",
    "original_price": "299",
    "category": "Faceless & Aesthetic",
    "tags": "trending, asmr, satisfying",
    "reels_count": 1000,
    "rating": 5,
    "reviews_count": 99,
    "sort_order": 108,
    "created_at": "2026-10-31T16:04:01.815Z"
  },
  {
    "id": "RB-6005",
    "title": "1000+ Top Movie Clip For Facebook",
    "description": "**⚡️ Hook:** Turn any scroll‑stopper into a cinematic goldmine—over 1,200 premium movie‑clip reels, ready to dominate Facebook feeds!  \n\n**What’s inside:**  \n- 🎬 1,200+ vertical 9:16 HD/4K clips (1000+ top‑movie moments)  \n- 📂 Organized by genre – Luxury, Motivation, Action & more  \n- 🛠️ Ready‑to‑edit with transparent backgrounds & royalty‑free soundtracks  \n- 🔄 Unlimited PLR/MRR: rebrand, remix, or resell forever  \n\n**Why creators & agencies love it:**  \n- 🚀 Boost watch‑time & retention with proven blockbuster footage  \n- ✂️ Zero filming—plug‑and‑play content that converts instantly  \n\n**Commercial License:** Full PLR/MRR rights—post, edit, brand, or sell as your own.  \n\n**Delivery:** Instant Google Drive link, password‑protected via **@giveme_8**.  \n\n*Elevate your reels, own the spotlight.*",
    "thumbnail_url": "https://onlinedigitalitems.com/wp-content/uploads/2025/11/Movie-Clip-1024x1024.png",
    "price": "119",
    "original_price": "349",
    "category": "Luxury & Motivation",
    "tags": "popular, cinema, viral",
    "reels_count": 1200,
    "rating": 4.9,
    "reviews_count": 103,
    "sort_order": 109,
    "created_at": "2026-10-31T16:04:06.734Z"
  },
  {
    "id": "RB-4543",
    "title": "Useful Gadgets Reels Bundle",
    "description": "**🚀 Hook:** Turn every tech‑savvy scroll into a conversion‑machine with the *Useful Gadgets Reels Bundle*—800+ vertical HD/4K clips that sell themselves!  \n\n**What’s Inside:**  \n- 🎥 800+ 9:16 HD & 4K videos of the hottest gadgets in action  \n- ⚡ Ready‑to‑use transitions & captions for instant impact  \n- 🧩 Fully organized folders (by niche, length & style)  \n- 🎨 Bonus overlay graphics & lower‑thirds for a polished finish  \n\n**Why Creators & Agencies Need It:**  \n- 📈 Boost watch‑time retention with eye‑catching, high‑resolution footage  \n- 🎬 No filming, no gear—just plug‑and‑play content that fuels reels, ads & stories  \n- 💰 Cut production costs while delivering premium, on‑trend visuals  \n\n**Commercial License:** 100 % PLR/MRR – edit, brand, repost or resell without limits.  \n\n**Delivery:** Instant Google Drive link; unlock with password **@giveme_8**.  \n\n*Grab the bundle, skip the shoot, and start dominating the feed today!*",
    "thumbnail_url": "https://onlinedigitalitems.com/wp-content/uploads/2024/03/8-1-1024x1024.png",
    "price": "99",
    "original_price": "299",
    "category": "AI & Technology",
    "tags": "trending, gadgets, affiliate",
    "reels_count": 800,
    "rating": 4.9,
    "reviews_count": 100,
    "sort_order": 110,
    "created_at": "2026-10-31T16:04:12.484Z"
  },
  {
    "id": "RB-1393",
    "title": "Woodwork Reels Bundle",
    "description": "**Hook:** Turn every scroll into a wood‑craft masterpiece—no camera, no hassle.  \n\n**What’s Inside**  \n- 🎥 700+ vertical 9:16 HD/4K clips, ready‑to‑play  \n- 🪚 Premium woodshop actions: sawing, sanding, finishing & more  \n- ✂️ Seamless loops & cut‑points for instant edits  \n- 📂 Organized folders for fast browsing  \n\n**Why Creators & Agencies Need It**  \n- 📈 Boost watch‑time retention with high‑impact, faceless visuals  \n- 🚀 Zero filming required—plug‑and‑play for reels, ads, tutorials, and promos  \n\n**Commercial License**  \n- 100 % PLR/MRR: edit, brand, repost, or resell without restrictions  \n\n**Delivery**  \n- 📂 Instant Google Drive link, password‑protected via **@giveme_8**.  \n\nGrab the Woodwork Reels Bundle and craft viral content in minutes!",
    "thumbnail_url": "https://onlinedigitalitems.com/wp-content/uploads/2024/03/7-1-1024x1024.png",
    "price": "99",
    "original_price": "299",
    "category": "Faceless & Aesthetic",
    "tags": "craft, woodwork, asmr",
    "reels_count": 700,
    "rating": 4.9,
    "reviews_count": 88,
    "sort_order": 111,
    "created_at": "2026-10-31T16:04:19.362Z"
  },
  {
    "id": "RB-8421",
    "title": "AI Hindi Kahani Reels",
    "description": "**🚀 Hook:** Turn every scroll into a binge‑watch session with the *AI Hindi Kahani Reels* bundle – your shortcut to viral, story‑driven content!  \n\n**What’s Inside**  \n- 🎬 600+ vertical (9:16) HD/4K clips – ready to drop into any feed  \n- 📖 Classic Desi tales + quirky cartoon twists, all AI‑generated in Hindi  \n- ⏱️ 15‑30 sec story arcs optimized for maximum watch‑time  \n- 🎨 Fully editable – add text, music, branding in seconds  \n\n**Why Creators & Agencies Need It**  \n- Sky‑rocket retention: bite‑size narratives keep viewers glued  \n- Zero filming, zero actors – just plug‑and‑play content  \n- Scale campaigns fast without creative burnout  \n\n**Commercial License**  \n✅ 100 % PLR/MRR – post, edit, brand, or resell as your own  \n\n**Delivery**  \n📁 Instant Google Drive link + password unlock via **@giveme_8** – download & start creating now!",
    "thumbnail_url": "https://onlinedigitalitems.com/wp-content/uploads/2024/03/6-1-1024x1024.png",
    "price": "99",
    "original_price": "299",
    "category": "Desi & Cartoon Stories",
    "tags": "bestseller, hindi, kahani",
    "reels_count": 600,
    "rating": 4.9,
    "reviews_count": 112,
    "sort_order": 112,
    "created_at": "2026-10-31T16:04:24.765Z"
  },
  {
    "id": "RB-2672",
    "title": "Free Fire Reels Bundle",
    "description": "**🔥 Hook:** Turn every Free Fire fan into a binge‑watcher with a single click!  \n\n**What’s inside**  \n- 🎬 1,000+ vertical 9:16 clips – HD & 4K quality  \n- ⚡ Ready‑to‑post, pre‑cut moments for instant reels  \n- 🎨 Fully customizable – add text, music, effects in seconds  \n- 📦 Organized by theme: kills, clutches, fails & epic wins  \n\n**Why you need it**  \n- 📈 Boost watch‑time & retention – scroll‑stopping footage that keeps viewers glued  \n- 🎥 Zero filming required – focus on branding, not recording  \n\n**Commercial License**  \n- 100 % PLR/MRR – edit, rebrand, or resell the entire bundle, no royalties.  \n\n**Delivery**  \n- 🚀 Instant Google Drive link, password‑protected. Unlock with **@giveme_8**.  \n\n*Grab the Free Fire Reels Bundle now and dominate the short‑form arena!*",
    "thumbnail_url": "https://onlinedigitalitems.com/wp-content/uploads/2024/03/4-1-1024x1024.png",
    "price": "99",
    "original_price": "299",
    "category": "Mega Bundles",
    "tags": "gaming, freefire, viral",
    "reels_count": 1000,
    "rating": 4.9,
    "reviews_count": 66,
    "sort_order": 113,
    "created_at": "2026-10-31T16:04:29.776Z"
  },
  {
    "id": "RB-5495",
    "title": "Tools Reels Bundle",
    "description": "",
    "thumbnail_url": "https://onlinedigitalitems.com/wp-content/uploads/2024/03/3-1-1024x1024.png",
    "price": "99",
    "original_price": "299",
    "category": "Creator Tools & Software",
    "tags": "tools, machines, viral",
    "reels_count": 650,
    "rating": 4.9,
    "reviews_count": 65,
    "sort_order": 114,
    "created_at": "2026-10-31T16:04:35.746Z"
  },
  {
    "id": "RB-3399",
    "title": "Movie Clips Reels Bundle",
    "description": "**🚀 Hook:** Turn any scroll‑stopper into a blockbuster—1200+ premium movie‑clip reels that make viewers binge‑watch your brand!  \n\n**What’s Inside**  \n- 🎬 1200+ vertical 9:16 clips, HD & 4K quality  \n- 🌟 Curated by genre (action, drama, inspiration, luxury)  \n- ⏱️ Ready‑to‑post, pre‑trimmed for optimal 15‑30 sec reels  \n- 📂 Organized folders for instant drag‑&‑drop editing  \n\n**Why Creators & Agencies Need It**  \n- Boost watch‑time retention with cinematic storytelling  \n- Zero filming, zero editing headaches—just plug‑and‑play  \n- Perfect for ads, socials, reels, and brand campaigns  \n\n**Commercial License**  \n- 100 % PLR/MRR – post, edit, brand, or resell without restrictions.  \n\n**Delivery**  \n- Instant Google Drive link, password‑protected via **@giveme_8**.  \n\n*Elevate every frame. Own the scroll.*",
    "thumbnail_url": "https://onlinedigitalitems.com/wp-content/uploads/2024/03/2-1024x1024.png",
    "price": "119",
    "original_price": "349",
    "category": "Luxury & Motivation",
    "tags": "popular, cinema, viral",
    "reels_count": 1200,
    "rating": 4.9,
    "reviews_count": 119,
    "sort_order": 115,
    "created_at": "2026-10-31T16:04:41.916Z"
  },
  {
    "id": "RB-8853",
    "title": "Chinese Funny Dub Reels",
    "description": "",
    "thumbnail_url": "https://onlinedigitalitems.com/wp-content/uploads/2024/03/1-1-1024x1024.png",
    "price": "99",
    "original_price": "299",
    "category": "Desi & Cartoon Stories",
    "tags": "comedy, funny, viral",
    "reels_count": 850,
    "rating": 4.9,
    "reviews_count": 117,
    "sort_order": 116,
    "created_at": "2026-10-31T16:04:48.294Z"
  },
  {
    "id": "RB-7645",
    "title": "Hindi Motivational Reels Bundle",
    "description": "",
    "thumbnail_url": "https://onlinedigitalitems.com/wp-content/uploads/2024/01/Motivational-Reels-1024x1024.png",
    "price": "129",
    "original_price": "399",
    "category": "Luxury & Motivation",
    "tags": "bestseller, motivation, hindi",
    "reels_count": 1500,
    "rating": 4.8,
    "reviews_count": 54,
    "sort_order": 117,
    "created_at": "2026-10-31T16:04:54.422Z"
  },
  {
    "id": "RB-9043",
    "title": "500+ Cartoon Moral Story Bundle",
    "description": "**Hook:** Turn scroll‑stopping scrolls into timeless lessons – 500+ cartoon morals that *instantly* boost watch time!  \n\n**What’s Inside**  \n- 🎬 500+ vertical (9:16) HD/4K clips – ready‑to‑post  \n- 📚 Classic & fresh Desi‑flavored fables with universal morals  \n- 🎨 Fully editable frames – add your brand colors, voice‑overs, or subtitles  \n- 💰 100% PLR/MRR – edit, rebrand, or resell without restrictions  \n\n**Why Creators & Agencies Need This**  \n- 🚀 Sky‑rocket retention: bite‑size stories keep viewers glued for the full 30‑sec reel.  \n- ✂️ Zero filming, zero scripting – plug‑and‑play content that fills your calendar.  \n\n**Commercial License:** Full PLR/MRR included; you own the rights to post, edit, brand, or resell every clip.  \n\n**Delivery:** Instant Google Drive link, password‑protected via **@giveme_8**.  \n\n*Grab the bundle, start posting, and watch the metrics soar!*",
    "thumbnail_url": "https://onlinedigitalitems.com/wp-content/uploads/2024/01/cartoon-moral-story.png",
    "price": "99",
    "original_price": "299",
    "category": "Desi & Cartoon Stories",
    "tags": "trending, animation, kids",
    "reels_count": 500,
    "rating": 4.9,
    "reviews_count": 87,
    "sort_order": 118,
    "created_at": "2026-10-31T16:04:59.416Z"
  }
];

// ----------------------------------------------------------------------------
// 3. STATE MANAGEMENT
// ----------------------------------------------------------------------------
const AppState = {
  bundles: [],
  filteredBundles: [],
  selectedBundle: null,
  activeFilter: "all",
  activeSort: "featured",
  searchQuery: "",
  wishlist: new Set(),
  isDemoMode: false,
  displayLimit: 12,
  PAGE_SIZE: 12,
  autoScrollCount: 0
};

// ----------------------------------------------------------------------------
// 4. THEME ENGINE
// ----------------------------------------------------------------------------
const ThemeModule = {
  init() {
    const saved = localStorage.getItem("reelstore_theme") || "dark";
    this.apply(saved);
    const btn = document.getElementById("themeToggleBtn");
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
    const icon = document.getElementById("themeIcon");
    if (icon) {
      icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
      icon.style.color = theme === "dark" ? "#FBBF24" : "";
    }
  }
};

// ----------------------------------------------------------------------------
// 5. WISHLIST ENGINE
// ----------------------------------------------------------------------------
const WishlistModule = {
  STORAGE_KEY: "reelstore_wishlist_items",
  init() {
    try {
      const stored = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || "[]");
      AppState.wishlist = new Set(stored);
    } catch (e) {
      AppState.wishlist = new Set();
    }
    this.updateBadge();
  },
  toggle(bundleId) {
    if (AppState.wishlist.has(bundleId)) {
      AppState.wishlist.delete(bundleId);
      showToast("Removed from wishlist", "info");
    } else {
      AppState.wishlist.add(bundleId);
      showToast("Saved to wishlist!", "success");
    }
    this.save();
    this.updateBadge();
    document.querySelectorAll(`.btn-card-favorite[data-bundle-id="${bundleId}"]`).forEach(btn => {
      const active = AppState.wishlist.has(bundleId);
      btn.classList.toggle("active", active);
      const icon = btn.querySelector("i");
      if (icon) icon.className = active ? "fa-solid fa-heart" : "fa-regular fa-heart";
    });
  },
  save() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify([...AppState.wishlist]));
  },
  updateBadge() {
    const badge = document.getElementById("wishlistBadge");
    if (badge) {
      const count = AppState.wishlist.size;
      badge.textContent = count;
      badge.style.display = count > 0 ? "inline-flex" : "none";
    }
  }
};

// ----------------------------------------------------------------------------
// 6. PRICING & RATING HELPERS
// ----------------------------------------------------------------------------
function calculateDiscount(price, origPrice) {
  const p = parseFloat(String(price).replace(/[^0-9.]/g, "")) || 0;
  const o = parseFloat(String(origPrice).replace(/[^0-9.]/g, "")) || 0;
  if (!o || o <= p) {
    return {
      discountPercent: 0,
      discountText: "Special Price",
      originalPriceFormatted: o ? `${CONFIG.CURRENCY_SYMBOL}${o}` : ""
    };
  }
  const pct = Math.round(((o - p) / o) * 100);
  return {
    discountPercent: pct,
    discountText: `${pct}% OFF`,
    originalPriceFormatted: `${CONFIG.CURRENCY_SYMBOL}${o}`
  };
}

function renderStars(ratingVal) {
  const score = Math.min(5, Math.max(1, parseFloat(ratingVal) || 5));
  const full = Math.floor(score);
  const half = score - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  let html = "";
  for (let i = 0; i < full; i++) html += '<i class="fa-solid fa-star"></i>';
  if (half) html += '<i class="fa-solid fa-star-half-stroke"></i>';
  for (let i = 0; i < empty; i++) html += '<i class="fa-regular fa-star"></i>';
  return html;
}

function showToast(message, type = "success", duration = 3000) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.style.cssText = "position:fixed;bottom:2rem;right:2rem;z-index:999999;display:flex;flex-direction:column;gap:0.75rem;pointer-events:none;";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  const bg = type === "error" ? "#EF4444" : type === "info" ? "#3B82F6" : "#10B981";
  const icon = type === "error" ? "fa-circle-xmark" : type === "info" ? "fa-circle-info" : "fa-circle-check";
  toast.style.cssText = `background:${bg};color:#fff;padding:0.75rem 1.25rem;border-radius:8px;font-size:0.9rem;font-weight:600;display:flex;align-items:center;gap:0.6rem;box-shadow:0 8px 24px rgba(0,0,0,0.18);transition:all 0.3s ease;pointer-events:auto;`;
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

function formatPrice(val) {
  if (!val || val === "Free" || val === "0") return "FREE";
  const num = String(val).replace(/[^0-9.]/g, "");
  return `${CONFIG.CURRENCY_SYMBOL}${num || val}`;
}

function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ----------------------------------------------------------------------------
// 7. API SERVICE
// ----------------------------------------------------------------------------
const ApiService = {
  async fetchBundles() {
    if (!CONFIG.APPS_SCRIPT_URL || CONFIG.APPS_SCRIPT_URL.trim() === "") {
      AppState.isDemoMode = true;
      return JSON.parse(JSON.stringify(DEMO_BUNDLES));
    }
    try {
      const url = `${CONFIG.APPS_SCRIPT_URL}?action=getPublicBundles`;
      const res = await fetch(url, { headers: { "Accept": "application/json" } });
      const json = await res.json();
      if (json && json.success && Array.isArray(json.bundles)) {
        AppState.isDemoMode = false;
        return json.bundles;
      }
      throw new Error(json.error || "Malformed API response");
    } catch (err) {
      console.warn("Apps Script fetch error, falling back to cached bundles:", err.message);
      AppState.isDemoMode = true;
      return JSON.parse(JSON.stringify(DEMO_BUNDLES));
    }
  },

  async verifyPassword(bundleId, password) {
    if (AppState.isDemoMode) {
      const match = DEMO_BUNDLES.find(b => b.id === bundleId);
      if (match && match.password && match.password.trim().toLowerCase() === password.trim().toLowerCase()) {
        return { success: true, link: match.link, message: "Password verified! Bundle link unlocked." };
      }
      return { success: false, error: "Incorrect password. Please verify with seller." };
    }
    try {
      const url = `${CONFIG.APPS_SCRIPT_URL}?action=verifyPassword&bundleId=${encodeURIComponent(bundleId)}&password=${encodeURIComponent(password)}`;
      const res = await fetch(url, { headers: { "Accept": "application/json" } });
      return await res.json();
    } catch (err) {
      return { success: false, error: "Network error while connecting to server." };
    }
  }
};

// ----------------------------------------------------------------------------
// 8. CARD RENDERER
// ----------------------------------------------------------------------------
function getBadgeInfo(tagsStr) {
  if (!tagsStr) return null;
  const tags = String(tagsStr).toLowerCase();
  if (tags.includes("best-seller") || tags.includes("bestseller")) {
    return { className: "badge-bestseller", text: "Best Seller", icon: "fa-solid fa-ribbon" };
  }
  if (tags.includes("trending")) {
    return { className: "badge-trending", text: "Trending", icon: "fa-solid fa-fire" };
  }
  if (tags.includes("new")) {
    return { className: "badge-new", text: "New", icon: "fa-solid fa-bolt" };
  }
  if (tags.includes("limited")) {
    return { className: "badge-limited", text: "Limited", icon: "fa-solid fa-gem" };
  }
  return null;
}

function renderEtsyCard(bundle) {
  const card = document.createElement("div");
  card.className = "bundle-card etsy-card";
  card.dataset.bundleId = bundle.id;

  const isFavorite = AppState.wishlist.has(bundle.id);
  const badge = getBadgeInfo(bundle.tags);
  const discountInfo = calculateDiscount(bundle.price, bundle.original_price);
  const fallbackThumb = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80";
  const thumbUrl = bundle.thumbnail_url || fallbackThumb;
  const reviews = bundle.reviews_count || 120;
  const ratingScore = (Number(bundle.rating) || 5.0).toFixed(1);

  const formattedPrice = formatPrice(bundle.price);
  const igUser = (CONFIG.CONTACT.instagram && CONFIG.CONTACT.instagram.username) ? CONFIG.CONTACT.instagram.username : "giveme_8";
  const igUrl = `https://ig.me/m/${igUser}`;

  const slug = (bundle.title || "bundle")
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 75);
  const bundlePageUrl = `bundle/${slug}.html`;

  card.innerHTML = `
    <div class="bundle-card-media etsy-card-media" data-action="view" data-bundle-id="${escapeHtml(bundle.id)}">
      ${badge ? `
        <span class="badge-card-corner ${badge.className}">
          <i class="${badge.icon}"></i> ${badge.text}
        </span>
      ` : ""}
      <button type="button" class="btn-card-favorite ${isFavorite ? 'active' : ''}" data-action="wishlist" data-bundle-id="${escapeHtml(bundle.id)}" title="Save to Wishlist" aria-label="Save to Wishlist">
        <i class="${isFavorite ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
      </button>
      <button type="button" class="btn-card-share-float" data-action="share" data-bundle-id="${escapeHtml(bundle.id)}" title="Share Bundle Link" aria-label="Share Bundle Link">
        <i class="fa-solid fa-share-nodes"></i>
      </button>
      <img src="${escapeHtml(thumbUrl)}" alt="${escapeHtml(bundle.title)}" class="bundle-card-img etsy-card-img" loading="lazy" onerror="this.onerror=null;this.src='${fallbackThumb}'">
    </div>
    <div class="bundle-card-body etsy-card-body">
      <div class="bundle-card-meta">
        <span class="bundle-category-tag">${escapeHtml(bundle.category || 'Reels Bundle')}</span>
        ${bundle.reels_count ? `<span class="bundle-reels-tag"><i class="fa-solid fa-layer-group"></i> ${Number(bundle.reels_count).toLocaleString()}+</span>` : ''}
      </div>
      <h3 class="bundle-card-title etsy-card-title" data-action="view" data-bundle-id="${escapeHtml(bundle.id)}" title="${escapeHtml(bundle.title)}">
        ${escapeHtml(bundle.title)}
      </h3>
      <div class="bundle-rating-row etsy-rating-row">
        <span class="star-rating">${renderStars(bundle.rating)}</span>
        <span class="rating-val">${ratingScore}</span>
        <span class="rating-count">(${reviews})</span>
      </div>
      <div class="bundle-price-row etsy-price-row">
        <div class="price-stack">
          <span class="price-current">${formatPrice(bundle.price)}</span>
          <span class="price-original">${discountInfo.originalPriceFormatted}</span>
        </div>
        <span class="price-discount-badge price-discount">${discountInfo.discountText.replace(/[()]/g, "")}</span>
      </div>
      <div class="bundle-card-actions">
        <button type="button" class="btn-card-view" data-action="view" data-bundle-id="${escapeHtml(bundle.id)}" title="Quick preview & unlock">
          <i class="fa-solid fa-bolt"></i> Unlock
        </button>
        <a href="${bundlePageUrl}" class="btn-card-page" title="Dedicated Page & Full Specs" onclick="event.stopPropagation();">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> Specs
        </a>
        <button type="button" class="btn-card-share" data-action="share" data-bundle-id="${escapeHtml(bundle.id)}" title="Share this Bundle Link">
          <i class="fa-solid fa-share-nodes"></i>
        </button>
        <a href="${igUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-ig" title="Buy via Instagram DM" onclick="event.stopPropagation(); navigator.clipboard.writeText('Hi! I want to buy bundle: ${escapeHtml(bundle.title)} (${escapeHtml(bundle.id)}) for ${formattedPrice}.'); showToast('Order details copied! Paste in Instagram DM.', 'info');">
          <i class="fa-brands fa-instagram"></i> Buy
        </a>
      </div>
    </div>
  `;
  return card;
}

function renderGrid() {
  const grid = document.getElementById("productGrid");
  const emptyState = document.getElementById("emptyState");
  const resultsCount = document.getElementById("resultsCount");
  const loadMoreContainer = document.getElementById("loadMoreContainer");

  if (!grid) return;
  grid.innerHTML = "";

  const total = AppState.filteredBundles.length;
  if (resultsCount) {
    resultsCount.textContent = `${total} bundle${total === 1 ? '' : 's'} found`;
  }

  if (total === 0) {
    if (emptyState) emptyState.style.display = "block";
    if (loadMoreContainer) loadMoreContainer.style.display = "none";
    return;
  }

  if (emptyState) emptyState.style.display = "none";

  const visible = AppState.filteredBundles.slice(0, AppState.displayLimit);
  visible.forEach(b => {
    grid.appendChild(renderEtsyCard(b));
  });

  if (loadMoreContainer) {
    loadMoreContainer.style.display = AppState.displayLimit < total ? "flex" : "none";
  }
}

// ----------------------------------------------------------------------------
// 9. FILTER & SORT
// ----------------------------------------------------------------------------
function applyFiltersAndSort(resetLimit = true) {
  let list = [...AppState.bundles];
  // 1. Text Search
  if (AppState.searchQuery.trim()) {
    const q = AppState.searchQuery.toLowerCase().trim();
    list = list.filter(b => {
      const inTitle = (b.title || "").toLowerCase().includes(q);
      const inDesc = (b.description || "").toLowerCase().includes(q);
      const inCat = (b.category || "").toLowerCase().includes(q);
      const inTags = (b.tags || "").toLowerCase().includes(q);
      return inTitle || inDesc || inCat || inTags;
    });
  }

  // 2. Filter Chips
  if (AppState.activeFilter !== "all") {
    switch (AppState.activeFilter) {
      case "trending":
        list = list.filter(b => (b.tags || "").toLowerCase().includes("trending") || (b.tags || "").toLowerCase().includes("popular"));
        break;
      case "new":
        list = list.filter(b => (b.tags || "").toLowerCase().includes("new") || (b.tags || "").toLowerCase().includes("trending"));
        break;
      case "popular":
        list = list.filter(b => (b.tags || "").toLowerCase().includes("popular") || (Number(b.reviews_count) || 0) > 60);
        break;
      case "best-seller":
        list = list.filter(b => (b.tags || "").toLowerCase().includes("best-seller") || (b.tags || "").toLowerCase().includes("bestseller") || (b.tags || "").toLowerCase().includes("trending"));
        break;
      case "under-200":
        list = list.filter(b => {
          const num = parseFloat(String(b.price).replace(/[^0-9.]/g, "")) || 0;
          return num < 200;
        });
        break;
      case "top-rated":
        list = list.filter(b => (Number(b.rating) || 5) >= 4.8);
        break;
      case "wishlist":
        list = list.filter(b => AppState.wishlist.has(b.id));
        break;
      default: {
        const filterNorm = AppState.activeFilter.toLowerCase();
        list = list.filter(b => {
          const cat = (b.category || "").toLowerCase();
          const title = (b.title || "").toLowerCase();
          const tags = (b.tags || "").toLowerCase();

          // Direct match
          if (cat === filterNorm || cat.includes(filterNorm) || filterNorm.includes(cat)) return true;

          // AI & Technology
          if (filterNorm.includes("ai") || filterNorm.includes("tech")) {
            return cat.includes("ai") || cat.includes("tech") || tags.includes("ai") || title.includes("ai ") || title.includes(" ai") || title.includes("avatar") || title.includes("toons") || title.includes("miniature") || title.includes("restoration") || title.includes("transformation") || title.includes("unreality") || title.includes("vlog");
          }
          // Software & Tools
          if (filterNorm.includes("software") || filterNorm.includes("tool")) {
            return cat.includes("software") || cat.includes("tool") || title.includes("adobe") || title.includes("capcut") || title.includes("photoshop") || title.includes("premiere") || title.includes("illustrator") || title.includes("audition") || title.includes("lightroom") || title.includes("incopy") || title.includes("indesign") || title.includes("animate") || title.includes("idm") || title.includes("coreldraw") || title.includes("download manager") || title.includes("character animator") || title.includes("pc");
          }
          // Luxury & Lifestyle
          if (filterNorm.includes("luxury") || filterNorm.includes("car") || filterNorm.includes("lifestyle")) {
            return cat.includes("luxury") || cat.includes("car") || cat.includes("lifestyle") || title.includes("car") || title.includes("luxury") || title.includes("interior") || title.includes("supercar") || title.includes("money") || title.includes("lifestyle");
          }
          // Animation & Cartoons
          if (filterNorm.includes("anim") || filterNorm.includes("cartoon") || filterNorm.includes("toons")) {
            return cat.includes("anim") || cat.includes("cartoon") || title.includes("anime") || title.includes("toons") || title.includes("cartoon") || title.includes("monster") || title.includes("valkyrie") || title.includes("hulk") || title.includes("baby") || title.includes("dog") || title.includes("asmr");
          }
          // Mega Bundles
          if (filterNorm.includes("mega")) {
            return cat.includes("mega") || tags.includes("mega") || title.includes("mega") || title.includes("80m") || title.includes("million") || title.includes("5000+") || title.includes("2500+") || title.includes("1000+");
          }
          // Digital Templates & Guides
          if (filterNorm.includes("template") || filterNorm.includes("guide")) {
            return cat.includes("template") || cat.includes("guide") || title.includes("template") || title.includes("guide") || title.includes("canva") || title.includes("plan") || title.includes("website") || title.includes("ebook");
          }
          // Health & Fitness
          if (filterNorm.includes("fitness") || filterNorm.includes("health") || filterNorm.includes("gym")) {
            return cat.includes("fitness") || cat.includes("health") || title.includes("workout") || title.includes("fitness") || title.includes("gym") || title.includes("weight") || title.includes("health") || title.includes("strong");
          }
          // Motivation & Wealth
          if (filterNorm.includes("motivation") || filterNorm.includes("wealth") || filterNorm.includes("earning")) {
            return cat.includes("motivation") || cat.includes("wealth") || cat.includes("earning") || title.includes("motivat") || title.includes("money") || title.includes("wealth") || title.includes("success") || title.includes("son");
          }
          // Gaming & Esports
          if (filterNorm.includes("gaming") || filterNorm.includes("esport")) {
            return cat.includes("gaming") || cat.includes("esport") || title.includes("game") || title.includes("gaming") || title.includes("gta") || title.includes("minecraft");
          }

          return false;
        });
        break;
      }
    }
  }

  // 3. Sorting
  switch (AppState.activeSort) {
    case "newest":
      list.sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0));
      break;
    case "price-asc":
      list.sort((a, b) => (parseFloat(String(a.price).replace(/[^0-9.]/g, "")) || 0) - (parseFloat(String(b.price).replace(/[^0-9.]/g, "")) || 0));
      break;
    case "price-desc":
      list.sort((a, b) => (parseFloat(String(b.price).replace(/[^0-9.]/g, "")) || 0) - (parseFloat(String(a.price).replace(/[^0-9.]/g, "")) || 0));
      break;
    case "reels-desc":
      list.sort((a, b) => (Number(b.reels_count) || 0) - (Number(a.reels_count) || 0));
      break;
    case "top-rated":
      list.sort((a, b) => (Number(b.reviews_count) || 0) - (Number(a.reviews_count) || 0));
      break;
    case "featured":
    default:
      list.sort((a, b) => (Number(a.sort_order) || 0) - (Number(b.sort_order) || 0));
      break;
  }

  AppState.filteredBundles = list;
  if (resetLimit) {
    AppState.displayLimit = AppState.PAGE_SIZE;
    AppState.autoScrollCount = 0;
  }
  renderGrid();
}

function renderModalRelatedBundles(currentBundle) {
  const container = document.getElementById("modalRelatedGrid");
  if (!container || !AppState.bundles || AppState.bundles.length === 0) return;

  const candidateBundles = AppState.bundles.filter(b => b.id !== currentBundle.id);
  // Pick 3 random bundles
  const randomPicks = [...candidateBundles].sort(() => 0.5 - Math.random()).slice(0, 3);

  container.innerHTML = randomPicks.map(b => {
    const formattedPrice = formatPrice(b.price);
    const fallback = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80";
    const thumb = b.thumbnail_url || fallback;
    return `
      <div class="modal-related-card" data-bundle-id="${escapeHtml(b.id)}">
        <img src="${escapeHtml(thumb)}" alt="${escapeHtml(b.title)}" style="width: 58px; height: 58px; border-radius: var(--radius-sm); object-fit: contain; background: var(--media-bg); flex-shrink: 0;" loading="lazy" onerror="this.onerror=null;this.src='${fallback}'">
        <div style="flex: 1; min-width: 0;">
          <span style="font-size: 0.72rem; color: var(--accent-orange); font-weight: 700; text-transform: uppercase;">${escapeHtml(b.category || 'Reels Bundle')}</span>
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${escapeHtml(b.title)}">${escapeHtml(b.title)}</div>
          <div style="font-size: 0.8rem; font-weight: 800; color: var(--text-primary); margin-top: 0.15rem;">${formattedPrice}</div>
        </div>
        <button type="button" style="background: var(--accent-orange-light); border: none; color: var(--accent-orange); width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; flex-shrink: 0;" title="View Bundle">
          <i class="fa-solid fa-arrow-right" style="font-size: 0.75rem;"></i>
        </button>
      </div>
    `;
  }).join("");

  container.querySelectorAll(".modal-related-card").forEach(card => {
    card.addEventListener("click", () => {
      const targetId = card.getAttribute("data-bundle-id");
      if (targetId) {
        openProductModal(targetId);
      }
    });
  });

  const shuffleBtn = document.getElementById("btnShuffleModalRelated");
  if (shuffleBtn) {
    shuffleBtn.onclick = (e) => {
      e.stopPropagation();
      if (AppState.selectedBundle) {
        renderModalRelatedBundles(AppState.selectedBundle);
      }
    };
  }
}

// ----------------------------------------------------------------------------
// 10. PRODUCT DETAIL MODAL & PASSWORD UNLOCK
// ----------------------------------------------------------------------------
function openProductModal(bundleId) {
  const bundle = AppState.bundles.find(b => b.id === bundleId);
  if (!bundle) return;

  AppState.selectedBundle = bundle;

  // DOM Elements
  const modalBackdrop = document.getElementById("productModalBackdrop");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalPrice = document.getElementById("modalPrice");
  const modalOriginalPrice = document.getElementById("modalOriginalPrice");
  const modalDiscountTag = document.getElementById("modalDiscountTag");
  const modalDescription = document.getElementById("modalDescription");
  const modalStarRating = document.getElementById("modalStarRating");
  const modalReviewCount = document.getElementById("modalReviewCount");
  const modalReelsCountBadge = document.getElementById("modalReelsCountBadge");
  const modalHeartBtn = document.getElementById("modalHeartBtn");
  const modalBestsellerBadge = document.getElementById("modalBestsellerBadge");

  const fallbackThumb = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80";
  const mainThumb = bundle.thumbnail_url || fallbackThumb;

  modalImage.src = mainThumb;
  modalTitle.textContent = bundle.title;
  modalPrice.textContent = formatPrice(bundle.price);

  const discountInfo = calculateDiscount(bundle.price, bundle.original_price);
  modalOriginalPrice.textContent = discountInfo.originalPriceFormatted;
  modalDiscountTag.textContent = `${discountInfo.discountText} • Sale ends soon`;

  modalDescription.textContent = bundle.description || "Curated high-converting viral video library formatted in 4K vertical 9:16 for instant social media posting.";
  modalStarRating.innerHTML = renderStars(bundle.rating);
  modalReviewCount.textContent = `(${bundle.reviews_count || 179} reviews)`;
  modalReelsCountBadge.textContent = `${Number(bundle.reels_count || 0).toLocaleString()}+ Reels`;

  const isBestseller = (bundle.tags || "").includes("best-seller") || (bundle.tags || "").includes("bestseller");
  if (modalBestsellerBadge) modalBestsellerBadge.style.display = isBestseller ? "inline-flex" : "none";

  // Wishlist heart in modal
  if (modalHeartBtn) {
    const isFav = AppState.wishlist.has(bundle.id);
    modalHeartBtn.querySelector("i").className = isFav ? "fa-solid fa-heart" : "fa-regular fa-heart";
    modalHeartBtn.style.color = isFav ? "#E11D48" : "";
    modalHeartBtn.onclick = () => {
      WishlistModule.toggle(bundle.id);
      const favNow = AppState.wishlist.has(bundle.id);
      modalHeartBtn.querySelector("i").className = favNow ? "fa-solid fa-heart" : "fa-regular fa-heart";
      modalHeartBtn.style.color = favNow ? "#E11D48" : "";
    };
  }

  // Setup Instagram Buy Link
  setupBuyNowLink(bundle);

  // Setup Dedicated Bundle Page URL
  const modalPageLink = document.getElementById("modalDedicatedPageLink");
  if (modalPageLink) {
    const slug = (bundle.title || "bundle")
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .slice(0, 75);
    modalPageLink.href = `bundle/${slug}.html`;
  }

  // Render randomized "You May Also Like" bundles
  renderModalRelatedBundles(bundle);

  // Reset Unlock Box
  resetUnlockPane(bundle);

  // Show Modal
  modalBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  const modalBackdrop = document.getElementById("productModalBackdrop");
  if (!modalBackdrop) return;
  modalBackdrop.classList.remove("active");
  document.body.style.overflow = "";
  AppState.selectedBundle = null;
}

// ----------------------------------------------------------------------------
// 10B. UNIVERSAL LINK SHARING SYSTEM (Social Cards & Web Share API)
// ----------------------------------------------------------------------------
function openShareModal(bundleId) {
  const bundle = AppState.bundles.find(b => b.id === bundleId) || AppState.selectedBundle;
  if (!bundle) return;

  const slug = (bundle.title || "bundle")
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 75);

  const fullUrl = `${window.location.origin}/bundle/${slug}.html`;
  const price = formatPrice(bundle.price);
  const reelsCount = `${Number(bundle.reels_count || 500).toLocaleString()}+ Reels`;
  const shareText = `🔥 Check out "${bundle.title}" (${reelsCount}) on ReelVault PRO for just ${price}! Instant Google Drive download:`;
  const fallbackThumb = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80";

  // Populate dynamic social preview card inside the share modal
  const imgEl = document.getElementById("sharePreviewImg");
  const titleEl = document.getElementById("sharePreviewTitle");
  const descEl = document.getElementById("sharePreviewDesc");
  const reelsEl = document.getElementById("sharePreviewReelsCount");
  const priceEl = document.getElementById("sharePreviewPrice");
  const inputEl = document.getElementById("shareDirectLinkInput");

  if (imgEl) imgEl.src = bundle.thumbnail_url || fallbackThumb;
  if (titleEl) titleEl.textContent = bundle.title;
  if (descEl) descEl.textContent = bundle.description || `High-retention 9:16 vertical 4K video clips in the ${bundle.category} niche.`;
  if (reelsEl) reelsEl.textContent = reelsCount;
  if (priceEl) priceEl.textContent = price;
  if (inputEl) inputEl.value = fullUrl;

  // WhatsApp Button
  const waBtn = document.getElementById("shareWhatsAppBtn");
  if (waBtn) {
    waBtn.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + "\n" + fullUrl)}`;
  }

  // Telegram Button
  const tgBtn = document.getElementById("shareTelegramBtn");
  if (tgBtn) {
    tgBtn.href = `https://t.me/share/url?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(shareText)}`;
  }

  // Twitter / X Button
  const xBtn = document.getElementById("shareTwitterBtn");
  if (xBtn) {
    xBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(fullUrl)}`;
  }

  // Native Web Share button (Opens OS share drawer on iOS / Android / Mac / Windows)
  const nativeBtn = document.getElementById("shareNativeBtn");
  if (nativeBtn) {
    nativeBtn.onclick = async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: `${bundle.title} - ReelVault PRO`,
            text: shareText,
            url: fullUrl
          });
          showToast("Shared successfully!", "success");
        } catch (e) {}
      } else {
        copyShareLink(fullUrl);
      }
    };
  }

  // Direct Copy Button
  const copyBtn = document.getElementById("shareCopyTriggerBtn");
  const copyLabel = document.getElementById("shareCopyBtnLabel");
  if (copyBtn) {
    copyBtn.onclick = () => {
      copyShareLink(fullUrl);
      if (copyLabel) copyLabel.textContent = "Copied! ✓";
      setTimeout(() => { if (copyLabel) copyLabel.textContent = "Copy Link"; }, 2500);
    };
  }

  const backdrop = document.getElementById("shareModalBackdrop");
  if (backdrop) backdrop.classList.add("active");
}

function closeShareModal() {
  const backdrop = document.getElementById("shareModalBackdrop");
  if (backdrop) backdrop.classList.remove("active");
}

function copyShareLink(url) {
  try {
    navigator.clipboard.writeText(url);
    showToast("Bundle link copied to clipboard! Ready to share.", "success");
  } catch (e) {
    const temp = document.createElement("input");
    temp.value = url;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
    showToast("Bundle link copied!", "success");
  }
}

window.shareBundle = openShareModal;


function setupBuyNowLink(bundle) {
  const formattedPrice = formatPrice(bundle.price);
  const igUser = (CONFIG.CONTACT.instagram && CONFIG.CONTACT.instagram.username) ? CONFIG.CONTACT.instagram.username : "giveme_8";
  const igUrl = `https://ig.me/m/${igUser}`;

  const buyNowBtn = document.getElementById("modalBuyNowBtn");
  if (buyNowBtn) {
    buyNowBtn.href = igUrl;
    buyNowBtn.onclick = () => {
      const copyMsg = `Hi! I want to buy "${bundle.title}" (ID: ${bundle.id}) for ${formattedPrice}. Please send payment details!`;
      try {
        navigator.clipboard.writeText(copyMsg);
        showToast("Order message copied! Paste it in Instagram DM.", "info");
      } catch (e) {}
    };
  }
}

function resetUnlockPane(bundle) {
  const unlockBox = document.getElementById("unlockBoxContainer");
  const passInput = document.getElementById("unlockPasswordInput");
  const errorMsg = document.getElementById("unlockErrorMsg");
  const resultContainer = document.getElementById("unlockResultContainer");
  const demoHint = document.getElementById("demoPasswordHint");
  const demoCode = document.getElementById("demoPasswordCode");

  if (unlockBox) unlockBox.classList.remove("active");
  if (passInput) passInput.value = "";
  if (errorMsg) errorMsg.style.display = "none";
  if (resultContainer) resultContainer.style.display = "none";

  if (AppState.isDemoMode && bundle && bundle._demo_password) {
    if (demoHint && demoCode) {
      demoCode.textContent = bundle._demo_password;
      demoHint.style.display = "block";
    }
  } else if (demoHint) {
    demoHint.style.display = "none";
  }
}

async function handlePasswordUnlock() {
  const passInput = document.getElementById("unlockPasswordInput");
  const errorMsg = document.getElementById("unlockErrorMsg");
  const resultContainer = document.getElementById("unlockResultContainer");
  const submitBtn = document.getElementById("unlockSubmitBtn");
  const spinner = document.getElementById("unlockSpinner");
  const btnText = document.getElementById("unlockBtnText");
  const unlockedLinkBtn = document.getElementById("unlockedLinkBtn");

  if (!AppState.selectedBundle) return;
  const password = passInput.value.trim();

  if (!password) {
    errorMsg.textContent = "Please enter the unlock password provided after purchase.";
    errorMsg.style.display = "block";
    passInput.focus();
    return;
  }

  errorMsg.style.display = "none";
  submitBtn.disabled = true;
  spinner.style.display = "inline-block";
  btnText.style.display = "none";

  try {
    const res = await ApiService.verifyPassword(AppState.selectedBundle.id, password);

    if (res && res.success && res.link) {
      resultContainer.style.display = "block";
      unlockedLinkBtn.href = res.link;
      showToast("Access link verified & unlocked!", "success");

      // Setup Copy Button
      const copyBtn = document.getElementById("copyLinkBtn");
      const copyBtnText = document.getElementById("copyLinkBtnText");
      if (copyBtn) {
        copyBtn.onclick = () => {
          navigator.clipboard.writeText(res.link).then(() => {
            copyBtnText.textContent = "Copied!";
            showToast("Download link copied to clipboard!", "success");
            setTimeout(() => { copyBtnText.textContent = "Copy Link"; }, 2500);
          });
        };
      }
    } else {
      errorMsg.textContent = res.error || "Incorrect password. Please verify with seller.";
      errorMsg.style.display = "block";
      showToast("Verification failed", "error");
    }
  } catch (err) {
    errorMsg.textContent = "Server verification error. Please try again.";
    errorMsg.style.display = "block";
  } finally {
    submitBtn.disabled = false;
    spinner.style.display = "none";
    btnText.style.display = "inline";
  }
}

// ----------------------------------------------------------------------------
// 11. EVENT LISTENERS
// ----------------------------------------------------------------------------
function setupEventListeners() {
  // Search Inputs
  const searchInput = document.getElementById("desktopSearchInput");
  const searchClear = document.getElementById("desktopSearchClear");
  const searchBtn = document.getElementById("searchSubmitBtn");

  function onSearch(val) {
    AppState.searchQuery = val;
    if (searchClear) searchClear.style.display = val ? "block" : "none";
    applyFiltersAndSort();
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => onSearch(e.target.value));
    if (searchInput.value) {
      AppState.searchQuery = searchInput.value;
      if (searchClear) searchClear.style.display = "block";
    }
  }

  if (searchClear) {
    searchClear.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      onSearch("");
    });
  }

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => onSearch(searchInput.value));
  }

  // Categories Header Button Click
  const catMenuBtn = document.getElementById("categoriesMenuBtn");
  if (catMenuBtn) {
    catMenuBtn.addEventListener("click", () => {
      const area = document.getElementById("resultsArea");
      if (area) area.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Filter Pills Clicks
  const filterGroup = document.getElementById("filterPillsGroup");
  if (filterGroup) {
    filterGroup.addEventListener("click", (e) => {
      const pill = e.target.closest(".etsy-filter-pill");
      if (!pill) return;

      filterGroup.querySelectorAll(".etsy-filter-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      AppState.activeFilter = pill.dataset.filter || "all";
      applyFiltersAndSort();
    });
  }

  // Secondary Nav Links
  document.querySelectorAll(".etsy-subnav-link").forEach(link => {
    link.addEventListener("click", (e) => {
      document.querySelectorAll(".etsy-subnav-link").forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      const navFilter = link.dataset.nav;
      AppState.activeFilter = navFilter;

      // Sync filter pill group
      if (filterGroup) {
        filterGroup.querySelectorAll(".etsy-filter-pill").forEach(p => {
          if (p.dataset.filter === navFilter) {
            p.classList.add("active");
          } else {
            p.classList.remove("active");
          }
        });
      }
      applyFiltersAndSort();
    });
  });

  // Sort Dropdown
  const sortSelect = document.getElementById("sortDropdown");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      AppState.activeSort = e.target.value;
      applyFiltersAndSort();
    });
  }

  // Product Grid Clicks (Card Open, Wishlist Heart & Link Sharing)
  const grid = document.getElementById("productGrid");
  if (grid) {
    grid.addEventListener("click", (e) => {
      const favBtn = e.target.closest("button[data-action='wishlist']");
      if (favBtn) {
        e.stopPropagation();
        WishlistModule.toggle(favBtn.dataset.bundleId);
        return;
      }

      const shareBtn = e.target.closest("[data-action='share']");
      if (shareBtn) {
        e.stopPropagation();
        openShareModal(shareBtn.dataset.bundleId);
        return;
      }

      const buyBtn = e.target.closest(".btn-card-ig, .btn-card-wa");
      if (buyBtn) {
        return; // Let direct Instagram/buy link open
      }

      const card = e.target.closest("[data-bundle-id]");
      if (card) {
        openProductModal(card.dataset.bundleId);
      }
    });
  }

  // Modal Share Button
  const modalShareBtn = document.getElementById("modalShareBtn");
  if (modalShareBtn) {
    modalShareBtn.addEventListener("click", () => {
      if (AppState.selectedBundle) {
        openShareModal(AppState.selectedBundle.id);
      }
    });
  }

  // Share Modal Close & Backdrop Clicks
  const shareCloseBtn = document.getElementById("shareModalCloseBtn");
  if (shareCloseBtn) {
    shareCloseBtn.addEventListener("click", closeShareModal);
  }

  const shareBackdrop = document.getElementById("shareModalBackdrop");
  if (shareBackdrop) {
    shareBackdrop.addEventListener("click", (e) => {
      if (e.target === shareBackdrop) closeShareModal();
    });
  }

  // Automatic Infinite Scroll with 2-Scroll Limit -> Manual "Load More" Button
  let isAutoLoading = false;

  function triggerLoadMore(isManual = false) {
    if (isAutoLoading) return;
    if (AppState.displayLimit >= AppState.filteredBundles.length) return;

    // If auto-triggered by scrolling, enforce maximum 2 scroll loads
    if (!isManual) {
      if (AppState.autoScrollCount >= 2) {
        // Already completed 2 scroll loads! Do not auto-load; wait for user to click button.
        return;
      }
      AppState.autoScrollCount++;
    }

    isAutoLoading = true;
    const btn = document.getElementById("loadMoreBtn");
    if (btn) {
      btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin" style="margin-right: 0.5rem; color: var(--accent-orange);"></i> Loading bundles...`;
    }

    setTimeout(() => {
      AppState.displayLimit += AppState.PAGE_SIZE;
      renderGrid();
      isAutoLoading = false;
    }, isManual ? 200 : 150);
  }

  // Load More Button Click (Manual click bypasses the 2-scroll limit)
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      triggerLoadMore(true);
    });
  }

  // IntersectionObserver for Automatic Loading When Scrolled into View (stops after 2 scroll loads)
  const loadMoreContainer = document.getElementById("loadMoreContainer");
  if (loadMoreContainer && "IntersectionObserver" in window) {
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && AppState.autoScrollCount < 2 && window.scrollY > 80) {
          triggerLoadMore(false);
        }
      });
    }, { rootMargin: "250px" });
    scrollObserver.observe(loadMoreContainer);
  }

  // Window Scroll Fallback for Infinite Scroll (stops after 2 scroll loads)
  window.addEventListener("scroll", () => {
    if (AppState.autoScrollCount < 2) {
      if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 600)) {
        triggerLoadMore(false);
      }
    }
  }, { passive: true });

  // Modal Close
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalBackdrop = document.getElementById("productModalBackdrop");
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProductModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeProductModal();
    });
  }
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProductModal();
  });

  // Toggle Password Unlock Drawer
  const toggleUnlockBtn = document.getElementById("toggleUnlockBoxBtn");
  const unlockBox = document.getElementById("unlockBoxContainer");
  if (toggleUnlockBtn && unlockBox) {
    toggleUnlockBtn.addEventListener("click", () => {
      unlockBox.classList.toggle("active");
      if (unlockBox.classList.contains("active")) {
        const input = document.getElementById("unlockPasswordInput");
        if (input) setTimeout(() => input.focus(), 120);
      }
    });
  }

  // Password Unlock Submit
  const unlockSubmitBtn = document.getElementById("unlockSubmitBtn");
  const unlockPasswordInput = document.getElementById("unlockPasswordInput");
  if (unlockSubmitBtn) unlockSubmitBtn.addEventListener("click", handlePasswordUnlock);
  if (unlockPasswordInput) {
    unlockPasswordInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handlePasswordUnlock();
    });
  }

  // Header Contact Button (Instagram)
  const navContactBtn = document.getElementById("navContactSellerBtn");
  if (navContactBtn) {
    navContactBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const igUrl = (CONFIG.CONTACT.instagram && CONFIG.CONTACT.instagram.profileUrl) ? CONFIG.CONTACT.instagram.profileUrl : "https://instagram.com/giveme_8";
      window.open(igUrl, "_blank");
    });
  }

  // Header Wishlist Icon Click
  const navWishlistBtn = document.getElementById("navWishlistBtn");
  if (navWishlistBtn) {
    navWishlistBtn.addEventListener("click", () => {
      AppState.activeFilter = "wishlist";
      if (filterGroup) {
        filterGroup.querySelectorAll(".etsy-filter-pill").forEach(p => {
          if (p.dataset.filter === "wishlist") {
            p.classList.add("active");
          } else {
            p.classList.remove("active");
          }
        });
      }
      applyFiltersAndSort();
    });
  }

  // Reset Filters Button
  const resetBtn = document.getElementById("resetFiltersBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      AppState.searchQuery = "";
      AppState.activeFilter = "all";
      if (searchInput) searchInput.value = "";
      if (filterGroup) {
        filterGroup.querySelectorAll(".etsy-filter-pill").forEach(p => p.classList.remove("active"));
        const allPill = filterGroup.querySelector('[data-filter="all"]');
        if (allPill) allPill.classList.add("active");
      }
      applyFiltersAndSort();
    });
  }

  // Year in Footer
  const yearEl = document.getElementById("currentYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Footer Contact Link
  const footerIg = document.getElementById("footerInstagramLink");
  if (footerIg) {
    footerIg.addEventListener("click", (e) => {
      e.preventDefault();
      const igUrl = (CONFIG.CONTACT.instagram && CONFIG.CONTACT.instagram.profileUrl) ? CONFIG.CONTACT.instagram.profileUrl : "https://instagram.com/giveme_8";
      window.open(igUrl, "_blank");
    });
  }

  // Footer Category Niche Links (Click to filter & jump to results area)
  document.querySelectorAll("[data-footer-filter]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const filterKey = link.dataset.footerFilter;
      AppState.activeFilter = filterKey;

      if (filterGroup) {
        filterGroup.querySelectorAll(".etsy-filter-pill").forEach(p => {
          if (p.dataset.filter === filterKey) {
            p.classList.add("active");
          } else {
            p.classList.remove("active");
          }
        });
      }

      const resultsArea = document.getElementById("resultsArea");
      if (resultsArea) {
        window.scrollTo({ top: Math.max(0, resultsArea.offsetTop - 70), behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      applyFiltersAndSort();
    });
  });

  // Footer Back to Top Button
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Dismiss Demo Banner
  const closeDemoBannerBtn = document.getElementById("closeDemoBannerBtn");
  if (closeDemoBannerBtn) {
    closeDemoBannerBtn.addEventListener("click", () => {
      const banner = document.getElementById("demoModeBanner");
      if (banner) banner.style.display = "none";
    });
  }
}

// ----------------------------------------------------------------------------
// 12. INITIALIZATION
// ----------------------------------------------------------------------------
async function initApp() {
  ThemeModule.init();
  WishlistModule.init();
  setupEventListeners();

  try {
    const bundles = await ApiService.fetchBundles();
    AppState.bundles = bundles;
    AppState.filteredBundles = bundles;

    if (AppState.isDemoMode) {
      const banner = document.getElementById("demoModeBanner");
      if (banner) banner.style.display = "flex";
    }

    applyFiltersAndSort();
  } catch (err) {
    console.error("Store initialization error:", err);
    showToast("Failed to load bundles.", "error");
  }
}

document.addEventListener("DOMContentLoaded", initApp);

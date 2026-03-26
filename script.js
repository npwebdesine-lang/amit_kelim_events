/* ================= הגדרות בסיס ================= */
const BASE_PATH = "catalog_pics";

/* ================= רשימת המוצרים המלאה ================= */
let catalogItems = [
  // ============================================
  // 🍽️ חלק 1: כלים
  // ============================================
  {
    id: "plate_besari_ribua",
    name: "צלחת בשרית מרובעת",
    category: "tools",
    sub: "צלחות",
    img: "catalog_pics/kelim/tsalahat_meruba_besari.webp",
  },
  {
    id: "plate_besari_agol",
    name: "צלחת בשרית עגולה",
    category: "tools",
    sub: "צלחות",
    img: "catalog_pics/kelim/tsalahat_agol_besari.webp",
  },
  {
    id: "plate_halavi_ribua",
    name: "צלחת חלבית ריבועית",
    category: "tools",
    sub: "צלחות",
    img: "catalog_pics/kelim/tsalahat_manaB_ribua_halavi.webp",
  },
  {
    id: "plate_halavi_agol",
    name: "צלחת חלבית עגולה",
    category: "tools",
    sub: "צלחות",
    img: "catalog_pics/kelim/tsalahat_manaB_agol_halavi.webp",
  },
  {
    id: "mazleg_besari",
    name: "מזלג בשרי",
    category: "tools",
    sub: "סכו״ם",
    img: "catalog_pics/kelim/mazleg_besari.webp",
  },
  {
    id: "sakin_besari",
    name: "סכין בשרי",
    category: "tools",
    sub: "סכו״ם",
    img: "catalog_pics/kelim/sakin_besari.webp",
  },
  {
    id: "kaf_besari",
    name: "כף בשרי",
    category: "tools",
    sub: "סכו״ם",
    img: "catalog_pics/kelim/kaf_besari.webp",
  },
  {
    id: "kapit_besari",
    name: "כפית בשרי",
    category: "tools",
    sub: "סכו״ם",
    img: "catalog_pics/kelim/kapit_besari.webp",
  },
  {
    id: "kaf_halavi",
    name: "כף חלבי",
    category: "tools",
    sub: "סכו״ם",
    img: "catalog_pics/kelim/kaf_halavi.webp",
  },
  {
    id: "mazlegon_halavi",
    name: "מזלגון חלבי",
    category: "tools",
    sub: "סכו״ם",
    img: "catalog_pics/kelim/mazlegon_halavi.webp",
  },
  {
    id: "sakin_halavi",
    name: "סכין חלבי",
    category: "tools",
    sub: "סכו״ם",
    img: "catalog_pics/kelim/sakin_halavi.webp",
  },
  {
    id: "mazleg_halavi",
    name: "מזלג חלבי",
    category: "tools",
    sub: "סכו״ם",
    img: "catalog_pics/kelim/mazleg_halavi.webp",
  },
  {
    id: "kapit_halavi",
    name: "כפית חלבי",
    category: "tools",
    sub: "סכו״ם",
    img: "catalog_pics/kelim/kapit_halavi.webp",
  },
  {
    id: "glass_for_light_drinks",
    name: "כוסות למשקאות קלים",
    category: "tools",
    sub: "כוסות",
    img: "catalog_pics/kelim/glass_for_light_drinks.webp",
  },
  {
    id: "wine_glass",
    name: "כוסות יין (גדול/קטן)",
    category: "tools",
    sub: "כוסות",
    img: "catalog_pics/kelim/wine_glass.webp",
  },
  {
    id: "kapot_hagasha_besari",
    name: "כפות הגשה בשריות",
    category: "tools",
    sub: "הגשה",
    img: "catalog_pics/kelim/kapot_hagasha_besari.webp",
  },
  {
    id: "salateria_besari_agol",
    name: "סלטיה בשרית עגולה",
    category: "tools",
    sub: "הגשה",
    img: "catalog_pics/kelim/salateria_agol_besari.webp",
  },
  {
    id: "salateria_aladin_besari",
    name: "סלטיה בשרית 'אלדין' ",
    category: "tools",
    sub: "הגשה",
    img: "catalog_pics/kelim/salateria_aladin_besari.webp",
  },
  {
    id: "salateria_malben_besari",
    name: "סלטיה בשרית מלבן",
    category: "tools",
    sub: "הגשה",
    img: "catalog_pics/kelim/salateria_malben_besari.webp",
  },
  {
    id: "salateria_meruba_besari",
    name: "סלטיה בשרית מרובעת",
    category: "tools",
    sub: "הגשה",
    img: "catalog_pics/kelim/salateria_meruba_besari.webp",
  },
  {
    id: "salateria_ovali_besari",
    name: "סלטיה בשרית אובאלי",
    category: "tools",
    sub: "הגשה",
    img: "catalog_pics/kelim/salateria_ovali_besari.webp",
  },
  {
    id: "plata_ovali_besari",
    name: "פלטה אובלי בשרי",
    category: "tools",
    sub: "הגשה",
    img: "catalog_pics/kelim/plata_ovali_besari.webp",
  },
  {
    id: "plata_malben_benoni_besari",
    name: "פלטה מלבן בינוני בשרי",
    category: "tools",
    sub: "הגשה",
    img: "catalog_pics/kelim/plata_malben_benoni_besari.webp",
  },
  {
    id: "shpindagesh",
    name: "שפינגדיש (הגשה)",
    category: "tools",
    sub: "הגשה",
    img: "catalog_pics/kelim/serving_traces.webp",
  },
  {
    id: "marakia",
    name: "קדרת מרק חשמלית - חלבי/בשרי",
    category: "tools",
    sub: "הגשה",
    img: "catalog_pics/kelim/marakia.webp",
  },
  // ============================================
  // 🪑 חלק 2: ציוד וריהוט
  // ============================================
  
  {
    id: "led_candle",
    name: "נר לד לאווירה",
    category: "others",
    sub: "עיצוב",
    img: "catalog_pics/kelim/marge_candels.webp",
  },
  {
    id: "chair",
    name: "כיסא כתר לבן",
    category: "others",
    sub: "ריהוט",
    img: "catalog_pics/kelim/cise_ceter.webp",
  },
  {
    id: "table",
    name: "שולחן עגול 1.60",
    category: "others",
    sub: "ריהוט",
    img: "images/gallery_1.webp",
  },

  // ============================================
  // 🎀 חלק 3: מפיות סאטן (01-14)
  // ============================================
  {
    id: "napkin_01",
    sku: "01",
    category: "napkins",
    sub: "סאטן",
    name: "מפית סאטן זהב מבריק",
    img: "catalog_pics/mapiyot/saten/01_shiny_gold_saten.webp",
  },
  {
    id: "napkin_02",
    sku: "02",
    category: "napkins",
    sub: "סאטן",
    name: "מפית סאטן זהב מט",
    img: "catalog_pics/mapiyot/saten/02_mat_gold_saten.webp",
  },
  {
    id: "napkin_03",
    sku: "03",
    category: "napkins",
    sub: "סאטן",
    name: "מפית סאטן שחור",
    img: "catalog_pics/mapiyot/saten/03_black_saten.webp",
  },
  {
    id: "napkin_04",
    sku: "04",
    category: "napkins",
    sub: "סאטן",
    name: "מפית סאטן כחול נייבי",
    img: "catalog_pics/mapiyot/saten/04_naivy_blue_saten.webp",
  },
  {
    id: "napkin_05",
    sku: "05",
    category: "napkins",
    sub: "סאטן",
    name: "מפית סאטן טורקיז",
    img: "catalog_pics/mapiyot/saten/05_turkiz_saten.webp",
  },
  {
    id: "napkin_06",
    sku: "06",
    category: "napkins",
    sub: "סאטן",
    name: "מפית סאטן תכלת",
    img: "catalog_pics/mapiyot/saten/06_tchelet_saten.webp",
  },
  {
    id: "napkin_07",
    sku: "07",
    category: "napkins",
    sub: "סאטן",
    name: "מפית סאטן לילך",
    img: "catalog_pics/mapiyot/saten/07_lilach_saten.webp",
  },
  {
    id: "napkin_08",
    sku: "08",
    category: "napkins",
    sub: "סאטן",
    name: "מפית סאטן סגול",
    img: "catalog_pics/mapiyot/saten/08_purple_saten.webp",
  },
  {
    id: "napkin_09",
    sku: "09",
    category: "napkins",
    sub: "סאטן",
    name: "מפית סאטן ורוד בייבי",
    img: "catalog_pics/mapiyot/saten/09_baby_pink_saten.webp",
  },
  {
    id: "napkin_10",
    sku: "10",
    category: "napkins",
    sub: "סאטן",
    name: "מפית סאטן ורוד פוקסיה",
    img: "catalog_pics/mapiyot/saten/10_fuksia_pink_saten.webp",
  },
  {
    id: "napkin_11",
    sku: "11",
    category: "napkins",
    sub: "סאטן",
    name: "מפית סאטן בורדו",
    img: "catalog_pics/mapiyot/saten/11_bordo_saten.webp",
  },
  {
    id: "napkin_12",
    sku: "12",
    category: "napkins",
    sub: "סאטן",
    name: "מפית סאטן לבן",
    img: "catalog_pics/mapiyot/saten/12_white_saten.webp",
  },
  {
    id: "napkin_13",
    sku: "13",
    category: "napkins",
    sub: "סאטן",
    name: "מפית סאטן קרם",
    img: "catalog_pics/mapiyot/saten/13_cream_saten.webp",
  },
  {
    id: "napkin_14",
    sku: "14",
    category: "napkins",
    sub: "סאטן",
    name: "מפית סאטן ירוק תפוח",
    img: "catalog_pics/mapiyot/saten/14_apple_green_saten.webp",
  },

  // ============================================
  // 🎀 חלק 4: מפיות פשתן (15-29)
  // ============================================
  {
    id: "napkin_15",
    sku: "15",
    category: "napkins",
    sub: "פשתן",
    name: "מפית פשתן שחרחר",
    img: "catalog_pics/mapiyot/pishtan/15_blacky_pishtan.webp",
  },
  {
    id: "napkin_16",
    sku: "16",
    category: "napkins",
    sub: "פשתן",
    name: "מפית פשתן ירוק תפוח",
    img: "catalog_pics/mapiyot/pishtan/16_apple_green_pishtan.webp",
  },
  {
    id: "napkin_17",
    sku: "17",
    category: "napkins",
    sub: "פשתן",
    name: "מפית פשתן מוקה",
    img: "catalog_pics/mapiyot/pishtan/17_moca_pishtan.webp",
  },
  {
    id: "napkin_18",
    sku: "18",
    category: "napkins",
    sub: "פשתן",
    name: "מפית פשתן כחלחל",
    img: "catalog_pics/mapiyot/pishtan/18_bluy_pishtan.webp",
  },
  {
    id: "napkin_19",
    sku: "19",
    category: "napkins",
    sub: "פשתן",
    name: "מפית פשתן אפור",
    img: "catalog_pics/mapiyot/pishtan/19_gray_pishtan.webp",
  },
  {
    id: "napkin_20",
    sku: "20",
    category: "napkins",
    sub: "פשתן",
    name: "מפית פשתן לבן",
    img: "catalog_pics/mapiyot/pishtan/20_white_pishtan.jpeg",
  },
  {
    id: "napkin_21",
    sku: "21",
    category: "napkins",
    sub: "פשתן",
    name: "מפית פשתן ורדרד",
    img: "catalog_pics/mapiyot/pishtan/21_pinky_pishtan.webp",
  },
  {
    id: "napkin_22",
    sku: "22",
    category: "napkins",
    sub: "פשתן",
    name: "מפית פשתן ג׳ינס",
    img: "catalog_pics/mapiyot/pishtan/22_jeans_pishtan.webp",
  },
  {
    id: "napkin_23",
    sku: "23",
    category: "napkins",
    sub: "פשתן",
    name: "מפית פשתן ורוד עתיק",
    img: "catalog_pics/mapiyot/pishtan/23_pink_atik_pishtan.webp",
  },
  {
    id: "napkin_24",
    sku: "24",
    category: "napkins",
    sub: "פשתן",
    name: "מפית פשתן מנטה כחול",
    img: "catalog_pics/mapiyot/pishtan/24_menta_blue_pishtan.webp",
  },
  {
    id: "napkin_25",
    sku: "25",
    category: "napkins",
    sub: "פשתן",
    name: "מפית פשתן קרם",
    img: "catalog_pics/mapiyot/pishtan/25_cream_pishtan.webp",
  },
  {
    id: "napkin_26",
    sku: "26",
    category: "napkins",
    sub: "פשתן",
    name: "מפית פשתן קפה",
    img: "catalog_pics/mapiyot/pishtan/26_coffie_pishtan.webp",
  },
  {
    id: "napkin_27",
    sku: "27",
    category: "napkins",
    sub: "פשתן",
    name: "מפית פשתן תכלת",
    img: "catalog_pics/mapiyot/pishtan/27_tchelet_pishtan.webp",
  },
  {
    id: "napkin_28",
    sku: "28",
    category: "napkins",
    sub: "פשתן",
    name: "מפית פשתן מנטה פיסטוק",
    img: "catalog_pics/mapiyot/pishtan/28_menta_phistuk.webp",
  },
  {
    id: "napkin_29",
    sku: "29",
    category: "napkins",
    sub: "פשתן",
    name: "מפית פשתן אבן",
    img: "catalog_pics/mapiyot/pishtan/29_even_pishtan.webp",
  },

  // ============================================
  // ✨ חלק 5: מפות סאטן 2.20 (01-10)
  // ============================================
  {
    id: "map22s_01",
    sku: "01",
    category: "maps",
    sub: "2.20",
    fabric: "סאטן",
    name: "מפה 2.20 סאטן לבן מעוטר",
    img: "catalog_pics/mapot/2.2/saten/01_white_meutar_saten.webp",
  },
  {
    id: "map22s_02",
    sku: "02",
    category: "maps",
    sub: "2.20",
    fabric: "סאטן",
    name: "מפה 2.20 סאטן אפור מעוטר",
    img: "catalog_pics/mapot/2.2/saten/02_gray_meutar_saten.webp",
  },
  {
    id: "map22s_03",
    sku: "03",
    category: "maps",
    sub: "2.20",
    fabric: "סאטן",
    name: "מפה 2.20 סאטן ירוק מעוטר",
    img: "catalog_pics/mapot/2.2/saten/03_green_meutar_saten.webp",
  },
  {
    id: "map22s_04",
    sku: "04",
    category: "maps",
    sub: "2.20",
    fabric: "סאטן",
    name: "מפה 2.20 סאטן שמנת מעוטר",
    img: "catalog_pics/mapot/2.2/saten/04_cream_meutar_saten.webp",
  },
  {
    id: "map22s_05",
    sku: "05",
    category: "maps",
    sub: "2.20",
    fabric: "סאטן",
    name: "מפה 2.20 סאטן בורדו",
    img: "catalog_pics/mapot/2.2/saten/05_bordo_saten.webp",
  },
  {
    id: "map22s_06",
    sku: "06",
    category: "maps",
    sub: "2.20",
    fabric: "סאטן",
    name: "מפה 2.20 סאטן סגול",
    img: "catalog_pics/mapot/2.2/saten/06_purple_saten.webp",
  },
  {
    id: "map22s_07",
    sku: "07",
    category: "maps",
    sub: "2.20",
    fabric: "סאטן",
    name: "מפה 2.20 סאטן ורוד פוקסיה",
    img: "catalog_pics/mapot/2.2/saten/07_fuksia_pink_saten.webp",
  },
  {
    id: "map22s_08",
    sku: "08",
    category: "maps",
    sub: "2.20",
    fabric: "סאטן",
    name: "מפה 2.20 סאטן כחול נייבי",
    img: "catalog_pics/mapot/2.2/saten/08_naevi_blue_saten.webp",
  },
  {
    id: "map22s_09",
    sku: "09",
    category: "maps",
    sub: "2.20",
    fabric: "סאטן",
    name: "מפה 2.20 סאטן טורקיז",
    img: "catalog_pics/mapot/2.2/saten/09_turkiz_saten.webp",
  },
  {
    id: "map22s_10",
    sku: "10",
    category: "maps",
    sub: "2.20",
    fabric: "סאטן",
    name: "מפה 2.20 סאטן ירוק תפוח",
    img: "catalog_pics/mapot/2.2/saten/10_apple_green.webp",
  },

  // ============================================
  // ✨ חלק 6: מפות פשתן 2.20 (11-20)
  // ============================================
  {
    id: "map22p_11",
    sku: "11",
    category: "maps",
    sub: "2.20",
    fabric: "פשתן",
    name: "מפה 2.20 פשתן לבן",
    img: "catalog_pics/mapot/2.2/pishtan/11_white_pishtan.webp",
  },
  {
    id: "map22p_12",
    sku: "12",
    category: "maps",
    sub: "2.20",
    fabric: "פשתן",
    name: "מפה 2.20 פשתן אפור",
    img: "catalog_pics/mapot/2.2/pishtan/12_gray_pishtan.webp",
  },
  {
    id: "map22p_13",
    sku: "13",
    category: "maps",
    sub: "2.20",
    fabric: "פשתן",
    name: "מפה 2.20 פשתן מוקה",
    img: "catalog_pics/mapot/2.2/pishtan/13_moca_pishtan.webp",
  },
  {
    id: "map22p_14",
    sku: "14",
    category: "maps",
    sub: "2.20",
    fabric: "פשתן",
    name: "מפה 2.20 פשתן ורדרד",
    img: "catalog_pics/mapot/2.2/pishtan/14_pinky_pishtan.webp",
  },
  {
    id: "map22p_15",
    sku: "15",
    category: "maps",
    sub: "2.20",
    fabric: "פשתן",
    name: "מפה 2.20 פשתן כחלחל אפרפר",
    img: "catalog_pics/mapot/2.2/pishtan/15_blue_gray_pishtan.webp",
  },
  {
    id: "map22p_16",
    sku: "16",
    category: "maps",
    sub: "2.20",
    fabric: "פשתן",
    name: "מפה 2.20 פשתן סגלגל",
    img: "catalog_pics/mapot/2.2/pishtan/16_purply_pishtan.jpg",
  },
  {
    id: "map22p_17",
    sku: "17",
    category: "maps",
    sub: "2.20",
    fabric: "פשתן",
    name: "מפה 2.20 פשתן שחרחר",
    img: "catalog_pics/mapot/2.2/pishtan/17_blacky_pishtan.webp",
  },
  {
    id: "map22p_18",
    sku: "18",
    category: "maps",
    sub: "2.20",
    fabric: "פשתן",
    name: "מפה 2.20 פשתן פודרה",
    img: "catalog_pics/mapot/2.2/pishtan/18_pudra_pishtan.webp",
  },
  {
    id: "map22p_19",
    sku: "19",
    category: "maps",
    sub: "2.20",
    fabric: "פשתן",
    name: "מפה 2.20 פשתן קרם",
    img: "catalog_pics/mapot/2.2/pishtan/19_cream_pishtan.webp",
  },
  {
    id: "map22p_20",
    sku: "20",
    category: "maps",
    sub: "2.20",
    fabric: "פשתן",
    name: "מפה 2.20 פשתן שחור",
    img: "catalog_pics/mapot/2.2/pishtan/20_dark_black_pishtan.webp",
  },

  // ============================================
  // ✨ חלק 7: מפות פשתן 2.50 (21-29)
  // ============================================
  {
    id: "map25p_21",
    sku: "21",
    category: "maps",
    sub: "2.50",
    fabric: "פשתן",
    name: "מפה 2.50 פשתן קרם",
    img: "catalog_pics/mapot/2.5/pishtan/21_cream_pishtan.webp",
  },
  {
    id: "map25p_22",
    sku: "22",
    category: "maps",
    sub: "2.50",
    fabric: "פשתן",
    name: "מפה 2.50 פשתן ג׳ינס",
    img: "catalog_pics/mapot/2.5/pishtan/22_jeans_pishtan.webp",
  },
  {
    id: "map25p_23",
    sku: "23",
    category: "maps",
    sub: "2.50",
    fabric: "פשתן",
    name: "מפה 2.50 פשתן ורוד עתיק",
    img: "catalog_pics/mapot/2.5/pishtan/23_pink_atik_pishtan.webp",
  },
  {
    id: "map25p_24",
    sku: "24",
    category: "maps",
    sub: "2.50",
    fabric: "פשתן",
    name: "מפה 2.50 פשתן מנטה כחול",
    img: "catalog_pics/mapot/2.5/pishtan/24_menta_blue_pishtan.webp",
  },
  {
    id: "map25p_25",
    sku: "25",
    category: "maps",
    sub: "2.50",
    fabric: "פשתן",
    name: "מפה 2.50 פשתן קפה",
    img: "catalog_pics/mapot/2.5/pishtan/25_coffie_pishtan.webp",
  },
  {
    id: "map25p_26",
    sku: "26",
    category: "maps",
    sub: "2.50",
    fabric: "פשתן",
    name: "מפה 2.50 פשתן תכלת",
    img: "catalog_pics/mapot/2.5/pishtan/26_tchelet_pishtan.webp",
  },
  {
    id: "map25p_27",
    sku: "27",
    category: "maps",
    sub: "2.50",
    fabric: "פשתן",
    name: "מפה 2.50 פשתן מנטה פיסטוק",
    img: "catalog_pics/mapot/2.5/pishtan/27_fistuck_menta_pishtan.webp",
  },
  {
    id: "map25p_28",
    sku: "28",
    category: "maps",
    sub: "2.50",
    fabric: "פשתן",
    name: "מפה 2.50 פשתן אבן",
    img: "catalog_pics/mapot/2.5/pishtan/28_even_pishtan.webp",
  },
];

/* ================= לוגיקת האתר ו-GSAP ================= */

const state = {
  picked: new Set(),
  category: "tools",
  subFilter: "all",
  search: "",
  galleryPage: 0,
};

const galleryImages = [
  "images/gallery_1.webp",
  "images/gallery_2.webp",
  "images/gallery_blue.webp",
  "images/gallery_blue_green.webp",
  "images/gallery_purple.webp",
  "images/gallery_silver.webp",
  "images/gallery_7.webp",
  "images/gallery_8.webp",
  "images/gallery_9.webp",
  "images/gallery_10.webp",
  "images/gallery_12.webp",
  "images/hero.webp",
];

const $ = (id) => document.getElementById(id);
const $$ = (sel) => document.querySelectorAll(sel);
const modals = {
  catalog: $("catalogModal"),
  product: $("productModal"),
  wa: $("waModal"),
  procedure: $("procedureModal"),
};

document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderCatalog(); // אנימציית כניסה ראשונית תתבצע בתוך renderCatalog
  renderGallery();
  setupEventListeners();
  $("year").textContent = new Date().getFullYear();
  initGSAP();
});

function initGSAP() {
  gsap.registerPlugin(ScrollTrigger);

  // אנימציה לאזור הראשי (Hero)
  gsap.fromTo(".hero-title, .hero-subtitle-large, .hero-desc, .hero-buttons", 
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 }
  );

  // אנימציה לשלבים - איך זה עובד (מופעל על ה-li)
  gsap.fromTo(".steps-grid li", 
    { y: 50, opacity: 0 },
    {
      scrollTrigger: {
        trigger: "#how",
        start: "top 85%",
        toggleActions: "play none none none"
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.2)"
    }
  );

  // אנימציה לכרטיסי מחירון
  gsap.fromTo(".pricing-card", 
    { y: 50, opacity: 0 },
    {
      scrollTrigger: {
        trigger: "#pricing",
        start: "top 85%",
        toggleActions: "play none none none"
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    }
  );

  // תמונות בגלריה בכניסה ראשונית
  gsap.fromTo(".gallery-grid img", 
    { scale: 0.85, opacity: 0 },
    {
      scrollTrigger: {
        trigger: "#gallery",
        start: "top 85%",
        toggleActions: "play none none none"
      },
      scale: 1,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    }
  );

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
}

function setupEventListeners() {
  $$(
    "#openCatalogBtn, #openCatalogBtnMobile, #openCatalogHero, #openCatalogFromHow, #openCatalogFooter",
  ).forEach((btn) =>
    btn?.addEventListener("click", () => openModal("catalog")),
  );

  $("closeCatalog").addEventListener("click", () => closeModal("catalog"));
  $("closeProduct").addEventListener("click", () => closeModal("product"));
  $("closeWa").addEventListener("click", () => closeModal("wa"));
  $("closeProcedure").addEventListener("click", () => closeModal("procedure"));

  $$(".modal-backdrop").forEach((bd) =>
    bd.addEventListener("click", (e) =>
      closeModal(e.target.closest(".modal").id.replace("Modal", "")),
    ),
  );

  $("catalogSearch").addEventListener("input", (e) => {
    state.search = e.target.value.toLowerCase();
    renderCatalog();
  });
  $("clearPicks").addEventListener("click", () => {
    if (confirm("לנקות בחירות?")) {
      state.picked.clear();
      updateUI();
    }
  });

  $("goToOrderFromCatalog").addEventListener("click", () => {
    closeModal("catalog");
    updateWaPreview();
    openModal("wa");
  });
  $("quickOrderNoCatalog").addEventListener("click", () => {
    state.picked.clear();
    updateUI();
    openModal("wa");
  });
  $("openWaHeader").addEventListener("click", () => {
    openModal("wa");
  });
  $("openWaFooter").addEventListener("click", () => {
    openModal("wa");
  });

  $("waFormModal").addEventListener("submit", (e) => {
    e.preventDefault();
    closeModal("wa");
    openModal("procedure");
  });
  $("procedureAck").addEventListener(
    "change",
    (e) => ($("approveProcedure").disabled = !e.target.checked),
  );
  $("approveProcedure").addEventListener("click", sendToWhatsApp);

  $("hamburger").addEventListener("click", () => {
    const mobileNav = $("mobileNav");
    const hamburger = $("hamburger");
    
    if (mobileNav.classList.contains("show")) {
      gsap.to(mobileNav, {
        y: -10,
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          mobileNav.classList.remove("show");
          hamburger.classList.remove("open");
        }
      });
    } else {
      mobileNav.classList.add("show");
      hamburger.classList.add("open");
      gsap.fromTo(mobileNav, 
        { y: -10, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.3 }
      );
    }
  });
  
  $("productTogglePick").addEventListener("click", () => {
    togglePick($("productModal").dataset.activeId);
    closeModal("product");
  });

  // === עדכון מאזיני גלריה לשימוש באנימציה ===
  $("galleryPrev").addEventListener("click", () => navigateGallery(-1));
  $("galleryNext").addEventListener("click", () => navigateGallery(1));

  ["leadName", "eventDate", "guestCount", "eventAddress"].forEach((id) => {
    const el = $(id);
    if (el) el.addEventListener("input", updateWaPreview);
  });

  const deliveryCheck = $("needDelivery");
  if (deliveryCheck) deliveryCheck.addEventListener("change", updateWaPreview);
}

const categories = [
  { key: "tools", label: "🍽️ כלים" },
  { key: "maps", label: "✨ מפות" },
  { key: "napkins", label: "🎀 מפיות" },
  { key: "others", label: "🪑 ציוד" },
];

function renderFilters() {
  $("filters").innerHTML = categories
    .map(
      (c) =>
        `<button class="filter-pill ${state.category === c.key ? "active" : ""}" onclick="setCategory('${c.key}')">${c.label}</button>`,
    )
    .join("");
  renderSubFilters();
}

function renderSubFilters() {
  const relevant = catalogItems.filter((i) => i.category === state.category);
  const subs = ["all", ...new Set(relevant.map((i) => i.sub).filter(Boolean))];

  if (subs.length > 1) {
    $("subfilters").style.display = "flex";
    $("subfilters").innerHTML = subs
      .map(
        (s) =>
          `<button class="filter-pill ${state.subFilter === s ? "active" : ""}" onclick="setSubFilter('${s}')">${s === "all" ? "הכל" : s}</button>`,
      )
      .join("");
  } else {
    $("subfilters").style.display = "none";
  }
}

// === פונקציית מעבר אנימטיבית לקטלוג ===
// === פונקציית מעבר אנימטיבית לקטלוג ===
function navigateCatalog() {
  const currentItems = $$(".catalog-grid .catalog-item");

  // אם אין פריטים, נרנדר ונעשה אנימציה ישירות
  if (!currentItems.length) {
    renderCatalog(true);
    return;
  }

  // אנימציה החוצה (מהירה יותר)
  gsap.to(currentItems, {
    opacity: 0,
    y: 30,
    duration: 0.2,
    stagger: 0.03,
    ease: "power2.in",
    onComplete: () => {
      renderCatalog(true); // נבקש לרנדר מחדש יחד עם אנימציית כניסה
    }
  });
}

function renderCatalog(animate = false) {
  const grid = $("catalogGrid");
  const filtered = catalogItems.filter((item) => {
    const matchCat = item.category === state.category;
    const matchSub = state.subFilter === "all" || item.sub === state.subFilter;
    const matchSearch =
      !state.search ||
      item.name.toLowerCase().includes(state.search) ||
      (item.sku && item.sku.includes(state.search));
    return matchCat && matchSub && matchSearch;
  });

  if (!filtered.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:30px;color:#888;">לא נמצאו מוצרים. נסה לשנות חיפוש.</div>`;
    return;
  }

  grid.innerHTML = filtered
    .map((item) => {
      const isPicked = state.picked.has(item.id);
      const fallbackImg =
        "https://placehold.co/300x200/f0f0f0/cccccc?text=אין+תמונה";
      return `
      <div class="catalog-item ${isPicked ? "picked" : ""}" id="item-${item.id}">
        <div class="ci-img" onclick="openProduct('${item.id}')">
          <img src="${item.img}" onerror="this.src='${fallbackImg}'" loading="lazy">
        </div>
        <div class="ci-details">
          <div class="ci-name">${item.name}</div>
          ${item.sku ? `<div class="ci-sku">מק"ט: ${item.sku}</div>` : ""}
          <button class="ci-btn" onclick="togglePick('${item.id}')">${isPicked ? "✓ נבחר" : "+ הוספה"}</button>
        </div>
      </div>`;
    })
    .join("");

  // נפעיל את האנימציה רק אם ביקשנו במפורש (מעבר קטגוריה)
  if (animate) {
    gsap.fromTo("#catalogGrid .catalog-item", 
      { opacity: 0, y: -40 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "back.out(1.2)" }
    );
  }
}

function renderCatalog() {
  const grid = $("catalogGrid");
  const filtered = catalogItems.filter((item) => {
    const matchCat = item.category === state.category;
    const matchSub = state.subFilter === "all" || item.sub === state.subFilter;
    const matchSearch =
      !state.search ||
      item.name.toLowerCase().includes(state.search) ||
      (item.sku && item.sku.includes(state.search));
    return matchCat && matchSub && matchSearch;
  });

  if (!filtered.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:30px;color:#888;">לא נמצאו מוצרים. נסה לשנות חיפוש.</div>`;
    return;
  }

  grid.innerHTML = filtered
    .map((item) => {
      const isPicked = state.picked.has(item.id);
      const fallbackImg =
        "https://placehold.co/300x200/f0f0f0/cccccc?text=אין+תמונה";
      return `
      <div class="catalog-item ${isPicked ? "picked" : ""}" id="item-${item.id}">
        <div class="ci-img" onclick="openProduct('${item.id}')">
          <img src="${item.img}" onerror="this.src='${fallbackImg}'" loading="lazy">
        </div>
        <div class="ci-details">
          <div class="ci-name">${item.name}</div>
          ${item.sku ? `<div class="ci-sku">מק"ט: ${item.sku}</div>` : ""}
          <button class="ci-btn" onclick="togglePick('${item.id}')">${isPicked ? "✓ נבחר" : "+ הוספה"}</button>
        </div>
      </div>`;
    })
    .join("");

  // === אנימציה פנימה מדורגת (Cascade effect) בקטגוריות ===
  gsap.fromTo("#catalogGrid .catalog-item", 
    { opacity: 0, y: -40 },
    { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "back.out(1.4)" }
  );
}

window.setCategory = (cat) => {
  state.category = cat;
  state.subFilter = "all";
  
  // עדכון המסננים ב-DOM
  $$("#filters .filter-pill").forEach(p => p.classList.remove("active"));
  const activeBtn = Array.from($$("#filters .filter-pill")).find(p => p.getAttribute("onclick").includes(`'${cat}'`));
  if (activeBtn) activeBtn.classList.add("active");
  
  // renderFilters(); // הסרנו כדי לעשות עדכון עדין יותר ב-DOM
  renderSubFilters(); // עדכון תת-מסננים
  navigateCatalog(); // ביצוע אנימציית מעבר
};

window.setSubFilter = (sub) => {
  state.subFilter = sub;
  renderSubFilters(); // עדכון המסננים עצמם
  navigateCatalog(); // ביצוע אנימציית מעבר
};

window.togglePick = (id) => {
  // 1. הוספה או הסרה מהזיכרון
  state.picked.has(id) ? state.picked.delete(id) : state.picked.add(id);
  const isPicked = state.picked.has(id);
  
  // 2. עדכון חכם ומהיר של ה-HTML הספציפי בלי לרנדר מחדש את כל הקטלוג
  const itemEl = document.getElementById(`item-${id}`);
  if (itemEl) {
    const btn = itemEl.querySelector('.ci-btn');
    if (isPicked) {
      itemEl.classList.add('picked');
      if (btn) btn.textContent = "✓ נבחר";
    } else {
      itemEl.classList.remove('picked');
      if (btn) btn.textContent = "+ הוספה";
    }
  }

  // 3. עדכוני מסביב (מספר פריטים והודעת וואטסאפ)
  $("pickedCount").textContent = state.picked.size;
  updateWaPreview();
};

function updateUI() {
  $("pickedCount").textContent = state.picked.size;
  renderCatalog(false); // רינדור שקט ללא אנימציה (למשל כשלוחצים על "ניקוי")
  updateWaPreview();
}

window.openProduct = (id) => {
  const item = catalogItems.find((i) => i.id === id);
  if (!item) return;
  $("productModalImg").src = item.img;
  $("productModalName").textContent = item.name;
  $("productModalNote").textContent = item.note || "";
  $("productModalChips").innerHTML = ""; 

  const btn = $("productTogglePick");
  const isPicked = state.picked.has(id);

  if (isPicked) {
    btn.textContent = "✓ הסרה מההזמנה";
    btn.className = "btn btn-outline btn-block";
  } else {
    btn.textContent = "הוספה להזמנה";
    btn.className = "btn btn-primary btn-block";
  }

  $("productModal").dataset.activeId = id;
  openModal("product");
};

const IMAGES_PER_PAGE = 6;

// === פונקציית דפדוף אנימטיבית לגלריה ===
function navigateGallery(dir) {
  const currentImages = $$(".gallery-grid img");

  // אנימציה החוצה (Fade and Slide) החוצה
  gsap.to(currentImages, {
    opacity: 0,
    x: dir > 0 ? -40 : 40, // הזזה לפי הכיוון
    scale: 0.9,
    duration: 0.3,
    ease: "power2.in",
    onComplete: () => {
      // רק אחרי שהאנימציה מסתיימת, נעדכן את המדינה ונרנדר
      state.galleryPage += dir;
      renderGallery();
    }
  });
}

function renderGallery() {
  const grid = $("galleryGrid");
  const start = state.galleryPage * IMAGES_PER_PAGE;
  const pageItems = galleryImages.slice(start, start + IMAGES_PER_PAGE);
  grid.innerHTML = pageItems
    .map(
      (src) => `<img src="${src}" onclick="window.open('${src}')" alt="גלריה">`,
    )
    .join("");
  $("galleryPrev").disabled = state.galleryPage === 0;
  $("galleryNext").disabled =
    (state.galleryPage + 1) * IMAGES_PER_PAGE >= galleryImages.length;
  renderGalleryDots();

  // === אנימציה פנימה מדורגת (Fade in with Stagger) בדפדוף גלריה ===
  gsap.fromTo("#galleryGrid img", 
    { opacity: 0, y: 40, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
  );
}

function renderGalleryDots() {
  const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE);
  $("galleryDots").innerHTML = Array.from(
    { length: totalPages },
    (_, i) =>
      `<div class="dot ${i === state.galleryPage ? "active" : ""}" onclick="goToGalleryPage(${i})"></div>`,
  ).join("");
}

window.goToGalleryPage = (i) => {
  // חישוב כיוון לדפדוף מנקודות
  const dir = i > state.galleryPage ? 1 : -1;
  state.galleryPage = i;
  navigateGallery(0); // נשתמש ב-0 כדי שזה לא יזיז אלא רק יעשה אנימציית דעיכה
};

function updateUI() {
  $("pickedCount").textContent = state.picked.size;
  renderCatalog();
  updateWaPreview();
}

function updateWaPreview() {
  const name = $("leadName").value;
  let date = $("eventDate").value;
  if (date) {
    const [y, m, d] = date.split("-");
    date = `${d}/${m}/${y}`;
  }
  const count = $("guestCount").value;
  const address = $("eventAddress").value;

  const deliveryText = $("needDelivery").checked
    ? " (אני רוצה לקבל הצעת מחיר להובלת הכלים)"
    : "";

  let text = `היי, קוראים לי ${name}\n`;
  text += `אני מאשר את תנאי השכרת הציוד המפורט באתר\n`;
  text += `אשמח להצעת מחיר לאירוע שלי שמתקיים בתאריך ${date}\n`;
  text += `האירוע נמצא ב${address}${deliveryText}.\n`;
  text += `באירוע יהיה כ${count} אורחים.\n\n`;

  if (state.picked.size > 0) {
    text += `מתוך הקטלוג:\n`;
    state.picked.forEach((id) => {
      const item = catalogItems.find((x) => x.id === id);
      if (item) {
        const skuText = item.sku ? `, מק"ט ${item.sku}` : "";
        text += `- ${item.name}${skuText}\n`;
      }
    });
    text += `\n`; 
  }

  text += `תודה מראש.`;
  const previewBox = $("messagePreview");
  if (previewBox) previewBox.textContent = text;
}

function sendToWhatsApp() {
  const phone = "972585055011"; 
  const text = $("messagePreview").textContent;
  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
    "_blank",
  );
  closeModal("procedure");
}

function openModal(name) {
  const modal = modals[name];
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  const target = modal.querySelector('.modal-card') || modal.querySelector('.modal-panel');
  const backdrop = modal.querySelector('.modal-backdrop');

  if (backdrop) {
    gsap.fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.3 });
  }
  
  if (target) {
    gsap.fromTo(target,
      { scale: 0.8, opacity: 0, y: 30 },
      { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.5)" }
    );
  }
}

function closeModal(name) {
  const modal = modals[name];
  const target = modal.querySelector('.modal-card') || modal.querySelector('.modal-panel');
  const backdrop = modal.querySelector('.modal-backdrop');

  gsap.to(target, { scale: 0.9, opacity: 0, y: 20, duration: 0.2 });
  gsap.to(backdrop, { 
    opacity: 0, 
    duration: 0.2, 
    onComplete: () => {
      modal.setAttribute("aria-hidden", "true");
      if (!Object.values(modals).some(m => m.getAttribute("aria-hidden") === "false")) {
        document.body.style.overflow = "";
      }
    }
  });
}
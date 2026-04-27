/* ================= הגדרות בסיס ================= */
const BASE_PATH = "catalog_pics";
const IMAGES_PER_PAGE = 6;

/* ================= רשימת המוצרים המלאה ================= */
// הפריטים סודרו מחדש לתצוגה הגיונית בקטלוג:
// צלחות -> סכו"ם -> כוסות -> כלי הגשה -> ריהוט/ציוד -> מפיות -> מפות
let catalogItems = [
  // ============================================
  // 🍽️ חלק 1: כלים (Tools)
  // ============================================

  // -- צלחות --
  {
    id: "plate_besari_agol",
    name: "צלחת בשרית עגולה",
    category: "tools",
    sub: "צלחות",
    img: "catalog_pics/kelim/tsalahat_agol_besari.webp",
  },
  {
    id: "plate_besari_ribua",
    name: "צלחת בשרית מרובעת",
    category: "tools",
    sub: "צלחות",
    img: "catalog_pics/kelim/tsalahat_meruba_besari.webp",
  },
  {
    id: "plate_halavi_agol",
    name: "צלחת חלבית עגולה",
    category: "tools",
    sub: "צלחות",
    img: "catalog_pics/kelim/tsalahat_manaB_agol_halavi.webp",
  },
  {
    id: "plate_halavi_ribua",
    name: "צלחת חלבית מרובעת",
    category: "tools",
    sub: "צלחות",
    img: "catalog_pics/kelim/tsalahat_manaB_ribua_halavi.webp",
  },

  // -- סכו"ם --

  {
    id: "sakin_besari",
    name: "סכין בשרי",
    category: "tools",
    sub: "סכו״ם",
    img: "catalog_pics/kelim/sakin_besari.webp",
  },
  {
    id: "mazleg_besari",
    name: "מזלג בשרי",
    category: "tools",
    sub: "סכו״ם",
    img: "catalog_pics/kelim/mazleg_besari.webp",
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
    id: "mazlegon_besari",
    name: "מזלגון בשרי",
    category: "tools",
    sub: "סכו״ם",
    img: "catalog_pics/kelim/mazlegon_halavi.webp", // כפי שהיה במקור
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
    id: "kaf_halavi",
    name: "כף חלבי",
    category: "tools",
    sub: "סכו״ם",
    img: "catalog_pics/kelim/kaf_halavi.webp",
  },
  {
    id: "kapit_halavi",
    name: "כפית חלבי",
    category: "tools",
    sub: "סכו״ם",
    img: "catalog_pics/kelim/kapit_halavi.webp",
  },
  {
    id: "mazlegon_halavi",
    name: "מזלגון חלבי",
    category: "tools",
    sub: "סכו״ם",
    img: "catalog_pics/kelim/mazlegon_halavi.webp",
  },

  // -- כוסות --
  {
    id: "glass_for_light_drinks",
    name: "כוסות לשתייה קלה",
    category: "tools",
    sub: "כוסות",
    img: "catalog_pics/kelim/glass_for_light_drinks.webp",
  },
  {
    id: "glass_long",
    name: "כוס לונג",
    category: "tools",
    sub: "כוסות",
    img: "catalog_pics/kelim/glass_long.webp",
  },
  {
    id: "wine_glass_big",
    name: "גביע יין (גדול)",
    category: "tools",
    sub: "כוסות",
    img: "catalog_pics/kelim/wine_glass_big.webp",
  },
  {
    id: "wine_glass_small",
    name: "גביע יין (קטן)",
    category: "tools",
    sub: "כוסות",
    img: "catalog_pics/kelim/wine_glass_small.webp",
  },
  {
    id: "wine_glass_combined",
    name: "גביעים להמחשת הגודל",
    category: "tools",
    sub: "כוסות",
    img: "catalog_pics/kelim/wine_glass_combined.webp",
  },

  // -- כלי הגשה, קערות ופלטות --
  {
    id: "salateria_besari_agol",
    name: "סלטריה בשרית עגולה",
    category: "tools",
    sub: "הגשה",
    img: "catalog_pics/kelim/salateria_agol_besari.webp",
  },
  {
    id: "salateria_aladin_besari",
    name: "סלטריה בשרית 'אלדין'/מטבלים ",
    category: "tools",
    sub: "הגשה",
    img: "catalog_pics/kelim/salateria_aladin_besari.webp",
  },
  {
    id: "salateria_malben_besari",
    name: "סלטריה בשרית מלבן",
    category: "tools",
    sub: "הגשה",
    img: "catalog_pics/kelim/salateria_malben_besari.webp",
  },
  {
    id: "salateria_meruba_besari",
    name: "סלטריה בשרית מרובעת",
    category: "tools",
    sub: "הגשה",
    img: "catalog_pics/kelim/salateria_meruba_besari.webp",
  },
  {
    id: "salateria_ovali_besari",
    name: "מרקיה בשרית קונית",
    category: "tools",
    sub: "הגשה",
    img: "catalog_pics/kelim/salateria_ovali_besari.webp",
  },
  {
    id: "plata_ovali_besari",
    name: "פלטה אובלי לבשרים/תוספות",
    category: "tools",
    sub: "הגשה",
    img: "catalog_pics/kelim/plata_ovali_besari.webp",
  },
  {
    id: "plata_malben_benoni_besari",
    name: "פלטה מלבן בינוני לבשרים/תוספות",
    category: "tools",
    sub: "הגשה",
    img: "catalog_pics/kelim/plata_malben_benoni_besari.webp",
  },
  {
    id: "kearat_shuhit28",
    name: "קערת זכוכית קוטר 28 ס״מ",
    category: "tools",
    sub: "הגשה",
    img: "catalog_pics/kelim/kearat_shohit28.webp",
  },
  {
    id: "kearat_shuhit20",
    name: "קערת זכוכית קוטר 20 ס״מ",
    category: "tools",
    sub: "הגשה",
    img: "catalog_pics/kelim/kearot_shuhit20.webp",
  },
  {
    id: "kearat_shuhit16",
    name: "קערת זכוכית קוטר 16 ס״מ",
    category: "tools",
    sub: "הגשה",
    img: "catalog_pics/kelim/kearot_shuhit16.webp",
  },
  {
    id: "kearat_shuhit12",
    name: "קערת זכוכית קוטר 12 ס״מ",
    category: "tools",
    sub: "הגשה",
    img: "catalog_pics/kelim/kearot_shuhit12.webp",
  },
  {
    id: "kapot_hagasha_besari_1", // שונה כדי למנוע כפילות מזהים עם החלבי
    name: "כפות הגשה בשרי",
    category: "tools",
    sub: "הגשה",
    img: "catalog_pics/kelim/kapot_hagasha_besari.webp",
  },
  {
    id: "kapot_hagasha_halavi_1", // שונה כדי למנוע כפילות מזהים עם הבשרי
    name: "כפות הגשה חלבי",
    category: "tools",
    sub: "הגשה",
    img: "catalog_pics/kelim/kapot_hagasha_besari.webp",
  },
  {
    id: "marit_for_fish",
    name: "מרית לדגים",
    category: "tools",
    sub: "הגשה",
    img: "catalog_pics/kelim/marit_for_fish.jpg",
  },
  {
    id: "caf_hagasha_anak_for_mitbach",
    name: "כף הגשה ענק למטבח",
    category: "tools",
    sub: "הגשה",
    img: "catalog_pics/kelim/caf_hagasha_anak_for_mitbach.webp",
  },
  {
    id: "melkahaim_lesalat",
    name: "מלקחיים",
    category: "tools",
    sub: "הגשה",
    img: "catalog_pics/kelim/melkahaim_lesalat.webp",
  },
  {
    id: "shpindagesh", // נשאר כפי שהיה בטיוטה השנייה שלך
    name: "שפינגדיש (הגשה) בשרי/חלבי",
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
  // 🪑 חלק 2: ציוד וריהוט (ללא תתי קטגוריות - sub ריק)
  // ============================================
  {
    id: "led_candle",
    name: "נר לד לאווירה",
    category: "others",
    sub: "",
    img: "catalog_pics/kelim/marge_candels.webp",
  },
  {
    id: "chair",
    name: "כיסא כתר לבן",
    category: "others",
    sub: "",
    img: "catalog_pics/kelim/cise_ceter.webp",
  },
  {
    id: "table",
    name: "שולחן עגול 1.60",
    category: "others",
    sub: "",
    img: "images/gallery_1.webp",
  },
  {
    id: "shulhan_meruba",
    name: "שולחן מרובע ל8 סועדים",
    category: "others",
    sub: "",
    img: "catalog_pics/kelim/shulhan_meruba.webp",
  },
  {
    id: "shulhan_ceter",
    name: "שולחן כתר",
    category: "others",
    sub: "",
    img: "catalog_pics/kelim/shulhan_ceter.webp",
  },
  {
    id: "aron_himum",
    name: "ארון חימום",
    category: "others",
    sub: "",
    img: "catalog_pics/kelim/aron_himum.webp",
  },
  {
    id: "miham",
    name: "מיחם חשמלי 300 כוסות/180 כוסות/ 80 כוסות",
    category: "others",
    sub: "",
    img: "catalog_pics/kelim/miham.jpg",
  },
  {
    id: "plata",
    name: "פלטה חשמלית",
    category: "others",
    sub: "",
    img: "catalog_pics/kelim/plata.avif",
  },
  {
    id: "stand_for_magash",
    name: "סטנד למגש",
    category: "others",
    sub: "",
    img: "catalog_pics/kelim/stand_for_magash.webp",
  },
  {
    id: "magash_meltsar",
    name: "מגש מלצר",
    category: "others",
    sub: "",
    img: "catalog_pics/kelim/magash_meltsar.webp",
  },

  // ============================================
  // 🎀 חלק 3: מפיות (napkins) - סאטן ופשתן
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
  // ✨ חלק 4: מפות (maps) - סאטן ופשתן
  // ============================================
  {
    id: "map22s_01",
    sku: "01",
    category: "maps",
    sub: "2.20/2.20",
    fabric: "סאטן",
    name: "מפה 2.20/2.20 סאטן לבן מעוטר",
    img: "catalog_pics/mapot/2.2/saten/01_white_meutar_saten.webp",
  },
  {
    id: "map22s_02",
    sku: "02",
    category: "maps",
    sub: "2.20/2.20",
    fabric: "סאטן",
    name: "מפה 2.20/2.20 סאטן אפור מעוטר (מפה דו צדדית)",
    img: "catalog_pics/mapot/2.2/saten/02_gray_meutar_saten.webp",
  },
  {
    id: "map22s_03",
    sku: "03",
    category: "maps",
    sub: "2.20/2.20",
    fabric: "סאטן",
    name: "מפה 2.20/2.20 סאטן ירוק מעוטר (מפה דו צדדית)",
    img: "catalog_pics/mapot/2.2/saten/03_green_meutar_saten.webp",
  },
  {
    id: "map22s_04",
    sku: "04",
    category: "maps",
    sub: "2.20/2.20",
    fabric: "סאטן",
    name: "מפה 2.20/2.20 סאטן שמנת מעוטר",
    img: "catalog_pics/mapot/2.2/saten/04_cream_meutar_saten.webp",
  },
  {
    id: "map22s_05",
    sku: "05",
    category: "maps",
    sub: "2.20/2.20",
    fabric: "סאטן",
    name: "מפה 2.20/2.20 סאטן בורדו",
    img: "catalog_pics/mapot/2.2/saten/05_bordo_saten.webp",
  },
  {
    id: "map22s_06",
    sku: "06",
    category: "maps",
    sub: "2.20/2.20",
    fabric: "סאטן",
    name: "מפה 2.20/2.20 סאטן סגול",
    img: "catalog_pics/mapot/2.2/saten/06_purple_saten.webp",
  },
  {
    id: "map22s_07",
    sku: "07",
    category: "maps",
    sub: "2.20/2.20",
    fabric: "סאטן",
    name: "מפה 2.20/2.20 סאטן ורוד פוקסיה",
    img: "catalog_pics/mapot/2.2/saten/07_fuksia_pink_saten.webp",
  },
  {
    id: "map22s_08",
    sku: "08",
    category: "maps",
    sub: "2.20/2.20",
    fabric: "סאטן",
    name: "מפה 2.20/2.20 סאטן כחול נייבי",
    img: "catalog_pics/mapot/2.2/saten/08_naevi_blue_saten.webp",
  },
  {
    id: "map22s_09",
    sku: "09",
    category: "maps",
    sub: "2.20/2.20",
    fabric: "סאטן",
    name: "מפה 2.20/2.20 סאטן טורקיז",
    img: "catalog_pics/mapot/2.2/saten/09_turkiz_saten.webp",
  },
  {
    id: "map22s_10",
    sku: "10",
    category: "maps",
    sub: "2.20/2.20",
    fabric: "סאטן",
    name: "מפה 2.20/2.20 סאטן ירוק תפוח",
    img: "catalog_pics/mapot/2.2/saten/10_apple_green.webp",
  },

  {
    id: "map22p_11",
    sku: "11",
    category: "maps",
    sub: "2.20/2.20",
    fabric: "פשתן",
    name: "מפה 2.20/2.20 פשתן לבן",
    img: "catalog_pics/mapot/2.2/pishtan/11_white_pishtan.webp",
  },
  {
    id: "map22p_12",
    sku: "12",
    category: "maps",
    sub: "2.20/2.20",
    fabric: "פשתן",
    name: "מפה 2.20/2.20 פשתן אפור",
    img: "catalog_pics/mapot/2.2/pishtan/12_gray_pishtan.jpeg",
  },
  {
    id: "map22p_13",
    sku: "13",
    category: "maps",
    sub: "2.20/2.20",
    fabric: "פשתן",
    name: "מפה 2.20/2.20 פשתן מוקה",
    img: "catalog_pics/mapot/2.2/pishtan/13_moca_pishtan.webp",
  },
  {
    id: "map22p_14",
    sku: "14",
    category: "maps",
    sub: "2.20/2.20",
    fabric: "פשתן",
    name: "מפה 2.20/2.20 פשתן ורדרד",
    img: "catalog_pics/mapot/2.2/pishtan/14_pinky_pishtan.webp",
  },
  {
    id: "map22p_15",
    sku: "15",
    category: "maps",
    sub: "2.20/2.20",
    fabric: "פשתן",
    name: "מפה 2.20/2.20 פשתן כחלחל אפרפר",
    img: "catalog_pics/mapot/2.2/pishtan/15_blue_gray_pishtan.webp",
  },
  {
    id: "map22p_16",
    sku: "16",
    category: "maps",
    sub: "2.20/2.20",
    fabric: "פשתן",
    name: "מפה 2.20/2.20 פשתן סגלגל",
    img: "catalog_pics/mapot/2.2/pishtan/16_purply_pishtan.jpeg",
  },
  {
    id: "map22p_17",
    sku: "17",
    category: "maps",
    sub: "2.20/2.20",
    fabric: "פשתן",
    name: "מפה 2.20/2.20 פשתן שחרחר",
    img: "catalog_pics/mapot/2.2/pishtan/17_blacky_pishtan.webp",
  },
  {
    id: "map22p_18",
    sku: "18",
    category: "maps",
    sub: "2.20/2.20",
    fabric: "פשתן",
    name: "מפה 2.20/2.20 פשתן פודרה",
    img: "catalog_pics/mapot/2.2/pishtan/18_pudra_pishtan.webp",
  },
  {
    id: "map22p_19",
    sku: "19",
    category: "maps",
    sub: "2.20/2.20",
    fabric: "פשתן",
    name: "מפה 2.20/2.20 פשתן קרם",
    img: "catalog_pics/mapot/2.2/pishtan/19_cream_pishtan.webp",
  },
  {
    id: "map22p_20",
    sku: "20",
    category: "maps",
    sub: "2.20/2.20",
    fabric: "פשתן",
    name: "מפה 2.20/2.20 פשתן שחור",
    img: "catalog_pics/mapot/2.2/pishtan/20_dark_black_pishtan.webp",
  },

  {
    id: "map25p_21",
    sku: "21",
    category: "maps",
    sub: "2.50/2.50",
    fabric: "פשתן",
    name: "מפה 2.50/2.50 פשתן קרם",
    img: "catalog_pics/mapot/2.5/pishtan/21_cream_pishtan.webp",
  },
  {
    id: "map25p_22",
    sku: "22",
    category: "maps",
    sub: "2.50/2.50",
    fabric: "פשתן",
    name: "מפה 2.50/2.50 פשתן ג׳ינס",
    img: "catalog_pics/mapot/2.5/pishtan/22_jeans_pishtan.webp",
  },
  {
    id: "map25p_23",
    sku: "23",
    category: "maps",
    sub: "2.50/2.50",
    fabric: "פשתן",
    name: "מפה 2.50/2.50 פשתן ורוד עתיק",
    img: "catalog_pics/mapot/2.5/pishtan/23_pink_atik_pishtan.webp",
  },
  {
    id: "map25p_24",
    sku: "24",
    category: "maps",
    sub: "2.50/2.50",
    fabric: "פשתן",
    name: "מפה 2.50/2.50 פשתן מנטה כחול",
    img: "catalog_pics/mapot/2.5/pishtan/24_menta_blue_pishtan.webp",
  },
  {
    id: "map25p_25",
    sku: "25",
    category: "maps",
    sub: "2.50/2.50",
    fabric: "פשתן",
    name: "מפה 2.50/2.50 פשתן קפה",
    img: "catalog_pics/mapot/2.5/pishtan/25_coffie_pishtan.webp",
  },
  {
    id: "map25p_26",
    sku: "26",
    category: "maps",
    sub: "2.50/2.50",
    fabric: "פשתן",
    name: "מפה 2.50/2.50 פשתן תכלת",
    img: "catalog_pics/mapot/2.5/pishtan/26_tchelet_pishtan.webp",
  },
  {
    id: "map25p_27",
    sku: "27",
    category: "maps",
    sub: "2.50/2.50",
    fabric: "פשתן",
    name: "מפה 2.50/2.50 פשתן מנטה פיסטוק",
    img: "catalog_pics/mapot/2.5/pishtan/27_fistuck_menta_pishtan.webp",
  },
  {
    id: "map25p_28",
    sku: "28",
    category: "maps",
    sub: "2.50/2.50",
    fabric: "פשתן",
    name: "מפה 2.50/2.50 פשתן אבן",
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
  renderCatalog();
  renderGallery();
  setupEventListeners();
  $("year").textContent = new Date().getFullYear();

  const eventDateInput = $("eventDate");
  if (eventDateInput) {
    eventDateInput.min = new Date().toISOString().split("T")[0];
  }

  const guestCountInput = $("guestCount");
  if (guestCountInput) {
    guestCountInput.setAttribute("min", "1");
  }

  initGSAP();
});

function initGSAP() {
  if (typeof gsap === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (!prefersReducedMotion) {
    gsap.fromTo(
      ".hero-title, .hero-subtitle-large, .hero-desc, .hero-buttons",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      },
    );

    gsap.fromTo(
      ".steps-grid li",
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#how",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.2)",
      },
    );

    gsap.fromTo(
      ".pricing-card",
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#pricing",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      ".gallery-grid img",
      { scale: 0.85, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#gallery",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      },
    );
  }

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
    if (state.picked.size === 0) {
      alert("אנא בחר לפחות מוצר אחד לפני המשך");
      return;
    }
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
      if (typeof gsap !== "undefined") {
        gsap.to(mobileNav, {
          y: -10,
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            mobileNav.classList.remove("show");
            hamburger.classList.remove("open");
          },
        });
      } else {
        mobileNav.classList.remove("show");
        hamburger.classList.remove("open");
      }
    } else {
      mobileNav.classList.add("show");
      hamburger.classList.add("open");
      if (typeof gsap !== "undefined") {
        gsap.fromTo(
          mobileNav,
          { y: -10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3 },
        );
      }
    }
  });

  $("productTogglePick").addEventListener("click", () => {
    togglePick($("productModal").dataset.activeId);
    closeModal("product");
  });

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

function navigateCatalog() {
  const currentItems = $$(".catalog-grid .catalog-item");

  if (!currentItems.length || typeof gsap === "undefined") {
    renderCatalog(true);
    return;
  }

  gsap.to(currentItems, {
    opacity: 0,
    y: 30,
    duration: 0.2,
    stagger: 0.03,
    ease: "power2.in",
    onComplete: () => {
      renderCatalog(true);
    },
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
          <img src="${item.img}" alt="${item.name}" onerror="this.src='${fallbackImg}'" loading="lazy">
        </div>
        <div class="ci-details">
          <div class="ci-name">${item.name}</div>
          ${item.sku ? `<div class="ci-sku">מק"ט: ${item.sku}</div>` : ""}
          <button class="ci-btn" onclick="togglePick('${item.id}')">${isPicked ? "✓ נבחר" : "+ הוספה"}</button>
        </div>
      </div>`;
    })
    .join("");

  if (animate && typeof gsap !== "undefined") {
    gsap.fromTo(
      "#catalogGrid .catalog-item",
      { opacity: 0, y: -40 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "back.out(1.2)" },
    );
  }
}

window.setCategory = (cat) => {
  state.category = cat;
  state.subFilter = "all";

  $$("#filters .filter-pill").forEach((p) => p.classList.remove("active"));
  const activeBtn = Array.from($$("#filters .filter-pill")).find((p) =>
    p.getAttribute("onclick").includes(`'${cat}'`),
  );
  if (activeBtn) activeBtn.classList.add("active");

  renderSubFilters();
  navigateCatalog();
};

window.setSubFilter = (sub) => {
  state.subFilter = sub;
  renderSubFilters();
  navigateCatalog();
};

window.togglePick = (id) => {
  state.picked.has(id) ? state.picked.delete(id) : state.picked.add(id);
  const isPicked = state.picked.has(id);

  const itemEl = document.getElementById(`item-${id}`);
  if (itemEl) {
    const btn = itemEl.querySelector(".ci-btn");
    if (isPicked) {
      itemEl.classList.add("picked");
      if (btn) btn.textContent = "✓ נבחר";
    } else {
      itemEl.classList.remove("picked");
      if (btn) btn.textContent = "+ הוספה";
    }
  }

  $("pickedCount").textContent = state.picked.size;
  updateWaPreview();
};

function updateUI() {
  $("pickedCount").textContent = state.picked.size;
  renderCatalog(false);
  updateWaPreview();
}

window.openProduct = (id) => {
  const item = catalogItems.find((i) => i.id === id);
  if (!item) return;
  $("productModalImg").src = item.img;
  $("productModalImg").alt = item.name;
  $("productModalName").textContent = item.name;
  $("productModalNote").textContent = item.note || "";
  $("productModalChips").innerHTML = "";

  const btn = $("productTogglePick");
  btn.style.display = "block";
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

function navigateGallery(dir) {
  const currentImages = $$(".gallery-grid img");

  if (typeof gsap !== "undefined") {
    gsap.to(currentImages, {
      opacity: 0,
      x: dir > 0 ? -40 : 40,
      scale: 0.9,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        state.galleryPage += dir;
        renderGallery();
      },
    });
  } else {
    state.galleryPage += dir;
    renderGallery();
  }
}

window.openGalleryLightbox = (src) => {
  $("productModalImg").src = src;
  $("productModalImg").alt = "גלריה - תמונה";
  $("productModalName").textContent = "תמונה מגלריה";
  $("productModalNote").textContent = "";
  $("productModalChips").innerHTML = "";
  $("productTogglePick").style.display = "none";
  openModal("product");
};

function renderGallery() {
  const grid = $("galleryGrid");
  const start = state.galleryPage * IMAGES_PER_PAGE;
  const pageItems = galleryImages.slice(start, start + IMAGES_PER_PAGE);
  grid.innerHTML = pageItems
    .map(
      (src) =>
        `<img src="${src}" onclick="openGalleryLightbox('${src}')" alt="גלריה" style="cursor: zoom-in;">`,
    )
    .join("");
  $("galleryPrev").disabled = state.galleryPage === 0;
  $("galleryNext").disabled =
    (state.galleryPage + 1) * IMAGES_PER_PAGE >= galleryImages.length;
  renderGalleryDots();

  if (typeof gsap !== "undefined") {
    gsap.fromTo(
      "#galleryGrid img",
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      },
    );
  }
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
  const dir = i > state.galleryPage ? 1 : -1;
  state.galleryPage = i;
  navigateGallery(dir);
};

function updateWaPreview() {
  const nameInput = $("leadName").value.trim();
  const dateInput = $("eventDate").value;
  const countInput = $("guestCount").value.trim();
  const addressInput = $("eventAddress").value.trim();
  const needsDelivery = $("needDelivery").checked;

  let text = `היי, קוראים לי ${nameInput}\n`;
  text += `אני מאשר/ת את תנאי השכרת הציוד המפורט באתר\n`;

  let formattedDate = "";
  if (dateInput) {
    const [y, m, d] = dateInput.split("-");
    formattedDate = `${d}/${m}/${y}`;
  }
  text += `אשמח להצעת מחיר לאירוע שלי שמתקיים בתאריך ${formattedDate}\n`;

  let deliveryText = needsDelivery
    ? " (אני רוצה לקבל הצעת מחיר להובלת הכלים)"
    : "";
  text += `האירוע נמצא ב${addressInput}${deliveryText}.\n`;

  text += `באירוע יהיה כ${countInput} אורחים.\n\n`;

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
  // הוסר כדי למנוע קפיצה
  // document.body.style.position = "fixed";
  // document.body.style.width = "100%";

  const target =
    modal.querySelector(".modal-card") || modal.querySelector(".modal-panel");
  const backdrop = modal.querySelector(".modal-backdrop");

  if (backdrop && typeof gsap !== "undefined") {
    gsap.fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.3 });
  }

  if (target && typeof gsap !== "undefined") {
    gsap.fromTo(
      target,
      { scale: 0.8, opacity: 0, y: 30 },
      { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.5)" },
    );
  }
}

function closeModal(name) {
  const modal = modals[name];
  if (!modal) return;
  const target =
    modal.querySelector(".modal-card") || modal.querySelector(".modal-panel");
  const backdrop = modal.querySelector(".modal-backdrop");

  if (typeof gsap !== "undefined") {
    gsap.to(target, { scale: 0.9, opacity: 0, y: 20, duration: 0.2 });
    gsap.to(backdrop, {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        modal.setAttribute("aria-hidden", "true");
        if (
          !Object.values(modals).some(
            (m) => m && m.getAttribute("aria-hidden") === "false",
          )
        ) {
          document.body.style.overflow = "";
        }
      },
    });
  } else {
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}

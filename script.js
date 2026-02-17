/* ================= הגדרות בסיס ================= */
const BASE_PATH = "catalog_pics";

/* ================= רשימת המוצרים המלאה ================= */
let catalogItems = [
  // ============================================
  // 🍽️ חלק 1: כלים
  // ============================================
  {
    id: "plate_besari",
    name: "צלחת בשרית",
    category: "tools",
    sub: "צלחות",
    img: "catalog_pics/kelim/plates_besari_malben.jpeg",
  },
  {
    id: "plate_besari_agol",
    name: "צלחת בשרית עגולה",
    category: "tools",
    sub: "צלחות",
    img: "catalog_pics/kelim/plates_besari_agol.jpeg",
  },
  {
    id: "plate_halavi",
    name: "צלחת חלבית",
    category: "tools",
    sub: "צלחות",
    img: "catalog_pics/kelim/plates_halavi.jpeg",
  },
  {
    id: "sakum_set_besari",
    name: "סט סכו״ם בשרי",
    category: "tools",
    sub: "סכו״ם",
    img: "catalog_pics/kelim/sakum_besari.jpeg",
  },
  {
    id: "sakum_set_halavi",
    name: "סט סכו״ם חלבי",
    category: "tools",
    sub: "סכו״ם",
    img: "catalog_pics/kelim/sakum_halavi.jpeg",
  },
  {
    id: "types_of glasses",
    name: "סוגי כוסות",
    category: "tools",
    sub: "כוסות",
    img: "catalog_pics/kelim/glasses_types.jpeg",
  },
  {
    id: "salateria_besari",
    name: "סלטיה בשרית",
    category: "tools",
    sub: "כלים",
    img: "catalog_pics/kelim/salateria_besari.jpeg",
  },

  // ============================================
  // 🪑 חלק 2: ציוד וריהוט
  // ============================================
  {
    id: "shpindagesh",
    name: "שפינגדיש (הגשה)",
    category: "tools",
    sub: "הגשה",
    img: "catalog_pics/kelim/serving_traces.jpeg",
  },
  {
    id: "marakia",
    name: "מרקיה",
    category: "tools",
    sub: "ריהוט",
    img: "catalog_pics/kelim/marakia.jpeg",
  },
  {
    id: "led_candle",
    name: "נר לד לאווירה",
    category: "others",
    sub: "עיצוב",
    img: "",
  },
  {
    id: "chair",
    name: "כיסא כתר לבן",
    category: "others",
    sub: "ריהוט",
    img: "",
  },
  {
    id: "table",
    name: "שולחן עגול 1.60",
    category: "others",
    sub: "ריהוט",
    img: "",
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
    img: "catalog_pics/mapiyot/saten/01_shiny_gold_saten.jpeg",
  },
  {
    id: "napkin_02",
    sku: "02",
    category: "napkins",
    sub: "סאטן",
    name: "מפית סאטן זהב מט",
    img: "catalog_pics/mapiyot/saten/02_mat_gold_saten.jpeg",
  },
  {
    id: "napkin_03",
    sku: "03",
    category: "napkins",
    sub: "סאטן",
    name: "מפית סאטן שחור",
    img: "catalog_pics/mapiyot/saten/03_black_saten.jpeg",
  },
  {
    id: "napkin_04",
    sku: "04",
    category: "napkins",
    sub: "סאטן",
    name: "מפית סאטן כחול נייבי",
    img: "catalog_pics/mapiyot/saten/04_naivy_blue_saten.jpeg",
  },
  {
    id: "napkin_05",
    sku: "05",
    category: "napkins",
    sub: "סאטן",
    name: "מפית סאטן טורקיז",
    img: "catalog_pics/mapiyot/saten/05_turkiz_saten.jpeg",
  },
  {
    id: "napkin_06",
    sku: "06",
    category: "napkins",
    sub: "סאטן",
    name: "מפית סאטן תכלת",
    img: "catalog_pics/mapiyot/saten/06_tchelet_saten.jpeg",
  },
  {
    id: "napkin_07",
    sku: "07",
    category: "napkins",
    sub: "סאטן",
    name: "מפית סאטן לילך",
    img: "catalog_pics/mapiyot/saten/07_lilach_saten.jpeg",
  },
  {
    id: "napkin_08",
    sku: "08",
    category: "napkins",
    sub: "סאטן",
    name: "מפית סאטן סגול",
    img: "catalog_pics/mapiyot/saten/08_purple_saten.jpeg",
  },
  {
    id: "napkin_09",
    sku: "09",
    category: "napkins",
    sub: "סאטן",
    name: "מפית סאטן ורוד בייבי",
    img: "catalog_pics/mapiyot/saten/09_baby_pink_saten.jpeg",
  },
  {
    id: "napkin_10",
    sku: "10",
    category: "napkins",
    sub: "סאטן",
    name: "מפית סאטן ורוד פוקסיה",
    img: "catalog_pics/mapiyot/saten/10_fuksia_pink_saten.jpeg",
  },
  {
    id: "napkin_11",
    sku: "11",
    category: "napkins",
    sub: "סאטן",
    name: "מפית סאטן בורדו",
    img: "catalog_pics/mapiyot/saten/11_bordo_saten.jpeg",
  },
  {
    id: "napkin_12",
    sku: "12",
    category: "napkins",
    sub: "סאטן",
    name: "מפית סאטן לבן",
    img: "catalog_pics/mapiyot/saten/12_white_saten.jpeg",
  },
  {
    id: "napkin_13",
    sku: "13",
    category: "napkins",
    sub: "סאטן",
    name: "מפית סאטן קרם",
    img: "catalog_pics/mapiyot/saten/13_cream_saten.jpeg",
  },
  {
    id: "napkin_14",
    sku: "14",
    category: "napkins",
    sub: "סאטן",
    name: "מפית סאטן ירוק תפוח",
    img: "catalog_pics/mapiyot/saten/14_apple_green_saten.jpeg",
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
    img: "catalog_pics/mapiyot/pishtan/15_blacky_pishtan.jpeg",
  },
  {
    id: "napkin_16",
    sku: "16",
    category: "napkins",
    sub: "פשתן",
    name: "מפית פשתן ירוק תפוח",
    img: "catalog_pics/mapiyot/pishtan/16_apple_green_pishtan.jpeg",
  },
  {
    id: "napkin_17",
    sku: "17",
    category: "napkins",
    sub: "פשתן",
    name: "מפית פשתן מוקה",
    img: "catalog_pics/mapiyot/pishtan/17_moca_pishtan.jpeg",
  },
  {
    id: "napkin_18",
    sku: "18",
    category: "napkins",
    sub: "פשתן",
    name: "מפית פשתן כחלחל",
    img: "catalog_pics/mapiyot/pishtan/18_bluy_pishtan.jpeg",
  },
  {
    id: "napkin_19",
    sku: "19",
    category: "napkins",
    sub: "פשתן",
    name: "מפית פשתן אפור",
    img: "catalog_pics/mapiyot/pishtan/19_gray_pishtan.jpeg",
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
    img: "catalog_pics/mapiyot/pishtan/21_pinky_pishtan.jpeg",
  },
  {
    id: "napkin_22",
    sku: "22",
    category: "napkins",
    sub: "פשתן",
    name: "מפית פשתן ג׳ינס",
    img: "catalog_pics/mapiyot/pishtan/22_jeans_pishtan.jpeg",
  },
  {
    id: "napkin_23",
    sku: "23",
    category: "napkins",
    sub: "פשתן",
    name: "מפית פשתן ורוד עתיק",
    img: "catalog_pics/mapiyot/pishtan/23_pink_atik_pishtan.jpeg",
  },
  {
    id: "napkin_24",
    sku: "24",
    category: "napkins",
    sub: "פשתן",
    name: "מפית פשתן מנטה כחול",
    img: "catalog_pics/mapiyot/pishtan/24_menta_blue_pishtan.jpeg",
  },
  {
    id: "napkin_25",
    sku: "25",
    category: "napkins",
    sub: "פשתן",
    name: "מפית פשתן קרם",
    img: "catalog_pics/mapiyot/pishtan/25_cream_pishtan.jpeg",
  },
  {
    id: "napkin_26",
    sku: "26",
    category: "napkins",
    sub: "פשתן",
    name: "מפית פשתן קפה",
    img: "catalog_pics/mapiyot/pishtan/26_coffie_pishtan.jpeg",
  },
  {
    id: "napkin_27",
    sku: "27",
    category: "napkins",
    sub: "פשתן",
    name: "מפית פשתן תכלת",
    img: "catalog_pics/mapiyot/pishtan/27_tchelet_pishtan.jpeg",
  },
  {
    id: "napkin_28",
    sku: "28",
    category: "napkins",
    sub: "פשתן",
    name: "מפית פשתן מנטה פיסטוק",
    img: "catalog_pics/mapiyot/pishtan/28_menta_phistuk.jpeg",
  },
  {
    id: "napkin_29",
    sku: "29",
    category: "napkins",
    sub: "פשתן",
    name: "מפית פשתן אבן",
    img: "catalog_pics/mapiyot/pishtan/29_even_pishtan.jpeg",
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
    img: "catalog_pics/mapot/2.2/saten/01_white_meutar_saten.jpeg",
  },
  {
    id: "map22s_02",
    sku: "02",
    category: "maps",
    sub: "2.20",
    fabric: "סאטן",
    name: "מפה 2.20 סאטן אפור מעוטר",
    img: "catalog_pics/mapot/2.2/saten/02_gray_meutar_saten.jpeg",
  },
  {
    id: "map22s_03",
    sku: "03",
    category: "maps",
    sub: "2.20",
    fabric: "סאטן",
    name: "מפה 2.20 סאטן ירוק מעוטר",
    img: "catalog_pics/mapot/2.2/saten/03_green_meutar_saten.jpeg",
  },
  {
    id: "map22s_04",
    sku: "04",
    category: "maps",
    sub: "2.20",
    fabric: "סאטן",
    name: "מפה 2.20 סאטן שמנת מעוטר",
    img: "catalog_pics/mapot/2.2/saten/04_cream_meutar_saten.jpeg",
  },
  {
    id: "map22s_05",
    sku: "05",
    category: "maps",
    sub: "2.20",
    fabric: "סאטן",
    name: "מפה 2.20 סאטן בורדו",
    img: "catalog_pics/mapot/2.2/saten/05_bordo_saten.jpeg",
  },
  {
    id: "map22s_06",
    sku: "06",
    category: "maps",
    sub: "2.20",
    fabric: "סאטן",
    name: "מפה 2.20 סאטן סגול",
    img: "catalog_pics/mapot/2.2/saten/06_purple_saten.jpeg",
  },
  {
    id: "map22s_07",
    sku: "07",
    category: "maps",
    sub: "2.20",
    fabric: "סאטן",
    name: "מפה 2.20 סאטן ורוד פוקסיה",
    img: "catalog_pics/mapot/2.2/saten/07_fuksia_pink_saten.jpeg",
  },
  {
    id: "map22s_08",
    sku: "08",
    category: "maps",
    sub: "2.20",
    fabric: "סאטן",
    name: "מפה 2.20 סאטן כחול נייבי",
    img: "catalog_pics/mapot/2.2/saten/08_naevi_blue_saten.jpeg",
  },
  {
    id: "map22s_09",
    sku: "09",
    category: "maps",
    sub: "2.20",
    fabric: "סאטן",
    name: "מפה 2.20 סאטן טורקיז",
    img: "catalog_pics/mapot/2.2/saten/09_turkiz_saten.jpeg",
  },
  {
    id: "map22s_10",
    sku: "10",
    category: "maps",
    sub: "2.20",
    fabric: "סאטן",
    name: "מפה 2.20 סאטן ירוק תפוח",
    img: "catalog_pics/mapot/2.2/saten/10_apple_green.jpeg",
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
    img: "catalog_pics/mapot/2.2/pishtan/11_white_pishtan.jpeg",
  },
  {
    id: "map22p_12",
    sku: "12",
    category: "maps",
    sub: "2.20",
    fabric: "פשתן",
    name: "מפה 2.20 פשתן אפור",
    img: "catalog_pics/mapot/2.2/pishtan/12_gray_pishtan.jpeg",
  },
  {
    id: "map22p_13",
    sku: "13",
    category: "maps",
    sub: "2.20",
    fabric: "פשתן",
    name: "מפה 2.20 פשתן מוקה",
    img: "catalog_pics/mapot/2.2/pishtan/13_moca_pishtan.jpeg",
  },
  {
    id: "map22p_14",
    sku: "14",
    category: "maps",
    sub: "2.20",
    fabric: "פשתן",
    name: "מפה 2.20 פשתן ורדרד",
    img: "catalog_pics/mapot/2.2/pishtan/14_pinky_pishtan.jpeg",
  },
  {
    id: "map22p_15",
    sku: "15",
    category: "maps",
    sub: "2.20",
    fabric: "פשתן",
    name: "מפה 2.20 פשתן כחלחל אפרפר",
    img: "catalog_pics/mapot/2.2/pishtan/15_blue_gray_pishtan.jpeg",
  },
  {
    id: "map22p_16",
    sku: "16",
    category: "maps",
    sub: "2.20",
    fabric: "פשתן",
    name: "מפה 2.20 פשתן סגלגל",
    img: "catalog_pics/mapot/2.2/pishtan/16_purply_pishtan.jpeg",
  },
  {
    id: "map22p_17",
    sku: "17",
    category: "maps",
    sub: "2.20",
    fabric: "פשתן",
    name: "מפה 2.20 פשתן שחרחר",
    img: "catalog_pics/mapot/2.2/pishtan/17_blacky_pishtan.jpeg",
  },
  {
    id: "map22p_18",
    sku: "18",
    category: "maps",
    sub: "2.20",
    fabric: "פשתן",
    name: "מפה 2.20 פשתן פודרה",
    img: "catalog_pics/mapot/2.2/pishtan/18_pudra_pishtan.jpeg",
  },
  {
    id: "map22p_19",
    sku: "19",
    category: "maps",
    sub: "2.20",
    fabric: "פשתן",
    name: "מפה 2.20 פשתן קרם",
    img: "catalog_pics/mapot/2.2/pishtan/19_cream_pishtan.jpeg",
  },
  {
    id: "map22p_20",
    sku: "20",
    category: "maps",
    sub: "2.20",
    fabric: "פשתן",
    name: "מפה 2.20 פשתן שחור",
    img: "catalog_pics/mapot/2.2/pishtan/20_dark_black_pishtan.jpeg",
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
    img: "catalog_pics/mapot/2.5/pishtan/21_cream_pishtan.jpeg",
  },
  {
    id: "map25p_22",
    sku: "22",
    category: "maps",
    sub: "2.50",
    fabric: "פשתן",
    name: "מפה 2.50 פשתן ג׳ינס",
    img: "catalog_pics/mapot/2.5/pishtan/22_jeans_pishtan.jpeg",
  },
  {
    id: "map25p_23",
    sku: "23",
    category: "maps",
    sub: "2.50",
    fabric: "פשתן",
    name: "מפה 2.50 פשתן ורוד עתיק",
    img: "catalog_pics/mapot/2.5/pishtan/23_pink_atik_pishtan.jpeg",
  },
  {
    id: "map25p_24",
    sku: "24",
    category: "maps",
    sub: "2.50",
    fabric: "פשתן",
    name: "מפה 2.50 פשתן מנטה כחול",
    img: "catalog_pics/mapot/2.5/pishtan/24_menta_blue_pishtan.jpeg",
  },
  {
    id: "map25p_25",
    sku: "25",
    category: "maps",
    sub: "2.50",
    fabric: "פשתן",
    name: "מפה 2.50 פשתן קפה",
    img: "catalog_pics/mapot/2.5/pishtan/25_coffie_pishtan.jpeg",
  },
  {
    id: "map25p_26",
    sku: "26",
    category: "maps",
    sub: "2.50",
    fabric: "פשתן",
    name: "מפה 2.50 פשתן תכלת",
    img: "catalog_pics/mapot/2.5/pishtan/26_tchelet_pishtan.jpeg",
  },
  {
    id: "map25p_27",
    sku: "27",
    category: "maps",
    sub: "2.50",
    fabric: "פשתן",
    name: "מפה 2.50 פשתן מנטה פיסטוק",
    img: "catalog_pics/mapot/2.5/pishtan/27_fistuck_menta_pishtan.jpeg",
  },
  {
    id: "map25p_28",
    sku: "28",
    category: "maps",
    sub: "2.50",
    fabric: "פשתן",
    name: "מפה 2.50 פשתן אבן",
    img: "catalog_pics/mapot/2.5/pishtan/28_even_pishtan.jpeg",
  },
];

/* ================= לוגיקת האתר ================= */

const state = {
  picked: new Set(),
  category: "tools",
  subFilter: "all",
  search: "",
  galleryPage: 0,
};

const galleryImages = [
  "images/gallery_1.jpeg",
  "images/gallery_2.jpeg",
  "images/gallery_blue.jpeg",
  "images/gallery_blue_green.jpeg",
  "images/gallery_purple.jpeg",
  "images/gallery_silver.jpeg",
  "images/gallery_7.jpeg",
  "images/gallery_8.jpeg",
  "images/gallery_9.jpeg",
  "images/gallery_10.jpeg",
  "images/hero.jpeg",
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
});

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
    $("mobileNav").classList.toggle("show");
    $("hamburger").classList.toggle("open");
  });
  $("productTogglePick").addEventListener("click", () => {
    togglePick($("productModal").dataset.activeId);
    closeModal("product");
  });

  $("galleryPrev").addEventListener("click", () => changeGalleryPage(-1));
  $("galleryNext").addEventListener("click", () => changeGalleryPage(1));

  // === הוספת מאזינים לשדות החדשים (כתובת והובלה) ===
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
}

window.setCategory = (cat) => {
  state.category = cat;
  state.subFilter = "all";
  renderFilters();
  renderCatalog();
};
window.setSubFilter = (sub) => {
  state.subFilter = sub;
  renderSubFilters();
  renderCatalog();
};
window.togglePick = (id) => {
  state.picked.has(id) ? state.picked.delete(id) : state.picked.add(id);
  updateUI();
};

window.openProduct = (id) => {
  const item = catalogItems.find((i) => i.id === id);
  if (!item) return;
  $("productModalImg").src = item.img;
  $("productModalName").textContent = item.name;
  $("productModalNote").textContent = item.note || "";
  $("productModalChips").innerHTML = ""; // נוקה כבקשתך

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
}
function changeGalleryPage(dir) {
  state.galleryPage += dir;
  renderGallery();
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
  state.galleryPage = i;
  renderGallery();
};

function updateUI() {
  $("pickedCount").textContent = state.picked.size;
  renderCatalog();
  updateWaPreview();
}

// === פונקציית עדכון ההודעה - נוסח מדויק ===
function updateWaPreview() {
  // שליפת ערכים ללא ברירת מחדל (אם ריק - יישאר ריק)
  const name = $("leadName").value;

  // המרת תאריך מ-YYYY-MM-DD ל-DD/MM/YYYY לתצוגה יפה יותר
  let date = $("eventDate").value;
  if (date) {
    const [y, m, d] = date.split("-");
    date = `${d}/${m}/${y}`;
  }

  const count = $("guestCount").value;
  const address = $("eventAddress").value;

  // בדיקה אם הצ'קבוקס להובלה מסומן - הוספת רווח לפני הסוגריים
  const deliveryText = $("needDelivery").checked
    ? " (אני רוצה לקבל הצעת מחיר להובלת הכלים)"
    : "";

  // בניית ההודעה שורה אחר שורה לפי הדרישה
  let text = `היי, קוראים לי ${name}\n`;
  text += `אשמח להצעת מחיר לאירוע שלי שמתקיים בתאריך ${date}\n`;
  text += `האירוע נמצא ב${address}${deliveryText}.\n`;
  text += `באירוע יהיה כ${count} אורחים.\n\n`;

  // הוספת פריטים מהקטלוג
  if (state.picked.size > 0) {
    text += `מתוך הקטלוג:\n`;
    state.picked.forEach((id) => {
      const item = catalogItems.find((x) => x.id === id);
      if (item) {
        // הוספת המק"ט רק אם קיים בנתונים
        const skuText = item.sku ? `, מק"ט ${item.sku}` : "";
        text += `- ${item.name}${skuText}\n`;
      }
    });
    text += `\n`; // רווח לפני התודה
  }

  text += `תודה מראש.`;

  // עדכון התצוגה בחלון
  const previewBox = $("messagePreview");
  if (previewBox) previewBox.textContent = text;
}

function sendToWhatsApp() {
  const phone = "972500000000"; // נא לוודא שזה המספר שלך
  const text = $("messagePreview").textContent;
  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
    "_blank",
  );
  closeModal("procedure");
}

function sendToWhatsApp() {
  const phone = "972500000000";
  const text = $("messagePreview").textContent;
  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
    "_blank",
  );
  closeModal("procedure");
}

function openModal(name) {
  modals[name].setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeModal(name) {
  modals[name].setAttribute("aria-hidden", "true");
  if (
    !Object.values(modals).some(
      (m) => m.getAttribute("aria-hidden") === "false",
    )
  )
    document.body.style.overflow = "";
}

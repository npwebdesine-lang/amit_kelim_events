// =========================
// SETTINGS
// =========================
const WHATSAPP_PHONE = "972585055011"; // ללא +

// =========================
// COLOR MAPS (code -> color name)
// =========================
const NAPKIN_COLORS = {
  // Satin 01-14
  "01": "זהב מבריק",
  "02": "זהב מט",
  "03": "שחור",
  "04": "כחול נייבי",
  "05": "טורקיז",
  "06": "תכלת",
  "07": "לילך",
  "08": "סגול",
  "09": "ורוד בייבי",
  10: "ורוד פוקסיה",
  11: "בורדו",
  12: "לבן",
  13: "קרם",
  14: "ירוק תפוח",

  // Linen 15-29
  15: "שחרחר",
  16: "ירוק תפוח",
  17: "מוקה",
  18: "כחלחל",
  19: "אפור",
  20: "לבן",
  21: "ורדרד",
  22: "ג׳ינס",
  23: "ורוד עתיק",
  24: "מנטה כחול",
  25: "קרם",
  26: "קפה",
  27: "תכלת",
  28: "מנטה פיסטוק",
  29: "אבן",
};

const MAP220_SATEN_COLORS = {
  "01": "לבן מעוטר",
  "02": "אפור מעוטר",
  "03": "ירוק מעוטר",
  "04": "שמנת זאקרד",
  "05": "בורדו",
  "06": "סגול",
  "07": "ורוד פוקסיה",
  "08": "כחול נייבי",
  "09": "טורקיז",
  10: "ירוק תפוח",
};

const MAP220_PISHTAN_COLORS = {
  11: "לבן",
  12: "אפור",
  13: "מוקה",
  14: "ורדרד",
  15: "כחלחל אפרפר",
  16: "סגלגל",
  17: "שחרחר",
  18: "פודרה",
  19: "קרם",
  20: "שחור",
};

const MAP250_PISHTAN_COLORS = {
  21: "קרם",
  22: "ג׳ינס",
  23: "ורוד עתיק",
  24: "מנטה כחול",
  25: "קפה",
  26: "תכלת",
  27: "מנטה פיסטוק",
  28: "אבן",
};

// =========================
// HELPERS
// =========================
function escapeHtml(s) {
  return String(s || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function parseLeadingNumber(filename) {
  const m = filename.match(/^(\d{1,3})[_-]/);
  return m ? m[1].padStart(2, "0") : null;
}

function formatDateForMessage(dateInputValue) {
  if (!dateInputValue) return "";
  const [y, m, d] = dateInputValue.split("-");
  if (!y || !m || !d) return dateInputValue;
  return `${d}/${m}/${y}`;
}

// Build a "display name" that includes color based on code map
function buildDisplayName(baseName, code, colorMap) {
  const c = code ? String(code).padStart(2, "0") : null;
  const color = c && colorMap ? colorMap[c] : null;
  return color ? `${baseName} – ${color}` : baseName;
}

// Generic numeric items builder (for coded items)
function makeNumericItems({
  folder,
  files,
  baseName,
  category,
  tag,
  note,
  variant,
  colorMap,
}) {
  return files.map((f) => {
    const code = parseLeadingNumber(f);
    const id = `${category}::${variant || "na"}::${f}`;
    const displayName = buildDisplayName(baseName, code, colorMap);

    return {
      id,
      kind: "coded",
      code: code ? String(code).padStart(2, "0") : null,
      name: displayName, // ✅ includes color
      baseName,
      category,
      variant: variant || null, // ✅ saten / pishtan (for napkins)
      tag,
      img: `${folder}/${f}`,
      note,
    };
  });
}

function makeKelimItem({ name, category, tag, img, note }) {
  return {
    id: `kelim::${img}`,
    kind: "named",
    code: null,
    name,
    category,
    variant: null,
    tag,
    img,
    note,
  };
}

// =========================
// CATALOG DATA
// =========================
const CATALOG = [
  // ===== KELIM =====
  makeKelimItem({
    name: "צלחות (חלבי)",
    category: "plates_halavi",
    tag: "צלחות • חלבי",
    img: "catalog_pics/kelim/plates_halavi.jpeg",
    note: "צלחות איכותיות לאירוח",
  }),
  makeKelimItem({
    name: "צלחות (בשרי) – מלבן",
    category: "plates_besari",
    tag: "צלחות • בשרי",
    img: "catalog_pics/kelim/plates_besari_malben.jpeg",
    note: "סט צלחות בשרי",
  }),
  makeKelimItem({
    name: "צלחות (בשרי) – עגול",
    category: "plates_besari",
    tag: "צלחות • בשרי",
    img: "catalog_pics/kelim/plates_besari_agol.jpeg",
    note: "סט צלחות בשרי (עגול)",
  }),
  makeKelimItem({
    name: "סכו״ם (חלבי)",
    category: "cutlery_halavi",
    tag: "סכו״ם • חלבי",
    img: "catalog_pics/kelim/sakum_halavi.jpeg",
    note: "סכו״ם לאירוח (חלבי)",
  }),
  makeKelimItem({
    name: "סכו״ם (בשרי)",
    category: "cutlery_besari",
    tag: "סכו״ם • בשרי",
    img: "catalog_pics/kelim/sakum_besari.jpeg",
    note: "סכו״ם לאירוח (בשרי)",
  }),
  makeKelimItem({
    name: "סלטריה (בשרי)",
    category: "salaterya_besari",
    tag: "סלטריה",
    img: "catalog_pics/kelim/satateria_besari.jpeg",
    note: "קעריות/סלטריות לשולחן",
  }),
  makeKelimItem({
    name: "פלטות להגשה",
    category: "serving",
    tag: "הגשה",
    img: "catalog_pics/kelim/serving_traces.jpeg",
    note: "פלטות להגשה (דגים/בשרים/תוספות)",
  }),
  makeKelimItem({
    name: "כוסות – סוגים",
    category: "cups",
    tag: "כוסות",
    img: "catalog_pics/kelim/glasses_types.jpeg",
    note: "כוסות לאירוח",
  }),
  makeKelimItem({
    name: "מרקייה (קערת מרק)",
    category: "serving",
    tag: "הגשה",
    img: "catalog_pics/kelim/marakia.jpeg",
    note: "קערת מרק למרכז שולחן",
  }),

  // ===== MAPOT 2.20 SATEN (01-10) =====
  ...makeNumericItems({
    folder: "catalog_pics/mapot/2.2/saten",
    files: [
      "01_white_meutar_saten.jpeg",
      "02_gray_meutar_saten.jpeg",
      "03_green_meutar_saten.jpeg",
      "04_cream_meutar_saten.jpeg",
      "05_bordo_saten.jpeg",
      "06_purple_saten.jpeg",
      "07_fuksia_pink_saten.jpeg",
      "08_naevi_blue_saten.jpeg",
      "09_turkiz_saten.jpeg",
      "10_apple_green.jpeg",
    ],
    baseName: "מפה 2.20 (סאטן)",
    category: "mapot_220",
    tag: "מפות 2.20",
    note: "מפה נקייה ומגוהצת",
    variant: "saten",
    colorMap: MAP220_SATEN_COLORS,
  }),

  // ===== MAPOT 2.20 PISHTAN (11-20) =====
  ...makeNumericItems({
    folder: "catalog_pics/mapot/2.2/pishtan",
    files: [
      "11_white_pishtan.jpeg",
      "12_gray_pishtan.jpeg",
      "13_moca_pishtan.jpeg",
      "14_pinky_pishtan.jpeg",
      "15_blue_gray_pishtan.jpeg",
      "16_purply_pishtan.jpeg",
      "17_blacky_pishtan.jpeg",
      "18_pudra_pishtan.jpeg",
      "19_cream_pishtan.jpeg",
      "20_dark_black_pishtan.jpeg",
    ],
    baseName: "מפה 2.20 (פשתן)",
    category: "mapot_220",
    tag: "מפות 2.20",
    note: "מפה נקייה ומגוהצת",
    variant: "pishtan",
    colorMap: MAP220_PISHTAN_COLORS,
  }),

  // ===== MAPOT 2.50 PISHTAN (21-28) =====
  ...makeNumericItems({
    folder: "catalog_pics/mapot/2.5/pishtan",
    files: [
      "21_cream_pishtan.jpeg",
      "22_jeans_pishtan.jpeg",
      "23_pink_atik_pishtan.jpeg",
      "24_menta_blue_pishtan.jpeg",
      "25_coffie_pishtan.jpeg",
      "26_tchelet_pishtan.jpeg",
      "27_fistuck_menta_pishtan.jpeg",
      "28_even_pishtan.jpeg",
    ],
    baseName: "מפה 2.50 (פשתן)",
    category: "mapot_250",
    tag: "מפות 2.50",
    note: "מפה נקייה ומגוהצת",
    variant: "pishtan",
    colorMap: MAP250_PISHTAN_COLORS,
  }),

  // ===== NAPKINS SATEN (01-14) =====
  ...makeNumericItems({
    folder: "catalog_pics/mapiyot/saten",
    files: [
      "01_shiny_gold_saten.jpeg",
      "02_mat_gold_saten.jpeg",
      "03_black_saten.jpeg",
      "04_naivy_blue_saten.jpeg",
      "05_turkiz_saten.jpeg",
      "06_tchelet_saten.jpeg",
      "07_lilach_saten.jpeg",
      "08_purple_saten.jpeg",
      "09_baby_pink_saten.jpeg",
      "10_fuksia_pink_saten.jpeg",
      "11_bordo_saten.jpeg",
      "12_white_saten.jpeg",
      "13_cream_saten.jpeg",
      "14_apple_green_saten.jpeg",
    ],
    baseName: "מפית (סאטן)",
    category: "mapiyot",
    tag: "מפיות",
    note: "מפית צבעונית לשולחן",
    variant: "saten",
    colorMap: NAPKIN_COLORS,
  }),

  // ===== NAPKINS PISHTAN (15-29) =====
  ...makeNumericItems({
    folder: "catalog_pics/mapiyot/pishtan",
    files: [
      "15_blacky_pishtan.jpeg",
      "16_apple_green_pishtan.jpeg",
      "17_moca_pishtan.jpeg",
      "18_bluy_pishtan.jpeg",
      "19_gray_pishtan.jpeg",
      "20_white_pishtan.jpeg",
      "21_pinky_pishtan.jpeg",
      "22_jeans_pishtan.jpeg",
      "23_pink_atik_pishtan.jpeg",
      "24_menta_blue_pishtan.jpeg",
      "25_cream_pishtan.jpeg",
      "26_coffie_pishtan.jpeg",
      "27_tchelet_pishtan.jpeg",
      "28_menta_phistuk.jpeg",
      "29_even_pishtan.jpeg",
    ],
    baseName: "מפית (פשתן)",
    category: "mapiyot",
    tag: "מפיות",
    note: "מפית צבעונית לשולחן",
    variant: "pishtan",
    colorMap: NAPKIN_COLORS,
  }),
];

// =========================
// FILTERS (keep, but horizontal scroll makes it clean)
// =========================
const FILTERS = [
  { key: "all", label: "הכל" },
  { key: "plates_halavi", label: "צלחות חלבי" },
  { key: "plates_besari", label: "צלחות בשרי" },
  { key: "cutlery_halavi", label: "סכו״ם חלבי" },
  { key: "cutlery_besari", label: "סכו״ם בשרי" },
  { key: "cups", label: "כוסות" },
  { key: "salaterya_besari", label: "סלטריה" },
  { key: "serving", label: "הגשה" },
  { key: "mapot_220", label: "מפות 2.20" },
  { key: "mapot_250", label: "מפות 2.50" },
  { key: "mapiyot", label: "מפיות" },
];

const NAPKIN_SUBFILTERS = [
  { key: "all", label: "כל המפיות" },
  { key: "saten", label: "מפיות סאטן" },
  { key: "pishtan", label: "מפיות פשתן" },
];

// =========================
// STATE
// =========================
let activeFilter = "all";
let activeSubFilter = "all"; // only applies when mapiyot
const picked = new Set();
let includeCatalogItemsInMessage = true;

// =========================
// MODALS CORE
// =========================
function openModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.add("is-open");
  modalEl.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.remove("is-open");
  modalEl.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    const t = e.target;
    if (t && t.dataset && t.dataset.close === "true") closeModal(modal);
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal(document.getElementById("catalogModal"));
    closeModal(document.getElementById("waModal"));
    closeModal(document.getElementById("procedureModal"));
  }
});

// =========================
// MOBILE MENU
// =========================
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");
hamburger?.addEventListener("click", () => {
  const isOpen = mobileNav?.classList.toggle("is-open");
  hamburger.setAttribute("aria-expanded", String(!!isOpen));
  mobileNav?.setAttribute("aria-hidden", String(!isOpen));
});
mobileNav?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    mobileNav.classList.remove("is-open");
    hamburger?.setAttribute("aria-expanded", "false");
    mobileNav?.setAttribute("aria-hidden", "true");
  });
});

// =========================
// CATALOG MODAL OPENERS
// =========================
const catalogModal = document.getElementById("catalogModal");
document
  .getElementById("openCatalogBtn")
  ?.addEventListener("click", () => openCatalog());
document
  .getElementById("openCatalogBtnMobile")
  ?.addEventListener("click", () => openCatalog());
document
  .getElementById("openCatalogHero")
  ?.addEventListener("click", () => openCatalog());
document
  .getElementById("openCatalogFromHow")
  ?.addEventListener("click", () => openCatalog());
document
  .getElementById("openCatalogFooter")
  ?.addEventListener("click", () => openCatalog());
document
  .getElementById("closeCatalog")
  ?.addEventListener("click", () => closeModal(catalogModal));

function openCatalog() {
  openModal(catalogModal);
  renderFilters();
  renderSubfilters();
  renderCatalog();
  applyCatalogFilters();
  refreshPickedUI();
}

// =========================
// FILTERS RENDER
// =========================
const filtersEl = document.getElementById("filters");
const subfiltersEl = document.getElementById("subfilters");

function renderFilters() {
  if (!filtersEl) return;
  filtersEl.innerHTML = FILTERS.map((f) => {
    const cls = f.key === activeFilter ? "pill is-active" : "pill";
    return `<button class="${cls}" data-filter="${f.key}" type="button">${f.label}</button>`;
  }).join("");

  filtersEl.querySelectorAll("[data-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter || "all";

      // Reset subfilter when leaving napkins
      if (activeFilter !== "mapiyot") activeSubFilter = "all";

      renderFilters();
      renderSubfilters();
      applyCatalogFilters();
    });
  });
}

function renderSubfilters() {
  if (!subfiltersEl) return;

  // show only for napkins
  if (activeFilter !== "mapiyot") {
    subfiltersEl.innerHTML = "";
    subfiltersEl.style.display = "none";
    return;
  }

  subfiltersEl.style.display = "flex";
  subfiltersEl.innerHTML = NAPKIN_SUBFILTERS.map((sf) => {
    const cls = sf.key === activeSubFilter ? "pill is-active" : "pill";
    return `<button class="${cls}" data-subfilter="${sf.key}" type="button">${sf.label}</button>`;
  }).join("");

  subfiltersEl.querySelectorAll("[data-subfilter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeSubFilter = btn.dataset.subfilter || "all";
      renderSubfilters();
      applyCatalogFilters();
    });
  });
}

// =========================
// CATALOG RENDER
// =========================
const catalogGrid = document.getElementById("catalogGrid");
const searchInput = document.getElementById("catalogSearch");

function renderCatalog() {
  if (!catalogGrid) return;

  catalogGrid.innerHTML = CATALOG.map((p) => {
    const isPicked = picked.has(p.id);
    const pickBtnClass = isPicked
      ? "btn pick-btn is-picked"
      : "btn btn-soft pick-btn";
    const pickText = isPicked ? "נבחר ✓" : "בחרתי";

    const codeChip = p.code
      ? `<span class="code">מק״ט: ${escapeHtml(p.code)}</span>`
      : "";

    return `
      <article class="product"
        data-id="${escapeHtml(p.id)}"
        data-category="${escapeHtml(p.category)}"
        data-variant="${escapeHtml(p.variant || "")}"
        data-name="${escapeHtml(p.name)}"
        data-code="${escapeHtml(p.code || "")}"
      >
        <div class="product-img-wrap">
          <img class="product-img" src="${p.img}" alt="${escapeHtml(p.name)}" loading="lazy"
               onerror="this.style.opacity=.2; this.alt='(תמונה חסרה)';" />
        </div>

        <div class="product-body">
          <div class="product-top">
            <span class="tag">${escapeHtml(p.tag)}</span>
            ${codeChip}
          </div>
          <h3>${escapeHtml(p.name)}</h3>
          <p>${escapeHtml(p.note || "")}</p>
        </div>

        <div class="product-foot">
          <button class="${pickBtnClass}" type="button" data-action="toggle-pick">
            ${pickText}
          </button>
        </div>
      </article>
    `;
  }).join("");

  // avoid multiple listeners
  catalogGrid.replaceWith(catalogGrid.cloneNode(true));
  const freshGrid = document.getElementById("catalogGrid");
  freshGrid.addEventListener("click", onCatalogClick);
}

function onCatalogClick(e) {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;

  if (btn.dataset.action === "toggle-pick") {
    const card = btn.closest(".product");
    const id = card?.dataset.id;
    if (!id) return;

    if (picked.has(id)) picked.delete(id);
    else picked.add(id);

    updateCardPickedState(btn, picked.has(id));
    refreshPickedUI();
    syncPreview();
  }
}

function updateCardPickedState(btn, isPicked) {
  btn.className = isPicked ? "btn pick-btn is-picked" : "btn btn-soft pick-btn";
  btn.textContent = isPicked ? "נבחר ✓" : "בחרתי";
}

function applyCatalogFilters() {
  const grid = document.getElementById("catalogGrid");
  const cards = grid?.querySelectorAll(".product") || [];
  const q = (searchInput?.value || "").trim().toLowerCase();

  cards.forEach((card) => {
    const cat = card.dataset.category || "";
    const variant = (card.dataset.variant || "").toLowerCase();
    const name = (card.dataset.name || "").toLowerCase();
    const code = (card.dataset.code || "").toLowerCase();

    const matchFilter = activeFilter === "all" ? true : cat === activeFilter;

    // Subfilter only for napkins
    const matchSub =
      activeFilter !== "mapiyot"
        ? true
        : activeSubFilter === "all"
          ? true
          : variant === activeSubFilter;

    const matchSearch = !q
      ? true
      : name.includes(q) || (code && code.includes(q));

    card.style.display = matchFilter && matchSub && matchSearch ? "" : "none";
  });
}

searchInput?.addEventListener("input", applyCatalogFilters);

// =========================
// PICKED UI + ACTIONS
// =========================
const pickedCountEl = document.getElementById("pickedCount");
function refreshPickedUI() {
  if (pickedCountEl) pickedCountEl.textContent = String(picked.size);
}

document.getElementById("clearPicks")?.addEventListener("click", () => {
  picked.clear();
  refreshPickedUI();
  renderCatalog();
  applyCatalogFilters();
  syncPreview();
});

document
  .getElementById("goToOrderFromCatalog")
  ?.addEventListener("click", () => {
    includeCatalogItemsInMessage = picked.size > 0;
    closeModal(catalogModal);
    openWaPanel();
  });

document
  .getElementById("continueNoCatalogFromCatalog")
  ?.addEventListener("click", () => {
    includeCatalogItemsInMessage = false;
    closeModal(catalogModal);
    openWaPanel();
  });

// =========================
// WHATSAPP MODAL (FORM) + MESSAGE
// =========================
const waModal = document.getElementById("waModal");
const leadNameInput = document.getElementById("leadName");
const eventDateInput = document.getElementById("eventDate");
const guestCountInput = document.getElementById("guestCount");
const messagePreview = document.getElementById("messagePreview");

function buildPickedLinesForMessage() {
  if (!includeCatalogItemsInMessage) return "";
  if (picked.size === 0) return "";

  const pickedItems = CATALOG.filter((it) => picked.has(it.id));

  const lines = pickedItems.map((it) => {
    // kelim: name only (already good)
    if (!it.code) return `• ${it.name}`;

    // coded: name already includes color + add code
    return `• ${it.name} | מק״ט: ${it.code}`;
  });

  return `\n\nמתוך הקטלוג:\n${lines.join("\n")}`;
}

function buildMessage(name, dateStr, guests) {
  const safeName = (name || "").trim();
  const safeDate = (dateStr || "").trim();
  const safeGuests = (guests || "").toString().trim();

  const header =
    `היי, אני ${safeName} 😊\n` +
    `אשמח להצעת מחיר להשכרת ציוד לאירוע.\n\n` +
    `תאריך: ${safeDate}\n` +
    `כמות מוזמנים: ${safeGuests}`;

  return header + buildPickedLinesForMessage();
}

function openWhatsAppWithMessage(msg) {
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function syncPreview() {
  const name = leadNameInput?.value || "";
  const datePretty = formatDateForMessage(eventDateInput?.value || "");
  const guests = guestCountInput?.value || "";
  const msg = buildMessage(name, datePretty, guests);
  if (messagePreview) messagePreview.textContent = msg;
}

function openWaPanel() {
  openModal(waModal);
  syncPreview();
  setTimeout(() => leadNameInput?.focus(), 60);
}

document.getElementById("openWaHeader")?.addEventListener("click", () => {
  includeCatalogItemsInMessage = picked.size > 0;
  openWaPanel();
});
document.getElementById("openWaFooter")?.addEventListener("click", () => {
  includeCatalogItemsInMessage = picked.size > 0;
  openWaPanel();
});
document.getElementById("openWaFooterLike")?.addEventListener("click", () => {
  includeCatalogItemsInMessage = picked.size > 0;
  openWaPanel();
});
document
  .getElementById("quickOrderNoCatalog")
  ?.addEventListener("click", () => {
    includeCatalogItemsInMessage = false;
    openWaPanel();
  });

document
  .getElementById("closeWa")
  ?.addEventListener("click", () => closeModal(waModal));

leadNameInput?.addEventListener("input", syncPreview);
eventDateInput?.addEventListener("change", syncPreview);
guestCountInput?.addEventListener("input", syncPreview);

// =========================
// PROCEDURE MODAL (approval gate)
// =========================
const procedureModal = document.getElementById("procedureModal");
const procedureAck = document.getElementById("procedureAck");
const approveProcedureBtn = document.getElementById("approveProcedure");
let pendingWhatsAppMessage = null;

function resetProcedureApprovalUI() {
  if (procedureAck) procedureAck.checked = false;
  if (approveProcedureBtn) approveProcedureBtn.disabled = true;
}

procedureAck?.addEventListener("change", () => {
  if (!approveProcedureBtn) return;
  approveProcedureBtn.disabled = !procedureAck.checked;
});

approveProcedureBtn?.addEventListener("click", () => {
  if (!pendingWhatsAppMessage) return;
  if (!procedureAck?.checked) return;

  closeModal(procedureModal);
  openWhatsAppWithMessage(pendingWhatsAppMessage);

  pendingWhatsAppMessage = null;
  resetProcedureApprovalUI();
});

document.getElementById("backProcedure")?.addEventListener("click", () => {
  closeModal(procedureModal);
  resetProcedureApprovalUI();
});
document.getElementById("closeProcedure")?.addEventListener("click", () => {
  closeModal(procedureModal);
  resetProcedureApprovalUI();
});

document.getElementById("waFormModal")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = leadNameInput?.value || "";
  const datePretty = formatDateForMessage(eventDateInput?.value || "");
  const guests = guestCountInput?.value || "";

  pendingWhatsAppMessage = buildMessage(name, datePretty, guests);

  closeModal(waModal);

  resetProcedureApprovalUI();
  openModal(procedureModal);
});

// =========================
// Footer year
// =========================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// =========================
// INIT
// =========================
resetProcedureApprovalUI();
syncPreview();
refreshPickedUI();

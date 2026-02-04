// =========================
// SETTINGS
// =========================
const WHATSAPP_PHONE = "972585055011"; // ✅ החלף למספר אמיתי ללא + (לדוגמה: 972501234567)

// =========================
// CATALOG DATA
// =========================
// כלל: מפות/מפיות => יש מק"ט (מספר בתחילת שם קובץ) והוא יופיע בהודעה.
// kelim => אין מק"ט, בהודעה נשלח שם המוצר בלבד.
const CATALOG = [
  // =========================
  // KELIM (ללא מק"ט בהודעה)
  // =========================
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

  // =========================
  // MAPOT 2.20 - pishtan (עם מק"ט)
  // =========================
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
    name: "מפה 2.20 (פשתן)",
    category: "mapot_220",
    tag: "מפות 2.20",
    note: "מפה נקייה ומגוהצת",
  }),

  // =========================
  // MAPOT 2.20 - saten (עם מק"ט)
  // =========================
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
    name: "מפה 2.20 (סאטן)",
    category: "mapot_220",
    tag: "מפות 2.20",
    note: "מפה נקייה ומגוהצת",
  }),

  // =========================
  // MAPOT 2.50 - pishtan (עם מק"ט)
  // =========================
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
    name: "מפה 2.50 (פשתן)",
    category: "mapot_250",
    tag: "מפות 2.50",
    note: "מפה נקייה ומגוהצת",
  }),

  // =========================
  // MAPIYOT - saten (עם מק"ט)
  // =========================
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
    name: "מפית (סאטן)",
    category: "mapiyot",
    tag: "מפיות",
    note: "מפית צבעונית לשולחן",
  }),

  // =========================
  // MAPIYOT - pishtan (עם מק"ט)
  // =========================
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
    name: "מפית (פשתן)",
    category: "mapiyot",
    tag: "מפיות",
    note: "מפית צבעונית לשולחן",
  }),
];

// =========================
// FILTERS
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

// =========================
// STATE
// =========================
let activeFilter = "all";
const picked = new Set(); // מחזיק itemId
let includeCatalogItemsInMessage = true; // "בלי פירוט" => false

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
  // "23_xxx.jpeg" -> "23"
  const m = filename.match(/^(\d{1,3})[_-]/);
  return m ? m[1] : null;
}

function makeNumericItems({ folder, files, name, category, tag, note }) {
  return files.map((f) => {
    const code = parseLeadingNumber(f); // ✅ מק"ט למפות/מפיות בלבד
    const id = `${category}::${f}`; // מזהה פנימי
    return {
      id,
      kind: "coded", // יש קוד (מק"ט)
      code: code ? String(code) : null,
      name,
      category,
      tag,
      img: `${folder}/${f}`,
      note,
    };
  });
}

function makeKelimItem({ name, category, tag, img, note }) {
  // ✅ אין מק"ט
  return {
    id: `kelim::${img}`, // מזהה פנימי יציב לפי הנתיב
    kind: "named",
    code: null,
    name,
    category,
    tag,
    img,
    note,
  };
}

function formatDateForMessage(dateInputValue) {
  if (!dateInputValue) return "";
  const [y, m, d] = dateInputValue.split("-");
  if (!y || !m || !d) return dateInputValue;
  return `${d}/${m}/${y}`;
}

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
  renderCatalog();
  applyCatalogFilters();
  refreshPickedUI();
}

// =========================
// FILTERS RENDER
// =========================
const filtersEl = document.getElementById("filters");
function renderFilters() {
  if (!filtersEl) return;
  filtersEl.innerHTML = FILTERS.map((f) => {
    const cls = f.key === activeFilter ? "pill is-active" : "pill";
    return `<button class="${cls}" data-filter="${f.key}" type="button">${f.label}</button>`;
  }).join("");

  filtersEl.querySelectorAll("[data-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter || "all";
      renderFilters();
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

    // ✅ הצגת מק"ט רק אם יש (כלומר: מפות/מפיות)
    const codeChip = p.code
      ? `<span class="code">מק״ט: ${escapeHtml(p.code)}</span>`
      : "";

    return `
      <article class="product"
        data-id="${escapeHtml(p.id)}"
        data-category="${escapeHtml(p.category)}"
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

  catalogGrid.addEventListener("click", onCatalogClick);
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

    // עדכון הכרטיס בלי רינדור מלא
    updateCardPickedState(card, btn, picked.has(id));
    refreshPickedUI();
    syncPreview(); // התצוגה המקדימה בהזמנה מתעדכנת בזמן אמת
  }
}

function updateCardPickedState(card, btn, isPicked) {
  if (!btn) return;
  btn.className = isPicked ? "btn pick-btn is-picked" : "btn btn-soft pick-btn";
  btn.textContent = isPicked ? "נבחר ✓" : "בחרתי";
}

function applyCatalogFilters() {
  const q = (searchInput?.value || "").trim().toLowerCase();
  const cards = catalogGrid?.querySelectorAll(".product") || [];

  cards.forEach((card) => {
    const cat = card.dataset.category;
    const name = (card.dataset.name || "").toLowerCase();
    const code = (card.dataset.code || "").toLowerCase(); // רק למפות/מפיות יהיה משהו

    const matchFilter = activeFilter === "all" ? true : cat === activeFilter;

    // חיפוש: שם תמיד, מק"ט רק אם קיים
    const matchSearch = !q
      ? true
      : name.includes(q) || (code && code.includes(q));

    card.style.display = matchFilter && matchSearch ? "" : "none";
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
  // רינדור מחדש כדי לנקות סטייט של כפתורים
  renderCatalog();
  applyCatalogFilters();
  syncPreview();
});

document
  .getElementById("goToOrderFromCatalog")
  ?.addEventListener("click", () => {
    includeCatalogItemsInMessage = picked.size > 0; // אם אין בחירה, לא שולחים פירוט
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
    // ✅ kelim: רק שם
    if (!it.code) return `• ${it.name}`;

    // ✅ מפות/מפיות: שם + מק"ט
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

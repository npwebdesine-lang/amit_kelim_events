// =========================
// SETTINGS
// =========================
const WHATSAPP_PHONE = "9725XXXXXXXX"; // החלף למספר אמיתי (ללא +)

// =========================
// Helpers
// =========================
function formatDateForMessage(dateInputValue) {
  if (!dateInputValue) return "";
  const [y, m, d] = dateInputValue.split("-");
  if (!y || !m || !d) return dateInputValue;
  return `${d}/${m}/${y}`;
}

function buildMessage(name, dateStr, guests) {
  const safeName = (name || "").trim() || "—";
  const safeDate = (dateStr || "").trim() || "—";
  const safeGuests = (guests || "").toString().trim() || "—";

  return `היי, קוראים לי ${safeName}, ראיתי האתר שלכם ואשמח להזמין כלים להשכרה בתאריך ${safeDate}. כמות מוזמנים: ${safeGuests}. אשמח לקבל הצעת מחיר`;
}

function openWhatsAppWithMessage(msg) {
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

// =========================
// Modal core
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

// Close by backdrop click + ESC
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    const t = e.target;
    if (t && t.dataset && t.dataset.close === "true") closeModal(modal);
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal(document.getElementById("procedureModal"));
    closeModal(document.getElementById("waModal"));
  }
});

// =========================
// Mobile menu
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
// New flow state
// =========================
let pendingWhatsAppMessage = null;

// =========================
// Procedure modal (approval gate)
// =========================
const procedureModal = document.getElementById("procedureModal");
const procedureAck = document.getElementById("procedureAck");
const approveProcedureBtn = document.getElementById("approveProcedure");

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

// =========================
// WhatsApp modal (form)
// =========================
const waModal = document.getElementById("waModal");
const leadNameInput = document.getElementById("leadName");
const eventDateInput = document.getElementById("eventDate");
const guestCountInput = document.getElementById("guestCount");
const messagePreview = document.getElementById("messagePreview");

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

document.getElementById("openWaHeader")?.addEventListener("click", openWaPanel);
document.getElementById("openWaHero")?.addEventListener("click", openWaPanel);
document.getElementById("openWaAbout")?.addEventListener("click", openWaPanel);
document.getElementById("openWaMid")?.addEventListener("click", openWaPanel);
document.getElementById("openWaFooter")?.addEventListener("click", openWaPanel);
document
  .querySelectorAll(".openWaAnywhere")
  .forEach((b) => b.addEventListener("click", openWaPanel));

document
  .getElementById("closeWa")
  ?.addEventListener("click", () => closeModal(waModal));

leadNameInput?.addEventListener("input", syncPreview);
eventDateInput?.addEventListener("change", syncPreview);
guestCountInput?.addEventListener("input", syncPreview);

// ✅ Submit במודאל => הולך לנוהל
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
// Catalog filter + search
// =========================
const pills = document.querySelectorAll(".pill");
const catalogGrid = document.getElementById("catalogGrid");
const searchInput = document.getElementById("catalogSearch");
let activeFilter = "all";

function applyCatalogFilters() {
  const q = (searchInput?.value || "").trim().toLowerCase();
  const items = catalogGrid?.querySelectorAll(".product") || [];

  items.forEach((card) => {
    const cat = card.dataset.category;
    const name = (card.dataset.name || "").toLowerCase();
    const code = (card.dataset.code || "").toLowerCase();

    const matchFilter = activeFilter === "all" ? true : cat === activeFilter;
    const matchSearch = !q ? true : name.includes(q) || code.includes(q);

    card.style.display = matchFilter && matchSearch ? "" : "none";
  });
}

pills.forEach((btn) => {
  btn.addEventListener("click", () => {
    pills.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    activeFilter = btn.dataset.filter || "all";
    applyCatalogFilters();
  });
});

searchInput?.addEventListener("input", applyCatalogFilters);

// =========================
// Footer year
// =========================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// init
applyCatalogFilters();
syncPreview();
resetProcedureApprovalUI();

// ── COPY SCRIPT ────────────────────────────────────────────────
function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => showToast("Copied to clipboard!"));
  } else {
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    showToast("Copied to clipboard!");
  }
}

function showToast(msg) {
  let toast = document.getElementById("copy-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "copy-toast";
    toast.className = "copy-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = "✅ " + msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

// Attach click-to-copy to all .script-code blocks
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".script-code[data-script]").forEach((el) => {
    el.addEventListener("click", () => {
      copyToClipboard(el.dataset.script || el.textContent.trim());
    });
  });

  // ── FAQ ACCORDION ───────────────────────────────────────────
  document.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach((i) => i.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });
  });

  // ── SCROLL FADE IN ──────────────────────────────────────────
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
    { threshold: 0.1 }
  );
  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
});

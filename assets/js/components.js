/**
 * GLOBAL COMPONENTS
 * Renders shared header, footer and third-party scripts on every page.
 * Uses SITE_CONFIG from site-config.js
 */

document.addEventListener("DOMContentLoaded", () => {
  // Inject third-party head scripts
  if (typeof THIRD_PARTY_HEAD !== "undefined" && THIRD_PARTY_HEAD.trim()) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = THIRD_PARTY_HEAD;
    Array.from(tempDiv.childNodes).forEach((node) => {
      if (node.nodeName === "SCRIPT") {
        const s = document.createElement("script");
        Array.from(node.attributes).forEach((a) => s.setAttribute(a.name, a.value));
        s.textContent = node.textContent;
        document.head.appendChild(s);
      } else {
        document.head.appendChild(node.cloneNode(true));
      }
    });
  }

  // Detect if we're in a subpage
  const isSubPage = window.location.pathname.includes("/pages/");
  const root = isSubPage ? "../" : "./";

  // ── HEADER ──────────────────────────────────────────────────────────────
  const headerEl = document.getElementById("site-header");
  if (headerEl) {
    headerEl.innerHTML = `
      <div class="nav-container">
        <a href="${root}index.html" class="nav-logo" aria-label="Home">
          <span class="logo-cube">🟨</span>
          <span class="logo-text">Lucky<span class="logo-accent">Block</span></span>
        </a>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>
        <nav class="nav-links" id="navLinks">
          <a href="${root}index.html">Home</a>
          <a href="${root}index.html#scripts">Scripts</a>
          <a href="${root}index.html#features">Features</a>
          <a href="${root}index.html#how-to-use">How To Use</a>
          <a href="${root}index.html#faq">FAQ</a>
        </nav>
      </div>
    `;

    // Mobile toggle
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");
    if (toggle && links) {
      toggle.addEventListener("click", () => {
        links.classList.toggle("open");
        toggle.classList.toggle("active");
      });
    }

    // Active link highlight
    const currentPath = window.location.pathname;
    document.querySelectorAll(".nav-links a").forEach((a) => {
      if (a.getAttribute("href") === currentPath || currentPath.endsWith(a.getAttribute("href"))) {
        a.classList.add("active");
      }
    });
  }

  // ── FOOTER ──────────────────────────────────────────────────────────────
  const footerEl = document.getElementById("site-footer");
  if (footerEl) {
    const year = new Date().getFullYear();
    const footerLinks = (typeof SITE_CONFIG !== "undefined" ? SITE_CONFIG.footerLinks : [])
      .map((l) => `<a href="${root}${l.href.replace(/^\//, "")}">${l.label}</a>`)
      .join("");

    footerEl.innerHTML = `
      <div class="footer-container">
        <div class="footer-brand">
          <a href="${root}index.html" class="nav-logo">
            <span class="logo-cube">🟨</span>
            <span class="logo-text">Lucky<span class="logo-accent">Block</span></span>
          </a>
          <p class="footer-tagline">The #1 source for working Roblox Lucky Block scripts.</p>
        </div>
        <div class="footer-links">
          <h4>Legal</h4>
          ${footerLinks}
        </div>
        <div class="footer-links">
          <h4>Quick Links</h4>
          <a href="${root}index.html#scripts">Scripts</a>
          <a href="${root}index.html#features">Features</a>
          <a href="${root}index.html#how-to-use">How To Use</a>
          <a href="${root}index.html#faq">FAQ</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${year} LuckyBlockScript.com — Not affiliated with Roblox Corporation.</p>
        <p class="footer-disclaimer-note">For educational purposes only. Use scripts at your own risk.</p>
      </div>
    `;
  }

  // ── BODY-END SCRIPTS ────────────────────────────────────────────────────
  if (typeof THIRD_PARTY_BODY_END !== "undefined" && THIRD_PARTY_BODY_END.trim()) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = THIRD_PARTY_BODY_END;
    document.body.appendChild(wrapper);
  }
});

// ── DYNAMIC META TITLE MONTH/YEAR ─────────────────────────────────────────
function getDynamicTitle(basePattern) {
  const now = new Date();
  const month = now.toLocaleString("en-US", { month: "long" });
  const year = now.getFullYear();
  return basePattern.replace("{MONTH}", month).replace("{YEAR}", year);
}

// Update <title> tags that contain {MONTH} or {YEAR}
const titleEl = document.querySelector("title");
if (titleEl && (titleEl.textContent.includes("{MONTH}") || titleEl.textContent.includes("{YEAR}"))) {
  titleEl.textContent = getDynamicTitle(titleEl.textContent);
}

// Also update og:title meta
const ogTitle = document.querySelector('meta[property="og:title"]');
if (ogTitle && (ogTitle.content.includes("{MONTH}") || ogTitle.content.includes("{YEAR}"))) {
  ogTitle.content = getDynamicTitle(ogTitle.content);
}

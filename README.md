# Be a Lucky Block Script — Website

## File Structure
```
/
├── index.html                  ← Homepage (main page)
├── sitemap.xml                 ← SEO sitemap
├── robots.txt                  ← Search engine crawler rules
├── pages/
│   ├── privacy-policy.html
│   ├── disclaimer.html
│   └── terms.html
└── assets/
    ├── css/
    │   └── styles.css          ← All global styles
    ├── js/
    │   ├── site-config.js      ← ⭐ EDIT THIS for site-wide settings & analytics
    │   ├── components.js       ← Renders header + footer on every page
    │   └── main.js             ← Interactivity (copy, FAQ, animations)
    └── img/
        └── og-image.png        ← Add your Open Graph image here (1200x630px)
```

## How to Customise

### 1. Update Site URL & Name
Edit `assets/js/site-config.js` — change `siteURL`, `siteName`, etc.

### 2. Add Google Analytics
In `site-config.js`, uncomment the GA block inside `THIRD_PARTY_HEAD` and
replace `G-XXXXXXXXXX` with your Measurement ID.

### 3. Add AdSense
In `site-config.js`, uncomment the AdSense block inside `THIRD_PARTY_HEAD`
and replace `ca-pub-XXXXXXXXXXXXXXXX` with your publisher ID.
Then add `<ins class="adsbygoogle">` ad units in any page — the AdSense script
is already injected globally.

### 4. Add a Real Favicon
Replace the inline SVG favicon in each HTML `<head>` with:
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

### 5. Update Scripts
In `index.html`, find the `.script-code` elements and update the
`data-script` attribute with the real script URLs or code.

### 6. Dynamic Meta Title
The `<title>` tag uses `{MONTH}` and `{YEAR}` placeholders which
`components.js` auto-replaces with the current month and year on page load.
No maintenance needed — it updates itself.

### 7. Deploy
Upload the entire folder to any static host:
- **Cloudflare Pages** (recommended — free + fast CDN)
- **Netlify**
- **Vercel**
- **GitHub Pages**
- Any web server (Apache/Nginx)

No server-side code required — pure static HTML/CSS/JS.

## SEO Checklist
- [x] Meta title with month/year auto-update
- [x] Meta description on every page
- [x] Canonical URLs
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] JSON-LD structured data (WebSite schema)
- [x] sitemap.xml
- [x] robots.txt
- [ ] Add real og-image.png (1200x630px) to /assets/img/
- [ ] Submit sitemap to Google Search Console
- [ ] Register in Bing Webmaster Tools

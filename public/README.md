# Public Assets

Statische Dateien die direkt vom Server ausgeliefert werden.

## Ordnerstruktur
```
public/
├── favicon.ico         # Browser-Icon
├── logo.svg           # Logo für Header/Navigation
├── manifest.json      # PWA Manifest
├── robots.txt         # SEO Robots-Anweisungen
├── sitemap.xml        # SEO Sitemap
├── images/            # Statische Bilder
│   ├── og-image.png   # Open Graph Bild
│   ├── hero-bg.jpg    # Hero-Hintergrund
│   └── placeholders/  # Platzhalter-Bilder
├── icons/             # App Icons verschiedener Größen
│   ├── icon-192.png
│   ├── icon-512.png
│   └── apple-touch-icon.png
└── documents/         # Downloadbare Dokumente
    ├── privacy-policy.pdf
    └── terms-of-service.pdf
```

## Wichtige Dateien

### Favicon & App Icons
```html
<!-- In index.html referenziert -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192.png">
<link rel="icon" type="image/png" sizes="512x512" href="/icons/icon-512.png">
```

### PWA Manifest
```json
// public/manifest.json
{
  "name": "My React App",
  "short_name": "ReactApp",
  "description": "Eine moderne React-Anwendung",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#3b82f6",
  "background_color": "#ffffff",
  "icons": [
    {
      "src": "/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### SEO Robots.txt
```txt
# public/robots.txt
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://yourdomain.com/sitemap.xml

# Disallow specific paths (optional)
Disallow: /admin/
Disallow: /api/
Disallow: /private/
```

### SEO Sitemap
```xml
<!-- public/sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/about</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/contact</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

## Verwendung in React

### Statische Bilder referenzieren
```jsx
// Direkter Pfad vom public Ordner
function Header() {
  return (
    <header>
      <img src="/logo.svg" alt="Company Logo" />
      <img src="/images/hero-bg.jpg" alt="Hero Background" />
    </header>
  )
}
```

### Dynamische Bilder laden
```jsx
// Für dynamische Bildpfade
function UserAvatar({ userId }) {
  const avatarUrl = `/images/avatars/user-${userId}.jpg`
  
  return (
    <img 
      src={avatarUrl} 
      alt="User Avatar"
      onError={(e) => {
        e.target.src = '/images/placeholders/default-avatar.png'
      }}
    />
  )
}
```

### Open Graph Meta Tags
```jsx
// In index.html oder mit React Helmet
<meta property="og:title" content="My React App" />
<meta property="og:description" content="Eine moderne React-Anwendung" />
<meta property="og:image" content="/images/og-image.png" />
<meta property="og:url" content="https://yourdomain.com" />
<meta property="og:type" content="website" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="My React App" />
<meta name="twitter:description" content="Eine moderne React-Anwendung" />
<meta name="twitter:image" content="/images/og-image.png" />
```

### Downloadbare Dokumente
```jsx
function Footer() {
  return (
    <footer>
      <div className="legal-links">
        <a href="/documents/privacy-policy.pdf" target="_blank" rel="noopener">
          Datenschutz (PDF)
        </a>
        <a href="/documents/terms-of-service.pdf" target="_blank" rel="noopener">
          AGB (PDF)
        </a>
      </div>
    </footer>
  )
}
```

## Asset-Größen & Optimierung

### Favicon Größen
```
favicon.ico          # 16x16, 32x32, 48x48 (multi-size ICO)
apple-touch-icon.png # 180x180
icon-192.png         # 192x192 (PWA)
icon-512.png         # 512x512 (PWA)
```

### Open Graph Bilder
```
og-image.png         # 1200x630 (Facebook, LinkedIn)
og-image-square.png  # 1200x1200 (Instagram, WhatsApp)
```

### Bild-Optimierung
- **WebP Format** für moderne Browser
- **Komprimierung** mit Tools wie TinyPNG
- **Responsive Bilder** in verschiedenen Größen
- **Lazy Loading** für bessere Performance

## Environment-spezifische Assets

### Development vs Production
```jsx
// Verschiedene Logos je nach Environment
function Logo() {
  const isDev = import.meta.env.DEV
  const logoSrc = isDev ? '/logo-dev.svg' : '/logo.svg'
  
  return <img src={logoSrc} alt="Logo" />
}
```

### Asset Versioning
```jsx
// Cache-Busting für statische Assets
const assetVersion = import.meta.env.VITE_ASSET_VERSION || 'v1'

function HeroImage() {
  return (
    <img 
      src={`/images/hero-bg.jpg?v=${assetVersion}`} 
      alt="Hero" 
    />
  )
}
```

## Build-Integration

### Vite Public Directory
```js
// vite.config.js
export default defineConfig({
  // Public directory (default: 'public')
  publicDir: 'public',
  
  // Assets werden automatisch kopiert
  build: {
    // Assets unter 4kb werden inline als base64
    assetsInlineLimit: 4096
  }
})
```

### Asset-Pfade in Production
```jsx
// Base URL für verschiedene Deployment-Umgebungen
const baseUrl = import.meta.env.BASE_URL || '/'

function AssetLink({ src, ...props }) {
  return <img src={`${baseUrl}${src}`} {...props} />
}
```

## Progressive Web App (PWA)

### Service Worker Registration
```js
// Registrierung in main.jsx
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration)
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError)
      })
  })
}
```

### App Installation
```jsx
// PWA Install Button
function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
    }

    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      setDeferredPrompt(null)
    }
  }

  return deferredPrompt ? (
    <button onClick={handleInstall}>App installieren</button>
  ) : null
}
```

## Security Headers

### Content Security Policy
```html
<!-- In index.html -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; img-src 'self' data: https:; script-src 'self';">
```

## Best Practices

### Performance
- **Komprimierte Bilder** (WebP, AVIF)
- **Optimierte Icons** (SVG wo möglich)
- **CDN Integration** für bessere Ladezeiten
- **HTTP/2 Server Push** für kritische Assets

### SEO
- **Strukturierte Daten** (JSON-LD)
- **XML Sitemap** aktuell halten
- **Robots.txt** konfigurieren
- **Meta Tags** für Social Media

### Accessibility
- **Alt-Texte** für alle Bilder
- **Icon-Beschreibungen** für Screen Reader
- **Kontrast-Verhältnisse** beachten
- **Touch-Targets** ausreichend groß

### Maintenance
- **Asset-Versionierung** für Cache-Control
- **Broken Link Checks** regelmäßig durchführen
- **Image Optimization** automatisieren
- **Security Scans** für hochgeladene Dateien
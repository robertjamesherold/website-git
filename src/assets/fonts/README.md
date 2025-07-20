# Fonts

Custom Fonts und Schriftarten für die Anwendung.

## Ordnerstruktur
```
fonts/
├── primary/        # Haupt-Schriftart
├── secondary/      # Akzent-Schriftart
├── monospace/      # Code-Schriftart
└── icons/          # Icon-Fonts
```

## Unterstützte Formate
- **WOFF2** - moderne Browser (bevorzugt)
- **WOFF** - Fallback für ältere Browser
- **TTF** - Fallback für sehr alte Browser

## Font Face Definitionen

### CSS Import (src/styles/fonts.css)
```css
/* Primary Font - Inter */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('@assets/fonts/primary/Inter-Regular.woff2') format('woff2'),
       url('@assets/fonts/primary/Inter-Regular.woff') format('woff');
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('@assets/fonts/primary/Inter-SemiBold.woff2') format('woff2'),
       url('@assets/fonts/primary/Inter-SemiBold.woff') format('woff');
}

/* Monospace Font - JetBrains Mono */
@font-face {
  font-family: 'JetBrains Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('@assets/fonts/monospace/JetBrainsMono-Regular.woff2') format('woff2');
}
```

## Verwendung in CSS/SCSS
```scss
// Variables definieren
$font-family-primary: 'Inter', system-ui, sans-serif;
$font-family-mono: 'JetBrains Mono', 'Monaco', monospace;

// In Komponenten verwenden
.heading {
  font-family: $font-family-primary;
  font-weight: 600;
}

.code-block {
  font-family: $font-family-mono;
}
```

## Tailwind CSS Integration
```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Monaco', 'monospace'],
      }
    }
  }
}
```

```jsx
// Verwendung in Components
<h1 className="font-sans font-semibold">Heading</h1>
<code className="font-mono">console.log('Hello')</code>
```

## Font Loading Optimization
```jsx
// Preload in index.html
<link rel="preload" href="/src/assets/fonts/primary/Inter-Regular.woff2" as="font" type="font/woff2" crossorigin />
```

## Google Fonts Alternative
```css
/* Falls Google Fonts bevorzugt */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```

## Best Practices
- Lade nur benötigte Font-Weights
- Nutze `font-display: swap` für bessere Performance
- Preload wichtige Fonts
- Fallback-Fonts definieren
- WOFF2 Format für beste Kompression
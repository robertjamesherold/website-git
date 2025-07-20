# React + Vite + Tailwind Template 🚀

Ein modernes, vollständig konfiguriertes React-Template mit Vite, Tailwind CSS, SASS, ESLint und Prettier für blitzschnelle Entwicklung.

## ✨ Features

- ⚡ **Vite** - Lightning-fast build tool und HMR
- ⚛️ **React 18** - Neueste stabile React-Version
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🎯 **SASS/SCSS** - CSS preprocessor mit auto-import variables
- 🔧 **ESLint** - Code linting mit React-optimierten Regeln
- 💅 **Prettier** - Automatische Code-Formatierung
- 📦 **Path Aliasing** - Saubere Imports (@components, @utils, etc.)
- 🧹 **PurgeCSS** - Automatische Entfernung ungenutzter CSS-Klassen
- 📱 **PWA-Ready** - Progressive Web App Unterstützung
- 🌙 **Theme System** - Dark/Light Mode Support
- 📊 **Performance Optimized** - Code splitting, lazy loading

## 🚀 Quick Start

### 1. Repository klonen
```bash
git clone <repository-url>
cd react-vite-template
```

### 2. Dependencies installieren
```bash
npm install
```

### 3. Entwicklung starten
```bash
npm run dev
```

Die App läuft auf `http://localhost:3000` 🎉

## 📦 NPM Scripts

```bash
# Development
npm run dev              # Startet dev server mit HMR
npm run build           # Production build
npm run preview         # Preview des production builds

# Code Quality
npm run lint            # ESLint code checking
npm run lint:fix        # ESLint mit automatischen fixes
npm run format          # Prettier code formatting
npm run format:check    # Prettier format checking

# Kombinierte Scripts
npm run check           # Lint + Format check
npm run fix             # Lint fix + Format

# Maintenance
npm run clean           # dist ordner löschen
npm run clean:install   # Komplette Neuinstallation
npm run update          # Dependencies updaten
```

## 📁 Projekt-Struktur

```
├── public/                 # Statische Assets
│   ├── favicon.ico        # Browser Icon
│   ├── logo.svg          # App Logo
│   ├── manifest.json     # PWA Manifest
│   └── robots.txt        # SEO Robots
├── src/                   # Source Code
│   ├── assets/           # Statische Assets
│   │   ├── images/       # Bilder und Grafiken
│   │   ├── svg/         # SVG Icons
│   │   └── fonts/       # Custom Fonts
│   ├── components/      # React Komponenten
│   │   ├── ui/         # Basis UI-Komponenten
│   │   ├── forms/      # Form-Komponenten
│   │   └── common/     # Allgemeine Komponenten
│   ├── hooks/          # Custom React Hooks
│   ├── layout/         # Layout-Komponenten
│   ├── pages/          # Route-Komponenten
│   ├── styles/         # Styling
│   │   ├── css/       # Regular CSS
│   │   └── scss/      # SASS/SCSS mit Variables
│   ├── utils/          # Helper-Funktionen
│   ├── App.jsx         # Main App Component
│   ├── main.jsx        # React Entry Point
│   └── index.css       # Global Styles + Tailwind
├── .eslintrc.js          # ESLint Konfiguration
├── .prettierrc           # Prettier Konfiguration
├── .prettierignore       # Prettier Ignore-Regeln
├── tailwind.config.js    # Tailwind Konfiguration
├── postcss.config.js     # PostCSS Konfiguration
├── vite.config.js        # Vite Konfiguration
└── package.json          # Dependencies und Scripts
```

## 🎨 Styling-System

### Tailwind CSS + SCSS Hybrid Approach

**Tailwind für Utilities:**
```jsx
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
  <h1 className="text-2xl font-bold text-gray-900">Title</h1>
  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    Button
  </button>
</div>
```

**SCSS für komplexe Komponenten:**
```scss
.custom-button {
  // SCSS Variables automatisch verfügbar!
  background-color: $primary;
  padding: $spacing-md;
  border-radius: $border-radius-lg;
  
  &:hover {
    background-color: $primary-dark;
  }
  
  @include respond-to(mobile) {
    padding: $spacing-sm;
  }
}
```

### Verfügbare SCSS Variables
```scss
// Colors
$primary: #3b82f6;
$secondary: #6b7280;
$success: #10b981;

// Spacing
$spacing-xs: 0.25rem;
$spacing-sm: 0.5rem;
$spacing-md: 1rem;
$spacing-lg: 1.5rem;

// Typography
$font-family-sans: 'Inter', sans-serif;
$font-size-base: 1rem;
$font-size-lg: 1.125rem;

// Breakpoints
$breakpoint-sm: 640px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
```

## 🧩 Komponenten-System

### Path Aliasing für saubere Imports
```jsx
// Statt komplizierter relativer Pfade:
import Button from '../../../components/ui/Button'
import { api } from '../../../utils/api'

// Nutze cleane Aliase:
import Button from '@components/ui/Button'
import { api } from '@utils/api'

// Verfügbare Aliase:
// @/            → src/
// @components/  → src/components/
// @hooks/       → src/hooks/
// @pages/       → src/pages/
// @utils/       → src/utils/
// @assets/      → src/assets/
// @styles/      → src/styles/
// @scss/        → src/styles/scss/
```

### Komponenten-Beispiele

**UI Komponenten:**
```jsx
import Button from '@components/ui/Button'
import Card from '@components/ui/Card'
import Input from '@components/ui/Input'
import Modal from '@components/ui/Modal'

function Example() {
  return (
    <Card>
      <Card.Header>
        <h2>User Profile</h2>
      </Card.Header>
      <Card.Content>
        <Input placeholder="Enter name..." />
      </Card.Content>
      <Card.Footer>
        <Button variant="primary">Save</Button>
        <Button variant="secondary">Cancel</Button>
      </Card.Footer>
    </Card>
  )
}
```

**Custom Hooks:**
```jsx
import { useLocalStorage } from '@hooks/useLocalStorage'
import { useApi } from '@hooks/useApi'
import { useDebounce } from '@hooks/useDebounce'

function UserSettings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  const { data: users, loading } = useApi('/api/users')
  const debouncedSearch = useDebounce(searchTerm, 300)
  
  // Component logic...
}
```

## ⚡ Performance Features

### Automatische Optimierungen
- **Tree Shaking** - Unused code wird entfernt
- **Code Splitting** - Automatische Bundle-Aufteilung
- **CSS Purging** - Unbenutzte CSS-Klassen werden entfernt
- **Asset Optimization** - Bilder und CSS werden komprimiert
- **Hot Module Replacement** - Blitzschnelle Updates während Development

### Lazy Loading
```jsx
import { lazy, Suspense } from 'react'

const HomePage = lazy(() => import('@pages/HomePage'))
const ProductsPage = lazy(() => import('@pages/ProductsPage'))

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </Suspense>
  )
}
```

## 🛠️ Development Tools

### VS Code Integration

**Empfohlene Extensions:**
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- ESLint
- Auto Rename Tag
- Bracket Pair Colorizer

**VS Code Snippets verfügbar:**
```jsx
// Tippe diese Shortcuts für schnelle Snippets:
rfc    // → React Function Component
rus    // → useState Hook
rue    // → useEffect Hook
imr    // → Import React
exd    // → Export Default
```

### Browser DevTools
- React Developer Tools
- Lighthouse Performance Audits
- Accessibility Tree
- Network Tab für Bundle-Analyse

## 🌍 Environment Configuration

### Environment Variables
```bash
# .env.local
VITE_API_URL=http://localhost:3001
VITE_APP_NAME=My React App
VITE_ENABLE_ANALYTICS=true
```

```jsx
// Verwendung in Code
const apiUrl = import.meta.env.VITE_API_URL
const appName = import.meta.env.VITE_APP_NAME
const isDev = import.meta.env.DEV
const isProd = import.meta.env.PROD
```

### Build Targets
```bash
# Development
npm run dev        # Fast, unoptimized

# Production
npm run build      # Optimized, minified, purged CSS
npm run preview    # Test production build locally
```

## 📱 PWA (Progressive Web App)

### Features
- **App Manifest** - Install auf Homescreen
- **Service Worker** - Offline-Funktionalität
- **Responsive Design** - Funktioniert auf allen Geräten
- **Fast Loading** - Optimierte Performance

### Installation
```jsx
// PWA Install Button
function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
    })
  }, [])

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      await deferredPrompt.userChoice
      setDeferredPrompt(null)
    }
  }

  return deferredPrompt ? (
    <button onClick={handleInstall}>App installieren</button>
  ) : null
}
```

## 🧪 Testing Setup

### Testing Libraries
```bash
# Test Dependencies (optional)
npm install -D @testing-library/react @testing-library/jest-dom vitest jsdom
```

### Example Test
```jsx
// components/Button/Button.test.jsx
import { render, fireEvent, screen } from '@testing-library/react'
import Button from './Button'

test('calls onClick when clicked', () => {
  const handleClick = vi.fn()
  render(<Button onClick={handleClick}>Click me</Button>)
  
  fireEvent.click(screen.getByText('Click me'))
  expect(handleClick).toHaveBeenCalledTimes(1)
})
```

## 🚀 Deployment

### Build für Production
```bash
npm run build
```

### Deployment Platforms
- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod --dir=dist`
- **GitHub Pages**: GitHub Actions workflow
- **Docker**: Dockerfile für containerized deployment

### Performance Checklist
- ✅ Bundle size < 100kb gzipped
- ✅ First Contentful Paint < 1.5s
- ✅ Lighthouse Score > 90
- ✅ Accessibility Score > 95
- ✅ SEO optimiert

## 🤝 Contributing

### Development Workflow
```bash
# 1. Feature Branch erstellen
git checkout -b feature/awesome-feature

# 2. Changes entwickeln
# ... code, test, commit

# 3. Code Quality prüfen
npm run check

# 4. Push und Pull Request
git push origin feature/awesome-feature
```

### Code Style Guidelines
- **ESLint**: Automatische Regel-Enforcement
- **Prettier**: Konsistente Formatierung
- **Naming**: PascalCase für Komponenten, camelCase für Funktionen
- **File Structure**: Ein Komponente pro Datei
- **Comments**: JSDoc für komplexe Funktionen

## 📚 Lernresourcen

### Dokumentation
- [React](https://react.dev/) - React Framework
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [SASS](https://sass-lang.com/) - CSS Preprocessor

### Community
- [React Discord](https://discord.gg/react)
- [Vite Discord](https://discord.gg/vite)
- [Tailwind Discord](https://discord.gg/tailwindcss)

## 📄 License

MIT License - siehe [LICENSE](LICENSE) für Details.

## 🙏 Acknowledgments

- React Team für das großartige Framework
- Vite Team für das blitzschnelle Build-Tool
- Tailwind Team für das utility-first CSS Framework
- Open Source Community für die amazing Tools

---

**Built with ❤️ für moderne React-Entwicklung**

### 🔗 Quick Links
- [📖 Dokumentation](./docs/)
- [🐛 Issues](./issues)
- [💡 Feature Requests](./discussions)
- [📧 Support](mailto:support@example.com)

---

**Happy Coding! 🚀**
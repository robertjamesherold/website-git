# Source Code (src/)

Das Herzstück der React-Anwendung mit allen Komponenten, Styles und Logic.

## 📁 Ordnerstruktur

```
src/
├── assets/              # Statische Assets
│   ├── images/         # Bilder und Grafiken
│   ├── svg/           # SVG Icons und Vektorgrafiken
│   └── fonts/         # Custom Fonts
├── components/         # Wiederverwendbare UI-Komponenten
│   ├── ui/            # Basis UI-Komponenten (Button, Input, etc.)
│   ├── forms/         # Form-spezifische Komponenten
│   ├── layout/        # Layout-Komponenten
│   └── common/        # Allgemeine Komponenten
├── hooks/             # Custom React Hooks
├── layout/            # Layout-Container und Strukturen
├── pages/             # Route-Komponenten für verschiedene Seiten
├── styles/            # Styling-Dateien
│   ├── css/          # Reguläre CSS-Dateien
│   └── scss/         # SASS/SCSS-Dateien mit Variables
├── utils/             # Helper-Funktionen und Utilities
├── App.jsx           # Haupt-App-Komponente
├── main.jsx          # React Entry Point
└── index.css         # Globale Styles und Tailwind Imports
```

## 🎯 Architektur-Prinzipien

### Component-First Architecture
- **Modulare Komponenten**: Jede Komponente hat eine spezifische Aufgabe
- **Wiederverwendbarkeit**: Komponenten sind universell einsetzbar
- **Composition over Inheritance**: Komponenten werden kombiniert statt vererbt

### Ordner-Konventionen
```
ComponentName/
├── ComponentName.jsx     # Haupt-Komponente
├── ComponentName.scss    # Styles (optional)
├── ComponentName.test.js # Tests (optional)
└── index.js             # Export-Datei
```

### Import-Aliase
Konfiguriert in `vite.config.js` für cleane Imports:

```jsx
// Statt: import Button from '../../../components/ui/Button'
import Button from '@components/ui/Button'

// Verfügbare Aliase:
// @/            → src/
// @components/  → src/components/
// @hooks/       → src/hooks/
// @layout/      → src/layout/
// @pages/       → src/pages/
// @styles/      → src/styles/
// @scss/        → src/styles/scss/
// @utils/       → src/utils/
// @assets/      → src/assets/
```

## 🧩 Komponenten-Hierarchie

### UI-Komponenten (components/ui/)
Basis-Bausteine der Anwendung:
```jsx
import Button from '@components/ui/Button'
import Input from '@components/ui/Input'
import Card from '@components/ui/Card'
import Modal from '@components/ui/Modal'
```

### Layout-Komponenten (layout/)
Strukturelle Container:
```jsx
import AppLayout from '@layout/AppLayout'
import Header from '@layout/Header'
import Sidebar from '@layout/Sidebar'
import Container from '@layout/Container'
```

### Page-Komponenten (pages/)
Route-spezifische Komponenten:
```jsx
import HomePage from '@pages/HomePage'
import ProductsPage from '@pages/ProductsPage'
import ContactPage from '@pages/ContactPage'
```

## 🎨 Styling-System

### Tailwind CSS + SCSS Hybrid
```jsx
// Tailwind für Utilities
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">

// SCSS für komplexe Komponenten
<button className="custom-button custom-button--primary">
```

### SCSS Variables automatisch verfügbar
```scss
.my-component {
  color: $primary;           // ✅ Automatisch verfügbar
  padding: $space2;      // ✅ Automatisch verfügbar
  font-size: $fs3;  // ✅ Automatisch verfügbar
}
```

### CSS Custom Properties
```css
:root {
  --color-primary: #3b82f6;
  --spacing-md: 1rem;
  --border-radius: 0.5rem;
}

.themed-component {
  background: var(--color-primary);
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
}
```

## 🔧 State Management Patterns

### Local State (useState)
```jsx
function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

### Custom Hooks für Logik
```jsx
// hooks/useLocalStorage.js
export function useLocalStorage(key, initialValue) {
  // Hook implementation
}

// Verwendung
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  // ...
}
```

### Context für globalen State
```jsx
// utils/ThemeContext.js
export const ThemeContext = createContext()

// App.jsx
<ThemeContext.Provider value={{ theme, setTheme }}>
  <Routes />
</ThemeContext.Provider>
```

## 📊 Data Flow Patterns

### Props Down, Events Up
```jsx
// Parent
function TodoApp() {
  const [todos, setTodos] = useState([])
  
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }])
  }
  
  return (
    <div>
      <TodoForm onSubmit={addTodo} />
      <TodoList todos={todos} />
    </div>
  )
}

// Child
function TodoForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(e.target.todo.value)
  }
  
  return <form onSubmit={handleSubmit}>...</form>
}
```

### API Integration
```jsx
// utils/api.js
export const userAPI = {
  getAll: () => fetch('/api/users').then(r => r.json()),
  create: (data) => fetch('/api/users', { method: 'POST', body: JSON.stringify(data) })
}

// hooks/useUsers.js
export function useUsers() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    userAPI.getAll().then(setUsers).finally(() => setLoading(false))
  }, [])
  
  return { users, loading }
}

// pages/UsersPage.jsx
function UsersPage() {
  const { users, loading } = useUsers()
  
  if (loading) return <LoadingSpinner />
  return <UserList users={users} />
}
```

## 🛣️ Routing-Struktur

### React Router Integration
```jsx
// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from '@layout/AppLayout'

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}
```

### Protected Routes
```jsx
// components/ProtectedRoute.jsx
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  
  if (loading) return <LoadingSpinner />
  return user ? children : <Navigate to="/login" replace />
}
```

## ⚡ Performance Optimierung

### Code Splitting
```jsx
// Lazy Loading für Pages
const HomePage = lazy(() => import('@pages/HomePage'))
const ProductsPage = lazy(() => import('@pages/ProductsPage'))

// Verwendung mit Suspense
<Suspense fallback={<LoadingSpinner />}>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
  </Routes>
</Suspense>
```

### React.memo für Performance
```jsx
// Teure Komponente optimieren
const ExpensiveComponent = memo(function ExpensiveComponent({ data }) {
  const expensiveValue = useMemo(() => {
    return data.reduce((sum, item) => sum + item.value, 0)
  }, [data])
  
  return <div>{expensiveValue}</div>
})
```

### Custom Hooks für Wiederverwendung
```jsx
// hooks/useDebounce.js
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(handler)
  }, [value, delay])
  
  return debouncedValue
}
```

## 🧪 Testing-Struktur

### Component Tests
```jsx
// components/Button/Button.test.js
import { render, fireEvent, screen } from '@testing-library/react'
import Button from './Button'

test('calls onClick when clicked', () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Click me</Button>)
  
  fireEvent.click(screen.getByText('Click me'))
  expect(handleClick).toHaveBeenCalledTimes(1)
})
```

### Hook Tests
```jsx
// hooks/__tests__/useLocalStorage.test.js
import { renderHook, act } from '@testing-library/react-hooks'
import { useLocalStorage } from '../useLocalStorage'

test('should return initial value', () => {
  const { result } = renderHook(() => useLocalStorage('test', 'initial'))
  expect(result.current[0]).toBe('initial')
})
```

## 🚀 Build & Deployment

### Environment Variables
```jsx
// Zugriff auf Environment Variables
const apiUrl = import.meta.env.VITE_API_URL
const isDev = import.meta.env.DEV
const isProd = import.meta.env.PROD

// Verwendung in Komponenten
function ApiComponent() {
  useEffect(() => {
    fetch(`${apiUrl}/data`).then(/* ... */)
  }, [])
}
```

### Build Optimierung
- **Tree Shaking**: Unused code wird automatisch entfernt
- **Code Splitting**: Automatische Chunk-Aufteilung
- **Asset Optimization**: Bilder und CSS werden komprimiert
- **Bundle Analysis**: `npm run build:analyze` für Bundle-Analyse

## 📚 Entwicklungsrichtlinien

### Code Style
- **ESLint**: Automatische Code-Quality-Checks
- **Prettier**: Konsistente Code-Formatierung
- **File Naming**: PascalCase für Komponenten, camelCase für Funktionen
- **Import Order**: External → Internal → Relative

### Best Practices
- **Single Responsibility**: Eine Komponente = eine Aufgabe
- **Pure Functions**: Komponenten sollen deterministisch sein
- **Prop Validation**: PropTypes oder TypeScript verwenden
- **Error Boundaries**: Graceful error handling
- **Accessibility**: ARIA-Labels und semantic HTML

### Git Workflow
```bash
# Feature Development
git checkout -b feature/new-component
# ... development
git add .
git commit -m "feat: add new Button component"
git push origin feature/new-component
```

## 🔧 Development Tools

### VS Code Extensions
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Auto Rename Tag
- Bracket Pair Colorizer
- GitLens

### Browser DevTools
- React Developer Tools
- Redux DevTools (falls verwendet)
- Lighthouse für Performance-Audits
- Accessibility Tree für A11y-Tests

## 📖 Weiterführende Resourcen

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [React Router Documentation](https://reactrouter.com/)
- [Testing Library Documentation](https://testing-library.com/)

---

**Happy Coding! 🚀**
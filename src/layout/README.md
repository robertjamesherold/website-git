# Layout Components

Layout-Komponenten für die Seitenstruktur und -organisation.

## Ordnerstruktur
```
layout/
├── Header/         # Seitenkopf
├── Footer/         # Seitenfuß
├── Sidebar/        # Seitenleiste
├── Navigation/     # Hauptnavigation
├── Container/      # Content Container
└── Grid/          # Grid-Systeme
```

## Layout Patterns

### App Layout (Haupt-Layout)
```jsx
// layout/AppLayout/AppLayout.jsx
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'

function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  )
}

export default AppLayout
```

### Responsive Header
```jsx
// layout/Header/Header.jsx
import { useState } from 'react'
import Navigation from '@layout/Navigation/Navigation'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-8 w-auto" src="/logo.svg" alt="Company" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <Navigation />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <Navigation mobile />
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
```

### Flexible Container
```jsx
// layout/Container/Container.jsx
function Container({ 
  children, 
  size = 'default',
  padding = true,
  className = '' 
}) {
  const sizes = {
    sm: 'max-w-3xl',
    default: 'max-w-7xl',
    lg: 'max-w-none',
    full: 'w-full'
  }

  const paddingClasses = padding ? 'px-4 sm:px-6 lg:px-8' : ''

  return (
    <div className={`mx-auto ${sizes[size]} ${paddingClasses} ${className}`}>
      {children}
    </div>
  )
}

export default Container
```

### Grid System
```jsx
// layout/Grid/Grid.jsx
function Grid({ 
  children,
  cols = 1,
  gap = 4,
  responsive = true,
  className = ''
}) {
  const getGridClasses = () => {
    if (!responsive) {
      return `grid-cols-${cols}`
    }

    // Responsive grid classes
    const responsiveClasses = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
      6: 'grid-cols-1 md:grid-cols-3 lg:grid-cols-6'
    }

    return responsiveClasses[cols] || `grid-cols-${cols}`
  }

  return (
    <div className={`grid ${getGridClasses()} gap-${gap} ${className}`}>
      {children}
    </div>
  )
}

function GridItem({ children, colSpan = 1, className = '' }) {
  return (
    <div className={`col-span-${colSpan} ${className}`}>
      {children}
    </div>
  )
}

Grid.Item = GridItem

export default Grid
```

### Sidebar Navigation
```jsx
// layout/Sidebar/Sidebar.jsx
import { useState } from 'react'

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const navigationItems = [
    { name: 'Dashboard', href: '/', icon: 'dashboard' },
    { name: 'Users', href: '/users', icon: 'users' },
    { name: 'Settings', href: '/settings', icon: 'settings' }
  ]

  return (
    <aside className={`bg-gray-900 text-white transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="p-4">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full text-left"
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      <nav className="mt-8">
        {navigationItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center px-4 py-2 text-sm hover:bg-gray-800"
          >
            <span className="mr-3">{item.icon}</span>
            {!isCollapsed && <span>{item.name}</span>}
          </a>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
```

## Layout Usage

### Mit React Router
```jsx
// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from '@layout/AppLayout/AppLayout'
import HomePage from '@pages/HomePage'
import UsersPage from '@pages/UsersPage'

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}
```

### Conditional Layouts
```jsx
// Different layouts for different routes
function App() {
  return (
    <Routes>
      <Route path="/admin/*" element={
        <AdminLayout>
          <Routes>
            <Route path="dashboard" element={<AdminDashboard />} />
          </Routes>
        </AdminLayout>
      } />
      
      <Route path="/*" element={
        <AppLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </AppLayout>
      } />
    </Routes>
  )
}
```

## Best Practices
- **Composition**: Layouts als Wrapper-Komponenten
- **Responsive Design**: Mobile-first Approach
- **Accessibility**: Semantic HTML, ARIA labels
- **Performance**: Lazy Loading für große Layouts
- **Flexibility**: Props für verschiedene Layout-Varianten
- **Consistency**: Einheitliche Spacing und Sizing
- **Context**: Layout-State via React Context teilen
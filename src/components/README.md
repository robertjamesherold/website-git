# Components

Wiederverwendbare React-Komponenten.

## Ordnerstruktur
```
components/
├── ui/             # Basis UI-Komponenten
│   ├── Button/
│   ├── Input/
│   ├── Modal/
│   └── Card/
├── forms/          # Form-Komponenten
├── layout/         # Layout-Komponenten
└── common/         # Allgemeine Komponenten
```

## Component Patterns

### Basis Button Component
```jsx
// components/ui/Button/Button.jsx
function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  disabled = false,
  onClick,
  ...props 
}) {
  const baseClasses = 'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2'
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`
  
  return (
    <button 
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
```

### Compound Component Pattern
```jsx
// components/ui/Card/Card.jsx
function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 ${className}`}>
      {children}
    </div>
  )
}

function CardHeader({ children, className = '' }) {
  return (
    <div className={`px-6 py-4 border-b border-gray-200 ${className}`}>
      {children}
    </div>
  )
}

function CardContent({ children, className = '' }) {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  )
}

function CardFooter({ children, className = '' }) {
  return (
    <div className={`px-6 py-4 border-t border-gray-200 ${className}`}>
      {children}
    </div>
  )
}

// Named exports for compound component
Card.Header = CardHeader
Card.Content = CardContent
Card.Footer = CardFooter

export default Card
```

### Verwendung
```jsx
import Button from '@components/ui/Button/Button'
import Card from '@components/ui/Card/Card'

function UserProfile() {
  return (
    <Card>
      <Card.Header>
        <h2 className="text-xl font-semibold">User Profile</h2>
      </Card.Header>
      <Card.Content>
        <p>User information goes here...</p>
      </Card.Content>
      <Card.Footer>
        <Button variant="primary">Save Changes</Button>
        <Button variant="secondary">Cancel</Button>
      </Card.Footer>
    </Card>
  )
}
```

## Component Guidelines

### Props Interface
```jsx
// Gut dokumentierte Props
function Input({ 
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  ...props 
}) {
  // Implementation
}
```

### Forwarding Refs
```jsx
import { forwardRef } from 'react'

const Input = forwardRef(function Input({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={`base-input-classes ${className}`}
      {...props}
    />
  )
})

export default Input
```

## Best Practices
- **Single Responsibility**: Eine Komponente = eine Aufgabe
- **Props Interface**: Klare, typisierte Props
- **Composition over Inheritance**: Kombiniere kleine Komponenten
- **Default Props**: Sinnvolle Standardwerte
- **Forward Refs**: Für Input-Komponenten
- **Accessibility**: ARIA-Attribute für Screen Reader
- **Performance**: React.memo für teure Komponenten

## Naming Conventions
- PascalCase für Komponenten-Namen
- Descriptive Namen (UserCard, nicht Card)
- Ordner pro Komponente mit index.js
- Co-located Tests und Styles
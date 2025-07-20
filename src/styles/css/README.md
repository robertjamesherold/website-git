# CSS Styles

Reguläre CSS-Dateien für einfache Styles und Tailwind-Erweiterungen.

## Ordnerstruktur
```
css/
├── globals.css        # Globale Styles
├── components.css     # Komponenten-Styles  
├── utilities.css      # Custom Utility-Classes
├── animations.css     # CSS Animationen
├── print.css         # Print-Styles
└── legacy.css        # Legacy Browser Support
```

## CSS-Dateien & Verwendung

### Global Styles
```css
/* css/globals.css */

/* CSS Custom Properties (CSS Variables) */
:root {
  --font-family-primary: 'Inter', system-ui, sans-serif;
  --font-family-mono: 'JetBrains Mono', monospace;
  
  --color-primary: #3b82f6;
  --color-primary-dark: #2563eb;
  --color-primary-light: #60a5fa;
  
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  
  --border-radius: 0.5rem;
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  --transition-fast: 0.15s ease;
  --transition-normal: 0.3s ease;
}

/* Global resets und base styles */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  font-family: var(--font-family-primary);
  line-height: 1.6;
  color: #333;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Focus styles für Accessibility */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Skip link für Screen Reader */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--color-primary);
  color: white;
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 1000;
}

.skip-link:focus {
  top: 6px;
}
```

### Component Styles
```css
/* css/components.css */

/* Button Komponente */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm) var(--spacing-md);
  border: none;
  border-radius: var(--border-radius);
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all var(--transition-fast);
  font-family: inherit;
}

.btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Button Variants */
.btn--primary {
  background-color: var(--color-primary);
  color: white;
}

.btn--primary:hover:not(:disabled) {
  background-color: var(--color-primary-dark);
  transform: translateY(-1px);
}

.btn--secondary {
  background-color: #f3f4f6;
  color: #374151;
}

.btn--secondary:hover:not(:disabled) {
  background-color: #e5e7eb;
}

/* Button Sizes */
.btn--sm {
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: 0.875rem;
}

.btn--lg {
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: 1.125rem;
}

/* Card Komponente */
.card {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  border: 1px solid #e5e7eb;
  overflow: hidden;
}

.card__header {
  padding: var(--spacing-lg);
  border-bottom: 1px solid #e5e7eb;
  background-color: #f9fafb;
}

.card__title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
}

.card__content {
  padding: var(--spacing-lg);
}

.card__footer {
  padding: var(--spacing-lg);
  border-top: 1px solid #e5e7eb;
  background-color: #f9fafb;
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-sm);
}

/* Input Komponente */
.input {
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid #d1d5db;
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: border-color var(--transition-fast);
  background-color: white;
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.input:disabled {
  background-color: #f3f4f6;
  cursor: not-allowed;
}

.input--error {
  border-color: #ef4444;
}

.input--error:focus {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}
```

### Utility Classes
```css
/* css/utilities.css */

/* Layout Utilities */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.flex {
  display: flex;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
}

/* Spacing Utilities */
.mt-xs { margin-top: var(--spacing-xs); }
.mt-sm { margin-top: var(--spacing-sm); }
.mt-md { margin-top: var(--spacing-md); }
.mt-lg { margin-top: var(--spacing-lg); }

.mb-xs { margin-bottom: var(--spacing-xs); }
.mb-sm { margin-bottom: var(--spacing-sm); }
.mb-md { margin-bottom: var(--spacing-md); }
.mb-lg { margin-bottom: var(--spacing-lg); }

.p-xs { padding: var(--spacing-xs); }
.p-sm { padding: var(--spacing-sm); }
.p-md { padding: var(--spacing-md); }
.p-lg { padding: var(--spacing-lg); }

/* Text Utilities */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.text-xs { font-size: 0.75rem; }
.text-sm { font-size: 0.875rem; }
.text-base { font-size: 1rem; }
.text-lg { font-size: 1.125rem; }
.text-xl { font-size: 1.25rem; }
.text-2xl { font-size: 1.5rem; }

.font-light { font-weight: 300; }
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }

/* Color Utilities */
.text-primary { color: var(--color-primary); }
.text-gray { color: #6b7280; }
.text-dark { color: #111827; }
.text-success { color: #10b981; }
.text-warning { color: #f59e0b; }
.text-error { color: #ef4444; }

.bg-primary { background-color: var(--color-primary); }
.bg-light { background-color: #f9fafb; }
.bg-white { background-color: white; }

/* Visibility Utilities */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.hidden { display: none; }
.block { display: block; }
.inline { display: inline; }
.inline-block { display: inline-block; }

/* Responsive Utilities */
@media (max-width: 768px) {
  .hide-mobile { display: none; }
  .grid-3 { grid-template-columns: 1fr; }
  .grid-2 { grid-template-columns: 1fr; }
}

@media (min-width: 769px) {
  .hide-desktop { display: none; }
}
```

### Animations
```css
/* css/animations.css */

/* Keyframe Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    transform: translate3d(0, -8px, 0);
  }
  70% {
    transform: translate3d(0, -4px, 0);
  }
  90% {
    transform: translate3d(0, -2px, 0);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Animation Classes */
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

.animate-slide-in {
  animation: slideInRight 0.3s ease-out;
}

.animate-bounce {
  animation: bounce 1s infinite;
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Transition Classes */
.transition-all {
  transition: all var(--transition-normal);
}

.transition-colors {
  transition: color var(--transition-fast), background-color var(--transition-fast);
}

.transition-transform {
  transition: transform var(--transition-fast);
}

/* Hover Effects */
.hover-lift {
  transition: transform var(--transition-fast);
}

.hover-lift:hover {
  transform: translateY(-2px);
}

.hover-scale {
  transition: transform var(--transition-fast);
}

.hover-scale:hover {
  transform: scale(1.05);
}

/* Loading Animations */
.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid #f3f4f6;
  border-top: 2px solid var(--color-primary);
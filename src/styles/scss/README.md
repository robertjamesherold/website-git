# SCSS Styles

SASS/SCSS Dateien für erweiterte Styling-Funktionen.

## Ordnerstruktur
```
scss/
├── _variables.scss    # Variablen (automatisch importiert)
├── _mixins.scss      # Mixins (automatisch importiert)
├── _functions.scss   # Custom Functions
├── components.scss   # Komponenten-Styles
├── layout.scss       # Layout-Styles  
├── utilities.scss    # Utility-Classes
└── themes.scss       # Theme-Variationen
```

## Automatische Imports
Die `_variables.scss` wird automatisch in jede SCSS-Datei importiert (konfiguriert in vite.config.js).

### Variables verfügbar in allen .scss Dateien:
```scss
// Colors
$primary: #3b82f6;
$secondary: #6b7280;
$success: #10b981;

// Spacing
$spacing-xs: 0.25rem;
$spacing-sm: 0.5rem;
$spacing-md: 1rem;

// Typography
$font-family-sans: 'Inter', sans-serif;
$font-size-base: 1rem;

// Breakpoints
$breakpoint-sm: 640px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
```

## SCSS Features & Examples

### Custom Components
```scss
// scss/components.scss
.custom-button {
  // Variables automatisch verfügbar! 🎉
  background-color: $primary;
  color: $white;
  padding: $spacing-sm $spacing-md;
  border-radius: $border-radius-md;
  font-family: $font-family-sans;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: $primary-dark;
    transform: translateY(-1px);
    box-shadow: $shadow-md;
  }
  
  &:active {
    transform: translateY(0);
  }
  
  // Responsive Design
  @media (min-width: $breakpoint-md) {
    padding: $spacing-md $spacing-lg;
    font-size: $font-size-lg;
  }
  
  // Variants
  &--secondary {
    background-color: $secondary;
    
    &:hover {
      background-color: darken($secondary, 10%);
    }
  }
  
  &--large {
    padding: $spacing-lg $spacing-xl;
    font-size: $font-size-xl;
  }
}

.card {
  background-color: $white;
  border-radius: $border-radius-lg;
  box-shadow: $shadow-sm;
  padding: $spacing-lg;
  border: 1px solid $gray-200;
  
  &__header {
    border-bottom: 1px solid $gray-200;
    padding-bottom: $spacing-md;
    margin-bottom: $spacing-md;
    
    .title {
      font-size: $font-size-xl;
      font-weight: 600;
      color: $gray-900;
      margin: 0;
    }
  }
  
  &__content {
    color: $gray-600;
    line-height: 1.6;
  }
  
  &__footer {
    border-top: 1px solid $gray-200;
    padding-top: $spacing-md;
    margin-top: $spacing-md;
    display: flex;
    justify-content: flex-end;
    gap: $spacing-sm;
  }
}
```

### Custom Mixins
```scss
// scss/_mixins.scss (automatisch verfügbar)

// Responsive breakpoint mixin
@mixin respond-to($breakpoint) {
  @if $breakpoint == mobile {
    @media (max-width: #{$breakpoint-sm - 1px}) { @content; }
  }
  @if $breakpoint == tablet {
    @media (min-width: #{$breakpoint-sm}) and (max-width: #{$breakpoint-lg - 1px}) { @content; }
  }
  @if $breakpoint == desktop {
    @media (min-width: #{$breakpoint-lg}) { @content; }
  }
}

// Button mixin
@mixin button-variant($bg-color, $text-color: $white) {
  background-color: $bg-color;
  color: $text-color;
  border: none;
  padding: $spacing-sm $spacing-md;
  border-radius: $border-radius-md;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: darken($bg-color, 10%);
  }
}

// Flexbox shortcuts
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

// Text utilities
@mixin truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@mixin visually-hidden {
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

// Gradient text
@mixin gradient-text($from: $primary, $to: $success) {
  background: linear-gradient(135deg, $from, $to);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Custom Functions
```scss
// scss/_functions.scss
@function rem($pixels) {
  @return ($pixels / 16px) * 1rem;
}

@function strip-unit($number) {
  @if type-of($number) == 'number' and not unitless($number) {
    @return $number / ($number * 0 + 1);
  }
  @return $number;
}

// Color functions
@function tint($color, $percentage) {
  @return mix(white, $color, $percentage);
}

@function shade($color, $percentage) {
  @return mix(black, $color, $percentage);
}
```

### Utility Classes
```scss
// scss/utilities.scss

// Color utilities
@each $name, $color in (
  'primary': $primary,
  'secondary': $secondary,
  'success': $success,
  'warning': $warning,
  'error': $error
) {
  .text-#{$name} { color: $color; }
  .bg-#{$name} { background-color: $color; }
  .border-#{$name} { border-color: $color; }
}

// Spacing utilities
@each $name, $size in (
  'xs': $spacing-xs,
  'sm': $spacing-sm,
  'md': $spacing-md,
  'lg': $spacing-lg,
  'xl': $spacing-xl
) {
  .m-#{$name} { margin: $size; }
  .mt-#{$name} { margin-top: $size; }
  .mb-#{$name} { margin-bottom: $size; }
  .ml-#{$name} { margin-left: $size; }
  .mr-#{$name} { margin-right: $size; }
  
  .p-#{$name} { padding: $size; }
  .pt-#{$name} { padding-top: $size; }
  .pb-#{$name} { padding-bottom: $size; }
  .pl-#{$name} { padding-left: $size; }
  .pr-#{$name} { padding-right: $size; }
}

// Layout utilities
.flex-center { @include flex-center; }
.flex-between { @include flex-between; }
.truncate { @include truncate; }
.visually-hidden { @include visually-hidden; }

// Typography utilities
.text-gradient { @include gradient-text; }

@each $name, $size in (
  'xs': $font-size-xs,
  'sm': $font-size-sm,
  'base': $font-size-base,
  'lg': $font-size-lg,
  'xl': $font-size-xl,
  '2xl': $font-size-2xl
) {
  .text-#{$name} { font-size: $size; }
}
```

### Theme System
```scss
// scss/themes.scss

// Light theme (default)
:root {
  --color-bg: #{$white};
  --color-text: #{$gray-900};
  --color-border: #{$gray-200};
  --color-shadow: #{rgba($black, 0.1)};
}

// Dark theme
[data-theme="dark"] {
  --color-bg: #{$gray-900};
  --color-text: #{$gray-100};
  --color-border: #{$gray-700};
  --color-shadow: #{rgba($black, 0.3)};
}

// Theme-aware components
.themed-card {
  background-color: var(--color-bg);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  box-shadow: 0 1px 3px var(--color-shadow);
}
```

## Verwendung in React Components

### SCSS Import
```jsx
// components/CustomButton/CustomButton.jsx
import './CustomButton.scss'

function CustomButton({ variant = 'primary', size = 'md', children, ...props }) {
  return (
    <button 
      className={`custom-button custom-button--${variant} custom-button--${size}`}
      {...props}
    >
      {children}
    </button>
  )
}
```

### SCSS Datei für Komponente
```scss
// components/CustomButton/CustomButton.scss

.custom-button {
  // Base styles mit SCSS variables
  @include button-variant($primary);
  font-family: $font-family-sans;
  
  // Variants
  &--primary {
    @include button-variant($primary);
  }
  
  &--secondary {
    @include button-variant($secondary);
  }
  
  &--success {
    @include button-variant($success);
  }
  
  // Sizes
  &--sm {
    padding: $spacing-xs $spacing-sm;
    font-size: $font-size-sm;
  }
  
  &--md {
    padding: $spacing-sm $spacing-md;
    font-size: $font-size-base;
  }
  
  &--lg {
    padding: $spacing-md $spacing-lg;
    font-size: $font-size-lg;
  }
  
  // States
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      transform: none;
    }
  }
  
  // Responsive
  @include respond-to(mobile) {
    font-size: $font-size-sm;
    padding: $spacing-xs $spacing-sm;
  }
}
```

### Global SCSS Import
```jsx
// main.jsx
import './index.css'           // Tailwind
import '@styles/scss/utilities.scss'  // Custom SCSS utilities
import '@styles/scss/components.scss'  // Global components

// App component
```

## SCSS + Tailwind Kombination

### Tailwind mit SCSS erweitern
```scss
// SCSS kann Tailwind ergänzen
.special-button {
  @apply px-4 py-2 rounded-lg font-medium;
  
  // SCSS specific features
  background: linear-gradient(135deg, $primary, $primary-dark);
  box-shadow: 0 4px 14px 0 rgba($primary, 0.39);
  
  &:hover {
    @apply transform -translate-y-1;
    box-shadow: 0 6px 20px 0 rgba($primary, 0.55);
  }
  
  @include respond-to(mobile) {
    @apply px-3 py-1.5 text-sm;
  }
}
```

## Best Practices

### SCSS Organisation
- **Partials**: Verwende `_` Prefix für Partials
- **Imports**: Zentrale Import-Datei für bessere Organisation
- **BEM Methodology**: `.block__element--modifier` naming
- **Variables**: Alle Werte als Variables definieren
- **Mixins**: Wiederverwendbare Patterns als Mixins

### Performance
- **Purge unused CSS**: PurgeCSS entfernt unbenutzte Styles
- **Minimal Nesting**: Max 3-4 Ebenen tief verschachteln
- **Efficient Selectors**: Vermeiden von überspezifischen Selektoren

### Maintainability
- **Consistent Naming**: Klare, beschreibende Klassennamen
- **Documentation**: Kommentare für komplexe Mixins/Functions
- **Modular Structure**: Aufteilen in logische Dateien
- **Version Control**: Git-friendly diffs durch saubere Formatierung
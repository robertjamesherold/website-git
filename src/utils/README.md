# Utils

Helper-Funktionen, Utilities und gemeinsame Logik.

## Ordnerstruktur
```
utils/
├── api.js           # API-Funktionen
├── constants.js     # App-weite Konstanten
├── formatters.js    # Datenformatierung
├── validators.js    # Validierungsfunktionen
├── helpers.js       # Allgemeine Hilfsfunktionen
├── storage.js       # Browser Storage
├── date.js          # Datums-Utilities
└── auth.js          # Authentifizierung
```

## Utility Examples

### API Utilities
```js
// utils/api.js
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

// Generic API client
export const api = {
  baseURL: API_BASE_URL,

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    }

    // Add auth token if available
    const token = localStorage.getItem('auth_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    try {
      const response = await fetch(url, config)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  },

  get(endpoint, params = {}) {
    const searchParams = new URLSearchParams(params)
    const url = searchParams.toString() ? `${endpoint}?${searchParams}` : endpoint
    return this.request(url)
  },

  post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  },

  put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  },

  delete(endpoint) {
    return this.request(endpoint, {
      method: 'DELETE',
    })
  }
}

// Specific API functions
export const userAPI = {
  getAll: () => api.get('/users'),
  getById: (id) => api.get(`/users/${id}`),
  create: (userData) => api.post('/users', userData),
  update: (id, userData) => api.put(`/users/${id}`, userData),
  delete: (id) => api.delete(`/users/${id}`)
}
```

### Data Formatters
```js
// utils/formatters.js

// Currency formatting
export function formatCurrency(amount, currency = 'EUR', locale = 'de-DE') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount)
}

// Number formatting
export function formatNumber(number, options = {}) {
  return new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    ...options,
  }).format(number)
}

// Date formatting
export function formatDate(date, format = 'short') {
  const dateObj = new Date(date)
  
  const formats = {
    short: { day: '2-digit', month: '2-digit', year: 'numeric' },
    long: { day: 'numeric', month: 'long', year: 'numeric' },
    time: { hour: '2-digit', minute: '2-digit' },
    datetime: { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric',
      hour: '2-digit', 
      minute: '2-digit' 
    }
  }

  return new Intl.DateTimeFormat('de-DE', formats[format]).format(dateObj)
}

// Text formatting
export function truncateText(text, maxLength = 100, suffix = '...') {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + suffix
}

export function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}
```

### Validation Utilities
```js
// utils/validators.js

// Email validation
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Password validation
export function validatePassword(password) {
  const minLength = 8
  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasNumbers = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

  return {
    isValid: password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers,
    errors: {
      minLength: password.length < minLength,
      uppercase: !hasUpperCase,
      lowercase: !hasLowerCase,
      numbers: !hasNumbers,
      specialChar: !hasSpecialChar
    }
  }
}

// Phone validation (German format)
export function isValidPhone(phone) {
  const phoneRegex = /^(\+49|0)[1-9]\d{1,14}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

// Form validation helper
export function validateForm(data, rules) {
  const errors = {}

  Object.keys(rules).forEach(field => {
    const value = data[field]
    const rule = rules[field]

    if (rule.required && (!value || value.toString().trim() === '')) {
      errors[field] = 'This field is required'
      return
    }

    if (value && rule.email && !isValidEmail(value)) {
      errors[field] = 'Invalid email format'
    }

    if (value && rule.minLength && value.length < rule.minLength) {
      errors[field] = `Minimum ${rule.minLength} characters required`
    }

    if (value && rule.maxLength && value.length > rule.maxLength) {
      errors[field] = `Maximum ${rule.maxLength} characters allowed`
    }
  })

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}
```

### Storage Utilities
```js
// utils/storage.js

// LocalStorage with JSON support
export const storage = {
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Error saving to localStorage:', error)
    }
  },

  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.error('Error reading from localStorage:', error)
      return defaultValue
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error('Error removing from localStorage:', error)
    }
  },

  clear() {
    try {
      localStorage.clear()
    } catch (error) {
      console.error('Error clearing localStorage:', error)
    }
  }
}

// SessionStorage wrapper
export const sessionStorage = {
  set(key, value) {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Error saving to sessionStorage:', error)
    }
  },

  get(key, defaultValue = null) {
    try {
      const item = window.sessionStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.error('Error reading from sessionStorage:', error)
      return defaultValue
    }
  }
}
```

### General Helpers
```js
// utils/helpers.js

// Async delay function
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Debounce function
export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Throttle function
export function throttle(func, limit) {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Deep clone object
export function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj.getTime())
  if (obj instanceof Array) return obj.map(item => deepClone(item))
  if (typeof obj === 'object') {
    const clonedObj = {}
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key])
      }
    }
    return clonedObj
  }
}

// Generate random ID
export function generateId(length = 8) {
  return Math.random().toString(36).substring(2, length + 2)
}

// Array utilities
export function removeDuplicates(array, key = null) {
  if (key) {
    return array.filter((item, index, self) => 
      index === self.findIndex(t => t[key] === item[key])
    )
  }
  return [...new Set(array)]
}

export function groupBy(array, key) {
  return array.reduce((result, item) => {
    const group = item[key]
    result[group] = result[group] || []
    result[group].push(item)
    return result
  }, {})
}

// URL utilities
export function getQueryParams() {
  return Object.fromEntries(new URLSearchParams(window.location.search))
}

export function updateURL(params) {
  const url = new URL(window.location)
  Object.keys(params).forEach(key => {
    if (params[key] === null || params[key] === '') {
      url.searchParams.delete(key)
    } else {
      url.searchParams.set(key, params[key])
    }
  })
  window.history.pushState({}, '', url)
}
```

### Constants
```js
// utils/constants.js

// App constants
export const APP_NAME = 'MyApp'
export const APP_VERSION = '1.0.0'

// API endpoints
export const API_ENDPOINTS = {
  USERS: '/users',
  PRODUCTS: '/products',
  ORDERS: '/orders',
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REGISTER: '/auth/register'
  }
}

// Local storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_PREFERENCES: 'user_preferences',
  CART_ITEMS: 'cart_items'
}

// Form validation messages
export const VALIDATION_MESSAGES = {
  REQUIRED: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  PASSWORD_TOO_SHORT: 'Password must be at least 8 characters',
  PASSWORDS_DONT_MATCH: 'Passwords do not match'
}

// HTTP status codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}
```

## Usage Examples

```jsx
// In a component
import { api, userAPI } from '@utils/api'
import { formatCurrency, formatDate } from '@utils/formatters'
import { storage } from '@utils/storage'
import { validateForm } from '@utils/validators'

function UserComponent() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    // Using API utility
    userAPI.getAll().then(setUsers)
    
    // Using storage utility
    const preferences = storage.get('user_preferences', {})
  }, [])

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Joined: {formatDate(user.createdAt, 'long')}</p>
          <p>Balance: {formatCurrency(user.balance)}</p>
        </div>
      ))}
    </div>
  )
}
```

## Best Practices
- **Pure Functions**: Keine Seiteneffekte in Utility-Funktionen
- **Error Handling**: Graceful error handling für alle Utilities
- **Documentation**: JSDoc für komplexere Funktionen
- **Testing**: Unit tests für alle Utilities
- **Tree Shaking**: Named exports für bessere Bundle-Optimierung
- **TypeScript**: Type definitions für bessere DX
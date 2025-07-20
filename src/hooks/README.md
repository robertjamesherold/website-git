# Custom Hooks

Wiederverwendbare React Hooks für Logik-Abstraktion.

## Ordnerstruktur
```
hooks/
├── useLocalStorage.js  # Browser Storage
├── useApi.js          # API Calls
├── useDebounce.js     # Performance
├── useToggle.js       # UI State
├── useClickOutside.js # Event Handling
└── useMediaQuery.js   # Responsive
```

## Hook Examples

### useLocalStorage
```jsx
// hooks/useLocalStorage.js
import { useState, useEffect } from 'react'

export function useLocalStorage(key, initialValue) {
  // State für den aktuellen Wert
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  // Wrapper-Funktion für setValue
  const setValue = (value) => {
    try {
      // Funktion oder direkter Wert
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue]
}

// Usage
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current theme: {theme}
    </button>
  )
}
```

### useDebounce
```jsx
// hooks/useDebounce.js
import { useState, useEffect } from 'react'

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

// Usage
function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  useEffect(() => {
    if (debouncedSearchTerm) {
      // API Call nur nach 300ms ohne weitere Eingabe
      searchAPI(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm])

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  )
}
```

### useApi
```jsx
// hooks/useApi.js
import { useState, useEffect } from 'react'

export function useApi(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (url) {
      fetchData()
    }
  }, [url])

  return { data, loading, error }
}

// Usage
function UserProfile({ userId }) {
  const { data: user, loading, error } = useApi(`/api/users/${userId}`)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!user) return <div>No user found</div>

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  )
}
```

### useToggle
```jsx
// hooks/useToggle.js
import { useState, useCallback } from 'react'

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue)

  const toggle = useCallback(() => {
    setValue(prev => !prev)
  }, [])

  const setTrue = useCallback(() => setValue(true), [])
  const setFalse = useCallback(() => setValue(false), [])

  return { value, toggle, setTrue, setFalse, setValue }
}

// Usage
function Modal() {
  const { value: isOpen, toggle, setFalse } = useToggle()

  return (
    <>
      <button onClick={toggle}>Open Modal</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={setFalse}>Close</button>
            <p>Modal Content</p>
          </div>
        </div>
      )}
    </>
  )
}
```

### useClickOutside
```jsx
// hooks/useClickOutside.js
import { useEffect, useRef } from 'react'

export function useClickOutside(callback) {
  const ref = useRef()

  useEffect(() => {
    function handleClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [callback])

  return ref
}

// Usage
function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useClickOutside(() => setIsOpen(false))

  return (
    <div ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)}>
        Toggle Dropdown
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <a href="#">Option 1</a>
          <a href="#">Option 2</a>
        </div>
      )}
    </div>
  )
}
```

## Hook Guidelines

### Rules of Hooks
- Nur in Function Components oder anderen Hooks aufrufen
- Immer an der obersten Ebene aufrufen
- Nicht in Schleifen, Bedingungen oder nested Functions

### Best Practices
- **Descriptive Namen**: `useUserProfile`, nicht `useData`
- **Single Responsibility**: Ein Hook = eine Aufgabe
- **Return Objects**: Für mehrere Werte `return { data, loading, error }`
- **Cleanup**: useEffect cleanup für Event Listener, Timeouts
- **Dependencies**: Korrekte Dependency Arrays
- **Error Handling**: Graceful error handling
- **TypeScript**: Type definitions für bessere DX

### Testing Hooks
```jsx
// Mit @testing-library/react-hooks
import { renderHook, act } from '@testing-library/react-hooks'
import { useToggle } from './useToggle'

test('useToggle should toggle value', () => {
  const { result } = renderHook(() => useToggle())

  expect(result.current.value).toBe(false)

  act(() => {
    result.current.toggle()
  })

  expect(result.current.value).toBe(true)
})
```
import styles from './_TextInput.module.scss'
import { useState } from 'react'

export function TextInput({
  className = '',
  label = '',
  inputName = '',
  required = false }) {
  
  const [value, setValue] = useState('');
  const placeholder = (label) => {
    if (label === 'Vorname' || label === 'Nachname') { 
      return `Hier ${label}n eingeben`;
    } else {
      return `Hier ${label} eingeben`;
    }
  }
  
  return (
    <div className={`${styles.textInputContainer} ${className}`}>
      <label className={styles.textInputLabel}>{label}
        <input
          name={inputName}
          type="text"
          value={value}
          placeholder={placeholder(label)}
          className={styles.textInputField}
          required={required}
          onChange={e => setValue(e.target.value)} // Placeholder for change handler
        />
        </label>
      </div>
  )
}
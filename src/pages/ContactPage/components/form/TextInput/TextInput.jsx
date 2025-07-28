import styles from './_TextInput.module.scss'
import { useState } from 'react'

export function TextInput({
  label = '',
  inputName = '',
  className = ''
}) {

  const [value, setValue] = useState('')
  const place = (inputName) => {
    return `${inputName} eingeben`;
  } 

  return (
     <div className={`${styles.textInputContainer} ${className}`}>
       <label className={styles.textInputLabel}>{label}
         <input
          name={inputName}
           type="text"
           value={value}
          placeholder={place(inputName)}
           className={styles.textInputField}
           required = 'true'
           onChange={e => setValue(e.target.value)} // Placeholder for change handler
         />
         </label>
       </div>
  )
}
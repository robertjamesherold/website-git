import styles from './_TextArea.module.scss'
import { useState } from 'react'

export function TextArea({
  label = '',
  inputName = '',
  className = ''
}) {

  const [value, setValue] = useState('')
  const place = (inputName) => {
    return `Hier deine ${inputName} eingeben`;
  } 

  return (
     <div className={`${styles.textAreaContainer} ${className}`}>
       <label className={styles.textAreaLabel}>{label}
         <input
          name={inputName}
           type="text"
           value={value}
          placeholder={place(inputName)}
           className={styles.textAreaField}
           required = 'true'
           onChange={e => setValue(e.target.value)} // Placeholder for change handler
         />
         </label>
       </div>
  )
}
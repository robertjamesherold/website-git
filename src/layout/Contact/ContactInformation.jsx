import { Children } from 'react';
import styles from './ContactInformation.module.css'


export function ContactInformation({ title = '', svg = '', children
}) {
    return (
        <div className={styles.contactInformation} >
            <div className={styles.contactContainer}>
               <h2 className={styles.contactTitle}>{title}</h2>
                
               <p className={styles.contactText}>{children}</p>
            </div>
        </div>
    );
}
import styles from './_FormCard.module.scss';

// Fallback - die ursprüngliche Komponente (vereinfacht)
export function FormCard ({ children}) {
    return (
        <div className={styles.formCard}>
        <div className={styles.formCardHeader}>Kontaktformular</div>
            <div className={styles.formCardContent}>
                {children}
            </div>
        </div>
     
    );
};
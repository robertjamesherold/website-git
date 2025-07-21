import styles from './_FormWrapper.module.scss';

function FormWrapper({ children, className, title, description, icon, gridColumn, showIcon = true }) {
    return (
        <div className={`${styles.formWrapper} ${styles[className]} ${styles[gridColumn]}`}>
            {showIcon && <div className={styles.Icon}>{icon}</div>}
            <div className={styles.Content}>
                <div className={styles.title}>{title}</div>
                <div className={styles.Text}>{description}</div>
                {children}
            </div>
        </div>
    );
}

export default FormWrapper;
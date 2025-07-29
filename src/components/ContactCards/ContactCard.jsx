import styles from './_ContactCards.module.scss';

// Basis Komponente
const BaseWrapper = ({ children, layout = 'flex', className = '' }) => {
    const wrapperClass = layout === 'flex' ? styles.formWrapperFlex : styles.formWrapperBlock;
    return (
        <div className={`${wrapperClass} ${className ? styles[className] : ''}`}>
            {children}
        </div>
    );
};

// Für Formulare mit Icon und Text
export const FormWithIcon = ({ icon, title, text, children, href, direction = 'row' }) => {
    const childrenClass = direction === 'row' ? styles.flexRow : styles.flexColumn;
    
    return (
        <BaseWrapper>
            {icon && <div className={styles.icon}>{icon}</div>}
            <div className={styles.content}>
                {title && <div className={styles.title}>{title}</div>}
                {text && (
                    <div className={styles.textWrapper}>
                        {href ? 
                            <a href={href} className={styles.text}>{text}</a> : 
                            <div className={styles.text}>{text}</div>
                        }
                    </div>
                )}
                {children && <div className={childrenClass}>{children}</div>}
            </div>
        </BaseWrapper>
    );
};

// Für einfache Formulare ohne Icon
export const SimpleForm = ({ title, text, children, direction = 'row' }) => {
    const childrenClass = direction === 'row' ? styles.flexRow : styles.flexColumn;
    
    return (
        <BaseWrapper>
            <div className={styles.content}>
                {title && <div className={styles.title}>{title}</div>}
                {text && <div className={styles.text}>{text}</div>}
                {children && <div className={childrenClass}>{children}</div>}
            </div>
        </BaseWrapper>
    );
};

// Für Text mit Link
export const TextWithLink = ({ title, text, href, children }) => (
    <BaseWrapper>
        <div className={styles.content}>
            {title && <div className={styles.title}>{title}</div>}
            {text && <a href={href} className={styles.text}>{text}</a>}
            {children}
        </div>
    </BaseWrapper>
);

// Fallback - die ursprüngliche Komponente (vereinfacht)
export const FormWrapper = ({ 
    children, title, text, textTwo, icon, href, 
    layout = 'flex', direction = 'row', className = '' 
}) => {
    const wrapperClass = layout === 'flex' ? styles.formWrapperFlex : styles.formWrapperBlock;
    const childrenClass = direction === 'row' ? styles.flexRow : styles.flexColumn;
    
    return (
        <div className={`${wrapperClass} ${className ? styles[className] : ''}`}>
            {icon && <div className={styles.icon}>{icon}</div>}
            <div className={styles.content}>
                {title && <div className={styles.title}>{title}</div>}
                {(text || textTwo) && (
                    <div className={styles.textWrapper}>
                        {text && (href ? <a href={href} className={styles.text}>{text}</a> : <div className={styles.text}>{text}</div>)}
                        {textTwo && <div className={styles.text}>{textTwo}</div>}
                    </div>
                )}
                {children && <div className={childrenClass}>{children}</div>}
            </div>
        </div>
    );
};
import styles from './_FormWrapper.module.scss';

function FormWrapper({ 
    children,
    title = '',
    text = '',
    textTwo = '',
    icon = '',
    showIcon = true,
    showTitle = true,
    showText = true,
    showTextTwo = false,
    showRow = true,
    showFlex = true,
    showA = false,
    href = '',
    className = '',
    }) {
    return (
        <div className={`${showFlex ? styles.formWrapperFlex : styles.formWrapperBlock} ${styles[className]}`}>
            {showIcon && <div className={styles.icon}>{icon}</div>}
            <div className={styles.content}>
                {showTitle && <div className={styles.title}>{title}</div>}
                <div className={styles.textWrapper}>
                {showText && <>{!showA ? <div className={styles.text}>{text}</div> : <a href={href} className={styles.text}>{text}</a>}</>}
                {showTextTwo && <div className={styles.text}>{textTwo}</div>}
                </div>
               {showRow && <div className={styles.flexRow}>{children}</div>}
               {!showRow && <div className={styles.flexColumn}>{children}</div>}
            </div>
        </div>
    );
}

export {FormWrapper};
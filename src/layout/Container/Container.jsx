import styles from './_Container.module.scss'

export function Container({ children }) {
    return (
        <div className={styles.container}>
        {children}
        </div>
    )
    }
 

export function InContainer({ children }) {
    return (
        <div className={styles.inContainer}>
        {children}
        </div>
    )
    }
 
export function ScrollContainer({ children }) {
    return (
        <div className={styles.ScrollContainer}>
        {children}
        </div>
    )
    }
 
import styles from './_GridContainer.module.scss'

export function GridContainer({ children }) {
    return (
        <div className={ styles.gridcontainer }>
        {children}
        </div>
    );
    }
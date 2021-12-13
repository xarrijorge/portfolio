import styles from './styles/movingButton.module.css'

const MovingBorderButton = ({ label }: { label: string }): JSX.Element => {
    return (
        <button className={`homeNavLink ${styles.movingButton}`}>
            <span className={styles.borderLine}>{label}</span>
        </button>
    )
}

export default MovingBorderButton

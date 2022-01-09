import { Link } from 'react-router-dom'
import styles from '../styles/movingButton.module.css'

const MovingBorderButton = ({ label }: { label: string }): JSX.Element => {
    return (
        <Link to={label}>
            <span className={`homeNavLink ${styles.movingButton}`}>
                <span className={styles.borderLine}>{label}</span>
            </span>
        </Link>
    )
}

export default MovingBorderButton

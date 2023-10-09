import styles from './Films.module.scss'
import Film from '../../feautures/film/Film'

const Films = () => {
    return (
        <div className={styles.films}>
            <Film />
            <Film />
            <Film />
            <Film />
        </div>
    )
}

export default Films
import styles from './Film.module.scss'
import img from '../../assets/film.png'

const Film = () => {
    return (
        <div className={styles.film}>
            <div className={styles.poster}>
                <img className={styles.posterImage} src={img} alt="" />
                <p className={styles.rating}>6.70</p>
            </div>
            <h3 className={styles.filmName}>Побег из Претории</h3>
            <p className={styles.genre}>Триллер</p>
        </div>
    )
}

export default Film
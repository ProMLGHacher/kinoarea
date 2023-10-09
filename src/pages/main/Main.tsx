import TopBackgroundImage from '../../shared/TopBackgroundImage/TopBackgroundImage'
import styles from './Main.module.scss'
import img from '../../assets/back-joker.png'
import { classNames } from '../../shared/classNames/classNames'
import Films from '../../widgets/films/Films'
import Header from '../../widgets/header/Header'

const Main = () => {
    return (
        <TopBackgroundImage
            className={classNames(styles.main, {}, ['container'])}
            img={img}
        >
            <Header />
            <div className={styles.category}>
                <h3 className={styles.title}>Сейчас в кино</h3>
                <div className={styles.divider} />
                <div className={styles.filters}>
                    <button className={styles.filter}>Все</button>
                    <button className={styles.filter}>Боевики</button>
                    <button className={styles.filter}>Приключения</button>
                    <button className={styles.filter}>Комедии</button>
                    <button className={styles.filter}>Фантастика</button>
                    <button className={styles.filter}>Триллеры</button>
                    <button className={styles.filter}>Драма</button>
                </div>
            </div>
            <Films />
        </TopBackgroundImage>
    )
}

export default Main
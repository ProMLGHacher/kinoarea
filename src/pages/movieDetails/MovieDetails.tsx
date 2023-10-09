import { useParams } from 'react-router-dom';
import styles from './MovieDetails.module.scss'
import TopBackgroundImage from '../../shared/TopBackgroundImage/TopBackgroundImage';
import { classNames } from '../../shared/classNames/classNames';
import img from '../../assets/back-joker.png'
import Header from '../../widgets/header/Header';
import film from '../../assets/film.png'
import play from '../../assets/play.svg'

const MovieDetails = () => {

  const { id } = useParams();

  return (
    <TopBackgroundImage
      className={classNames(styles.main, {}, [])}
      img={img}
    >
      <Header className='container' />
      <div className={classNames(styles.film, {}, ['smContainer'])}>
        <div className={styles.card}>
          <img className={styles.filmCover} src={film} alt="" />
          <div className={styles.filmCardInfo}>
            <div className={styles.nav}>
              <p className={styles.disableNav}>Главная</p>
              <p className={styles.disableNav}>{'>'}</p>
              <p className={styles.disableNav}>Фильмы</p>
              <p className={styles.disableNav}>{'>'}</p>
              <p>Побег из Претории</p>
            </div>
            <h1 className={styles.filmName}>Побег из Претории</h1>
            <div className={styles.underName}>
              <h3 className={styles.orogonalFilmName}>Escape from Pretoria</h3>
              <p className={styles.addToFavorites}>В избранное</p>
            </div>
            <div className={styles.rating}>
              <svg viewBox="0 0 36 36" className={styles.circularChart}>
                <path className={styles.circleBg}
                  d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className={styles.circle}
                  stroke-dasharray="4, 100"
                  d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="21" className={styles.percentage}>8.70</text>
              </svg>
              <p>Kinoarea</p>
            </div>
            <p className={styles.description}>Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.</p>
            <button className={styles.playButton}>
              <img src={play} alt="" />
              <p>Смотреть трейлер</p>
            </button>
          </div>
        </div>
      </div>
    </TopBackgroundImage>
  )
}

export default MovieDetails
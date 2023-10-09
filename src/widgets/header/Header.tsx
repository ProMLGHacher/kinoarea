import styles from './Header.module.scss'
import logo from '../../assets/logo.svg'
import { classNames } from '../../shared/classNames/classNames'

interface HeaderProps {
  className?: string
}

const Header = (props: HeaderProps) => {
  return (
    <header className={classNames(styles.header, {}, [props.className])}>
        <img className={styles.logo} src={logo} alt="logo" />
        <nav className={styles.navigation}>
          <a className={styles.navItem} href="#">Афиша</a>
          <a className={styles.navItem} href="#">Медиа</a>
          <a className={styles.navItem} href="#">Фильмы</a>
          <a className={styles.navItem} href="#">Актёры</a>
          <a className={styles.navItem} href="#">Новости</a>
          <a className={styles.navItem} href="#">Подборки</a>
          <a className={styles.navItem} href="#">Категории</a>
        </nav>
      </header>
  )
}

export default Header
import { ReactNode } from "react"
import { createPortal } from "react-dom"
import styles from './TopBackgroundImage.module.scss'

interface TopBackgroundImageProps {
    img?: string,
    children?: ReactNode,
    className?: string
}

const TopBackgroundImage = (props: TopBackgroundImageProps) => {
    return (
        <>
            {createPortal(
                <img className={styles.topBackgroundImage} src={props.img} alt="background-image" />,
                document.body
            )}
            <div className={props.className}>
                {props.children}
            </div>
        </>
    )
}

export default TopBackgroundImage
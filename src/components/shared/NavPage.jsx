import { Link } from "react-router-dom"
import styles from '../homePage/mainHome.module.css'

export const NavPage = ({ navigateTo, content }) => {
    return (
        <nav className="w-full">
            <Link to= { navigateTo } className={styles.link}> { content } </Link>
        </nav>
    )
}
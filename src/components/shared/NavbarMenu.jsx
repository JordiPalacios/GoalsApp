import { NavPage } from "./NavPage"
import styles from '../homePage/mainHome.module.css'

export const NavbarMenu = () => {
    return (
        <aside className={styles.aside}>
            <NavPage 
            navigateTo={'/'} 
            content={
                <>
                    <img src="public/icons/list.svg" alt="List" className={styles.icon}/>
                    <span className={styles.text}> Goals List </span>
                </>
                } 
            />
            <NavPage 
            navigateTo={'/create-goal'} 
            content={
                <>
                    <img src="public/icons/plus.svg" alt="Plus" className={styles.icon}/>
                    <span className={styles.text}> Create Goal </span>
                </>
                } 
            />
        </aside>
    )
}
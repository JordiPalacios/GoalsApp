import { NavPage } from "./NavPage"
import styles from '../homePage/mainHome.module.css'

export const NavbarMenu = () => {
    return (
        <aside className={styles.aside}>
            <div className={styles.navItemsContainer}>
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
            </div>
            <div className={styles.rrssContainer}>
                <a href="https://www.linkedin.com/in/jordi-palacios-g%C3%B3mez-529046164" target="_blank" rel="noreferrer">
                    <img src="public/icons/linkedin.svg" alt="LinkedIn" className={styles.icon}/>
                </a>
                <a href="https://www.instagram.com/jordi_code?igsh=MXRvbmtiYmhheHRiZw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">
                    <img src="public/icons/instagram.svg" alt="Instagram" className={styles.icon}/>
                </a>
            </div>
        </aside>
    )
}
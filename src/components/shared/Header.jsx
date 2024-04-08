import { NavPage } from "./NavPage"
import "../shared/styles/index.js"
import styles from './styles/header.module.css'

export const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.logoContent}>
                <img src="public/icons/codeB.svg" alt="rocket" className={styles.logo}/>
                <a href="/" className={styles.title}> Goals App </a>
            </div>
            <nav>         
                <NavPage 
                    navigateTo={'/users-page'} 
                    content={ 
                        <img src="public/icons/user.svg" alt="userLogIn" className={styles.icon}/> 
                    }
                />      
            </nav>
        </header>
    )
}
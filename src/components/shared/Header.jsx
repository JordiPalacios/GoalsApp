import { NavPage } from "./NavPage"
import "../shared/styles/index.js"
import styles from './styles/header.module.css'
import { useWorkingMode } from "../../hooks/useWorkingMode.jsx"
import { useContext } from "react"
import { MenuContext } from "../../context/MenuContext.jsx"

export const Header = () => {
    const workingMode = useWorkingMode()
    const [ menuOpen, action ] = useContext(MenuContext)

    const handleToggleMenu = () => {
        action('toggle')
    }

    return (
        <header className={styles.headerContainer}>
            {
                workingMode === 'Mobile' 
                ?
                <button onClick={handleToggleMenu}>  
                    {menuOpen 
                    ?
                    <img src="/public/icons/cross.svg" alt="crossSVG" className={styles.icon}/>
                    :
                    <img src="/public/icons/menu-scale.svg" alt="menuScaleSVG" className={styles.icon}/>
                    }
                </button>
                :
                <>
                </>
            }
            <div className={styles.logoContent}>
                <img src="/public/icons/codeB.svg" alt="rocket" className={styles.logo}/>
                <a href="/" className={styles.title}> Goals App </a>
            </div>
            <nav>         
                <NavPage 
                    navigateTo={'/users-page'} 
                    content={ 
                        <img src="/public/icons/user.svg" alt="userLogIn" className={styles.icon}/> 
                    }
                />      
            </nav>
        </header>
    )
}
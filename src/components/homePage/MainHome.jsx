import { NavbarMenu } from "../shared/NavbarMenu"
import styles from './mainHome.module.css'

export const MainHome = ( {children} ) => {
    return (
        <div className={styles.mainHomeContainer}>
            <NavbarMenu />
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}
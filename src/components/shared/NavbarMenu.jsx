import { NavPage } from "./NavPage"
import { IconText } from "./IconText"
import styles from '../homePage/mainHome.module.css'

export const NavbarMenu = () => {
    return (
        <aside className={styles.aside}>
            <div className= "w-full">
                <NavPage 
                navigateTo={'/'} 
                content={
                    <IconText icon = {"public/icons/list.svg"} iconAlt = {"HomeSVG"} text={"Home"} children = {styles.icon}/>
                } 
                />
                <NavPage 
                navigateTo={'/create-goal'} 
                content={
                    <IconText icon = {"public/icons/plus.svg"} iconAlt = {"PlusSVG"} text={"Create Goal"} children = {styles.icon}/>
                } 
                />
            </div>
            <div className={styles.rrssContainer}>
                <a href="https://www.linkedin.com/in/jordi-palacios-g%C3%B3mez-529046164" target="_blank" rel="noreferrer" className={styles.rrssContent}>
                    <IconText icon = {"public/icons/linkedin.svg"} iconAlt = {"LinkedInSVG"} text={<small>Jordi Palacios</small>} children = {styles.icon}/>
                </a>
                <a href="https://www.instagram.com/jordi_code?igsh=MXRvbmtiYmhheHRiZw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className={styles.rrssContent}>
                    <IconText icon = {"public/icons/instagram.svg"} iconAlt = {"InstagramSVG"} text={<small>@JordiCode</small>} children = {styles.icon}/>
                </a>
            </div>
        </aside>
    )
}
import styles from '../homePage/mainHome.module.css'

export const IconText = ({ icon, iconAlt, text }) => {
    return (
        <>
            <img src={icon} alt={iconAlt} className= {styles.icon} />
            <span className={styles.text}>{text}</span>
        </>
    )
}
import { Link } from 'react-router-dom'
import styles from './singleGoal.module.css'

export const SingleGoal = ({ id, details, period, events, icon, iconAlt, goal, timesCompleted }) => {
    
    const handleComepleteGoal = (event) => {
        event.preventDefault()
        event.stopPropagation()
    }

    return (
        <Link to={`/goal/${id}`} className={styles.goalContainer + " card"}>
            <div className='flex items-center'>
                <div className={styles.icon}>
                    <img src={icon} alt={iconAlt} />
                </div>
                <p className='text-xl ml-5 mr-10'> 
                    {events} 
                    <sub className='text-xs text-gray-500 ml-1'> 
                        / {period} 
                    </sub>
                </p>
                <p> {details} </p>
            </div>
            <div className='flex'>
                <div className='relative m-2 mx-5'>
                    <p className='text-center'> {timesCompleted} of {goal} </p>
                    <div className={styles.navbarContainer}>
                        <div className={styles.navbarProgress} 
                        style={{ width: `${Math.round((timesCompleted / goal) * 100)}%`}}>                            
                        </div>
                    </div>
                </div>
                <button 
                onClick={handleComepleteGoal}
                className='button button--gray'>Completed</button>
            </div>
        </Link>
    )
}
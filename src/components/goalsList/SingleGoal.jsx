import { Link } from 'react-router-dom'
import styles from './singleGoal.module.css'
import { useContext } from 'react'
import { GoalContext } from '../../context/GoalContext'
import { useWorkingMode } from '../../hooks'

export const SingleGoal = ({ id, details, period, events, icon, iconAlt, goal, timesCompleted }) => {
    const [,dispatch] = useContext(GoalContext)
    const workingMode = useWorkingMode()
    console.log('Working mode: ', workingMode)
    
    const handleComepleteGoal = (event) => {
        event.preventDefault()
        event.stopPropagation()

        if (timesCompleted < goal) {
            dispatch({ 
                type: 'updateGoal',
                goal: {
                    id: id,
                    timesCompleted: timesCompleted + 1
                }
            })
        }
    }

    return (
        <Link to={`/goal/${id}`} className={styles.goalContainer + " card"}>
            <div className= {workingMode === 'Mobile' ? 'flex flex-col items-center gap-2' : 'flex items-center' } >
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
            <div className={workingMode === 'Mobile' ? 'flex flex-col items-center gap-2' : 'flex' } >
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
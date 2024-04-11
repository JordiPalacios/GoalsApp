import { useState } from "react"
import styles from './newGoal.module.css'

export const GoalDetails = () => {
    const frecuencyGoal = ["day", "week", "month", "year"]
    const iconGoal = [
        "public/icons/apple.svg",
        "public/icons/book.svg",
        "public/icons/codePractice.svg",
        "public/icons/gym.svg",
        "public/icons/headset.svg",
        "public/icons/list.svg",
        "public/icons/running.svg",
        "public/icons/swimming.svg",
        "public/icons/walking.svg",
        "public/icons/yoga.svg"
    ]
    const [selectedIcon, setSelectedIcon] = useState(iconGoal[0])
    const handleChangeIcon = (e) => {
        setSelectedIcon(e.target.value)
    }

    return (
        <div className="card">
            <form className="p-4">
                <label htmlFor="goalDecription" className="label">
                    Describe your goal
                    <input 
                    type="text" 
                    placeholder="e.g Eat healthy for 6 days"  
                    className="input"/>
                </label>
                <label htmlFor="frecuencyGoal" className="label">
                    How often do you want to achive your goal?
                    <div className="flex mb-6">                        
                        <input 
                        type="number"  
                        className="input mr-6"
                        placeholder="e.g 1" />
                        <select name="frecuency" id="frecuency" className="input">
                            {frecuencyGoal.map((frecuency,index) => 
                                <option key={index} value={frecuency}>
                                    {frecuency}
                                </option>)
                            }
                        </select>
                    </div>
                </label>
                <label htmlFor="timesGoalToComplete" className="label">
                    How many times do you want to complete your goal?
                    <input type="number" placeholder="e.g 25" className="input" />
                </label>
                <label htmlFor="deadline" className="label">
                    Do you have a deadline?
                    <input type="date"  className="input" />
                </label>
                <label htmlFor="timesGoalCompleted" className="label">
                    How many times have you completed your goal?
                    <input type="number" placeholder="e.g 0" className="input" />
                </label>
                <label htmlFor="goalIcon" className="label">
                    Choose an icon for your goal
                    <select name="goalIcon" id="icon" onChange={handleChangeIcon} className="input mb-2">
                        {iconGoal.map((icon, index) => 
                            <option key={index} value={icon}>
                                {icon.split('/').pop().split('.')[0].toUpperCase()}
                            </option>)}
                    </select>
                    <div className="inputIcon">
                        <img src={selectedIcon} alt="icon"/>
                    </div>
                </label>

            </form>
            <div className={styles.buttons}>
                <button className="button button--black">Create</button>
                <button className="button button--gray">Cancel</button>
            </div>
        </div>
    )
}
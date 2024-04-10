import { useState } from "react"

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
        <>
            <form action="">
                <label htmlFor="goalDecription">
                    Describe your goal
                    <input type="text" placeholder="e.g Run 5km' "/>
                </label>
                <label htmlFor="frecuencyGoal">
                    How often do you want to achive your goal? <span> e.g Once a week  </span>
                    <div>                        
                        <input type="number" />
                        <select name="frecuency" id="frecuency">
                            {frecuencyGoal.map((frecuency,index) => 
                                <option key={index} value={frecuency}>
                                    {frecuency}
                                </option>)
                            }
                        </select>
                    </div>
                </label>
                <label htmlFor="timesGoalToComplete">
                    How many times do you want to complete your goal?
                    <input type="number" placeholder="e.g 33"/>
                </label>
                <label htmlFor="deadline">
                    Do you have a deadline?
                    <input type="date" />
                </label>
                <label htmlFor="timesGoalCompleted">
                    How many times have you completed your goal?
                    <input type="number" placeholder="e.g 2"/>
                </label>
                <label htmlFor="goalIcon">
                    Choose an icon for your goal
                    <select name="goalIcon" id="icon" onChange={handleChangeIcon}>
                        {iconGoal.map((icon, index) => 
                            <option key={index} value={icon}>
                                {icon.split('/').pop().split('.')[0]}
                            </option>)}
                    </select>
                    <img src={selectedIcon} alt="icon" />
                </label>

            </form>
            <div>
                <button>Create</button>
                <button>Cancel</button>
            </div>
        </>
    )
}
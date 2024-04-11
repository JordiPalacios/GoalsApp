import { useEffect, useState } from "react"
import styles from './newGoal.module.css'
import { useForm, useFrecuency } from "../../hooks"
import iconSVG  from "../../assets/iconsSVG.json"

export const GoalDetails = () => {
    const { form, setForm } = useForm()
    const { details, period, events, icon, iconAlt, goal, goalName, deadline, timesCompleted } = form
    const frecuencyGoal = useFrecuency()

    const [selectedIcon, setSelectedIcon] = useState(iconSVG[0])
    const handleChangeIcon = (e) => {
        setSelectedIcon(e.target.value)
    }
    const handleChange = (event, prop) => {
        setForm(e => ({
            ...e,
            [prop]: event.target.value
        }))
    }
    const handleCreate = () => {
    }

    const handleCancel = () => {
    }

    useEffect(() => {
        //* Para enviar info al backend una vez que se haya completado el formulario
        console.log(form)
    }, [form])

    return (
        <div className="card">
            <form className="p-4">
                <label htmlFor="goalDecription" className="label">
                    Describe your goal
                    <input
                    type="text"
                    placeholder="e.g Eat healthy for 6 days"
                    value={details}
                    onChange={event => handleChange(event, "details")}
                    className="input"/>
                </label>
                <label htmlFor="frecuencyGoal" className="label">
                    How often do you want to achive your goal?
                    <div className="flex mb-6">
                        <input
                        type="number"
                        value={events}
                        className="input mr-6" />
                        <select
                        name="frecuency"
                        id="frecuency"
                        value={period}
                        className="input">
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
                    <input type="number" value={goal} className="input" />
                </label>
                <label htmlFor="deadline" className="label">
                    Do you have a deadline?
                    <input type="date" value={deadline}  className="input" />
                </label>
                <label htmlFor="timesGoalCompleted" className="label">
                    How many times have you completed your goal?
                    <input type="number" value={timesCompleted} className="input" />
                </label>
                <label htmlFor="goalIcon" className="label">
                    Choose an icon for your goal
                    <select name="goalIcon" id="icon" onChange={handleChangeIcon} value={icon} className="input mb-2">
                        {iconSVG.map((icon, index) =>
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
                <button className="button button--black" onClick={handleCreate}>Create</button>
                <button className="button button--gray" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    )
}
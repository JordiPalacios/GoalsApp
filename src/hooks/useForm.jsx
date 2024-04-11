import { useState } from "react"

export const useForm = () => {
    const [ form, setForm ] = useState({
        details: "e.g Eat healthy for 6 days",
        period: "week",
        events: 0,
        icon: "public/icons/apple.svg",
        iconAlt: "appleSVG",
        goal: 7,
        goalName: "Health",
        deadline: "2025-12-31",
        timesCompleted: 0
    })

    return {
        form,
        setForm
    }
}
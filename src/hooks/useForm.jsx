import { useState } from "react"

export const useForm = () => {
    const [ form, setForm ] = useState({
        details: "",
        period: "week",
        events: 0,
        icon: "/public/icons/apple.svg",
        iconAlt: "appleSVG",
        goal: 0,
        goalName: "Health",
        deadline: "2025-12-31",
        timesCompleted: 0
    })

    return {
        form,
        setForm
    }
}
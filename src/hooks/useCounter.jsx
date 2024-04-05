import { useState } from "react"

export const useCounter = (initialValue = 0) => {
    const [value, setValue] = useState(initialValue)

    const increase = () => setValue(value + 1)
    const decrease = () => setValue(value - 1)

    if (value < 0) {
        setValue(0)
    }

    return [ value, increase, decrease ]
}
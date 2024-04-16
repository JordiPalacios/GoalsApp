import { useEffect, useState } from "react"
import { useWindowSize } from "./useWindowSize"

export const useWorkingMode = () => {
    const [workingMode, setWorkingMode] = useState('Mobile')
    const windowSize = useWindowSize()

    useEffect(() => {
        if (windowSize > 1024) {
            setWorkingMode('Desktop')
        } else if (windowSize > 768) {
            setWorkingMode('Tablet')
        } else {
            setWorkingMode('Mobile')
        }
    }, [windowSize])

    return workingMode
}
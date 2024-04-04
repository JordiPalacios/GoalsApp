
export const useIncrease = (increase, currentValue) => {

    if (increase && currentValue > 0) {
        currentValue = currentValue - 1
    }

    if (currentValue === 0) {
        currentValue = 0
    }

    return [currentValue]
}
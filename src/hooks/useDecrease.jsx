
export const useDecrease = (decrease, currentValue) => {

    if (decrease && currentValue > 0) {
        currentValue = currentValue - 1
    }

    if (currentValue === 0) {
        currentValue = 0
    }

    return [currentValue]
}
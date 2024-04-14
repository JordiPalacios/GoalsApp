export const requestGoals = async () => {
    const res = await fetch("/src/assets/apiGoals.json")
    const goals = await res.json()

    return goals
}

export const requestGoal = async () => {
    const res = await fetch("/src/assets/goal.json")
    const goal = await res.json()

    return goal
}

export const createGoal = async () => {
    const res = await fetch("/src/assets/goal.json")
    const  goalCreated = await res.json()

    return goalCreated
}

export const updateGoal = async () => {
    const res = await fetch("/src/assets/goal.json")
    const goalUpdated = await res.json()

    return goalUpdated
}

export const deleteGoal = async () => {
    const res = await fetch("/src/assets/goal.json")
    const goalRemoved = await res.json()

    return goalRemoved.id
}
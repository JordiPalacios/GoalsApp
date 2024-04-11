import { useContext } from "react"
import { SingleGoal } from "./SingleGoal"
import { GoalContext } from "../../context/GoalContext"

export const ListGoal = () => {
    const [ state, dispatch ] = useContext(GoalContext)

    return (
        state.order.map( id => <SingleGoal key={id} {...state.objects[id]} />)
    )
}
import { useContext } from "react"
import { SingleGoal } from "./SingleGoal"
import { GoalContext } from "../../context/GoalContext"
import { Outlet } from "react-router"

export const ListGoal = () => {
    const [ state ] = useContext(GoalContext)

    return (
        <>
            {state.order.map((id) => (
                <SingleGoal key={id} {...state.objects[id]}></SingleGoal>
            ))}
            <Outlet />
        </>

    )
}
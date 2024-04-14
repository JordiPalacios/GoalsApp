import React, { useContext, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { CreateGoal, HomePage, UsersPage } from "./pages"
import { PopUp, requestGoals } from "./components"
import { GoalDetails } from "./components/newGoal/GoalDetails"
import { GoalContext } from "./context/GoalContext"

export const MetasRouter = () => {
    const [ ,dispatch ] = useContext(GoalContext)

    useEffect(() => {
        const fetchGoal = async () => {
            const goals = await requestGoals()
            dispatch({ type: 'setGoals', goals })
        }
        
        fetchGoal()
    }, [dispatch])

    return (
        <Routes>
            <Route path="/" element={<HomePage />}>
                <Route path="/goal/:id" element={
                    <PopUp>
                        <GoalDetails />
                    </PopUp>
                } />
            </Route>
            <Route index element={<HomePage />} />
            <Route path="/create-goal" element={<CreateGoal />} />
            <Route path="/users-page" element={<UsersPage />} />

            <Route path="*" element={<HomePage />} />
        </Routes>
    )
}
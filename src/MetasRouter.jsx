import React from "react"
import { Routes, Route } from "react-router-dom"
import { CreateGoal, HomePage, UsersPage } from "./pages"
import { PopUp } from "./components"
import { GoalDetails } from "./components/newGoal/GoalDetails"

export const MetasRouter = () => {
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
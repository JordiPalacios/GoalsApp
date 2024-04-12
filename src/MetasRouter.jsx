import React from "react"
import { Routes, Route } from "react-router-dom"
import { CreateGoal, HomePage, UsersPage } from "./pages"
import { PopUp } from "./components"

export const MetasRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}>
                <Route path="/goal/:id" element={<PopUp />} />
            </Route>
            <Route index element={<HomePage />} />
            <Route path="/create-goal" element={<CreateGoal />} />
            <Route path="/users-page" element={<UsersPage />} />

            <Route path="*" element={<HomePage />} />
        </Routes>
    )
}
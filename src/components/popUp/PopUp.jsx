import { useContext } from "react";
import { json, useParams } from "react-router"
import { GoalContext } from "../../context/GoalContext";
import { GoalDetails } from "../newGoal/GoalDetails";

export const PopUp = () => {
    const [state, dispatch] = useContext(GoalContext)
    let { id } = useParams();

    return (
        <>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75">
                <div className="flex items-center justify-center w-full h-full">                    
                    <GoalDetails />
                </div>
            </div>
        </>
    )
}
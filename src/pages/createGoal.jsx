import {Header, Footer, MainHome} from "../components"
import { GoalDetails } from "../components/newGoal/GoalDetails"

export const CreateGoal = () => {
    return (
        <>
            <Header />
                <MainHome children={<GoalDetails />} />
            <Footer />
        </>
    )
}
import { Footer, Header, MainHome } from "../components"
import { ListGoal } from "../components/goalsList/ListGoal"
import { GoalDetails } from "../components/newGoal/GoalDetails"

export const HomePage = () => {

    return (
        <>
            <Header />
            <MainHome children={<GoalDetails />} />
            <Footer />
        </>
    )
}
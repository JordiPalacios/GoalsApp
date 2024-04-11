import { Footer, Header, MainHome } from "../components"
import { ListGoal } from "../components/goalsList/ListGoal"


export const HomePage = () => {
    return (
        <>
            <Header />
            <MainHome children={<ListGoal />} />
            <Footer />
        </>
    )
}
import { Footer, HeaderPage, MainHome } from "../components"

export const HomePage = () => {

    return (
        <>
            <HeaderPage />
            <MainHome children={' Test '}/>
            <Footer />
        </>
    )
}
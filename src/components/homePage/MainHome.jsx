import { NavbarMenu } from "../shared/NavbarMenu"
import './mainHome.css'

export const MainHome = ( {children} ) => {
    return (
        <div className="mainHomeContainer">
            <NavbarMenu />
            <main className="main">
                {children}
            </main>
        </div>
    )
}
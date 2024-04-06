import { NavPage } from "./NavPage"
import "./styles/index.js"

export const Header = () => {
    return (
        <header className="headerContainer">
            <div className="logoContent">
                <img src="public/icons/rocket.svg" alt="rocket" className=" mr-2 h-10 w-10"/>
                <a href="/" className="title"> Goals App </a>
            </div>
            <nav className="userContent">         
                <NavPage 
                    navigateTo={'/users-page'} 
                    content={ 
                        <img src="public/icons/user.svg" alt="userLogIn" className="h-6 w-6"/> 
                    }
                />      
            </nav>
        </header>
    )
}
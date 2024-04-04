import { NavPage } from "../components"

export const HomePage = () => {

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavPage navigateTo={'/'} label={'Home'} />
                    </li>
                    <li>
                        <NavPage navigateTo={'/create-goal'} label={'Create Goal'} />
                    </li>
                    <li>
                        <NavPage navigateTo={'/users-page'} label={'LogIn'} />
                    </li>
                </ul>
            </nav>
            <header>                
                <h1>Home Goals App</h1>
            </header>
        </>
    )
}
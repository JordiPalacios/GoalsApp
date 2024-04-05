import { NavPage } from "./NavPage"

export const NavbarMenu = () => {
    return (
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
    )
}
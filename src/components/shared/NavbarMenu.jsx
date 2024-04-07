import { NavPage } from "./NavPage"

export const NavbarMenu = () => {
    return (
        <aside className="aside">
            <NavPage 
            navigateTo={'/'} 
            content={
                <a>
                    <img src="public/icons/list.svg" alt="List" className="icon"/>
                    <span> Goals List </span>
                </a>
                } 
            />
            <NavPage 
            navigateTo={'/'} 
            content={
                <a>
                    <img src="public/icons/plus.svg" alt="Plus" className="icon"/>
                    <span> Create Goal </span>
                </a>
                } 
            />
        </aside>
    )
}
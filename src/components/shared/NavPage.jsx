import { Link } from "react-router-dom"

export const NavPage = ({ navigateTo, content }) => {
    return (
        <nav className="link">
            <Link to= { navigateTo } > { content } </Link>
        </nav>
    )
}
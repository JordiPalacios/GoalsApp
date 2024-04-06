import { Link } from "react-router-dom"

export const NavPage = ({ navigateTo, content }) => {
    return (
        <>
            <Link to= { navigateTo } > { content } </Link>
        </>
    )
}
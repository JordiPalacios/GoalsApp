import { Link } from "react-router-dom"

export const NavPage = ({ navigateTo, label }) => {
    return (
        <>
            <Link to= { navigateTo } > { label } </Link>
        </>
    )
}
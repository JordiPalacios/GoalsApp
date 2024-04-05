import { NavbarMenu } from "../shared/NavbarMenu"

export const MainHome = ( {children} ) => {
    return (
        <>
            <aside>
                <NavbarMenu />
            </aside>
            <main>
                {children}
            </main>
        </>
    )
}
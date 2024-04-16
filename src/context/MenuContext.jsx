import { createContext, useReducer } from "react";

const reducerMenu = (menuOpen, action) => {

    if (action === 'toggle') {
        return !menuOpen
    }

    return menuOpen
}

export const MenuContext = createContext(null)

export const MenuProvider = ({ children }) => {
    const value = useReducer(reducerMenu, false)

    return (
        <MenuContext.Provider value={ value }>
            {children}
        </MenuContext.Provider>
    )
}
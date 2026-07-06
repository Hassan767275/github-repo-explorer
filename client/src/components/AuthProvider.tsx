import { createContext, useState } from "react";
import type { loginContext } from "../type";
import type { ReactNode } from "react";

export const authContext = createContext<loginContext>({ isLoggedIn: false, setIsLoggedIn: () => {}, isSaved: false, setIsSaved: () => {}})

export function AuthProvider({ children }: { children: ReactNode}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isSaved, setIsSaved] = useState(false)

    return (
        <authContext.Provider value={{isLoggedIn, setIsLoggedIn, isSaved, setIsSaved}}>
            {children}
        </authContext.Provider>
    )
}
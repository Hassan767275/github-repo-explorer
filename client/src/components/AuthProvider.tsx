import { createContext, useState } from "react";
import type { loginContext } from "../type";
import type { ReactNode } from "react";

const authContext = createContext<loginContext>({ isLoggedIn: false, setIsLoggedIn: () => {}})

export function AuthProvider({ children }: { children: ReactNode}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <authContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </authContext.Provider>
    )
}
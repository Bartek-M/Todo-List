import React, { useState, useContext, useEffect } from "react"
import { Navigate } from "react-router-dom"

import { contextState } from "/src/types"
import { apiFetch } from "/src/utils"
import { Loading } from "/src/components"


const UserContext = React.createContext<contextState>(null)
export function useUser() { return useContext(UserContext) }

export function UserProvider({ children, redirect }: { children: React.ReactNode, redirect: string }) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        if (user) return

        apiFetch("user/me/", "GET").then((result) => {
            if (!result) return
            let [resp, data] = result

            console.log(resp)

            if (resp.ok) {
                setUser(data)
            } 

            if (!Object.keys(data).length) { setUser(false) }
        })
    }, [])

    console.log(user)

    if (user === null) {
        return (<Loading />)
    }

    return user ? (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    ) : <Navigate to={redirect} />
}
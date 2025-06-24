import React, { useState, useContext, useEffect } from "react"

import { activeContext, activeState } from "/src/types"


const ActiveContext = React.createContext<activeContext>(null)
export function useActive() { return useContext(ActiveContext) }

export function ActiveProvider({ children }: { children: React.ReactNode }) {
    const [active, setActive] = useState<activeState>(null)

    useEffect(() => {
        // get items
    }, [])

    return (
        <ActiveContext.Provider value={[active, setActive]}>
            {children}
        </ActiveContext.Provider>
    )
}
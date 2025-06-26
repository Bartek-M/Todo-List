import React, { useState, useContext, useEffect } from "react";

import { activeContext, activeState } from "/src/types";
import { useUser } from "./userContext";


const ActiveContext = React.createContext<activeContext>(null);
export function useActive() { return useContext(ActiveContext); }

export function ActiveProvider({ children }: { children: React.ReactNode; }) {
    const [user,] = useUser()!;
    const [active, setActive] = useState<activeState>(null);
    if (!user) return;

    useEffect(() => {
        if (!active) {
            let list = user.lists[0];
            setActive({ id: list.id, opened: false });
        }
        // get items
    }, []);

    return (
        <ActiveContext.Provider value={[active, setActive]}>
            {children}
        </ActiveContext.Provider>
    );
}
import React, { useState, useContext, useEffect } from "react";

import { useUser } from "./userContext";
import { activeContext, activeState, contextChildProps } from "/src/types";


const ActiveContext = React.createContext<activeContext>(null);
export function useActive() { return useContext(ActiveContext); }

export function ActiveProvider({ children }: contextChildProps) {
    const [user,] = useUser()!;
    const [active, setActive] = useState<activeState>({ id: user.lists[0].id, index: 0, opened: false });

    useEffect(() => {
    }, []);

    return (
        <ActiveContext.Provider value={[active, setActive]}>
            {children}
        </ActiveContext.Provider>
    );
}
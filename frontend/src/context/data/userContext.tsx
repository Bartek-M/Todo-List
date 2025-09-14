import React, { useState, useContext, useEffect } from "react";

import { Loading } from "/src/components";
import { defaultLists } from "/src/defaults";
import { apiFetch, mergeLists } from "/src/utils";
import { childProps, userContext, userState } from "/src/types";


const UserContext = React.createContext<userContext>(null);
export function useUser() { return useContext(UserContext); }

export function UserProvider({ children }: childProps) {
    const [user, setUser] = useState<userState>(null);

    useEffect(() => {
        if (user) return;

        apiFetch("user/me/", "GET").then((result) => {
            if (!result) return;
            let [resp, data] = result;

            if (resp.ok) {
                data.lists = mergeLists(defaultLists, data.lists);
                return setUser(data);
            }

            setUser(false);
        });
    }, []);

    if (user === null) {
        return (<Loading />);
    }

    return (
        <UserContext.Provider value={[user, setUser] as userContext}>
            {children} 
        </UserContext.Provider>
    );
}
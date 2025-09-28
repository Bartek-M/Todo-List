import React, { Dispatch, SetStateAction, useState, useContext, useEffect } from "react";

import { Loading } from "@/components";
import { defaultLists } from "@/defaults";
import { apiFetch, mergeLists } from "@/utils";
import { childProps, userType } from "@/types";


type userContext = [userType, Dispatch<SetStateAction<userType>>] | null;
type userState = userType | null | false;


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
import { useEffect } from "react";

import { Loading } from "/src/components";
import { apiFetch } from "/src/utils";

export function Logout() {

    useEffect(() => {
        apiFetch("auth/logout/", "GET").then((result) => {
            if (!result) return;
            let [resp, _] = result;

            if (resp.ok) {
                window.location.replace("/login")
            }
        });
    }, []);

    return <Loading />;
}
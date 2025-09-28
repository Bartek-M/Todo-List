import { useEffect } from "react";

import { Loading } from "@/components";
import { apiFetch } from "@/utils";

export function Logout() {

    useEffect(() => {
        apiFetch("auth/logout/", "GET").then((result) => {
            if (!result) return;
            let [resp, _] = result;

            if (resp.ok) {
                window.location.replace("/login");
            }
        });
    }, []);

    return <Loading />;
}
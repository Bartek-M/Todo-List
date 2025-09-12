import { Outlet } from "react-router-dom";

import { useUser } from "/src/context";
import { authRouteProps } from "/src/types";


export function AuthRoute({ mode, redirect, fallback }: authRouteProps) {
    const [user,] = useUser()!;

    const allowed = (mode === "protected" && user) || (mode === "guest" && !user);

    if (!allowed) {
        if (window.location.pathname !== redirect) {
            window.history.replaceState(null, "", redirect);
        }
        return fallback;
    }

    return <Outlet />;
}
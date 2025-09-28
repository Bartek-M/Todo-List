import { Outlet } from "react-router-dom";

import { useUser } from "@/context";
import { authRouteProps } from "@/types";


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
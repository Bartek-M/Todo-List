import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { boolState } from "/src/types";

export function ProtectedRoute({ children, redirect }: { children: any, redirect: string }) {
    const [isAuthorized, setIsAuthorized] = useState<boolState>(null)

    useEffect(() => {
        setIsAuthorized(false)
    })

    if (isAuthorized === null) {
        return <h1>Loading...</h1>
    }

    return isAuthorized ? children : <Navigate to={redirect} />
}
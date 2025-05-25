import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { boolState } from "/src/types";

export function ProtectedRoute({ children, redirect }: { children: any, redirect: string }) {
    const [isAuthorized, setIsAuthorized] = useState<boolState>(null)

    useEffect(() => {
        setIsAuthorized(true)
    })

    if (isAuthorized === null) {
        return <div className="spinner-border my-auto" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }

    return isAuthorized ? children : <Navigate to={redirect} />
}
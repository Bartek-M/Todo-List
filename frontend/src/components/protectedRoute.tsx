import { useState } from "react";

export function ProtectedRoute({ child }: any) {
    const isAuth, setAuth = useState(null)

    return isAuth ? child : <h1>Loading...</h1>;
}
import { Routes } from "react-router-dom";

import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";
import GuestRoutes from "./GuestRoutes";


export function AppRoutes() {
    return (
        <Routes>
            {ProtectedRoutes}
            {GuestRoutes}
            {PublicRoutes}
        </Routes>
    );
};
import { lazy } from "react";
import { Route } from "react-router-dom";

const Logout = lazy(() => import("@/pages/auth").then(module => { return { default: module.Logout }; }));
const NotFound = lazy(() => import("@/pages/errors").then(module => { return { default: module.NotFound }; }));


const PublicRoutes = (
    <>
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
    </>
);

export default PublicRoutes;
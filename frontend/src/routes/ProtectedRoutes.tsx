import { lazy } from "react";
import { Route } from "react-router-dom";

import { AuthRoute } from "@/components";

const Home = lazy(() => import("@/pages/home").then(module => { return { default: module.Home }; }));
const Settings = lazy(() => import("@/pages/settings").then(module => { return { default: module.Settings }; }));
const Welcome = lazy(() => import("@/pages/welcome").then(module => { return { default: module.Welcome }; }));


const ProtectedRoutes = (
    <Route element={<AuthRoute mode="protected" redirect="/" fallback={<Welcome />} />} >
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
    </Route>
);

export default ProtectedRoutes;
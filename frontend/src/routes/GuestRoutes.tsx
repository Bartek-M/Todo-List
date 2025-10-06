import { lazy } from "react";
import { Route } from "react-router-dom";

import { AuthRoute } from "@/components";

const Home = lazy(() => import("@/pages/home").then(module => { return { default: module.Home }; }));
const Pricing = lazy(() => import("@/pages/pricing").then(module => { return { default: module.Pricing }; }));
const Login = lazy(() => import("@/pages/auth").then(module => { return { default: module.Login }; }));
const Register = lazy(() => import("@/pages/auth").then(module => { return { default: module.Register }; }));


const GuestRoutes = (
    <Route element={<AuthRoute mode="guest" redirect="/" fallback={<Home />} />} >
        <Route path="/pricing" element={<Pricing />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
    </Route>
);

export default GuestRoutes;
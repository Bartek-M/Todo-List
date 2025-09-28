import { lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserProvider } from "@/context";
import { AuthRoute } from "./components";


const Home = lazy(() => import("./pages/home").then(module => { return { default: module.Home }; }));
const Settings = lazy(() => import("./pages/settings").then(module => { return { default: module.Settings }; }));

const Welcome = lazy(() => import("./pages/welcome").then(module => { return { default: module.Welcome }; }));
const Pricing = lazy(() => import("./pages/pricing").then(module => { return { default: module.Pricing }; }));

const Login = lazy(() => import("./pages/auth").then(module => { return { default: module.Login }; }));
const Register = lazy(() => import("./pages/auth").then(module => { return { default: module.Register }; }));
const Logout = lazy(() => import("./pages/auth").then(module => { return { default: module.Logout }; }));

const NotFound = lazy(() => import("./pages/errors").then(module => { return { default: module.NotFound }; }));


const root = createRoot(document.getElementById("appMount") as HTMLElement);
root.render(
    <BrowserRouter>
        <UserProvider>
            <Routes>
                <Route element={<AuthRoute mode="protected" redirect="/" fallback={<Welcome />} />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/settings" element={<Settings />} />
                </Route>

                <Route element={<AuthRoute mode="guest" redirect="/" fallback={<Home />} />} >
                    <Route path="/pricing" element={<Pricing />} />
                    
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route path="/logout" element={<Logout />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </UserProvider>
    </BrowserRouter>
);
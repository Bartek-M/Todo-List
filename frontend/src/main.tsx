import { lazy } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

const Home = lazy(() => import("./pages/home").then(module => { return { default: module.Home } }))
const Welcome = lazy(() => import("./pages/welcome").then(module => { return { default: module.Welcome } }))
const NotFound = lazy(() => import("./pages/errors").then(module => { return { default: module.NotFound } }))

const Login = lazy(() => import("./pages/auth").then(module => { return { default: module.Login } }))
const Register = lazy(() => import("./pages/auth").then(module => { return { default: module.Register } }))
const Logout = lazy(() => import("./pages/auth").then(module => { return { default: module.Logout } }))

const root = createRoot(document.getElementById("appMount") as HTMLElement)

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Navigate to="/home" /> } />
            <Route path="/home" element={ <Home redirect="/welcome" /> } />

            <Route path="/welcome" element={<Welcome />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
)
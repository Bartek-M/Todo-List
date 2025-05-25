import { lazy } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ProtectedRoute } from "./components"

const Home = lazy(() => import("./pages/home").then(module => { return { default: module.Home } }))
const Welcome = lazy(() => import("./pages/welcome").then(module => { return { default: module.Welcome } }))
const Login = lazy(() => import("./pages/auth").then(module => { return { default: module.Login } }))
const Register = lazy(() => import("./pages/auth").then(module => { return { default: module.Register } }))
const Logout = lazy(() => import("./pages/auth").then(module => { return { default: module.Register } }))
const NotFound = lazy(() => import("./pages/auth").then(module => { return { default: module.Register } }))

const root = createRoot(document.getElementById("appMount") as HTMLElement)

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={
                <ProtectedRoute redirect="/welcome">
                    <Home />
                </ProtectedRoute>
            } />
            <Route path="/home" element={
                <ProtectedRoute redirect="/login">
                    <Home />
                </ProtectedRoute>
            } />
            <Route path="/welcome" element={<Welcome />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
)
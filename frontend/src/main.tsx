import { lazy } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ProtectedRoute } from "./components"

const Home = lazy(() => import("./pages/home").then(module => { return { default: module.Home } }))
const Settings = lazy(() => import("./pages/settings").then(module => { return { default: module.Settings } }))
const Welcome = lazy(() => import("./pages/welcome").then(module => { return { default: module.Welcome } }))
const Login = lazy(() => import("./pages/auth").then(module => { return { default: module.Login } }))
const Register = lazy(() => import("./pages/auth").then(module => { return { default: module.Register } }))

const root = createRoot(document.getElementById("appMount") as HTMLElement)

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={
                <ProtectedRoute redirect="/welcome">
                    <Home />
                </ProtectedRoute>
            } />
            <Route path="/settings" element={
                <ProtectedRoute redirect="/login">
                    <Settings />
                </ProtectedRoute>
            } />
            <Route path="/home" element={
                <ProtectedRoute redirect="/login">
                    <Settings />
                </ProtectedRoute>
            } />
            <Route path="/welcome" element={<Welcome />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route path="*" element={<h1>404 Not found :(</h1>} />
        </Routes>
    </BrowserRouter>
)
import { lazy } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const Home = lazy(() => import("./pages/home").then(module => { return { default: module.Home } }))
const Login = lazy(() => import("./pages/auth").then(module => { return { default: module.Login } }))
const Register = lazy(() => import("./pages/auth").then(module => { return { default: module.Register } }))

const root = createRoot(document.getElementById("appMount") as HTMLElement)

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h1>404 Not found :(</h1>} />
        </Routes>
    </BrowserRouter>
)
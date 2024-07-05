import { useRef } from "react"
import { NavBase } from "/src/components/"

async function submitLogin(email: HTMLInputElement | null, passw: HTMLInputElement | null) {
    if (!email || !passw) return

    let valEmail = email.value
    let valPassw = passw.value

    await fetch("/api/auth/login/", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            email: valEmail,
            passw: valPassw
        })
    }).then((resp) => console.log(resp)).catch()
}

export function Login() {
    const email = useRef(null)
    const passw = useRef(null)
    const submitBtn = useRef(null)

    return (
        <NavBase>
            <div className="card w-100 mt-auto" style={{ maxWidth: "450px" }}>
                <form className="card-body" onSubmit={(e) => { e.preventDefault(); submitLogin(email.current, passw.current) }}>
                    <h2 className="text-center mb-3">Login</h2>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input ref={email} type="email" className="form-control" required />
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Password</label>
                        <input ref={passw} type="password" className="form-control" required />
                        <div className="form-text">Don't have an account. Create one <a href="/register">here</a>.</div>
                    </div>
                    <button ref={submitBtn} type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </NavBase>
    )
}
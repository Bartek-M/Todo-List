import { useRef } from "react"
import { NavBase } from "/src/components/"
import { apiFetch } from "/src/utils/"


async function submitLogin(login: HTMLInputElement | null, passw: HTMLInputElement | null) {
    if (!login || !passw) return
    
    let valLogin = login.value
    let valPassw = passw.value
    if (!valLogin || !valPassw) return
    
    apiFetch(`auth/login/`, "POST", {
        login_data: valLogin,
        password: valPassw
    }).then((result) => {
        if (!result) return // something went wrong?
        let [resp, data] = result

        if (data.errors) {
            return
        }

        if (resp.ok) {
            console.log("logged in")
        }
    })
}

export function Login() {
    const login = useRef(null)
    const passw = useRef(null)
    const submitBtn = useRef(null)

    return (
        <NavBase>
            <div className="card w-100 mt-auto" style={{ maxWidth: "450px" }}>
                <form className="card-body" onSubmit={(e) => { e.preventDefault(); submitLogin(login.current, passw.current) }}>
                    <h2 className="text-center mb-3">Login to Todo-List</h2>
                    <div className="mb-3">
                        <label className="form-label">Email / Username</label>
                        <input ref={login} type="text" className="form-control" required />
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Password</label>
                        <input ref={passw} type="password" className="form-control" required />
                        <div className="form-text">Don't have an account. Create one <a href="/register">here</a>.</div>
                    </div>
                    <button ref={submitBtn} type="submit" className="btn btn-success w-100">Login</button>
                </form>
            </div>
        </NavBase>
    )
}
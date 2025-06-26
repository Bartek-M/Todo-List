import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { NavBase } from "/src/components/";
import { apiFetch } from "/src/utils/";
import { refInput } from "/src/types";


async function submitLogin(login: refInput, passw: refInput, navigator: any) {
    let valLogin = login?.value;
    let valPassw = passw?.value;
    if (!valLogin || !valPassw) return;

    apiFetch(`auth/login/`, "POST", {
        login_data: valLogin,
        password: valPassw
    }).then((result) => {
        if (!result) return; // something went wrong?
        let [resp, data] = result;

        if (data.errors) {
            return;
        }

        if (resp.ok) {
            navigator("/home");
            console.log("logged in");
        }
    });
}

export function Login() {
    const login = useRef(null);
    const passw = useRef(null);
    const submitBtn = useRef(null);

    const navigator = useNavigate();
    const location = useLocation();
    console.log(location.state?.logout);

    return (
        <NavBase>
            <div className="card w-100 mt-auto" style={{ maxWidth: "450px" }}>
                <form className="card-body" onSubmit={(e) => { e.preventDefault(); submitLogin(login.current, passw.current, navigator); }}>
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
    );
}
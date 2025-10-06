import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { NavBase } from "@/components/";
import { apiFetch } from "@/utils";
import { refInput } from "@/types";


export function Register() {
    const username = useRef(null);
    const email = useRef(null);
    const passw = useRef(null);
    const submitBtn = useRef(null);

    const navigator = useNavigate();

    async function submitRegister(username: refInput, email: refInput, passw: refInput, navigator: any) {
        if (!username || !email || !passw) return;

        let valUsername = username.value;
        let valEmail = email.value;
        let valPassw = passw.value;
        if (!valUsername || !valEmail || !valPassw) return;

        apiFetch("auth/register/", "POST", {
            username: valUsername,
            email: valEmail,
            password: valPassw
        }).then((result) => {
            if (!result) return;
            let [resp, data] = result;

            if (data.errors) {
                return;
            }

            if (resp.ok) {
                navigator("/login");
                console.log("registered");
            }
        });
    }


    return (
        <NavBase>
            <div className="card w-100 mt-auto" style={{ maxWidth: "450px" }}>
                <form className="card-body" onSubmit={(e) => { e.preventDefault(); submitRegister(username.current, email.current, passw.current, navigator); }}>
                    <h2 className="text-center mb-3">Register to Todo-List</h2>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input ref={username} type="name" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input ref={email} type="email" className="form-control" required />
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Password</label>
                        <input ref={passw} type="password" className="form-control" required />
                        <div className="form-text">Already have an account. Login <a href="/login">here</a>.</div>
                    </div>
                    <button ref={submitBtn} type="submit" className="btn btn-success w-100">Continue</button>
                </form>
            </div>
        </NavBase>
    );
}
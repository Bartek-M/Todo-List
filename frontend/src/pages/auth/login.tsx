export function Login() {
    return (
        <>
        <div className="card position-absolute top-50 start-50 translate-middle">
            <form className="card-body" style={{ width: "450px" }}>
                <h2 className="text-center mb-3">Login</h2>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-4">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" />
                    <div className="form-text">Don't have an account. Create one <a href="/register">here</a>.</div>
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
        </div>
        <footer className="position-absolute bottom-0 start-50 translate-middle-x">
            <p className="text-center text-body-secondary mt-3">© 2024 Todo List</p>
        </footer>
        </>
    )
}
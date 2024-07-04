export function Register() {
    return (
        <div className="d-flex flex-column align-items-center h-100 p-2">
            <div className="card w-100 mt-auto" style={{ maxWidth: "450px" }}>
                <form className="card-body">
                    <h2 className="text-center mb-3">Create an account</h2>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="name" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" required />
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" required />
                        <div className="form-text">Already have an account. Login <a href="/login">here</a>.</div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
            <footer className="mt-auto">
                <p className="text-center text-body-secondary m-2">© 2024 Todo List</p>
            </footer>
        </div>
    )
}
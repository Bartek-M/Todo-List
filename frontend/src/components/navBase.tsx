export function NavBase({ children }: any) {
    return (
        <div className="d-flex flex-column align-items-center h-100 p-2">
            <nav className="navbar navbar-expand-sm w-100">
                <div className="container">
                    <a className="navbar-brand fw-bold hidden-link" href="/">Todo List</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                        <div className="navbar-nav">
                            <a className="nav-link" href="/">Home</a>
                            <a className="nav-link" href="https://github.com/Bartek-M/Todo-List" target="_blank">About</a>
                        </div>
                        <div className="navbar-nav align-items-center gap-2">
                            <a className="nav-link" href="/login">Login</a>
                            <a className="nav-link btn border border-dark-subtle py-1" href="/register">Register</a>
                        </div>
                    </div>
                </div>
            </nav>
            {children}
            <footer className="mt-auto">
                <p className="text-center text-body-secondary m-2">© {new Date().getUTCFullYear()} Todo List</p>
            </footer>
        </div>
    )
}
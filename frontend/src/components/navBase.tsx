export function NavBase({ children }: any) {
    return (
        <div className="d-flex flex-column align-items-center h-100 p-2">
            <nav className="navbar navbar-expand-sm w-100">
                <div className="container">
                    <a className="navbar-brand fw-bold hidden-link" href="/">Todo List</a>
                    <button className="navbar-toggler text-body border-0" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </button>
                    <div className="offcanvas offcanvas-end" style={{ "--bs-offcanvas-width": "250px" }} id="offcanvasNavbar">
                        <div className="offcanvas-header pb-0">
                            <a className="navbar-brand fw-bold hidden-link" href="/">Todo List</a>
                            <button className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body justify-content-between">
                            <div className="navbar-nav">
                                <a className="nav-link" href="/home">Home</a>
                                <a className="nav-link" href="https://github.com/Bartek-M/Todo-List" target="_blank">About</a>
                            </div>
                            <div className="navbar-nav align-items-center gap-2">
                                <a className="nav-link text-center w-100" href="/login">Login</a>
                                <a className="nav-link btn border border-dark-subtle py-1 w-100" href="/register">Register</a>
                            </div>
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
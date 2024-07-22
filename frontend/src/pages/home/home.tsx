import "/assets/css/home.css"

export function Home() {
    return (
        <>
            <nav className="navbar p-0 w-100">
                <div className="container-fluid justify-content-between align-items-center">
                    <a className="navbar-brand fs-3 fw-bold hidden-link" href="/">Todo List</a>
                    <div className="dropdown">
                        <button className="btn p-0 rounded-circle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img className="avatar-small" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" href="/settings">Settings</a></li>
                            <li><a className="dropdown-item link-danger" href="/logout">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
import { useState } from "react"

import { ListBlock, ListModal } from "."
import { Modal } from "/src/components"

import "/assets/css/home.css"

export function Home() {
    const [listModal, setListModal] = useState(false)

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
            <ListBlock />
            <button className="btn position-absolute rounded-circle p-0" style={{ bottom: "10px", right: "20px" }} id="btn-add" onClick={() => setListModal(true)}>
                <svg width="36" height="36" fill="var(--bs-secondary-color)" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
            </button>
            <Modal setHidden={() => setListModal(false)}>
                {listModal && <ListModal />}
            </Modal>
        </>
    )
}
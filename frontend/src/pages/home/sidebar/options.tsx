import { SVG, Link } from "/src/components";
import { useModal } from "/src/context";


export function Options() {
    const [, setModal] = useModal()!;

    return (
        <div className="controls-wrapper justify-content-between mt-auto">
            <button className="btn border-0 text-body-secondary" onClick={() => setModal("newList")}>
                <SVG paths={["M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"]} />
                {"\u00A0"} New List
            </button>
            <div className="btn-group dropup">
                <button className="btn border-0" data-bs-toggle="dropdown">
                    <SVG paths={["M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"]} />
                </button>
                <ul className="dropdown-menu">
                    <Link className="dropdown-item" to="/settings">Settings</Link>
                    <Link className="dropdown-item" to="/logout">Sign Out</Link>
                </ul>
            </div>
        </div>
    );
} 
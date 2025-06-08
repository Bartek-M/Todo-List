import { Items, Options } from "."
import { SVG } from "/src/components"

export function Main() {
    return (
        <div className="d-flex flex-column h-100" id="list-view">
            <button className="navbar-toggler border-0 position-absolute" id="main-close" onClick={() => { document.getElementById("sidebar")?.classList.remove("hidden") }}>
                <SVG paths={["M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"]} width={"24"} height={"24"} />
            </button>
            <Items />
            <Options />
        </div>
    )
}
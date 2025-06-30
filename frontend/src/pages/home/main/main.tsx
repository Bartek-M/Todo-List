import { useActive, useUser } from "/src/context";

import { ItemsList, Options } from ".";
import { SVG, ListTitle } from "/src/components";

export function Main() {
    const [user,] = useUser()!;
    const [active, setActive] = useActive()!;
    if (!user) return

    let todoList = user.lists.find((l) => l.id == active?.id);

    if (!active || !todoList) {
        return (
            <div className="position-relative">
                <div className="position-absolute top-50 start-50 translate-middle">
                    <SVG paths={["M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5"]} fill="#f5f6f8" width="100%" height="100%" />
                </div>
            </div>
        );
    }

    return (
        <div className="d-flex flex-column h-100" id="list-view">
            <button className="navbar-toggler border-0 position-absolute" id="main-close" onClick={() => setActive({ ...active, opened: false })}>
                <SVG paths={["M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"]} width="24" height="24" />
            </button>
            <div className="p-5 mt-3 mx-2">
                <h3 className="mb-4">
                    <ListTitle todoList={todoList} />
                </h3>
                <ItemsList todoList={todoList} />
            </div>
            <Options />
        </div>
    );
}
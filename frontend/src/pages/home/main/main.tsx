import { useActive, useTodoLists } from "@/context";

import { NewItemButton, ItemsList } from ".";
import { SVG, ListTitle } from "@/components";
import { defaultIconFill } from "@/defaults";


export function Main() {
    const [todoLists,] = useTodoLists()!;
    const [active, setActive] = useActive()!;

    const todoList = todoLists[active.index];

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
        <div id="list-view">
            <button className="navbar-toggler border-0 position-absolute" id="main-close" onClick={() => setActive({ ...active, opened: false })}>
                <SVG paths={["M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"]} width="24" height="24" />
            </button>
            <div className="p-5 mt-3 mx-2">
                <h3 className="ps-3 mb-5 d-flex flex-wrap text-break">
                    <ListTitle todoList={todoList} />
                    <button className="ms-auto btn border-0">
                        <SVG paths={["M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"]} fill={defaultIconFill} width="1.5em" height="1.5em" />
                    </button>
                </h3>
                <ItemsList todoList={todoList} />
            </div>
            <div className="position-fixed bottom-0 end-0 pe-5 pb-4 me-2">
                <NewItemButton todoList={todoList} />
            </div>
        </div>
    );
}
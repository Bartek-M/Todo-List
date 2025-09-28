import { useActive, useTodoLists } from "@/context";

import { DragList } from "@/components";
import { ListItem } from "./listItem";
import { dragListProps } from "@/types";
import { apiFetch } from "@/utils";


export function Lists() {
    const [todoLists, setTodoLists] = useTodoLists()!;
    const [active, setActive] = useActive()!;

    const handleDragEnd: dragListProps["dragEnd"] = (newLists, updatedItems) => {
        setTodoLists(newLists);
        if (updatedItems[active.id] !== undefined) setActive((prev) => ({ ...prev, index: updatedItems[active.id] }));

        apiFetch("list/reorder/", "PATCH", {
            updated_items: updatedItems
        }).then((result) => {
            if (!result) return; // something went wrong?
            let [resp, data] = result;

            if (data.errors) {
                return;
            }

            if (!resp.ok) {
                return; // something went wrong?
            }
        });
    };

    return (
        <div className="list-group py-4 px-3" style={{ gap: "1px" }}>
            <DragList Element={ListItem} title="sidebar" list={todoLists} dragEnd={handleDragEnd} />
        </div>
    );
}
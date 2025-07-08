import { useEffect, } from "react";

import { Item } from "./item";
import { DragList } from "/src/components";
import { useTodoLists } from "/src/context";
import { apiFetch } from "/src/utils";
import { dragListProps, listComponentProps, todoListState } from "/src/types";


export function ItemsList({ todoList, editing, setEditing }: listComponentProps) {
    const [, setTodoLists] = useTodoLists()!;

    const handleDragEnd: dragListProps["dragEnd"] = (newLists, updatedItems) => {
        setTodoLists((prev: todoListState) => {
            return prev.map(list =>
                list.id === todoList.id
                    ? { ...list, items: newLists }
                    : list
            );
        });

        console.log(updatedItems);
    };

    useEffect(() => {
        setEditing(null);
        if (todoList.items?.length) {
            if (todoList.items[0].id.startsWith("new")) {
                setTodoLists((prev: todoListState) => {
                    return prev.map(list =>
                        list.id === todoList.id
                            ? { ...list, items: list.items?.slice(1) }
                            : list
                    );
                });
            }
            return;
        };

        apiFetch(`list/${todoList.id}/items/`, "GET").then((result) => {
            if (!result) return;
            let [resp, data] = result;

            if (resp.ok && data.items) {
                setTodoLists((prev: todoListState) => {
                    return prev.map(list =>
                        list.id === todoList.id
                            ? { ...list, items: data.items }
                            : list
                    );
                });
            }
        });
    }, [todoList.id]);

    if (!todoList.items || !todoList.items.length) return (
        <h3 className="text-center" style={{ color: "#f5f6f8" }}>No items</h3>
    );

    return (
        <ul className="list-group">
            <DragList Element={Item} title="items" list={todoList.items} dragEnd={handleDragEnd} listProps={{ editing: editing, setEditing: setEditing }} />
        </ul>
    );
}
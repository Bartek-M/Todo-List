import { useEffect, useState } from "react";

import { Item } from "./item";
import { DragList } from "/src/components";
import { useTodoLists } from "/src/context";
import { apiFetch } from "/src/utils";
import { dragListProps, stringState, todoListType } from "/src/types";


export function ItemsList({ todoList }: { todoList: todoListType; }) {
    const [, setTodoLists] = useTodoLists()!;
    const [editing, setEditing] = useState<stringState>(null);

    const handleDragEnd: dragListProps["dragEnd"] = (newLists, updatedItems) => {
        setTodoLists((prev) => {
            return prev.map(list =>
                list.id === todoList.id
                    ? { ...list, items: newLists }
                    : list
            );
        });

        console.log(updatedItems);
    };

    useEffect(() => {
        setEditing("2");
        if (todoList.items) return;

        apiFetch(`list/${todoList.id}/items/`, "GET").then((result) => {
            if (!result) return;
            let [resp, data] = result;

            if (resp.ok && data.items) {
                setTodoLists((prev) => {
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
        <ul className="list-group" key={ todoList.id }>
            <DragList Element={Item} title="items" list={todoList.items} dragEnd={handleDragEnd} listProps={{ editing: editing, setEditing: setEditing }} />
        </ul>
    );
}
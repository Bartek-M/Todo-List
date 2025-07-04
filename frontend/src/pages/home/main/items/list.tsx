import { useEffect, } from "react";

import { Item } from "./item";
import { DragList } from "/src/components";
import { useUser } from "/src/context";
import { apiFetch } from "/src/utils";
import { userType, dragListProps, listComponentProps } from "/src/types";


export function ItemsList({ todoList, editing, setEditing }: listComponentProps) {
    const [, setUser] = useUser()!;

    const handleDragEnd: dragListProps["dragEnd"] = (newLists, updatedItems) => {
        setUser((prev: userType) => {
            const lists = prev.lists.map(list =>
                list.id === todoList.id
                    ? { ...list, items: newLists }
                    : list
            );
            return { ...prev, lists };
        });

        console.log(updatedItems);
    };

    useEffect(() => {
        setEditing(null);
        if (todoList.items) {
            if (todoList.items[0].id == "new") {
                setUser((prev: userType) => {
                    const lists = prev.lists.map(list =>
                        list.id === todoList.id
                            ? { ...list, items: list.items?.slice(1) }
                            : list
                    );
                    return { ...prev, lists };
                });
            }
            return;
        };

        apiFetch(`list/${todoList.id}/items/`, "GET").then((result) => {
            if (!result) return;
            let [resp, data] = result;

            if (resp.ok && data.items) {
                setUser((prev: userType) => {
                    const lists = prev.lists.map(list =>
                        list.id === todoList.id
                            ? { ...list, items: data.items }
                            : list
                    );
                    return { ...prev, lists };
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
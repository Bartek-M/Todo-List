import { useEffect } from "react";

import { Item } from "./item"
import { DragList } from "/src/components";
import { useUser } from "/src/context";
import { apiFetch } from "/src/utils";
import { todoListType, userType } from "/src/types";


export function ItemsList({ todoList }: { todoList: todoListType; }) {
    const [_, setUser] = useUser()!;

    useEffect(() => {
        if (todoList.items) return;

        apiFetch(`list/${todoList.id}/items/`, "GET").then((result) => {
            if (!result) return;
            let [resp, data] = result;

            if (resp.ok && data.items) {
                setUser((user: userType) => {
                    let currentList = user.lists.find(i => i.id == todoList.id)
                    if (currentList) currentList.items = data.items

                    return { ...user };
                });
            }
        });
    }, [todoList.id]);

    if (!todoList.items || !todoList.items.length) return (
        <h3 className="text-center" style={{ color: "#f5f6f8" }}>No items</h3>
    );

    return (
        <div className="list-group">
            <DragList Element={Item} title="items" list={todoList.items} dragEnd={(newLists, updated_items) => { console.log(newLists, updated_items) }} />
        </div>
    );
}
import { useEffect, useRef } from "react";
import { ItemTitle, ItemNotes, ItemOptions } from ".";
import { itemType, userType } from "/src/types";
import { getDragProps } from "/src/utils";
import { useUser } from "/src/context";


export function Item({ item, dragOverlay = false, listProps = {} }: { item: itemType, dragOverlay?: any, listProps: any; }) {
    const [_, setUser] = useUser()!;
    const titleRef = useRef<HTMLInputElement>(null);
    const { editing, setEditing } = listProps;
    const dragProps = getDragProps({ id: item.id, isDraggable: !editing, dragOverlay: dragOverlay });

    useEffect(() => {
        if (item.id == "new") setEditing(item.id);
    }, [item.id]);

    const currentEditing = editing == item.id || item.id == "new";

    return (
        <li
            className={`checklist-item ${dragOverlay ? "dragged-item" : ""} ${currentEditing ? "editing shadow-sm" : ""}`}
            onClick={(e) => {
                let element = (e.target as HTMLElement);
                if (element.matches("input") || element.matches("div[contenteditable]") || element.matches("button")) return;

                setEditing(currentEditing ? null : item.id);
                if (editing == "new") {
                    setUser((prev: userType) => {
                        const lists = prev.lists.map(list =>
                            list.id === item.todo_list
                                ? { ...list, items: list.items?.slice(1) }
                                : list
                        );
                        return { ...prev, lists };
                    });
                }
            }}
            {...dragProps}
        >
            <div className="hstack gap-2">
                <input className="form-check-input m-0" type="checkbox" id={`check-${item.id}-${dragOverlay}`} defaultChecked={item.ticked} />
                {currentEditing
                    ? <input className="border-0 outline-0 p-0" defaultValue={item.text} placeholder="Title" type="text" ref={titleRef} />
                    : <ItemTitle item={item} />
                }
            </div>
            {currentEditing && (
                <>
                    <ItemNotes item={item} />
                    <ItemOptions />
                </>
            )}
        </li>
    );
}
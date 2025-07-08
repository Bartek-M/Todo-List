import { useEffect, useRef } from "react";
import { useTodoLists } from "/src/context";

import { ItemTitle, ItemNotes, ItemOptions } from ".";
import { dragItemProps, todoListState } from "/src/types";
import { getDragProps } from "/src/utils";


export function Item({ item, dragOverlay = false, listProps = {} }: dragItemProps ) {
    const [_, setTodoLists] = useTodoLists()!;

    const { editing, setEditing } = listProps;
    const dragProps = getDragProps({ id: item.id, isDraggable: !editing, dragOverlay: dragOverlay });
    
    const titleRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (item.id.startsWith("new")) setEditing(item.id);
    }, [item.id]);

    const currentEditing = editing == item.id || item.id.startsWith("new");

    return (
        <li
            className={`checklist-item ${dragOverlay ? "dragged-item" : ""} ${currentEditing ? "editing shadow-sm" : ""}`}
            onClick={(e) => {
                let element = (e.target as HTMLElement);
                if (element.matches("input") || element.matches("div[contenteditable]") || element.matches("button")) return;

                setEditing(currentEditing ? null : item.id);
                if (editing && editing.startsWith("new")) {
                    setTodoLists((prev: todoListState) => {
                        return prev.map(list =>
                            list.id === item.todo_list
                                ? { ...list, items: list.items?.slice(1) }
                                : list
                        );
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
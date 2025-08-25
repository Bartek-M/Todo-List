import { useEffect, useRef } from "react";
import { useTodoLists } from "/src/context";

import { ItemTitle, ItemNotes, ItemOptions } from ".";
import { dragItemProps } from "/src/types";
import { getDragProps } from "/src/utils";


export function Item({ item, dragOverlay = false, listProps = {} }: dragItemProps) {
    const [_, setTodoLists] = useTodoLists()!;

    const { editing, setEditing } = listProps;
    const dragProps = getDragProps({ id: item.id, isDraggable: !editing, dragOverlay: dragOverlay });
    const editingCurrent = editing == item.id;

    const titleRef = useRef<HTMLInputElement>(null);
    const notesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (editing == item.id) return;
        if (item.id.startsWith("new")) setEditing(item.id);
    }, []);

    useEffect(() => {
        if (!editingCurrent) return;

        const titleInput = titleRef.current;
        const notesInput = notesRef.current;

        return () => {
            const editedItem = {
                text: titleInput?.value ?? "",
                notes: notesInput?.innerText ?? ""
            };

            for (const [key, value] of Object.entries(editedItem)) {
                console.log(key, value)
            }

            if (!editedItem.text) {
                setTodoLists((prev) =>
                    prev.map((list) =>
                        list.id == item.todo_list
                            ? { ...list, items: list.items?.filter(i => i.id !== item.id) }
                            : list
                    ));
            }

        };
    }, [editingCurrent]);

    return (
        <li
            className={`checklist-item ${dragOverlay ? "dragged-item" : ""} ${editingCurrent ? "editing shadow-sm" : ""}`}
            onClick={(e) => {
                let element = (e.target as HTMLElement);
                console.log(element)
                if (!element.matches("li") && !element.matches("div:not([contenteditable])")) return;

                setEditing(editingCurrent ? null : item.id);
            }}
            {...dragProps}
        >
            <div className="hstack gap-2">
                <input className="form-check-input m-0" type="checkbox" id={`check-${item.id}-${dragOverlay}`} defaultChecked={item.ticked} />
                {editingCurrent
                    ? <input className="border-0 outline-0 p-0 text-break" defaultValue={item.text} placeholder="Title" type="text" name="title" ref={titleRef} />
                    : <ItemTitle item={item} />
                }
            </div>
            {editingCurrent && (
                <>
                    <ItemNotes item={item} notesRef={notesRef} />
                    <ItemOptions item={item} />
                </>
            )}
        </li>
    );
}
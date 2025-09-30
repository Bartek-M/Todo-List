import { useEffect, useRef } from "react";
import { useTodoLists } from "@/context";

import { ItemTitle, ItemOptions } from ".";
import { TextInput } from "@/components";
import { dragItemProps } from "@/types";
import { getDragProps } from "@/utils";


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
                text: titleInput?.innerText ?? "",
                notes: notesInput?.innerText ?? ""
            };

            for (const [key, value] of Object.entries(editedItem)) {
                console.log(key, value);
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
                if (!editingCurrent && !element.matches('input[type="checkbox"]')) return setEditing(item.id);
                if (editingCurrent && element.matches("li, [data-close]")) return setEditing(null);
            }}
            {...dragProps}
        >
            <div className="d-flex align-items-start gap-2">
                <input className="form-check-input" type="checkbox" id={`check-${item.id}-${dragOverlay}`} defaultChecked={item.ticked} />
                <ItemTitle item={item} isEdited={editingCurrent} titleRef={titleRef} />
            </div>
            {editingCurrent && (
                <>
                    <TextInput
                        value={item.notes}
                        placeholder="Notes"
                        innerRef={notesRef}
                        styles={{ color: "var(--bs-secondary)", margin: "0 0.5rem 1rem 1.5rem" }}
                        multiline={true}
                        charLimit={512}
                    />
                    <ItemOptions item={item} />
                </>
            )}
        </li>
    );
}
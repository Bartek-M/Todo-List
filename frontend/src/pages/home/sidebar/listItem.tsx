import { useActive } from "/src/context";

import { DragItem, ListTitle } from "/src/components/";
import { todoListType } from "/src/types/";


export function ListItem({ item, dragOverlay = false }: { item: todoListType, dragOverlay?: any; }) {
    const [active, setActive] = useActive()!;

    return (
        <DragItem
            id={item.id}
            elementClass={`btn list-group-item-action fw-medium border-0 ${item.extraClass || ""} ${active?.id == item.id ? "active" : ""}`}
            elementOnClick={() => setActive({ id: item.id, opened: true })}
            isDraggable={item.type != 0}
            dragOverlay={dragOverlay}
        >
            <ListTitle todoList={item} />
        </DragItem>
    );
}
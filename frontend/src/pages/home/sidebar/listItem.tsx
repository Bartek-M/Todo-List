import { useActive } from "/src/context";

import { ListTitle } from "/src/components/";
import { dragItemProps } from "/src/types/";
import { getDragProps } from "/src/utils";


export function ListItem({ item, index, dragOverlay = false }: dragItemProps) {
    const [active, setActive] = useActive()!;
    const props = getDragProps({ id: item.id, isDraggable: item.type != 0, dragOverlay: dragOverlay });

    return (
        <button
            className={`btn list-group-item-action fw-medium border-0 ${item.extraClass || ""} ${active?.id == item.id ? "active" : ""}  ${dragOverlay ? "dragged-item" : ""}`}
            onClick={() => setActive({ id: item.id, index: index, opened: true })}
            {...props}
        >
            <ListTitle todoList={item} />
        </button>
    );
}
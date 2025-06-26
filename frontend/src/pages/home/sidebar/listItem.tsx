import { useActive } from "/src/context";

import { DragItem, SVG } from "/src/components/";
import { todoListType } from "/src/types/";
import { defaultIcon } from "/src/utils";


export function ListItem({ item, dragOverlay = false }: { item: todoListType, dragOverlay?: any; }) {
    const [active, setActive] = useActive()!;

    const paths = item.svgPath || defaultIcon.svgPath;
    const fill = item.fill || defaultIcon.fill;

    return (
        <DragItem
            id={item.id}
            elementClass={`btn list-group-item-action fw-medium border-0 ${item.extraClass || ""} ${active?.id == item.id ? "active" : ""}`}
            elementOnClick={() => setActive({ id: item.id, opened: true })}
            isDraggable={item.type != 0}
            dragOverlay={dragOverlay}
        >
            <SVG paths={paths} fill={fill} />
            {"\u00A0"} {item.name}
        </DragItem>
    );
}
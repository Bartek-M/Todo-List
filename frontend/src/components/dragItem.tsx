import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { dragItemProps } from "/src/types";


export function DragItem({ id, children, elementClass, elementOnClick, isDraggable = true, dragOverlay = false }: dragItemProps) {
    const { listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: id });

    const style: React.CSSProperties = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging && !dragOverlay ? 0.5 : undefined,
        ...(dragOverlay && {
            position: "fixed",
            zIndex: 999,
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            cursor: "grab"
        })
    };

    return (
        <button
            className={elementClass}
            onClick={elementOnClick}
            {...(isDraggable && {
                ref: setNodeRef,
                style: style,
                ...listeners
            })}
        >
            {children}
        </button>
    );
}
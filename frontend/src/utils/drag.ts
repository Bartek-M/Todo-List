import { useSortable } from "@dnd-kit/sortable";

import { dragItemProps } from "/src/types";


export function getDragProps({ id, isDraggable = true, dragOverlay = false }: dragItemProps) {
    const { listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: id });
    
    const style: React.CSSProperties = {
        transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
        transition,
        opacity: isDragging && !dragOverlay ? 0.4 : undefined,
    };

    if (!isDraggable) return {};

    return {
        ref: setNodeRef,
        style: style,
        ...listeners
    }
}
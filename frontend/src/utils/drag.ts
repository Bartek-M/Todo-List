import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { dragItemProps } from "/src/types";


export function getDragProps({ id, isDraggable = true, dragOverlay = false }: dragItemProps) {
    const { listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: id });
    
    const style: React.CSSProperties = {
        transform: CSS.Transform.toString(transform),
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
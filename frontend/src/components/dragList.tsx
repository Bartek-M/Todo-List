import { useState } from "react";
import { DndContext, DragEndEvent, DragOverlay, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

import { dragListProps } from "/src/types"


function handleDragEnd(event: DragEndEvent, list: any[], dragEnd: dragListProps["dragEnd"]) {
    const { active, over } = event
    let dragged = active
    if (!over || !dragged || dragged.id == over.id) return

    let draggedIndex = list.findIndex(item => item.id == dragged.id)
    let overIndex = list.findIndex(item => item.id == over.id)

    dragEnd(draggedIndex, overIndex)
}


export function DragList({ Element, title, list, dragEnd }: dragListProps) {
    const [activeId, setActiveId] = useState<string | null>(null);
    const sensors = useSensors(
        useSensor(MouseSensor, { activationConstraint: { delay: 250, distance: 3, tolerance: 5 } }),
        useSensor(TouchSensor, { activationConstraint: { delay: 250, distance: 3, tolerance: 5 } })
    )

    return (
        <DndContext
            onDragStart={(e) => setActiveId(e.active.id as string)}
            onDragEnd={(e) => handleDragEnd(e, list, dragEnd)}
            onDragCancel={() => setActiveId(null)}
            sensors={sensors}
        >
            <SortableContext items={list} >
                {list.map((item) => (
                    <Element key={title + item.id} item={item} />
                ))}
            </SortableContext>
            <DragOverlay>
                {activeId ? (
                    <Element
                        item={list.find((l: any) => l.id === activeId)!}
                        index={-1}
                        dragOverlay
                    />
                ) : null}
            </DragOverlay>
        </DndContext>
    );
}
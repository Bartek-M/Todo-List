import { useState } from "react";
import { DndContext, DragEndEvent, DragOverlay, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";

import { updatedDragItems, dragEndFunc } from "@/types";


interface dragListProps {
    Element: any;
    title: string;
    list: any[];
    dragEnd: dragEndFunc;
    listProps?: any;
}

export function DragList({ Element, title, list, dragEnd, listProps = {} }: dragListProps) {
    const [activeId, setActiveId] = useState<string | null>(null);
    const sensors = useSensors(
        useSensor(MouseSensor, { activationConstraint: { delay: 250, distance: 3, tolerance: 5 } }),
        useSensor(TouchSensor, { activationConstraint: { delay: 250, distance: 3, tolerance: 5 } })
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        let dragged = active;
        if (!over || !dragged || dragged.id == over.id) return;

        let draggedIndex = list.findIndex(item => item.id == dragged.id);
        let overIndex = list.findIndex(item => item.id == over.id);

        const newLists = arrayMove(list, draggedIndex, overIndex);
        let updatedItems: updatedDragItems = {};
        for (let i = Math.min(draggedIndex, overIndex); i < newLists.length; i++) {
            updatedItems[newLists[i].id] = i;
        }

        if (!Object.keys(updatedItems).length) return;
        dragEnd(newLists, updatedItems);
    };


    return (
        <DndContext
            onDragStart={(e) => setActiveId(e.active.id as string)}
            onDragEnd={(e) => handleDragEnd(e)}
            onDragCancel={() => setActiveId(null)}
            sensors={sensors}
        >
            <SortableContext items={list} >
                {list.map((item, index) => (
                    <Element key={title + item.id} item={item} index={index} listProps={listProps} />
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
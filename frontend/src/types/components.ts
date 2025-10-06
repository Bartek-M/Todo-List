export type dragItemProps = {
    item: any,
    index: number,
    dragOverlay?: boolean,
    listProps: any
}

export type updatedDragItems = { [id: string]: number; };
export type dragEndFunc = (newList: any[], updatedItems: updatedDragItems) => void;

export type childProps = {
    children: React.ReactNode, 
}
export type svgProps = {
    paths: string[];
    fill?: string;
    fillRule?: "nonzero" | "evenodd";
    width?: string;
    height?: string;
}

export type dragItemProps = {
    id: string;
    children: any;
    elementClass: string;
    elementOnClick: any;
    isDraggable?: boolean;
    dragOverlay?: boolean;
}

export type dragListProps = {
    Element: any;
    title: string;
    list: any[];
    dragEnd: (dragged: number, over: number) => void;
}
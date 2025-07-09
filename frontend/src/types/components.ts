import { ReactNode } from "react";
import { userType } from ".";

export type svgProps = {
    paths: string[];
    fill?: string;
    fillRule?: "nonzero" | "evenodd";
    width?: string;
    height?: string;
}

export type dragProps = {
    id: string;
    isDraggable?: boolean;
    dragOverlay?: boolean;
}

export type dragListProps = {
    Element: any;
    title: string;
    list: any[];
    dragEnd: (newList: any[], updatedItems: updatedItemsType) => void;
    listProps?: any;
}

export type dragItemProps = {
    item: any,
    index: number,
    dragOverlay?: boolean,
    listProps: any
}

export type updatedItemsType = { [id: string]: number; };

export type contextChildProps = {
    children: ReactNode, 
    user: userType
}
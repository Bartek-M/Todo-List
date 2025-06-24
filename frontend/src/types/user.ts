export type userType = {
    id: string;
    username: string;
    email: string;
    avatar: number | null;
    lists: todoListType[];
}

export type todoListType = {
    id: string;
    name: string;
    created_at: string;
    default: boolean;
    items: itemType[] | null;

    extraClass?: string
    svgPath?: string[];
    fill?: string;
}

export type itemType = {

}
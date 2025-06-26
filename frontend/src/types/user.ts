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
    index: number;
    type: 0 | 1 | 2;
    created_at: string;
    items: itemType[] | undefined;

    extraClass?: string
    svgPath?: string[];
    fill?: string;
}

export type itemType = {

}
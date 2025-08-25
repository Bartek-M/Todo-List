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
    created_date: string;
    items?: itemType[];

    svgPath?: string[];
    fill?: string;
    extraClass?: string;
}

export type defaultListType = {
    id?: string;
    name: string;
    type: 0 | 1 | 2;
    svgPath: string[];
    fill: string;
    extraClass?: string;
}

export type itemType = {
    id: string,
    text: string,
    notes?: string,
    index: number,
    todo_list: string,
    ticked?: boolean,
    schedule_date?: number,
    deadline_date?: number,
    create_date?: number,
    deleted?: boolean
}
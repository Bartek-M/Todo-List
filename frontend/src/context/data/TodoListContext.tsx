import React, { Dispatch, SetStateAction, useState, useContext, useEffect } from "react";

import { useUser } from "..";
import { todoListType, childProps } from "@/types";


type todoListContext = [todoListType[], Dispatch<SetStateAction<todoListType[]>>] | null;
type todoListState = todoListType[];


const TodoListContext = React.createContext<todoListContext>(null);
export function useTodoLists() { return useContext(TodoListContext); }

export function TodoListProvider({ children }: childProps) {
    const [user,] = useUser()!;
    const [todoLists, setTodoLists] = useState<todoListState>(user.lists);

    useEffect(() => {

    }, []);


    return (
        <TodoListContext.Provider value={[todoLists, setTodoLists] as todoListContext}>
            {children}
        </TodoListContext.Provider>
    );
}
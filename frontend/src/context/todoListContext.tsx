import React, { useState, useContext, useEffect } from "react";

import { useUser } from "./";
import { todoListContext, todoListState, contextChildProps } from "/src/types";


const TodoListContext = React.createContext<todoListContext>(null);
export function useTodoLists() { return useContext(TodoListContext); }

export function TodoListProvider({ children }: contextChildProps) {
    const [user,] = useUser()!;
    const [todoLists, setTodoLists] = useState<todoListState>(user.lists);

    useEffect(() => {
        
    }, []);


    return (
        <TodoListContext.Provider value={[todoLists, setTodoLists] as todoListContext}>
            {children}
        </TodoListContext.Provider>
    )
}
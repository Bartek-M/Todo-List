import React, { useState, useContext, useEffect } from "react";

import { todoListContext, todoListState, contextChildProps } from "/src/types";


const TodoListContext = React.createContext<todoListContext>(null);
export function useTodoLists() { return useContext(TodoListContext); }

export function TodoListProvider({ children, user }: contextChildProps) {
    const [todoLists, setTodoLists] = useState<todoListState>(user.lists);

    useEffect(() => {
        
    }, []);


    return (
        <TodoListContext.Provider value={[todoLists, setTodoLists] as todoListContext}>
            {children}
        </TodoListContext.Provider>
    )
}
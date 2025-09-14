import { useDynamicStyles } from "/src/utils/";
import { ActiveProvider, ModalProvider, TodoListProvider } from "/src/context";

import { Main } from "./main";
import { Sidebar } from "./sidebar";


export function Home() {
    if (!useDynamicStyles("/css/home.css")) return;

    return (
        <TodoListProvider>
            <ActiveProvider>
                <ModalProvider>
                    <Sidebar />
                    <Main />
                </ModalProvider>
            </ActiveProvider>
        </TodoListProvider>
    );
}
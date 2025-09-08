import { useState } from "react";
import { useDynamicStyles } from "/src/utils/";
import { UserProvider, ActiveProvider, TodoListProvider } from "/src/context";

import { Main } from "./main";
import { Sidebar } from "./sidebar";
import { ListModal } from "./modals";

import { ModalBase } from "/src/components";
import { homeModals } from "/src/types";


const modals = {
    newList: {
        elementClass: "modal-sm",
        children: <ListModal />
    },
};


export function Home({ redirect }: { redirect: string; }) {
    const [modal, setModal] = useState<homeModals>(null);
    const hideModal = () => setModal(null);
    useDynamicStyles("/css/home.css");

    const modalConfig = modal ? modals[modal] : { elementClass: "", children: null };

    return (
        <UserProvider redirect={redirect}>
            <TodoListProvider>
                <ActiveProvider>
                    <Sidebar setModal={setModal} />
                    <Main />

                    <ModalBase elementClass={modalConfig.elementClass} setHidden={hideModal}>
                        {modalConfig.children}
                    </ModalBase>
                </ActiveProvider>
            </TodoListProvider>
        </UserProvider>
    );
}
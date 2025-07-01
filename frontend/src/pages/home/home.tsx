import { useState } from "react";
import { useDynamicStyles } from "/src/utils/";
import { UserProvider } from "/src/context";

import { Main } from "./main";
import { Sidebar } from "./sidebar";
import { Settings } from "./settings";
import { ListModal } from "./modals";

import { ModalBase } from "/src/components";
import { homeModals } from "/src/types";


const modals = {
    settings: {
        elementClass: "modal-dialog-scrollable modal-fullscreen-sm-down",
        children: <Settings />
    },
    newList: {
        elementClass: "modal-sm",
        children: <ListModal />
    },
};


export function Home({ redirect }: { redirect: string; }) {
    const [modal, setModal] = useState<homeModals>(null);
    const hideModal = () => setModal(null);
    useDynamicStyles("/css/home.css");

    const modalConfig = modal ? modals[modal] : { elementClass: "", children: null }

    return (
        <UserProvider redirect={redirect}>
            <Sidebar setModal={setModal} />
            <Main />

            <ModalBase elementClass={modalConfig.elementClass} setHidden={hideModal}>
                {modalConfig.children}
            </ModalBase>
        </UserProvider>
    );
}
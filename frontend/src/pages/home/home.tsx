import { useState} from "react"
import { useDynamicStyles } from "/src/utils/"
import { UserProvider } from "/src/context"

import { Main } from "./main"
import { Sidebar } from "./sidebar"
import { Settings } from "./settings"
import { ListModal } from "./modals"

import { ModalBase } from "/src/components"
import { homeModals } from "/src/types"


export function Home({ redirect }: { redirect: string }) {
    const [modal, setModal] = useState<homeModals>(null)
    useDynamicStyles("/assets/css/home.css")

    return (
        <UserProvider redirect={redirect}>
            <Sidebar setModal={setModal} />
            <Main />

            <ModalBase setHidden={() => setModal(null)}>
                {
                    modal === "settings" && <Settings /> ||
                    modal === "newList" && <ListModal />
                }
            </ModalBase>
        </UserProvider>
    )
}
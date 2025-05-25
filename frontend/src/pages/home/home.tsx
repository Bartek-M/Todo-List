import { useState } from "react"

import { Main } from "./main"
import { Sidebar } from "./sidebar"
import { Settings } from "./settings"
import { ListModal } from "./modals"

import { ModalBase } from "/src/components"
import { homeModals } from "/src/types"

import "/assets/css/home.css"

export function Home() {
    const [modal, setModal] = useState<homeModals>(null)

    return (
        <>
            <Sidebar setModal={setModal} />
            <Main />

            <ModalBase setHidden={() => setModal(null)}>
                {
                    modal === "settings" && <Settings /> ||
                    modal === "newList" && <ListModal />
                }
            </ModalBase>
        </>
    )
}
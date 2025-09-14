import React, { useState, useContext, Dispatch, SetStateAction } from "react";
import { createPortal } from "react-dom";

import { childProps } from "/src/types";
import { ModalBase } from "/src/components";
import { NewList } from "/src/components/modals";


export const MODAL_REGISTRY = {
    newList: {
        elementClass: "modal-sm",
        children: <NewList />
    },
};

type modalState = keyof typeof MODAL_REGISTRY | null;
type modalContext = [modalState, Dispatch<SetStateAction<modalState>>] | null;

const ModalContext = React.createContext<modalContext>(null);
export function useModal() { return useContext(ModalContext); }

export function ModalProvider({ children }: childProps) {
    const [modal, setModal] = useState<modalState>(null);
    const handleHidden = () => setModal(null);

    const modalConfig = modal ? MODAL_REGISTRY[modal] : { elementClass: "", children: null };

    return (
        <ModalContext.Provider value={[modal, setModal]}>
            {children}
            {createPortal(
                <ModalBase elementClass={modalConfig.elementClass} setHidden={handleHidden}>
                    {modalConfig.children}
                </ModalBase>,
                document.getElementById("topLayer")!
            )}
        </ModalContext.Provider>
    );
}
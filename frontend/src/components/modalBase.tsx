import { useEffect, useState } from "react";

export function ModalBase({ children, elementClass="", setHidden }: { children: any, elementClass: string, setHidden: any; }) {
    const [modal, setModal] = useState<any>(null);

    useEffect(() => {
        if (!children) {
            if (modal) modal.hide();
            return setModal(null);
        }

        setModal(new bootstrap.Modal("#modal"));
    }, [children]);

    useEffect(() => {
        if (!modal) return;
        if (!children) return;

        modal.show();
        document.getElementById("modal")?.addEventListener("hidden.bs.modal", setHidden);
        return () => document.removeEventListener("hidden.bs.modal", setHidden);
    }, [modal]);

    return (
        <div className="modal fade" id="modal">
            <div className={`modal-dialog modal-dialog-centered ${elementClass}`}>
                <div className="modal-content shadow-lg border-0">
                    {children}
                </div>
            </div>
        </div>
    );
}
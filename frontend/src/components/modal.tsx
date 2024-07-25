import { useEffect, useState } from "react"

export function Modal({ children, setHidden }: { children: any, setHidden: any }) {
    const [modal, setModal] = useState<any>(null)

    useEffect(() => {
        if (!children) setModal(null)
        setModal(new bootstrap.Modal("#modal"))
    }, [children])

    useEffect(() => {
        if (!modal) return
        if (!children) return

        modal.show()
        document.getElementById("modal")?.addEventListener("hidden.bs.modal", setHidden)
        return () => document.removeEventListener("hidden.bs.modal", setHidden)
    }, [modal])

    return (
        <div className="modal fade" id="modal" aria-hidden="true">
            {children}
        </div>
    )
}
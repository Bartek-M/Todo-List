import { useRef } from "react"

export function ListModal() {
    const listName = useRef(null)

    return (
        <div className="modal-dialog modal-sm modal-dialog-centered">
            <form className="modal-content" onSubmit={(e) => e.preventDefault()}>
                <div className="modal-header border-0">
                    <h1 className="modal-title fs-5">New list</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body py-0">
                    <input type="text" className="form-control" id="list-name" placeholder="List Name" ref={listName} />
                </div>
                <div className="modal-footer border-0">
                    <button type="submit" className="btn btn-primary w-100">Done</button>
                </div>
            </form>
        </div>
    )
}
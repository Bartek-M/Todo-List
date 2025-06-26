import { useRef } from "react";
import { useUser } from "/src/context";

import { apiFetch } from "/src/utils";
import { refInput, userType } from "/src/types";


function createList(name: refInput, setUser: any) {
    let valName = name?.value;
    if (!valName) return;

    apiFetch("list/create/", "POST", {
        name: valName
    }).then((result) => {
        if (!result) return;
        let [resp, data] = result;

        if (data.errors) {
            return;
        }

        if (resp.ok) {
            setUser((user: userType) => {
                user.lists.push(data);
                return user;
            });
        }
    });

    const modal = bootstrap.Modal.getInstance(document.getElementById("modal"));
    modal.hide();
}

export function ListModal() {
    const [_, setUser] = useUser()!;
    const listName = useRef(null);

    return (
        <div className="modal-dialog modal-sm modal-dialog-centered">
            <form className="modal-content" onSubmit={(e) => { e.preventDefault(); createList(listName.current, setUser); }}>
                <div className="modal-header border-0">
                    <h1 className="modal-title fs-5">New list</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body py-0">
                    <input type="text" className="form-control" id="list-name" placeholder="List Name" ref={listName} required maxLength={50} />
                </div>
                <div className="modal-footer border-0">
                    <button type="submit" className="btn btn-primary w-100">Done</button>
                </div>
            </form>
        </div>
    );
}
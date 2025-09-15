import { useRef } from "react";
import { useModal, useTodoLists } from "/src/context";

import { apiFetch } from "/src/utils";
import { refInput, todoListState } from "/src/types";


export function NewList() {
    const [, setTodoLists] = useTodoLists()!;
    const [, setModal] = useModal()!;

    const listName = useRef<refInput>(null);

    const createList = () => {
        let valName = listName.current?.value;
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
                setTodoLists((prev: todoListState) => ([
                    ...prev,
                    data
                ]));
            }
        });

        setModal(null);
    }

    return (
        <form onSubmit={(e) => { e.preventDefault(); createList(); }}>
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
    );
}
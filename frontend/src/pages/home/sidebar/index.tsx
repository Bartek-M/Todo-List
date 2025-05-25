import { Lists } from "./lists"
import { Options } from "./options"

export function Sidebar({ setModal }: any) {
    return (
        <div className="d-flex flex-column bg-body-tertiary h-100">
            <Lists />
            <Options setModal={setModal} />
        </div>
    )
}
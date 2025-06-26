import { useActive } from "/src/context";

import { Lists } from "./lists";
import { Options } from "./options";

export function Sidebar({ setModal }: any) {
    const [active,] = useActive()!;

    return (
        <div className={`d-flex flex-column bg-body-tertiary h-100 ${active?.opened ? "hidden" : ""}`} id="sidebar">
            <Lists />
            <Options setModal={setModal} />
        </div>
    );
}
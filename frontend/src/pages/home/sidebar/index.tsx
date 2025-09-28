import { useActive } from "@/context";

import { Lists } from "./lists";
import { Options } from "./options";

export function Sidebar() {
    const [active,] = useActive()!;

    return (
        <div className={`d-flex flex-column bg-body-tertiary h-100 ${active?.opened ? "hidden" : ""}`} id="sidebar">
            <Lists />
            <Options />
        </div>
    );
}
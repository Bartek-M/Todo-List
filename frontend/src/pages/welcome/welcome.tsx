import { NavBase } from "@/components";
import { useDynamicStyles } from "@/utils";

export function Welcome() {
    if (!useDynamicStyles("/css/welcome.css")) return;

    return (
        <NavBase>
            <h1 className="p-3">Welcome Page</h1>
        </NavBase>
    );
}
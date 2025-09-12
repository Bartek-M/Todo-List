import { NavBase } from "/src/components";
import { useDynamicStyles } from "/src/utils";

export function Welcome() {
    if (!useDynamicStyles("/css/welcome.css")) return;

    return (
        <NavBase>
            <h1 className="p-3">Welcome Page</h1>
        </NavBase>
    );
}
import { NavBase } from "/src/components";
import { useDynamicStyles } from "/src/utils";

export function Welcome() {
    useDynamicStyles("/css/welcome.css");

    return (
        <NavBase>
            <h1 className="p-3">Welcome Page</h1>
        </NavBase>
    );
}
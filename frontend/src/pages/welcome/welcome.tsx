import { NavBase } from "/src/components"
import { useDynamicStyles } from "/src/utils"

export function Welcome() {
    useDynamicStyles("/css/welcome.css")

    return (
        <NavBase>
            <h3>Welcome Page</h3>
        </NavBase>
    )
}
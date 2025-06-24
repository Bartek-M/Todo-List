import { useActive, useUser } from "/src/context"
import { SVG } from "/src/components"
import { defaultLists, defaultIcon } from "/src/utils"


export function Items() {
    const [user,] = useUser()!
    const [active,] = useActive()!
    if (!user || !active) return

    let currentList, currentIcon, currentFill

    if (active.id.includes("default")) {
        currentList = defaultLists[active.index]
        currentIcon = currentList.svgPath
        currentFill = currentList.fill
    } else {
        currentList = user.lists[active.index]
        currentIcon = defaultIcon
        currentFill = "#abaeb1"
    }

    return (
        <div className="p-5 mt-3 mx-2">
            <h4 className="mb-3">
                <SVG paths={currentIcon} fill={currentFill} />
                {"\u00A0"} {currentList.name}
            </h4>
            <p>Hello World, <i>{user.username}</i>!</p>
        </div>
    )
}
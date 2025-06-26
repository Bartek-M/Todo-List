import { useActive, useUser } from "/src/context";
import { SVG } from "/src/components";
import { defaultIcon } from "/src/utils";


export function Items() {
    const [user,] = useUser()!;
    const [active,] = useActive()!;
    if (!user || !active) return;

    let currentList = user.lists.find((l) => l.id == active.id);
    if (!currentList) return;

    let paths = currentList.svgPath || defaultIcon.svgPath;
    let fill = currentList.fill || defaultIcon.fill;

    return (
        <div className="p-5 mt-3 mx-2">
            <h4 className="mb-3">
                <SVG paths={paths} fill={fill} />
                {"\u00A0"} {currentList.name}
            </h4>
            <p>Hello World, <i>{user.username}</i>!</p>
        </div>
    );
}
import { useUser, useActive } from "/src/context";
import { SVG } from "/src/components/";
import { defaultIcon } from "/src/utils";


export function Lists() {
    const [user,] = useUser()!;
    const [active, setActive] = useActive()!;
    if (!user) return;

    return (
        <div className="list-group py-4 px-4">
            {user.lists.map((todoList, index) => {
                let paths = todoList.svgPath || defaultIcon.svgPath;
                let fill = todoList.fill || defaultIcon.fill;

                return (
                    <button
                        key={"sidebar-" + todoList.id}
                        className={`btn list-group-item-action fw-medium border-0  ${todoList.extraClass || ""} ${active?.id == todoList.id ? "active" : ""}`}
                        onClick={() => setActive({ id: todoList.id, index: index, opened: true })}
                    >
                        <SVG paths={paths} fill={fill} />
                        {"\u00A0"} {todoList.name}
                    </button>
                )
            })}
        </div>
    )
}
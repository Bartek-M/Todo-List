import { useUser, useActive } from "/src/context"
import { SVG } from "/src/components/"
import { defaultLists } from "/src/utils"


export function Lists() {
    const [user,] = useUser()!
    const [active, setActive] = useActive()!
    if (!user) return

    return (
        <div className="list-group py-4 px-4">
            {defaultLists.map(({ name, fill, svgPath, extraClass }, idx) => (
                <button
                    key={`default-${idx}`}
                    className={`btn list-group-item-action fw-medium border-0 ${extraClass || ""} ${active?.id == `default-${idx}` ? "active" : ""}`}
                    onClick={() => setActive({ id: `default-${idx}`, index: idx, opened: true })}
                >
                    <SVG paths={svgPath} fill={fill} />
                    {"\u00A0"} {name}
                </button>
            ))}
            {user.lists.map((todoList, index) => (
                <button
                    key={todoList.id}
                    className={`btn list-group-item-action fw-medium border-0 ${active?.id == todoList.id ? "active" : ""}`}
                    onClick={() => setActive({ id: todoList.id, index: index, opened: true })}
                >
                    <SVG paths={["M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"]} fill="#abaeb1" />
                    {"\u00A0"} {todoList.name}
                </button>
            ))}
        </div>
    )
}
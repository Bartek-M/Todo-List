import { useTodoLists } from "/src/context";
import { SVG } from "/src/components";
import { todoListType } from "/src/types";


export function NewItemButton({ todoList }: { todoList: todoListType }) {
    const [_, setTodoLists] = useTodoLists()!;

    return (
        <button className="btn btn-primary border-0 rounded-circle p-2" onClick={() => {
            setTodoLists((prev) => {
                return prev.map(list => {
                    if (list.id !== todoList.id) return list;
                    let items = list.items ? [...list.items] : [];
                    if (items[0]?.id.startsWith("new")) items.shift();

                    items.unshift({
                        id: `new-${(new Date).getTime()}`,
                        text: "",
                        notes: "",
                        index: -1,
                        todo_list: todoList.id,
                    });

                    return { ...list, items: items };
                });
            });
        }}>
            <SVG paths={["M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"]} fill="#fff" width="24" height="24" />
        </button>
    );
}
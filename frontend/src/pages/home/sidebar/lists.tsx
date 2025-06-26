import { arrayMove } from "@dnd-kit/sortable";

import { DragList } from "/src/components";
import { useUser } from "/src/context";
import { ListItem } from "./listItem";
import { userType, dragListProps } from "/src/types";


export function Lists() {
    const [user, setUser] = useUser()!;
    if (!user) return null;

    const handleDragEnd: dragListProps["dragEnd"] = (draggedIndex, overIndex) => {
        setUser((user: userType) => {
            const newLists = arrayMove(user.lists, draggedIndex, overIndex);

            return {
                ...user,
                lists: newLists
            }
        })
    }

    return (
        <div className="list-group py-4 px-4">
            <DragList Element={ListItem} title="sidebar" list={user.lists} dragEnd={handleDragEnd} />
        </div>
    );
}
import { DragList } from "/src/components";
import { useUser } from "/src/context";
import { ListItem } from "./listItem";
import { userType, dragListProps } from "/src/types";
import { apiFetch } from "/src/utils";


export function Lists() {
    const [user, setUser] = useUser()!;
    if (!user) return null;

    const handleDragEnd: dragListProps["dragEnd"] = (newLists, updatedItems) => {
        setUser((user: userType) => {
            return {
                ...user,
                lists: newLists
            };
        });

        apiFetch("list/reorder/", "PATCH", {
            updated_items: updatedItems
        }).then((result) => {
            if (!result) return; // something went wrong?
            let [resp, data] = result;

            if (data.errors) {
                return;
            }

            if (!resp.ok) {
                return; // something went wrong?
            }
        });
    };

    return (
        <div className="list-group py-4 px-4">
            <DragList Element={ListItem} title="sidebar" list={user.lists} dragEnd={handleDragEnd} />
        </div>
    );
}
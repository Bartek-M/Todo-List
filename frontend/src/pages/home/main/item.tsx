import { itemType } from "/src/types";
import { getDragProps } from "/src/utils";


export function Item({ item, dragOverlay = false }: { item: itemType, dragOverlay?: any; }) {
    const props = getDragProps({ id: item.id, dragOverlay: dragOverlay });

    return (
        <div
            className="btn list-group-item-action border-0"
            onClick={() => { console.log("Item clicked"); }}
            {...props}
        >
            {item.text}
        </div>
    );
}
import { itemType } from "/src/types";
import { getDragProps } from "/src/utils";


export function Item({ item, dragOverlay = false }: { item: itemType, dragOverlay?: any; }) {
    const props  = getDragProps({ id: item.id, dragOverlay: dragOverlay });

    return (
        <li
            className={`checklist-item ${dragOverlay ? "dragged-item" : ""}`}
            {...props}
        >
            <input className="form-check-input ms-0" type="checkbox" id={`check-${item.id}-${dragOverlay}`} />
            <div className="w-100" onClick={() => { console.log("Item clicked"); }}>{item.text}</div>
        </li>
    );
}
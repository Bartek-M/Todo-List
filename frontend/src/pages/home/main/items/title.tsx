import { itemType } from "/src/types";

export function ItemTitle({ item }: { item: itemType}) {
    return (
        <div className="d-flex flex-column">
            <span className="lh-1">{item.text}</span>
            <span className="text-secondary lh-1" style={{ fontSize: "0.75rem" }}>{item.notes}</span>
        </div>
    )
}
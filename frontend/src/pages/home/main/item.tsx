import { itemType } from "/src/types";

export function Item({ item }: { item: itemType }) {
    console.log(item)

    return (
        <div>
            {item.text}
        </div>
    )
}
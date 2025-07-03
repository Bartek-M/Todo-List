import { useEffect, useRef, useState } from "react";

import { itemType } from "/src/types";

export function ItemNotes({ item }: { item: itemType; }) {
    const textRef = useRef<HTMLDivElement>(null);
    const [charCount, setCharCount] = useState(0);
    const charLimit = 500;

    const handleInput = () => {
        const text = textRef.current?.innerText || "";
        setCharCount(text.length);
    };
    useEffect(handleInput, [textRef.current])

    return (
        <div style={{ margin: "0 0.5rem 1rem 1.5rem" }}>
            <div
                className="text-secondary text-break overflow-y-auto"
                data-placeholder="Notes"
                contentEditable
                suppressContentEditableWarning
                style={{ maxHeight: "calc(var(--bs-body-line-height) * 6rem)" }}
                ref={textRef}
                onInput={handleInput}
            >
                {item.notes}
            </div>
            <div className="text-end text-danger mt-2" style={{ fontSize: "0.75rem" }}>
                {charCount > charLimit ? charLimit - charCount : ""}
            </div>
        </div>
    );
}
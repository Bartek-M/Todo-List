import { useState } from "react";


interface Props {
    value?: string;
    placeholder?: string;
    innerRef: any;
    styles?: React.CSSProperties;
    multiline?: boolean;
    charLimit?: number;
    maxLines?: number;
};

export function TextInput({
    value = "",
    placeholder = "",
    innerRef,
    styles = {},
    multiline = false,
    charLimit = 100,
    maxLines = -1
}: Props) {
    const [charCount, setCharCount] = useState(0);

    const handleInput = () => {
        const text = innerRef.current.innerText || "";
        if (text === "\n") innerRef.current.innerHTML = "";
        setCharCount(text.length);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!multiline && e.key === "Enter") e.preventDefault();
    };

    const handleOnPaste = (e: React.ClipboardEvent) => {
        e.preventDefault();

        let pasteContent = e.clipboardData.getData("text/plain");
        innerRef.current.innerText += pasteContent;

        handleInput();
    };

    return (
        <div style={styles}>
            <div
                className="text-break overflow-y-auto w-100"
                data-placeholder={placeholder}
                contentEditable
                suppressContentEditableWarning
                style={maxLines !== -1 ? { maxHeight: `calc(var(--bs-body-line-height) * ${maxLines}em)` } : {}}
                ref={innerRef}
                onInput={handleInput}
                onKeyDown={handleKeyDown}
                onPaste={handleOnPaste}
            >
                {value}
            </div>
            {charCount > charLimit
                ? (
                    <div className="text-end text-danger mt-2" style={{ fontSize: "0.75rem" }}>
                        {charLimit - charCount}
                    </div>
                ) : ""
            }
        </div>
    );
}

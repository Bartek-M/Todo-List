import { useRef } from "react";

import { SelectProps } from "/src/types";


export function Select({ title, elements, inputRef, clickEvent }: SelectProps) {
    const selectRef = useRef<any>(null);

    return (
        <div>
            <button className="btn" ref={inputRef} data-bs-auto-close="true" data-bs-toggle="dropdown" onClick={() => {
                // new bootstrap.Dropdown(selectRef.current).toggle();
            }}>{title}</button>
            <div className="dropdown-menu" ref={selectRef}>
                {elements.map((el) => (
                    <button
                        key={el.id}
                        className={`dropdown-item ${el.active ? "active" : ""}`}
                        onClick={() => { clickEvent(el.id); }}
                    >
                        {el.name}
                    </button>
                ))}
            </div>
        </div>
    );
}
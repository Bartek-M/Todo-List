import { useEffect, useState, useRef } from "react";

import { boolState, refInput } from "@/types";
import { transitionTime, slidingIconWidth } from "@/defaults";


interface selectProps {
    title?: string;
    elements: {
        id: string;
        name: string;
        active?: boolean;
    }[];
    inputRef: any;
    clickEvent: (id: string) => void;
    sliding?: boolean;
};

export function Select({
    title,
    elements,
    inputRef = useRef<refInput>(null),
    clickEvent,
    sliding
}: selectProps) {
    const [opened, setOpened] = useState<boolState>(false);
    const selectRef = useRef<any>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                selectRef.current && !selectRef.current.contains(e.target as Node) &&
                inputRef.current && !inputRef.current.contains(e.target as Node)
            ) {
                const dropdown = bootstrap.Dropdown.getInstance(selectRef.current);
                if (dropdown) {
                    dropdown.hide();
                    setOpened(false);
                }
            }
        };

        if (opened) {
            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [opened]);

    const handleToggler = (e: React.MouseEvent) => {
        const currentState = !selectRef.current.classList.contains("show");
        const dropdown = bootstrap.Dropdown.getOrCreateInstance(selectRef.current, {
            reference: "parent",
            offset: [sliding ? -slidingIconWidth : 0, 2],
            popperConfig: {
                strategy: "fixed"
            }
        });

        if (currentState) {
            setTimeout(() => dropdown.show(), !e.isTrusted ? transitionTime : 0);
        } else {
            const event = new MouseEvent("mousedown", { bubbles: true, cancelable: true });
            document.dispatchEvent(event);
        }

        setOpened(currentState);
    };

    return (
        <div>
            <button className="btn border" ref={inputRef} onClick={handleToggler}>{title}</button>
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
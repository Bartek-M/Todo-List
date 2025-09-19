import { useState, useRef, useEffect } from "react";

import { SVG } from "..";
import { defaultIconFill } from "/src/defaults";
import { slidingInputProps } from "/src/types";

/*
<SlidingInput 
    iconPaths={[...]}
    inputElement={
        <div>
            <button ref={inputRef}>{opener}</button>
            <div>{contents}</div>
        </div>
    }
    inputRef={}
/>
*/

export function SlidingInput({ iconPaths, inputElement, inputRef }: slidingInputProps) {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("click", handleClickOutside);
            return () => document.removeEventListener("click", handleClickOutside);
        }
    }, [open]);

    useEffect(() => {
        if (!inputRef.current || !open) return;
        inputRef.current.click();
    }, [open]);

    return (
        <div className={`sliding-input ${open ? "open" : ""}`} ref={wrapperRef}>
            <button className="btn border-0" onClick={() => setOpen((prev) => !prev)}>
                <SVG paths={iconPaths} fill={defaultIconFill} />
            </button>
            {inputElement}
        </div>
    );
};
import { useState, useRef, useEffect } from "react";

import { SVG } from "..";
import { defaultIconFill } from "/src/defaults";
import { SlidingInputProps } from "/src/types";

/*
<SlidingInput 
    iconPaths={[...]}
    inputElement={
        <div>
            <div>{contents}</div>
            <button ref={inputRef}>{opener}</button>
        </div>
    }
    inputRef={}
/>
*/

export function SlidingInput({ iconPaths, inputElement, inputRef }: SlidingInputProps) {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if (!inputRef.current || !open) return;
        inputRef.current.click();
    }, [open]);

    return (
        <div className={`sliding-input ${open ? "open" : ""}`} ref={wrapperRef}>
            <button className="btn border-0" onClick={() => setOpen((prev) => !prev)}>
                <SVG paths={iconPaths} fill={open ? "#000" : defaultIconFill} />
            </button>
            {inputElement}
        </div>
    );
};
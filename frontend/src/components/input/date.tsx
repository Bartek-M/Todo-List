import { useRef } from "react";
import { refInput } from "/src/types";

export function Date({ title = "Select Date" }) {
    const inputRef = useRef<refInput>(null);

    return (
        <div className="position-relative">
            <button className="btn border" onClick={() => { inputRef.current?.showPicker() }}>{title}</button>
            <input className="" style={{ width: "0" }} type="date" ref={inputRef} />
        </div>
    )
}
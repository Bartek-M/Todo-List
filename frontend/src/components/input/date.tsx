import { useRef, useState } from "react";

import { refInput, refButton, stringState } from "/src/types";
import { transitionTime } from "/src/defaults";


export function DateInput({ opener = "Select Date", inputRef = useRef<refButton>(null) }) {
    const hiddenInputRef = useRef<refInput>(null);
    const [selectedDate, setSelectedDate] = useState<stringState>(null);

    const openDatePicker = () => {
        let currentInput = hiddenInputRef.current;
        if (!currentInput) return;

        setTimeout(() => {
            currentInput.showPicker ? currentInput.showPicker() : currentInput.click();
        }, transitionTime);
    };

    const handleChange = () => {
        let currentInput = hiddenInputRef.current;
        if (!currentInput) return;

        setSelectedDate(currentInput.value);
    };

    return (
        <div className="position-relative">
            <button className="btn border" ref={inputRef} onClick={openDatePicker}>
                {selectedDate
                    ? new Date(selectedDate).toLocaleDateString()
                    : opener}
            </button>
            <input
                type="date"
                ref={hiddenInputRef}
                onChange={handleChange}
                className="position-absolute"
                style={{
                    inset: "0",
                    visibility: "hidden",
                }}
            />
        </div>
    );
}

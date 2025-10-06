import { useRef, useState } from "react";

import { refInput, refButton, stringState } from "@/types";
import { transitionTime } from "@/defaults";


interface dateProps {
    title?: string;
    name: string;
    inputRef: any;
    changeEvent: (time: string) => void;
}

export function DateInput({
    title = "Select Date",
    name,
    inputRef = useRef<refButton>(null),
    changeEvent
}: dateProps) {
    const dateInput = useRef<refInput>(null);
    const [selectedDate, setSelectedDate] = useState<stringState>(null);

    const handleOpen = (e: React.MouseEvent) => {
        let currentInput = dateInput.current;
        if (!currentInput) return;

        setTimeout(() => {
            currentInput.showPicker ? currentInput.showPicker() : currentInput.click();
        }, !e.isTrusted ? transitionTime : 0);
    };

    const handleChange = () => {
        let currentInput = dateInput.current;
        if (!currentInput) return;

        changeEvent(currentInput.value);
        setSelectedDate(currentInput.value);
    };

    return (
        <div className="position-relative">
            <button className="btn border" ref={inputRef} onClick={handleOpen}>
                {selectedDate
                    ? new Date(selectedDate).toLocaleDateString(navigator.language === "en" ? "en-GB" : navigator.appCodeName)
                    : title}
            </button>
            <input type="date" name={name} ref={dateInput} onChange={handleChange} className="position-absolute invisible" style={{ inset: "0" }} />
        </div>
    );
}

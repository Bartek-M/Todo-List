import { useRef } from "react";

import { DateInput, SlidingInput } from "@/components";


interface datePickProps {
    title?: string;
    name: string;
    icon: string[];
    changeEvent: (time: string) => void;
}


export function DatePick({ title, name, icon, changeEvent }: datePickProps) {
    const inputRef = useRef(null);

    return (
        <SlidingInput
            iconPaths={icon}
            inputElement={
                <DateInput title={title} name={name} inputRef={inputRef} changeEvent={changeEvent} />
            }
            inputRef={inputRef}
        />
    );
}
import { useRef } from "react";

import { DateInput, SlidingInput } from "/src/components";
import { datePickProps } from "/src/types";


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
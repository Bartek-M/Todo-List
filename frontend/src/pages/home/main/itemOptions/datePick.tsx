import { useRef } from "react";

import { DateInput, SlidingInput } from "/src/components";


export function DatePick({ icon }: { icon: string[]; }) {
    const inputRef = useRef(null);

    return (
        <SlidingInput
            iconPaths={icon}
            inputElement={
               <DateInput inputRef={inputRef} />
            }
            inputRef={inputRef}
        />
    );
}
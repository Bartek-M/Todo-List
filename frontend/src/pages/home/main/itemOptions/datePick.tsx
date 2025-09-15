import { useRef } from "react";

import { Date, SlidingInput } from "/src/components";


export function DatePick({ icon }: { icon: string[]; }) {
    const inputRef = useRef(null);

    return (
        <SlidingInput
            iconPaths={icon}
            inputElement={
               <Date />
            }
            inputRef={inputRef}
        />
    );
}
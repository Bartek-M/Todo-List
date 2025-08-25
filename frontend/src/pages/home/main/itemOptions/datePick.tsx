import { useRef } from "react";

import { SlidingInput } from "/src/components";


export function DatePick({ icon }) {
    const inputRef = useRef(null);

    return (
        <SlidingInput
            iconPaths={icon}
            inputElement={
                // <input type="date" />
                <div>
                    <button>Select Date</button>
                </div>
            }
            inputRef={inputRef}
        />
    );
}
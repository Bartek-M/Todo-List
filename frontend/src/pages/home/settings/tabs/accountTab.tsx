import { useRef } from "react";

import { Select } from "/src/components";

export function AccountTab() {
    const inputRef = useRef(null);

    return (
        <div>
            <p>Account</p>
            <Select
                title="Select list"
                elements={[
                    { id: "1", name: "Hello"},
                    { id: "2", name: "World", active: true },
                    { id: "3", name: "Test" },
                    { id: "4", name: "1234" },
                ]}
                inputRef={inputRef}
                clickEvent={(id) => { console.log(id); }}
            />
        </div>
    );
}
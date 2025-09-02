import { useRef } from "react";

import { SlidingInput, Select } from "/src/components";
import { useTodoLists } from "/src/context";


export function ListSelect({ listId }: { listId: string; }) {
    const [todoLists, _] = useTodoLists()!;
    const inputRef = useRef(null);

    return (
        <SlidingInput
            iconPaths={["M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"]}
            inputElement={
                <Select
                    title="Select list"
                    elements={todoLists
                        .filter(lst => lst.type != 0 || lst.index == 0)
                        .map((lst) => ({
                            id: lst.id,
                            name: lst.name,
                            active: lst.id == listId
                        }))}
                    inputRef={inputRef}
                    clickEvent={(id) => { console.log(id); }}
                    sliding={true}
                />
            }
            inputRef={inputRef}
        />
    );
}
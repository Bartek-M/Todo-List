import { SVG, TextInput } from "/src/components";
import { defaultIconFill } from "/src/defaults";
import { itemType } from "/src/types";


export function ItemTitle({ item, isEdited, titleRef }: { item: itemType, isEdited: boolean, titleRef: any }) {
    return (
        <>
            {isEdited
                ? <>
                    <TextInput 
                        value={item.text}
                        placeholder="Title"
                        innerRef={titleRef}
                        styles={{ width: "100%" }}
                    />
                    <button className="btn border-0 p-0" style={{ margin: "0.25rem 0.5rem 0 auto" }} data-close>
                        <SVG 
                            paths={["M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"]} 
                            fill={defaultIconFill} 
                            width="1.25rem"
                            height="1.25rem"
                        />
                    </button>
                </>
                : <div className="d-flex flex-column">
                    <span className="lh-1 mt-1">{item.text}</span>
                    <span className="text-secondary lh-1" style={{ fontSize: "0.75rem" }}>{item.notes}</span>
                </div>
            }
        </>
    );
}
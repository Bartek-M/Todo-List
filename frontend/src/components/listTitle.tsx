import { SVG } from "/src/components";
import { defaultIcon } from "/src/utils";
import { todoListType } from "/src/types";


export function ListTitle({ todoList }: { todoList: todoListType  }) {
    let paths = todoList.svgPath || defaultIcon.svgPath;
    let fill = todoList.fill || defaultIcon.fill;

    return (
        <>
            <SVG paths={paths} fill={fill} />
            {"\u00A0"} {todoList.name}
        </>
    );
}
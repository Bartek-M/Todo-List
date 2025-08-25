import { SVG } from "/src/components";
import { defaultIcons, defaultIconFill } from "/src/defaults";
import { todoListType } from "/src/types";


export function ListTitle({ todoList }: { todoList: todoListType; }) {
    let paths = todoList.svgPath || defaultIcons.area;
    let fill = todoList.fill || defaultIconFill;

    return (
        <>
            <SVG paths={paths} fill={fill} />
            {"\u00A0"} {todoList.name}
        </>
    );
}
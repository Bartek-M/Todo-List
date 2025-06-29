import { todoListType } from "/src/types";

export function mergeLists(list1: todoListType[], list2: todoListType[]) {
    const merged = [...list1];

    list2.sort((a, b) => {
        if (a.index != b.index) return a.index - b.index;
        return new Date(a.created_date).getTime() - new Date(b.created_date).getTime()
    })

    for (const item of list2) {
        const index = merged.findIndex(i => i.name === item.name);

        if (item.type == 0 && index >= 0) {
            merged[index] = { ...merged[index], ...item }; 
        } else {
            merged.push(item);
        }
    }

    return merged;
}
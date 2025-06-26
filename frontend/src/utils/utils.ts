export function mergeLists(list1: any[], list2: any[]) {
    const merged = [...list1];

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
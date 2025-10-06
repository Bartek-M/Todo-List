import { useDynamicStyles } from "@/utils/";


export function ServerError() {
    if (!useDynamicStyles("/css/errors.css")) return;

    return (
        <div>Server error</div>
    );
}
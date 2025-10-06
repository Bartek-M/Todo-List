import { useDynamicStyles } from "@/utils/";


export function NotFound() {
    if (!useDynamicStyles("/css/errors.css")) return;

    return (
        <div>Page not found</div>
    );
} 
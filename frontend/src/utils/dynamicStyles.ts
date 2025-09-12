import { useEffect, useState } from "react";

import { boolState } from "../types";


export function useDynamicStyles(href: string) {
    const [loaded, setLoaded] = useState<boolState>(false);

    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;

        const handleLoad = () => setLoaded(true);
        link.addEventListener("load", handleLoad)

        document.head.appendChild(link);

        return () => {
            link.removeEventListener("load", handleLoad)
            document.head.removeChild(link);
        }
    }, [href])

    return loaded;
}
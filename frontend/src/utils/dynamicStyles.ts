import { useEffect } from "react"


export function useDynamicStyles(href: string) {
    useEffect(() => {
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = href
        document.head.appendChild(link)

        return () => {
            document.head.removeChild(link)
        }
    }, [href])
}
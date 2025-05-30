function getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^]+)"))
    return match ? decodeURIComponent(match[2]) : null
}

async function getCsrfToken(): Promise<string | null> {
    const token = getCookie("csrftoken")
    if (token) return token

    return await fetch("/api/auth/csrf/", { credentials: "include" })
        .then((resp) => {
            if (resp.ok) {
                return getCookie("csrftoken")
            }

            console.error("Failed to get CSRF token")
            return null
        })
}

export async function apiFetch(url: string, method: string, data: object = {}): Promise<[Response, any] | null> {
    const csrfToken = await getCsrfToken()
    if (!csrfToken) return null

    let request: RequestInit = { 
        method: method,
        headers: { "X-CSRFToken": csrfToken }, 
        credentials: "include"
    }

    if (data) {
        request.headers = {
            ...request.headers,
            "Content-Type": "application/json",
        }
        request.body = JSON.stringify(data)
    }

    return await fetch(`/api/${url}`, request)
        .then(async (resp) => {  
            let data: any = {}
            let contentType = resp.headers.get("Content-Type") || ""

            if (contentType.includes("application/json")) {
                data = await resp.json()
            }

            return [resp, data] as [Response, any]
        })
        .catch((e) => {
            console.error(`Failed to fetch "/api/${url}": ${e}`)
            return null 
        })
        .finally()
}
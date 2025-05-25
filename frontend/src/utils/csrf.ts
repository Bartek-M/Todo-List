export function getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
}

export async function getCsrfToken(): Promise<string | null> {
    const token = getCookie("csfttoken");
    if (token) return token;

    const res = await fetch('/api/auth/csrf/', {
        credentials: 'include'
    });
    if (res.ok) {
        return getCookie('csrftoken'); // After Django sets it
    } else {
        console.error('Failed to get CSRF token');
        return null;
    }
}
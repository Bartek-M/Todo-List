import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { Loading } from "/src/components"
import { apiFetch } from "/src/utils"

export function Logout() {
    const navigator = useNavigate()

    useEffect(() => {
        apiFetch("auth/logout/", "GET").then((result) => {
            if (!result) return
            let [resp, _] = result

            if (resp.ok) {
                navigator("/login", {
                    state: { logout: true }
                })
            }
        })
    }, [])

    return <Loading />
}
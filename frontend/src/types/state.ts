import { Dispatch, SetStateAction } from "react"


export type boolState = boolean | null

export type contextState = [null, Dispatch<SetStateAction<null>>] | null
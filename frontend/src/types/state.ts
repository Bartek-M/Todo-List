import { Dispatch, SetStateAction } from "react"
import { userType } from "./user"


export type boolState = boolean | null

export type userContext = [userState, Dispatch<SetStateAction<userState>>] | null
export type userState = userType | null | false 

export type activeContext = [activeState, Dispatch<SetStateAction<activeState>>] | null
export type activeState = {
    id: string;
    index: number;
    opened: boolean;
} | null
import { Dispatch, SetStateAction } from "react"
import { userType } from "./user"


export type boolState = boolean | null

export type userContext = [userType, Dispatch<SetStateAction<userType>>] | null
export type userState = userType | null | false 

export type activeContext = [activeState, Dispatch<SetStateAction<activeState>>] | null
export type activeState = {
    id: string;
    opened: boolean;
} | null
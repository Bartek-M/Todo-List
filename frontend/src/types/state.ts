import { Dispatch, SetStateAction } from "react";
import { todoListType, userType } from "./user";


export type boolState = boolean | null;
export type stringState = string | null

export type userContext = [userType, Dispatch<SetStateAction<userType>>] | null;
export type userState = userType | null | false;

export type todoListContext = [todoListType[], Dispatch<SetStateAction<todoListType[]>>] | null;
export type todoListState = todoListType[]

export type activeContext = [activeState, Dispatch<SetStateAction<activeState>>] | null;
export type activeState = {
    id: string;
    index: number;
    opened: boolean;
}
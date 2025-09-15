import { startTransition } from "react";
import { useNavigate } from "react-router-dom";

import { linkProps } from "/src/types";


export function Link({ children, to, className = "" }: linkProps) {
    const navigator = useNavigate();

    return (
        <button className={className} onClick={() => {
            startTransition(() => navigator(to));
        }}>
            {children}
        </button >
    );
}
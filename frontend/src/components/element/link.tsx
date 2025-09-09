import { startTransition } from "react";
import { useNavigate } from "react-router-dom";

import { LinkProps } from "/src/types";

export function Link({ children, to, className = "" }: LinkProps) {
    const navigator = useNavigate();

    return (
        <button className={className} onClick={() => {
            startTransition(() => navigator(to));
        }}>
            {children}
        </button >
    );
}
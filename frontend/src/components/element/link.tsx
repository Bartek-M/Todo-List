import { startTransition } from "react";
import { useNavigate } from "react-router-dom";


interface linkProps {
    children: React.ReactNode;
    to: string;
    className?: string;
}

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
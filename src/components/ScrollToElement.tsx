import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ScrollToElementProps {
    targetId: string;
    children: ReactNode;
    className?: string;
}

const ScrollToElement = (props: ScrollToElementProps) => {
    const scroll = () => {
        const section = document.querySelector(`#${props.targetId}`);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <button className={cn("", props.className)} onClick={scroll}>
            {props.children}
        </button>
    );
};

export default ScrollToElement;

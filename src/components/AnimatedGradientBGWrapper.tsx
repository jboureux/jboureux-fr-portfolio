import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AnimatedGradientBGWrapperProps {
    children: ReactNode;
    classname?: string;
}

const AnimatedGradientBGWrapper = (props: AnimatedGradientBGWrapperProps) => {
    return (
        <div className={cn("gradient-background", props.classname)}>
            {props.children}
        </div>
    );
};

export default AnimatedGradientBGWrapper;

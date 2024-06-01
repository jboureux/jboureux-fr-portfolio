import TimelineMilestone from "./TimelineMilestone";

import { career } from "@/data/career";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const Timeline = () => {
    return (
        <>
            <ScrollArea className="py-8">
                <div className="flex flex-row">
                    {career.map((careerElement, index) => {
                        return (
                            <div key={index}>
                                <TimelineMilestone
                                    item={careerElement}
                                    previous={index != 0}
                                    next={index != career.length - 1}
                                />
                            </div>
                        );
                    })}
                </div>

                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </>
    );
};

export default Timeline;

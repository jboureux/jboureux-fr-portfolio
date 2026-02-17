import TimelineMilestone from "./TimelineMilestone";

import { CareerElement } from "@/schemas/career-element";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const Timeline = ({ timelineItems }: { timelineItems: CareerElement[] }) => {
  return (
    <>
      <ScrollArea className="py-8">
        <div className="flex flex-row">
          {timelineItems.map((careerElement, index) => {
            return (
              <div key={index}>
                <TimelineMilestone
                  item={careerElement}
                  previous={index != 0}
                  next={index != timelineItems.length - 1}
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

import { CareerElement } from "@/schemas/career-element";
import dayjs from "dayjs";
import fr from "dayjs/locale/fr";

interface TimelineMilestoneProps {
    item: CareerElement;
    previous: boolean;
    next: boolean;
    width?: number;
}

const TimelineMilestone = (props: TimelineMilestoneProps) => {
    const width = props.width ? props.width : 350;
    const height = Math.ceil(width / 3);

    console.log(
        `width: ${width}, height: ${height}, previous: ${props.previous}, next: ${props.next}`
    );
    return (
        <div className={`min-w-[${width}px] flex flex-col items-center`}>
            <div className={`h-[${height}px]`}>
                <p className="tracking-tight text-xl font-semibold text-center">
                    {props.item.label}
                </p>
                <p className="text-center">{props.item.location.name}</p>
                <p className="text-xs text-center">
                    {props.item.location.city} {props.item.location.postalCode}
                </p>
            </div>

            <div className="grid grid-cols-3 w-full my-5">
                {props.previous ? (
                    <div className="bg-gray-700 my-1"></div>
                ) : undefined}
                <div className="col-start-2 col-end-2 flex flex-row justify-center">
                    <svg
                        height="10"
                        width="10"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle r="5" cx="5" cy="5" className="fill-gray-900" />
                    </svg>
                </div>

                {props.next ? (
                    <div className="bg-gray-700 my-1"></div>
                ) : undefined}
            </div>

            <p>{dayjs(props.item.date).locale(fr).format("MMM YYYY")}</p>
        </div>
    );
};

export default TimelineMilestone;

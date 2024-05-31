export interface CareerElement {
    type: "job" | "school";
    date: Date;
    label: string;
    description?: string;
    location: string;
}

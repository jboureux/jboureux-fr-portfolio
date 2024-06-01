export interface CareerElement {
    type: "job" | "school";
    date: Date;
    label: string;
    description?: string;
    location: {
        name: string;
        postalCode?: string;
        city?: string;
    };
}

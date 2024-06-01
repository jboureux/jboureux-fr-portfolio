import { CareerElement } from "@/schemas/career-element";

export const career: CareerElement[] = [
    {
        type: "school",
        label: "BAC STI2D",
        date: new Date("2021-06-01"),
        location: {
            name: "Lycée Clos-Maire",
            postalCode: "21200",
            city: "Beaune",
        },
    },
    {
        type: "school",
        label: "Entrée BUT Informatique",
        date: new Date("2021-09-01"),
        location: {
            name: "IUT Lyon 1",
            postalCode: "69100",
            city: "Villeurbanne",
        },
    },
    {
        type: "job",
        label: "Stage Développeur PHP",
        date: new Date("2023-04-10"),
        location: { name: "CAF du Rhône", postalCode: "69003", city: "Lyon" },
    },
    {
        type: "job",
        label: "Expert du Système d'Information",
        date: new Date("2023-07-10"),
        location: { name: "CAF du Rhône", postalCode: "69003", city: "Lyon" },
    },
    {
        type: "job",
        label: "Stage Développeur Java",
        date: new Date("2024-05-21"),
        location: {
            name: "Maison de l'Orient et de la Méditéranée",
            postalCode: "69007",
            city: "Lyon",
        },
    },
    {
        type: "school",
        label: "Validation BUT Informatique",
        date: new Date("2024-09-01"),
        location: {
            name: "IUT Lyon 1",
            postalCode: "69100",
            city: "Villeurbanne",
        },
    },
    {
        type: "school",
        label: "Entrée MBA Développeur fullstack",
        date: new Date("2024-09-16"),
        location: {
            name: "MyDigitalSchool",
            postalCode: "75011",
            city: "Paris",
        },
    },
];

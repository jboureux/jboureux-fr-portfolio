import { CareerElement } from "@/schemas/career-element";

export const school: CareerElement[] = [
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
    label: "BUT Informatique",
    date: new Date("2024-09-01"),
    location: {
      name: "IUT Lyon 1",
      postalCode: "69100",
      city: "Villeurbanne",
    },
  },
  {
    type: "school",
    label: "MBA Développeur fullstack",
    date: new Date("2026-09-16"),
    location: {
      name: "MyDigitalSchool",
      postalCode: "75011",
      city: "Paris",
    },
  },
];

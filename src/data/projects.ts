import { Project } from "@/schemas/project";

export const projects: Project[] = [
    {
        title: "Annuaire C",
        description:
            "Création d'un annuaire en C permettant d'indexer, rechercher et trier les éléments d'un fichier CSV.",
        tags: ["C 98"],
        thumbnail:
            "https://cloud-cdn.jboureux.fr/portfolio/thumbnail-annuaire.png",
    },
    {
        title: "GrAph Map Analysis",
        description:
            "Création d'une application en Java permettant de parcourir un graphe et effectuer des opérations d'analyse simple.",
        tags: ["Java", "Swing"],
        thumbnail:
            "https://cloud-cdn.jboureux.fr/portfolio/thumbnail-GRAMA.png",
    },
    {
        title: "Planification Soutenances",
        description:
            "Création d'une application afin de permettre à des enseignants simplifier le processus de planification de soutenances. Résolution de la planification avec un solveur de contraintes.",
        tags: ["PHP - Symfony", "JS/TS - React", "Docker"],
        thumbnail:
            "https://cloud-cdn.jboureux.fr/portfolio/thumbnail-soutenances.png",
    },
    {
        title: "Donc Counter",
        description:
            "Application simple modifiant très légèrement la page de base de Vite avec React. L'objectif de ce projet est d'automatiser le build d'une image docker et son envoi vers le container registry de Github via Github Actions lors de la mise à jour de la branche principale.",
        tags: ["JS/TS - React", "Docker", "Github Actions"],
        thumbnail: "https://cloud-cdn.jboureux.fr/portfolio/thumbnail-donc.png",
    },
];

import { Project } from "@/schemas/project";
import { Badge } from "./ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = (props: ProjectCardProps) => {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>{props.project.title}</CardTitle>
                <img
                    src={props.project.thumbnail}
                    className="object-fill w-[350px] h-[197px]"
                ></img>
            </CardHeader>
            <CardContent className="min-h-[300px]">
                <p>{props.project.description}</p>
            </CardContent>
            <CardFooter>
                <div className="flex flex-row flex-wrap gap-1">
                    {props.project.tags.map((tag, index) => (
                        <Badge key={index}>{tag}</Badge>
                    ))}
                </div>
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;

import { Project } from "@/schemas/project";
import { LinkIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
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
        {props.project.link && (
          <a href={props.project.link} target="_blank">
            <Button>
              <LinkIcon className="mr-2 w-5 h-5" />
              Voir le projet
            </Button>
          </a>
        )}
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

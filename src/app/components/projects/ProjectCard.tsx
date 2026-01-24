import { Project } from "./types";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { ProjectMediaCarousel } from "./ProjectMediaCarousel";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <ProjectMediaCarousel project={project} />
      
      <div className="p-4 md:p-6 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="default">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.links.github && (
            <Button
              href={project.links.github}
              variant="outline"
              external
              className="text-xs"
            >
              GitHub
            </Button>
          )}
          {project.links.paper && (
            <Button
              href={project.links.paper}
              variant="outline"
              external
              className="text-xs"
            >
              Paper
            </Button>
          )}
          {project.links.demo && (
            <Button
              href={project.links.demo}
              variant="outline"
              external
              className="text-xs"
            >
              Demo
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}


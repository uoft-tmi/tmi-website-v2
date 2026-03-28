"use client";

import { useState } from "react";
import { Project } from "./types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectMediaCarousel } from "./ProjectMediaCarousel";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Card className="overflow-hidden flex flex-col">
            {/* Project Overview - Fixed section above carousel */}
            <div className="p-4 md:p-6 border-b border-secondary/20">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                    {project.title}
                </h3>
                <p
                    className={`text-xs md:text-sm text-text-muted mb-1 ${!isExpanded ? "line-clamp-3" : ""}`}
                >
                    {project.description}
                </p>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-xs text-primary hover:underline mb-3"
                >
                    {isExpanded ? "Show less" : "Read more"}
                </button>
                <p className="text-xs text-text-muted">
                    Research Leads: {project.leads.join(", ")}
                </p>
                {project.advisor && (
                    <p className="text-xs text-text-muted">
                        Advising Professor: {project.advisor}
                    </p>
                )}
            </div>

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
                    {project.links.huggingface && (
                        <Button
                            href={project.links.huggingface}
                            variant="outline"
                            external
                            className="text-xs"
                        >
                            HuggingFace
                        </Button>
                    )}
                    {project.links.proposal && (
                        <Button
                            href={project.links.proposal}
                            variant="outline"
                            external
                            className="text-xs"
                        >
                            Proposal
                        </Button>
                    )}
                    {project.links.slides && (
                        <Button
                            href={project.links.slides}
                            variant="outline"
                            external
                            className="text-xs"
                        >
                            Slides
                        </Button>
                    )}
                </div>
            </div>
        </Card>
    );
}

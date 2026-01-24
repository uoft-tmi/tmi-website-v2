export type ProjectStatus = "Active" | "Paused" | "Completed";

export type ProjectMedia =
  | { type: "overview" }
  | { type: "image"; src: string; alt?: string }
  | { type: "code"; language: string; code: string }
  | { type: "video"; src: string };

export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  tags: string[];
  leads: string[];
  links: {
    github?: string;
    paper?: string;
    demo?: string;
  };
  media: ProjectMedia[];
}


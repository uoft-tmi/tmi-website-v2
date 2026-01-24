import { ProjectCard } from "@/app/components/projects/ProjectCard";
import { sampleProjects } from "@/app/components/projects/sampleData";
import Link from "next/link";

export default function Projects() {
  // Categorize projects: Current (Active, Paused) and Past (Completed)
  const currentProjects = sampleProjects.filter(
    (project) => project.status === "Active" || project.status === "Paused"
  );
  const pastProjects = sampleProjects.filter(
    (project) => project.status === "Completed"
  );

  return (
    <main className="min-h-screen w-full bg-background">
      <div className="max-w-6xl mx-auto px-6 py-8 md:py-12">
        {/* Page Header */}
        <section className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Projects
          </h1>
          <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto">
            Advancing LLM interpretability and AI ethics.
          </p>
        </section>

        {/* Current Projects */}
        {currentProjects.length > 0 && (
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 md:mb-8">
              Current Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {currentProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Past Projects */}
        {pastProjects.length > 0 && (
          <section className="mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 md:mb-8">
              Past Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {pastProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Hero Section - Full Width */}
      <section className="w-full bg-secondary/5 py-20 md:py-28 mt-8 md:mt-12 mb-0">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6 md:mb-8">
            Have a cool research idea?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5">
            <Link
              href="/apply"
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-on-accent shadow-sm transition hover:bg-hover-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              Join Us
            </Link>
            <Link
              href="/about"
              className="rounded-md border border-secondary/60 px-5 py-2.5 text-sm font-semibold text-secondary transition hover:bg-secondary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60"
            >
              Meet Our Researchers
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

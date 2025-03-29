import type { Metadata } from "next";
import { getAllProjects } from "~/lib/mdx";
import { ProjectCard } from "~/components/projects/project-card";
import { projectMetrics } from "~/components/projects/metrics-data";
import type { ProjectMetrics } from "~/components/projects/types";

export const metadata: Metadata = {
  title: "Live Projects | Portfolio",
  description: "Revenue-generating projects built and maintained by me",
  openGraph: {
    title: "Live Projects | Portfolio",
    description: "Revenue-generating projects built and maintained by me",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Projects Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Projects | Portfolio",
    description: "Revenue-generating projects built and maintained by me",
    images: [`/projects/${projectMetrics.slug}.png`],
  },
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 font-serif text-3xl font-bold text-primary md:text-4xl">
        Live Projects
      </h1>
      <p className="mb-8 text-lg text-secondary">
        These are my actual revenue-generating projects that are currently live
        and being used by real customers. Each project solves a specific problem
        and generates monthly recurring revenue.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => {
          // Get metrics for this project, or use default empty values
          const metrics: ProjectMetrics = projectMetrics[project.slug] || {
            monthlyUsers: [],
            monthlyRevenue: [],
            months: [],
          };

          return (
            <ProjectCard
              key={project.slug}
              project={project}
              metrics={metrics}
            />
          );
        })}
      </div>
    </div>
  );
}

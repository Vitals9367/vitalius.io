"use client";

import { format } from "date-fns";
import { Calendar } from "lucide-react";
import type { ProjectMeta } from "~/lib/mdx";

interface ProjectHeaderProps {
  project: ProjectMeta;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <div className="mb-6">
      <h1 className="mb-4 font-serif text-3xl font-bold text-primary md:text-4xl">
        {project.title}
      </h1>

      <div className="flex items-center gap-2 text-sm text-secondary">
        <Calendar className="h-4 w-4" />
        <time dateTime={project.date}>
          {format(new Date(project.date), "MMMM d, yyyy")}
        </time>
      </div>

      <p className="mt-4 text-lg text-secondary">{project.excerpt}</p>
    </div>
  );
}

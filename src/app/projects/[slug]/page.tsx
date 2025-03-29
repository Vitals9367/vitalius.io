import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectSlugs, getProjectBySlug } from "~/lib/mdx";
import { projectMetrics } from "~/components/projects/metrics-data";

// Import the new components
import { BackButton } from "~/components/projects/detail/back-button";
import { ProjectImage } from "~/components/projects/detail/project-image";
import { ProjectHeader } from "~/components/projects/detail/project-header";
import { ProjectMetricsSection } from "~/components/projects/detail/project-metrics";
import { ProjectLinks } from "~/components/projects/detail/project-links";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import post from "~/components/post";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.excerpt,
    openGraph: {
      title: `${project.title} | Projects`,
      description: project.excerpt,
      type: "article",
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Projects`,
      description: project.excerpt,
      images: [project.coverImage],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Get metrics for this project, or use default empty values
  const metrics = projectMetrics[slug] || {
    monthlyUsers: [],
    monthlyRevenue: [],
    months: [],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <BackButton />

      <ProjectImage
        src={project.coverImage || "/placeholder.svg"}
        alt={project.title}
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Main content - takes up 8/12 columns on large screens */}
        <article className="prose prose-lg mb-12 max-w-none lg:col-span-8">
          <ProjectHeader project={project} />
          <Markdown>{project.content}</Markdown>
        </article>
        {/* Sidebar - takes up 4/12 columns on large screens */}
        <aside className="lg:col-span-4">
          <div className="sticky top-8 space-y-6">
            {/* {metrics.monthlyUsers.length > 0 && (
              <ProjectMetricsSection metrics={metrics} />
            )} */}
            {project.liveUrl && (
              <div className="rounded-lg border border-border p-4">
                <h3 className="mb-3 text-lg font-medium">Project Website</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Check out the live project to see it in action.
                </p>
                <ProjectLinks liveUrl={project.liveUrl} />
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

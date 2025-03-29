/**
 * Project types and interfaces
 */
import type { ProjectMeta } from "~/lib/mdx";

export interface ProjectMetrics {
  monthlyUsers: number[];
  monthlyRevenue: number[];
  months: string[];
}

export interface ProjectMetricsMap {
  [key: string]: ProjectMetrics | undefined;
}

export interface ProjectCardProps {
  project: ProjectMeta;
  metrics: ProjectMetrics;
}

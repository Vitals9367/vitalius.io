"use client";

/**
 * Project card component for displaying a single project
 */
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, TrendingUp, Users } from "lucide-react";
import type { ProjectCardProps } from "./types";
import { MetricCard } from "./metric-card";
import { GrowthChart } from "./growth-chart";
import { formatCurrency, formatNumber } from "./metrics-formatter";

export function ProjectCard({ project, metrics }: ProjectCardProps) {
  // Calculate current users and revenue (last value in the array)
  const lastIndex = metrics.monthlyUsers.length - 1;
  const currentUsers =
    lastIndex >= 0 ? metrics.monthlyUsers[lastIndex] || 0 : 0;
  const currentRevenue =
    metrics.monthlyRevenue.length > 0
      ? metrics.monthlyRevenue[metrics.monthlyRevenue.length - 1] || 0
      : 0;

  // Calculate growth percentages using safe accesses with fallbacks
  const firstMonthUsers = metrics.monthlyUsers[0] || 1; // Default to 1 to avoid division by zero
  const lastMonthUsers = metrics.monthlyUsers[lastIndex] || 0;
  const userGrowth =
    metrics.monthlyUsers.length > 1
      ? (lastMonthUsers / firstMonthUsers - 1) * 100
      : 0;

  const firstMonthRevenue = metrics.monthlyRevenue[0] || 1; // Default to 1 to avoid division by zero
  const lastMonthRevenue =
    metrics.monthlyRevenue[metrics.monthlyRevenue.length - 1] || 0;
  const revenueGrowth =
    metrics.monthlyRevenue.length > 1
      ? (lastMonthRevenue / firstMonthRevenue - 1) * 100
      : 0;

  return (
    <div className="group cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div className="flex">
          <div className="relative h-auto w-32 sm:w-40">
            <Image
              src={project.coverImage || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="flex-1 p-3">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-base font-bold text-primary group-hover:text-accent-blue">
                {project.title}
              </h2>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-10 inline-flex items-center gap-1 rounded-md bg-accent-blue px-2 py-1 text-xs font-medium text-white transition-colors hover:bg-accent-blue/90"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="h-3 w-3" />
                  Visit
                </a>
              )}
            </div>

            <p className="mb-3 line-clamp-2 text-xs text-secondary">
              {project.excerpt}
            </p>

            {/* <div className="mb-3 grid grid-cols-2 gap-2">
              <MetricCard
                title="Monthly Users"
                value={formatNumber(currentUsers)}
                growth={userGrowth}
                Icon={Users}
                iconColor="text-accent-blue"
                compact
              />

              <MetricCard
                title="Monthly Revenue"
                value={formatCurrency(currentRevenue)}
                growth={revenueGrowth}
                Icon={TrendingUp}
                iconColor="text-green-600"
                compact
              />
            </div> */}

            {/* <GrowthChart metrics={metrics} compact /> */}
          </div>
        </div>
      </Link>
    </div>
  );
}

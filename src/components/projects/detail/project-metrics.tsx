"use client";

import { TrendingUp, Users } from "lucide-react";
import {
  formatCurrency,
  formatNumber,
} from "~/components/projects/metrics-formatter";
import type { ProjectMetrics } from "~/components/projects/types";

interface MetricDisplayProps {
  value: string;
  growth: number;
  icon: React.ReactNode;
  title: string;
}

function MetricDisplay({ value, growth, icon, title }: MetricDisplayProps) {
  return (
    <div className="rounded-lg bg-gray-50 p-4">
      <div className="flex items-center gap-2 text-sm text-secondary">
        {icon}
        <span className="font-medium">{title}</span>
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-2xl font-bold text-primary">{value}</span>
        {growth !== 0 && (
          <span
            className={`text-sm ${growth > 0 ? "text-green-600" : "text-red-600"}`}
          >
            {growth > 0 ? "+" : ""}
            {growth.toFixed(1)}%
          </span>
        )}
      </div>
      <p className="mt-1 text-xs text-secondary">
        Growth over the last 6 months
      </p>
    </div>
  );
}

interface ProjectMetricsProps {
  metrics: ProjectMetrics;
}

export function ProjectMetricsSection({ metrics }: ProjectMetricsProps) {
  if (metrics.monthlyUsers.length === 0) {
    return null;
  }

  // Calculate current users and revenue (last value in the array)
  const lastIndex = metrics.monthlyUsers.length - 1;
  const currentUsers =
    lastIndex >= 0 ? metrics.monthlyUsers[lastIndex] || 0 : 0;
  const currentRevenue =
    metrics.monthlyRevenue.length > 0
      ? metrics.monthlyRevenue[metrics.monthlyRevenue.length - 1] || 0
      : 0;

  // Calculate growth percentages using safe accesses with fallbacks
  const firstMonthUsers = metrics.monthlyUsers[0] || 1;
  const lastMonthUsers = metrics.monthlyUsers[lastIndex] || 0;
  const userGrowth =
    metrics.monthlyUsers.length > 1
      ? (lastMonthUsers / firstMonthUsers - 1) * 100
      : 0;

  const firstMonthRevenue = metrics.monthlyRevenue[0] || 1;
  const lastMonthRevenue =
    metrics.monthlyRevenue[metrics.monthlyRevenue.length - 1] || 0;
  const revenueGrowth =
    metrics.monthlyRevenue.length > 1
      ? (lastMonthRevenue / firstMonthRevenue - 1) * 100
      : 0;

  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <h2 className="mb-4 text-lg font-bold text-primary">Business Metrics</h2>

      <div className="space-y-4">
        <MetricDisplay
          title="Monthly Users"
          value={formatNumber(currentUsers)}
          growth={userGrowth}
          icon={<Users className="h-5 w-5 text-accent-blue" />}
        />

        <MetricDisplay
          title="Monthly Revenue"
          value={formatCurrency(currentRevenue)}
          growth={revenueGrowth}
          icon={<TrendingUp className="h-5 w-5 text-green-600" />}
        />
      </div>

      {/* Growth Chart */}
      {metrics.months.length > 0 && (
        <div className="mt-4">
          <div className="mb-1 text-sm font-medium text-secondary">
            6-Month Revenue Growth
          </div>
          <div className="flex h-20 w-full items-end rounded-md bg-gray-50 p-2">
            {metrics.monthlyRevenue.map((revenue, i) => {
              const maxRevenue = Math.max(...metrics.monthlyRevenue, 1);
              const height = Math.max((revenue / maxRevenue) * 100, 5);
              const month = metrics.months[i] || "";

              return (
                <div
                  key={i}
                  className="relative flex flex-1 flex-col items-center"
                >
                  <div
                    className="w-4/5 rounded-t-sm bg-accent-blue"
                    style={{ height: `${height}%` }}
                  ></div>
                  {month && (
                    <div className="mt-1 text-[10px] text-secondary">
                      {month}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

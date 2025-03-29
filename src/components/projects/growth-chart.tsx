/**
 * Growth chart component that displays revenue growth over time
 */
import type { ProjectMetrics } from "./types";

interface GrowthChartProps {
  metrics: ProjectMetrics;
  compact?: boolean;
}

export function GrowthChart({ metrics, compact = false }: GrowthChartProps) {
  if (metrics.months.length === 0) {
    return null;
  }

  return (
    <div className={`${compact ? "mt-2" : "mt-4"}`}>
      <div className={`${compact ? "text-[10px]" : "text-xs"} text-secondary`}>
        6-Month Growth
      </div>
      <div className={`mt-1 ${compact ? "h-6" : "h-8"} w-full`}>
        <div className={`flex ${compact ? "h-3" : "h-4"} w-full items-end`}>
          {metrics.monthlyRevenue.map((revenue, i) => {
            // Calculate the relative height based on the maximum revenue
            const maxRevenue = Math.max(...metrics.monthlyRevenue, 1); // Avoid division by zero
            const height = Math.max((revenue / maxRevenue) * 100, 15); // Minimum 15% height for visibility
            const month = metrics.months[i] || "";

            return (
              <div
                key={i}
                className="relative flex flex-1 flex-col items-center"
              >
                <div
                  className="w-5/6 bg-accent-blue"
                  style={{ height: `${height}%` }}
                ></div>
                {month && !compact && (
                  <span className="absolute -bottom-4 text-[10px] text-secondary">
                    {month}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

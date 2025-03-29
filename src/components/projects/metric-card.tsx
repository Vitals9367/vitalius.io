/**
 * Metric card component that displays a project metric with growth indicator
 */
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  growth: number;
  Icon: LucideIcon;
  iconColor: string;
  compact?: boolean;
}

export function MetricCard({
  title,
  value,
  growth,
  Icon,
  iconColor,
  compact = false,
}: MetricCardProps) {
  return (
    <div className={`rounded-lg bg-gray-50 ${compact ? "p-2" : "p-3"}`}>
      <div className="flex items-center gap-1 text-sm text-secondary">
        <Icon className={`${compact ? "h-3 w-3" : "h-4 w-4"} ${iconColor}`} />
        <span className={compact ? "text-xs" : "text-sm"}>{title}</span>
      </div>
      <div className="mt-1 flex items-end justify-between">
        <span
          className={`font-bold text-primary ${compact ? "text-sm" : "text-xl"}`}
        >
          {value}
        </span>
        {growth !== 0 && (
          <span
            className={`${compact ? "text-xs" : "text-sm"} ${growth > 0 ? "text-green-600" : "text-red-600"}`}
          >
            {growth > 0 ? "+" : ""}
            {growth.toFixed(1)}%
          </span>
        )}
      </div>
    </div>
  );
}

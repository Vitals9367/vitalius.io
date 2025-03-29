/**
 * Sample business metrics data for projects
 * In a real implementation, you would fetch this from your analytics service
 */
import type { ProjectMetricsMap } from "./types";

export const projectMetrics: ProjectMetricsMap = {
  "best-escape-rooms": {
    monthlyUsers: [5000, 8500, 12000, 15000, 22000, 28000],
    monthlyRevenue: [1200, 2100, 3500, 4800, 6200, 7500],
    months: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  },
  // Add metrics for other projects as needed
  "crypto-tracker": {
    monthlyUsers: [3000, 5500, 7800, 9600, 12400, 18000],
    monthlyRevenue: [800, 1500, 2200, 3100, 4300, 5800],
    months: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  },
  "ai-writing-assistant": {
    monthlyUsers: [1200, 3500, 6800, 12000, 18500, 25000],
    monthlyRevenue: [500, 1800, 3600, 6000, 9200, 14000],
    months: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  },
};

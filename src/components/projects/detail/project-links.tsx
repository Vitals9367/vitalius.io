"use client";

import { ExternalLink } from "lucide-react";

interface ProjectLinksProps {
  liveUrl?: string;
}

export function ProjectLinks({ liveUrl }: ProjectLinksProps) {
  if (!liveUrl) return null;

  return (
    <div className="mt-4">
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center gap-1 rounded-md bg-accent-blue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-blue/90"
      >
        <ExternalLink className="h-4 w-4" />
        Visit Website
      </a>
    </div>
  );
}

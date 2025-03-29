"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  return (
    <Link
      href="/projects"
      className="mb-8 inline-flex items-center gap-2 text-primary transition-colors hover:text-accent-blue"
    >
      <ArrowLeft className="h-4 w-4" />
      Back to all projects
    </Link>
  );
}

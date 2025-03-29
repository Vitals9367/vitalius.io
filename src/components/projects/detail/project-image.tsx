"use client";

import Image from "next/image";

interface ProjectImageProps {
  src: string;
  alt: string;
}

export function ProjectImage({ src, alt }: ProjectImageProps) {
  return (
    <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-lg border border-gray-100 shadow-sm">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        priority
        className="object-cover"
      />
    </div>
  );
}

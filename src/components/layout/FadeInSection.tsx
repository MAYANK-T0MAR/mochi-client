"use client"

import React, { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
  once?: boolean;
  className?: string;
}

export function FadeInSection({ children, delay = 0, once = true, className = "" }: FadeInSectionProps) {
  const { ref, isVisible } = useInView({ once });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-in-out transform
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-36"} ${className}`}
    >
      {children}
    </div>
  );
}

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-card border border-secondary/20 rounded-lg shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      {children}
    </div>
  );
}


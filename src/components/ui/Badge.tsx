interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "active" | "paused" | "completed";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    default: "bg-secondary/10 text-secondary",
    active: "bg-success-bg text-success",
    paused: "bg-warning-bg text-warning",
    completed: "bg-info-bg text-info",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

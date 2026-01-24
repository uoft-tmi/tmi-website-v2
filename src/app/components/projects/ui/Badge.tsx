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
    active: "bg-green-500/10 text-green-600 dark:text-green-400",
    paused: "bg-gray-500/10 text-gray-600 dark:text-gray-400",
    completed: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}


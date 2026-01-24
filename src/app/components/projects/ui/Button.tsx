import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = "primary",
  external = false,
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60";

  const variantStyles = {
    primary: "bg-primary text-onAccent hover:bg-hover-orange",
    secondary: "bg-secondary text-onAccent hover:bg-hover-teal",
    outline:
      "border border-secondary/30 text-secondary hover:bg-secondary/10",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}


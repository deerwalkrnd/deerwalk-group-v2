type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`btn btn-${variant}${className ? ` ${className}` : ""}`}
    >
      {children}
    </a>
  );
}

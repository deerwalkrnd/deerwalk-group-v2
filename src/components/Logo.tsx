import { ResponsiveImage } from "@/components/ResponsiveImage";

type LogoProps = {
  priority?: boolean;
  className?: string;
};

/** Keep current stacked brand logo as-is */
export function Logo({ priority = false, className = "" }: LogoProps) {
  return (
    <a
      href="/"
      className={`logo${className ? ` ${className}` : ""}`}
      aria-label="Deerwalk Group home"
    >
      <ResponsiveImage
        src="/images/dwg/logo.webp"
        alt="Deerwalk Group"
        width={285}
        height={96}
        className="logo-image"
        priority={priority}
      />
    </a>
  );
}

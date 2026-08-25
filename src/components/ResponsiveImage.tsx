import Image, { type ImageProps } from "next/image";

type ResponsiveImageProps = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
};

/**
 * Thin wrapper around next/image for static export.
 * Images are served from /public — compress to WebP before dropping them in.
 */
export function ResponsiveImage({
  src,
  alt,
  sizes = "100vw",
  ...props
}: ResponsiveImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      sizes={sizes}
      // Static export: next/image still gives lazy loading + responsive layout
      loading={props.priority ? undefined : "lazy"}
      {...props}
    />
  );
}

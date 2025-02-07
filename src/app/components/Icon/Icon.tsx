import Image from "next/image";

interface Icon {
  width: number;
  height: number;
  src: string;
  className?: string;
  alt: string;
}

export default function Icon({ width, height, src, className, alt }: Icon) {
  return (
    <Image
      width={width}
      src={src}
      height={height}
      className={className}
      alt={alt}
    />
  );
}

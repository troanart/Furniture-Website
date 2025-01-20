import Image from "next/image";

interface IconButtonProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function IconButton({
  src,
  alt,
  width,
  height,
  className,
}: IconButtonProps) {
  return (
    <button>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    </button>
  );
}

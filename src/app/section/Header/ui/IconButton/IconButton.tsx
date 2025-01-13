import Image from "next/image";

interface IconButtonProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function IconButton({
  src,
  alt,
  width,
  height,
}: IconButtonProps) {
  return (
    <button>
      <Image src={src} alt={alt} width={width} height={height} />
    </button>
  );
}

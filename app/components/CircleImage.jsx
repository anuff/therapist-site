import Image from 'next/image';

export default function CircleImage({ src, alt, size = 256 }) {
  return (
    <div
      className="relative overflow-hidden rounded-full"
      style={{ width: size, height: size }}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

export default function CircleImage({ src, alt, size }) {
  return (
    <div
      className={`relative overflow-hidden rounded-full aspect-square
        ${
          size === 'big'
            ? 'w-40 h-40 md:w-80 md:h-80'
            : 'w-20 h-20 md:w-60 md:h-60'
        }
      `}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}

export default function CircleImage({ src, alt, size }) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-full aspect-square
        ${size === 'big' ? 'w-40 md:w-80' : 'w-20 md:w-70'}
      `}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}

export default function HalfRoundImage({ src, alt, className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-t-full object-cover ${className}`}
    />
  );
}

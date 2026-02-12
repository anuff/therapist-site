export default function HalfRoundImage({ src, alt, size }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-t-full object-cover aspect-5/7 
        ${size === 'big' ? 'w-40 md:w-125' : 'w-30 md:h-150 md:w-100'}
      `}
    />
  );
}

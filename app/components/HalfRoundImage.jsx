export default function HalfRoundImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="md:w-[500] h-[700] rounded-t-full object-cover"
    />
  );
}

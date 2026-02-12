// import SecondaryButton from './SecondaryButton.jsx';

export default function SplitSection({
  title,
  imageSrc,
  paragraph1,
  paragraph2,
  bullets = [],
  reverse = false,
}) {
  return (
    <section className="flex flex-col-reverse md:h-[80vh] md:flex-row md:h-screen">
      {/* TEXT SIDE */}
      <div
        className={`flex flex-col justify-center md:flex-col h-[80%] px-12 md:w-1/2 md:h-full
        ${reverse ? 'md:order-2 bg-purple py-10 md:py-20' : 'bg-secondary py-10 md:py-10'}`}
      >
        <h2>{title}</h2>

        {paragraph1 && <p className="mb-4">{paragraph1}</p>}

        {bullets.length > 0 && (
          <ul className="list-disc pl-5 mb-4 space-y-2">
            {bullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}

        {paragraph2 && <p>{paragraph2}</p>}
        {/* <div>
          <SecondaryButton className="w-full max-w-xs md:max-w-sm">
            GET IN TOUCH →
          </SecondaryButton>
        </div> */}
      </div>

      {/* IMAGE SIDE */}
      <div
        className={`md:w-1/2 md:h-full h-[40%] w-full object-cover
        ${reverse ? 'md:order-1' : ''}`}
      >
        <img
          src={imageSrc}
          alt="Section image"
          className="fill h-full w-full object-cover"
        />
      </div>
    </section>
  );
}

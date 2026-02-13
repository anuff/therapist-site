import SecondaryButton from './SecondaryButton.jsx';
import { FiArrowRight } from 'react-icons/fi';

export default function SplitSection({
  title,
  imageSrc,
  paragraph1,
  paragraph2,
  bullets = [],
  reverse = false,
}) {
  return (
    <section
      className={`flex flex-col-reverse md:flex-row md:h-screen
    ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      {/* TEXT SIDE */}
      <div className="md:w-1/2 ">
        <div
          className={`flex flex-col md:h-full
          ${reverse ? 'md:order-2 bg-purple md:pt-7' : 'bg-secondary pt-5 md:pt-40'}`}
        >
          <div className="flex flex-col gap-4 px-10">
            <h2>{title}</h2>

            {paragraph1 && <p className="mb-4">{paragraph1}</p>}
            {bullets.length > 0 && (
              <ul className="list-disc pl-15 mb-4 space-y-2">
                {bullets.map((item, i) => (
                  <li key={i}>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            )}

            {paragraph2 && <p>{paragraph2}</p>}
          </div>

          <div className="mt-auto h-10 md:h-16.5 ">
            <SecondaryButton>
              GET IN TOUCH <FiArrowRight />
            </SecondaryButton>
          </div>
        </div>
      </div>

      {/* IMAGE SIDE */}
      <div
        className={`h-70 md:w-1/2 md:h-full w-full object-cover
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

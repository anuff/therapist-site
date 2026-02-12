import HalfRoundImage from './HalfRoundImage';
import CircleImage from './CircleImage';
import HeroImageTwo from '@/public/hero-image-2.webp';
import Flowers from '@/public/flowers.webp';
import PrimaryButton from './PrimaryButton';

export default function AboutSection() {
  return (
    <section className="bg-secondary py-20 md:pb-32">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* IMAGE */}
          <div className="relative w-full md:w-1/2 flex justify-center order-1 md:order-2">
            <HalfRoundImage
              src={HeroImageTwo.src}
              alt="Main image"
              size="small"
            />

            <div className="absolute -bottom-2 left-1/2 md:-bottom-10 md:left-3/4 transform -translate-x-1/2">
              <CircleImage src={Flowers.src} alt="Flower detail" size="small" />
            </div>
          </div>

          {/* TEXT */}
          <div className="flex flex-col space-y-6 w-full md:w-1/2 order-2 md:order-1">
            <h2>Hi, I’m Lilac.</h2>

            <p>
              I'm committed to providing a safe and supportive environment where
              we can explore your thoughts, feelings, and behaviors. With
              empathy and guidance, we'll work together to navigate the
              challenges life throws your way.
            </p>

            <div className="flex justify-center py-10">
              <PrimaryButton>LET’S CHAT →</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

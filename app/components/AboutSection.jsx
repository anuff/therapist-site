import HalfRoundImage from './HalfRoundImage';
import CircleImage from './CircleImage';
import HeroImageTwo from '@/public/hero-image-2.webp';
import Flowers from '@/public/flowers.webp';

export default function AboutSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* IMAGE FIRST ON MOBILE */}
          <div className="relative w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
            <HalfRoundImage
              src={HeroImageTwo.src}
              alt="Main image"
              className="w-95 h-150"
            />

            <div className="absolute -bottom-12 -right-30">
              <CircleImage src={Flowers.src} alt="Flower detail" />
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

            <div>
              <button>LET’S CHAT →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

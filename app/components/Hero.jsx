import HalfRoundImage from './HalfRoundImage.jsx';
import PrimaryButton from './PrimaryButton.jsx';
import HeroImage from '@/public/hero-image-green.png';
import { FiArrowRight } from 'react-icons/fi';
import '../globals.css';

export default function Hero() {
  return (
    <section className="bg-primary flex flex-col md:flex-row justify-between items-center px-5 md:px-20 pt-5 gap-10 overflow-x-hidden">
      {/* LEFT: Image */}
      <div>
        <HalfRoundImage src={HeroImage.src} alt="Main image" size="big" />
      </div>

      {/* RIGHT: Text */}
      <div className="flex flex-col pb-20 md:flex-col items-center m-auto gap-5">
        <h1>
          Where healing
          <br /> helps you grow
        </h1>

        <p className="text-center mb-6">
          Licensed Clinical Psychologist in Santa Monica, California.
        </p>

        <PrimaryButton mode="light">
          <a href="/contact">CONNECT WITH ME</a> <FiArrowRight />
        </PrimaryButton>
      </div>
    </section>
  );
}

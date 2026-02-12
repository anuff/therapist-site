import HalfRoundImage from './HalfRoundImage.jsx';
import PrimaryButton from './PrimaryButton.jsx';
import HeroImageOne from '@/public/hero-image-1.webp';
import '../globals.css';

export default function Hero() {
  return (
    <section className="bg-primary flex flex-col md:flex-row justify-between items-center px-5 md:px-20 pt-5 gap-10 overflow-x-hidden">
      {/* LEFT: Image */}
      <div>
        <HalfRoundImage src={HeroImageOne.src} alt="Main image" size="big" />
      </div>

      {/* RIGHT: Text */}
      <div className="flex flex-col pb-20 md:flex-col items-center m-auto gap-5">
        <h1>
          Live your life <br /> in full bloom
        </h1>

        <p className="text-center mb-6">
          Therapy for Adults in Minneapolis, MN.
        </p>

        <PrimaryButton>CONNECT WITH ME →</PrimaryButton>
      </div>
    </section>
  );
}

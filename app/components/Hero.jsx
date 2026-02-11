import HalfRoundImage from './HalfRoundImage.jsx';
import PrimaryButton from './PrimaryButton.jsx';
import Button from './PrimaryButton.jsx';
import heroImage from '@/public/hero-image.webp';

export default function Hero() {
  return (
    <section className="bg-pink-500 flex flex-col md:flex-row justify-between items-center px-20 gap-10">
      {/* <section className="bg-pink-500 grid grid-cols-2 items-center"> */}
      {/* LEFT: Image */}
      <div className="border-2">
        <HalfRoundImage src={heroImage.src} alt="Lilac flowers" />
      </div>

      {/* RIGHT: Text */}
      <div className="flex flex-col items-center border-2 m-auto">
        <h1 className="text-center">
          Live your life <br /> in full bloom
        </h1>

        <p className="text-center">Therapy for Adults in Minneapolis, MN.</p>

        <PrimaryButton>CONNECT WITH ME →</PrimaryButton>
      </div>
    </section>
  );
}

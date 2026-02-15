import PrimaryButton from './PrimaryButton';
import { FiArrowRight } from 'react-icons/fi';

export default function GetStarted() {
  return (
    <section
      className=" flex flex-col gap-15
    items-center py-20 md:py-35 bg-accent"
    >
      <div className="flex flex-col items-center gap-5 px-4 md:px-2 ">
        <h2 className="text-white">Get started today.</h2>
        <p className="text-center text-white">
          Ready to take the first step towards a happier, healthier you? <p />
          Contact me to book your first session. I look forward to starting this
          therapeutic journey <p>with you.</p>
        </p>
      </div>
      <PrimaryButton mode="dark">
        <a href="/contact">GET IN TOUCH </a>
        <FiArrowRight />
      </PrimaryButton>
    </section>
  );
}

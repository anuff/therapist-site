import PrimaryButton from './PrimaryButton';

export default function GetStarted() {
  return (
    <section
      className="flex flex-col gap-15
    items-center py-35 bg-green"
    >
      <div className="flex flex-col items-center gap-5">
        <h3 className="text-white text-4xl">Get started today.</h3>
        <p className="text-center text-white">
          Ready to take the first step towards a happier, healthier you? <p />
          Contact me to book your first session. I look forward to starting this
          therapeutic journey <p>with you.</p>
        </p>
      </div>
      <PrimaryButton>get in touch</PrimaryButton>
    </section>
  );
}

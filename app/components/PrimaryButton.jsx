export default function PrimaryButton({ children }) {
  return (
    <button className=" flex w-50 justify-center border border-[#2f3e1f] tracking-wide hover:bg-[#2f3e1f] hover:text-white transition">
      {children}
    </button>
  );
}

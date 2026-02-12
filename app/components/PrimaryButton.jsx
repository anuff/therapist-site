export default function PrimaryButton({ children }) {
  return (
    <button className="flex justify-center border border-[#2f3e1f] tracking-wide hover:bg-[#2f3e1f] hover:text-white transition text-[10px] py-2 px-4 cursor-pointer">
      {children}
    </button>
  );
}

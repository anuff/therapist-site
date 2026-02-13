export default function SecondaryButton({ children }) {
  return (
    <button className="flex w-full h-full justify-center items-center border-t tracking-wide hover:bg-[#2f3e1f] hover:text-white transition text-[15px] font-medium cursor-pointer">
      {children}
    </button>
  );
}

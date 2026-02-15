export default function SecondaryButton({ children }) {
  return (
    <button className="flex w-full h-full justify-center items-center border-t tracking-wide hover:bg-green-950 hover:text-white transition text-[15px] font-bold cursor-pointer">
      {children}
    </button>
  );
}

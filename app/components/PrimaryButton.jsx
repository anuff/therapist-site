export default function PrimaryButton({ children, mode = '' }) {
  return (
    <button
      className={`
        flex justify-center items-center border tracking-wide transition text-[12px] font-medium py-3 px-6 cursor-pointer

        ${
          mode === 'dark'
            ? 'text-white hover:bg-[#ffffff] hover:text-[#7d7a46] border-[#ffffff]'
            : 'text-[#0c0c0c] hover:bg-[#2f3e1f] hover:text-white border-black'
        }
      `}
    >
      {children}
    </button>
  );
}

export default function PrimaryButton({ children, mode = '' }) {
  return (
    <button
      className={`
        flex justify-center items-center border tracking-wide transition text-[13px] font-semibold py-3 px-6 cursor-pointer

        ${
          mode === 'dark'
            ? 'text-white hover:bg-[#ffffff] hover:text-[#7d7a46] border-[#ffffff]'
            : 'text-darkOlive hover:bg-secondary hover:text-white border-[#2f3e1f]'
        }
      `}
    >
      {children}
    </button>
  );
}

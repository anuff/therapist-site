'use client';

import { FiPlus, FiMinus } from 'react-icons/fi';

export default function Accordion({
  title,
  content,
  isOpen,
  onToggle,
  iconPosition = 'left',
}) {
  const Icon = isOpen ? <FiMinus /> : <FiPlus />;

  return (
    <div className="border-b">
      <button
        className="flex items-center justify-between w-full py-2 text-left"
        onClick={onToggle}
      >
        {iconPosition === 'left' && (
          <span className="text-xl mr-3">{Icon}</span>
        )}

        <h5 className={`flex-1`}>{title}</h5>

        {iconPosition === 'right' && (
          <span className="text-xl ml-3">{Icon}</span>
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div>{content}</div>
      </div>
    </div>
  );
}

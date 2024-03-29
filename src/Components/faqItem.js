import { useState } from "react";
export default function FAQItem(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div
        className={`border-b border-b-slate-200 py-5  ${isOpen ? 'open' : ''}`}
      >
        <h3 className="flex">
          <button
            type="button"
            aria-controls="radix-:R4d4vf7ba:"
            aria-expanded={isOpen ? "true" : "false"}
            className="flex flex-1 items-center justify-between font-medium transition-all sm:text-lg"
            onClick={handleToggle}
          >
            <h3 className="text-left md:text-lg">
              {props.question}
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`lucide lucide-chevron-down h-5 w-5 flex-none transition-transform duration-300 ${isOpen && "rotate-180"}`}
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
        </h3>
        <div
          className={`overflow-hidden text-sm text-gray-500 transition-all sm:text-base content ${isOpen ? "open" : ""}`}
        >
         {props.answer}
          {/* Content goes here */}
        </div>
      </div>
  );
}

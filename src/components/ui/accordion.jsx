import React, { useState } from "react";

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            className="flex justify-between items-center w-full py-4 text-left text-lg font-normal focus:outline-none"
            onClick={() => toggleItem(index)}
          >
            {item.question}
            <svg
              className={`w-4 h-4 transition-transform ${
                openIndex === index ? "transform rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className="pb-4 text-gray-600">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

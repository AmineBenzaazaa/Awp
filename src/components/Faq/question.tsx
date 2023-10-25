"use client";
import { useState } from "react";

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`py-2 ${isOpen ? '' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div
            className={`border-gray-300 my-4 pb-4 border-b-2 ${
              isOpen ? 'border-gray-300 my-4 pb-4 border-b-2' : ''
            }`}
          >
            <div
              className="flex cursor-pointer items-center justify-between"
              onClick={toggleAnswer}
            >
              <div className="text-xl font-normal">{question}</div>

              <div className="rotate-0 transform transition-transform">
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </div>
            </div>
            {isOpen && (
              <div className="mt-4 ">
                <p className="text-body-color text-[18px]">{answer}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;

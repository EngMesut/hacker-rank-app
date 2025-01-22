import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const messages = [
    {
      text: "69% of tech leaders are preparing their teams for GenAI. Uncover more insights in the AI Skills Report.",
      action: "Read now",
    },
    {
      text: "Adapt your hiring strategy for an AI-powered future. Uncover more insights in our latest whitepaper.",
      action: "Read Now",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(timer);
  }, [messages.length]);

  const handlePrevious = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + messages.length) % messages.length
      );
      setIsVisible(true);
    }, 500);
  };

  const handleNext = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
      setIsVisible(true);
    }, 500);
  };

  return (
    <div className="relative bg-green-600 text-white px-4 py-3 overflow-hidden">
      <div className="flex items-center justify-center gap-3 text-sm md:text-base">
        <button
          className="absolute left-5  text-white/80 hover:text-white transition-colors"
          onClick={handlePrevious}
        >
          <span className="sr-only">Previous</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-5 h-5 font-bold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-left flex-1 pl-12 text-white font-bold"
            >
              <motion.button
                className="text-center flex-1 hover:bg-white/5 rounded-lg px-4 py-2 transition-colors"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {messages[currentIndex].text}
              </motion.button>

              <motion.button
                className="whitespace-nowrap font-medium border border-white/40 rounded px-4 py-2 text-sm hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {messages[currentIndex].action}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          className="absolute right-5 text-white/80 hover:text-white transition-colors"
          onClick={handleNext}
        >
          <span className="sr-only">Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Banner;

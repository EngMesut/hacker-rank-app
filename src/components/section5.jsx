import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "We’re discovering new ways of attracting candidates to the organization. By using HackerRank, we’re actually improving the tech image of UBS.",
    logo: "img/ubs_black.png",
    alt: "UBS logo",
  },
  {
    quote:
      "HackerRank has actually allowed us to look for diamonds in the rough that our old process.",
    logo: "img/vmware_black.png",
    alt: "Vmware logo",
  },
  {
    quote:
      "We’re promoting our jobs to a much wider audience and allowing candidates to be selected for interviews purely based on the merit of their coding abilities.",
    logo: "img/booking_black.png",
    alt: "Booking logo",
  },
  {
    quote:
      "We cut down hiring time by months, which was huge for us. We owe that to HackerRank.",
    logo: "img/doordash_black.png",
    alt: "DoorDash logo",
  },
  {
    quote:
      "HackerRank is a critical piece of our candidate’s experience, and hitting the right tone is just as important as identifying good candidates.",
    logo: "img/vanguard_black.png",
    alt: "Vanguard logo",
  },
  {
    quote:
      "HackerRank has been a huge help in making it easy to assess the skills of all the candidates we interview.Without it, the process of scaling our engineering team would have been very cumbersome.",
    logo: "img/wish_black.png",
    alt: "Wish logo",
  },
];

const companies = [
  { name: "Peloton", logo: "img/peloton_black.png" },
  { name: "Atlassian", logo: "img/atlassian_black.png" },
  { name: "Bloomberg", logo: "img/bloomberg_black.png" },
  { name: "VMware", logo: "img/vmware_black.png" },
  { name: "Stripe", logo: "img/stripe_black.png" },
  { name: "Goldman Sachs", logo: "img/goldmansachs_black.png" },
  { name: "Adobe", logo: "img/adobe_black.png" },
  { name: "LinkedIn", logo: "img/linkedin_black.png" },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Section5() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Every company is a tech company.
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-emerald-500">
            We're here to help 'em all.
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
            More than 3,000 tech teams, representing all industries and from
            countries around the world, trust HackerRank to connect with
            developers and add cutting-edge skills to their teams.
          </p>
          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
            That includes 25% of the Fortune 100 — and that moonshot startup
            that just came out of stealth.
          </p>
        </div>

        <div
          className="relative bg-gray-50 rounded-lg p-12"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="h-[200px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
                className="absolute inset-0"
              >
                <div className="flex flex-col items-center justify-between h-full pb-12">
                  {/* Logo above the quote */}
                  <img
                    src={testimonials[currentSlide].logo}
                    alt={testimonials[currentSlide].alt}
                    width={120}
                    height={40}
                    className="h-16 w-auto object-contain mb-4" // Added margin-bottom to space out logo
                  />
                  <p className="text-gray-600 text-xl text-center">
                    {testimonials[currentSlide].quote}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: testimonials.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsAutoPlaying(false);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  currentSlide === index
                    ? "bg-emerald-500"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {companies.map((company) => (
            <div key={company.name} className="flex justify-center">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-16 w-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity dark:grayscale-0 dark:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

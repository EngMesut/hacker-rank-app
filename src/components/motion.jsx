"use client";

import { motion, useScroll, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
  export default function Motion() {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = scrollY.get();
      const isScrollingDown = current > lastScrollY.current;
      lastScrollY.current = current;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionBottom = sectionTop + sectionRef.current.offsetHeight;
      const windowBottom = window.scrollY + window.innerHeight;
      const windowTop = window.scrollY;

      if (windowBottom >= sectionTop && windowTop <= sectionBottom) {
        if (isScrollingDown) {
          controls.start("scrollUp");
        } else {
          controls.start("scrollDown");
        }
      } else {
        controls.start("scrollDown");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, scrollY]);

  const containerVariants = {
    scrollDown: {
      opacity: 1,
      y: 100,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    scrollUp: {
      opacity: 1,
      y: -20,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const iconVariants = {
    scrollDown: {
      opacity: 1,
      y: 100,
      transition: { duration: 0.3 },
    },
    scrollUp: {
      opacity: 1,
      y: -20,
      transition: { duration: 0.5 },
    },
  };

  const techIcons = [
    { name: "Git", src: "img/tool1.png" },
    { name: "React", src: "img/tool2.png" },
    { name: "VSCode", src: "img/tool3.png" },
    { name: "Visual Studio", src: "img/tool4.png" },
    { name: "Document", src: "img/tool5.png" },
    { name: "Code Editor", src: "img/tool6.png" },
    { name: "Spreadsheet", src: "img/tool7.png" },
  ];
    return (
      <div
        ref={sectionRef}
        className="py-12 sm:py-16 md:py-24 bg-white overflow-hidden" style={{ paddingLeft: "5rem", paddingRight: "5rem",marginTop: "-16rem" }}
        
      >
        <motion.div
          variants={containerVariants}
          animate={controls}
          className="flex flex-wrap justify-around items-center mt-8 sm:mt-12 md:mt-20"
        >
          {techIcons.map((icon, index) => (
            <motion.div
              key={icon.name}
              variants={iconVariants}
              className="group m-2 sm:m-4"
            >
              <img
                src={icon.src || "/placeholder.svg"}
                alt={icon.name}
                className="w-12 h-12 sm:w-16 sm:h-16 grayscale hover:grayscale-0 transition-all duration-300 
                         transform group-hover:scale-110 cursor-pointer"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
}
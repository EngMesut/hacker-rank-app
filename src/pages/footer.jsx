import React from "react";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const footerSections = {
    PRODUCTS: [
      "Screen",
      "Interview",
      "Engage",
      "SkillUp",
      "Certified Assessments",
      "Plagiarism Detection",
      "Real World Questions",
    ],
    SOLUTIONS: [
      "Set Up a Skills Strategy",
      "Showcase Your Talent Brand",
      "Optimize Your Hiring Process",
      "Mobilize Your Internal Talent",
    ],
    RESOURCES: [
      "Blog",
      "Customer Stories",
      "Roles Directory",
      "Partners",
      "Integrations",
      "What's New",
    ],
    "ABOUT US": ["Careers", "Our Team", "Newsroom", "Status", "Trust"],
    "GET STARTED": [
      "Pricing",
      "Free Trial",
      "Contact Us",
      "Request Demo",
      "Product Support",
      "For Developers",
    ],
  };

  return (
    <footer className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {Object.entries(footerSections).map(([title, links]) => (
          <div key={title} className="flex flex-col space-y-4">
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              {title}
            </h2>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500">Copyright © 2024 HackerRank</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">HackerRank</span>
              <svg viewBox="0 0 16 16" className="w-6 h-6" fill="currentColor">
                <path d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4zm15 0c0-2.2-1.8-4-4-4s-4 1.8-4 4 1.8 4 4 4 4-1.8 4-4z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

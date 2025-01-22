import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();

  const menuItems = {
    products: {
      title: "Products",
      sections: {
        products: {
          title: "Products",
          items: [
            {
              title: "Screen",
              description: "Save time and accelerate your hiring.",
            },
            {
              title: "Interview",
              description: "Conduct stellar technical interviews.",
            },
            {
              title: "Engage",
              description: "Promote your tech brand.",
            },
            {
              title: "SkillUp",
              description: "Mobilize your tech talent.",
            },
          ],
        },
        features: {
          title: "Features",
          items: [
            {
              title: "Certified Assessments",
              description: "Launch standardized, role-based tests in minutes.",
            },
            {
              title: "Plagiarism Detection",
              description:
                "Ensure fairness with AI-powered plagiarism detection.",
            },
            {
              title: "Real World Questions",
              description:
                "Assess technical hires with real-world coding questions.",
            },
            {
              title: "Integrations",
              description: "Seamlessly connect with your favorite tools.",
            },
          ],
        },
      },
    },
    solutions: {
      title: "Solutions",
      sections: {
        whatWeDo: {
          title: "What We Do",
          items: [
            {
              title: "Set Up Your Skills Strategy",
              description: "Develop a comprehensive skills assessment plan.",
            },
            {
              title: "Showcase Your Tech Brand",
              description: "Build your employer brand to attract top talent.",
            },
            {
              title: "Optimize Your Hiring Process",
              description: "Streamline your technical hiring workflow.",
            },
            {
              title: "Mobilize Your Internal Talent",
              description: "Develop and retain your technical talent.",
            },
          ],
        },
        useCases: {
          title: "Use Cases",
          items: [
            {
              title: "Remote Hiring",
              description: "Hire top talent regardless of location.",
            },
            {
              title: "University Hiring",
              description: "Find and assess entry-level talent.",
            },
          ],
        },
      },
    },
    resources: {
      title: "Resources",
      sections: {
        learn: {
          title: "Learn",
          items: [
            {
              title: "Blog",
              description: "Hiring best practices and industry insights.",
            },
            {
              title: "Roles Directory",
              description: "Explore the definitive directory of tech roles.",
            },
            {
              title: "Resource Library",
              description: "Guides, datasheets, and data-driven content.",
            },
            {
              title: "Customer Stories",
              description: "How leading companies use HackerRank.",
            },
            {
              title: "2024 AI Skills Report",
              description: "Research and insights on the state of AI skills.",
            },
          ],
        },
        productHelp: {
          title: "Product Help",
          items: [
            {
              title: "October Release",
              description: "Discover what's new with HackerRank.",
            },
            {
              title: "Responsible AI",
              description: "Learn more about how we work with AI.",
            },
            {
              title: "What's New",
              description: "Get the latest product news and updates.",
            },
            {
              title: "Partners",
              description: "Learn more about the HackerRank Partner Network.",
            },
            {
              title: "Support",
              description: "Everything you need to know to get started.",
            },
          ],
        },
      },
    },
  };

  return (
    <nav className="border-b relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold">HackerRank</span>
              <div className="w-2 h-2 bg-green-600 ml-1"></div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            {Object.entries(menuItems).map(([key, menu]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setHoveredItem(key)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  to="#"
                  className={`text-gray-600 hover:text-gray-900 relative group ${
                    location.pathname === `/${key}` ? "text-green-600" : ""
                  }`}
                >
                  {menu.title}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transition-transform origin-left ${
                      location.pathname === `/${key}`
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></div>
                </Link>

                {hoveredItem === key && (
                  <div className="absolute top-full left-0 mt-1 w-[600px] bg-white rounded-lg shadow-lg p-8 grid grid-cols-2 gap-8 z-50">
                    {Object.entries(menu.sections).map(
                      ([sectionKey, section]) => (
                        <div key={sectionKey}>
                          <h3 className="text-sm font-medium text-gray-400 mb-4">
                            {section.title}
                          </h3>
                          <div className="space-y-6">
                            {section.items.map((item, index) => (
                              <div key={index} className="group cursor-pointer">
                                <h4 className="text-base font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                                  {item.title}
                                </h4>
                                <p className="text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/pricing"
              className={`text-gray-600 hover:text-gray-900 relative group ${
                location.pathname === "/pricing" ? "text-green-600" : ""
              }`}
            >
              Pricing
              <div
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transition-transform origin-left ${
                  location.pathname === "/pricing"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></div>
            </Link>
            <Link
              to="#"
              className="text-gray-600 hover:text-gray-900 relative group pl-20 "
            > 
              For developers
              <div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transition-transform origin-left scale-x-0 group-hover:scale-x-100"
              ></div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="#"
              className="text-gray-600 hover:text-gray-900 relative group"
            >
              Log in
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transition-transform origin-left scale-x-0 group-hover:scale-x-100"></div>
            </Link>
            <Link
              to="/request-demo"
              className={`text-gray-600 hover:text-gray-900 relative group ${
                location.pathname === "/request-demo" ? "text-green-600" : ""
              }`}
            >
              Request demo
              <div
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transition-transform origin-left ${
                  location.pathname === "/request-demo"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></div>
            </Link>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

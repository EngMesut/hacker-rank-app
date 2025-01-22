"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import FeaturesTable from "./features-table";
import FAQSection from "./faq-section";
import Footer from "../components/footer";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className="w-5 h-5 text-green-600"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
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

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const plans = {
    starter: {
      name: "Starter",
      monthly: {
        price: 199,
        period: "Per month",
        attempts: "10 attempts per month",
      },
      annual: {
        price: 165,
        period: "mo",
        billedAmount: 1990,
        attempts: "120 attempts per year",
      },
      description: "The basics to start hiring:",
      features: [
        "1 user",
        "Access to Screen + Interview",
        "Advanced plagiarism detection",
        "1000 questions",
        (attempts) => attempts,
        "$15 per additional attempt",
      ],
    },
    pro: {
      name: "Pro",
      monthly: {
        price: 449,
        period: "Per month",
        attempts: "25 attempts per month",
      },
      annual: {
        price: 375,
        period: "mo",
        billedAmount: 4490,
        attempts: "300 attempts per year",
      },
      description: "Everything in Starter plus:",
      features: [
        "Unlimited users",
        {
          title: "Integrations:",
          subItems: [
            "ATS: Greenhouse, Lever, Ashby",
            "Calendar: Google & Outlook",
          ],
        },
        "2000 questions",
        (attempts) => attempts,
        "Ability to pre-purchase additional attempts at checkout (annual plan only)",
      ],
    },
    enterprise: {
      name: "Enterprise",
      price: "Custom",
      description: "",
      features: [
        "Custom users and attempts",
        "Certified assessments",
        {
          title: "40+ integrations",
          subtext: "(including Workday, Oracle, and Eightfold)",
        },
        "Full library of 6000+ questions",
        "Advanced user roles and permissions",
        "Test up to 100k candidates at once",
        "Designated account manager",
        "Access to Professional Services",
        "Single sign on (SSO/SCIM)",
        "Premium support",
      ],
    },
  };

  const getPlanPricing = (plan, type) => {
    if (type === "monthly") {
      return (
        <div>
          <div className="text-4xl font-bold">${plan.monthly.price}</div>
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            {plan.monthly.period}
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="text-4xl font-bold">${plan.annual.price}/mo</div>
        <div className="text-green-600 text-sm">
          ${plan.annual.billedAmount} billed annually
        </div>
      </div>
    );
  };

  const getFeatures = (features, plan, period) => {
    return features.map((feature, index) => {
      if (typeof feature === "function") {
        feature =
          period === "monthly" ? plan.monthly.attempts : plan.annual.attempts;
      }
      return feature;
    });
  };

  return (
    <div>
      <div
        className="bg-gradient-to-r from-[#e6f8e6] from-50% via-white via-60% to-[#f0eaff] to-[90%]"
        style={{
          height: "calc(100vh - 64px)"
        }}
      >
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">
                Choose a plan that works for you
              </h1>
              <p className="text-gray-600 max-w-3xl mx-auto">
                From interns to experienced hires, evaluate skills for any
                developer role including: software engineer, back-end,
                front-end, DevOps, data scientist, and QA/SDET.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center mb-12"
        style={{ marginTop: "-20rem" }}
      >
        <div className="relative inline-flex rounded-full p-1 bg-gray-100">
          <span className="absolute -top-6 right-0 text-sm text-green-600 whitespace-nowrap">
            2 Months Free!
          </span>
          <button
            className={`px-6 py-2 text-sm font-medium rounded-full transition-colors
                  ${
                    billingPeriod === "monthly"
                      ? "bg-black text-white"
                      : "text-gray-600"
                  }`}
            onClick={() => setBillingPeriod("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 text-sm font-medium rounded-full transition-colors
                  ${
                    billingPeriod === "annual"
                      ? "bg-black text-white"
                      : "text-gray-600"
                  }`}
            onClick={() => setBillingPeriod("annual")}
          >
            Annual
          </button>
        </div>
      </div>

      <div
        className="grid md:grid-cols-3 gap-8"
        style={{ paddingLeft: "5rem", paddingRight: "5rem" }}
      >
        {/* Starter Plan */}
        <div className="rounded-2xl border p-8 bg-white">
          <h3 className="text-green-600 font-medium mb-4">
            {plans.starter.name}
          </h3>
          <div className="mb-6">
            {getPlanPricing(plans.starter, billingPeriod)}
          </div>
          <p className="text-gray-600 mb-6">{plans.starter.description}</p>
          <ul className="space-y-4 mb-8">
            {getFeatures(
              plans.starter.features,
              plans.starter,
              billingPeriod
            ).map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
          <Button variant="outline" className="w-full">
            Buy Now
          </Button>
        </div>

        {/* Pro Plan */}
        <div className="rounded-2xl p-8 bg-[#141c2f] text-white relative">
          <div className="absolute inset-1.5 rounded-[14px] bg-[#1e293b] -z-10"></div>
          <h3 className="text-green-600 font-medium mb-4">{plans.pro.name}</h3>
          <div className="mb-6">{getPlanPricing(plans.pro, billingPeriod)}</div>
          <p className="text-gray-400 mb-6">{plans.pro.description}</p>
          <ul className="space-y-4 mb-8">
            {getFeatures(plans.pro.features, plans.pro, billingPeriod).map(
              (feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckIcon />
                  {typeof feature === "string" ? (
                    <span className="text-gray-300">{feature}</span>
                  ) : (
                    <div>
                      <div className="text-gray-300">{feature.title}</div>
                      {feature.subItems?.map((subItem, subIndex) => (
                        <div
                          key={subIndex}
                          className="text-gray-400 text-sm mt-1 ml-4"
                        >
                          {subItem}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              )
            )}
          </ul>
          <Button className="w-full bg-green-600 hover:bg-green-700">
            Buy Now
          </Button>
        </div>

        {/* Enterprise Plan */}
        <div className="rounded-2xl border p-8 bg-white">
          <h3 className="text-green-600 font-medium mb-4">
            {plans.enterprise.name}
          </h3>
          <div className="mb-6">
            <div className="text-4xl font-bold">Custom Pricing</div>
          </div>
          <ul className="space-y-4 mb-8">
            {plans.enterprise.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckIcon />
                {typeof feature === "string" ? (
                  <span className="text-gray-600">{feature}</span>
                ) : (
                  <div>
                    <span className="text-gray-600">{feature.title}</span>
                    {feature.subtext && (
                      <div className="text-gray-500 text-sm ml-0">
                        {feature.subtext}
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <Button variant="outline" className="w-full">
            Contact Us
          </Button>
        </div>
      </div>
      <FeaturesTable />
      <FAQSection />
      {/* <Footer /> */}
      <Footer/>
    </div>
  );
}

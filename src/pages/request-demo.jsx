"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Input } from "../components/ui/input";
import Footer from "../components/footer";

export default function RequestDemo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    companyName: "",
    jobTitle: "",
    companySize: "",
    phoneNumber: "",
    country: "",
  });

  const companySizes = [
    "1-100",
    "101-500",
    "501-1000",
    "1001-5000",
    "5001-10000",
    "10000+",
  ];

  const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "India",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "Brazil",
    "Spain",
    "Netherlands",
    "Sweden",
    "Singapore",
    "South Korea",
    // Add more countries as needed
  ];

  const features = [
    {
      text: "Set up a skills strategy. Take a deliberate, scientific approach to pursuing tech skills.",
    },
    {
      text: "Showcase your tech brand. Host coding events and connect with developers.",
    },
    {
      text: "Optimize your hiring process. Validate the skills you need using tools developers love.",
    },
    {
      text: "Mobilize your internal talent. Inventory internal capabilities and close technical skills gaps.",
    },
  ];

  const trustedCompanies = [
    {
      name: "Airbnb",
      logo: "img/tool6.png",
    },
    {
      name: "Cisco",
      logo: "img/tool4.png",
    },
    {
      name: "Dropbox",
      logo: "img/tool2.png",
    },
    {
      name: "DraftKings",
      logo: "img/tool1.png",
    },
    {
      name: "VMware",
      logo: "img/vmware_black.png",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const CheckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="w-5 h-5 text-gray-700"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  return (
    <div>
    <div
      className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-16"
      style={{ paddingLeft: "5rem", paddingRight: "5rem" }}
    >
      <div>
        <h1 className="text-4xl font-medium mb-6">See HackerRank in action</h1>

        <p className="text-gray-600 mb-8">
          Attend a live, personalized demo with one of our product experts to
          learn how to engage, hire, and upskill the tech talent you need to
          innovate.
        </p>

        <div className="mb-12">
          <h2 className="text-lg font-medium mb-4">We'll cover how to:</h2>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-3">
                <div className="mt-1 flex-shrink-0">
                  <CheckIcon />
                </div>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-4">
            Trusted by more than 2,500 tech organizations
          </h2>
          <div className="flex flex-wrap gap-8 items-center">
            {trustedCompanies.map((company) => (
              <img
                key={company.name}
                src={company.logo || "/placeholder.svg"}
                alt={company.name}
                className="h-10 object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-medium mb-2">Schedule a demo</h2>
        <p className="text-gray-600 mb-6">
          Please fill out the form below, and we'll contact you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="workEmail"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Work Email
            </label>
            <Input
              id="workEmail"
              type="email"
              value={formData.workEmail}
              onChange={(e) =>
                setFormData({ ...formData, workEmail: e.target.value })
              }
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Company Name
              </label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={(e) =>
                  setFormData({ ...formData, companyName: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label
                htmlFor="jobTitle"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Job Title
              </label>
              <Input
                id="jobTitle"
                value={formData.jobTitle}
                onChange={(e) =>
                  setFormData({ ...formData, jobTitle: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="companySize"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Company Size
              </label>
              <Select
                value={formData.companySize}
                onChange={(e) =>
                  setFormData({ ...formData, companySize: e.target.value })
                }
              >
                <option value="" disabled>
                  Select company size
                </option>
                {companySizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <Input
                id="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Country
            </label>
            <Select
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
            >
              <option value="" disabled>
                Select country
              </option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </Select>
          </div>

          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700"
          >
            Schedule a demo →
          </Button>
        </form>
      </div>
    </div>
      <Footer />
    </div>
  );
}

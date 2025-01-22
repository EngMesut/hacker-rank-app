import React from "react";
import { Accordion } from "../components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "What are attempts?",
      answer:
        "Attempts refer to the number of times you can try to complete a specific task or assessment. Each attempt is tracked and recorded to monitor your progress and performance.",
    },
    {
      question: "What questions are included?",
      answer:
        "Our question bank includes a diverse range of topics covering technical concepts, problem-solving scenarios, and practical applications. Questions are carefully curated to test different skill levels.",
    },
    {
      question: "What is Screen?",
      answer:
        "Screen is our pre-assessment tool that helps evaluate candidates' skills and knowledge in specific areas. It provides a comprehensive overview of technical capabilities and competencies.",
    },
    {
      question: "What are Interviews?",
      answer:
        "Interviews are structured conversations designed to assess candidates' qualifications, experience, and fit for a role. They may include technical questions, behavioral assessments, and practical exercises.",
    },
    {
      question: "What are real-world questions?",
      answer:
        "Real-world questions are based on actual scenarios and challenges that professionals encounter in their work. These questions help assess how candidates apply their knowledge to practical situations.",
    },
    {
      question: "What training and support are available?",
      answer:
        "We provide comprehensive training resources including documentation, video tutorials, and dedicated support teams. Our platform offers continuous learning opportunities and assistance when needed.",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-normal text-center mb-12">
        Frequently asked questions
      </h1>
      <Accordion items={faqs} />
    </div>
  );
}

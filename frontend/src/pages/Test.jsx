import React, { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "What exactly does Merlin do?",
    answer:
      "Merlin plugs into Gmail, Google Calendar, and Slack, watches the river of messages flow by, and quietly bubbles up the handful that actually move the needle. Then, with one tap, it drafts the reply, schedules the meeting, or files the task for you. It’s the digital chief-of-staff that kills the noise so you can race through the signal.",
  },
  {
    question: "How is Merlin different from Superhuman, Notion Calendar, Clay, or ChatGPT?",
    answer: "Merlin combines proactive prioritization with workflow automation — not just messaging, not just scheduling, but the full stack of decision-making.",
  },
  {
    question: "How much time can I actually save with Merlin?",
    answer: "On average, users save 8–10 hours per week by reducing manual triage, follow-ups, and scheduling overhead.",
  },
  {
    question: "Who is Merlin built for?",
    answer: "Busy professionals, founders, and teams who want to focus on high-value work instead of admin noise.",
  },
  {
    question: "What are the core principles of Merlin's security program?",
    answer: "Data minimization, strong encryption, SOC 2 compliance, and zero-trust architecture.",
  },
  {
    question: "How does Merlin use my data for AI features?",
    answer: "Your data stays private — Merlin processes context only to assist you, without selling or sharing it with third parties.",
  },
  {
    question: "How is data ownership handled?",
    answer: "You always own your data. Merlin provides tools for export, deletion, and full transparency.",
  },
  {
    question: "What security certifications and evaluations does Merlin meet?",
    answer: "SOC 2 Type II, GDPR, CCPA, and HIPAA compliance.",
  },
];

const FAQAccordion = () => {
   const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
     <section className="bg-[#f5f5f5] rounded-tl-[70px] rounded-tr-[70px] ">
      <div className="max-w-6xl m-auto py-20 px-6">
        <h1 className="text-3xl font-medium text-left">
          Questions? Merlin’s already three steps ahead.
        </h1>
        <p className="text-gray-500 mt-4 text-left">
          We figured you might ask. Here’s everything you need to know — before you even had to ask.
        </p>

        <div className="mt-12 bg-white shadow-md rounded-3xl border border-gray-200 divide-y divide-gray-200 overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center px-6 py-6 text-left text-gray-800 font-medium"
              >
                <span className="mr-6  text-xl">
                  {openIndex === index ? "–" : "+"}
                </span>
                {faq.question}
              </button>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  maxHeight:
                    openIndex === index
                      ? `${contentRefs.current[index]?.scrollHeight}px`
                      : "0px",
                  transition: "max-height 0.3s ease",
                  overflow: "hidden",
                }}
                className="px-12 mb-2 text-gray-500 text-sm leading-relaxed"
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='bg-[#f5f5f5] w-[90%] border border-gray-200 max-w-[1100px] m-auto ' >
    
    </div>
    </section>
  );
};

export default FAQAccordion;

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What interior design services do you offer?",
    answer:
      "We provide complete interior design solutions including residential interiors, commercial interiors, space planning, furniture design, turnkey projects, renovation services, and custom decor solutions.",
  },
  {
    question: "Do you handle turnkey interior projects?",
    answer:
      "Yes. Our turnkey solutions cover everything from concept development and design to procurement, execution, installation, and final handover.",
  },
  {
    question: "How long does an interior project take?",
    answer:
      "Project timelines vary based on size and complexity. Residential projects typically take 6–12 weeks, while larger commercial projects may require additional time.",
  },
  {
    question: "Can you work within my budget?",
    answer:
      "Absolutely. We create customized design solutions that align with your budget while maintaining quality, functionality, and aesthetics.",
  },
  {
    question: "Do you provide 3D visualizations before execution?",
    answer:
      "Yes. We provide detailed 3D renders and visualizations so you can see the final outcome before project execution begins.",
  },
  {
    question: "Do you source furniture and materials?",
    answer:
      "Yes. We assist in sourcing furniture, lighting, materials, fixtures, and décor elements from trusted suppliers and manufacturers.",
  },
  {
    question: "Can you renovate existing spaces?",
    answer:
      "Yes. We specialize in transforming existing residential and commercial spaces through thoughtful renovation and remodeling services.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact us through our website or schedule a consultation. Our team will discuss your requirements and guide you through the process.",
  },
];

export default function FAQPage() {
const [active, setActive] = useState(0);

  return (
    <main className="bg-black min-h-screen text-white">
      {/* Hero */}
      <section className="relative py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-lime-400 uppercase tracking-[5px] text-sm font-semibold">
            Support Center
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6 mb-8">
            Frequently Asked
            <br />
            Questions
          </h1>

          <p className="max-w-2xl mx-auto text-zinc-400 text-lg">
            Find answers to the most common questions about our
            interior design services, process, pricing, and
            project execution.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            {faqs.map((faq, index) => {
              const isOpen = active === index;

              return (
                <div
                  key={index}
                  className="bg-[#1a1c1c] rounded-3xl border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setActive(isOpen ? null : index)
                    }
                    className="w-full p-8 flex justify-between items-center text-left"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold pr-4">
                      {faq.question}
                    </h3>

                    <ChevronDown
                      className={`transition-transform duration-300 text-lime-400 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        <div className="px-8 pb-8 text-zinc-400 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative bg-[#121414] border border-white/10 rounded-[40px] p-12 md:p-20 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-lime-400/10 rounded-full blur-[120px]" />

            <h2 className="relative z-10 text-4xl md:text-6xl font-bold mb-8">
              Still Have Questions?
            </h2>

            <p className="relative z-10 text-zinc-400 max-w-2xl mx-auto mb-10">
              Our design experts are here to help you create
              beautiful and functional spaces tailored to your
              vision.
            </p>

            <button className="relative z-10 bg-lime-400 text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
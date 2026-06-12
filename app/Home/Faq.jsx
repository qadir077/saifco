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
    <section className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-lime-400/5 blur-[180px] rounded-full" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-lime-400/5 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span
              className="
                inline-flex
                px-5
                py-2
                rounded-full
                border
                border-lime-400/20
                bg-lime-400/10
                text-lime-400
                text-xs
                uppercase
                tracking-[5px]
              "
            >
              FAQ & Support
            </span>

            <h2 className="mt-8 text-5xl md:text-6xl font-bold leading-[0.95]">
              Frequently Asked
              <br />
              <span className="text-lime-400">
                Questions
              </span>
            </h2>

            <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-xl">
              Find answers to common questions about our interior
              design services, project timelines, pricing, materials,
              and complete turnkey solutions.
            </p>

            {/* Premium CTA Card */}
            <div
              className="
                relative
                mt-12
                overflow-hidden
                rounded-[32px]
                border
                border-lime-400/20
                bg-[#111515]
                p-8
              "
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-lime-400/10 blur-[100px] rounded-full" />

              <h3 className="text-3xl font-bold">
                Need Expert Advice?
              </h3>

              <p className="mt-4 text-zinc-400 leading-relaxed">
                Schedule a free consultation with our design team and
                discover how we can transform your space into a luxury
                experience.
              </p>

              <button
                className="
                  mt-8
                  bg-lime-400
                  text-black
                  px-8
                  py-4
                  rounded-full
                  font-bold
                  hover:scale-105
                  transition-all
                  duration-500
                "
              >
                Book Consultation
              </button>
            </div>
          </motion.div>

          {/* Right Side FAQs */}
          <div className="space-y-5">
            {faqs.map((faq, index) => {
              const isOpen = active === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/10
                    bg-[#111515]
                  "
                >
                  <button
                    onClick={() =>
                      setActive(isOpen ? null : index)
                    }
                    className="
                      w-full
                      p-7
                      flex
                      items-center
                      justify-between
                      text-left
                    "
                  >
                    <h3 className="text-lg md:text-xl font-semibold pr-6">
                      {faq.question}
                    </h3>

                    <ChevronDown
                      className={`text-lime-400 transition-all duration-300 ${
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
                          duration: 0.35,
                        }}
                      >
                        <div className="px-7 pb-7 text-zinc-400 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
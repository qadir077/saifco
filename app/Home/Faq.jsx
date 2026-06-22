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
  {
    question: "Do you offer site visits before starting a project?",
    answer:
      "Yes. Our team conducts detailed site visits to understand the space, take measurements, and discuss your vision before creating design concepts.",
  },
  {
    question: "Can you design small apartments and compact spaces?",
    answer:
      "Absolutely. We specialize in maximizing functionality and aesthetics for compact homes, apartments, and studio spaces.",
  },
  {
    question: "Do you provide customized furniture designs?",
    answer:
      "Yes. We create bespoke furniture solutions tailored to your space, style preferences, and functional requirements.",
  },
  {
    question: "What design styles do you specialize in?",
    answer:
      "We work across modern, contemporary, minimalist, luxury, industrial, Scandinavian, traditional, and fully customized design styles.",
  },
  {
    question: "Can I make changes during project execution?",
    answer:
      "Yes. Minor modifications can be accommodated during execution, though timeline and budget adjustments may apply depending on the scope.",
  },
  {
    question: "Do you offer commercial interior design services?",
    answer:
      "Yes. We design offices, retail stores, restaurants, hospitality spaces, clinics, and various commercial environments.",
  },
  {
    question: "How is project pricing determined?",
    answer:
      "Pricing depends on project size, materials, customization requirements, design complexity, and execution scope.",
  },
  {
    question: "Do you provide material recommendations?",
    answer:
      "Yes. We guide clients in selecting premium materials, finishes, lighting, fabrics, and decor elements that suit both aesthetics and budget.",
  },
  {
    question: "Will I receive a detailed project timeline?",
    answer:
      "Yes. Before execution begins, we provide a structured timeline outlining design, procurement, installation, and completion milestones.",
  },
  {
    question: "Do you offer post-project support?",
    answer:
      "Yes. We provide support after project completion to address adjustments, maintenance guidance, and client queries.",
  },
  {
    question: "Can you work on projects outside my city?",
    answer:
      "Yes. Depending on project requirements, we can manage and execute projects across multiple cities and regions.",
  },
  {
    question: "How do I schedule my first consultation?",
    answer:
      "You can contact us through our website, phone, or email. Our team will arrange a consultation to understand your requirements and project goals.",
  },
];

export default function FAQPage() {
const [active, setActive] = useState(null);

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
  className="sticky top-28 self-start"
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
                text-center
              "
            >
              <div className="absolute  top-0 right-0 w-40 h-40 bg-lime-400/10 blur-[100px] rounded-full" />

              <h3 className="text-3xl text-lime-400 font-bold">
                Need Expert Advice?
              </h3>

              <p className="mt-4 text-zinc-400 leading-relaxed">
                Schedule a free consultation with our design team and
                discover how we can transform your space into a luxury
                experience.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  mt-8
                  bg-lime-400
                  text-black
                  px-8
                  py-4
                  rounded-full
                  font-bold
                  shadow-[0_0_20px_rgba(163,230,53,0.4)]
                  transition-shadow
                  duration-300
                "
              >
                Book Consultation
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side FAQs */}
{/* Right Side FAQs */}
<div className="space-y-5 lg:max-h-[900px] lg:overflow-y-auto pr-2">
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
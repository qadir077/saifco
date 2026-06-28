"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Crown,
  Building2,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Crown,
    title: "Luxury Craftsmanship",
    description:
      "Every detail is thoughtfully executed using premium materials and refined finishes.",
  },
  {
    icon: Building2,
    title: "End-To-End Execution",
    description:
      "From concept creation to final handover, we manage every stage seamlessly.",
  },
  {
    icon: Sparkles,
    title: "Bespoke Design Solutions",
    description:
      "Every project is uniquely tailored to reflect your lifestyle and aspirations.",
  },
  {
    icon: CheckCircle2,
    title: "Guaranteed Quality",
    description:
      "Exceptional standards, transparent communication, and uncompromising quality.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Glow */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-lime-400/10 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          {/* LEFT IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
            }}
            className="lg:col-span-5 relative"
          >
            {/* Main Image */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[40px]
                border
                border-white/10
                h-[700px]
              "
            >
            <Image
                         src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=1200&auto=format&fit=crop"
                         alt="Luxury Interior Design"
                         fill
                         priority
                         className="
             object-cover
             transition-transform
             duration-[2000ms]
             group-hover:scale-105
           "
                       />
         
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="
                absolute
                top-10
                -right-10
                backdrop-blur-xl
                bg-black/50
                border
                border-lime-400/20
                rounded-3xl
                px-8
                py-6
              "
            >
              <h3 className="text-4xl font-bold text-lime-400">
                120+
              </h3>

              <p className="text-zinc-400 uppercase tracking-[3px] text-xs mt-2">
                Luxury Projects
              </p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
              className="
                absolute
                bottom-12
                -left-10
                backdrop-blur-xl
                bg-black/50
                border
                border-lime-400/20
                rounded-3xl
                px-8
                py-6
              "
            >
              <h3 className="text-4xl font-bold text-lime-400">
                98%
              </h3>

              <p className="text-zinc-400 uppercase tracking-[3px] text-xs mt-2">
                Client Satisfaction
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="
                inline-flex
                px-5
                py-2
                rounded-full
                border
                border-lime-400/20
                bg-lime-400/10
                text-lime-400
                uppercase
                tracking-[4px]
                text-xs
              "
            >
              Why Choose Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
                mt-8
                text-5xl
                md:text-6xl
                font-extrabold
                leading-[0.95]
              "
            >
              Elevating
              <br />
              Interiors Through
              <span className="text-lime-400">
                {" "}Innovation
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="
                mt-8
                text-zinc-400
                text-lg
                leading-relaxed
                max-w-2xl
              "
            >
              Our approach combines visionary design,
              technical expertise, and meticulous execution
              to deliver spaces that are both stunning and
              functional. Every project reflects our
              dedication to excellence.
            </motion.p>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-6 mt-14">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      y: -8,
                      borderColor:
                        "rgba(163,230,53,0.4)",
                    }}
                    className="
                      group
                      rounded-[30px]
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      p-7
                      transition-all
                      duration-300
                    "
                  >
                    <div
                      className="
                        w-14
                        h-14
                        rounded-2xl
                        bg-lime-400/10
                        border
                        border-lime-400/20
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Icon
                        size={26}
                        className="text-lime-400"
                      />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold">
                      {feature.title}
                    </h3>

                    <p className="mt-4 text-zinc-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
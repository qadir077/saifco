"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Gem,
  Lightbulb,
} from "lucide-react";

export default function Vision() {
  const cards = [
    {
      icon: Lightbulb,
      title: "Our Vision",
      description:
        "To redefine modern interior design by creating inspiring environments that seamlessly blend beauty, comfort, and functionality.",
    },
    {
      icon: Compass,
      title: "Our Mission",
      description:
        "Delivering exceptional interior experiences through innovative thinking, premium craftsmanship, and meticulous execution.",
    },
    {
      icon: Gem,
      title: "Our Philosophy",
      description:
        "Every space should reflect the personality, lifestyle, and aspirations of its owner while maintaining timeless elegance.",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-lime-400/10 blur-[220px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
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
              tracking-[4px]
              uppercase
              text-xs
            "
          >
            Design Philosophy
          </span>

          <h2 className="mt-8 text-5xl md:text-7xl font-extrabold leading-[0.95]">
            The Principles
            <br />
            Behind Every
            <span className="text-lime-400">
              {" "}Masterpiece
            </span>
          </h2>

          <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
            Every interior we create is guided by a commitment
            to excellence, innovation, and timeless luxury.
            These values shape every project from concept
            to completion.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="relative mt-24">
          {/* Center Orb */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
            className="
              hidden
              lg:block
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-52
              h-52
              rounded-full
              bg-lime-400/10
              blur-[60px]
            "
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-8
                  "
                >
                  {/* Hover Glow */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                      bg-gradient-to-b
                      from-lime-400/5
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* Icon */}
                  <div
                    className="
                      w-16
                      h-16
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
                      size={30}
                      className="text-lime-400"
                    />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold">
                    {card.title}
                  </h3>

                  <p className="mt-5 text-zinc-400 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Bottom Line */}
                  <motion.div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      bg-lime-400
                    "
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.3,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
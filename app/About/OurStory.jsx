"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurStory() {
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Glow */}
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-lime-400/10 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-6 relative"
          >
            {/* Main Image */}
            <div
              className="
                relative
                rounded-[40px]
                overflow-hidden
                border
                border-white/10
                h-[650px]
              "
            >
              <Image
                src="/about-interior.jpg"
                alt="Luxury Interior"
                fill
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Floating Experience Card */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
              className="
                absolute
                -bottom-10
                -right-5
                backdrop-blur-xl
                bg-black/40
                border
                border-lime-400/20
                rounded-[30px]
                p-8
                shadow-[0_0_50px_rgba(163,230,53,0.15)]
              "
            >
              <h3 className="text-5xl font-bold text-lime-400">
                10+
              </h3>

              <p className="text-zinc-400 mt-2 uppercase tracking-[3px] text-xs">
                Years Of Excellence
              </p>
            </motion.div>

            {/* Border Glow */}
            <div
              className="
                absolute
                inset-0
                rounded-[40px]
                border
                border-lime-400/10
                pointer-events-none
              "
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{
              staggerChildren: 0.15,
            }}
            className="lg:col-span-6"
          >
            <motion.span
              variants={textVariants}
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
                mb-8
              "
            >
              Our Story
            </motion.span>

            <motion.h2
              variants={textVariants}
              className="
                text-5xl
                md:text-6xl
                font-extrabold
                leading-[1]
              "
            >
              Designing
              <br />
              Spaces That
              <span className="text-lime-400">
                {" "}
                Inspire
              </span>
            </motion.h2>

            <motion.p
              variants={textVariants}
              className="
                mt-8
                text-zinc-400
                text-lg
                leading-relaxed
              "
            >
              Founded with a passion for creating exceptional
              environments, SAIFCO Interior has spent the last decade
              transforming residential, commercial, and luxury spaces
              into timeless masterpieces.
            </motion.p>

            <motion.p
              variants={textVariants}
              className="
                mt-6
                text-zinc-400
                text-lg
                leading-relaxed
              "
            >
              Our philosophy blends creativity, precision, and
              functionality to craft interiors that not only look
              stunning but also enhance the way people live and work.
              Every project is approached with meticulous attention to
              detail, ensuring a seamless balance between aesthetics
              and practicality.
            </motion.p>

            {/* Feature Cards */}
            <motion.div
              variants={textVariants}
              className="grid sm:grid-cols-2 gap-5 mt-12"
            >
              {[
                {
                  title: "Luxury Design",
                  desc: "Elegant and timeless interior concepts.",
                },
                {
                  title: "Tailored Solutions",
                  desc: "Designed around your lifestyle and needs.",
                },
                {
                  title: "Premium Materials",
                  desc: "Only the finest finishes and craftsmanship.",
                },
                {
                  title: "End-To-End Service",
                  desc: "From concept to final execution.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{
                    y: -6,
                    borderColor: "rgba(163,230,53,0.5)",
                  }}
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-6
                    transition-all
                    duration-300
                  "
                >
                  <h3 className="font-semibold text-white text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
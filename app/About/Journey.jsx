"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2015",
    title: "The Beginning",
    description:
      "SAIFCO Interior was founded with a vision to create inspiring and functional interior spaces that blend luxury with purpose.",
  },
  {
    year: "2018",
    title: "50+ Projects Delivered",
    description:
      "Successfully completed over fifty residential and commercial projects, earning the trust of homeowners and businesses.",
  },
  {
    year: "2020",
    title: "Expanding Our Expertise",
    description:
      "Introduced premium commercial interior services and expanded our design capabilities across multiple sectors.",
  },
  {
    year: "2023",
    title: "Award Recognition",
    description:
      "Recognized for excellence in interior design and innovation through multiple industry awards and client accolades.",
  },
  {
    year: "2026",
    title: "A New Era Of Luxury",
    description:
      "Continuing to redefine modern interiors through innovation, craftsmanship, and timeless design experiences.",
  },
];

export default function OurJourney() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-lime-400/5 blur-[250px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
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
              uppercase
              tracking-[4px]
              text-xs
            "
          >
            Our Journey
          </span>

          <h2
            className="
              mt-8
              text-5xl
              md:text-7xl
              font-extrabold
              leading-[0.95]
            "
          >
            A Decade Of
            <br />
            <span className="text-lime-400">
              Design Excellence
            </span>
          </h2>

          <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
            Every milestone reflects our commitment to transforming
            spaces, exceeding expectations, and delivering timeless
            interior experiences.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-28">
          {/* Center Line */}
          <div
            className="
              absolute
              left-1/2
              top-0
              bottom-0
              hidden
              lg:block
              w-[2px]
              -translate-x-1/2
              bg-gradient-to-b
              from-transparent
              via-lime-400/50
              to-transparent
            "
          />

          <div className="space-y-20">
            {milestones.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.year}
                  className="
                    relative
                    grid
                    lg:grid-cols-2
                    gap-10
                    items-center
                  "
                >
                  {/* LEFT CARD */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isLeft ? -60 : 60,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                    }}
                    className={
                      isLeft
                        ? ""
                        : "lg:col-start-2"
                    }
                  >
                    <motion.div
                      whileHover={{
                        y: -8,
                        borderColor:
                          "rgba(163,230,53,0.4)",
                      }}
                      className="
                        relative
                        overflow-hidden
                        rounded-[32px]
                        border
                        border-white/10
                        bg-white/5
                        backdrop-blur-xl
                        p-8
                        transition-all
                        duration-300
                      "
                    >
                      {/* Hover Glow */}
                      <div
                        className="
                          absolute
                          inset-0
                          opacity-0
                          hover:opacity-100
                          transition-opacity
                          duration-500
                          bg-gradient-to-br
                          from-lime-400/5
                          to-transparent
                        "
                      />

                      <span
                        className="
                          text-lime-400
                          text-sm
                          tracking-[4px]
                          uppercase
                        "
                      >
                        {item.year}
                      </span>

                      <h3 className="mt-4 text-3xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-5 text-zinc-400 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </motion.div>

                  {/* Timeline Dot */}
                  <div
                    className="
                      hidden
                      lg:flex
                      absolute
                      left-1/2
                      top-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center
                      justify-center
                    "
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                      }}
                      className="
                        relative
                        w-7
                        h-7
                        rounded-full
                        bg-lime-400
                      "
                    >
                      <div
                        className="
                          absolute
                          inset-0
                          rounded-full
                          bg-lime-400
                          blur-xl
                        "
                      />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
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
            duration: 0.8,
          }}
          className="
            mt-32
            rounded-[40px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-10
          "
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              ["120+", "Projects Completed"],
              ["50+", "Happy Clients"],
              ["10+", "Years Experience"],
              ["15+", "Industry Awards"],
            ].map(([value, label]) => (
              <div key={label}>
                <h3 className="text-5xl font-bold text-lime-400">
                  {value}
                </h3>

                <p className="mt-3 text-zinc-400 uppercase tracking-[3px] text-xs">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
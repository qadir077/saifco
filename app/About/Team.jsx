"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import {
  Linkedin,
  ArrowUpRight,
} from "lucide-react";



const team = [
  {
    name: "Sarah Williams",
    role: "Creative Director",
    image: "/team/team-1.jpg",
  },
  {
    name: "Michael Carter",
    role: "Lead Interior Architect",
    image: "/team/team-2.jpg",
  },
  {
    name: "Emily Johnsons",
    role: "Senior Interior Designer",
    image: "/team/team-3.jpg",
  },
  {
    name: "David Wilson",
    role: "Project Manager",
    image: "/team/team-4.jpg",
  },
];

export default function Team() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 w-[600px] h-[600px] bg-lime-400/10 blur-[220px] rounded-full" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-lime-400/5 blur-[180px] rounded-full" />

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
          className="max-w-4xl mx-auto text-center"
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
            Meet The Team
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
            The Minds Behind
            <br />
            <span className="text-lime-400">
              Every Masterpiece
            </span>
          </h2>

          <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
            Our multidisciplinary team of designers,
            architects, and project specialists work
            together to transform ideas into extraordinary
            living experiences.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-24">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{
                opacity: 0,
                y: 60,
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
                y: -12,
              }}
              className="group"
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                "
              >
                {/* Image */}
                <div className="relative h-[520px] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black
                      via-black/30
                      to-transparent
                    "
                  />

                  {/* Hover Glow */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                      bg-lime-400/10
                    "
                  />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-lime-400 text-xs tracking-[4px] uppercase">
                    {member.role}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    {member.name}
                  </h3>

                  {/* Social Icons */}
                  <div
                    className="
                      flex
                      gap-3
                      mt-5
                      opacity-0
                      translate-y-4
                      group-hover:opacity-100
                      group-hover:translate-y-0
                      transition-all
                      duration-500
                    "
                  >
                    <button
                      className="
                        w-10
                        h-10
                        rounded-full
                        bg-white/10
                        flex
                        items-center
                        justify-center
                        hover:bg-lime-400
                        hover:text-black
                        transition-all
                      "
                    >
<FaLinkedinIn size={18} />
                    </button>

                    <button
                      className="
                        w-10
                        h-10
                        rounded-full
                        bg-white/10
                        flex
                        items-center
                        justify-center
                        hover:bg-lime-400
                        hover:text-black
                        transition-all
                      "
                    >
<FaInstagram size={18} />
                    </button>

                    <button
                      className="
                        w-10
                        h-10
                        rounded-full
                        bg-white/10
                        flex
                        items-center
                        justify-center
                        hover:bg-lime-400
                        hover:text-black
                        transition-all
                      "
                    >
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>

                {/* Border Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-[32px]
                    border
                    border-transparent
                    group-hover:border-lime-400/30
                    transition-all
                    duration-500
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
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
            duration: 0.8,
          }}
          className="
            mt-24
            text-center
            max-w-4xl
            mx-auto
          "
        >
          <p
            className="
              text-2xl
              md:text-3xl
              font-light
              leading-relaxed
              text-zinc-300
            "
          >
            “Great design is not just about aesthetics —
            it's about creating spaces that enrich lives,
            inspire creativity, and stand the test of time.”
          </p>

          <div className="w-24 h-[2px] bg-lime-400 mx-auto mt-8" />
        </motion.div>
      </div>
    </section>
  );
}
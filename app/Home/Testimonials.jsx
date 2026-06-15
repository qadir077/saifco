"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Homeowner",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop",
    review:
      "SAIFCO Interior completely transformed our villa into a luxury masterpiece. Every detail was thoughtfully designed, and the execution exceeded our expectations.",
  },
  {
    name: "Priya Mehta",
    role: "Business Owner",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    review:
      "The team delivered a modern and sophisticated office space that perfectly reflects our brand identity. Professional, creative, and highly reliable.",
  },
  {
    name: "Rahul Kapoor",
    role: "Entrepreneur",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop",
    review:
      "From concept to completion, the entire process was seamless. Their attention to detail and premium finishes truly set them apart.",
  },
  {
    name: "Neha Verma",
    role: "Luxury Apartment Owner",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&auto=format&fit=crop",
    review:
      "The lighting, furniture selection, and overall design brought warmth and elegance to our apartment. We couldn't be happier with the result.",
  },
  {
    name: "Arjun Singh",
    role: "Restaurant Owner",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=500&auto=format&fit=crop",
    review:
      "SAIFCO Interior created an exceptional dining environment that has significantly enhanced our customer experience and brand appeal.",
  },
  {
    name: "Sneha Khanna",
    role: "Interior Client",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop",
    review:
      "Every room now feels luxurious, functional, and timeless. The team's creativity and commitment to quality were evident throughout the project.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute left-0 top-0 w-[500px] h-[500px] bg-lime-400/5 blur-[180px] rounded-full" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-lime-400/5 blur-[180px] rounded-full" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span
            className="
              inline-flex
              px-5
              py-1.5
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
            Client Reviews
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl xl:text-7xl font-bold leading-[0.95]">
            What Our
            <span className="text-lime-400"> Clients Say</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-zinc-400 text-lg">
            Trusted by homeowners, businesses, and property developers
            for delivering premium interior experiences with unmatched
            quality and attention to detail.
          </p>

          <div className="relative max-w-5xl mx-auto mt-8 h-[2px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-400 to-transparent" />
            <div className="absolute inset-0 blur-md bg-gradient-to-r from-transparent via-lime-400/80 to-transparent" />
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative overflow-hidden"
        >
          {/* Left Fade */}
          <div className="absolute left-0 top-0 h-full w-24 md:w-40 bg-gradient-to-r from-[#0c0f0f] to-transparent z-20" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 h-full w-24 md:w-40 bg-gradient-to-l from-[#0c0f0f] to-transparent z-20" />

          <div className="testimonial-slider flex gap-6 w-max">
            {[...testimonials, ...testimonials].map(
              (item, index) => (
                <div
                  key={index}
                  className="
                    relative
                    bg-[#111515]
                    border
                    border-lime-400/60
                    rounded-[32px]
                    p-8
                    overflow-hidden
                    w-[340px]
                    md:w-[400px]
                    shrink-0
                  "
                >
                  {/* Quote */}
                  <div className="absolute top-6 right-6 text-7xl font-bold text-lime-400/10">
                    "
                  </div>

                  {/* Profile */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-lime-400/60">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="font-bold text-lg">
                        {item.name}
                      </h3>

                      <p className="text-sm text-lime-400">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mb-5 text-lime-400 text-lg">
                    ★★★★★
                  </div>

                  {/* Review */}
                  <p className="text-zinc-400 leading-relaxed">
                    {item.review}
                  </p>

                  {/* Bottom Line */}
                  <div className="mt-8 h-[1px] bg-gradient-to-r from-transparent via-lime-400/60 to-transparent" />
                </div>
              )
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
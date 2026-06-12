import Image from "next/image";

const projects = [
  {
    title: "Modern Luxury Villa",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
    large: true,
  },
  {
    title: "Executive Office",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
  },
  {
    title: "Minimal Living Room",
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Luxury Bedroom",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Modern Kitchen",
    category: "Kitchen Design",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Premium Workspace",
    category: "Workspace",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section className="relative py-02 pb-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-lime-400/5 blur-[180px] rounded-full" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-lime-400/5 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
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
              tracking-[5px]
              uppercase
            "
          >
            Our Portfolio
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl xl:text-7xl font-bold leading-[0.95]">
            Featured

            <span className="text-lime-400 ml-4">
              Projects
            </span>
          </h2>
           

          <p className="max-w-2xl mx-auto mt-4 text-zinc-400 text-lg">
            Discover our carefully crafted residential, commercial,
            and luxury interior projects designed with precision,
            elegance, and timeless aesthetics.
          </p>
          <div className="relative max-w-5xl mx-auto mt-4 h-[2px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-400 to-transparent" />
            <div className="absolute inset-0 blur-md bg-gradient-to-r from-transparent via-lime-400/80 to-transparent" />
          </div>

         
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`
                group
                relative
                overflow-hidden
                rounded-[32px]
                border-b-2
                border-lime-400/60
                bg-[#111515]
                ${
                  project.large
                    ? "md:col-span-2 md:row-span-2"
                    : ""
                }
              `}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="
                  object-cover
                  transition-all
                  duration-1000
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
                  bg-lime-400/10
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8">
                <span
                  className="
                    inline-block
                    px-4
                    py-2
                    rounded-full
                    bg-lime-400/15
                    text-lime-400
                    text-xs
                    uppercase
                    tracking-[3px]
                    border
                    border-lime-400/20
                    mb-4
                  "
                >
                  {project.category}
                </span>

                <h3
                  className="
                    text-2xl
                    md:text-3xl
                    font-bold
                    mb-4
                    group-hover:text-lime-400
                    transition-all
                  "
                >
                  {project.title}
                </h3>

                <button
                  className="
                    opacity-0
                    translate-y-6
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all
                    duration-500
                    text-lime-400
                    font-semibold
                  "
                >
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button
            className="
              bg-lime-400
              text-black
              px-10
              py-5
              rounded-full
              font-bold
       shadow-[0_0_30px_rgba(163,230,53,0.9)]
              hover:scale-105
              transition-all
              duration-500
            "
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
import {
  Home,
  Building2,
  Armchair,
  KeyRound,
  Paintbrush,
  LampFloor,
  LayoutGrid,
  Warehouse,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Interior Design",
    description:
      "Bespoke residential and commercial interiors crafted to reflect your personality, lifestyle, and vision while maintaining perfect balance between luxury and functionality.",
  },
  {
    icon: Building2,
    title: "Civil Works",
    description:
      "Comprehensive structural modifications, construction solutions, and architectural enhancements executed with precision, durability, and modern engineering standards.",
  },
  {
    icon: Armchair,
    title: "Furniture",
    description:
      "Custom-designed furniture pieces tailored to your space, combining premium materials, exceptional craftsmanship, and timeless aesthetics.",
  },
  {
    icon: KeyRound,
    title: "Turnkey Solutions",
    description:
      "Complete project execution from concept development and planning to final installation, ensuring a seamless and hassle-free experience.",
  },
  {
    icon: Paintbrush,
    title: "False Ceiling",
    description:
      "Elegant ceiling designs featuring modern patterns, concealed lighting, and premium finishes that elevate the visual appeal of every room.",
  },
  {
    icon: LampFloor,
    title: "Lighting Design",
    description:
      "Layered lighting concepts that enhance ambiance, highlight architectural features, and create sophisticated living and working environments.",
  },
  {
    icon: LayoutGrid,
    title: "Space Planning",
    description:
      "Intelligent space optimization and layout planning designed to maximize comfort, functionality, movement flow, and visual harmony.",
  },
  {
    icon: Warehouse,
    title: "Modular Kitchen",
    description:
      "Luxury modular kitchen solutions with smart storage systems, ergonomic layouts, and premium finishes tailored to modern lifestyles.",
  },
];

export default function Services() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-lime-400/5 blur-[180px] rounded-full" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-lime-400/5 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <span
            className="
              inline-block
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
            What We Do
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl xl:text-7xl font-bold leading-[0.95]">
            Premium Interior

            <span className=" ml-4 text-lime-400">
              Design Services
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-zinc-400 text-lg leading-relaxed">
            We provide complete interior solutions that combine luxury,
            functionality, and timeless aesthetics to transform ordinary
            spaces into extraordinary experiences.
          </p>

          <div className="relative max-w-5xl mx-auto mt-8 h-[2px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-400 to-transparent" />

            <div className="absolute inset-0 blur-md bg-gradient-to-r from-transparent via-lime-400/80 to-transparent" />
          </div>
        </div>

        {/* Services */}
        <div className="space-y-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  group
                  bg-[#111515]
                  border
                  border-white/10
                  rounded-[32px]
                  p-8
                  hover:border-lime-400/30
                  hover:bg-lime-400/5
                  transition-all
                  duration-500
                "
              >
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  {/* Number */}
                  <div className="lg:col-span-2">
                    <span className="text-5xl md:text-6xl font-bold text-zinc-800 group-hover:text-lime-400/30 transition-all">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="lg:col-span-2">
                    <div
                      className="
                        w-20
                        h-20
                        rounded-2xl
                        bg-lime-400/10
                        flex
                        items-center
                        justify-center
                        group-hover:bg-lime-400
                        transition-all
                        duration-500
                      "
                    >
                      <Icon
                        size={36}
                        className="
                          text-lime-400
                          group-hover:text-black
                          transition-all
                        "
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="lg:col-span-3">
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-4">
                    <p className="text-zinc-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="lg:col-span-1 flex justify-end">
                    <div
                      className="
                        w-14
                        h-14
                        rounded-full
                        border
                        border-white/10
                        flex
                        items-center
                        justify-center
                        text-lime-400
                        text-xl
                        group-hover:bg-lime-400
                        group-hover:text-black
                        group-hover:rotate-45
                        transition-all
                        duration-500
                      "
                    >
                      →
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <button
            className="
              bg-lime-400
              text-black
              px-10
              py-4
              rounded-full
              font-bold
shadow-[0_0_30px_rgba(163,230,53,0.9)]
              hover:scale-105
              transition-all
              duration-500
            "
          >
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
}
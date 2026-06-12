import Image from "next/image";

const stats = [
  {
    value: "120+",
    label: "Projects Completed",
  },
  {
    value: "10+",
    label: "Years Experience",
  },
  {
    value: "50+",
    label: "Happy Clients",
  },
  {
    value: "15+",
    label: "Design Awards",
  },
];

export default function About() {
  return (
    <section className="relative py-0 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-400/5 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
<div className="mb-20 text-center">
  <span
    className="
      inline-block
      px-5
      py-1.5
      rounded-full
      border
      border-lime-400/30
      bg-lime-400/10
      text-lime-400
      text-xs
      tracking-[4px]
      uppercase
      backdrop-blur-sm
    "
  >
    About SAIFCO Interior
  </span>

  <h2 className="mt-4 font-bold leading-none">
    <span className=" text-6xl md:text-7xl xl:text-6xl text-white">
      Designing
       <span
      className="
        ml-4
        text-6xl
        md:text-7xl
        xl:text-6xl
        text-transparent
        bg-clip-text
        bg-gradient-to-r
        from-lime-300
        via-lime-400
        to-lime-500
        mt-2
      "
    >
      Luxury Spaces
    </span>
    </span>

   
  </h2>



  <p className="max-w-2xl mx-auto mt-4 text-zinc-400 text-lg leading-relaxed">
    We craft sophisticated interiors that blend timeless elegance,
    modern functionality, and exceptional craftsmanship to create
    spaces that inspire every day.
  </p>
  <div className="relative max-w-5xl mx-auto mt-4 h-[2px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-400 to-transparent" />
            <div className="absolute inset-0 blur-md bg-gradient-to-r from-transparent via-lime-400/80 to-transparent" />
          </div>
</div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Image Side */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[650px] overflow-hidden rounded-[40px] border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury Interior"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>

          
          </div>

          {/* Content Side */}
<div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-zinc-400 text-lg leading-relaxed mb-4">
              At SAIFCO Interior, we believe every space should tell a
              story. Our expertise lies in crafting sophisticated
              residential and commercial interiors that balance
              functionality, luxury, and timeless aesthetics.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              From luxury villas and modern apartments to premium
              office environments and hospitality spaces, our team
              transforms ideas into beautifully curated experiences.
              Every project is approached with precision, creativity,
              and an uncompromising commitment to quality.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5 mb-12">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="
                    bg-[#111515]
                    border
                    text-center
                    rounded-3xl
                    p-6
                    border-lime-400/30
                    transition
                    hover:bg-lime-400/10
                  "
                >
                  <h3 className="text-4xl font-bold text-lime-400">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-300 uppercase tracking-[5px]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            
<div className="flex justify-center">
<button
  className="
    bg-lime-400
    text-black
    px-8
    py-4
    rounded-full
    font-bold
    relative

shadow-[0_0_30px_rgba(163,230,53,0.9)]
    hover:scale-105
    transition-all
    duration-300
  "
>
  Discover Our Story
</button>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
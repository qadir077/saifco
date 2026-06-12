// import Image from "next/image";

// const stats = [
//   {
//     value: "120+",
//     label: "Projects",
//   },
//   {
//     value: "10+",
//     label: "Years",
//   },
//   {
//     value: "50+",
//     label: "Clients",
//   },
//   {
//     value: "15+",
//     label: "Awards",
//   },
// ];

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen overflow-hidden">
//       {/* Background Image */}
//       <Image
//         src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070&auto=format&fit=crop"
//         alt="Luxury Interior"
//         fill
//         priority
//         className="object-cover"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/70" />

//       {/* Animated Grid */}
//       <div
//         className="
//         absolute inset-0
//         bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
//         bg-[size:80px_80px]
//       "
//       />

//       {/* Glow Effects */}
//       <div className="absolute top-20 left-10 w-96 h-96 bg-lime-400/10 rounded-full blur-[140px] animate-pulse" />

//       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-lime-400/10 rounded-full blur-[180px]" />

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
//         <div className="max-w-5xl">
//           {/* Badge */}
//           <div className="inline-flex items-center gap-3 border border-lime-400/20 bg-lime-400/10 backdrop-blur-xl px-5 py-3 rounded-full mb-8">
//             <span className="w-2 h-2 rounded-full bg-lime-400" />

//             <span className="text-xs tracking-[4px] uppercase text-lime-400">
//               Premium Interior Studio
//             </span>
//           </div>

//           {/* Heading */}
//           <h1 className="text-[60px] md:text-[90px] xl:text-[140px] font-black leading-[0.85] tracking-[-4px] text-white">
//             Interior
//             <br />
//             <span className="text-lime-400">
//               Excellence
//             </span>
//           </h1>

//           {/* Description */}
//           <p className="mt-8 max-w-2xl text-zinc-300 text-lg md:text-xl leading-relaxed">
//             Creating bespoke residential and commercial interiors that
//             blend luxury, functionality, and timeless elegance.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-wrap gap-4 mt-10">
//             <button className="bg-lime-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition duration-300">
//               Get Consultation
//             </button>

//             <button className="border border-white/20 backdrop-blur-xl px-8 py-4 rounded-full hover:border-lime-400 hover:text-lime-400 transition duration-300">
//               View Projects
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Floating Project Card */}
//       <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden lg:block z-20">
//         <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 w-[280px]">
//           <p className="text-zinc-400 uppercase tracking-[3px] text-xs">
//             Featured Project
//           </p>

//           <h3 className="text-3xl font-bold mt-3 text-white">
//             Modern Villa
//           </h3>

//           <p className="text-lime-400 mt-3">
//             4,500 Sq.ft Luxury Residence
//           </p>

//           <div className="mt-6 h-px bg-white/10" />

//           <p className="text-zinc-400 text-sm mt-4">
//             Contemporary architecture with premium interior detailing and
//             handcrafted finishes.
//           </p>
//         </div>
//       </div>

//       {/* Bottom Stats */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-[95%] max-w-6xl">
//         <div className="grid grid-cols-2 md:grid-cols-4 overflow-hidden rounded-3xl border border-white/10 bg-black/50 backdrop-blur-2xl shadow-[0_0_50px_rgba(163,230,53,0.08)]">
//           {stats.map((item, index) => (
//             <div
//               key={item.label}
//               className={`py-8 text-center ${
//                 index !== stats.length - 1
//                   ? "border-r border-white/10"
//                   : ""
//               }`}
//             >
//               <h3 className="text-4xl md:text-5xl font-bold text-lime-400">
//                 {item.value}
//               </h3>

//               <p className="mt-3 text-xs uppercase tracking-[4px] text-zinc-400">
//                 {item.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-40 left-8 hidden lg:flex flex-col items-center gap-3 z-20">
//         <span className="rotate-90 text-xs tracking-[4px] uppercase text-zinc-400">
//           Scroll
//         </span>

//         <div className="w-[1px] h-20 bg-white/20 relative overflow-hidden">
//           <div className="absolute top-0 left-0 w-full h-8 bg-lime-400 animate-bounce" />
//         </div>
//       </div>
//     </section>
//   );
// }



import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0d0d]">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-lime-400/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-lime-400/5 blur-[200px] rounded-full" />

      {/* Grid Pattern */}
      <div
        className="
        absolute inset-0 opacity-20
        bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
        bg-[size:80px_80px]
      "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-3 border border-lime-400/20 bg-lime-400/5 px-3 py-1.5 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-lime-400"></span>

              <span className="text-xs uppercase tracking-[4px] text-lime-400">
                Interior Design Studio
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl xl:text-[90px] leading-[0.9] font-black tracking-[-4px]">
              DESIGNING
              <br />
              <span className="text-lime-400">
                SPACES
              </span>
              <br />
              THAT INSPIRE
            </h1>

            <p className="mt-4 text-zinc-400 text-lg max-w-xl leading-relaxed">
              Crafting sophisticated residential and commercial interiors
              through innovative design, premium materials, and timeless
              aesthetics.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <button className="bg-lime-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition">
                Get Consultation
              </button>

              <button className="border border-white/15 px-8 py-4 rounded-full hover:border-lime-400 hover:text-lime-400 transition">
                View Portfolio
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-8 max-w-lg">
              <div>
                <h3 className="text-5xl font-bold text-lime-400">
                  120+
                </h3>
                <p className="uppercase text-xs tracking-[4px] text-zinc-500 mt-2">
                  Projects Delivered
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-bold text-lime-400">
                  10+
                </h3>
                <p className="uppercase text-xs tracking-[4px] text-zinc-500 mt-2">
                  Years Experience
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative aspect-[4/5] overflow-hidden ">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGZuFsZOLrXBk60lkm--nY_6Pkz9mk5CS50UhlE0EwAcr3q8pJASXDbT9oAsHfT-veuRVqXI7ZmX9k2uD_4r-2qkT2dmuzeNPe6UCO9J7013qoYSJxJypcmBggr_hY5jOcP19ijM3i6A_2cv4aA7x_6VnAMwYOcYccz2Ux569wEfmHivWlDDV0LSo6cIRVoFRUsbTEkOV0EHpBe58vHq5wY8vYYxyZQcejRFhAKavCqY9SxHCByj0_LD2QB-3-LsRQnGpmZIRoH7w"
                alt="Luxury Interior"
                fill
                className="object-cover hover:scale-110 transition duration-700"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
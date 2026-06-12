export default function CTA() {
  return (
    <section className="relative pb-22 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-lime-400/15 blur-[200px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-lime-400/10 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-[#111515]
            backdrop-blur-xl
          "
        >
          {/* Decorative Lines */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-400/70 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-400/40 to-transparent" />

          <div className="grid lg:grid-cols-12 gap-12 p-10 md:p-16 xl:p-10">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span
                className="
                  inline-flex
                  w-fit
                  px-5
                  py-2
                  rounded-full
                  border
                  border-lime-400/20
                  bg-lime-400/10
                  text-lime-400
                  text-xs
                  tracking-[4px]
                  uppercase
                  mb-8
                "
              >
                Let's Build Something Extraordinary
              </span>

              <h2 className="text-5xl md:text-6xl xl:text-6xl font-extrabold leading-[0.95]">
                Design The
                <br />
                <span className="text-lime-400">
                  Space You've Always
                </span>
                <br />
                Dreamed Of
              </h2>

              <p className="mt-8 text-zinc-400 text-lg max-w-2xl leading-relaxed">
                From luxury residences and modern offices to bespoke
                commercial interiors, SAIFCO Interior transforms
                ordinary spaces into timeless experiences crafted with
                precision, elegance, and unmatched attention to detail.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 mt-12">
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
                  Get Free Consultation
                </button>

                <button
                  className="
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-md
                    px-10
                    py-5
                    rounded-full
                    font-bold
                    hover:bg-white
                    hover:text-black
                    transition-all
                    duration-500
                  "
                >
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Right Side Luxury Stats */}
            <div className="lg:col-span-5">
              <div
                className="
                  h-full
                  rounded-[32px]
                  border
                  border-lime-400/30
                  bg-black/30
                  backdrop-blur-xl
                  p-8
                  flex
                  flex-col
                  justify-center
                "
              >
                <div className="grid grid-cols-2 gap-5">
                  {[
                    {
                      value: "120+",
                      label: "Projects",
                    },
                    {
                      value: "10+",
                      label: "Years",
                    },
                    {
                      value: "50+",
                      label: "Clients",
                    },
                    {
                      value: "15+",
                      label: "Awards",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="
                        text-center
                        rounded-3xl
                        border

                        bg-white/5
                        py-8
border-lime-400/30
                        hover:bg-lime-400/5
                        transition-all
                        duration-500
                      "
                    >
                      <h3 className="text-4xl font-bold text-lime-400">
                        {item.value}
                      </h3>

                      <p className="mt-2 text-xs uppercase tracking-[4px] text-zinc-400">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <div className="h-[2px] bg-gradient-to-r from-transparent via-lime-400 to-transparent" />
                </div>

                <p className="mt-8 text-center text-zinc-400 leading-relaxed">
                  Trusted by homeowners, architects, and businesses
                  seeking premium interior solutions that combine
                  luxury aesthetics with practical functionality.
                </p>
              </div>
            </div>
          </div>

          {/* Corner Glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-lime-400/20 blur-[120px] rounded-full" />
        </div>
      </div>
    </section>
  );
}
export default function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#121414] p-10 md:p-20 lg:p-32 text-center">
        <div className="absolute top-0 right-0 w-72 h-72 bg-lime-400/10 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-400/5 rounded-full blur-[150px]" />

        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-10">
            Ready To Design
            <br />
            Your Dream Space?
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <button className="bg-lime-400 text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition">
              Contact Us
            </button>

            <button className="border border-white/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-black transition">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
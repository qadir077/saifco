import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="bg-[#0c0f0f] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="absolute -top-16 -left-10 text-[120px] text-lime-400/10 font-bold select-none">
          "
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold text-lime-400 mb-12">
            What Clients Say
          </h2>

          <p className="text-3xl md:text-4xl font-light italic leading-relaxed mb-10">
            "Amazing work. Delivered exactly what was promised.
            Their attention to detail in the lighting design
            alone transformed my home into a work of art."
          </p>

          <div className="flex items-center justify-center gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-lime-400">
              <Image
                fill
                alt="Client"
                className="object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE9xDO2013CJlFBFaAR_Q_S2RCNcflZ-Gj9HO0SBIAr4bu61sZBSPwcsqnb2pQwmEHG64KmjyJmAvwMxwRz5KHUP_i_fMxc9XkCuCwYWqe182Bh8_WllsBLGJfrVlWKTox4pbcl5sFYuK9C9IFgf3ZL2XR8CPlgqR0IuaMM-LbJ7K7lx5-qHinzCQnwvsv8_ffi2SjGv4mZQr03ZU1I3PNDHfoKuUrpn0ETH25v9qPm8fG7zMjB6wME0uqRI3XLnxqOKIbKpdIFts"
              />
            </div>

            <div className="text-left">
              <h4 className="font-semibold uppercase tracking-wider">
                Vikram Malhotra
              </h4>

              <p className="text-zinc-400 text-sm">
                CEO, Technova Systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
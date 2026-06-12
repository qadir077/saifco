import {
  Mail,
  Phone,
  MapPin,
  Share2,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0c0f0f] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div>
            <h3 className="text-3xl font-bold text-lime-400 mb-6">
              SAIFCO INTERIOR
            </h3>

            <p className="text-zinc-400 mb-8">
              Redefining luxury living through editorial
              design and architectural precision.
            </p>

            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-lime-400 hover:text-black transition">
                <Share2 size={18} />
              </button>

              <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-lime-400 hover:text-black transition">
                <Mail size={18} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="uppercase tracking-[4px] text-sm mb-8 font-semibold">
              Navigation
            </h4>

            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#">Portfolio</a>
              </li>

              <li>
                <a href="#">Services</a>
              </li>

              <li>
                <a href="#">Process</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-[4px] text-sm mb-8 font-semibold">
              Contact
            </h4>

            <ul className="space-y-5 text-zinc-400">
              <li className="flex gap-3 items-center">
                <Phone
                  size={16}
                  className="text-lime-400"
                />
                +91 9810263085
              </li>

              <li className="flex gap-3 items-center">
                <Mail
                  size={16}
                  className="text-lime-400"
                />
                saifcointeriors@gmail.com
              </li>

              <li className="flex gap-3 items-center">
                <MapPin
                  size={16}
                  className="text-lime-400"
                />
                Luxury Design Studio, IN
              </li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-[4px] text-sm mb-8 font-semibold">
              Stay Inspired
            </h4>

            <p className="text-zinc-400 text-sm mb-5">
              Join our editorial list for the latest
              trends in high-end design.
            </p>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#1e2020] px-4 py-3 rounded-lg outline-none border border-white/10 focus:border-lime-400"
              />

              <button className="bg-lime-400 text-black px-4 rounded-lg font-bold">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-[3px] text-zinc-500">
          <span>
            © 2024 SAIFCO INTERIOR. All rights reserved.
          </span>

          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
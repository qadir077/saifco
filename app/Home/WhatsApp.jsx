"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919810263085"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      className="fixed bottom-8 right-8 z-[999] group"
    >
      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-lime-400/30 animate-ping"></span>

      {/* Glow */}
      <span className="absolute inset-0 rounded-full bg-lime-400 blur-xl opacity-40 group-hover:opacity-70 transition duration-500"></span>

      {/* Main Button */}
      <div
        className="
        relative
        w-16
        h-16
        rounded-full
        bg-gradient-to-br
        from-lime-400
        to-lime-500
        flex
        items-center
        justify-center
        border
        border-white/20
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(163,230,53,0.45)]
        group-hover:scale-110
        group-hover:rotate-6
        transition-all
        duration-500
      "
      >
        <svg
          className="w-8 h-8 fill-black"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-1.557-.594-2.662-1.726-1.104-1.132-1.607-2.446-1.607-2.446l-.015-.015c-.234-.311-.532-.705-.532-1.115 0-.411.215-.613.299-.699.084-.086.183-.108.271-.108h.174c.089 0 .175-.002.253.53.078.532.266 1.298.266 1.298l.06.143c.018.044.033.101.01.145-.022.044-.061.091-.12.16-.059.07-.124.118-.178.183-.054.065-.107.13-.046.234.061.105.271.447.581.724.4.356.733.468.837.52.103.052.164.043.225-.026.061-.069.262-.304.331-.408.069-.104.139-.087.234-.052.095.035.602.284.602.284l.115.056c.056.027.093.04.126.095.033.056.033.325-.11.73zM12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.657 1.441 5.163l-1.441 5.274 5.394-1.416C8.827 21.657 10.354 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
        </svg>
      </div>

      {/* Tooltip */}
      <div
        className="
        absolute
        right-20
        top-1/2
        -translate-y-1/2
        opacity-0
        translate-x-4
        group-hover:opacity-100
        group-hover:translate-x-0
        transition-all
        duration-500
        pointer-events-none
      "
      >
        <div
          className="
          bg-black/90
          backdrop-blur-xl
          border
          border-lime-400/20
          text-white
          px-5
          py-3
          rounded-2xl
          whitespace-nowrap
          shadow-[0_0_30px_rgba(163,230,53,0.15)]
        "
        >
          <p className="text-xs uppercase tracking-[3px] text-lime-400">
            WhatsApp
          </p>

          <p className="font-semibold mt-1">
            Let's Discuss Your Project
          </p>
        </div>
      </div>
    </motion.a>
  );
}
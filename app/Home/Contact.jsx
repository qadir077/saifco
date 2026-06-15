"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 80, damping: 14 } },
  };

  return (
    <section className="relative py-32 overflow-hidden bg-[#0c0f0f]/30">
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-lime-400/5 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-lime-400/5 blur-[180px] rounded-full translate-x-1/2 translate-y-1/2"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
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
            Connect With Us
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl xl:text-7xl font-bold leading-[0.95]">
            Start Your
            <span className="ml-4 text-lime-400">
              Project
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-zinc-400 text-lg leading-relaxed">
            Ready to elevate your residential or commercial space? Contact us today to schedule your consultation.
          </p>

          <div className="relative max-w-5xl mx-auto mt-8 h-[2px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-400 to-transparent" />
            <div className="absolute inset-0 blur-md bg-gradient-to-r from-transparent via-lime-400/80 to-transparent" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Side: Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 space-y-6"
          >
            {[
              {
                icon: Phone,
                title: "Call Us",
                content: "+91 9810263085",
                subcontent: "Mon - Sat (9am - 7pm)",
                href: "tel:+919810263085"
              },
              {
                icon: Mail,
                title: "Email Us",
                content: "saifcointeriors@gmail.com",
                subcontent: "Response within 24 hours",
                href: "mailto:saifcointeriors@gmail.com"
              },
              {
                icon: MapPin,
                title: "Our Studio",
                content: "Luxury Design Studio, IN",
                subcontent: "Visit by appointment only",
                href: "#"
              },
              {
                icon: Clock,
                title: "Working Hours",
                content: "9:00 AM - 7:00 PM",
                subcontent: "Sunday: Closed",
                href: null
              }
            ].map((info) => {
              const Icon = info.icon;
              const CardContent = (
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -5, borderColor: "rgba(163, 230, 53, 0.4)", backgroundColor: "rgba(163, 230, 53, 0.03)" }}
                  className="
                    bg-[#111515]
                    border
                    border-white/10
                    rounded-[28px]
                    p-6
                    flex
                    items-center
                    gap-6
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  <div className="w-14 h-14 rounded-2xl bg-lime-400/10 flex items-center justify-center text-lime-400 shrink-0">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-[3px] text-zinc-500 font-semibold">{info.title}</h3>
                    <p className="text-lg font-bold text-white mt-1 group-hover:text-lime-400 transition-colors">{info.content}</p>
                    <p className="text-sm text-zinc-400 mt-0.5">{info.subcontent}</p>
                  </div>
                </motion.div>
              );

              return info.href ? (
                <a href={info.href} key={info.title} className="block group">
                  {CardContent}
                </a>
              ) : (
                <div key={info.title}>{CardContent}</div>
              );
            })}
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-[#111515] border border-white/10 rounded-[40px] p-8 md:p-12 relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[3px] text-zinc-400 font-semibold">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#1e2020] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-lime-400 transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[3px] text-zinc-400 font-semibold">Your Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#1e2020] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-lime-400 transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[3px] text-zinc-400 font-semibold">Phone Number</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-[#1e2020] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-lime-400 transition-colors duration-300"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[3px] text-zinc-400 font-semibold">Your Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#1e2020] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-lime-400 transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project space, design style, and timeline..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === "sending"}
                type="submit"
                className="
                  w-full
                  bg-lime-400
                  text-black
                  py-5
                  rounded-2xl
                  font-bold
                  flex
                  items-center
                  justify-center
                  gap-3
                  shadow-[0_0_30px_rgba(163,230,53,0.4)]
                  disabled:opacity-55
                  transition-shadow
                  duration-300
                  cursor-pointer
                "
              >
                {status === "sending" ? (
                  <span>Sending Message...</span>
                ) : status === "success" ? (
                  <span>Message Sent Successfully!</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Hero from './Hero';
import Navbar from './Navbar';
import About from './About';
import Services from './Services';
import Cta from './Cta';
import Projects from './Projects';
import WhatsApp from './WhatsApp';
import Testimonials from './Testimonials';
import Faq from './Faq';
import Contact from './Contact';
import Footer from './Footer';
import { motion } from "framer-motion";


const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <Cta/>
        <Projects/>
        <WhatsApp/>
        <Testimonials/>
        <Faq/>
        <Contact/>
        <Footer/>
    </motion.div>
  )
}

export default page
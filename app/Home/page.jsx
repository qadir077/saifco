
import Hero from './Hero';
import Navbar from './Navbar';
import About from './About';
import Services from './Services';
import Cta from './Cta';
import Projects from './Projects';
import WhatsApp from './WhatsApp';
import Testimonials from './Testimonials';
import Faq from './Faq';
import Footer from './Footer';


const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <Cta/>
        <Projects/>
        <WhatsApp/>
        <Testimonials/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default page
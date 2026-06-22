import React from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import AboutHero from './Hero'
import OurStory from './OurStory'
import WhyChoose from './WhyChoose'
import Journey from './Journey'
import Team from './Team'
import Gallery from './Gallery'
import ContactInfo from './ContactInfo'
import Overview from './Overview'
import Vision from './Vision'


const page = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <OurStory/>
      <WhyChoose/>
      <Journey/>
      <Vision/>
      <Gallery/>
      <Overview/>
      <Team/>
      <ContactInfo/>
      <Footer />
    </div>
  )
}

export default page
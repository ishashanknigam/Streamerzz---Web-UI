import { useRef } from "react"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import HowItWorks from "./components/HowItWorks"
import KeyFeatures from "./components/KeyFeatures"
import Navbar from "./components/Navbar"
import PricingPlan from "./components/PricingPlan"
import Testimonials from "./components/Testimonials"
import LocomotiveScroll from 'locomotive-scroll';
import '../src/locomotive-scroll.css'
import { useEffect } from "react"

const App = () => {
  const scrollRef=useRef();

  // useEffect(()=>{
  //   const scroll=new LocomotiveScroll({
  //     el:scrollRef.current,
  //     smooth:true
  //   })
  // })
  return (
    <main ref={scrollRef} className="text-sm text-neutral-300 antialiased">
      <Navbar/>
      <HeroSection/>
      <HowItWorks/>
      <KeyFeatures/>
      <PricingPlan/>
      <Testimonials/>
      <Footer/>
    </main>
  )
}

export default App

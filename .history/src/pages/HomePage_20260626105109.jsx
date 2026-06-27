import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactSection } from '../components/ContactSection';
import { Monitor, Megaphone, Smartphone, Rocket, Play, X } from 'lucide-react';
import { useRouter } from '../router';

// Asset Imports
import Frame944 from '../assets/HOME/Frame-1000000944.png';
import Frame945 from '../assets/HOME/Frame-1000000945.png';
import Frame946 from '../assets/HOME/Frame-1000000946.png';
import Frame949 from '../assets/HOME/Frame-1000000949.png';
import RocketLaunchIcon from '../assets/HOME/rocket_launch.png';
import Banner1 from '../assets/HOME/Banner1.png';
import Banner2 from '../assets/HOME/Banner2.png';
import Banner3 from '../assets/HOME/Banner3.png';
import DigitalAgency1 from '../assets/HOME/Digital-Agency-1.png';
import PharmacyLogo from '../assets/HOME/1663233076509.jpg';
import NaffcoLogo from '../assets/HOME/images-1.png';
import Group598 from '../assets/HOME/Group-598.png';
import Group599 from '../assets/HOME/Group-599.png';
import Group600 from '../assets/HOME/Group-600.png';
import home6Img1 from '../assets/HOME/home6_img_1.png';
import home6Img3 from '../assets/HOME/home6_img_3.png';
import home6Img4 from '../assets/HOME/home6_img_4.png';
import home6Img5 from '../assets/HOME/home6_img_5.png';
import home6Img6 from '../assets/HOME/home6_img_6.png';
import home6Img8 from '../assets/HOME/home6_img_8.png';
import home6Img9 from '../assets/HOME/home6_img_9.png';
import home8Img from '../assets/HOME/home8_testimonials_img.jpg';
export function HomePage() {
  const { navigate } = useRouter();
  const [dotStable, setDotStable] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-sans overflow-hidden">

      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 px-6 md:px-12 lg:px-16 overflow-hidden" style={{ backgroundColor: '#e6f4f4' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 pr-4 lg:pr-10"
          >
            <h1 className="text-5xl md:text-6xl lg:text-[70px] font-extrabold text-[#0a1e27] leading-[1.1] mb-6">
              New Age Digital<br />Agency
            </h1>
            <p className="text-[#1a3b47] text-[17px] md:text-[18px] leading-relaxed mb-6 max-w-[500px]" style={{ fontFamily: 'Georgia, serif' }}>
              We are a new age, ROI driven Digital marketing and web development company specializing in Branding and Lead generation for small businesses and big brands.
            </p>
            <p className="text-[#1a3b47] font-bold text-[18px] mb-8">
              Free SEO Analysis ?
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="px-10 py-4 text-[18px] bg-gradient-to-r from-[#179b9b] to-[#8dc63f] text-white font-bold rounded-full shadow-[-2px_5px_15px_rgba(10,30,39,0.3)] active:shadow-none active:translate-y-[2px] transition-all duration-150 relative"
              style={{ boxShadow: '-3px 6px 0px #0e5e5e, -3px 10px 15px rgba(0,0,0,0.2)' }}
            >
              Get Free Analysis
            </button>
          </motion.div>

          {/* Right Floating Images */}
          <div className="relative w-full mt-16 lg:mt-0 flex items-center justify-center">
            <div className="relative w-full max-w-[520px] aspect-[1.15]">
              {/* Left - Headset */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute left-0 top-[4%] w-[55%] z-0 rounded-[16px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.1)]"
              >
                <img src={Banner1} alt="Support agent" className="w-full h-auto object-cover" />
              </motion.div>

              {/* Top Right - Team */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute left-76 bottom-50 w-[44%] z-10 rounded-[16px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.1)]"
              >
                <img src={Banner2} alt="Team collaborating" className="w-full h-auto object-cover" />
              </motion.div>

              {/* Bottom - App UI */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute left-[15%] bottom-0 w-[60%] z-20 rounded-[16px] overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.2)]"
              >
                <img src={Banner3} alt="Mobile App UI" className="w-full h-auto object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What We Do Section */}
      <section className="w-full bg-white relative">
        <div className="flex flex-col lg:flex-row">
          {/* Dark Left Side */}
          <div className="lg:w-[60%] bg-[#222222] text-white py-12 px-6 lg:pl-12 lg:pr-32 relative overflow-hidden flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center w-full relative z-10">WHAT WE DO ?</h2>
            <div className="flex flex-col md:flex-row justify-between w-full max-w-4xl mx-auto relative z-10 gap-10 md:gap-4">
              <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center text-center group w-full md:w-1/3">
                <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:drop-shadow-[0_0_15px_rgba(141,198,63,0.5)]">
                  <img src={Group600} alt="Web Development" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-[16px] md:text-[17px] font-semibold">Web<br />Development</h3>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center text-center group w-full md:w-1/3">
                <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:drop-shadow-[0_0_15px_rgba(23,155,155,0.5)]">
                  <img src={Group598} alt="Digital Marketing" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-[16px] md:text-[17px] font-semibold">Digital<br />Marketing</h3>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center text-center group w-full md:w-1/3">
                <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:drop-shadow-[0_0_15px_rgba(141,198,63,0.5)]">
                  <img src={Group599} alt="Mobile Application" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-[16px] md:text-[17px] font-semibold">Mobile<br />Application</h3>
              </motion.div>
            </div>

            {/* White curve mask to overlap the left side slightly on desktop */}
            <div className="hidden lg:block absolute top-0 right-0 h-[120%] w-[250px] bg-white rounded-s-full transform translate-x-[50%] -translate-y-[10%]"></div>
          </div>

          {/* White Right Side */}
          <div className="lg:w-[40%] bg-white  flex items-center relative z-10">
            <div className="flex items-center lg:gap-10 lg:-ml-10 -ml-4 relative z-20">
              <h2 className="text-[#179b9b] font-extrabold text-[25px] md:text-[32px] " style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                PHASE
              </h2>
              <ul className="space-y-4 text-[#3f3b68] text-[19px] md:text-[22px] font-medium list-disc pl-8 marker:text-[#3f3b68]">
                <li>DESIGN</li>
                <li>DEVELOPMENT</li>
                <li>MARKETING</li>
              </ul>
            </div>
            {/* Animated Decorative dot with Tick */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={dotStable ? { y: "-50%" } : { y: ["-100%", "0%", "-100%"] }}
              transition={dotStable ? { type: "spring", stiffness: 200, damping: 15 } : { duration: 1, repeat: 2, ease: "easeInOut" }}
              onAnimationComplete={() => setDotStable(true)}
              className="absolute right-32 top-1/2 w-[80px] h-[80px] bg-[#1a4a5b] rounded-full hidden lg:flex items-center justify-center shadow-2xl"
            >
              <AnimatePresence>
                {dotStable && (
                  <motion.svg
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                    xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#3cc994]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. About / Why Us Section */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
            }}
            className="relative"
          >
            <img
              src={DigitalAgency1}
              alt="Digital Agency Team"
              className="w-full h-[450px] lg:h-[550px] object-contain lg:object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
            }}
          >
            <h2 className="text-3xl md:text-3xl lg:text-[42px] font-bold text-[#0a1e27] leading-[1.2] mb-5">
              Best Digital Agency with Certified Digital Marketers in UAE and INDIA
            </h2>
            <h3 className="text-[#3cc994] text-[18px] lg:text-[22px] font-medium mb-6 leading-relaxed">
              Our clients always overwhelm us saying these kind of words, we strive hard to keep up the good work.
            </h3>
            <p className="text-[#646e85] text-[16px] lg:text-[18px] leading-relaxed mb-8">
              We are a bunch of creative nerds specializing in digital marketing and web development. We help you build a creative website that brings you better traffic. We ensure top-notch services to our clients with a hardworking team of professionals certified from Google AdWords and Analytics. We bring you the right knowledge and make sure that our services bring you continuous profit.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={() => navigate('/about')}
                className="px-8 py-3 bg-gradient-to-r from-[#3cc994] to-[#8dc63f] text-white font-bold rounded-md hover:opacity-90 transition-opacity shadow-sm"
              >
                Learn More
              </button>
              <button onClick={() => setIsVideoOpen(true)} className="flex items-center gap-3 text-[#0a1e27] font-bold text-[13px] uppercase hover:text-[#3cc994] transition-colors group">
                <div className="w-12 h-12 bg-[#0a1e27] rounded-full flex items-center justify-center text-white group-hover:bg-[#179b9b] transition-colors shadow-lg">
                  <Play size={20} className="ml-1" />
                </div>
                PLAY VIDEO
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Why Choose Us Grid */}
      <section className="py-8 px-2 md:px-4 lg:px-6 overflow-hidden bg-white relative">
        <div className="w-max-1500px relative border border-[#179b9b] rounded-[40px] md:rounded-[50px] px-6 py-8 md:px-12 md:py-10 lg:py-12 lg:px-16 shadow-[0_20px_60px_rgba(23,155,155,0.35)] bg-white">

          <div className="grid lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto">

            {/* Left Text List (Col-span 5 to be smaller and give cards more room) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
              }}
              className="lg:col-span-5"
            >
              <div className="inline-block px-6 py-2 bg-[#0a1e27] text-white text-[14px] md:text-[16px] font-bold uppercase tracking-wider rounded-full mb-4">
                WHY CHOOSE US
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1e27] leading-tight mb-6">
                Sky Rocket Your Business With Suggestinfo
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4 items-start">
                  <img src={RocketLaunchIcon} alt="Rocket" className="w-6 h-6 object-contain mt-1 shrink-0" />
                  <p className="text-[#0a1e27] text-[16px] md:text-[17px] font-medium leading-relaxed">
                    Our team is expert in the field, and we have the skills and experience to provide you with the best services in the industry.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <img src={RocketLaunchIcon} alt="Rocket" className="w-6 h-6 object-contain mt-1 shrink-0" />
                  <p className="text-[#0a1e27] text-[16px] md:text-[17px] font-medium leading-relaxed">
                    We believe in generating the maximum profit for our users. For us, the growth of our clients is the priority because when they grow, we also grow.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <img src={RocketLaunchIcon} alt="Rocket" className="w-6 h-6 object-contain mt-1 shrink-0" />
                  <p className="text-[#0a1e27] text-[16px] md:text-[17px] font-medium leading-relaxed">
                    We are not the newcomers in the industry; we have a team of experts who have years of experience plus a group of fresh talent present unique ideas.
                  </p>
                </div>
              </div>

              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-3 bg-gradient-to-r from-[#179b9b] to-[#8dc63f] text-white font-bold rounded-md hover:opacity-90 transition-opacity shadow-md"
              >
                Contact Us
              </button>
            </motion.div>

            {/* Right Cards Grid (Col-span 6 with offset to make them smaller) */}
            <div className="lg:col-span-6 lg:col-start-7 grid grid-cols-1 sm:grid-cols-2 gap-6 relative items-start">

              {/* Left Column in Grid */}
              <div className="flex flex-col gap-6">
                {/* Card 1: SEO (Red) */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative group rounded-[16px] overflow-hidden drop-shadow-xl cursor-pointer"
                >
                  <img src={Frame944} alt="Search Engine Optimization background" className="w-full h-auto object-cover" />
                  <div className="absolute inset-0 p-8 flex flex-col text-white">
                    <h3 className="font-bold text-xl lg:text-[22px] mb-2 leading-tight">Search Engine<br />Optimization</h3>
                    <p className="text-sm lg:text-[15px] font-medium leading-relaxed opacity-90 pr-4">By executing advanced Search Engine Optimization tactics we optimize your website.</p>
                  </div>
                </motion.div>

                {/* Card 3: Real Time and Data (Blue) */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative group rounded-[16px] overflow-hidden drop-shadow-xl cursor-pointer"
                >
                  <img src={Frame945} alt="Real Time and Data background" className="w-full h-auto object-cover" />
                  <div className="absolute inset-0 p-8 flex flex-col text-white">
                    <h3 className="font-bold text-xl lg:text-[22px] mb-2 leading-tight">Real Time and Data</h3>
                    <p className="text-sm lg:text-[15px] font-medium leading-relaxed opacity-90 pr-4">Whether you want to stay in connection with existing customers or attract new prospective customers.</p>
                  </div>
                </motion.div>
              </div>

              {/* Right Column in Grid */}
              <div className="flex flex-col gap-6 sm:mt-12">
                {/* Card 2: Social Media (Green) */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative group rounded-[16px] overflow-hidden drop-shadow-xl cursor-pointer"
                >
                  <img src={Frame946} alt="Social Media Strategy background" className="w-full h-auto object-cover" />
                  <div className="absolute inset-0 p-8 flex flex-col text-white">
                    <h3 className="font-bold text-xl lg:text-[22px] mb-2 leading-tight w-2/3">Social Media<br />Strategy</h3>
                    <p className="text-sm lg:text-[15px] font-medium leading-relaxed opacity-90 w-4/5">Brand Awareness, Lead Generation, Engagement, Social Media Ads, We do it all.</p>
                  </div>
                </motion.div>

                {/* Card 4: Reporting (Yellow) */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative group rounded-[16px] overflow-hidden drop-shadow-xl cursor-pointer"
                >
                  <img src={Frame949} alt="Reporting & Analysis background" className="w-full h-auto object-cover" />
                  <div className="absolute inset-0 p-8 flex flex-col text-[#0a1e27]">
                    <h3 className="font-bold text-xl lg:text-[22px] mb-2 leading-tight">Reporting & Analysis</h3>
                    <p className="text-sm lg:text-[15px] font-medium leading-relaxed opacity-90 pr-4">Increase your leads, Skyrocket your sales and get the best returns on your investment.</p>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Recent Projects (Case Studies) */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          <p className="font-bold mb-2 text-[16px] md:text-[18px] text-[#8dc63f] inline-block">
            Case Studies
          </p>
          <h2 className="text-4xl md:text-[42px] font-extrabold text-[#0a1e27] mb-12">Our Recent Projects</h2>

          <div className="grid lg:grid-cols-11 gap-8 lg:gap-12">

            {/* Project 1: NAFFCO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group lg:col-span-5"
            >
              <div className="w-full h-[200px] md:h-[220px] bg-white rounded-[16px] shadow-[0_12px_25px_rgba(0,0,0,0.4)] flex items-center justify-center mb-6 overflow-hidden transition-shadow hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
                <img src={NaffcoLogo} alt="NAFFCO FZCO Logo" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-3xl font-bold text-[#179b9b] mb-4">NAFFCO FZCO</h3>
              <p className="text-[#646e85] text-[15px] md:text-[16px] leading-relaxed mb-4">
                We are currently working on the Multilingual SEO project of NAFFCO website. We have successfully launched their new revamped corporate website with Zero SEO ranking drop.
              </p>
              <p className="text-[#0a1e27] text-[15px] md:text-[16px] font-medium">Location: UAE</p>
            </motion.div>

            {/* Project 2: Pharmacy Council */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group lg:col-span-6"
            >
              <div className="w-full h-[200px] md:h-[220px] bg-white rounded-[16px] shadow-[0_12px_25px_rgba(0,0,0,0.4)] flex items-center justify-center mb-6 overflow-hidden transition-shadow hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)] p-10">
                <img src={PharmacyLogo} alt="Maharashtra State Pharmacy Council Logo" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-3xl font-bold text-[#179b9b] mb-4">Maharashtra State Pharmacy Council</h3>
              <p className="text-[#646e85] text-[15px] md:text-[16px] leading-relaxed mb-4">
                We recently developed a Learning Management System (LMS) for the Maharashtra State Pharmacy Council to streamline continuing education for pharmacists. The user-friendly platform includes course management, online assessments, and certification tracking, enhancing professional development efficiency and accessibility.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="py-24 relative bg-[#0a1e27] overflow-hidden min-h-[700px] flex flex-col justify-center">
        {/* Glow behind the glass container */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#179b9b] opacity-20 blur-[120px] rounded-full pointer-events-none z-0"></div>

        {/* Floating Avatars */}
        <div className="absolute inset-0 w-full h-full max-w-[1400px] mx-auto pointer-events-none z-0">
          <motion.img initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} src={home6Img1} alt="Client" className="absolute top-[18%] left-[25%] w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full object-cover shadow-2xl border border-white/10" />
          <motion.img initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.1 }} src={home6Img3} alt="Client" className="absolute top-[35%] left-[10%] w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full object-cover shadow-2xl border border-white/10" />
          <motion.img initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} src={home6Img4} alt="Client" className="absolute bottom-[40%] left-[15%] md:left-[22%] w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full object-cover shadow-2xl border border-white/10" />

          <motion.img initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} src={home6Img5} alt="Client" className="absolute top-[20%] right-[28%] w-[60px] h-[60px] rounded-full object-cover shadow-2xl border border-white/10" />
          <motion.img initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} src={home6Img6} alt="Client" className="absolute top-[22%] right-[12%] w-[50px] h-[50px] rounded-full object-cover shadow-2xl border border-white/10" />
          <motion.img initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} src={home6Img8} alt="Client" className="absolute top-[45%] right-[15%] md:right-[22%] w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full object-cover shadow-2xl border border-white/10" />

          {/* Outer edge images (unblurred) */}
          <motion.img initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.6 }} src={home6Img9} alt="Client" className="absolute bottom-[35%] right-[5%] md:right-[10%] w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full object-cover shadow-2xl opacity-90 border border-white/10" />
          <motion.img initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} src={home8Img} alt="Client" className="absolute bottom-[30%] left-[5%] md:left-[10%] w-[80px] h-[80px] rounded-full object-cover shadow-2xl opacity-90 border border-white/10" />
        </div>

        <div className="relative z-10 flex flex-col items-center w-full max-w-7xl mx-auto px-6">
          <p className="text-white text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
            TESTIMONIALS
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-20 text-center">
            What Our Client's Say
          </h2>

          {/* Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-[750px] border border-white/20 bg-[#ffffff08] backdrop-blur-[20px] rounded-tr-[32px] rounded-bl-[32px] p-10 md:px-20 md:py-16 shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col items-center text-center"
          >
            {/* Quote Icon placed at top center */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-1.5">
              <div className="w-[18px] h-[45px] bg-gradient-to-b from-[#3cc994] to-[#8dc63f] transform -skew-x-[15deg]"></div>
              <div className="w-[18px] h-[45px] bg-gradient-to-b from-[#3cc994] to-[#8dc63f] transform -skew-x-[15deg]"></div>
            </div>

            <p className="text-white/95 text-[16px] md:text-[18px] leading-[1.8] mb-8 font-light tracking-wide">
              We are using suggestinfo.com for more than 2 years for our SEO and digital marketing campaign. They are highly professional and expert in this field. They lifted our traffic from 0 to 10k per month in just 3 months. Well done and good luck to your team.<br />Excellent work.
            </p>

            <h4 className="text-white font-bold text-xl tracking-wide">Wesuggest Software</h4>
            <p className="text-white/60 text-[15px] mt-1.5">Customer</p>
          </motion.div>

          {/* Pagination Dots */}
          <div className="flex items-center gap-3 mt-16">
            <div className="w-2 h-2 rounded-full bg-white/40 cursor-pointer hover:bg-white transition-colors"></div>
            <div className="w-2 h-2 rounded-full bg-white/40 cursor-pointer hover:bg-white transition-colors"></div>
            <div className="w-6 h-2 rounded-full bg-white cursor-pointer transition-all"></div>
            <div className="w-2 h-2 rounded-full bg-white/40 cursor-pointer hover:bg-white transition-colors"></div>
            <div className="w-2 h-2 rounded-full bg-white/40 cursor-pointer hover:bg-white transition-colors"></div>
            <div className="w-2 h-2 rounded-full bg-white/40 cursor-pointer hover:bg-white transition-colors"></div>
            <div className="w-2 h-2 rounded-full bg-white/40 cursor-pointer hover:bg-white transition-colors"></div>
          </div>
        </div>
      </section>

      {/* 7. Contact Section */}
      <ContactSection
        title={<>Let's Work<br />Together</>}
      />

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 lg:p-10"
          >
            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-lg shadow-2xl">
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 md:-right-12 md:top-0 z-10 text-white hover:text-gray-300 transition-colors"
              >
                <X size={40} />
              </button>
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/3hJEYdzfSXw?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default HomePage;

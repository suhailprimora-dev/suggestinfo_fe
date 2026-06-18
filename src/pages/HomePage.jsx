import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Megaphone, Smartphone, Rocket, Play } from 'lucide-react';
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

export function HomePage() {
  const { navigate } = useRouter();

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
              className="px-8 py-3 bg-gradient-to-r from-[#179b9b] to-[#8dc63f] text-white font-bold rounded-full shadow-[-2px_5px_15px_rgba(10,30,39,0.3)] active:shadow-none active:translate-y-[2px] transition-all duration-150 relative"
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
        <div className="flex flex-col lg:flex-row min-h-[400px]">
          {/* Dark Left Side */}
          <div className="lg:w-2/3 bg-[#222222] text-white py-16 px-6 lg:px-20 relative overflow-hidden">
            <h2 className="text-3xl font-bold mb-12 text-center lg:text-left">WHAT WE DO ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto lg:mx-0 relative z-10">
              <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full border-[1.5px] border-[#8dc63f] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:shadow-[0_0_15px_rgba(141,198,63,0.3)]">
                  <img src={Group598} alt="Web Development" className="w-8 h-8 object-contain" />
                </div>
                <h3 className="text-[17px] font-semibold">Web<br />Development</h3>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full border-[1.5px] border-[#179b9b] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:shadow-[0_0_15px_rgba(23,155,155,0.3)]">
                  <img src={Group599} alt="Digital Marketing" className="w-8 h-8 object-contain" />
                </div>
                <h3 className="text-[17px] font-semibold">Digital<br />Marketing</h3>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full border-[1.5px] border-[#8dc63f] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:shadow-[0_0_15px_rgba(141,198,63,0.3)]">
                  <img src={Group600} alt="Mobile Application" className="w-8 h-8 object-contain" />
                </div>
                <h3 className="text-[17px] font-semibold">Mobile<br />Application</h3>
              </motion.div>
            </div>

            {/* White curve mask to overlap the left side slightly on desktop */}
            <div className="hidden lg:block absolute top-0 right-0 h-[120%] w-[200px] bg-white rounded-l-full transform translate-x-1/2 -translate-y-[10%]"></div>
          </div>

          {/* White Right Side */}
          <div className="lg:w-1/3 bg-white py-16 px-6 lg:px-20 flex items-center relative z-10">
            <div className="flex items-center gap-8">
              <h2 className="text-[#179b9b] font-bold text-2xl tracking-widest" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                PHASE
              </h2>
              <ul className="space-y-4 text-[#3f3b68] text-xl font-medium list-disc pl-4 marker:text-[#3f3b68]">
                <li>DESIGN</li>
                <li>DEVELOPMENT</li>
                <li>MARKETING</li>
              </ul>
            </div>
            {/* Animated Decorative dot with Tick */}
            <motion.div 
              animate={{ y: ["-50%", "calc(-50% - 15px)", "-50%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-10 top-1/2 w-12 h-12 bg-[#1a4a5b] rounded-full hidden lg:flex items-center justify-center shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
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
            {/* Shadow Box */}
            <div className="absolute top-6 left-6 w-full h-full bg-[#222222] z-0"></div>
            <img
              src={DigitalAgency1}
              alt="Digital Agency Team"
              className="relative z-10 w-full h-[400px] lg:h-[450px] object-cover border-4 border-white shadow-xl"
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
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#0a1e27] leading-tight mb-4">
              Best Digital Agency with Certified Digital Marketers in UAE and INDIA
            </h2>
            <h3 className="text-[#179b9b] text-xl font-medium mb-6">
              Our clients always overwhelm us saying these kind of words, we strive hard to keep up the good work.
            </h3>
            <p className="text-[#646e85] text-[15px] leading-relaxed mb-8">
              We are a bunch of creative nerds specializing in digital marketing and web development. We help you build a creative website that brings you better traffic. We ensure top-notch services to our clients with a hardworking team of professionals certified from Google AdWords and Analytics. We bring you the right knowledge and make sure that our services bring you continuous profit.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={() => navigate('/about')}
                className="px-8 py-3 bg-gradient-to-r from-[#179b9b] to-[#8dc63f] text-white font-bold rounded-md hover:opacity-90 transition-opacity shadow-md"
              >
                Learn More
              </button>
              <button className="flex items-center gap-3 text-[#0a1e27] font-bold text-sm uppercase hover:text-[#179b9b] transition-colors group">
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
      <section className="py-20 px-4 md:px-8 lg:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto relative">

          <div className="grid lg:grid-cols-12 gap-10 items-center">

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
              <div className="inline-block px-6 py-2 bg-[#0a1e27] text-white text-sm font-bold uppercase tracking-wider rounded-full mb-6">
                WHY CHOOSE US
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a1e27] leading-tight mb-10">
                Sky Rocket Your Business<br />With Suggestinfo
              </h2>

              <div className="space-y-8 mb-10">
                <div className="flex gap-4 items-start">
                  <img src={RocketLaunchIcon} alt="Rocket" className="w-6 h-6 object-contain mt-1 shrink-0" />
                  <p className="text-[#0a1e27] text-[15px] font-medium leading-relaxed">
                    Our team is expert in the field, and we have the skills and experience to provide you with the best services in the industry.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <img src={RocketLaunchIcon} alt="Rocket" className="w-6 h-6 object-contain mt-1 shrink-0" />
                  <p className="text-[#0a1e27] text-[15px] font-medium leading-relaxed">
                    We believe in generating the maximum profit for our users. For us, the growth of our clients is the priority because when they grow, we also grow.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <img src={RocketLaunchIcon} alt="Rocket" className="w-6 h-6 object-contain mt-1 shrink-0" />
                  <p className="text-[#0a1e27] text-[15px] font-medium leading-relaxed">
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
                  className="relative group rounded-[30px] overflow-hidden drop-shadow-xl cursor-pointer"
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
                  className="relative group rounded-[30px] overflow-hidden drop-shadow-xl cursor-pointer"
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
                  className="relative group rounded-[30px] overflow-hidden drop-shadow-xl cursor-pointer"
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
                  className="relative group rounded-[30px] overflow-hidden drop-shadow-xl cursor-pointer"
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
          <p className="text-[#8dc63f] font-medium mb-2">Case Studies</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1e27] mb-12">Our Recent Projects</h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Project 1: NAFFCO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="w-full h-[180px] bg-white rounded-2xl border-2 border-gray-200 shadow-sm flex items-center justify-center mb-6 overflow-hidden relative transition-shadow hover:shadow-md p-6">
                <img src={NaffcoLogo} alt="NAFFCO FZCO Logo" className="max-w-[200px] max-h-[120px] object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-[#179b9b] mb-4">NAFFCO FZCO</h3>
              <p className="text-[#646e85] text-[15px] leading-relaxed mb-4">
                We are currently working on the Multilingual SEO project of NAFFCO website. We have successfully launched their new revamped corporate website with Zero SEO ranking drop.
              </p>
              <p className="text-[#0a1e27] text-[15px] font-medium">Location: UAE</p>
            </motion.div>

            {/* Project 2: Pharmacy Council */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="w-full h-[180px] bg-white rounded-2xl border-2 border-gray-200 shadow-sm flex items-center justify-center mb-6 overflow-hidden transition-shadow hover:shadow-md p-6">
                <img src={PharmacyLogo} alt="Maharashtra State Pharmacy Council Logo" className="max-w-[200px] max-h-[120px] object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-[#179b9b] mb-4">Maharastra State Pharmacy Council</h3>
              <p className="text-[#646e85] text-[15px] leading-relaxed mb-4">
                We recently developed a Learning Management System (LMS) for the Maharashtra State Pharmacy Council to streamline continuing education for pharmacists. The user-friendly platform includes course management, online assessments, and certification tracking, enhancing professional development efficiency and accessibility.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default HomePage;

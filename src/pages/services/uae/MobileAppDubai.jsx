import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, TrendingUp, Target, Database, Star } from 'lucide-react';
import { ContactButton } from '../../../components/ContactButton';
import { ContactSection } from '../../../components/ContactSection';

import heroBg from '../../../assets/service/UAE/mobile app development/Section (4).png';
import androidImg from '../../../assets/service/UAE/mobile app development/Android-Application.png';
import flutterImg from '../../../assets/service/UAE/mobile app development/Flutter-App-Dev.png';
import pwaImg from '../../../assets/service/UAE/mobile app development/Progressive-Web-App-Development.png';
import reactNativeImg from '../../../assets/service/UAE/mobile app development/React-Native-Application.png';
import webAppImg from '../../../assets/service/UAE/mobile app development/Web-App-Dev.png';
import iosImg from '../../../assets/service/UAE/mobile app development/iOS-App-Dev.png';

export function MobileAppDubai() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative w-full h-[160px] md:h-[200px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('${heroBg}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay to ensure text remains readable against the background */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4 w-full">
          <h1 className="text-white text-[32px] md:text-[50px] lg:text-[56px] font-extrabold uppercase tracking-wide drop-shadow-lg m-0">
            MOBILE APP DEVELOPMENT IN DUBAI
          </h1>
        </div>
      </section>

      {/* 2nd Section: Guaranteed Services */}
      <section className="py-20 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left Column: Heading and Text */}
          <div className="lg:w-5/12 flex flex-col gap-6">
            <h2 className="text-3xl md:text-[40px] font-extrabold text-[#111827] leading-[1.2] uppercase tracking-tight">
              Get <span className="bg-gradient-to-r from-[#3cc994] to-[#28a77b] bg-clip-text text-transparent">100% Guaranteed</span> Mobile App Development Services at Suggestinfo
            </h2>
            <p className="text-gray-600 text-[16px] leading-relaxed">
              A Well-Known Mobile App Development Company In Dubai Is Called Suggestinfo. We Make Excellent Solutions Using The Most Recent Technology, Offering Our Clients Access To Ten Times More Customers. To Create Aesthetically Pleasing App Designs That Draw Clients, Our Suggestinfo Designers Apply Their Creative Faculties. Our Developers Begin Working On The Development As Soon As The Methods Are Accepted. We Establish Deadlines At The Start Of A Project And Work Assiduously To Stick To Those Deadlines And Deliver The Software To The Client.
            </p>
            <div className="mt-4">
              <ContactButton />
            </div>
          </div>

          {/* Right Column: Features/Results Cards */}
          <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <Smartphone className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Suggetinfo Use Cutting-Edge Technology To Help Businesses Become More Productive.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <TrendingUp className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                Our Mobile App Development Services Aid In Boosting Businesses' Growth And Sales.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <Target className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                Our Services Provide Companies With Adaptable Ways To Understand Their Clients Better.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <Database className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We As Suggetinfo Can Gather Information Regarding Customer Usage And Behavior.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <Star className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                Our Services Contribute To Customer's Businesses Having More Incredible Value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3rd Section: Our Services */}
      <section className="py-20 bg-[#eef8ff]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[40px] font-extrabold text-[#111827] uppercase tracking-wide">
              OUR MOBILE APP DEVELOPMENT SERVICES
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-all duration-300 group"
            >
              <div className="h-40 overflow-hidden relative rounded-b-[24px]">
                <img src={androidImg} alt="Android Application Development" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3 leading-snug">Android Application<br />Development</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  According To Numerous Reports, Google Play Store Is The Largest App Store In The World, Making It The Top Platform For Developing Native Apps. We Suggestinfo Are A Top-Tier Bespoke Solution Provider For Smartphones, Tablets, Android Wear, And Android TV In Dubai.
                </p>
              </div>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-all duration-300 group"
            >
              <div className="h-40 overflow-hidden relative rounded-b-[24px]">
                <img src={reactNativeImg} alt="React Native Application Development" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3 leading-snug">React Native Application<br />Development</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Our React Native App Development Service Specialists Create React Native Apps From Scratch Or Incorporate The Framework Into Your Current Application To Hasten The App Delivery Process. Our Experts Will Sit Down With You To Discuss Your Product Vision And Determine How To Connect The App With Your Business Goals Best.
                </p>
              </div>
            </motion.div>

            {/* Service Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-all duration-300 group"
            >
              <div className="h-40 overflow-hidden relative rounded-b-[24px]">
                <img src={webAppImg} alt="Web App Development" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">Web App Development</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  We Suggestinfo Provide Web App Development Services That Are Reliable And Scalable. Our Specifically Designed To Address Your Company's Needs. We Build Web Portals With The Best Performance, Cost-Efficiency, And Expansion Potential By Utilizing The Newest Web Technologies And Adhering To The Agile Methodology
                </p>
              </div>
            </motion.div>

            {/* Service Card 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-all duration-300 group"
            >
              <div className="h-40 overflow-hidden relative rounded-b-[24px]">
                <img src={flutterImg} alt="Flutter App Development" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">Flutter App Development</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Our Flutter App Development Services Are The Best Option If Your Business Needs A Cross-Platform Presence. To Design, Create, Test, And Deploy Complete Flutter Applications, Work With Our Highly Qualified Team Of App Developers In Dubai To Identify The Optimal Product-Market Fit.
                </p>
              </div>
            </motion.div>

            {/* Service Card 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-all duration-300 group"
            >
              <div className="h-40 overflow-hidden relative rounded-b-[24px]">
                <img src={iosImg} alt="iOS App Development" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">iOS App Development</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Our Team Of Mobile App Developers Creates Flawless, Next-Generation IOS Apps. We Suggestinfo Are A Full-Stack IOS App Development Company In Dubai. We Have Released Hundreds Of Native IOS Applications That Have Not Only Seen Exponential Growth In The Success Rates Of Our Client's Businesses.
                </p>
              </div>
            </motion.div>

            {/* Service Card 6 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-all duration-300 group"
            >
              <div className="h-40 overflow-hidden relative rounded-b-[24px]">
                <img src={pwaImg} alt="Progressive Web App Development" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3 leading-snug">Progressive Web App<br />Development</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  We Provide Top-Notch Progressive Web App Development Services With The Appearance And Feel Of A Mobile Application, And Suggestinfo Is A Leading Mobile App Development In Dubai. Our Advanced Web Applications Guarantee A Fluid Performance And Maximum User Engagement For Your Company.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4th Section: Why Choose Us */}
      <section className="py-20 relative overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[40px] font-extrabold text-[#000000] uppercase tracking-wide leading-tight">
              WHY CHOOSE OUR SUGGESTINFO?
            </h2>
          </div>

          <div className="relative">
            {/* Massive soft shadow behind the entire grid */}
            <div className="absolute -inset-10 bg-black/10 blur-[100px] rounded-[60px] z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 relative z-10">
              {/* Card 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                className="bg-gradient-to-br from-[#f8faff] to-[#e2ecfa] p-6 md:p-8 rounded-[28px] shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-shadow duration-300"
              >
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Award-Winning Solutions</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  We are a seasoned and competent group of technologists driven by our unrelenting quest to create cutting-edge mobile application development solutions. Our history of awards and recognitions is evidence of our dedication to and diligence in our work.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
                className="bg-gradient-to-br from-[#fff6f0] to-[#fdeae1] p-6 md:p-8 rounded-[28px] shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-shadow duration-300"
              >
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Flexible Engagement</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  For our client's precise needs, we provide a variety of interaction methods. We can accommodate your needs, whether for a fixed budget model, a time and material model, or a fully committed development staff.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="bg-gradient-to-br from-[#f0fffa] to-[#d6f7eb] p-6 md:p-8 rounded-[28px] shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-shadow duration-300"
              >
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Identify The Ideal Blend</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  We guarantee that we will use our knowledge and experience to improve your web presence in the crowded mobile app sector through a skillful fusion of design, development, and marketing. By locating attractive iOS, Android, and cross-platform mobile apps suited to business needs, we transmit flexibility to your company.
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div 
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
                className="bg-gradient-to-br from-[#f9f7fc] to-[#efe9f8] p-6 md:p-8 rounded-[28px] shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-shadow duration-300"
              >
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Identification Of Business Objectives</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  At Suggestinfo, we collaborate closely with our clients to define their business goals and create mobile applications that improve people's lives. We investigate the best mobile app options and tell us your business objectives, and we will work with you to create the mobile applications of your dreams.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactSection 
        title={<>Get Quote For Mobile App<br />Development</>}
      />
    </div>
  );
}

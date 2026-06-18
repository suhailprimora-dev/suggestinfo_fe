import React from 'react';
import { motion } from 'framer-motion';
import { ContactSection } from '../../../../components/ContactSection';
import { ContactButton } from '../../../../components/ContactButton';
import { Star, Smartphone, Zap, TrendingUp, CheckCircle } from 'lucide-react';

import heroBg from '../../../../assets/service/UAE/mobile app development/Section (4).png';
import img1 from '../../../../assets/service/INDIA/MOBILE APP DEVELOPMENT/iOS-App-Dev.png';
import img2 from '../../../../assets/service/INDIA/MOBILE APP DEVELOPMENT/Mobile-Application-Design.png';
import img3 from '../../../../assets/service/INDIA/MOBILE APP DEVELOPMENT/Flutter-App-Dev.png';
import img4 from '../../../../assets/service/INDIA/MOBILE APP DEVELOPMENT/Developing-Progressive-Web.png';
import img5 from '../../../../assets/service/INDIA/MOBILE APP DEVELOPMENT/Web-App-Dev.png';
import img6 from '../../../../assets/service/INDIA/MOBILE APP DEVELOPMENT/React-Native-Application.png';

export function IosAppDevelopmentIndia() {
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
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4 w-full">
          <div className="text-white text-sm font-semibold tracking-widest mb-2 uppercase">• SERVICES</div>
          <h1 className="text-white text-[32px] md:text-[50px] lg:text-[56px] font-extrabold uppercase tracking-wide drop-shadow-lg m-0">
            IOS APP DEVELOPMENT
          </h1>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Column */}
          <div className="lg:w-5/12 flex flex-col gap-6">
            <div>
              <div className="inline-block px-6 py-4 bg-[#0a2e2c] text-white font-medium rounded-full text-[18px] mb-4 tracking-wide w-max">
                why choose
              </div>
              <h2 className="text-3xl md:text-[40px] font-extrabold text-[#111827] leading-[1.2] uppercase tracking-tight">
                EXPLORE THE FANTASTIC <span className="bg-gradient-to-r from-[#3cc994] to-[#28a77b] bg-clip-text text-transparent">IOS APP DEVELOPMENT SERVICES</span> FROM SUGGESTINFO IN CHENNAI INDIA:
              </h2>
            </div>
            
            <p className="text-gray-600 text-[16px] leading-relaxed font-medium">
              Our Leading IOS Application Development Business Uses Cutting-Edge Technologies To Produce Useful And Intuitive IOS Apps That Support Digital Transformation. Suggestinfo In Chennai, India Has A Plethora Of Experience Providing Specialized IOS App Development Services That Boost User Engagement, Brand Perception, And Income. Our IOS App Development Company Has Trained Developers Who Utilize Cutting-Edge Techniques And Are Knowledgeable About Every Apple Device.
            </p>

            <div className="mt-4">
              <ContactButton />
            </div>
          </div>

          {/* Right Column (Outlined Boxes) */}
          <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <Star className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Have Conquered The Art Of Making Outstanding IOS Applications.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <Smartphone className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                Instead Of Just Including Features, We Develop Apps That Offer Wonderful User Experiences.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <Zap className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Are Familiar With Both Established And Developing Technology, As Well As Application Cases.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <TrendingUp className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Know How To Make Sure That Digital Assets Work Well And Can Scale.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden md:col-span-2">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <CheckCircle className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Help Businesses Fulfil The Shifting Evident And Latent Wants Of Their Clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-[#eef8ff]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[40px] font-extrabold text-[#111827] uppercase tracking-wide">
              OUR IOS APP DEVELOPMENT SERVICES OFFER
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-all duration-300 group flex flex-col"
            >
              <div className="h-40 overflow-hidden relative rounded-b-[24px]">
                <img src={img1} alt="Maintenance and Support for iOS Apps" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5 flex-1 flex flex-col">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3 leading-snug">Maintenance and Support for iOS Apps</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  To Ensure The Efficient Operation Of Your IOS App, In Addition To Our IOS Development Services From We Also Provide QA Testing And Bug Fixing, Ongoing Monitoring Of The App Performance, And App Store Support.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-all duration-300 group flex flex-col"
            >
              <div className="h-40 overflow-hidden relative rounded-b-[24px]">
                <img src={img2} alt="iPhone App Development Advice" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5 flex-1 flex flex-col">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3 leading-snug">iPhone App Development Advice</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  As An IOS Mobile App Development Business, We Concentrate On Particular Qualities And Specifications Your IOS Application Should Have. After Evaluating The Requirements, We Offer Insightful Input Supported By Statistics And Facts That Assist You In Creating A Comprehensive IOS Solution For Your Company.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-all duration-300 group flex flex-col"
            >
              <div className="h-40 overflow-hidden relative rounded-b-[24px]">
                <img src={img3} alt="IOS App UI/UX Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5 flex-1 flex flex-col">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3 leading-snug">IOS App UI/UX Design</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  The Whole Point Of IPhone Applications Is To Give Users A Cutting-Edge, Seamless Experience. To Create A Creative And Motivating IOS App Design That Connects Your Company With What IOS Customers Anticipate From Apple's Ecosystem, Our IPhone App Developers Unleash Their Creativity.
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-all duration-300 group flex flex-col"
            >
              <div className="h-40 overflow-hidden relative rounded-b-[24px]">
                <img src={img4} alt="Software Testing For iOS" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5 flex-1 flex flex-col">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3 leading-snug">Software Testing For iOS</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  In Order To Ensure That Your IOS Projects Are Created To Be Extremely Useful, Safe, Functional, And Tailored To Suit Your Organization's Specific Objectives In Every Manner, We Thoroughly Test, Validate, And Waterproof Business-Critical IOS App Software.
                </p>
              </div>
            </motion.div>

            {/* Card 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-all duration-300 group flex flex-col"
            >
              <div className="h-40 overflow-hidden relative rounded-b-[24px]">
                <img src={img5} alt="App Migration For iOS" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5 flex-1 flex flex-col">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3 leading-snug">App Migration For iOS</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Move Your Ideal Legacy App To IOS To Take Advantage Of This Operating System's Close-Knit Community And Grow Your Company. Our IOS App Development Firm Guarantees A Quick, Secure Conversion Without Data Loss Or Downtime.
                </p>
              </div>
            </motion.div>

            {/* Card 6 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-all duration-300 group flex flex-col"
            >
              <div className="h-40 overflow-hidden relative rounded-b-[24px]">
                <img src={img6} alt="Customized iOS App Development" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5 flex-1 flex flex-col">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3 leading-snug">Customized iOS App Development</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  We Provide Personalized IOS Application Development Services That Effectively Respond To Your Unique Business Requirements. Whether You Are A Newer Or A Skilled Entrepreneur, We Specialize In Building IOS Apps That Are Extremely Useful And Future-Proof.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[40px] font-extrabold text-[#000000] uppercase tracking-wide leading-tight">
              WHY USE OUR SERVICES FOR IOS<br />DEVELOPMENT?
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Agile Strategy</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  We create the ideal team for you. Whether you go lean, add a dedicated specialist, or hire a whole team, we will back you in every choice.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
                className="bg-gradient-to-br from-[#fff2ef] to-[#fce4de] p-6 md:p-8 rounded-[28px] shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-shadow duration-300"
              >
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Knowledgeable Developers</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  The workforce at our Suggestinfo is renowned for using cutting-edge technologies to create iOS apps. Our experts have years of expertise creating solutions for various purposes and are skilled in the most recent programming languages.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="bg-gradient-to-br from-[#f1fcfb] to-[#e2f5f1] p-6 md:p-8 rounded-[28px] shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-shadow duration-300"
              >
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Dedicated To Quality</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  With an iOS app that is made to succeed, live to revolutionize your company digitally. Work with our team while having access to cutting-edge tools that speed up and increase the productivity of development.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Committed Group</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Access a committed team of UI/UX designers, business analysts, software testers, coders, project managers, and iOS app developers with expertise in various industry specialities.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Contact Form */}
      <ContactSection 
        title={<>Get Quote For Your<br />iOS App</>}
        subtitle="Call us for fast support to this number."
      />
    </div>
  );
}

export default IosAppDevelopmentIndia;

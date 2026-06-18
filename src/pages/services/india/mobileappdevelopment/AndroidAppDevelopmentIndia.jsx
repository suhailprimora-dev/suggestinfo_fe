import React from 'react';
import { motion } from 'framer-motion';
import { ContactSection } from '../../../../components/ContactSection';
import { ContactButton } from '../../../../components/ContactButton';
import { Smartphone, CheckCircle, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

import heroBg from '../../../../assets/service/UAE/mobile app development/Section (4).png';
import img1 from '../../../../assets/service/INDIA/MOBILE APP DEVELOPMENT/Mobile-Application-Design.png';
import img2 from '../../../../assets/service/INDIA/MOBILE APP DEVELOPMENT/Flutter-App-Dev.png';
import img3 from '../../../../assets/service/INDIA/MOBILE APP DEVELOPMENT/Developing-Progressive-Web.png';
import img4 from '../../../../assets/service/INDIA/MOBILE APP DEVELOPMENT/Web-App-Dev.png';
import img5 from '../../../../assets/service/INDIA/MOBILE APP DEVELOPMENT/Progressive-Web-App-Development.png';
import img6 from '../../../../assets/service/INDIA/MOBILE APP DEVELOPMENT/React-Native-Application.png';

export function AndroidAppDevelopmentIndia() {
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
            ANDROID APP DEVELOPMENT IN INDIA
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
                ACQUIRE <span className="bg-gradient-to-r from-[#3cc994] to-[#28a77b] bg-clip-text text-transparent">100% ASSURED ANDROID DEVELOPMENT SERVICES</span> FROM SUGGESTINFO IN CHENNAI, INDIA:
              </h2>
            </div>
            
            <p className="text-gray-600 text-[16px] leading-relaxed font-medium">
              Your Hunt For The Top Android App Development Company Has Ended Thanks To Suggestinfo, In Chennai, India Which Has A Team Of Knowledgeable Android App Developers And Business Experts Eager To Assist You With Your App Idea. Over The Years, We Have Created Several Unique Android Apps And Assisted Clients Worldwide By Realising Their Android App Ideas.
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
                <TrendingUp className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                For Startups And Fledgling Businesses, Our Android Is Frequently Recommended.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <CheckCircle className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                Our Android Development Services Are More Than Capable Of Assisting Reputable Firms.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <Zap className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                Our Company, Which Specialises In Android Development, Promises Scalability.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <Smartphone className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                To Create User-Friendly, Intuitive Apps, We Employ Tried-And-True Tools For Developing Android Applications.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden md:col-span-2">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <ShieldCheck className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Make And Create Unique Android Apps As A Reputable Android Application Development Firm.
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
              OUR SERVICES
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
                <img src={img1} alt="Android App Development consultation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5 flex-1 flex flex-col">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3 leading-snug">Android App Development consultation</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Android Apps Have Their User Base And Set Of Client Requirements. We Assist Companies In Integrating Their Concepts With These Standards And An Android-Specific Customer Base. Our Specialists Assist You In Determining The Ideal Android Platform And Methods For Dominating The Market.
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
                <img src={img2} alt="UI/UX for Android" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5 flex-1 flex flex-col">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3 leading-snug">UI/UX for Android</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  One Of The Most Expensive Ecosystems Is Android. It Has A Variety Of Equipment That Works In It. Across All Android Devices And Versions, Our Team Of Android App Designers Is Skilled At Producing Engaging Experiences.
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
                <img src={img3} alt="Android Software Testing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5 flex-1 flex flex-col">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3 leading-snug">Android Software Testing</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Security And Performance Come First In Our Android Mobile Development Approach. We Make Sure That The Creation Of Your Android Mobile Application Is Flawless And Lag-Free. We Combine Manual And Automated Testing Procedures For Future-Proof Android Software Development.
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
                <img src={img4} alt="Development of Unique Android Applications" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5 flex-1 flex flex-col">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3 leading-snug">Development of Unique Android Applications</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Our Android App Developers Are Skilled In Creating Dependable, Scalable Android Solutions. We Develop Unique Android Apps For A Variety Of Global Companies. We Make Effort With You To Form A Product That Exhibits Your Authentic Voice In A Store With Millions Of Apps.
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
                <img src={img5} alt="Development On Many Platforms" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5 flex-1 flex flex-col">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3 leading-snug">Development On Many Platforms</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  We Are A Business That Specialises In The Deployment And Integration Of Seamless Android Apps. No Matter What Platform You Ultimately Want To Be On, Our Skilled Android Development Services Can Assist You In Getting There.
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
                <img src={img6} alt="Planning and Ideation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5 flex-1 flex flex-col">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3 leading-snug">Planning and Ideation</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Our Mobile App Development Team Will First Become Acquainted With Your Project Idea And Its Goals. We Will Design Each Page With A Seamless Flow After Honing The Strategy And A Thorough Understanding.
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
              BENEFITS OF CHOOSING OUR SUGGESTINFO<br />IN CHENNAI, INDIA:
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Trustworthy And Expert Android Developers</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  We provide the best and most skilled team of developers to all of our customers as a top Android app development business. Our skill sets row up with the necessities of your project.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Models For Flexible Hiring</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  We create it easy for you to hire our qualified Android app developers at a fixed price and on an hourly basis using specialised hiring models. This allows you to select the model that best fits your project's budget.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Strong Architecture</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  The security flaws in the Android platform are taught to our developers. To tackle this, they use advanced security protocols that completely enclose the app's architecture with strong security barriers.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Full Disclosure</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  We provide transparency throughout the entire Android app development process. To remind them of the project's progress and provide advice where appropriate, we report to our customers frequently and weekly.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Contact Form */}
      <ContactSection 
        title={<>Get Quote For Your<br />Android App</>}
        subtitle="Call us for fast support to this number."
      />
    </div>
  );
}

export default AndroidAppDevelopmentIndia;

import React from 'react';
import { PhoneCall, Monitor, ShieldCheck, Users, Layers, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '../../../assets/service/UAE/WEB DEVELOPMENT/Section (1).png';
import img1 from '../../../assets/service/UAE/WEB DEVELOPMENT/Developing-Progressive-Web.png';
import img2 from '../../../assets/service/UAE/WEB DEVELOPMENT/Development-Of-Dynamic-web.png';
import img3 from '../../../assets/service/UAE/WEB DEVELOPMENT/Integration-of-CRM.png';
import img4 from '../../../assets/service/UAE/WEB DEVELOPMENT/Website-Maintenance.png';
import img5 from '../../../assets/service/UAE/WEB DEVELOPMENT/Website-QA-Checks.png';
import img6 from '../../../assets/service/UAE/WEB DEVELOPMENT/WordPress-Growth.png';
import { ContactSection } from '../../../components/ContactSection';

export function WebDevelopmentDubai() {
  return (
    <div className="w-full bg-white">
      {/* 1st Section: Hero Banner */}
      <section
        className="relative w-full h-[120px] md:h-[200px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url("${heroBg}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4 w-full">
          <h1 className="text-white text-[28px] md:text-[50px] lg:text-[56px] font-extrabold uppercase tracking-wide drop-shadow-lg m-0">
            WEBSITE DEVELOPMENT IN DUBAI
          </h1>
        </div>
      </section>

      {/* 2nd Section: Text and Bullet Cards */}
      <section className="py-20 md:py-28 relative bg-[#fafbfc] overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[#3cc994]/5 to-transparent blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-[#3cc994]/5 to-transparent blur-3xl"></div>
        </div>

        <div className="max-w-[1250px] mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
          
          {/* Left Column: Text Content */}
          <div className="lg:w-5/12 flex flex-col gap-6">
            <h2 className="text-[26px] md:text-[30px] lg:text-[32px] font-bold leading-[1.3] text-[#111827] uppercase tracking-tight">
              OBTAIN CUTTING-EDGE<br />
              TECHNOLOGY WITH EXCELLENT<br />
              WEBSITE DEVELOPMENT FROM<br />
              SUGGESTINFO
            </h2>
            
            <p className="text-[#4b5563] text-[15px] leading-[1.8] font-medium">
              The Initial Step In Creating An Online Persona Is To Have A Totally Functional Website That Is Up To Date With Best IT Trends. A Combination Of Creativity, Expertise, And Imagination Is Needed To Build A Powerful Online Presence. We Suggestinfo, A Renowned Leader In Website Development In Dubai, Has Combined Creativity And Experience With Offering Highly Dynamic Web Solutions For A Diverse Clientele. Our Expert Development Group Has Continuously Provided A Full Choice Of Programming And Development Solutions That Are Particularly Designed For Various Requirements.
            </p>

            <div className="mt-4">
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3cc994] to-[#28a77b] text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-[#3cc994]/30 hover:shadow-[#3cc994]/50 hover:-translate-y-1 transition-all duration-300"
              >
                <PhoneCall size={18} className="fill-current" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Feature Cards */}
          <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8 lg:mt-0">
            {[
              { text: "Our Web Designers Will Assist Your Company In Creating A Strong Online Presence.", icon: Monitor },
              { text: "We Provide Exemplary, High-Performance, And Secure Online Apps.", icon: ShieldCheck },
              { text: "Our Programmers Promise Businesses An Unrivaled User-Friendly Experience.", icon: Users },
              { text: "We Support The Idea Of Creating All-Encompassing Platforms.", icon: Layers },
              { text: "Our Designers And Developers Use The Most Recent Technologies For Creating Websites.", icon: Code }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
                className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
                <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                  <item.icon className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3rd Section: Our Services */}
      <section className="py-20 bg-[#eef8ff]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[40px] font-extrabold text-[#111827] uppercase tracking-wide">
              OUR BEST WEBSITE DEVELOPMENT SERVICES
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
              <div className="h-48 overflow-hidden relative rounded-b-[24px]">
                <img src={img2} alt="Development Of Dynamic Websites" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[22px] font-bold text-[#111827] mb-3 leading-tight">Development Of Dynamic<br/>Websites</h3>
                <p className="text-gray-600 text-[13px] leading-[1.8] font-medium">
                  Dynamic Websites Is The Most Appropriate Choice For Any Expanding Firm Since They Are Expansive And Evolving Digital Places That Permit Ongoing Transformation, Simple Updates, And Easy Maintenance. We Can Provide You With Specialized, Robust, Responsive, And User-Friendly Dynamic Digital Properties.
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
              <div className="h-48 overflow-hidden relative rounded-b-[24px]">
                <img src={img6} alt="WordPress Growth" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[22px] font-bold text-[#111827] mb-3 leading-tight">WordPress Growth</h3>
                <p className="text-gray-600 text-[13px] leading-[1.8] font-medium">
                  Business Owners May Manage Stunning Feature-Rich Websites Using WordPress’s Highly Powerful And User-Friendly Content Management System Without The Need For Ongoing Development Help. We Can Help You In Using The Platform’s Amazing Features To Create A Unique And Effective Online Presence For Your Company.
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
              <div className="h-48 overflow-hidden relative rounded-b-[24px]">
                <img src={img1} alt="Developing Progressive Web Apps" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[22px] font-bold text-[#111827] mb-3 leading-tight">Developing Progressive<br/>Web Apps</h3>
                <p className="text-gray-600 text-[13px] leading-[1.8] font-medium">
                  With The Subsequent Development In Mobile Technology, An Entity That Combines The Characteristics, Functions, And Advantages Of Mobile And App Technology Enjoys The Added Benefits Of Cross-Device And Multi-Browser Reach.
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
              <div className="h-48 overflow-hidden relative rounded-b-[24px]">
                <img src={img5} alt="Website QA Checks And Testing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[22px] font-bold text-[#111827] mb-3 leading-tight">Website QA Checks And<br/>Testing</h3>
                <p className="text-gray-600 text-[13px] leading-[1.8] font-medium">
                  Regardless Of Its Size, Platform, Or Industry, It Is Ever Launched Without First Passing A Series Of Methodical, Exacting, And Demanding QA Inspections To Guarantee That It Is Free Of Any Defects Or Problems That Might Impair Customer Engagement Or Brand Value.
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
              <div className="h-48 overflow-hidden relative rounded-b-[24px]">
                <img src={img4} alt="Website Maintenance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[22px] font-bold text-[#111827] mb-3 leading-tight">Website Maintenance</h3>
                <p className="text-gray-600 text-[13px] leading-[1.8] font-medium">
                  Your Website Has To Be Updated, Resecured, And Maintained On A Regular Basis, Just Like Any Other Tool You Could Use In Your Organization. We Can Provide You With A Range Of Specialized Website Maintenance Services.
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
              <div className="h-48 overflow-hidden relative rounded-b-[24px]">
                <img src={img3} alt="Integration of CRM With Website" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[22px] font-bold text-[#111827] mb-3 leading-tight">Integration of CRM With<br/>Website</h3>
                <p className="text-gray-600 text-[13px] leading-[1.8] font-medium">
                  The Ideal CRM Solution May Revolutionize Any Company By Serving As A Single Control Point For All Of The Most Essential Business Operations. Suggestinfo Can Assist You In Selecting The Ideal CRM Solution For Your Particular Business Needs And Integrating It Successfully And Stably Into Your Infrastructure.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4th Section: Reasons to Choose Us */}
      <section className="py-20 relative overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[40px] font-extrabold text-[#000000] uppercase tracking-wide leading-tight">
              REASONS TO CHOOSE US
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
                className="bg-gradient-to-br from-[#f8faff] to-[#e2ecfa] p-6 md:p-8 rounded-[28px]"
              >
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Increased Customer Satisfaction</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Make the most of your dealings with customers. We will provide a well-organized, user-friendly website that exactly matches your customer's journey, captures the essence of your organization, and enhances the user experience.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
                className="bg-gradient-to-br from-[#fff2ef] to-[#fce4de] p-6 md:p-8 rounded-[28px]"
              >
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Obtain Beneficial Consumer Insights</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  With our website development services, your company not only establishes a strong online presence but also gains access to a wide range of customer-centric data and analytics, enabling you to understand better and address the wants of the target listeners.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="bg-gradient-to-br from-[#effcf7] to-[#d6f8eb] p-6 md:p-8 rounded-[28px]"
              >
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Develop Your Commercial Credibility</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  As a result, a credible company usually expects to have a good website where potential clients can obtain all the details about it. A solid first impression may be made, and clients can feel confident by visiting a well-branded website, which gives your target audience a reliable point of reference.
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div 
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.55, ease: "easeOut" }}
                className="bg-gradient-to-br from-[#f8f0fc] to-[#fae2fb] p-6 md:p-8 rounded-[28px]"
              >
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Expand The Size Of Your Market</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Being more visible online allows you to reach a wider audience because it eliminates geographic restrictions and is available round-the-clock. Our Website development combined with effective SEO tactics gives you a fully functional website that draws worthwhile traffic and qualified leads.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5th Section: Contact Form */}
      <ContactSection 
        title={<>Get Quote For Web<br />Development Services</>}
      />

    </div>
  );
}

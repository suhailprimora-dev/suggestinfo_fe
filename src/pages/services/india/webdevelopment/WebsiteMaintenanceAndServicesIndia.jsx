import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, FileMinus, Settings, Database, Link2 } from 'lucide-react';
import { ContactButton } from '../../../../components/ContactButton';
import { ContactSection } from '../../../../components/ContactSection';

import heroBg from '../../../../assets/service/UAE/digital marketing/seo service in dubai.png';
import img1 from '../../../../assets/service/India/WEB DEVELOPMENT/Website Maintenance and Services/Development-Of-Dynamic-web.png';
import img2 from '../../../../assets/service/India/WEB DEVELOPMENT/Website Maintenance and Services/User-Action.png';
import img3 from '../../../../assets/service/India/WEB DEVELOPMENT/Website Maintenance and Services/Engagement-Monster.png';
import img4 from '../../../../assets/service/India/WEB DEVELOPMENT/Website Maintenance and Services/Shaping-Site.png';
import img5 from '../../../../assets/service/India/WEB DEVELOPMENT/Website Maintenance and Services/Overall-Site.png';
import img6 from '../../../../assets/service/India/WEB DEVELOPMENT/Website Maintenance and Services/Rectangle-7 (1).png';

export function WebsiteMaintenanceAndServicesIndia() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative w-full h-[160px] md:h-[200px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4 w-full">
          <div className="text-white text-sm font-semibold tracking-widest mb-2 uppercase">• SERVICES</div>
          <h1 className="text-white text-[32px] md:text-[50px] lg:text-[56px] font-bold uppercase tracking-wide drop-shadow-lg m-0">
            Website Maintenance and Services
          </h1>
        </div>
      </section>

      {/* 2nd Section: Why Choose */}
      <section className="py-20 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left Column: Heading and Text */}
          <div className="lg:w-5/12 flex flex-col gap-6">
            <div>
              <div className="inline-block px-6 py-4 bg-[#0a2e2c] text-white text-medium rounded-full text-[18px] mb-4 tracking-wide w-max">
                why choose
              </div>
              <h2 className="text-3xl md:text-[40px] font-extrabold text-[#111827] leading-[1.2] uppercase tracking-tight">
                LET US HOLD YOUR WEBSITE SO YOU HAVE MORE TIME TO MANAGE YOUR BUSINESS:
              </h2>
            </div>
            <p className="text-gray-600 text-[15px] leading-relaxed font-medium">
              The Operation Of A Website Is A Dynamic, Active Process. Nothing Is Static In The Digital Environment And Everything Is In Motion And Evolving Quickly. Maintenance Of The Website Is Essential For Optimum Operation. Upgrades To The Site's Products, Regular Revisions Based On An Analysis Of Site Visitor Behaviour, And Updates To The Content Will Keep It Active And Ready For Business. At SuggestInfo, In Chennai, India We Reject The Idea Of Being Generic. Our Website Maintenance Services Are Tailored To Your Company's Particular Requirements. Our Staff Collaborates Closely With Each Customer To Develop A Cost-Efficient, All-Encompassing Website Maintenance Package.
            </p>
            <div className="mt-4">
              <ContactButton />
            </div>
          </div>

          {/* Right Column: Features List */}
          <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full pt-8 lg:pt-0">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <RefreshCw className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                Updating Existing Content And Deleting Outdated Content
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <FileMinus className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                Making Changes To, Or Removing, Content On Your Website
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <Settings className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Provide Site Upkeep For WordPress Websites.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <Database className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                Updating And Maintaining The Current Database, Plugins, And Themes
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <Link2 className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                Resolving Additional Website Difficulties And Fixing Broken Or Misdirected Links.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3rd Section: Services Grid */}
      <section className="py-20 bg-[#f4f7fc]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-[36px] font-extrabold text-[#111827] uppercase tracking-wide">
              OUR EXCELLENT WEBSITE MAINTENANCE AND SERVICES:
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden relative rounded-b-[24px]">
                <img src={img1} alt="Work It Out" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[22px] font-bold text-[#111827] mb-3">Work It Out</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  The Amount Of Traffic That Gets On Your Site And Converts Directly Depends On How Frequently You Update And Maintain Its Freshness And Relevance. Maintaining Proper Site Performance Requires A Properly Planned Approach For Ongoing Upgrades.
                </p>
              </div>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden relative rounded-b-[24px]">
                <img src={img2} alt="Monitor User Actions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[22px] font-bold text-[#111827] mb-3 leading-snug">Monitor User Actions</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Our Skilled Staff At Our SuggestInfo In Chennai, India Can Make Adjustments To Increase The Rate Of Site Conversions Thanks To A Thorough Analysis Of User Behaviour. We Don't Just Wait For Something To Happen Instead, We Analyse User Interactions On The Site To Make The Necessary Improvements.
                </p>
              </div>
            </motion.div>

            {/* Service Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden relative rounded-b-[24px]">
                <img src={img3} alt="Be An Engagement Monster" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[22px] font-bold text-[#111827] mb-3">Be An Engagement Monster</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Offer Something Fresh Each Time They Land To Entice Them Back Repeatedly. Our Website Maintenance Services Concentrate On Engagement, Which Is What Matters.
                </p>
              </div>
            </motion.div>

            {/* Service Card 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden relative rounded-b-[24px]">
                <img src={img4} alt="Control And Shaping Site Performance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[22px] font-bold text-[#111827] mb-3">Control And Shaping Site Performance</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Our Continuing Site Maintenance Service Is Designed To Improve Your Online Visibility And Revenue. In Order To Find The Crucial Information Concerning The Functionality Of Your Site, Our Website Maintenance Staff Will Dig Deep. We Examine User Interaction And Take The Necessary Steps To Change It.
                </p>
              </div>
            </motion.div>

            {/* Service Card 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden relative rounded-b-[24px]">
                <img src={img5} alt="Overall Site Improvements" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[22px] font-bold text-[#111827] mb-3 leading-snug">Overall Site Improvements</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Customers, Employees, And Leads Viewing Your Website Are The Best Judges Of How Well It Is Performing. You Can Utilise Our Tips To Improve Your Site And Its Online Performance With Our Regular Website Maintenance.
                </p>
              </div>
            </motion.div>

            {/* Service Card 6 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden relative rounded-b-[24px]">
                <img src={img6} alt="Interactivity Maintenance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[22px] font-bold text-[#111827] mb-3 leading-snug">Interactivity Maintenance</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  With Constantly Changing Technology, A Website Looks Dated If The Interactive Features Are Disregarded. You May Lose Existing And Potential Customers If Your Site's Development Components Do Not Function Properly Across All Browsers And Platforms.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4th Section: Benefits of Choosing Us */}
      <section className="py-20 relative overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[40px] font-extrabold text-[#000000] uppercase tracking-wide leading-tight">
              WHY CHOOSE US:
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
                className="bg-gradient-to-br from-[#f8faff] to-[#e2ecfa] p-8 md:p-10 rounded-[28px]"
              >
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Boost Security</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Suggestinfo's in expertise in website security is unique in our business thanks to its concentration on eCommerce. Suggestinfo Chennai, India is knowledgeable about site security, from elementary HTTPS protocol updates through PCI compliance and other regulatory compliance.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
                className="bg-gradient-to-br from-[#fff2ef] to-[#fce4de] p-8 md:p-10 rounded-[28px]"
              >
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Cut Down On Downtime</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  With Suggestinfo's website maintenance services, you may prevent expensive website downtime and maintain continuous website operation. Count on Suggestinfo to keep your website operational when every second counts.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="bg-gradient-to-br from-[#f1fcfb] to-[#e2f5f1] p-8 md:p-10 rounded-[28px]"
              >
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Improved Site Speed</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Searching for a website auditing firm that can provide you with useful recommendations for enhancing user experience and site speed? Suggestinfo is the only place to look. We will ensure your website passes the most recent site-speed testing conducted by Google.
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div 
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
                className="bg-gradient-to-br from-[#f9f7fc] to-[#efe9f8] p-8 md:p-10 rounded-[28px]"
              >
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Best Monthly Website Support</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Once a project is started, a solid relationship does not have to end. No matter what your site or app needs, a maintenance agreement from Suggestinfo in Chennai, India ensures that our team will respond promptly.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5th Section: Contact Form */}
      <ContactSection 
        title={<>Get Quote For Website<br />Maintenance And Services</>}
        subtitle="Call us for fast support to this number."
      />
    </div>
  );
}

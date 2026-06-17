import React from 'react';
import { motion } from 'framer-motion';
import { Code, ShieldCheck, ThumbsUp, Zap, Globe } from 'lucide-react';
import { ContactButton } from '../../../../components/ContactButton';
import { ContactSection } from '../../../../components/ContactSection';

import heroImg from '../../../../assets/service/India/WEB DEVELOPMENT/Custom Website Development/services-main-Wp (1).png';
import img1 from '../../../../assets/service/India/WEB DEVELOPMENT/Custom Website Development/Responsive-WP-Theme (1).png';
import img2 from '../../../../assets/service/India/WEB DEVELOPMENT/Custom Website Development/Developing-Progressive-Web.png';
import img3 from '../../../../assets/service/India/WEB DEVELOPMENT/Custom Website Development/Application-developments.png';
import img4 from '../../../../assets/service/India/WEB DEVELOPMENT/Custom Website Development/Overall-Site (1).png';
import img5 from '../../../../assets/service/India/WEB DEVELOPMENT/Custom Website Development/SMS-for-Healthcare.png';
import img6 from '../../../../assets/service/India/WEB DEVELOPMENT/Custom Website Development/Theme-Customization-for-WP.png';

export function CustomWebsiteDevelopmentIndia() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Hero Section */}
      <section
        className="relative w-full h-[160px] md:h-[200px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay to ensure text remains readable against the background */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4 w-full">
          <h1 className="text-white text-[32px] md:text-[50px] lg:text-[56px] font-extrabold uppercase tracking-wide drop-shadow-lg m-0">
            CUSTOM WEBSITE DEVELOPMENT
          </h1>
        </div>
      </section>

      {/* 2nd Section: Approach (Why Choose) */}
      <section className="py-20 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Column: Heading and Text */}
          <div className="lg:w-5/12 flex flex-col gap-6">
            <div>
              <div className="inline-block px-6 py-4 bg-[#0a2e2c] text-white text-medium rounded-full text-[18px] mb-4 tracking-wide w-max">
                why choose
              </div>
              <h2 className="text-3xl md:text-[40px] font-extrabold text-[#111827] leading-[1.2] uppercase tracking-tight">
                GET 100% UNIQUE WEBSITE DEVELOPMENT SERVICES WITH SUGGESTINFO CHENNAI, INDIA:
              </h2>
            </div>
            <p className="text-gray-600 text-[16px] leading-relaxed font-medium">
              If You Are Looking To Partner With A Long-Term, Dependable Web Development Firm Or To Create New Original Ideas That Will Provide Your Clients With Additional Value And Differentiate Your Business In A Harsh Competitive Climate? Yes, Our SuggestInfo In Chennai, India Will Do The Job. We Specialize In Building Custom Online Solutions That Are Interactive, Scalable, Brand-Focused, And Enterprise-Ready. Our Goal Is To Create Successful Digital Products Designed To Foster Innovation And Increase ROI.
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
                <Code className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                Our Primary Goal Is To Create Intricate Custom Web Apps.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <ShieldCheck className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Provide Robust Web Apps.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <ThumbsUp className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Make Goods That Will Satisfy Your Needs.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <Zap className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Perform Well In Surroundings That Are Dynamic And Fast-Paced.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <Globe className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                Our Knowledge Spans A Broad Range Of Sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3rd Section: Services Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto bg-white rounded-[40px] my-10 shadow-[0_0_40px_rgba(0,0,0,0.02)]">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-[40px] font-extrabold text-[#111827] leading-[1.2] uppercase tracking-tight">
            OUR BEST CUSTOM WEBSITE DEVELOPMENT SERVICES:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="group rounded-3xl bg-white border border-gray-100 overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300"
          >
            <div className="h-[210px] overflow-hidden relative">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              <img 
                src={img1} 
                alt="Responsive Design" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <h3 className="text-[22px] font-bold text-[#111827] mb-4 group-hover:text-[#3cc994] transition-colors">Responsive Design</h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                We Ensure That Every Gadget Is Compatible With Our Client's Website, Ensuring That No Single Buyer Is Turned Away. Our Responsive Website Adapts To The User's Actions And Surroundings, Dependent On The Platform, Screen Size, And Orientation.
              </p>
            </div>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="group rounded-3xl bg-white border border-gray-100 overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300"
          >
            <div className="h-[210px] overflow-hidden relative">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              <img 
                src={img2} 
                alt="Progressive Web Apps" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <h3 className="text-[22px] font-bold text-[#111827] mb-4 group-hover:text-[#3cc994] transition-colors">Progressive Web Apps</h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                The Next Best Thing About The App Experience We Create Is A Progressive Web App. It Reacts Faster Than A Native App. Customers Can Access Cached App Content From Your Company When There Is Low Internet Connectivity.
              </p>
            </div>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="group rounded-3xl bg-white border border-gray-100 overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300"
          >
            <div className="h-[210px] overflow-hidden relative">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              <img 
                src={img3} 
                alt="Software Development" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <h3 className="text-[22px] font-bold text-[#111827] mb-4 group-hover:text-[#3cc994] transition-colors">Software Development</h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                With The Help Of Our Custom Software Development Solutions, Time-Consuming Operations Can Be Automated. We Not Only Boost Your System's Productivity But Also Assist In Generating Speedy Cash Returns.
              </p>
            </div>
          </motion.div>

          {/* Service Card 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="group rounded-3xl bg-white border border-gray-100 overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300"
          >
            <div className="h-[210px] overflow-hidden relative">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              <img 
                src={img4} 
                alt="Third-Party Integration" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <h3 className="text-[22px] font-bold text-[#111827] mb-4 group-hover:text-[#3cc994] transition-colors">Third-Party Integration</h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                With Our Integration Services, You May Gain Real-Time Access To External Systems To Ensure That Your Website Runs Without A Hitch. Examining The Most Popular Area Of Your Website Can Assist You In Monitoring The Success Of Your Website.
              </p>
            </div>
          </motion.div>

          {/* Service Card 5 */}
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="group rounded-3xl bg-white border border-gray-100 overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300"
          >
            <div className="h-[210px] overflow-hidden relative">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              <img 
                src={img5} 
                alt="Support & Maintenance" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <h3 className="text-[22px] font-bold text-[#111827] mb-4 group-hover:text-[#3cc994] transition-colors">Support & Maintenance</h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                Continuing Prop Up And Maintenance Are Built-In In Our Custom Wesite Development Services. We May Analyze All Of Your Web Pages, Perform Health Checks, And Even Optimize Them As Part Of Our Process To Give You The Best Chance To Get More Incremental Visitors.
              </p>
            </div>
          </motion.div>

          {/* Service Card 6 */}
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="group rounded-3xl bg-white border border-gray-100 overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300"
          >
            <div className="h-[210px] overflow-hidden relative">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              <img 
                src={img6} 
                alt="Advisory Services & Business Analysis" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <h3 className="text-[22px] font-bold text-[#111827] mb-4 group-hover:text-[#3cc994] transition-colors">Advisory Services & Business Analysis</h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                Our Thorough Business Analysis Aids In Monitoring An Organization's Expansion. We Examine The Difficulties You Are Now Facing In Business, As Well As The Possibilities And Numerous Benefits That Could Support Your Overall Growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4th Section: Why Choose Us (Gradient Cards matching exact Dubai SEO design) */}
      <section className="py-20 relative overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[40px] font-extrabold text-[#000000] uppercase tracking-wide leading-tight">
              WHY DO YOU NEED TO CHOOSE<br />OUR SERVICES?
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Durability</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  You can choose the technology on which you want your website to be built with customized website development. Later on, this can assist you in growing your company and updating your website to accommodate future business requirements.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Cybersecurity</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Our web developers build extremely safe websites. Customers are at ease knowing that the website is reliable and their information is secure. Customers' security is at stake on unsecured websites since malware can be distributed there.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="bg-gradient-to-br from-[#f1fcfb] to-[#e2f5f1] p-6 md:p-8 rounded-[28px]"
              >
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Superior Performance</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  An essential element of a website's overall performance is how quickly pages load. We minimize HTTP requests, minify, use cookie-free domains, and employ SSD hosting to maintain speed.
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div 
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
                className="bg-gradient-to-br from-[#f9f7fc] to-[#efe9f8] p-6 md:p-8 rounded-[28px]"
              >
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Agile Methodology</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Our projects are created using an agile methodology, which eliminates time-wasting activities and ensures that you are not wasting too much time on tasks that don't contribute to the project's success.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5th Section: Contact Form */}
      <ContactSection 
        title={<>Get Quote For Custom Web<br />Development</>}
        subtitle="Call us for fast support to this number."
      />
    </div>
  );
}

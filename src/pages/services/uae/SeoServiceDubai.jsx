import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Smartphone, FileText, TrendingUp, Target, MessageSquare } from 'lucide-react';
import { ContactSection } from '../../../components/ContactSection';
import heroBg from '../../../assets/service/UAE/digital marketing/seo service in dubai.png';
import linkBuildingImg from '../../../assets/service/UAE/digital marketing/Link-Building.png';
import contentMarketingImg from '../../../assets/service/UAE/digital marketing/Content-Marketing.png';
import seoImg from '../../../assets/service/UAE/digital marketing/SEO.png';
import localSeoImg from '../../../assets/service/UAE/digital marketing/Local-SEO.png';
import arabicSeoImg from '../../../assets/service/UAE/digital marketing/Arabic-SEO.png';
import seoAuditImg from '../../../assets/service/UAE/digital marketing/SEO-Audit-Analysis.png';

export function SeoServiceDubai() {
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
        {/* Dark overlay to ensure text remains readable against the background */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4 w-full">
          <h1 className="text-white text-[32px] md:text-[50px] lg:text-[56px] font-extrabold uppercase tracking-wide drop-shadow-lg m-0">
            SEO SERVICE IN DUBAI
          </h1>
        </div>
      </section>

      {/* 2nd Section: Guaranteed SEO Services */}
      <section className="py-20 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left Column: Heading and Text */}
          <div className="lg:w-5/12 flex flex-col gap-6">
            <h2 className="text-3xl md:text-[40px] font-extrabold text-[#111827] leading-[1.2] uppercase tracking-tight">
              Get <span className="bg-gradient-to-r from-[#3cc994] to-[#28a77b] bg-clip-text text-transparent">100% Guaranteed</span> SEO Services from Suggestinfo
            </h2>
            <p className="text-gray-600 text-[16px] leading-relaxed">
              Our SEO Service Stack is what you require if you want qualified assistance with search engine optimization to raise your website's search exposure, traffic, and sales. No matter what industry you are in or where you are located, if you have a website, we can make it visible in online searches for your target market. We provide conversion rate optimization and services to boost engagement and lowering bounce rates in addition to the analytics team.
            </p>
            <div>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3cc994] to-[#28a77b] text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-[#3cc994]/30 hover:shadow-[#3cc994]/50 hover:-translate-y-1 transition-all duration-300 mt-2"
              >
                <PhoneCall size={18} />
                <span>Contact Us</span>
              </a>
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
                Our Mobile-Responsive Website Was Advised Because Mobile Devices Were The Primary Traffic Source.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <FileText className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                Multiple Content Gaps Were Found, And These Holes Were Filled By Producing New Content, Including Copy And Photos.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <TrendingUp className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Received A High Position For Non-Branded Terms Thanks To The SEO Involvement.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <Target className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                High-Converting Keywords Were Subsequently Targeted At The Optimized Site To Enhance Bookings.
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
              OUR SERVICES
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
                <img src={linkBuildingImg} alt="Link Building" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">Link Building</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  The Next Stage Is To Create High-Quality Backlinks To Your Website, Which Will Assist In Authenticating Your Keywords. Suggestinfo SEO Has A Dedicated Team Focused On Creating High-Quality, Authoritative Backlinks As Part Of Its Link-Building Efforts.
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
                <img src={contentMarketingImg} alt="Content Marketing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">Content Marketing</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  You Need Specific High-Quality Content To Support Your Assets When You Have A Particular Product Or Service. Google Has Mandated That Users Only Choose Data With Rich Information In Light Of The Current Craze. Being The SEO Dubai Agency, We Open The Door For SEO Content Marketing With Our Team Of Talented Content Writers.
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
                <img src={seoImg} alt="Search Engine Optimization" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3 leading-snug">Search Engine<br />Optimization</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  We Include Both On-Page And Off-Page Tasks. The Earlier Effort Assists In Changing Your Website To Have The Products You Want To Target For The Search Engines. The Off-Page Duties Assist In Acquiring High-Quality Backlinks That Give The Search Engines A Way To Determine Your Credibility As A Source And Help You Rank Well.
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
                <img src={arabicSeoImg} alt="Arabic SEO" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">Arabic SEO</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  It Has Become Vital To Meet The Needs Of The Local Consumer, And It Given That Arabic Is The Native Tongue Of The Dubai. Our Skilled Arabic SEO Specialists Can Target Keywords And Content In The Regional Language
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
                <img src={localSeoImg} alt="Local SEO" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">Local SEO</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Local SEO Is One Of The Many Branches That SEO Has Developed In Your Business. You Can Establish A Local Internet Presence In The Market You Want To Serve. With SEO, You May Target And Meet The Demands Of Visitors To A Specific Location. This Kind Of SEO Can Increase Foot Traffic And Attract Buyers From The Nearby Market.
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
                <img src={seoAuditImg} alt="SEO Audit & Analysis" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">SEO Audit & Analysis</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  We Want Our Clients To Journey With Us Through The SEO Process. We Create A Thorough Site Analysis And Assist You In Understanding The Traffic And Rankings You Have Obtained As A Result Of Working With Us. We Offer A Comprehensive Monthly Report On All The Duties And Operations We Handle As The Finest SEO Company In Dubai.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4th Section: Why Choose Our SEO Services */}
      <section className="py-20 relative overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[40px] font-extrabold text-[#000000] uppercase tracking-wide leading-tight">
              WHY CHOOSE OUR SEO<br />SERVICES?
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Experience And Professionalism</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  The level of expertise of the service provider does significantly when it comes to success in the digital sphere. As one of the top SEO companies in Dubai, we have a staff of qualified SEO specialists with experience in various industries.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Regular And Planned Communication</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Regular and Planned Communication We value openness and provide planned and routine communication to assist our clients in succeeding. We want to maintain long-term relationships with our clients, and we keep them regularly informed about the status of our online marketing efforts
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Regular And Planned Communication</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Regular and Planned Communication We value openness and provide planned and routine communication to assist our clients in succeeding. We want to maintain long-term relationships with our clients, and we keep them regularly informed about the status of our online marketing efforts
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Realistic And Honest Commitment</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Our Dubai SEO professionals are fully aware of how difficult it is to rank a website on the first page of a search engine, but we never overpromise or seem to care about our clients.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 5th Section: Contact Form */}
      <ContactSection 
        title={<>Get Quote For Search<br />Engine Optimization</>}
        subtitle="Call us for fast support to this number."
      />
    </div>
  );
}

export default SeoServiceDubai;

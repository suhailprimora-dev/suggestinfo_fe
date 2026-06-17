import React from 'react';
import { motion } from 'framer-motion';
import { Target, UserCheck, Shield, Lightbulb, Clock } from 'lucide-react';
import { ContactButton } from '../../../../components/ContactButton';
import { ContactSection } from '../../../../components/ContactSection';
import linkedinImg from '../../../../assets/service/India/DIGITAL MARKETING/Lead-Generation-Services.png';
import emailImg from '../../../../assets/service/India/DIGITAL MARKETING/Marketing-and-Advertising.png';
import smsImg from '../../../../assets/service/India/DIGITAL MARKETING/SMS-For-Services.png';
import otherSocialImg from '../../../../assets/service/India/DIGITAL MARKETING/Social-media.png';
import ownPlatformsImg from '../../../../assets/service/India/DIGITAL MARKETING/User-Action.png';

export function LeadGenerationIndia() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full py-14 md:py-18 flex items-center justify-center bg-gradient-to-r from-[#e0fff4] to-[#ccffea]">
        <div className="relative z-10 text-center px-4 w-full">
          <div className="text-gray-600 text-sm font-semibold tracking-widest mb-2 uppercase">• SERVICES</div>
          <h1 className="text-[#111827] text-[32px] md:text-[45px] lg:text-[50px] font-extrabold uppercase tracking-wide m-0">
            LEAD GENERATION (PAY PER LEAD SERVICES)
          </h1>
        </div>
      </section>

      {/* 2nd Section: Approach Lead Generation */}
      <section className="py-20 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Column: Heading and Text */}
          <div className="lg:w-5/12 flex flex-col gap-6">
            <div>
              <div className="inline-block px-8 py-3 bg-[#0a2e2c] text-white text-medium rounded-[12px] text-[18px] mb-4 tracking-wide w-max">
                why choose
              </div>
              <h2 className="text-3xl md:text-[40px] font-extrabold text-[#111827] leading-[1.2] uppercase tracking-tight">
                APPROACH LEAD GENERATION SERVICES
              </h2>
            </div>
            <p className="text-gray-600 text-[15px] leading-relaxed font-medium">
              Suggestinfo In Chennai, India Produce Leads For Businesses Of All Kinds And Sorts As Long As You Have Something To Sell, Whether It Is A Good Or Valuable Service. We Provide You With Leads Of The Finest Calibre At A Lead Cost That Is Often Low. Our Lead-Generating Strategies Are Highly Customized To The Business, Which Consists Mostly Of A Combination Of Digital Marketing Tactics. In Order To Create A Personalized Plan With Different Campaigns To Accommodate Lead Generation, Lead Promotion, Computerized Follow-Ups, Communication Advertising, And Public Media Campaigns, Our Lead Creation Experts Will First Do In-Depth Research Into Your Business.
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
                <Target className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Use Targeted Lead Generation Campaigns To Find Potential Target Clients.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <UserCheck className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Produce High-Quality Validated Leads That Have The Potential To Convert More Effectively.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <Shield className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                Our Tactics Will Attract New Clients With A Connection Of Trust With Your Current Clientele.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <Lightbulb className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                Our Lead Generation Strategies Have A Basic Grasp Of Your Lead Creation Requirements.
              </p>
            </div>

            {/* Card 5 - Spans full width on mobile, 1 column on desktop (or we could make it span 2 on md) */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <Clock className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Produce The Most Business Possibilities Within The Allotted Time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3rd Section: How Lead Generation Will Help */}
      <section className="py-20 bg-[#eef8ff]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[40px] font-extrabold text-[#111827] uppercase tracking-wide">
              HOW OUR LEAD GENERATION WILL HELP YOU?
            </h2>
          </div>

          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-all duration-300 group"
            >
              <div className="h-[210px] overflow-hidden relative">
                <img src={linkedinImg} alt="Linkedin Marketing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">
                  Linkedin Marketing
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  We Support Outstanding Businesses Using LinkedIn To Reach Out To Better Their Ideal Clients. Our Suggestinfo Lead Generation Solution Has Been Thoughtfully Created To Help You Establish An Online Presence, Appropriately Represent Your Business, And Establish Yourself As A Thought Leader In Your Sector.
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
              <div className="h-[210px] overflow-hidden relative">
                <img src={emailImg} alt="Email Marketing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">
                  Email Marketing
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  The Third Most Important Information Source Is Email Marketing. On Average, A Person Checks Their Email At Least 20 Times Daily. Increase Your Company's Revenue Through Email Marketing That The New Digi Hub Successfully Executes.
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
              <div className="h-[210px] overflow-hidden relative">
                <img src={smsImg} alt="SMS Marketing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">
                  SMS Marketing
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Our Suggestinfo In Chennai, India Aims To Consistently Provide Leads For Our Clients From Various Backgrounds While Offering The Best SMS Services. To Get The Best Results, We Put Together Several Marketing Methods.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: 2 Cards (Centered) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-2/3 mx-auto mt-8">
            {/* Service Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-all duration-300 group"
            >
              <div className="h-[210px] overflow-hidden relative">
                <img src={otherSocialImg} alt="Other Social Media Channels" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">
                  Other Social Media Channels
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  We Have Been Assisting Our Customers In Regularly Achieving Their Brand Goals And Business Objectives Of Revenue Growth By Leveraging Various Social Media, Channels Like Facebook, Twitter Etc. And Producing Measurable Outcomes, As A Digital Marketing Agency With Proven Expertise In Social Media Administration And Marketing.
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
              <div className="h-[210px] overflow-hidden relative">
                <img src={ownPlatformsImg} alt="Through Our Own Platforms" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">
                  Through Our Own Platforms
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  We Are Having Three Different Platforms Like Coursesuggest.Com Which Lists The Educational Institutes And Other Course Offering Institutes. Through This We Can Generate Leads For Educational Institutes And Our Platform Wesuggest Offers General Lists And Through This We Can Generate Leads For Various Other Businesses. For Healthcare Clients We Can Able Generate Leads Through Our Listmyclinic Platform.
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
              WHY CHOOSE US?
            </h2>
          </div>

          <div className="relative">
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Experience</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  We have created countless websites and programmes for different business sectors. Even the most difficult technical problems can be solved with our assistance.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Service</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  We have created hundreds of sites in every size and every type of setting. The trickiest technological issues can be aided and resolved by us.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Savings</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Our client's and partners' businesses immediately improve, which results in a substantial rise in revenue.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Turn-Key Services</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Our professional team offers comprehensive solutions for all of your web development and digital marketing requirements.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5th Section: Contact Form */}
      <ContactSection
        title={<>Get Quote For Lead<br />Generation</>}
        subtitle="Call us for fast support to this number."
      />
    </div>
  );
}

export default LeadGenerationIndia;

import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, MapPin, ShieldCheck, Smartphone } from 'lucide-react';
import { ContactButton } from '../../../../components/ContactButton';
import { ContactSection } from '../../../../components/ContactSection';
import finImg from '../../../../assets/service/UAE/digital marketing/Marketing-and-Advertising.png';
import salesImg from '../../../../assets/service/UAE/digital marketing/Lead-Generation-Services.png';
import retailImg from '../../../../assets/service/UAE/digital marketing/Web-Design-and-Development.png';
import healthImg from '../../../../assets/service/UAE/digital marketing/Mobile-Application-Design.png';
import travelImg from '../../../../assets/service/UAE/digital marketing/Content-Marketing.png';
import adImg from '../../../../assets/service/UAE/digital marketing/Branding.png';

export function SmsMarketingIndia() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full py-14 md:py-18 flex items-center justify-center bg-gradient-to-r from-[#e0fff4] to-[#ccffea]">
        <div className="relative z-10 text-center px-4 w-full">
          <div className="text-gray-600 text-sm font-semibold tracking-widest mb-2 uppercase">• SERVICES</div>
          <h1 className="text-[#111827] text-[32px] md:text-[45px] lg:text-[50px] font-extrabold uppercase tracking-wide m-0">
            SMS MARKETING & DATABASE SERVICES
          </h1>
        </div>
      </section>

      {/* 2nd Section: Enhance SMS */}
      <section className="py-20 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Column: Heading and Text */}
          <div className="lg:w-5/12 flex flex-col gap-6">
            <div>
              <div className="inline-block px-6 py-4 bg-[#0a2e2c] text-white text-medium rounded-full text-[18px] mb-4 tracking-wide w-max">
                why choose
              </div>
              <h2 className="text-3xl md:text-[40px] font-extrabold text-[#111827] leading-[1.2] uppercase tracking-tight">
                ENHANCE SMS MARKETING AND DATABASE SERVICES
              </h2>
            </div>
            <p className="text-gray-600 text-[16px] leading-relaxed font-medium">
              We Suggestinfo In Chennai, India Provides New Technologies That Have Made 24/7 Customer Relationships Possible In Today's Digital World. Our Consumers Are Increasingly Seeking Out Real Brand Encounters Driven By Humans Rather Than Algorithms As Technology Develops. With The Help Of Immediate, Tailored Contact, Our Text Message Marketing Is A Practical Marketing Strategy That Lets You Interact With Current Clients And Attract New Ones. Using Our Promotional SMS Marketing Campaigns Without This Explicit Consent Is Illegal And Constitutes A Privacy Violation.
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
                <Users className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                Each Of Us Contributes To Developing A Rapport And Trust With Clients.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <TrendingUp className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Suggestinfo In Chennai, India Are In Charge Of Several Specialist Databases.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <MapPin className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Know How To Get The Most Out Of Your Budget And Produce A Profitable Return On Investment.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <ShieldCheck className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                Our Polished, Professional SMS Message Effectively Advertises Your Company On A Platform.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden md:col-span-2">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <Smartphone className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Have New Opportunities And Obstacles To Reach Our Target Market Using Various Innovative Marketing Techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3rd Section: SMS For Financial Services */}
      <section className="py-20 bg-[#eef8ff]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[40px] font-extrabold text-[#111827] uppercase tracking-wide">
              SMS FOR FINANCIAL SERVICES
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
              <div className="h-[210px] overflow-hidden relative">
                <img src={finImg} alt="SMS For Financial Services" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">
                  SMS For Financial Services
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  By Safely Texting From Their Current Business Lines, Our Clients Can Hasten Lending Processes, Shorten Sales Cycles, Lower Charge-Offs, And Increase Customer Satisfaction.
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
                <img src={salesImg} alt="SMS For Sales" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">
                  SMS For Sales
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Sending Mobile Coupons And Promotional Offers To Existing And New Clients Via SMS Can Boost Sales Success.
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
                <img src={retailImg} alt="SMS Marketing For Retail and E-commerce" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">
                  SMS Marketing For Retail and E-commerce
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  In Order To Increase Sales With Time-Sensitive Information, Our Text Communications Can Drive More Physical And Digital Traffic. We Facilitate Loyalty Programs And Customer Service Difficulties And Even Solicit Direct Input From Customers.
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
              <div className="h-[210px] overflow-hidden relative">
                <img src={healthImg} alt="Secure SMS For Healthcare" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">
                  Secure SMS For Healthcare
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Improve Patient Communication And Experience Using Our SMS Marketing In The Healthcare Sector. Our SMS Is Ideal For Appointment Reminders, Billing Administration, Patient Or Provider Alerts, And More Convenience.
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
                <img src={travelImg} alt="SMS For Travel Agencies" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">
                  SMS For Travel Agencies
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Send Traveling Consumers Reminders And Insightful Advice. With The Help Of Our Text Message Marketing Services, You May Advertise Popular Locations And Deals.
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
              <div className="h-[210px] overflow-hidden relative">
                <img src={adImg} alt="SMS For Ad Agencies" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">
                  SMS For Ad Agencies
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Please Use The New Marketing Channel We Have That Few Other Companies Are Currently Employing. With Our Drip Marketing, Promos, And Reminders, Let Us Help You Assist Your Customers And Eventually Increase Sales.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Fast Delivery</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Our text marketing services may instantly distribute your message to your target demographic. We enable you to broadcast time-sensitive messages at scales, such as event-related promotions and flash specials.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Higher Open Rates</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  We have a 98% text rate opened. Our SMS campaign can greatly influence your brand awareness and financial results with the correct text message marketing service.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Direct Customer Communication</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  We provide 70% of respondents think that SMS is a fantastic technique to catch up with the current busy digital age. We Suggestinfo in Chennai, India reached in the shortest amount of time through SMS advertising.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Wide Audience Reach</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Our SMS marketing and Database service campaigns can successfully reach the majority of your target market. Our text marketing services can help you achieve a variety of target audiences.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5th Section: Contact Form */}
      <ContactSection
        title={<>Get Quote For SMS<br />Marketing</>}
        subtitle="Call us for fast support to this number."
      />
    </div>
  );
}

export default SmsMarketingIndia;

import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, MapPin, ShieldCheck, Smartphone } from 'lucide-react';
import { ContactButton } from '../../../../components/ContactButton';
import { ContactSection } from '../../../../components/ContactSection';
import heroBg from '../../../../assets/service/UAE/digital marketing/seo service in dubai.png';
import seoAuditImg from '../../../../assets/service/UAE/digital marketing/SEO-Audit-Analysis.png';
import seoImg from '../../../../assets/service/UAE/digital marketing/SEO.png';
import contentMarketingImg from '../../../../assets/service/UAE/digital marketing/Content-Marketing.png';
import marketingImg from '../../../../assets/service/UAE/digital marketing/Marketing-and-Advertising.png';
import brandingImg from '../../../../assets/service/UAE/digital marketing/Branding.png';
import searchEngineOptimizationImg from '../../../../assets/service/UAE/digital marketing/Search-Engine-Optimization.png';

export function SeoServiceIndia() {
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
          <h1 className="text-white text-[32px] md:text-[50px] lg:text-[56px] font-extrabold uppercase tracking-wide drop-shadow-lg m-0">
            SEO SERVICES IN INDIA
          </h1>
        </div>
      </section>

      {/* 2nd Section: Guaranteed SEO Services */}
      <section className="py-20 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left Column: Heading and Text */}
          <div className="lg:w-5/12 flex flex-col gap-6">
            <div>
              <div className="inline-block px-6 py-4 bg-[#0a2e2c] text-white text-medium rounded-full text-[18px] mb-4 tracking-wide w-max">
                why choose
              </div>
              <h2 className="text-3xl md:text-[40px] font-extrabold text-[#111827] leading-[1.2] uppercase tracking-tight">
                DEDICATED SEO SERVICES IN CHENNAI, INDIA
              </h2>
            </div>
            <p className="text-gray-600 text-[16px] leading-relaxed font-medium">
              We Create A Way To Succeed For Your Brand To Pass Through The High Competition And Achieve The Top Place In The Digital Medium. The Dedicated Team Of Professional Who Can Are Experts With The Ins And Outs Of The Branding And Marketing Techniques Can Assure You To Track The Record Of The Amazing Work In The First Step To Have The Best Brand Value.
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
                We Work To Generate More Traffic.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <TrendingUp className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Assist In Accelerating The Conversion Rate.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <MapPin className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                Our Services Encourage The Local Users To Visit The Physical Store
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <ShieldCheck className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Built The Brand Credibility
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden md:col-span-2">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <Smartphone className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Ensure Mobile-Friendliness Of The Website
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3rd Section: How Our SEO Services Will Help You */}
      <section className="py-20 bg-[#eef8ff]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[40px] font-extrabold text-[#111827] uppercase tracking-wide">
              HOW OUR SEO SERVICES WILL HELP YOU?
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
                <img src={seoAuditImg} alt="SEO Audit" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">
                  SEO Audit
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  From SEO Audit To On-Page SEO To Link Building, We Offer The Best SEO Services In Chennai, India To Move To The Top Google Results.
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
                <img src={seoImg} alt="Keyword Research" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">
                  Keyword Research
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  If Your Website Wants To Rank At The Top Pages, The Role Of Keywords Is Crucial. We Work On The Parameters And Bring The Website To The Top Position.
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
                <img src={contentMarketingImg} alt="Content Strategy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">
                  Content Strategy
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  We Follow The Best Content Marketing Services To Help Your Brand Establish Trust, Thought And Authority Leadership When Engaging With The Targeted Audience
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
                <img src={marketingImg} alt="Social Media Integration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">
                  Social Media Integration
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Having An Online Presence In Social Is More Important When It Comes To Business In The Internet Dominated World. Our Team In Chennai, India Takes Care Of The Social Media Presence And Growth.
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
                <img src={brandingImg} alt="Online Reputation Management" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3 leading-snug">
                  Online Reputation Management
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Your Reputation Builds Your Brand. So, We Have The Experts Who Are The Best In Monitoring, Protecting And Building The Online Reputation In Chennai, India.
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
                <img src={searchEngineOptimizationImg} alt="Real Time Data" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">
                  Real Time Data
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  SEO Are Not The Factor To Achieve Overnight. We Will Be More Cautious With The Real-Time Data To Make It More Helpful For Making The Website At The Top Position Constantly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4th Section: Why Choose Us? */}
      <section className="py-20 relative overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[40px] font-extrabold text-[#000000] uppercase tracking-wide leading-tight">
              WHY CHOOSE US?
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Delivering Business Growth</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  We consistently deliver transformational growth to all our clients through our excellent SEO practice. We also promise to deliver good traffic with intense techniques.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Expertise In Each Vertical</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  We have a dedicated team who can work for the SEO in all the categories like expertise SEO, eCommerce SEO, etc. So, we serve as the one-stop destination for SEO needs.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Transparent And Measurable</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  We periodically publish the report card on the marketing experience and analyze the grow the technique. We also implement the necessary strategies periodically for better results.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Service Based On The Latest Technology</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  We are always updated with the technology, and we manage all the campaigns with our own proprietary tools and ensure the best service.
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

export default SeoServiceIndia;

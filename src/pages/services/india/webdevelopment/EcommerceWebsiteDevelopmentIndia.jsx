import React from 'react';
import { motion } from 'framer-motion';
import { Award, Package, Truck, PieChart, Lightbulb } from 'lucide-react';
import { ContactButton } from '../../../../components/ContactButton';
import { ContactSection } from '../../../../components/ContactSection';

import heroBg from '../../../../assets/service/UAE/digital marketing/seo service in dubai.png';
import img1 from '../../../../assets/service/India/WEB DEVELOPMENT/E-commerce Website Development in India/Shaping-Site (1).png';
import img2 from '../../../../assets/service/India/WEB DEVELOPMENT/E-commerce Website Development in India/SMS-E-commerce.png';
import img3 from '../../../../assets/service/India/WEB DEVELOPMENT/E-commerce Website Development in India/Rectangle-7.png';
import img4 from '../../../../assets/service/India/WEB DEVELOPMENT/E-commerce Website Development in India/Website-development-for-E-Commerce.png';
import img5 from '../../../../assets/service/India/WEB DEVELOPMENT/E-commerce Website Development in India/Integration-of-CRM.png';
import img6 from '../../../../assets/service/India/WEB DEVELOPMENT/E-commerce Website Development in India/Web-Design-and-Development.png';

export function EcommerceWebsiteDevelopmentIndia() {
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
            E-COMMERCE WEBSITE DEVELOPMENT IN INDIA
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
                SIGN UP WITH TOP<br />
                SUGGESTINFO IN CHENNAI,<br />
                INDIA TO GET TOP-NOTCH<br />
                <span className="text-[#3cc994]">ECOMMERCE DEVELOPMENT</span><br />
                SERVICES:
              </h2>
            </div>
            <p className="text-gray-600 text-[16px] leading-relaxed font-medium">
              With The Incredible Array Of ECommerce Solutions, SuggfestInfo In Chennai, India Is A Leading Supplier Of Digital Solutions To Clients Worldwide. By Continuing To Employ The Most Cutting-Edge And Sophisticated Technology, Which Enables Us To Develop Competitive And Advanced Digital Solutions, We Tend To Boost Our Expansion To New Heights In The Following Years. To Identify The Finest E-Commerce Development Business For Your Project's Goals, Budget, And Timetable, Our E-Commerce Website Development Service Is Best.
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
                <Award className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                Reputable And Trustworthy E-Commerce Website Development Company
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <Package className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Offer Effective Inventory Control
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <Truck className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                You Can Get Simple Order Tracking And Fulfilment
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <PieChart className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Have Personalized Business Reporting And Analytics
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <Lightbulb className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Possess Both A Highly Developed Technological Brain And A Creative Self.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3rd Section: Services Grid */}
      <section className="py-20 bg-[#eef8ff]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[40px] font-extrabold text-[#111827] uppercase tracking-wide">
              OUR EXCELLENT E-COMMERCE WEBSITE DEVELOPMENT SERVICES:
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
                <img src={img1} alt="B2B Merchandising" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">B2B Merchandising</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  We Begin Protected, Long-Lasting, And Feature-Rich B2B Marketplaces To Enable Companies To Deliver Their Goods Or Services To Other Potential Companies In The Market. We From SuggestInfo In Chennai, India Help Our Clients By Giving Them Access To Extremely Effective B2B Markets With Recurring Growth.
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
                <img src={img2} alt="Platforms For B2C Ecommerce" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3 leading-snug">Platforms For B2C Ecommerce</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  We Offer Feature-Rich, Interactive Web Portals That Allow Any Company To Engage In Direct Client Contact For Growth. We Give These Websites More Power By Incorporating Cutting-Edge ECommerce Features That Boost Their Effectiveness And Productivity.
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
                <img src={img3} alt="Upgrade and Migration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">Upgrade and Migration</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Using Cutting-Edge Technology, We Assist Businesses In Upgrading From Outdated Web Portals To Effective, Capable, Feature-Packed, Configurable, And More Secure ECommerce Platforms That Can Meet The Needs Of All Enterprises, Regardless Of Their Sizes Or Industry Domains.
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
                <img src={img4} alt="Ecommerce Audit" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">Ecommerce Audit</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  We Examine E-Commerce Websites And Infrastructure For Bugs In The Code, Security Holes, Performance Problems, And User Experience Problems. Then, After Identifying Issues, We Prioritize And Prepare Remedies.
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
                <img src={img5} alt="Integrations with Ecommerce" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3 leading-snug">Integrations with Ecommerce</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  With API-Based Integration Services To Link Dissimilar Systems And Enable Automated Data Exchange, We Bolster Our Competence In Establishing Online Stores.
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
                <img src={img6} alt="Development of Custom Modules and Plugins" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3 leading-snug">Development of Custom Modules and Plugins</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  By Developing The Appropriate Set Of Modules And Plugins In Accordance With Your Project Specifications, We Help You Improve The Features And Functionalities Of Your Online Shop And Advance Your ECommerce Venture.
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
              WHAT MAKES US UNIQUE FROM OTHERS?
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Excellent Customer Service</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  You may effortlessly manage your customer interactions with the eCommerce platform. You may create personalized promotional offers and easily resolve pre- and post-sale difficulties.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Order Control</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  The functions of the solution will make managing orders for you simpler. The platform will include all the capabilities necessary to speed up the workflow, from order fulfilment to personalizing specifics.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Category Control</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Get the most user-friendly interface for organizing categories on both the front and back ends. Users will be able to explore with ease, while administrators can easily manage types.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Individual Recommendation</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  By giving your eCommerce solution the personalization UI tools and recommendation engines needs to provide the best possible customer experience, you can transform it into a next-generation offering.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5th Section: Contact Form */}
      <ContactSection 
        title={<>Get Quote For E-Commerce<br />Website Development</>}
        subtitle="Call us for fast support to this number."
      />
    </div>
  );
}

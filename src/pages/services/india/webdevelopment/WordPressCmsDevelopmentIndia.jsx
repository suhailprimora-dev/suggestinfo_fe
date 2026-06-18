import React from 'react';
import { motion } from 'framer-motion';
import { Award, Settings, Users, Code, ShieldCheck } from 'lucide-react';
import { ContactButton } from '../../../../components/ContactButton';
import { ContactSection } from '../../../../components/ContactSection';

import heroBg from '../../../../assets/service/UAE/digital marketing/seo service in dubai.png';
import img1 from '../../../../assets/service/India/WEB DEVELOPMENT/WordPress CMS Development/Responsive-WP-Theme.png';
import img2 from '../../../../assets/service/India/WEB DEVELOPMENT/WordPress CMS Development/Custom-Web-Dev-for-WP.png';
import img3 from '../../../../assets/service/India/WEB DEVELOPMENT/WordPress CMS Development/Pligin-Wp.png';
import img4 from '../../../../assets/service/India/WEB DEVELOPMENT/WordPress CMS Development/SMS-for-Healthcare.png';
import img5 from '../../../../assets/service/India/WEB DEVELOPMENT/WordPress CMS Development/services-main-Wp.png';
import img6 from '../../../../assets/service/India/WEB DEVELOPMENT/WordPress CMS Development/WordPress-CMS.png';

export function WordPressCmsDevelopmentIndia() {
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
            WORDPRESS CMS DEVELOPMENT
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
                OBTAIN HIGH-QUALITY AND END-TO-END BEST WORDPRESS CMS SERVICES FROM SUGGESTINFO IN CHENNAI, INDIA:
              </h2>
            </div>
            <p className="text-gray-600 text-[16px] leading-relaxed font-medium">
              WordPress Is The Most Adaptable Technology And Is Best Suited For Simple And Complicated Projects. It Has Impressive Features Like Ease Of Use And The Ability To Produce CMS Solutions Optimized For The Needs Of The Customer. The WordPress Development Service From SuggestInfo In Chennai, India Is The Finest If You Want To Build Up Your Very Own Blogging Website Or Are Looking To Create A Feature-Rich And Dynamic Corporate Website. With The Help Of Cutting-Edge WordPress Technology, Our Expert Team Of WordPress Developers Is Capable Of Producing Ground-Breaking Site Solutions.
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
                We Get Pride In Giving A Top-Notch Service From SuggestInfo In Chennai, India.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <Settings className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Are Adaptable To A Variety Of Company Requirements.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <Code className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                Our WordPress Solutions Have Supreme Engineering Prowess.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <Users className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Have A Group Of Talented Coders On Staff.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <ShieldCheck className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Make Every Effort To Guarantee A Systematic Implementation.
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
              WHAT DOES OUR SUGGESTINFO OFFER?
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
                <img src={img1} alt="Theme Customization for WordPress" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">Theme Customization for WordPress</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  We Offer A Large Selection Of Responsive Custom WordPress Website Design Alternatives, Enabling Us To Modify The Themes Per Your Desired Designs.
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
                <img src={img2} alt="Custom Web Development for WordPress" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">Custom Web Development for WordPress</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  In Order To Make Certain That You Obtain Pixel-Perfect Custom WordPress CMS Development Services From Us, We Make Available A Variety Of Custom WordPress Website Development Solutions.
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
                <img src={img3} alt="Plug-In Development for WordPress" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">Plug-In Development for WordPress</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  At SuggestInfo, We Work Incredibly Hard To Ensure That The Themes Perform Superbly On All Platforms Outside Their Defaults. The Majority Recent Technological Advancements And Security Improvements Allow This.
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
                <img src={img4} alt="Development Of a Responsive WordPress Theme" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">Development Of a Responsive WordPress Theme</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Do You Believe Your Current Website Is Not Responsive And Gets Cut Off On The Screen? Relying On Your Precise Needs, We Offer Highly Responsive WordPress Theme Creation Services From SuggestInfo In Chennai, India.
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
                <img src={img5} alt="Service for WordPress Migration and Maintenance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3 leading-snug">Service for WordPress Migration and Maintenance</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  We Offer A Full Range Of Upkeep And Assistance. Additionally, We Excel In Providing WordPress Migration Services.
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
                <img src={img6} alt="Installation and Configuration of the WordPress CMS" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3">Installation and Configuration of the WordPress CMS</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  We Offer Seamless Installation And Configuration Of CMS. This Includes Setting Up WordPress Websites, Designing And Increasing WordPress Websites, Configuring Both Free And Premium WordPress Themes, Etc.
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
              BENEFITS OF CHOOSING US:
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Uncomplicated, And Easy To Use Websites</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  We employ sophisticated frameworks. Our coding procedures are thoroughly documented with widely used naming standards. You would anticipate that from us as we are a reliable WordPress website development company.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Low-Maintenance</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  For our WordPress website development services, we attach to industry best practices, eliminating any hardcoded holes or unethical customizations. This makes sure that running and maintaining our website is simple.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Secure And Easily Adaptable</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Our websites can be readily upgraded and are immune to cyberattacks. To keep the website safe and secure, we adhere to the proper file permissions, spam protection, form validations, configuration settings, etc.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Constitutive Results</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  All of the websites we create are incredibly quick and well-optimized. We ensure that all best practices are adhered to during creating a custom WordPress site, increasing user interaction and conversion.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5th Section: Contact Form */}
      <ContactSection 
        title={<>Get Quote For WordPress<br />CMS Development</>}
        subtitle="Call us for fast support to this number."
      />
    </div>
  );
}

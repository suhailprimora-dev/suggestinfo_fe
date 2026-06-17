import React from 'react';
import { PhoneCall, Monitor, ShieldCheck, Users, Layers, Code } from 'lucide-react';
import { ContactButton } from '../../../components/ContactButton';
import { motion } from 'framer-motion';
import heroBg from '../../../assets/service/UAE/WEB DEVELOPMENT/e commerce.png';
import img1 from '../../../assets/service/UAE/WEB DEVELOPMENT/Application-developments.png';
import img2 from '../../../assets/service/UAE/WEB DEVELOPMENT/CMS.png';
import img3 from '../../../assets/service/UAE/WEB DEVELOPMENT/Ecommerce-support.png';
import img4 from '../../../assets/service/UAE/WEB DEVELOPMENT/Inventory-management.png';
import img5 from '../../../assets/service/UAE/WEB DEVELOPMENT/Personalized.png';
import img6 from '../../../assets/service/UAE/WEB DEVELOPMENT/Website-development-for-E-Commerce.png';
import { ContactSection } from '../../../components/ContactSection';

export function EcommerceDubai() {
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
            E-COMMERCE DEVELOPMENT IN DUBAI
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
            <h2 className="text-[26px] md:text-[30px] lg:text-[34px] font-bold leading-[1.3] text-[#111827] uppercase tracking-tight">
              APPROACH SUGGESTINFO TO GET TOP ECOMMERCE DEVELOPMENT SERVICES IN DUBAI
            </h2>
            
            <p className="text-[#4b5563] text-[15px] leading-[1.8] font-medium">
              Suggestinfo Is Committed To Providing Streamlined And Effective E-Commerce Solutions To Its Clients In Dubai. We Design Powerful Web Stores And Applications That Are Mobile-Responsive And Elegant Design. In Order To Create Scalable And Reliable Online Stores For Both Web And Mobile, Our Highly Competent Team Of Experienced Ecommerce Developers In Dubai Closely Collaborates With The Clients On Their Requirements. Utilize Our First-Rate ECommerce Solutions To Differentiate You From The Competition And Significantly Influence The Market More Than Before. We Can Assist You In Exceeding The Seemingly Impossible Company Goal.
            </p>

            <div className="mt-4">
              <ContactButton />
            </div>
          </div>

          {/* Right Column: Feature Cards */}
          <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8 lg:mt-0">
            {[
              { text: "Hire Our Committed ECommerce Developers Today To Dominate Your Sector.", icon: Users },
              { text: "We Have The Expertise In Both People And Technology To Assist You In Realizing Your Idea", icon: Monitor },
              { text: "We Are Qualified To Satisfy All Of Your E-Commerce Needs.", icon: ShieldCheck },
              { text: "We Develop Strong, Personalized Online Ecommerce Websites Globally.", icon: Layers },
              { text: "You May Keep On Top Of Your Competitors With The Assistance Of Our E-Commerce Company.", icon: Code }
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
              OUR ECOMMERCE DEVELOPMENT SERVICED
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
                <img src={img5} alt="Personalized Ecommerce development" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[22px] font-bold text-[#111827] mb-3 leading-tight">Personalized Ecommerce<br/>development</h3>
                <p className="text-gray-600 text-[13px] leading-[1.8] font-medium">
                  There Are No Two Identical Company Concepts That Have Achieved Success. This Indicates That In Order To Succeed In The World Of ECommerce, You Must Act Uniquely. This Is Why You May Realize These Fantastic Ideas And Capture The Market Using Our Bespoke ECommerce Development Services.
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
                <img src={img4} alt="Inventory management" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[22px] font-bold text-[#111827] mb-3 leading-tight">Inventory<br/>management</h3>
                <p className="text-gray-600 text-[13px] leading-[1.8] font-medium">
                  Thanks To An Inventory Management System, Your Company Can Manage The Inventory Of Stocks And Orders, These Are Necessary For An ECommerce Operation To Run Smoothly. In Addition To Offering The Best Development Services, Suggestinfo Is An Ecommerce Development Company That Also Makes It Simple For You To Manage Inventory.
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
                <img src={img1} alt="Application development for mobile" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[22px] font-bold text-[#111827] mb-3 leading-tight">Application development<br/>for mobile</h3>
                <p className="text-gray-600 text-[13px] leading-[1.8] font-medium">
                  Nearly Everyone Is Holding A Cell Phone In Their Hand. This Indicates That There Are Several Viewers Who Could Become Your Future Clients. You Can Find The Ideal ECommerce Mobile Application You Need With Our First-Rate Software Development Services For E-Commerce Applications.
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
                <img src={img2} alt="Development of CMS" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[22px] font-bold text-[#111827] mb-3 leading-tight">Development of CMS</h3>
                <p className="text-gray-600 text-[13px] leading-[1.8] font-medium">
                  Every Industry Has Specific Requirements. However, CMS Maintains Its Significance Across All Sectors. Because Of This, CMS Is One Of The Services We Highlight Under ECommerce Development. You Can Enjoy The Most Incredible Experience Possible With This.
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
                <img src={img6} alt="Website development for E-Commerce" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[22px] font-bold text-[#111827] mb-3 leading-tight">Website development for<br/>E-Commerce</h3>
                <p className="text-gray-600 text-[13px] leading-[1.8] font-medium">
                  Many People Continue To Use Older Methods Of Online Browsing. This Is Just One Of The Factors That Make A Website Necessary. Even In The Smartphone Era, Any ECommerce Business Needs To Have A Website. The Top ECommerce Development Company In Dubai Suggestinfo Provides The Website Development Services You Require.
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
                <img src={img3} alt="Ecommerce support & maintenance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[22px] font-bold text-[#111827] mb-3 leading-tight">Ecommerce support &<br/>maintenance</h3>
                <p className="text-gray-600 text-[13px] leading-[1.8] font-medium">
                  You Require The Proper Maintenance And Support Services To Guarantee That Your ECommerce Businesses Never Go Offline While Your Clients Watch. Any Application's Or Website's Maintenance Is Equally As Crucial As Its Development. You Can Guarantee Seamless ECommerce Maintenance And Round-The-Clock Assistance With Our Services
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
              WHY CHOOSE SUGGESTINFO AS YOUR ECOMMERCE DEVELOPMENT COMPANY
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Excellent Time-Saving</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  You can save time and work with our e-commerce web development. To finish this work, you don't have to spend additional time hiring, managing, and training your entire team.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Improved Webpage</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Due to our expertise and experience, our e-commerce development can create optimized websites and increase sales for their clients. According to your request and budget, we can add the features and components that are most appropriate for your e-commerce site
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Improved Workforce And Resource Allocation</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  The client's project manager does not have to engage in much of the development work because we complete the entire project autonomously. As a result, the procedure is easy to understand from the development perspective and might be quickly missed.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Technical Assistance</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Suggestinfo is aware of the workflow's technological requirements. We fully support you and are aware of the best software currently on the market, per e-commerce requirements
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5th Section: Contact Form */}
      <ContactSection 
        title={<>Get Quote For E-Commerce<br />Development Services</>}
      />

    </div>
  );
}

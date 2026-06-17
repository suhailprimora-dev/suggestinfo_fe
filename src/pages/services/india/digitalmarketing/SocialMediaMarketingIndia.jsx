import React from 'react';
import { motion } from 'framer-motion';
import { ContactButton } from '../../../../components/ContactButton';
import { ContactSection } from '../../../../components/ContactSection';
import heroBg from '../../../../assets/service/UAE/digital marketing/seo service in dubai.png';
import maintenanceImg from '../../../../assets/service/UAE/digital marketing/Marketing-and-Advertising.png';
import adsImg from '../../../../assets/service/India/DIGITAL MARKETING/Social-media.png';
import influencerImg from '../../../../assets/service/India/DIGITAL MARKETING/Social-media (1).png';
import artworkImg from '../../../../assets/service/India/DIGITAL MARKETING/Social-medi.png';

export function SocialMediaMarketingIndia() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full py-10 md:py-18 flex items-center justify-center bg-gradient-to-r from-[#e0fff4] to-[#ccffea]">
        <div className="relative z-10 text-center px-4 w-full">
          <div className="text-gray-600 text-sm font-semibold tracking-widest mb-2 uppercase">• SERVICES</div>
          <h1 className="text-[#111827] text-[32px] md:text-[45px] lg:text-[50px] font-extrabold uppercase tracking-wide m-0">
            SOCIAL MEDIA MARKETING SERVICES
          </h1>
        </div>
      </section>

      {/* 2nd Section: Why Invest in SMM */}
      <section className="py-20 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <div>
            <div className="inline-block px-10 py-4 bg-[#0a2e2c] text-white text-medium rounded-full text-[18px] mb-4 tracking-wide w-max uppercase">
              WHY INVEST IN SMM
            </div>
            <h2 className="text-3xl md:text-[35px] lg:text-[38px] font-bold text-[#111827] leading-[1.3] uppercase tracking-tight">
              <span className="text-[#3cc994]">SMM SERVICES</span> ARE A RELIABLE AND COST-EFFECTIVE WAY TO <br className="hidden md:block" /> GENERATE WEB TRAFFIC AND SALES REVENUE.
            </h2>
          </div>
          <p className="text-gray-600 text-[13px] lg:text-[14px] leading-relaxed font-medium">
            In A World Where Consumers Spend Ever-Increasing Amounts Of Time Connected In Real-Time Across A Variety Of Platforms, A Smart, Focused Social Media Strategy <br className="hidden md:block" /> Has Become An Essential Element Of Any Business That Plans To Move Forward In The Digital Age.
          </p>
          <div className="mt-4">
            <ContactButton />
          </div>
        </div>
      </section>

      {/* 3rd Section: Our Best Social Media Marketing Services */}
      <section className="py-20 bg-[#eef8ff]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[40px] font-extrabold text-[#111827] uppercase tracking-wide">
              OUR BEST SOCIAL MEDIA MARKETING SERVICES
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[80px] max-w-[950px] mx-auto">
            {/* Service Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-all duration-300 group"
            >
              <div className="h-[210px] overflow-hidden relative">
                <img src={maintenanceImg} alt="Social Media Maintenance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[22px] font-bold text-[#111827] mb-3">
                  Social Media Maintenance
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Once You Create Your Social Media Accounts, It Is Important To Regularly Post New Content To Them, Including News About Your Business, Employees, Products, Services, And Other Details. Connect Your Accounts To Increase The Number Of People Who View Your Postings On Social Media.
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
                <img src={adsImg} alt="Social Media Advertising" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[22px] font-bold text-[#111827] mb-3">
                  Social Media Advertising
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  For You To Engage With The Right Audience On The Right Platforms, Social Ads Professionals Create A Comprehensive Plan That Includes Audience Analysis, Landing Page Optimization, And Attractive Creative Production.
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
                <img src={influencerImg} alt="Social Media Influencer Marketing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[22px] font-bold text-[#111827] mb-3">
                  Social Media Influencer Marketing
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Create And Executes Plans For Influencer Marketing On A Worldwide Scale. We Make The Best Plan For You Based On Your Brand's Goals. We Oversee Every Facet Of A Campaign, From Developing Original Ideas To Putting Them Into Practice To Tracking And Reporting The Outcomes.
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
                <img src={artworkImg} alt="Social Media Artwork Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[22px] font-bold text-[#111827] mb-3">
                  Social Media Artwork Design
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Our Artwork Designs Act As Accelerators To Help Your Business Reach Its Maximum Potential, Whether That Be By Increasing Conversions, Engagement, Or Brand Exposure. We Employ The Most Recent Trends And Technologies To Build Conversion-Focused Designs That Turn Infrequent Users Into Loyal Clients.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4th Section: How SMM Team Can Help */}
      <section className="py-20 relative overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-4">
            <p className="text-sm font-bold tracking-widest uppercase mb-2">BEST FOR YOU</p>
            <h2 className="text-4xl md:text-[40px] font-extrabold text-[#000000] uppercase tracking-wide leading-tight">
              HOW SMM TEAM CAN HELP
            </h2>
          </div>

          <div className="relative mt-16">
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">A Wider Customer Base</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Our excellent social media marketing strategy may help you increase brand recognition and put your business in front of relevant clients.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Complete Brand Management</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Our social media marketing packages are made to fit your needs and budget. This implies that your branding, spending, and social media content marketing map are completely under your hand.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Increased Customer Faith</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  To stay on top of your target market, our social media marketing company shares insightful information and participate in online discussions about your business.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-3">Higher Profitability</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Our best cost-effective method of reaching your potential customers without spending a significant sum of money is through social media marketing for small businesses and major corporations.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5th Section: Best SMM Agency */}
      <section className="py-16 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-[40px] font-extrabold text-[#111827] uppercase tracking-tight">
            BEST SMM AGENCY
          </h2>
          <p className="text-gray-600 text-[16px] leading-relaxed font-medium">
            Does Your Business Have The Holdup It Needs From Social Media Platforms? By Using Social Media Marketing, You Can Increase The Visibility Of Your Business Online And Forge Deep Connections With Your Followers And Customers. Build A Powerful Social Media Presence By Looking At Our Social Media Marketing Service. But Setting Up Company Accounts And Posting Whenever You Feel Like It Is Not Enough. A Passionate Approach With Quantifiable Objectives Is Required For Social Media Marketing And Includes: Maintaining And Enhancing Your Profiles. Posting Content That Enables Your Company Addressing Remarks, Claims, And Likes While Keeping An Eye On Your Reputation. To Build A Brand Community, Follow And Interact With Your Supporters, Clients, And Influencers. We Improve Your Company's Lead And Revenue References.
          </p>
          <div className="mt-4">
            <ContactButton />
          </div>
        </div>
      </section>

      {/* 6th Section: Contact Form */}
      <ContactSection
        title={<>Get Quote For Social<br />Media Marketing</>}
        subtitle="Call us for fast support to this number."
      />
    </div>
  );
}

export default SocialMediaMarketingIndia;

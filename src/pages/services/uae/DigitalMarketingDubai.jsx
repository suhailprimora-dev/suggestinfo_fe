import React from 'react';
import { PhoneCall, Target, TrendingUp, MessageSquare } from 'lucide-react';
import { ContactButton } from '../../../components/ContactButton';
import { motion } from 'framer-motion';
import { ContactSection } from '../../../components/ContactSection';
import heroBg from '../../../assets/service/UAE/digital marketing/Container (5).png';
import marketingImg from '../../../assets/service/UAE/digital marketing/Marketing-and-Advertising.png';
import seoServiceImg from '../../../assets/service/UAE/digital marketing/Search-Engine-Optimization.png';
import leadGenImg from '../../../assets/service/UAE/digital marketing/Lead-Generation-Services.png';
import brandingImg from '../../../assets/service/UAE/digital marketing/Branding.png';
import webDevImg from '../../../assets/service/UAE/digital marketing/Web-Design-and-Development.png';
import mobileAppImg from '../../../assets/service/UAE/digital marketing/Mobile-Application-Design.png';

export function DigitalMarketingDubai() {
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
            DIGITAL MARKETING IN DUBAI
          </h1>
        </div>
      </section>

      {/* 2nd Section: Services Info */}
      <section className="py-20 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">

          {/* Left Column */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-[32px] md:text-[42px] font-extrabold leading-[1.2] tracking-tight text-[#111827] uppercase">
              AVAIL OF THE BEST <span className="text-[#3cc994]">DIGITAL</span> <span className="text-[#86d96e]">MARKETING SERVICES</span> AT SUGGESTINFO
            </h2>
            <p className="text-[#4b5563] text-[15px] leading-[1.8] font-medium">
              Are You Seeking A Dynamic Digital Marketing Company In Dubai That Will Help You Grow Your Company? Suggestinfo Is A Full-Service Digital Marketing Agency In Dubai That Works With Companies All Around The Middle East And The United Arab Emirates. In Addition To A Wide Range Of Other Digital Marketing Services, We Also Provide SEO, Social Media Marketing, PPC, Content Marketing, Analytics, And Online AdvertsWe Deliver The Most Effective Method Of Business Promotion.We Suggestinfo Involve More Than Just Having A Website Or A Social Media Account.
            </p>
            <div className="mt-4">
              <ContactButton />
            </div>
          </div>

          {/* Right Column (Cards) */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden md:col-span-2">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <Target className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Suggestinfo Must Fully Utilize All Available Digital Marketing Platforms And Tools
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <TrendingUp className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                Our Digital Marketing Services Aim To Boost Website Traffic And Convert Those Visits Into Purchases Or Sales.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3cc994] to-[#28a77b]"></div>
              <div className="w-14 h-14 bg-[#e8f8f5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3cc994] transition-colors duration-300 shadow-sm">
                <MessageSquare className="text-[#3cc994] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed text-[15px]">
                We Engage Potential Clients With Your Business, And Digital Marketing Is About Developing Your Brand Online And Raising Awareness.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3rd Section: Our Services */}
      <section className="py-20 bg-[#eef8ff]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#111827] uppercase tracking-wide">
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
                <img src={marketingImg} alt="Marketing and Advertising" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3 leading-tight">Marketing and Advertising</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Suggestinfo Is A Creative Powerhouse That Promises To Inject Much-Needed Zing Into Your Company's Advertising Plan. We Are The Top Digital Marketing In Dubai With An In-House Team Of Experts In Advertising, Public Relations, Digital Marketing, And Design.
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
                <img src={seoServiceImg} alt="Search Engine Optimization" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3 leading-tight">Search Engine Optimization</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Do You Want To Rank On Google's Front Page? Cooperate With The Top SEO Company In Dubai. Over 150 Clients Will Receive SEO Services From Us In Arabic And English. Thanks To Our First-Page Ranking Or Money-Back Guarantee, We Promise To Complete Your Job Flawlessly. Please Take A Peek At Some Of Our Case Studies And References
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
                <img src={leadGenImg} alt="Lead Generation Services" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3 leading-tight">Lead Generation Services</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  The Top Lead Generation Company In Dubai, Suggestinfo Has Led The Way In B2B And B2C Lead Generation For More Than A Decade, Developing Lead-Generating Methods That Have Propelled Businesses To Success. Join Us, And Let's Create Campaigns That Will Benefit Your Company.
                </p>
              </div>
            </motion.div>

            {/* Service Card 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.55, ease: "easeOut" }}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-all duration-300 group"
            >
              <div className="h-40 overflow-hidden relative rounded-b-[24px]">
                <img src={brandingImg} alt="Branding and Creative Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3 leading-tight">Branding and Creative Design</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Suggestinfo Is Recognized As The Best Design Agency In Dubai To Develop Captivating And Distinctive Visual Identities For Customers In Various Industries. We Seek To Make And Develop Brands With Our Logo Design, Brochure, Packaging, Web, And Graphic Design Services.
                </p>
              </div>
            </motion.div>

            {/* Service Card 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-all duration-300 group"
            >
              <div className="h-40 overflow-hidden relative rounded-b-[24px]">
                <img src={webDevImg} alt="Web Design and Development" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3 leading-tight">Web Design and Development</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  We Are Confident That Because Of The Extraordinary Nature Of Your Company, Your Website Should Reflect This. Website Design And Development Services Are Widely Available From Suggestinfo. Unlike Other Website Design Companies In Dubai, We Believe In Creating Dynamic, Mobile-Friendly Website Designs To Draw In As Many Customers And Leads As Possible.
                </p>
              </div>
            </motion.div>

            {/* Service Card 6 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.85, ease: "easeOut" }}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-all duration-300 group"
            >
              <div className="h-40 overflow-hidden relative rounded-b-[24px]">
                <img src={mobileAppImg} alt="Mobile Application Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 pt-5">
                <h3 className="text-[24px] font-bold text-[#111827] mb-3 leading-tight">Mobile Application Design</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                  Suggestinfo Provides Mobile App Development Services In Dubai For Android, IOS, Windows, And Hybrid Platforms. We Are A Top Bespoke App Development Firm With Highly Qualified App Developers On Staff. Our Innovative Process Ensures We Turn Your Concept Into A Practical, Profitable Reality
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4th Section: Why Choose Suggestinfo */}
      <section className="py-20 relative overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[40px] font-extrabold text-[#000000] uppercase tracking-wide leading-tight">
              WHY CHOOSE SUGGESTINFO
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-4">Leading Digital Marketing Agency</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  One of Dubai's top digital marketing firms is Suggestinfo. No matter how big or small, every business can benefit from our tailored packages and cutting-edge digital marketing solutions. To ensure that your website receives the exposure it merits both online and offline, we combine our knowledge in SEO with pay-per-click techniques.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-4">Trust And Delivery</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Trust and providing high-quality items are the foundations of our customer interactions. We are dedicated to offering our clients outstanding customer care and the support they require at every stage as the best digital marketing firm in Dubai.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-4">Unique Business</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Our team of experts is committed to developing successful, result-driven digital marketing campaigns. Our services are created to meet your organization's specific demands and objectives, helping you make the ideal approach.
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div 
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.55, ease: "easeOut" }}
                className="bg-gradient-to-br from-[#f9f7fc] to-[#efe9f8] p-8 md:p-10 rounded-[28px]"
              >
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-4">Customized Solution</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  We work carefully with each client to understand their specific needs and offer a tailored solution because no two businesses are correspondingly, and no standard marketing approach works for everyone.
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* 5th Section: Contact Form */}
      <ContactSection 
        title={<>Get Quote For Digital<br />Marketing Services</>}
      />

    </div>
  );
}

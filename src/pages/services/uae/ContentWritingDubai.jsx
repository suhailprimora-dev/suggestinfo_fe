import React from 'react';
import { motion } from 'framer-motion';
import { ContactButton } from '../../../components/ContactButton';
import contentWritingImg from '../../../assets/service/UAE/content writting/Content_Writing.png';

export function ContentWritingDubai() {
  return (
    <div className="w-full bg-white">
      {/* 1st Section: Hero Banner */}
      <section className="relative w-full h-[120px] md:h-[200px] flex items-center justify-center bg-gradient-to-r from-[#e0fff2] to-[#cbfce6]">
        <div className="relative z-10 text-center px-4 w-full">
          <h1 className="text-[#111827] text-[26px] md:text-[36px] lg:text-[44px] font-extrabold uppercase tracking-wide m-0 max-w-[900px] mx-auto leading-[1.2]">
            CONTENT WRITING SERVICES IN DUBAI
          </h1>
        </div>
      </section>

      {/* 2nd Section: Main Content */}
      <section className="py-16 md:py-24 relative bg-white">
        <div className="max-w-[1250px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
              <h2 className="text-[#000000] text-[26px] md:text-[32px] font-extrabold uppercase leading-[1.3] tracking-tight">
                YOUR GO-TO CONTENT WRITING<br />AGENCY IN DUBAI
              </h2>
              <h3 className="text-[#000000] text-[20px] md:text-[24px] font-bold uppercase mt-2">
                WE ARE THE KING OF CONTENT WRITING
              </h3>
              <p className="text-[#374151] text-[15px] leading-[1.8] font-medium max-w-[500px]">
                Are You Trying To Find A Competent Content Writer In Dubai? Our Experienced Writing Team At Suggest Info Produces Reliable, Excellent Work That Lives Up To Your Expectations.
              </p>
              <div className="mt-2">
                <a href="#" className="text-black font-semibold hover:underline text-[14px]">Know more</a>
              </div>
            </motion.div>

            {/* Right Content (Image) */}
            <motion.div 
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="w-full flex justify-center lg:justify-end"
            >
              <img 
                src={contentWritingImg} 
                alt="Content Writing Services Dubai" 
                className="w-full max-w-[550px] object-contain shadow-sm rounded-lg"
              />
            </motion.div>

          </div>

          {/* BEST CONTENT WRITING SERVICES IN DUBAI Section */}
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-24 flex flex-col gap-4"
          >
            <h2 className="text-[#000000] text-[24px] md:text-[28px] font-extrabold uppercase tracking-tight mb-2">
              BEST CONTENT WRITING SERVICES IN DUBAI
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              Dubai's Economy Has Experienced A Significant Boom, Making It One Of The Richest Cities In The World. A Diverse Marketplace And Significant Economic Growth Provide The Ideal Conditions For Launching And Expanding Separate Businesses. As A Result, More And More Businesses Are Launching Their Operations In Dubai.
            </p>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              For A Business To Garner Attention, A Solid Web Presence With Engaging Content Is Essential. You Can Have A Great Product, But All Your Efforts Will Be Pointless If You Don't Have Any Intriguing Content To Keep Buyers From Hearing From You. Being One Of The Most Well-Known Content Writing Services In Dubai, We At Suggest Info Play An Important Role In Developing Your Company's Reputation, Earning The Trust Of Your Clients, And Effectively Communicating The Appropriate Message To Your Target Audience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES OFFERED Section - Gradient Cards */}
      <section className="py-20 relative overflow-hidden bg-[#f4f7fc]">
        <div className="w-full max-w-[1250px] mx-auto px-6 md:px-12 relative z-10">
          <div className="text-left mb-16 max-w-[1200px]">
            <h2 className="text-4xl md:text-[36px] font-extrabold text-[#000000] uppercase tracking-wide leading-tight mb-4">
              SERVICES OFFERED IN SUGGEST INFO
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              At Suggest Info, Our Content Writing Service Works As A Tool To Help You With Digital Marketing. We Tell Stories That Connect, Captivate, And Win People. Your Brand Can Be Rejuvenated, And Your Online Visibility Can Be Enhanced By Our Words. Here Are The Services Offered By Suggest Info:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="bg-white p-8 md:p-10 rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300"
            >
              <h3 className="text-[20px] font-bold text-[#000000] mb-4 flex items-center gap-2">
                 ☛ Web Page Content
              </h3>
              <p className="text-[#4b5563] text-[14px] leading-relaxed font-medium">
                Even If Your Company Has A Website, It Won't Be Simple To Turn Leads Into Sales If The Content Isn't Optimized. We Close These Gaps By Providing Web Content Services That Produce Content That Can Stand Out Online, Attract Targeted Audience, And Generate Revenue.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="bg-white p-8 md:p-10 rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300"
            >
              <h3 className="text-[20px] font-bold text-[#000000] mb-4 flex items-center gap-2">
                 ☛ Blog writing
              </h3>
              <p className="text-[#4b5563] text-[14px] leading-relaxed font-medium">
                Search Engine Optimization Is Made Easier By Blogging For Your Company. Posting SEO Blogs On A Regular Basis Is Essential To The Digital Expansion Of Your Company. With Our Blog Content Writing Services In Dubai, We Can Increase The Value Of Your Brand. Regardless Of Your Size-Big Or Small-We Understand How To Use Blogs To Promote Your Company.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="bg-white p-8 md:p-10 rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300"
            >
              <h3 className="text-[20px] font-bold text-[#000000] mb-4 flex items-center gap-2">
                 ☛ Social Media Content Writing
              </h3>
              <p className="text-[#4b5563] text-[14px] leading-relaxed font-medium">
                With Engaging Content, Social Media Campaigns On Facebook, Instagram, Or YouTube Let Your Company Engage With Niche Customers Directly. Through Up-To-Date And Thought-Provoking Content, We Build Enduring Relationships With Niche Customers. Are You Looking To Gain An Immense Number Of Followers Across All Of Your Social Media Channels? In This Case, Suggest Info's Social Media Content Has The Power Of Magic.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="bg-white p-8 md:p-10 rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300"
            >
              <h3 className="text-[20px] font-bold text-[#000000] mb-4 flex items-center gap-2">
                 ☛ Copywriting
              </h3>
              <p className="text-[#4b5563] text-[14px] leading-relaxed font-medium">
                You Can Count On Our Copywriters To Create Outstanding First Impressions That Increase Engagement By Using High-Quality, SEO-Optimized Content. This Way, The Readers Would Have A Deeper Understanding Of Your Brand's Value Proposition. This Increases Your Business's Conversion Potential.
              </p>
            </motion.div>
            
            {/* Card 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="bg-white p-8 md:p-10 rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300"
            >
              <h3 className="text-[20px] font-bold text-[#000000] mb-4 flex items-center gap-2">
                 ☛ SEO content writing
              </h3>
              <p className="text-[#4b5563] text-[14px] leading-relaxed font-medium">
                If You Are Not Creating Content With An SEO Focus, It Is Impossible To Rank In The SERPs. We Offer Optimized Content For Newsletters, Blogs, Social Media Forums, And Ad Copywriting. With The Help Of Words, Our Talented Content Writers Can Enhance Your Brand's Online Visibility.
              </p>
            </motion.div>
            
            {/* Card 6 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="bg-white p-8 md:p-10 rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300"
            >
              <h3 className="text-[20px] font-bold text-[#000000] mb-4 flex items-center gap-2">
                 ☛ Article writing
              </h3>
              <p className="text-[#4b5563] text-[14px] leading-relaxed font-medium">
                To Promote Your Business On Various Platforms, Suggest Info Offers The Best Article-Writing Services. Our Sincere, Unique, And Timely Articles Will Reach Out To Websites With A High Volume Of Organic Traffic.
              </p>
            </motion.div>

            {/* Card 7 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
              className="bg-white p-8 md:p-10 rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300"
            >
              <h3 className="text-[20px] font-bold text-[#000000] mb-4 flex items-center gap-2">
                 ☛ Technology Writing
              </h3>
              <p className="text-[#4b5563] text-[14px] leading-relaxed font-medium">
                Suggest Info Offers You With Technical Content Developers With Specialized Skills. For Web Sites, They Are Excellent At Demystifying Complicated Technical Information. Our Flexible Technological Writing Services Can Handle Any Assignment As We Assign The Most Qualified Staff To It. The Technical Writing Staff At Suggest Info Is Excellent At Providing Thorough Information. From Company Paperwork To User Manuals, They Handle Everything With Accuracy And Knowledge.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE Section - Colored gradient cards grid */}
      <section className="py-20 relative bg-white">
        <div className="max-w-[1250px] mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-14">
            <h2 className="text-[#000000] text-[28px] md:text-[36px] font-extrabold uppercase tracking-tight mb-4">
              WHY CHOOSE SUGGEST INFO FOR CONTENT WRITING IN DUBAI
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              As One Of Dubai's Best And Most Prestigious Content-Writing Firms, We Assist You In Telling Your Narrative And Positioning Your Company As An Industry Leader.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bg-gradient-to-br from-[#f0f6ff] to-[#e4effc] rounded-[20px] p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300"
            >
              <h3 className="text-[20px] font-bold text-[#000000] leading-tight mb-3">
                Specialist Writers
              </h3>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                The top content writers in Dubai work on your projects to provide hyperlocal yet diverse content that draws readers in and promotes your business.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
              className="bg-gradient-to-br from-[#fff4ed] to-[#fde9df] rounded-[20px] p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300"
            >
              <h3 className="text-[20px] font-bold text-[#000000] leading-tight mb-3">
                Content-Type
              </h3>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                Depending on your company needs you can select from unique content types, including, blogs, SEO content, and website material.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="bg-gradient-to-br from-[#eaffe6] to-[#ddfadc] rounded-[20px] p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300"
            >
              <h3 className="text-[20px] font-bold text-[#000000] leading-tight mb-3">
                Content For Every Budget
              </h3>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                We offer content for every budget. Select from different packages according to your budget.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.45, ease: "easeOut" }}
              className="bg-gradient-to-br from-[#f8ebff] to-[#f0ddfc] rounded-[20px] p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300"
            >
              <h3 className="text-[20px] font-bold text-[#000000] leading-tight mb-3">
                Streamlined Operations
              </h3>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                Work with your assigned content manager to simplify your life. They handle all the details of your content.
              </p>
            </motion.div>

            {/* Card 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="bg-gradient-to-br from-[#eff0fa] to-[#e4e7f7] rounded-[20px] p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-300"
            >
              <h3 className="text-[20px] font-bold text-[#000000] leading-tight mb-3">
                Helps You To Increase ROI (Return On Investment)
              </h3>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                Until they achieve the desired outcomes, nobody considers their investment to be profitable. So, we carefully create and develop your content to precisely target your audience, thereby assisting you in growing your customer base over time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative bg-white border-t border-gray-50">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-10 text-left">
            <h2 className="text-[#000000] text-[28px] md:text-[36px] font-extrabold uppercase tracking-tight mb-4">
              HIRE US FOR CONTENT WRITING.
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium mb-4 max-w-[800px]">
              Tell Our Professionals What You Need By Getting In Touch With Them. With High-Quality Content, Our Content Writing Services In Dubai Will Draw In Your Target Audience And Help You Gain Their Trust.
            </p>
          </div>
          <div className="flex justify-start">
            <ContactButton />
          </div>
        </div>
      </section>

    </div>
  );
}

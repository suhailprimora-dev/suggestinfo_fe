import React from 'react';
import { motion } from 'framer-motion';
import { Hand, ThumbsUp, Puzzle, Briefcase, Target, FileText } from 'lucide-react';
import { ContactButton } from '../../../components/ContactButton';
import prImg from '../../../assets/service/UAE/public/Public_Relations.png';

export function PublicRelationDubai() {
  return (
    <div className="w-full bg-white">
      {/* 1st Section: Hero Banner */}
      <section className="relative w-full h-[120px] md:h-[200px] flex items-center justify-center bg-gradient-to-r from-[#e0fff2] to-[#cbfce6]">
        <div className="relative z-10 text-center px-4 w-full">
          <h1 className="text-[#111827] text-[26px] md:text-[36px] lg:text-[44px] font-extrabold uppercase tracking-wide m-0 max-w-[900px] mx-auto leading-[1.2]">
            PUBLIC RELATIONS SERVICES IN DUBAI
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
                TOP-RATED PUBLIC RELATIONS<br />(PR) AGENCY IN DUBAI
              </h2>
              <p className="text-[#374151] text-[15px] leading-[1.8] font-medium max-w-[500px]">
                We Communicate What Matters.
              </p>
              <p className="text-[#374151] text-[15px] leading-[1.8] font-medium max-w-[500px]">
                At Suggest Info, We Help Companies And Individuals In Reaching Marketing Objectives In The Market With Effective PR Services.
              </p>
              <ul className="list-disc pl-5 text-[#374151] text-[15px] leading-[1.8] font-medium space-y-2">
                <li>ROI-Driven Public Relations Services</li>
                <li>Across All Sectors And Industries</li>
                <li>Reasonably Priced For Every Kind Of Business</li>
              </ul>
              <div className="mt-4">
                <ContactButton />
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
                src={prImg} 
                alt="Public Relations Services Dubai" 
                className="w-full max-w-[550px] object-contain shadow-sm"
              />
            </motion.div>

          </div>

          {/* WHO WE ARE Section */}
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-24 flex flex-col gap-4"
          >
            <h2 className="text-[#000000] text-[24px] md:text-[28px] font-extrabold uppercase tracking-tight">
              WHO WE ARE
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              We Are A Dubai-Based, Strategic Communications And Public Relations Firm With Well-Established Regional And International Reach. We Work Together As A Team To Bring Our Clients' Visions To Life. Or, To Put It Another Way, We Deliver The Work That Works.
            </p>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              We Regard Ourselves As Consultants Who Are Brand-Centric And Who Are Always Improving The Brand Equity Of Our Clients. Our Media-Savvy Team Builds On Important Ideas And Sparks Discussions On Many Communication Platforms.
            </p>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              We Combine New And Old Media To Make This Easier, Improving Tangible Return On Investment. Raising The Standard In All We Do Drives Us To Be A Reputable, Amiable, And Moral Public Relations Firm.
            </p>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              If You're Searching For The Most Reputable And Best PR Firms In Dubai To Maintain The Good Reputation Of Your Company Or To Enhance Its Image Through PR, Suggest Info Is The Agency You Are Looking For. We Can Help With All Of Your Reputation Management Needs.
            </p>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              Speak With Us. We Want To Show You The Difference Between Competing And Winning.
            </p>
          </motion.div>

          {/* WHAT DO PR AGENCIES DO Section */}
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="mt-16 flex flex-col gap-4"
          >
            <h2 className="text-[#000000] text-[24px] md:text-[28px] font-extrabold uppercase tracking-tight">
              WHAT DO PUBLIC RELATIONS AGENCIES DO?
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              Through Their Media Coverage, The Best PR Agency In Dubai Helps In The Promotion Of People Or Businesses. As A Top PR Agencies In Dubai, Suggest Info Is Known For Showcasing Our Customers Companies And Making Them Appear As Successful, Reliable, Important, And Relevant As We Can.
            </p>
            <ul className="list-disc pl-5 text-[#374151] text-[15px] leading-[1.8] font-medium space-y-3 mt-2">
              <li>We Are Aware Of The Needs And Expectations Of Our Customers And Know What They Are Looking For.</li>
              <li>We Will Create The Most Effective Communication Strategy For Our Clients And Assist Them In Establishing An Everlasting And Productive Positive Relationship With The Public.</li>
              <li>We Achieve Our Clients' Business Objectives By Using Creative And Modern PR Techniques.</li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* OUR SERVICES - Gradient Cards */}
      <section className="py-20 relative overflow-hidden bg-white">
        <div className="w-full max-w-[1250px] mx-auto px-6 md:px-12 relative z-10">
          <div className="text-left mb-16 max-w-[1200px]">
            <h2 className="text-4xl md:text-[36px] font-extrabold text-[#000000] uppercase tracking-wide leading-tight mb-4">
              OUR SERVICES
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              Over Time, Suggest Info Has Developed Into An Integrated Communications Agency That Offers A One-Stop Solution For All Marketing And Communication Needs. We Provide A Wide Range Of PR And Digital Marketing Services, Giving Our Customers Across All Industries 360-Degree Solutions.
            </p>
          </div>

          <div className="relative max-w-[1200px] mx-auto">
            {/* Massive soft shadow behind the entire grid */}
            <div className="absolute -inset-10 bg-black/5 blur-[100px] rounded-[60px] z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 relative z-10">
              {/* Card 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                className="bg-gradient-to-br from-[#f8faff] to-[#e2ecfa] p-8 md:p-10 rounded-[28px] shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-shadow duration-300"
              >
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-4">Public Relations And Communications</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Suggest Info has experience in establishing and maintaining relationships for your long-term communication goals. Our specialty services include advocacy, crisis management, investor relations, media relations, and reputation management.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
                className="bg-gradient-to-br from-[#fff6f0] to-[#fdeae1] p-8 md:p-10 rounded-[28px] shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-shadow duration-300"
              >
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-4">Digital Marketing</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Using smart digital solutions, we aim to build your brand's narrative. We assist brands in creating narratives that are optimized for various media platforms to connect with the right audience. We specialize in a number of sectors under the broad umbrella of “digital marketing,” including influencer marketing, web design, SEO, social media marketing, content marketing, performance marketing, and brand marketing.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="bg-gradient-to-br from-[#f0fffa] to-[#d6f7eb] p-8 md:p-10 rounded-[28px] shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-shadow duration-300"
              >
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-4">Events & Production</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Suggest Info operates with unlimited creativity. From thinking, innovating, and creating ideas at the nexus of extraordinary talent and superhuman powers, we make sure the events and productions have a real impact on the client’s business.
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div 
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
                className="bg-gradient-to-br from-[#f9f7fc] to-[#efe9f8] p-8 md:p-10 rounded-[28px] shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-shadow duration-300"
              >
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-4">Insights</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Insights is a specialized division that focuses on research and knowledge-based communication. The goal is to create a story that differentiates the brand and sparks the interest of all stakeholders using data-backed insights by analyzing macroeconomic variables and business prospects that our client can take advantage of.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PARTNER WITH SUGGEST INFO Section - White cards grid */}
      <section className="py-20 relative bg-[#f4f7fc]">
        <div className="max-w-[1250px] mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-14">
            <h2 className="text-[#000000] text-[28px] md:text-[36px] font-extrabold uppercase tracking-tight mb-4">
              WHY PARTNER WITH SUGGEST INFO?
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              Suggest Info Is A Leading Public Relations Firm In Dubai, Renowned For Providing Impactful Communication Solutions. We Offer An Extensive Array Of Services To Assist Companies In Gaining Media Attention And Improving Their Image. Together, We Create Effective PR Campaigns That Create Excitement, Grab Attention, And Build Credibility For Our Clients. To Successfully Communicate Our Client's Stories To The Appropriate Audience And Boost Brand Awareness And Good Brand Connections, The Suggest Info Team Creates Press Releases And Plans Media Events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bg-white rounded-[24px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <ThumbsUp className="w-6 h-6 fill-black text-black shrink-0" />
                <h3 className="text-[20px] font-bold text-[#000000] leading-tight">
                  Partner Approach
                </h3>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                We're Not Simply The PR Firm You Hired; We're Also Your Brand Manager And PR Advisor, There To Assist You With Anything You Need.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
              className="bg-white rounded-[24px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <Puzzle className="w-6 h-6 fill-black text-black shrink-0" />
                <h3 className="text-[20px] font-bold text-[#000000] leading-tight">
                  Customized Approaches
                </h3>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                Any Two Brands Are Not The Same. So, We Offer A Custom PR Strategy Created For Your Specific Needs.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="bg-white rounded-[24px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 fill-black text-black shrink-0" />
                <h3 className="text-[20px] font-bold text-[#000000] leading-tight">
                  Simplified Workflow
                </h3>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                We Are Not Just Imaginative But Well-Organized As Well. Our Whole Project Execution Process, From Initial Communication To Project Conclusion, Is Well-Defined.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.45, ease: "easeOut" }}
              className="bg-white rounded-[24px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 fill-black text-black shrink-0" />
                <h3 className="text-[20px] font-bold text-[#000000] leading-tight">
                  Everything in-house
                </h3>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                To Ensure Quality, We Handle Every Step Of The Process In-House, From Strategy To Execution.
              </p>
            </motion.div>

            {/* Card 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="bg-white rounded-[24px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 fill-black text-black shrink-0" />
                <h3 className="text-[20px] font-bold text-[#000000] leading-tight">
                  Experienced Team
                </h3>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                Collaborate With The Top Experts In Marketing Strategy, Fashion PR, FMCG PR, And Startup Public Relations.
              </p>
            </motion.div>
            
            {/* Card 6 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.75, ease: "easeOut" }}
              className="bg-white rounded-[24px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 fill-black text-black shrink-0" />
                <h3 className="text-[20px] font-bold text-[#000000] leading-tight">
                  Reports and Pricing
                </h3>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                We Give Reports Based On The Plans That Have Been Chosen As We Offer All Of Our Services At Reasonable Prices. Usually, We Offer Monthly Reports, Weekly Reports Or Customized Reports Based On The Need Of The Customer.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7th Section: Contact */}
      <section className="py-20 relative bg-white">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-10 text-left">
            <h2 className="text-[#000000] text-[28px] md:text-[36px] font-extrabold uppercase tracking-tight mb-4">
              LET'S DISCUSS ABOUT YOUR PROJECT
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium mb-4">
              For What Kind Of Brand Do You Need A PR Campaign? We Would Like To Schedule A Meeting To Talk About Our Joint Efforts.
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

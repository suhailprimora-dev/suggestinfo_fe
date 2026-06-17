import React from 'react';
import { motion } from 'framer-motion';
import { ContactSection } from '../../../components/ContactSection';
import { ContactButton } from '../../../components/ContactButton';

export function BrandKitDubai() {
  return (
    <div className="w-full bg-white">
      {/* 1st Section: Hero Banner */}
      <section className="relative w-full h-[120px] md:h-[200px] flex items-center justify-center bg-gradient-to-r from-[#e0fff2] to-[#cbfce6]">
        <div className="relative z-10 text-center px-4 w-full">
          <h1 className="text-[#111827] text-[28px] md:text-[40px] lg:text-[48px] font-extrabold uppercase tracking-wide m-0">
            BRAND KIT FOR DUBAI UAE
          </h1>
        </div>
      </section>

      {/* 2nd Section: Main Content */}
      <section className="py-16 md:py-20 relative bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 mb-12"
          >
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              Creating A Strong Visual Identity Is The Basis For Your Business's Online Promotions. In Today's Competitive Marketing Landscape, A Brand Kit Is A Vital Tool For Communicating With Your Customer. The Power Of An Effective Brand Kit Lies In Its Ability To Seamlessly Blend Text And Images, Thereby Promoting Brand Recognition Across Diverse Platforms. We At Suggestinfo Believe That Captivating And Enduring Certain Services Is An Essential Component In Establishing A Brand's Identity.
            </p>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              To Successfully Promote Your Business In The Digital Realm, You Require An Engaging Brand Kit That Captivates And Engages Your Target Audience. Our Team Of Seasoned Designers Is Well-Versed In Understanding Your Specific Needs And Crafting Exceptional Designs And Websites. As A Dependable Design Agency In Dubai, We Offer Cost-Effective Branding Solutions Designed To Help Our Clients Fully Leverage The Potential Of Online Presence. Our Service Can Convey Powerful And Significant Ideas That Create Strong Customer Connections.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="inline-block bg-[#053b3c] text-white text-[20px] font-normal px-8 py-2.5 rounded-full">
              Our Top Services:
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-[#000000] text-[24px] md:text-[28px] font-extrabold uppercase tracking-tight">
              LOGO DESIGN:
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              Before Embarking On Any Marketing Endeavors, Creating A Logo Is An Essential Initial Step. Suggestinfo Collaborates Closely With You, Using Your Specific Needs And Our Innovative Ideas To Create A Logo That Is A Unique Reflection Of Your Company, Giving It A Distinct Character. Our Team Of Imaginative Designers Is Dedicated To Delivering A Logo Design That Encapsulates The Essence Of Your Brand In Its Entirety.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 mt-12"
          >
            <h2 className="text-[#000000] text-[24px] md:text-[28px] font-extrabold uppercase tracking-tight">
              BUSINESS CARD:
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              We Offer You An Opportunity To Fully Realize The Potential Of Your Brand Right In The Middle Of The Ever-Changing Commercial Landscape. Our Business Cards Are Designed To Elegantly And Powerfully Convey The Essence Of Your Company. Check Out Our Selection Of Business Cards To Improve The Visibility Of Your Online Brand Right Now.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 mt-12"
          >
            <h2 className="text-[#000000] text-[24px] md:text-[28px] font-extrabold uppercase tracking-tight">
              BROCHURE & FLYERS:
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              Discover Our Amazing Flyers & Brochures Services In Dubai, Customized From Your Brand Kit. Our Creative Hub Produces Gorgeous Flyers And Brochures That Skillfully Capture The Attention Of Your Target Audience And Communicate Your Brand's Message. We At Suggestinfo Assist You In Leaving A Lasting Impression In Dubai's Dynamic Business Environment By Combining Cutting-Edge Design With Accuracy.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 mt-12"
          >
            <h2 className="text-[#000000] text-[24px] md:text-[28px] font-extrabold uppercase tracking-tight">
              NAME BOARD DESIGN:
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              Our Specialty Is Creating Name Boards That Are Memorable And Make A Big Impression On Your Target Audience. Our Talented Designers Smoothly Integrate Creativity And Accuracy To Generate Name Boards That Complement The Identity Of Your Company. With Our Outstanding Name Board Designs, You Can Increase The Exposure Of Your Business And Leave A Lasting Impression On The Dubai Market.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 mt-12"
          >
            <h2 className="text-[#000000] text-[24px] md:text-[28px] font-extrabold uppercase tracking-tight">
              1 CORPORATE VIDEO (BUSINESS PRESENTATION VIDEO):
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              Our Skilled Team Specializes In Producing Powerful Business Presentation Videos That Clearly And Professionally Convey The Story Of Your Brand. We Turn Your Ideas Into Fascinating Visual Narratives With Attention To Detail And Inventiveness. With Our Corporate Video Experience, You May Enhance Your Brand's Image And Attract Your Audience.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 mt-12"
          >
            <h2 className="text-[#000000] text-[24px] md:text-[28px] font-extrabold uppercase tracking-tight">
              1 WEBSITE WITH 5-8 PAGES MAX:
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              We Create A Dynamic Online Presence That Is Suited To Your Distinct Personality. To Maximize Your Brand's Digital Impact, Our Team Of Talented Designers Builds A Responsive Website With 5-8 Pages. We At Suggestinfo Make Sure Your Business Stands Out In The Crowded Dubai Market By Emphasizing The User Experience And Aesthetic Appeal.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 mt-12"
          >
            <h2 className="text-[#000000] text-[24px] md:text-[28px] font-extrabold uppercase tracking-tight">
              COMPANY LETTERHEAD DESIGN:
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              Our Unique Letterhead Perfectly Captures The Essence Of Your Company. To Produce Letterheads That Make An Impression On Your Correspondence, Our Creative Team Blends Precision And Creativity. Using Our Outstanding Letterhead Designs, You Can Elevate The Reputation Of Your Company And Leave A Lasting Impression In The Competitive Business Environment.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 mt-16"
          >
            <h2 className="text-[#000000] text-[24px] md:text-[28px] font-extrabold uppercase tracking-tight">
              BENEFITS OF HIRING US:
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 mt-12"
          >
            <h2 className="text-[#000000] text-[24px] md:text-[28px] font-extrabold uppercase tracking-tight">
              EXPERTISE AND EXPERIENCE:
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              Suggestinfo Offers An Extensive Array Of Knowledge And Experience. Due To Their Extensive Experience Working With Various Clients In Various Industries, Our Team Of Specialists Has A Profound Understanding Of Branding And Design. Due To This Knowledge, We Can Offer Customized Solutions That Meet The Specific Needs Of Your Online Presence.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 mt-12"
          >
            <h2 className="text-[#000000] text-[24px] md:text-[28px] font-extrabold uppercase tracking-tight">
              CUSTOMIZED BRANDING:
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              We Don't Believe In One-Size-Fits-All Solutions. When You Choose Suggestinfo, You Can Expect A Brand Kit Meticulously Tailored To Your Specific Needs. We Take The Time To Understand Your Brand Identity And Objectives, Ensuring That Every Element Of Your Brand Kit Reflects Your Vision.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 mt-12"
          >
            <h2 className="text-[#000000] text-[24px] md:text-[28px] font-extrabold uppercase tracking-tight">
              COMPREHENSIVE SERVICES:
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              Suggestinfo Provides A Comprehensive Range Of Branding Services, Encompassing Everything From Website Building To Logo Design. This Means That You Can Coordinate Your Branding Initiatives And Handle All Of Your Branding Requirements With A Single, Reliable Partner.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 mt-12"
          >
            <h2 className="text-[#000000] text-[24px] md:text-[28px] font-extrabold uppercase tracking-tight">
              TIMELY DELIVERY:
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              At Suggestinfo, On Time Delivery Of Your Brand Kit Is Our Top Priority. We Promise There Won't Be Any Inconvenience Or Delays While Launching Your Brand Or Making Changes Because We Are Committed To Achieving Deadlines.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 mt-12"
          >
            <h2 className="text-[#000000] text-[24px] md:text-[28px] font-extrabold uppercase tracking-tight">
              QUALITY AND CREATIVITY:
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              At The Core Of What We Do Are Quality And Innovation. In Addition To Being Aesthetically Pleasing, Our Designs Make Sense Strategically. We Add Uniqueness To Each Element Of Your Brand Kit To Ensure It Stands Out In An Increasingly Competitive Marketplace.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 mt-12"
          >
            <h2 className="text-[#000000] text-[24px] md:text-[28px] font-extrabold uppercase tracking-tight">
              GET IN TOUCH WITH US:
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              Feel Free To Contact Us With Any Questions, Inquiries, Or Collaboration Opportunities Regarding Our Brand Kit Services. Our Team Assists You In Creating A Brand That Truly Resonates With Your Audience And Sets You Apart In The Vibrant Market. We Look Forward To Hearing From You And Joining Your Brand's Journey.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <span className="inline-block bg-[#053b3c] text-white text-[20px] font-normal px-12 py-3 rounded-full">
              FAQ'S:
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 mt-12"
          >
            <h2 className="text-[#000000] text-[24px] md:text-[28px] font-extrabold uppercase tracking-tight">
              1. CAN YOU USE BRAND KIT FOR ONLINE AND OFFLINE MARKETING?
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              The Adaptation Of A Brand Kit To Numerous Marketing Channels Is What Gives It Its Versatility. It Provides The Framework For Developing A Recognizable And Consistent Brand Identity Across Print, Digital, And Signage Assets, Including Business Cards, Social Media, Print Collateral, Websites, And More.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 mt-12"
          >
            <h2 className="text-[#000000] text-[24px] md:text-[28px] font-extrabold uppercase tracking-tight">
              2. WHAT IS THE EXPECTED RETURN ON INVESTMENT (ROI) FOR A BRAND KIT?
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              A Brand Kit Can Provide Amazing Effects If It Is Well-Designed And Used Regularly. The Results Of This Work Include Increased Brand Awareness, Customer Loyalty, And Trust. All Of These Support Long-Term Company Expansion And Increased Profitability, And It Is A Wise Investment With Long-Term Advantages.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 mt-12"
          >
            <h2 className="text-[#000000] text-[24px] md:text-[28px] font-extrabold uppercase tracking-tight">
              3. CAN YOU USE A BRAND KIT FOR PERSONAL BRANDING?
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              Yes, Brand Kit Can Be Tailored For Personal Branding, Enabling People To Create A Polished Online Presence. Professionals May Project A Unified And Outstanding Image By Using Their Logos, Color Schemes, And Design Components, Which Help Them To Get Recognition And Trust In The Digital World.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 mt-12"
          >
            <h2 className="text-[#000000] text-[24px] md:text-[28px] font-extrabold uppercase tracking-tight">
              4. DO YOU PROVIDE ONGOING SUPPORT FOR MY BRAND KIT?
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium mb-4">
              Many Agencies Offer Ongoing Support To Guarantee Your Brand Kit Remains Relevant And Powerful. This Support Includes Updating It To Reflect Changing Market Trends, Keeping It Consistent, And Optimizing Its Efficacy In Communicating The Identity And Values Of Your Business.
            </p>
            <div>
              <ContactButton />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Contact Form */}
      <ContactSection 
        title={<>Get Quote For Brand<br />Kit Services</>}
      />

    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Hand } from 'lucide-react';
import { ContactSection } from '../../../components/ContactSection';
import lmsDevImg from '../../../assets/service/UAE/E learning/lms_dev.png';

export function LmsDubai() {
  return (
    <div className="w-full bg-white">
      {/* 1st Section: Hero Banner */}
      <section className="relative w-full h-[120px] md:h-[200px] flex items-center justify-center bg-gradient-to-r from-[#e0fff2] to-[#cbfce6]">
        <div className="relative z-10 text-center px-4 w-full">
          <h1 className="text-[#111827] text-[26px] md:text-[36px] lg:text-[44px] font-extrabold uppercase tracking-wide m-0 max-w-[900px] mx-auto leading-[1.2]">
            LEARNING MANAGEMENT SYSTEM<br className="hidden md:block" /> DEVELOPMENT IN DUBAI
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
                REDEFINING LEARNING WITH LMS<br /> DEVELOPMENT IN DUBAI
              </h2>
              <p className="text-[#374151] text-[15px] leading-[1.8] font-medium max-w-[500px]">
                We Develop A Personalized Learning Management System (LMS) That Facilitates The Development Of Innovative, Engaging, And User-Friendly Online Learning Programs.
              </p>
              <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
                Talk With Our Experts
              </p>
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
                src={lmsDevImg} 
                alt="LMS Development Dubai" 
                className="w-full max-w-[550px] object-contain shadow-sm"
              />
            </motion.div>

          </div>

          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-20 flex flex-col gap-4"
          >
            <h2 className="text-[#000000] text-[24px] md:text-[28px] font-extrabold uppercase tracking-tight">
              YOUR PREMIUM LMS DEVELOPMENT AGENCY IN DUBAI
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              At Suggest Info, We Make It Simple For Anyone To Use Electronic Media To Learn About A Subject Outside Of A Traditional Classroom. We Provide All Companies With A Broad Range Of Cutting-Edge And Modern E-Learning Services. Our Highly Skilled Technical Team Members Are Fairly Effective At Providing Premium E-Learning Software Services, And We Offer The Ideal Fusion Of Technology And Software Design. Our E-Learning Software Development Professionals Are Well-Versed In The Latest Technologies, And We Take Pride In Providing Our Esteemed Clients With Award-Winning E-Learning Products. As One Of The Leading Companies In Dubai That Is Developing E-Learning Software, Suggest Info, Makes Sure That Its Products Are Highly Efficient And Offer The Best ROI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3rd Section: Our Services */}
      <section className="py-20 relative bg-[#f4f7fc]">
        <div className="max-w-[1250px] mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-14">
            <h2 className="text-[#000000] text-[28px] md:text-[36px] font-extrabold uppercase tracking-tight mb-4">
              OUR SERVICES
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              We Can Create A Learning Management System Solution Customized To Your Specific Expertise. Here Is The List Of LMS Services We Offer With Confidence.
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
                <Hand className="w-6 h-6 rotate-90 fill-black text-black" />
                <h3 className="text-[20px] font-bold text-[#000000] leading-tight">
                  LMS Consultation
                </h3>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                Get Experienced LMS Consultancy Services And Support For All LMS-Related Tasks, Such As Necessary Analysis And Customized LMS Installation.
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
                <Hand className="w-6 h-6 rotate-90 fill-black text-black" />
                <h3 className="text-[20px] font-bold text-[#000000] leading-tight">
                  Enterprise LMS<br />Development
                </h3>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                Hire Our LMS Developers To Create Enterprise LMSs That Will Provide Your Team With Personalized Training, Progress Monitoring, And Learning For The Future.
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
                <Hand className="w-6 h-6 rotate-90 fill-black text-black" />
                <h3 className="text-[20px] font-bold text-[#000000] leading-tight">
                  Web & Mobile LMS<br />Development
                </h3>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                Use Web And Mobile LMS Development Services To Make Learning Accessible To Every Trainee. We Can Give You The Tools You Need To Create An LMS For The Web Or Mobile.
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
                <Hand className="w-6 h-6 rotate-90 fill-black text-black shrink-0" />
                <h3 className="text-[20px] font-bold text-[#000000] leading-tight">
                  Template and Theme<br />Development
                </h3>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                We Offer Attractive LMS Themes And Templates As Part Of Our Entire LMS Development Services. These Are Specifically Developed Based On The Company's Requirements. We Always Strive To Create Easy-To-Use Themes.
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
                <Hand className="w-6 h-6 rotate-90 fill-black text-black shrink-0" />
                <h3 className="text-[20px] font-bold text-[#000000] leading-tight">
                  LMS Integration
                </h3>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                Meet Your Mission-Based Objectives By Increasing The Efficiency And Utility Of Your Current Learning Management System (LMS). We Help With Any Kind Of Integration, Including APIs And Payments.
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
                <Hand className="w-6 h-6 rotate-90 fill-black text-black shrink-0" />
                <h3 className="text-[20px] font-bold text-[#000000] leading-tight">
                  LMS Modernization
                </h3>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                Using LMS Modernization Services, You Can Upgrade Your LMS, Stay Up To Date With Trends, And Exceed Your Training And Learning Goals. We Provide Continuous End-To-End Services.
              </p>
            </motion.div>

            {/* Card 7 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
              className="bg-white rounded-[24px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <Hand className="w-6 h-6 rotate-90 fill-black text-black shrink-0" />
                <h3 className="text-[20px] font-bold text-[#000000] leading-tight">
                  Extensions and Plugins
                </h3>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                The Creation Of Feature-Rich LMS Plugins Or Extensions Is An Added Service. These Services Improve The Functionality Of The E-Learning Website. Our Team Includes Proficient Developers Who Possess An Exceptional Ability To Generate New Ideas While Maintaining A Focus On Innovation In Our Products And Services.
              </p>
            </motion.div>

            {/* Card 8 */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 1.05, ease: "easeOut" }}
              className="bg-white rounded-[24px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <Hand className="w-6 h-6 rotate-90 fill-black text-black shrink-0" />
                <h3 className="text-[20px] font-bold text-[#000000] leading-tight">
                  Full-scale LMS<br />Customization
                </h3>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                Get The Best Possible Experience With Total LMS Customization For The Demands Unique To Your Domain And Organization. Our Experts Will Provide You With Comprehensive Customization.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4th Section: Our Process */}
      <section className="pb-20 relative bg-[#f4f7fc]">
        <div className="max-w-[1250px] mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-14">
            <h2 className="text-[#000000] text-[28px] md:text-[36px] font-extrabold uppercase tracking-tight mb-4">
              OUR LMS DEVELOPMENT PROCESS
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              Every Development Process At Suggest Info Starts With An Extensive Needs Assessment And A Strategy Audit That Is In Line With Your Company's Goals. Our Team Is Made Up Of LMS Developers, Designers, And Business Analysts. We Use An Agile Approach To Turn Ideas Into Workable Digital Solutions. Here's An Overview Of Our Extensive Process:
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
                <Hand className="w-6 h-6 rotate-90 fill-black text-black shrink-0" />
                <h3 className="text-[20px] font-bold text-[#000000] leading-tight">
                  Analysis and Planning
                </h3>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                During This Phase, We Gather The Necessary Information And Plan The Project By Establishing Its Goals And Parameters.
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
                <Hand className="w-6 h-6 rotate-90 fill-black text-black shrink-0" />
                <h3 className="text-[20px] font-bold text-[#000000] leading-tight">
                  Design and<br />Development
                </h3>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                The LMS's Features, Design, And Interactive Material Were Developed During This Period.
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
                <Hand className="w-6 h-6 rotate-90 fill-black text-black shrink-0" />
                <h3 className="text-[20px] font-bold text-[#000000] leading-tight">
                  Testing and<br />Deployment
                </h3>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                We Thoroughly Test The LMS After Development And Then Make It Available For Real-World Use.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5th Section: Why We Are The Best */}
      <section className="py-20 relative overflow-hidden bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="text-left mb-16 max-w-[1200px]">
            <h2 className="text-4xl md:text-[40px] font-extrabold text-[#000000] uppercase tracking-wide leading-tight mb-6">
              WHY WE ARE THE BEST
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              Are You Trying To Find The Best Way To Simplify Your Business Procedures But Are Having Trouble Finding It? Pick Suggest Info As Your Reliable Digital Partner To Get An Innovative Learning Management System That Will Improve Your Business Prospects:
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-4">Scalable Learning Management Systems</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Our LMS service caters to companies of all sizes and can adapt to your evolving needs. As your business grows, customized platforms keep things simple for optimal productivity while allowing flexible training and fostering staff development.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-4">Budget-Friendly Training Platforms</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Our area of expertise is providing low-cost LMS systems that can be used by companies of any size. Our affordable authorization options ensure smooth onboarding and a trained workforce without any financial burden by reducing training expenses.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-4">User-Friendly</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Suggest Info offers a personalized and easily navigable selection of topics combined with practical features. We guarantee that any customizable feature will have the highest level of security across all modules.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-4">Detailed Data Analysis And Reporting</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Detailed reports are essential for efficiently addressing any challenges and also demonstrate the progress of the product. We are here to make sure you have all you need to succeed.
                </p>
              </motion.div>
            </div>

            {/* Card 5 (Centered) */}
            <div className="flex justify-center mt-5 md:mt-8 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.85, ease: "easeOut" }}
                className="bg-gradient-to-br from-[#f8faff] to-[#e2ecfa] p-8 md:p-10 rounded-[28px] shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-shadow duration-300 w-full max-w-[600px]"
              >
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-4">Affordable Solutions And Support Services</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Our developers have always prioritized creating reusable learning technologies, which translates into quicker launches. At Suggest Info, support services are offered as needed and in accordance with the needs of the customers.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactSection 
        title={<>Get Quote For LMS<br />Development</>}
      />

    </div>
  );
}

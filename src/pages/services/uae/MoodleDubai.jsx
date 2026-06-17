import React from 'react';
import { motion } from 'framer-motion';
import { Hand } from 'lucide-react';
import { ContactButton } from '../../../components/ContactButton';
import moodleDevImg from '../../../assets/service/UAE/E learning/Moodle_dev.png';

export function MoodleDubai() {
  return (
    <div className="w-full bg-white">
      {/* 1st Section: Hero Banner */}
      <section className="relative w-full h-[120px] md:h-[200px] flex items-center justify-center bg-gradient-to-r from-[#e0fff2] to-[#cbfce6]">
        <div className="relative z-10 text-center px-4 w-full">
          <h1 className="text-[#111827] text-[26px] md:text-[36px] lg:text-[44px] font-extrabold uppercase tracking-wide m-0 max-w-[900px] mx-auto leading-[1.2]">
            MOODLE DEVELOPMENT SERVICES IN DUBAI
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
                CUSTOMIZED MOODLE<br /> DEVELOPMENT SERVICES
              </h2>
              <p className="text-[#374151] text-[15px] leading-[1.8] font-medium max-w-[500px]">
                Suggest Info Is A Well-Known Moodle Development Agency For Startups, Small Businesses, And Enterprises In Dubai. Our Personalized <strong>Moodle Development Services In Dubai</strong> Offer Maximum Benefit To Your Company.
              </p>
              <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
                Get An Estimate
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
                src={moodleDevImg} 
                alt="Moodle Development Services Dubai" 
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
              YOUR PREMIUM MOODLE DEVELOPMENT AGENCY IN DUBAI
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              Are You Looking For A Competent <strong>Moodle Development Service In Dubai</strong> For Your Institutions E-Learning Portals The Most Suitable And Cost-Effective Choice For You Would Be To Partner With Suggest Info.
            </p>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              Whether You're Looking For Expert Assistance To Enhance The Functionality Of Your Current Website Or Want To Start From Scratch And Build A New Portal, Suggest Info Offers The Best Service. Our Team Comprises Proficient Moodle Developers With Vast Expertise And A Fundamental Understanding Of Moodle Development.
            </p>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              We Use The Right People, Processes, And Technology To Create Innovative Moodle Development Solutions That Turn Your Concepts Into Cutting-Edge E-Learning Portals. Our Moodle Solutions Are Made To Give Companies In Dubai The Best Possible ROI.
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
              As A Trusted <strong>Moodle Development Service Provider In Dubai,</strong> We Can Completely Revamp Your Educational Activities And Ecosystems With A Variety Of Moodle Services:
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
                  Moodle Consultancy<br />Services
                </h3>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                We Offer Professional Support And Assistance To Lead You In The Best Use Of Your Moodle LMS Platform, Allowing You To Make Educated Choices That Will Maximize The Value For Your Company.
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
                  Moodle Design and<br />Development Services
                </h3>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                Our Custom Development Services Offer An Unprecedented User Experience By Making Your Moodle Platforms Appearance And User Interface To Match Your Brand, And Unique Learning Requirements.
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
                  Developing Customized<br />Moodle Plugins
                </h3>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                Our Skilled Moodle Developers Assist In Creating Personalized Plugins That Enhance Your Moodle Platform With Specific Features And Functionalities That Meet Your Particular Needs To Help You Succeed In Dubai.
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
                  Moodle Support and<br />Maintenance Services
                </h3>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                We Offer Maintenance And Support Services That Include Bug Fixes And Maintenance. To Guarantee The Continuous Smooth Operation Of Your Moodle Platform.
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
                  Smooth Moodle<br />Integration
                </h3>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                We Assist In Integrating Your Moodle E-Learning Platform With Other Programs And Resources Through Seamless Moodle Integrations, Connecting Multiple Systems To Create An Easy Learning Environment.
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
              OUR DEVELOPMENT PROCESS
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              We Provide Your Educational Business With A One-Stop Moodle Solution. With Our 3D Development Process, We Offer The Best Moodle Development Solution. Our Development Process Makes Suggest Info A Leading <strong>Moodle Development Service Provider In Dubai.</strong>
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
                  Discover
                </h3>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                We Analyze The Barriers In Learning Process, Identify The Target Group In Dubai. We Create LMS Courseware That Fits The Platform And The Way Your Courses Are Delivered Are Most Appropriate For The Target Audience.
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
                  Develop
                </h3>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                We Develop Moodle Solutions That Are Aimed To Help You Control Pace Of Learning And That Assist In Providing Knowledge In A Structured Way.
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
                  Deploy
                </h3>
              </div>
              <p className="text-[#4b5563] text-[14px] leading-[1.8] font-medium">
                We Walk You Through The Process At Every Stage To Help You Set Up Your Personalized Moodle Platform. We Measure The Appropriateness To Make Sure Your Training Is Efficient And Values Being Delivered.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5th Section: Why Select Suggest Info */}
      <section className="py-20 relative overflow-hidden bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="text-left mb-16 max-w-[1200px]">
            <h2 className="text-4xl md:text-[40px] font-extrabold text-[#000000] uppercase tracking-wide leading-tight mb-6">
              WHY SELECT SUGGEST INFO?
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium">
              To Satisfy The Needs Of Businesses In Dubai, We At Suggest Info Work Hard To Provide The Best Personalized <strong>Moodle Development Solutions In Dubai.</strong> We Aspire To Collaborate With You On Every Facet Of The Project, Never Sacrificing Service Quality.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-4">Extensive Moodle Expertise</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  We have a team of highly qualified and experienced <strong>Moodle developers in Dubai</strong> who are knowledgeable about every aspect of the Moodle learning management system. Our experts can develop specialized solutions that meet the particular needs of educational institutions, businesses, and online learning platforms.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-4">Tailored Moodle Solutions</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Suggest Info is aware of the unique e-learning requirements of every enterprise. A common-for-all strategy is not something we endorse. We collaborate closely with you to fully grasp your unique objectives and needs before customizing Moodle solutions that support your vision.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-4">Reliable Customer Support</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  Our committed team is on hand to provide customer service and is ready to answer any questions or deal with any issues that may arise. Our professional team will provide reliable, clear, actionable, and willing to go above and beyond to address any issues you have regarding Moodle development.
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
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#000000] mb-4">Timely Implementation</h3>
                <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                  We are aware of how crucial meeting deadlines is. We have effective procedures in place to guarantee that your educational platform is completed and delivered with a minimum number of delays.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 6th Section: Contact */}
      <section className="py-20 relative bg-[#f4f7fc]">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-10 text-left">
            <h2 className="text-[#000000] text-[28px] md:text-[36px] font-extrabold uppercase tracking-tight mb-4">
              HAVE A GREAT IDEA? LET'S TALK ABOUT THE PROJECT!
            </h2>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium mb-4">
              At Suggest Info, We Pride Ourselves On Providing The Best <strong>Moodle Development Service In Dubai</strong> With Affordable Budget. Without Sacrificing The Standard Of Your Project, Our Custom Moodle System Team Will Make Every Effort To Deliver You Solutions That Will Leave You Completely Satisfied.
            </p>
            <p className="text-[#374151] text-[15px] leading-[1.8] font-medium italic">
              Get in touch with us to know more.
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

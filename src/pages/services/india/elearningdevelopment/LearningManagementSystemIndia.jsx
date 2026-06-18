import React from 'react';
import { motion } from 'framer-motion';
import { ContactSection } from '../../../../components/ContactSection';
import { ContactButton } from '../../../../components/ContactButton';

export function LearningManagementSystemIndia() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[160px] md:h-[240px] flex items-center justify-center bg-gradient-to-r from-[#ccffe6] to-[#e6fff2]">
        <div className="relative z-10 text-center px-4 w-full">
          <h1 className="text-[#111827] text-[28px] md:text-[40px] lg:text-[48px] font-bold uppercase tracking-wide m-0 leading-[1.15]">
            LEARNING MANAGEMENT SYSTEM<br />DEVELOPMENT SERVICES IN INDIA
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <div className="inline-block px-8 py-3 bg-[#0a2e2c] text-white rounded-[30px] text-[18px] mb-10 tracking-wide">
          Why Choose
        </div>

        <h2 className="text-[24px] md:text-[32px] font-bold text-[#111827] uppercase mb-6">
          MOODLE (LEARNING MANAGEMENT SYSTEM) DEVELOPMENT SERVICES
        </h2>
        <p className="text-gray-800 text-[15px] leading-relaxed font-medium mb-16">
          The World Is Moving Online, And There Is No Exception To The Classrooms. E Learning/ Online Training Are On Trend. This Give High Flexibility To Both The Tutor And Students. Large Institutes As Well As Individual Tutors Are Gaining Benefits From Learning Management System. This Also Allows The Students To Take Tests, Quiz And Allow Easy Coordination And Discussions With Fellow Students. Many Individual Tutors Are Sharing Their Knowledge Online Through These Learning Management Systems At An Affordable Prices, This Allows Them To Earn Money Without Spending Much Time When Compared To Offline Classes And Also Benefits The Students Offering Them The Flexibility To Learn Whenever And Where Ever Possible At Very Affordable Price. Due To These Huge Benefits The Educational System Is Fast Adopting These Learning Management Systems.
        </p>

        <h2 className="text-[24px] md:text-[32px] font-bold text-[#111827] uppercase mb-6">
          WHAT IS MOODLE FOR LEARNING MANAGEMENT SYSTEM?
        </h2>
        <p className="text-gray-800 text-[15px] leading-relaxed font-medium mb-16">
          Moodle Is One Of The Most Powerful Open Source Learning System Which Is Developed In PHP. Being Open Source And Feature Rich Platform ,It Has Gained Huge Popularity And Allows Developing Customized Learning Management Systems Which Are Flexible. The Plugins And Add Ons Moodle Provides Makes It The Most Effective Platform To Develop Customized Learning Management System.
        </p>

        <h2 className="text-[24px] md:text-[32px] font-bold text-[#111827] uppercase mb-6">
          WHY CHOOSE US?
        </h2>
        <div className="space-y-6">
          <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
            With Years Of Experience Suggestinfo In Chennai, India In Developing Scalable Learning Management Systems Using Moodle , We Are Ranked As One Of The Best Moddle Development Companies In India. Our Services From Suggestinfo In Chennai, India Include Customized Moodle Web Application Development, Moodle Mobile Application Development And Moodle Integration. We Also Enhance Your Existing Learning Management System With Customized Plugins And Addons. Right From Development, Testing, Maintenance And Plugins We Provide Complete Learning Management Development Solutions To Institute And Individuals At Affordable Prices. The LMS Systems We Provide Are Highly Flexible And Can Be Enhanced, Customized According To The Increasing Requirements. We Also Provide Continuous Maintenance Support For The Learning Management Systems We Develop.
          </p>
          <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
            So, If You Are Looking For Someone Who Can Develop A Customized Learning Management System With The Most Latest Technology Like Moodle, Contact Suggestinfo In Chennai, India.
          </p>
        </div>

        <div className="mt-10">
          <ContactButton />
        </div>
      </section>

      {/* Bottom Contact Form */}
      <ContactSection 
        title={<>Get Quote For Your<br />LMS Development</>}
        subtitle="Call us for fast support to this number."
      />
    </div>
  );
}

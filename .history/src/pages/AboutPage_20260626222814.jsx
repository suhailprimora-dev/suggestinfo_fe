import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';

/* ── Asset imports ─────────────────────────────── */
import heroImg from '../assets/ABOUT US/About-Us.png';
import teamImg from '../assets/ABOUT US/Best-Digital-Agency-1.png';
import firstWorkImg from '../assets/firstt-work.png.png';
import dedicatedImg from '../assets/Dedicated-Team-Member.png.png';
import supportImg from '../assets/247-Hours.png.png';
import icon1 from '../assets/Overlay+Shadow.png';
import icon2 from '../assets/Overlay+Shadow-1.png';
import icon3 from '../assets/Overlay+Shadow-2.png';
import icon4 from '../assets/Overlay+Shadow-3.png';

/* ── Gradient button class (green → lime) ─────── */
const gradientBtn = 'inline-flex items-center gap-2 text-white font-bold rounded-lg transition-all shadow-lg hover:opacity-90 active:scale-95';
const gradientStyle = { background: 'linear-gradient(to right, #3cc994, #8dc63f)' };

/* ── Animated floating dot ────────────────────── */
function FloatingDot({ x, y, size = 10, color = '#3cc994', duration = 6, delay = 0 }) {
  const scaledSize = size * 0.4; // Make bubbles smaller
  return (
    <motion.span
      className="absolute rounded-full pointer-events-none"
      style={{
        left: x,
        top: y,
        width: scaledSize,
        height: scaledSize,
        backgroundColor: color,
        opacity: 0.55,
      }}
      animate={{
        x: [0, 120, -100, 80, -70, 0], // Increased movement
        y: [0, -110, 90, -80, 120, 0], // Increased movement
        scale: [1, 1.25, 0.85, 1.15, 0.9, 1],
        opacity: [0.55, 0.8, 0.45, 0.7, 0.4, 0.55],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

/* ── Animation presets ─────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

/* ── Static data ────────────────────────────────── */

const wcuItems = [
  {
    img: firstWorkImg,
    alt: 'First Working Process',
    color: 'text-[#3cc994]',
    title: 'First Working Process',
    desc: 'For us, the growth of our clients is the priority because when they grow, we also grow. We are not the newcomers in the industry; we have a team of experts who have years of experience plus a group of fresh talent present unique ideas.',
  },
  {
    img: dedicatedImg,
    alt: 'Dedicated Team Member',
    color: 'text-[#3cc994]',
    title: 'Dedicated Team Member',
    desc: 'We work on the latest technology and use our creative approach and imagination skills to help you have a unique and user-friendly website. We believe in generating the maximum profit for our users',
  },
  {
    img: supportImg,
    alt: '24/7 Hours Support',
    color: 'text-[#3cc994]',
    title: '24/7 Hours Support',
    desc: 'Our team is expert in the field, and we have the skills and experience to provide you with the best services in the industry Suggestinfo support you 24 Hours.',
  },
];

const testimonials = [
  {
    text: 'We have been with suggest info for 2 years and they are doing an excellent digital marketing and web development services to two of our websites. we suggest they are the best digital marketing company in Chennai for digital marketing needs..',
    author: 'Course Suggest',
    role: 'Customer',
  },
  {
    text: 'We have been with suggestinfo for 2 years and they are doing an excellent digital marketing and web development service for our websites. They are highly responsive and dedicated.',
    author: 'Cougar Rugged',
    role: 'Founder',
  },
  {
    text: 'Suggestinfo transformed our online presence. Their custom website development and SEO strategy helped us double our traffic and customer inquiries within a few months.',
    author: 'Sarah Jenkins',
    role: 'Marketing Director',
  },
  {
    text: 'Very good SEO service company in chennai. They increased our traffic to 200% Last year',
    author: 'John Carter',
    role: 'Customer',
  },
  {
    text: 'A professional web development agency, They deliver our website project on time and in good quality',
    author: 'mike david',
    role: 'Customer',
  },
];

/* ── Component ──────────────────────────────────── */
export function AboutPage() {
  const [activeT, setActiveT] = useState(0);

  return (
    <div className="w-full bg-white text-[#696687] font-['Poppins',sans-serif] text-[18px] font-normal leading-[27px] selection:bg-[#6254e7] selection:text-white">

      {/* ════════════════════════════════════════
          1 · HERO
      ════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#e8f8f5' }} className="pt-16 pb-12 text-center relative overflow-hidden">

        {/* Animated floating dots */}
        <FloatingDot x="8%" y="45%" size={8} color="#f97316" duration={7} delay={0} />
        <FloatingDot x="12%" y="50%" size={6} color="#06b6d4" duration={8} delay={1} />
        <FloatingDot x="7%" y="65%" size={8} color="#d946ef" duration={6} delay={2} />
        <FloatingDot x="75%" y="6%" size={8} color="#a855f7" duration={9} delay={0.5} />
        <FloatingDot x="90%" y="60%" size={6} color="#eab308" duration={7} delay={3} />
        <FloatingDot x="82%" y="85%" size={8} color="#ef4444" duration={10} delay={1.5} />
        <FloatingDot x="20%" y="15%" size={22} color="#3cc994" duration={8} delay={0.2} />
        <FloatingDot x="35%" y="75%" size={18} color="#00b4d8" duration={9} delay={1.2} />
        <FloatingDot x="60%" y="20%" size={28} color="#f59e0b" duration={11} delay={0.8} />
        <FloatingDot x="85%" y="30%" size={24} color="#ec4899" duration={7} delay={2.1} />
        <FloatingDot x="45%" y="85%" size={16} color="#8b5cf6" duration={10} delay={1.5} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-[26px] text-gray-800 font-['Poppins',sans-serif] font-extralight uppercase antialiased tracking-[-0.01em] mb-4">
              ABOUT US
            </p>
            <div className="w-full">
              <h1 className="text-center text-[#080808] font-['Poppins',sans-serif] text-[44px] font-bold leading-[66px] mb-3">
                Specializing in creative digital marketing and <br />
                web development
              </h1>
            </div>
            <p className="text-[15px] md:text-[17px] text-[#15803d] font-medium  font-['Poppins',sans-serif]  mb-5 max-w-3xl mx-auto">
              we ensure top-notch services by crafting impactful to meet your unique business needs.
            </p>
          </motion.div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          className="w-full max-w-[1220px] mx-auto px-6 relative z-10 pb-8"
        >
          <img
            src={heroImg}
            alt="Digital marketing dashboard with analytics and data visualization"
            className="w-full object-cover block rounded-[2rem] shadow-2xl mx-auto"
          />
        </motion.div>
      </section>

      {/* ════════════════════════════════════════
          2 · WHAT WE DO
      ════════════════════════════════════════ */}
      <section className="bg-white py-20 relative overflow-hidden">

        {/* Animated dots */}
        <FloatingDot x="5%" y="10%" size={10} color="#3cc994" duration={8} delay={0} />
        <FloatingDot x="25%" y="5%" size={7} color="#b5d334" duration={7} delay={1} />
        <FloatingDot x="50%" y="8%" size={8} color="#f59e0b" duration={9} delay={2} />
        <FloatingDot x="75%" y="6%" size={6} color="#00b4d8" duration={6} delay={0.5} />
        <FloatingDot x="90%" y="12%" size={9} color="#e879f9" duration={8} delay={3} />
        <FloatingDot x="15%" y="85%" size={8} color="#f59e0b" duration={7} delay={1} />
        <FloatingDot x="85%" y="80%" size={7} color="#3cc994" duration={9} delay={2} />
        <FloatingDot x="55%" y="90%" size={6} color="#b5d334" duration={8} delay={0} />
        <FloatingDot x="10%" y="40%" size={24} color="#3cc994" duration={10} delay={0.5} />
        <FloatingDot x="30%" y="60%" size={18} color="#00b4d8" duration={8} delay={1.5} />
        <FloatingDot x="70%" y="45%" size={28} color="#f59e0b" duration={12} delay={2} />
        <FloatingDot x="92%" y="35%" size={20} color="#ec4899" duration={9} delay={0.8} />
        <FloatingDot x="40%" y="30%" size={16} color="#8b5cf6" duration={7} delay={2.5} />

        <div className="max-w-screen-xl mx-auto px-10 relative z-10">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-[38px] md:text-[33px] font-['Poppins',sans-serif] font-[800] text-gray-900 mb-3">
              WHAT WE DO
            </h2>
            <p className="text-[22px] text-gray-900 font-['Poppins',sans-serif]">
              Empowering Your Business Online With Our Expertise
            </p>
          </div>

          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* Card 1 */}
            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -10,
                boxShadow: "0 50px 70px rgba(0, 0, 0, 0.5)",
                borderColor: "rgba(60, 201, 148, 0.4)"
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="service-card bg-white border border-slate-100 rounded-3xl pt-4 pb-6 px-6 flex flex-col shadow-2xl shadow-black/30 cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-24 h-24 mb-3 flex-shrink-0">
                <img
                  src={icon1}
                  alt="Custom Website Development"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title — teal */}
              <h3 className="text-[20px] font-bold text-[#3cc994] mb-3 leading-snug">
                Custom Website Development
              </h3>

              {/* Description */}
              <p className="text-[14px] text-gray-500 leading-relaxed mb-7 flex-1">
                We develop custom static and dynamic websites using HTML, PHP, .NET, Javascript.
              </p>

              {/* Gradient Learn More button */}
              <a
                href="/services"
                className={`${gradientBtn} text-[14px] px-6 py-2.5 justify-center self-start w-fit`}
                style={gradientStyle}
              >
                Learn More
              </a>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -10,
                boxShadow: "0 50px 70px rgba(0, 0, 0, 0.5)",
                borderColor: "rgba(60, 201, 148, 0.4)"
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="service-card bg-white border border-slate-100 rounded-3xl pt-4 pb-6 px-6 flex flex-col shadow-2xl shadow-black/30 cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-24 h-24 mb-3 flex-shrink-0">
                <img
                  src={icon2}
                  alt="Website Maintenance and Services"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title — teal */}
              <h3 className="text-[20px] font-bold text-[#3cc994] mb-3 leading-snug">
                Website Maintenance and Services
              </h3>

              {/* Description */}
              <p className="text-[14px] text-gray-500 leading-relaxed mb-7 flex-1">
                Whether you are a retail store owner or a multi-retailer, we help you to sell your product online.
              </p>

              {/* Gradient Learn More button */}
              <a
                href="/services"
                className={`${gradientBtn} text-[14px] px-6 py-2.5 justify-center self-start w-fit`}
                style={gradientStyle}
              >
                Learn More
              </a>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -10,
                boxShadow: "0 50px 70px rgba(0, 0, 0, 0.5)",
                borderColor: "rgba(60, 201, 148, 0.4)"
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="service-card bg-white border border-slate-100 rounded-3xl pt-4 pb-6 px-6 flex flex-col shadow-2xl shadow-black/30 cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-24 h-24 mb-3 flex-shrink-0">
                <img
                  src={icon3}
                  alt="SEO (Search Engine Optimization)"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title — teal */}
              <h3 className="text-[20px] font-bold text-[#3cc994] mb-3 leading-snug">
                SEO (Search Engine Optimization)
              </h3>

              {/* Description */}
              <p className="text-[14px] text-gray-500 leading-relaxed mb-7 flex-1">
                By executing advanced Search Engine Optimization tactics we optimize your website.
              </p>

              {/* Gradient Learn More button */}
              <a
                href="/services"
                className={`${gradientBtn} text-[14px] px-6 py-2.5 justify-center self-start w-fit`}
                style={gradientStyle}
              >
                Learn More
              </a>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -10,
                boxShadow: "0 50px 70px rgba(0, 0, 0, 0.5)",
                borderColor: "rgba(60, 201, 148, 0.4)"
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="service-card bg-white border border-slate-100 rounded-3xl pt-4 pb-6 px-6 flex flex-col shadow-2xl shadow-black/30 cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-24 h-24 mb-3 flex-shrink-0">
                <img
                  src={icon4}
                  alt="UI/UX and Graphic Design"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title — teal */}
              <h3 className="text-[20px] font-bold text-[#3cc994] mb-3 leading-snug">
                UI/UX and Graphic Design
              </h3>

              {/* Description */}
              <p className="text-[14px] text-gray-500 leading-relaxed mb-7 flex-1">
                Creating intuitive interfaces and visually engaging designs for an exceptional user experience.
              </p>

              {/* Gradient Learn More button */}
              <a
                href="/services"
                className={`${gradientBtn} text-[14px] px-6 py-2.5 justify-center self-start w-fit`}
                style={gradientStyle}
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          3 · UAE BEST DIGITAL AGENCY
      ════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#002F32' }} className="py-16 relative overflow-hidden">

        {/* Animated dots on dark bg */}
        <FloatingDot x="50%" y="5%" size={10} color="#3cc994" duration={7} delay={0} />
        <FloatingDot x="5%" y="45%" size={8} color="#f59e0b" duration={8} delay={1} />
        <FloatingDot x="92%" y="55%" size={7} color="#b5d334" duration={9} delay={2} />
        <FloatingDot x="30%" y="88%" size={9} color="#e879f9" duration={6} delay={0.5} />
        <FloatingDot x="75%" y="92%" size={7} color="#3cc994" duration={8} delay={3} />
        <FloatingDot x="15%" y="25%" size={26} color="#3cc994" duration={9} delay={0.4} />
        <FloatingDot x="80%" y="20%" size={22} color="#00b4d8" duration={11} delay={1.1} />
        <FloatingDot x="45%" y="70%" size={32} color="#f59e0b" duration={8} delay={1.8} />
        <FloatingDot x="65%" y="40%" size={18} color="#ec4899" duration={10} delay={2.2} />
        <FloatingDot x="25%" y="65%" size={20} color="#8b5cf6" duration={7} delay={0.9} />

        <div className="max-w-screen-xl mx-auto px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="w-full lg:ml-4"
            >
              <p className="text-[19px] font-regular text-[#B6D43D] font-['Poppins',sans-serif] tracking-[0.1em] uppercase mb-2">
                DIGITAL EXCELLENCE SIMPLIFIED
              </p>
              <h2 className="text-[48px] whitespace-nowrap font-['Poppins',sans-serif] font-[800] text-white tracking-tight leading-tight mb-6">
                UAE Best Digital Agency
              </h2>
              <p className="text-[15px] text-white leading-relaxed tracking-[0.035em] mb-4 font-['Poppins',sans-serif]">
                We are a bunch of creative nerds specializing in digital marketing and web development. We help you build a creative website that brings you better traffic. We ensure top-notch services to our clients with a hardworking team of professionals certified from Google Adwords and Analytics. We bring you the right knowledge and make sure that our services bring you continuous profit.
              </p>
              <p className="text-[15px] text-white leading-relaxed tracking-[0.035em] mb-4 font-['Poppins',sans-serif]">
                Just like marketing is the most important thing for every business, having a website is essential for digital marketing. If your site is impactful and attracts visitors to engage with you, you are done with the first step. Because in sales, the very first step is to bring a visitor, once the conversation starts, there are chances of a deal too. What attracts the users most about your website is the website design, and this is where we help you.
              </p>
              <p className="text-[15px] text-white leading-relaxed tracking-[0.035em] font-['Poppins',sans-serif]">
                We build a website according to the type of your business, the needs of your business, and what you want in the design. We have worked for everyone from small businesses to high-class companies, and thus we understand your requirements thoroughly.
              </p>
            </motion.div>

            {/* Right: image + button */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-6 w-full max-w-[500px] mx-auto lg:ml-12"
            >
              <img
                src={teamImg}
                alt="UAE digital agency team collaborating"
                className="w-full h-auto rounded-2xl object-cover shadow-2xl"
              />
              <div className="flex justify-center">
                <a
                  href="/services"
                  className={`${gradientBtn} text-[14px] px-7 py-2.5`}
                  style={gradientStyle}
                >
                  OUR SERVICES <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          4 · WHY CHOOSE US
      ════════════════════════════════════════ */}
      <section className="bg-white py-20 relative overflow-hidden">

        <FloatingDot x="12%" y="15%" size={12} color="#3cc994" duration={7} delay={0} />
        <FloatingDot x="35%" y="10%" size={8} color="#b5d334" duration={8} delay={1.5} />
        <FloatingDot x="65%" y="12%" size={10} color="#f59e0b" duration={6} delay={0.5} />
        <FloatingDot x="85%" y="8%" size={7} color="#00b4d8" duration={9} delay={2} />
        <FloatingDot x="95%" y="25%" size={14} color="#e879f9" duration={10} delay={1} />
        <FloatingDot x="5%" y="75%" size={9} color="#f59e0b" duration={8} delay={2.5} />
        <FloatingDot x="25%" y="85%" size={11} color="#3cc994" duration={7} delay={0.5} />
        <FloatingDot x="45%" y="90%" size={8} color="#b5d334" duration={9} delay={3} />
        <FloatingDot x="75%" y="80%" size={12} color="#00b4d8" duration={6} delay={1.2} />
        <FloatingDot x="90%" y="70%" size={10} color="#ec4899" duration={8} delay={2.2} />
        <FloatingDot x="15%" y="45%" size={20} color="#3cc994" duration={11} delay={0.8} />
        <FloatingDot x="80%" y="50%" size={18} color="#f59e0b" duration={10} delay={1.8} />

        <div className="max-w-screen-xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-12 gap-14 items-start relative z-10">

          <motion.div
            className="lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-[19px] font-semibold  text-[#002F32] uppercase tracking-wide mb-3">
              WHY CHOOSE US
            </p>
            <h2 className="text-[28px] lg:text-[34px] font-['Poppins',sans-serif] font-[800] text-black leading-[1.3] w-full mb-5">
              Save Time &amp; Effort With The Suggestinfo
            </h2>
            <p className="text-[16px] text-black leading-relaxed mb-10 w-full">
              Specializing in creative digital marketing and web development, we ensure top-notch services and sustained profitability Specializing in creative digital .
            </p>
            <a
              href="/contact"
              className={`${gradientBtn} text-[14px] px-7 py-2.5 rounded-lg font-bold`}
              style={gradientStyle}
            >
              CONTACT US &rarr;
            </a>
          </motion.div>

          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {wcuItems.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="border border-gray-500 rounded-2xl p-6 lg:p-7 flex items-center gap-6 lg:gap-8 bg-white shadow-[0_8px_25px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-[110px] h-[90px] flex-shrink-0 overflow-hidden flex items-center justify-center bg-transparent">
                  <img src={item.img} alt={item.alt} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[20px] font-[700] mb-2 text-[#5dc67b]">{item.title}</h3>
                  <p className="text-[14px] text-[#4b5563] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          5 · TESTIMONIALS
      ════════════════════════════════════════ */}
      <section className="bg-white py-20 relative overflow-hidden">

        {/* Background wave shape at bottom half */}
        <div className="absolute bottom-0 left-0 right-0 h-[32%] bg-[#e8f8f5] z-0">
          <div className="absolute -top-[99px] left-0 right-0 h-[100px] overflow-hidden pointer-events-none">
            <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full h-full fill-[#e8f8f5]">
              <path d="M0,80 C360,160 1080,160 1440,80 L1440,200 L0,200 Z" />
            </svg>
          </div>
        </div>

        <FloatingDot x="8%" y="20%" size={14} color="#3cc994" duration={8} delay={0} />
        <FloatingDot x="28%" y="15%" size={9} color="#b5d334" duration={7} delay={1} />
        <FloatingDot x="58%" y="12%" size={11} color="#f59e0b" duration={9} delay={0.5} />
        <FloatingDot x="78%" y="22%" size={8} color="#00b4d8" duration={6} delay={2} />
        <FloatingDot x="92%" y="18%" size={12} color="#e879f9" duration={10} delay={1.5} />
        <FloatingDot x="12%" y="85%" size={10} color="#f59e0b" duration={7} delay={2.5} />
        <FloatingDot x="32%" y="92%" size={12} color="#3cc994" duration={9} delay={0.5} />
        <FloatingDot x="52%" y="88%" size={9} color="#b5d334" duration={8} delay={3} />
        <FloatingDot x="82%" y="82%" size={11} color="#00b4d8" duration={7} delay={1.2} />
        <FloatingDot x="95%" y="65%" size={13} color="#ec4899" duration={9} delay={2.2} />
        <FloatingDot x="20%" y="55%" size={22} color="#3cc994" duration={11} delay={0.8} />
        <FloatingDot x="75%" y="45%" size={19} color="#f59e0b" duration={10} delay={1.8} />

        <div className="w-full px-6 relative z-10">
          <div className="mb-3 text-left">
            <span className="inline-block text-[12px] font-regular   text-black uppercase border border-gray-300 rounded-full px-4  bg-white shadow-sm font-['Poppins',sans-serif]">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-left leading-tight mb-12 font-['Poppins',sans-serif]">
            <span className="block text-[px] lg:text-4xl font-[500] text-black mb-1">Clients Review</span>
            <span className="block text-4xl lg:text-[50px] font-[700] text-[#279B89]">What Our Client's Say</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-nunito relative w-full max-w-[780px] mx-auto border border-gray-200 bg-white rounded-tl-none rounded-br-none rounded-tr-[28px] rounded-bl-[28px] pt-16 pb-12 px-12 md:px-16 shadow-[0_10px_40px_rgba(0,0,0,0.07)] flex flex-col items-start text-left min-h-[280px]"
          >
            {/* Quote Icon placed at top center */}
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex gap-1.5">
              <div className="w-[16px] h-[40px] bg-gradient-to-b from-[#3cc994] to-[#8dc63f] transform -skew-x-[15deg]"></div>
              <div className="w-[16px] h-[40px] bg-gradient-to-b from-[#3cc994] to-[#8dc63f] transform -skew-x-[15deg]"></div>
            </div>

            <p className="font-nunito text-gray-600 text-[15px] md:text-[16px] leading-[1.8] mb-8 font-normal text-left w-full">
              {testimonials[activeT].text}
            </p>

            <div className="text-left mb-8">
              <h4 className="font-nunito text-gray-900 font-bold text-[17px]">{testimonials[activeT].author}</h4>
              <p className="font-nunito text-gray-500 text-[14px] mt-1 font-normal">{testimonials[activeT].role}</p>
            </div>

            <div className="flex justify-center items-center gap-2.5 w-full mt-auto">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveT(i)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${activeT === i
                    ? 'w-6 h-2 bg-[#3cc994]'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

export default AboutPage;

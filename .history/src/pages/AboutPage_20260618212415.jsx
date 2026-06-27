import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';

/* ── Asset imports ─────────────────────────────── */
import heroImg from '../assets/About-Us.png (1).png';
import teamImg from '../assets/Best-Digital-Agency-1.png.png';
import firstWorkImg from '../assets/firstt-work.png.png';
import dedicatedImg from '../assets/Dedicated-Team-Member.png.png';
import supportImg from '../assets/247-Hours.png.png';
import icon1 from '../assets/Overlay+Shadow.png';
import icon2 from '../assets/Overlay+Shadow-1.png';
import icon3 from '../assets/Overlay+Shadow-2.png';
import icon4 from '../assets/Overlay+Shadow-3.png';

/* ── Gradient button class (green → cyan) ─────── */
const gradientBtn = 'inline-flex items-center gap-2 text-white font-bold rounded-lg transition-all shadow-lg hover:opacity-90 active:scale-95';
const gradientStyle = { background: 'linear-gradient(135deg, #3cc994 0%, #00c8d8 100%)' };

/* ── Animated floating dot ────────────────────── */
function FloatingDot({ x, y, size = 10, color = '#3cc994', duration = 6, delay = 0 }) {
  return (
    <motion.span
      className="absolute rounded-full pointer-events-none"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        backgroundColor: color,
        opacity: 0.55,
      }}
      animate={{
        x: [0, 50, -40, 30, -25, 0],
        y: [0, -45, 35, -30, 50, 0],
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
    <div className="w-full">

      {/* ════════════════════════════════════════
          1 · HERO
      ════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#e8f8f5' }} className="pt-16 pb-12 text-center relative overflow-hidden">

        {/* Animated floating dots */}
        <FloatingDot x="6%" y="15%" size={12} color="#3cc994" duration={7} delay={0} />
        <FloatingDot x="18%" y="55%" size={8} color="#b5d334" duration={8} delay={1} />
        <FloatingDot x="82%" y="20%" size={10} color="#00b4d8" duration={6} delay={2} />
        <FloatingDot x="90%" y="60%" size={7} color="#3cc994" duration={9} delay={0.5} />
        <FloatingDot x="50%" y="5%" size={6} color="#f59e0b" duration={7} delay={3} />
        <FloatingDot x="70%" y="80%" size={9} color="#e879f9" duration={10} delay={1.5} />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-[20px] font-bold tracking-[5px] text-gray-500 uppercase mb-5">
              ABOUT US
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Specializing in creative digital marketing and web development
            </h1>
            <p className="text-[16px] text-[#00b4d8] font-medium mb-12">
              we ensure top-notch services by crafting impactful to meet your unique business needs.
            </p>
          </motion.div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          className="w-full max-w-6xl mx-auto px-6 relative z-10"
        >
          <img
            src={heroImg}
            alt="Digital marketing dashboard with analytics and data visualization"
            className="w-full h-auto object-cover block rounded-2xl shadow-2xl"
          />
        </motion.div>

        {/* WhatsApp float */}
        <a
          href="https://wa.me/971524828215"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-5 top-1/2 -translate-y-1/2 z-50 bg-[#25d366] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl wa-pulse"
          aria-label="WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.844L.054 23.25a.75.75 0 0 0 .938.898l5.577-1.47A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.672-.512-5.195-1.403l-.372-.218-3.863 1.02 1.042-3.78-.24-.39A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
        </a>
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

        <div className="max-w-screen-xl mx-auto px-10 relative z-10">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              WHAT WE DO
            </h2>
            <p className="text-[25px] text-black font-normal">
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
            <motion.div
              variants={fadeUp}
              className="service-card bg-white border border-slate-100 rounded-3xl p-6 flex flex-col shadow-[0_12px_35px_rgba(0,0,0,0.04)]"
            >
              {/* Icon Container */}
              <div className="w-24 h-24 mb-5 flex items-center justify-center flex-shrink-0 p-3.5">
                <img
                  src={icon1}
                  alt="Custom Website Development"
                  className="w-full h-full object-contain rounded-xl"
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
              className="service-card bg-white border border-slate-100 rounded-3xl p-6 flex flex-col shadow-[0_12px_35px_rgba(0,0,0,0.04)]"
            >
              {/* Icon Container */}
              <div className="w-24 h-24 mb-5 flex items-center justify-center flex-shrink-0 p-3.5 ">
                <img
                  src={icon2}
                  alt="Website Maintenance and Services"
                  className="w-full h-full object-contain rounded-xl filter brightness-105"
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
              className="service-card bg-white border border-slate-100 rounded-3xl p-6 flex flex-col shadow-[0_12px_35px_rgba(0,0,0,0.04)]"
            >
              {/* Icon Container */}
              <div className="w-24 h-24 mb-5 bg-[#3cc994]/8 border border-[#3cc994]/15 rounded-2xl flex items-center justify-center flex-shrink-0 p-3.5 shadow-[0_6px_20px_rgba(60,201,148,0.06)]">
                <img
                  src={icon3}
                  alt="SEO (Search Engine Optimization)"
                  className="w-full h-full object-contain rounded-xl filter brightness-105"
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
              className="service-card bg-white border border-slate-100 rounded-3xl p-6 flex flex-col shadow-[0_12px_35px_rgba(0,0,0,0.04)]"
            >
              {/* Icon Container */}
              <div className="w-24 h-24 mb-5 bg-[#3cc994]/8 border border-[#3cc994]/15 rounded-2xl flex items-center justify-center flex-shrink-0 p-3.5 shadow-[0_6px_20px_rgba(60,201,148,0.06)]">
                <img
                  src={icon4}
                  alt="UI/UX and Graphic Design"
                  className="w-full h-full object-contain rounded-xl filter brightness-105"
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
      <section style={{ backgroundColor: '#0a2e2c' }} className="py-16 relative overflow-hidden">

        {/* Animated dots on dark bg */}
        <FloatingDot x="50%" y="5%" size={10} color="#3cc994" duration={7} delay={0} />
        <FloatingDot x="5%" y="45%" size={8} color="#f59e0b" duration={8} delay={1} />
        <FloatingDot x="92%" y="55%" size={7} color="#b5d334" duration={9} delay={2} />
        <FloatingDot x="30%" y="88%" size={9} color="#e879f9" duration={6} delay={0.5} />
        <FloatingDot x="75%" y="92%" size={7} color="#3cc994" duration={8} delay={3} />

        <div className="max-w-screen-xl mx-auto px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-[19px] font-bold tracking-[3px] text-[#3cc994] uppercase mb-4">
                DIGITAL EXCELLENCE SIMPLIFIED
              </p>
              <h2 className="text-5xl md:text-5xl font-bold text-white leading-tight mb-7">
                UAE Best Digital Agency
              </h2>
              <p className="text-[17px] text-white leading-relaxed mb-5">
                We are a bunch of creative nerds specializing in digital marketing and web development. We help you build a creative website that brings you better traffic. We ensure top-notch services to our clients with a hardworking team of professionals certified from Google Adwords and Analytics. We bring you the right knowledge and make sure that our services bring you continuous profit.
              </p>
              <p className="text-[17px] text-white leading-relaxed mb-5">
                Just like marketing is the most important thing for every business, having a website is essential for digital marketing. If your site is impactful and attracts visitors to engage with you, you are done with the first step. Because in sales, the very first step is to bring a visitor, once the conversation starts, there are chances of a deal too. What attracts the users most about your website is the website design, and this is where we help you.
              </p>
              <p className="text-[17px] text-white leading-relaxed">
                We build a website according to the type of your business, the needs of your business, and what you want in the design. We have worked for everyone from small businesses to high-class companies, and thus we understand your requirements thoroughly.
              </p>
            </motion.div>

            {/* Right: image + button */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-6"
            >
              <img
                src={teamImg}
                alt="UAE digital agency team collaborating"
                className="w-full rounded-2xl object-cover shadow-2xl"
              />
              <div className="flex justify-end">
                <a
                  href="/services"
                  className={`${gradientBtn} text-[14px] px-8 py-4`}
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

        <FloatingDot x="8%" y="20%" size={8} color="#3cc994" duration={8} delay={0} />
        <FloatingDot x="90%" y="30%" size={7} color="#b5d334" duration={7} delay={2} />
        <FloatingDot x="50%" y="85%" size={9} color="#f59e0b" duration={9} delay={1} />

        <div className="max-w-screen-xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center relative z-10">

          <motion.div
            className="lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-2.5 h-2.5 bg-[#3cc994] rounded-sm flex-shrink-0" />
              <p className="text-[19px] font-bold  text-black uppercase">
                WHY CHOOSE US
              </p>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight mb-6">
              Save Time &amp; Effort With <br />The Suggestinfo
            </h2>
            <p className="text-[15px] text-gray-500 leading-relaxed mb-10">
              Specializing in creative digital marketing and web development, we ensure top-notch services and sustained profitability Specializing in creative digital .
            </p>
            <a
              href="/contact"
              className={`${gradientBtn} text-[14px] px-8 py-3.5 rounded-lg font-bold`}
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
                className="border border-slate-100 rounded-2xl p-7 flex items-center gap-8 bg-white shadow-[0_15px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.14)] hover:border-[#3cc994]/30 hover:-translate-y-1 transition-all duration-150"
              >
                <div className="w-32 h-24 flex-shrink-0 overflow-hidden flex items-center justify-center bg-transparent">
                  <img src={item.img} alt={item.alt} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-[19px] font-bold mb-2 text-[#3cc994]">{item.title}</h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed">{item.desc}</p>
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

        <FloatingDot x="10%" y="15%" size={9} color="#3cc994" duration={7} delay={0} />
        <FloatingDot x="88%" y="25%" size={7} color="#b5d334" duration={8} delay={1} />
        <FloatingDot x="55%" y="90%" size={8} color="#00b4d8" duration={9} delay={2} />

        <div className="max-w-screen-xl mx-auto px-10 relative z-10">
          <div className="mb-4 text-center">
            <span className="inline-block text-[11px] font-bold tracking-[2px] text-gray-400 uppercase border border-gray-200 rounded-full px-4 py-1 bg-white shadow-sm">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-3xl lg:text-[42px] font-bold text-gray-900 leading-tight mb-16 text-center">
            <span className="block font-sans text-gray-800">Clients Review</span>
            <span className="block font-serif text-[#3cc994] italic mt-1">What Our Client&apos;s Say</span>
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white/85 backdrop-blur-md rounded-tl-[40px] rounded-tr-none rounded-bl-none rounded-br-[100px] p-10 md:p-14 shadow-[0_25px_60px_rgba(0,0,0,0.08)] border border-white/50 relative z-10"
          >
            {/* Custom slanted parallel bars Quote icon sitting directly on the top border */}
            <div className="absolute -top-[23px] left-1/2 -translate-x-1/2 flex gap-2.5">
              <div className="w-[11px] h-[46px] bg-gradient-to-b from-[#3cc994] to-[#b5d334] rounded-full transform rotate-[15deg]" />
              <div className="w-[11px] h-[46px] bg-gradient-to-b from-[#3cc994] to-[#b5d334] rounded-full transform rotate-[15deg]" />
            </div>

            <p className="text-[18px] text-gray-600 leading-relaxed text-center mb-8 max-w-3xl mx-auto font-normal">
              {testimonials[activeT].text}
            </p>
            <div className="text-center mb-8">
              <p className="text-[17px] font-bold text-gray-800 mb-1">{testimonials[activeT].author}</p>
              <p className="text-[14px] text-gray-400 font-medium">{testimonials[activeT].role}</p>
            </div>
            <div className="flex justify-center gap-2.5 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveT(i)}
                  className={`rounded-full transition-all duration-300 bg-transparent cursor-pointer ${activeT === i
                    ? 'w-7 h-2.5 border-2 border-slate-700'
                    : 'w-2.5 h-2.5 border border-slate-300 hover:border-slate-400'
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

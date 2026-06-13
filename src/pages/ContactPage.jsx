import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

/* ── Floating dot component with interactive mouse parallax ────────────────────── */
function FloatingDot({ x, y, size = 10, color = '#3cc994', duration = 6, delay = 0, mousePos, speedFactor = 1 }) {
  // Translate the normalized mousePos (-0.5 to 0.5) to pixel offset
  const offsetX = mousePos ? mousePos.x * 60 * speedFactor : 0;
  const offsetY = mousePos ? mousePos.y * 60 * speedFactor : 0;

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: x,
        top: y,
      }}
      animate={{
        x: offsetX,
        y: offsetY,
      }}
      transition={{
        type: 'spring',
        stiffness: 60,
        damping: 20,
      }}
    >
      <motion.span
        className="block rounded-full"
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          opacity: 0.55,
        }}
        animate={{
          x: [0, 40, -30, 20, -15, 0],
          y: [0, -35, 25, -20, 35, 0],
          scale: [1, 1.2, 0.9, 1.1, 0.95, 1],
          opacity: [0.55, 0.75, 0.45, 0.65, 0.5, 0.55],
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
}

export function ContactPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) - 0.5;
    const y = (clientY / innerHeight) - 0.5;
    setMousePos({ x, y });
  };

  return (
    <div className="w-full bg-slate-50/50" onMouseMove={handleMouseMove}>

      {/* ════════════════════════════════════════
          1 · HERO SECTION
      ════════════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(180deg, #ffffff 0%, #d5f2ec 100%)' }} className="py-20 text-center relative overflow-hidden">

        {/* Animated dots */}
        <FloatingDot x="8%" y="25%" size={12} color="#3cc994" duration={7} delay={0} mousePos={mousePos} speedFactor={1.2} />
        <FloatingDot x="20%" y="65%" size={8} color="#b5d334" duration={8} delay={1} mousePos={mousePos} speedFactor={-0.8} />
        <FloatingDot x="82%" y="30%" size={10} color="#00b4d8" duration={6} delay={2} mousePos={mousePos} speedFactor={1.5} />
        <FloatingDot x="90%" y="70%" size={7} color="#3cc994" duration={9} delay={0.5} mousePos={mousePos} speedFactor={-1.1} />
        <FloatingDot x="50%" y="15%" size={6} color="#f59e0b" duration={7} delay={3} mousePos={mousePos} speedFactor={0.5} />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#0a2e2c] leading-tight">
              Contact Us
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          2 · REDESIGNED CONTACT INFO & FORM
      ════════════════════════════════════════ */}
      <section className="py-20 bg-white relative overflow-hidden">

        {/* Background animated dots for next section */}
        <FloatingDot x="8%" y="10%" size={8} color="#ec4899" duration={8} delay={0} mousePos={mousePos} speedFactor={0.9} />
        <FloatingDot x="5%" y="25%" size={10} color="#f59e0b" duration={9} delay={1} mousePos={mousePos} speedFactor={-1.2} />
        <FloatingDot x="10%" y="80%" size={10} color="#ec4899" duration={7} delay={2} mousePos={mousePos} speedFactor={1.4} />
        <FloatingDot x="92%" y="15%" size={10} color="#eab308" duration={10} delay={1.5} mousePos={mousePos} speedFactor={-0.7} />

        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 items-start">

          {/* Left Column: Get in touch & Address details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <p
                style={{
                  background: 'linear-gradient(90deg, #3cc994 0%, #10b981 50%, #00b4d8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}
                className="font-bold text-[20px] tracking-wider mb-2 uppercase"
              >
                Get in touch
              </p>
              <h2 className="text-[#032f30] font-bold text-3xl md:text-5xl leading-[1.12] mb-6">
                Don&apos;t hesitate to <br />Contact Us
              </h2>
              <p className="text-gray-500 text-[22px] leading-[26px] max-w-lg mb-8 font-regular">
                We have world-class, flexible support via live chat, email and home. I guarantee that you&apos;ll be able to have any issue resolved within 24 hours.
              </p>
            </div>

            {/* Direct contact items */}
            <div className="flex flex-col gap-6">

              {/* Phone */}
              <div className="flex items-center gap-5">
                <div className="w-11 h-11 rounded-full bg-[#032f30] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <a href="tel:+971524828215" className="text-[#032f30] font-bold text-[28px] md:text-[30px] hover:text-[#3cc994] transition-colors tracking-tight">
                  +971 52 482 8215
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-5">
                <div className="w-11 h-11 rounded-full bg-[#032f30] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <a href="mailto:info@suggestinfo.com" className="text-[#032f30] font-bold text-[28px] md:text-[30px] hover:text-[#3cc994] transition-colors tracking-tight">
                  info@suggestinfo.com
                </a>
              </div>

              {/* Address 1: UAE */}
              <div className="flex items-start gap-5 mt-2">
                <MapPin className="w-6 h-6 text-[#032f30] flex-shrink-0 mt-1.5" />
                <p className="text-[#032f30] font-bold text-[18px] leading-[26px] flex-1">
                  Shams Business Center, Sharjah Media City Free Zone, Al Messaned, Sharjah, UAE.
                </p>
              </div>

              {/* Address 2: Dubai */}
              <div className="flex items-start gap-5">
                <MapPin className="w-6 h-6 text-[#032f30] flex-shrink-0 mt-1.5" />
                <p className="text-[#032f30] font-bold text-[18px] leading-[26px] flex-1">
                  Tanvi Business Center, Opposite to Por Que Leather Fur, Maktoum Road, Portsaeed Deira, Dubai.
                </p>
              </div>

              {/* Address 3: Chennai */}
              <div className="flex items-start gap-5">
                <MapPin className="w-6 h-6 text-[#032f30] flex-shrink-0 mt-1.5" />
                <p className="text-[#032f30] font-bold text-[18px] leading-[26px] flex-1">
                  No.1, L.B.Road, Vantage Plaza, Near Adyar Bus Deport, Mahatma Gandhi Rd, Subramaniam Colony, Adyar, Chennai, Tamil Nadu 600041.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Custom Message Form */}
          <div className="lg:col-span-7 w-full">
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
}

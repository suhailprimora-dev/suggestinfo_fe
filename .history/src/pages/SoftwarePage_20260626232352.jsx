import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, Database, Calendar, FileText, Settings, Play, ArrowRight, Check, Users, Phone } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

// Image assets
import businessPeople from '../assets/business-people.png';
import growImg from '../assets/grow-img.png.png';
import twoPeople from '../assets/two-people.png.png';
import flexControl from '../assets/Flexibility-Control.png';
import approvalWorkflow from '../assets/Approval-Workflow.png.png';
import regularAttendance from '../assets/Regular-Attendance.png';
import schedulingImg from '../assets/Scheduling-1.png';
import reportingImg from '../assets/Reporting.png.png';
import section2Img from '../assets/Section (2).png';

// SVG Icons for Feature Cards
const AiChipIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="5" width="14" height="14" rx="2" ry="2" />
    <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />
    <text x="12" y="14.5" fill="white" fontSize="6.5" fontWeight="900" textAnchor="middle" stroke="none" fontFamily="system-ui, sans-serif">AI</text>
  </svg>
);

const UxBrowserIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <circle cx="6" cy="6" r="0.5" fill="white" stroke="none" />
    <circle cx="8.5" cy="6" r="0.5" fill="white" stroke="none" />
    <circle cx="11" cy="6" r="0.5" fill="white" stroke="none" />
    <text x="12" y="16.5" fill="white" fontSize="6.5" fontWeight="900" textAnchor="middle" stroke="none" fontFamily="system-ui, sans-serif">UX</text>
  </svg>
);

const InwardArrowsIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="6" height="6" rx="1" />
    <path d="M4 4l5 5M5 9h4V5" />
    <path d="M20 4l-5 5M19 9h-4V5" />
    <path d="M4 20l5-5M5 15h4v4" />
    <path d="M20 20l-5-5M19 15h-4v4" />
  </svg>
);

const EmployeeRolesIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    <rect x="15" y="12" width="7" height="7" rx="1.5" fill="none" stroke="white" strokeWidth="1.5" />
    <path d="M17 15.5l1.5 1.5 2.5-2.5" stroke="white" strokeWidth="1.5" />
  </svg>
);

const EmployeeMgmtIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M4 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    <circle cx="10" cy="7" r="4" />
    <path d="M16 11l2 2 4-4" />
  </svg>
);

const AttendanceMgmtIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="M9 9h6M9 13h6M9 17h6" />
  </svg>
);

const PayrollMgmtIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.5 2v6h-6" />
    <path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
    <circle cx="12" cy="12" r="5" fill="none" stroke="white" strokeWidth="1.5" />
    <path d="M12 9.5v5M13.5 11h-3a1 1 0 0 0 0 2h3a1 1 0 0 1 0 2h-3" strokeWidth="1.5" />
  </svg>
);

const ProjectMgmtIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="14" width="3" height="6" rx="0.5" />
    <rect x="10" y="10" width="3" height="10" rx="0.5" />
    <rect x="15" y="6" width="3" height="14" rx="0.5" />
    <path d="M4 16l5-5 5 2 5-9" />
    <path d="M15 4h4v4" />
  </svg>
);

const CustomReportingIcon = () => (
  <svg className="w-9 h-9 stroke-[1.8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    {/* Screen outline */}
    <rect x="2" y="3" width="20" height="13" rx="2" strokeWidth="2" />
    {/* Stand */}
    <path d="M12 16v4M8 20h8" strokeWidth="2" />
    {/* Sliders inside */}
    <line x1="6" y1="7" x2="18" y2="7" strokeOpacity="0.3" strokeWidth="2" />
    <circle cx="9" cy="7" r="1.5" fill="currentColor" stroke="none" />
    
    <line x1="6" y1="10" x2="18" y2="10" strokeOpacity="0.3" strokeWidth="2" />
    <circle cx="15" cy="10" r="1.5" fill="currentColor" stroke="none" />
    
    <line x1="6" y1="13" x2="18" y2="13" strokeOpacity="0.3" strokeWidth="2" />
    <circle cx="12" cy="13" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const MultipleMisIcon = () => (
  <svg className="w-9 h-9 stroke-[1.8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    {/* Overlapping Folder Tabs */}
    <path d="M3 6.5h15a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1z" strokeWidth="1.5" strokeOpacity="0.5" />
    <path d="M5 10.5h14a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1z" strokeWidth="1.5" strokeOpacity="0.75" />
    {/* Main Folder base */}
    <rect x="3" y="11" width="18" height="10" rx="2" strokeWidth="2" />
    <line x1="7" y1="15" x2="17" y2="15" strokeWidth="1.5" strokeOpacity="0.3" />
    <line x1="7" y1="18" x2="13" y2="18" strokeWidth="1.5" strokeOpacity="0.3" />
  </svg>
);

const HrDashboardIcon = () => (
  <svg className="w-9 h-9 stroke-[1.8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    {/* Speedometer/Gauge dial half */}
    <path d="M4 12a8 8 0 0 1 12.83-6.42" strokeWidth="2" />
    <path d="M12 12l3.5-3.5" strokeWidth="2" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    {/* Bars representing charts */}
    <rect x="4" y="16" width="2" height="5" rx="0.5" strokeWidth="1.5" />
    <rect x="8" y="13" width="2" height="8" rx="0.5" strokeWidth="1.5" />
    <rect x="12" y="15" width="2" height="6" rx="0.5" strokeWidth="1.5" />
    <rect x="16" y="12" width="2" height="9" rx="0.5" strokeWidth="1.5" />
    <rect x="20" y="14" width="2" height="7" rx="0.5" strokeWidth="1.5" />
    <line x1="2" y1="21" x2="22" y2="21" strokeWidth="1.5" />
  </svg>
);

export function SoftwarePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // Ref and scroll transforms for Section 6 slide-out animation
  const section6Ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: section6Ref,
    offset: ["start end", "end start"]
  });

  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slideLeftX = useTransform(scrollYProgress, [0.15, 0.45], ["85%", "0%"]);
  const slideRightX = useTransform(scrollYProgress, [0.15, 0.45], ["-85%", "0%"]);
  const slideLeftOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0.35, 1]);
  const slideRightOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0.35, 1]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) - 0.5;
    const y = (clientY / innerHeight) - 0.5;
    setMousePos({ x, y });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  return (
    <div className="w-full bg-white overflow-hidden" onMouseMove={handleMouseMove}>

      {/* ════════════════════════════════════════
          1 · HERO SECTION (SPLIT LAYOUT)
      ════════════════════════════════════════ */}
      <section className="w-full min-h-[calc(100vh-114px)] relative bg-[#E7EFE2] flex flex-col lg:flex-row overflow-hidden">

        {/* Left Column: HRMS Content Block */}
        <div className="w-full lg:w-[68%] px-6 py-16 md:px-12 lg:pl-24 lg:pr-12 flex flex-col justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* HRMS Badge */}
            <h1 className="text-5xl md:text-[62px] font-extrabold text-gray-900 leading-none mb-5 tracking-tight">
              HRMS
            </h1>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[50px] font-bold leading-[1.15] mb-8 tracking-tight">
              <span className="text-[#1E886F] block mb-1">One-Stop Solution for</span>
              <span className="text-gray-900 block lg:whitespace-nowrap">Managing Human Resource in UAE</span>
            </h2>

            {/* Tagline */}
            <p className="text-[22px] md:text-[25px] font-regular text-gray-800 mb-4 tracking-tight">
              Transform Your Business with <span className="text-[#3cc994] font-bold">Suggest Info HRMS</span>
            </p>

            {/* Description */}
            <p className="text-[20px] md:text-[22px] text-black leading-relaxed mb-8 font-regular lg:max-w-[730px]">
              Suggest Info is your people enabler. Suggest Info has everything you need to transform a good business into a great one, from automating people processes to nurturing a motivated and engaged workforce.
            </p>

            {/* Price Starts */}
            <p className="text-[20px] md:text-[24px] font-bold mb-10 tracking-tight">
              <span className="text-[#009295]">Price Starts from </span>
              <span className="text-[#3cc994]">USD $2 per month</span>
            </p>

            {/* CTA Button */}
            <div>
              <a
                href="/contact/"
                style={{ background: 'linear-gradient(90deg, #3cc994 0%, #8bc34a 100%)' }}
                className="inline-block text-white font-bold px-12 py-5 rounded-full text-[18px] tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_12px_24px_rgba(60,201,148,0.3)] hover:shadow-[0_16px_32px_rgba(60,201,148,0.45)] cursor-pointer text-center"
              >
                Request Free Demo
              </a>
            </div>

          </motion.div>
        </div>

        {/* Right Column: Dark Teal Block with cutout professionals */}
        <div
          style={{ background: 'linear-gradient(180deg, #3cc994 0%, #0a2e2c 100%)' }}
          className="w-full lg:w-[32%] lg:absolute lg:right-0 lg:top-0 lg:bottom-0 min-h-[480px] lg:min-h-full flex items-end justify-center z-0 overflow-visible"
        >
          <div className="relative w-full max-w-md lg:max-w-none flex justify-center items-end h-full px-6 lg:px-0">

            {/* Business People Cutout Image */}
            <motion.img
              src={businessPeople}
              alt="HRMS Business Professionals"
              className="h-auto max-h-[75vh] lg:max-h-[85vh] object-contain relative z-10 lg:absolute lg:left-[5%] lg:bottom-0 max-w-[110%] lg:max-w-none"
              initial={{ opacity: 0, y: 120 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            />

            {/* Floating speech card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5, type: 'spring', stiffness: 90 }}
              className="absolute left-[5%] md:left-[10%] lg:left-[5%] bottom-[35%] lg:bottom-[40%] bg-white rounded-2xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.15)] z-20 flex items-center gap-3 border border-slate-100 max-w-[250px]"
              style={{ transformOrigin: 'right bottom' }}
            >
              <div className="w-10 h-10 rounded-full bg-[#10b981]/15 text-[#10b981] flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 fill-[#10b981]/10 text-[#10b981]" />
              </div>
              <div>
                <p className="text-[13px] font-bold text-gray-800 leading-tight">
                  We enhance, support,
                </p>
                <p className="text-[13px] font-bold text-gray-800 leading-tight">
                  and provide clarity
                </p>
              </div>

              {/* Speech Bubble Arrow Tail */}
              <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[8px] border-l-white" />
            </motion.div>

          </div>
        </div>

      </section>

      {/* ════════════════════════════════════════
          2 · SECOND SECTION (FEEL THE DIFFERENCE HEADER)
      ════════════════════════════════════════ */}
      <section className="py-20 text-center px-6 relative overflow-hidden bg-gradient-to-b from-[#f1f7f4] to-white">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="text-[13px] md:text-[14px] font-bold text-white bg-[#8bc34a] px-6 py-2.5 rounded-lg uppercase tracking-wider inline-block">
              WHO WE ARE
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl md:text-[48px] font-bold text-gray-900 mb-8 tracking-tight leading-tight"
          >
            Feel the Difference
          </motion.h2>

          {/* Centered Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[16px] md:text-[18px] text-gray-700 max-w-4xl leading-relaxed font-medium"
          >
            Avoid the everyday stress of hundreds of spreadsheets and countless repetitive HR duties. Spend <br className="hidden md:inline" />
            time on strategic HR initiatives that will have a positive influence on the business in UAE.
          </motion.p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          2.5 · FEATURE CARDS SECTION
      ════════════════════════════════════════ */}
      <section className="pt-8 pb-28 bg-white px-6 relative overflow-visible z-20">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* 4 Feature Cards Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* Card 1 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -12, scale: 1.025, zIndex: 50, transition: { duration: 0.25 } }}
              className="relative flex flex-col h-full overflow-visible group items-center"
            >
              {/* Header Top Box */}
              <div className="relative z-0 w-[75%] bg-[#82a43a] text-white font-bold pt-5 pb-9 px-3 rounded-[18px] text-[17px] md:text-[18px] text-center min-h-[110px] flex items-start justify-center leading-snug shadow-sm">
                AI-Driven <br /> Technology
              </div>
              {/* Center Heighted Box (Body) */}
              <div className="relative z-10 w-[90%] bg-[#0da687] text-white rounded-[24px] px-7 pt-12 pb-20 text-left flex-1 flex flex-col justify-start -mt-8 shadow-[0_15px_45px_rgba(0,0,0,0.06)] transition-shadow duration-300 group-hover:shadow-[0_25px_55px_rgba(13,166,135,0.22)]">
                <p className="text-teal-50 text-[20px] leading-relaxed font-medium">
                  With the support of AI, Suggest Info HRMS simplifies workflows, automates repetitive tasks, and offers insights into workforce patterns.
                </p>
              </div>
              {/* Overlapping Icon Circle */}
              <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 w-[72px] h-[72px] rounded-full bg-[#82a43a] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 z-20">
                <AiChipIcon />
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -12, scale: 1.025, zIndex: 50, transition: { duration: 0.25 } }}
              className="relative flex flex-col h-full overflow-visible group items-center"
            >
              {/* Header Top Box */}
              <div className="relative z-0 w-[75%] bg-[#386b40] text-white font-bold pt-5 pb-9 px-3 rounded-[18px] text-[17px] md:text-[18px] text-center min-h-[110px] flex items-start justify-center leading-snug shadow-sm">
                User <br /> Experience
              </div>
              {/* Center Heighted Box (Body) */}
              <div className="relative z-10 w-[90%] bg-white text-gray-500 rounded-[24px] px-7 pt-12 pb-20 text-left flex-1 flex flex-col justify-start -mt-8 border border-slate-100/50 shadow-[0_15px_45px_rgba(0,0,0,0.04)] transition-shadow duration-300 group-hover:shadow-[0_25px_55px_rgba(0,0,0,0.1)]">
                <p className="text-gray-500 text-[20px] leading-relaxed font-medium">
                  Our user-friendly HRMS prioritizes the user experience, making it simple for employees to complete HR-related tasks and navigate the system.
                </p>
              </div>
              {/* Overlapping Icon Circle */}
              <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 w-[72px] h-[72px] rounded-full bg-[#386b40] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 z-20">
                <UxBrowserIcon />
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -12, scale: 1.025, zIndex: 50, transition: { duration: 0.25 } }}
              className="relative flex flex-col h-full overflow-visible group items-center"
            >
              {/* Header Top Box */}
              <div className="relative z-0 w-[75%] bg-[#5f7586] text-white font-bold pt-5 pb-9 px-3 rounded-[18px] text-[17px] md:text-[18px] text-center min-h-[110px] flex items-start justify-center leading-snug shadow-sm">
                Centralized <br /> Platform
              </div>
              {/* Center Heighted Box (Body) */}
              <div className="relative z-10 w-[90%] bg-white text-gray-500 rounded-[24px] px-7 pt-12 pb-20 text-left flex-1 flex flex-col justify-start -mt-8 border border-slate-100/50 shadow-[0_15px_45px_rgba(0,0,0,0.04)] transition-shadow duration-300 group-hover:shadow-[0_25px_55px_rgba(0,0,0,0.1)]">
                <p className="text-gray-500 text-[20px] leading-relaxed font-medium">
                  Suggest Info HRMS helps companies cut costs with our dynamic dashboard views, employee database, and self-service capabilities.
                </p>
              </div>
              {/* Overlapping Icon Circle */}
              <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 w-[72px] h-[72px] rounded-full bg-[#5f7586] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 z-20">
                <InwardArrowsIcon />
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -12, scale: 1.025, zIndex: 50, transition: { duration: 0.25 } }}
              className="relative flex flex-col h-full overflow-visible group items-center"
            >
              {/* Header Top Box */}
              <div className="relative z-0 w-[75%] bg-[#125d53] text-white font-bold pt-5 pb-9 px-3 rounded-[18px] text-[17px] md:text-[18px] text-center min-h-[110px] flex items-start justify-center leading-snug shadow-sm">
                Employee Self Service <br /> portal
              </div>
              {/* Center Heighted Box (Body) */}
              <div className="relative z-10 w-[90%] bg-white text-gray-500 rounded-[24px] px-7 pt-12 pb-20 text-left flex-1 flex flex-col justify-start -mt-8 border border-slate-100/50 shadow-[0_15px_45px_rgba(0,0,0,0.04)] transition-shadow duration-300 group-hover:shadow-[0_25px_55px_rgba(0,0,0,0.1)]">
                <p className="text-gray-500 text-[20px] leading-relaxed font-medium">
                  Give employees the autonomy to look out for themselves. Apart from improving employee satisfaction, this frees up HR time for tasks that are important to the operation.
                </p>
              </div>
              {/* Overlapping Icon Circle */}
              <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 w-[72px] h-[72px] rounded-full bg-[#125d53] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 z-20">
                <EmployeeRolesIcon />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          3 · THIRD SECTION (GROW YOUR TEAMS)
      ════════════════════════════════════════ */}
      <section className="w-full bg-[#f2faf5] relative overflow-visible pt-20 lg:pt-28 pb-0 flex items-center z-10">
        {/* Left vertical strip (Sage Green background) */}
        <div className="absolute left-0 top-0 bottom-0 w-[66%] bg-[#85c4a5] hidden lg:block z-0" />

        {/* Main Dark Green Container (stretched to end, rounded top-left corner, space at the top) */}
        <div className="w-full lg:w-[calc(100%-20%)] lg:ml-[20%] bg-[#3c7655] lg:rounded-tl-[48px] lg:rounded-bl-none rounded-none relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] py-12 lg:py-20 px-6 lg:px-16 overflow-visible">
          {/* Watermark backdrop */}
          <div
            className="absolute inset-0 opacity-[0.06] mix-blend-overlay bg-cover bg-center lg:rounded-tl-[48px] lg:rounded-bl-none rounded-none pointer-events-none"
            style={{ backgroundImage: `url(${growImg})` }}
          />

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            {/* Left Column: Image wrapper (no outer border, increased size) */}
            <motion.div
              className="lg:col-span-5 flex justify-center lg:justify-end relative z-20 lg:-ml-32 lg:-mt-28 lg:mb-0 mb-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-[300px] sm:w-[380px] lg:w-[450px] relative"
              >
                <img
                  src={growImg}
                  alt="Grow your teams"
                  className="w-full h-auto block"
                />
              </motion.div>
            </motion.div>

            {/* Right Column: Content and List */}
            <motion.div
              className="lg:col-span-7 flex flex-col justify-center text-white relative z-10 lg:pl-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {/* Title */}
              <motion.h2
                variants={fadeUp}
                className="text-4xl lg:text-[50px] font-bold text-white leading-[1.15] mb-5 tracking-tight"
              >
                Grow your <br />
                Teams <span className="text-[#aef359] font-semibold">in minute</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                className="text-[17px] md:text-[18px] text-white/90 leading-relaxed mb-6 font-light max-w-xl"
              >
                The best talent in the world can be hired, onboarded, paid, and managed without ever leaving your zip code.
              </motion.p>

              {/* Glass Card Overlay Box (moved up inside the container) */}
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="bg-white/[0.08] backdrop-blur-xl rounded-[28px] p-6 md:p-8 shadow-[0_35px_70px_rgba(0,0,0,0.45)] border border-white/15 text-white/95 max-w-xl relative z-20 transition-all duration-300 hover:border-white/25"
              >
                <ul className="flex flex-col gap-4.5 text-[15px] md:text-[15.5px] font-light leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-white text-lg leading-none mt-1 select-none">•</span>
                    <span>You can work with anyone, anyplace, and welcome new hires without establishing a legal entity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white text-lg leading-none mt-1 select-none">•</span>
                    <span>Make a quick start for new hires with instantaneous contract creation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white text-lg leading-none mt-1 select-none">•</span>
                    <span>Provide both worldwide and ultra-local benefits that suit the employment needs of specific regions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white text-lg leading-none mt-1 select-none">•</span>
                    <span>Do all the tasks in compliance with all applicable local labor laws.</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          4 · FOURTH SECTION (DIGITALLY RETHINK)
      ════════════════════════════════════════ */}
      <section className="py-24 bg-white px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">

          {/* Section Heading */}
          <div className="text-center max-w-4xl mb-16 flex flex-col items-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl lg:text-[48px] font-bold text-gray-900 leading-tight tracking-tight mb-2 text-center"
            >
              Digitally Rethink
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-3xl lg:text-[44px] font-bold text-[#0da687] leading-tight tracking-tight mb-6 text-center"
            >
              the Complete Employee Life Cycle
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[16px] md:text-[17px] text-gray-600 max-w-4xl text-center leading-relaxed font-medium"
            >
              Perform HR duties virtually paperless, from pre-onboarding to off-boarding. Suggest Info HRMS uses <br className="hidden md:inline" />
              performance and Project management to build empowered user experiences and workforce engagement
            </motion.p>
          </div>

          {/* Grid of 4 Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              {
                title: 'Employee Management',
                desc: 'All employee data, including bank account information, pay stubs, leave history, contact information, and more are managed by the software.',
                icon: <EmployeeMgmtIcon />,
                bgColor: 'bg-[#3fae96]',
                iconBg: 'bg-[#2e8c78]'
              },
              {
                title: 'Attendance Management',
                desc: "You can effectively control your employees' attendance with the help of our HRMS system. Keep a close eye on your employees' overtime, clock-in, and clock-out times.",
                icon: <AttendanceMgmtIcon />,
                bgColor: 'bg-[#7da045]',
                iconBg: 'bg-[#658237]'
              },
              {
                title: 'Payroll Management',
                desc: 'Payroll management is no longer a concern. Payroll for your employees can be quickly calculated and managed using our software.',
                icon: <PayrollMgmtIcon />,
                bgColor: 'bg-[#5b738c]',
                iconBg: 'bg-[#485f74]'
              },
              {
                title: 'Project Management',
                desc: "It's easy to create and oversee client projects using Smart HR. Employee assignment, progress monitoring, file sharing, note-taking, and more are made simple.",
                icon: <ProjectMgmtIcon />,
                bgColor: 'bg-[#386b40]',
                iconBg: 'bg-[#2c5834]'
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.3 } }}
                className={`${card.bgColor} rounded-[24px] p-8 text-center text-white flex flex-col items-center min-h-[380px] shadow-[0_15px_45px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_55px_rgba(0,0,0,0.15)] transition-all duration-300`}
              >
                <div className={`w-16 h-16 rounded-[18px] flex items-center justify-center mb-6 ${card.iconBg} shadow-inner`}>
                  {card.icon}
                </div>
                <h3 className="text-[20px] font-bold mb-4 leading-snug">{card.title}</h3>
                <p className="text-[14px] text-white/90 leading-relaxed font-light">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Centered Pill Badges Layout (3 Rows) */}
          <div className="w-full flex flex-col gap-4 items-center">
            {/* Row 1 */}
            <div className="flex flex-wrap justify-center gap-4 w-full">
              {[
                { name: 'Offer Management', bgColor: 'bg-[#5b738c]', hoverBg: 'hover:bg-[#485f74]' },
                { name: 'Business Administration', bgColor: 'bg-[#386b40]', hoverBg: 'hover:bg-[#2c5834]' },
                { name: 'Lifecycle Management', bgColor: 'bg-[#7da045]', hoverBg: 'hover:bg-[#658237]' },
                { name: 'Document Management', bgColor: 'bg-[#3fae96]', hoverBg: 'hover:bg-[#2e8c78]' }
              ].map((badge, i) => (
                <motion.span 
                  key={i} 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`${badge.bgColor} ${badge.hoverBg} text-white font-bold text-[15px] lg:text-[16px] px-8 py-3.5 rounded-[16px] text-center cursor-pointer shadow-sm transition-all duration-300 min-w-[210px] flex items-center justify-center`}
                >
                  {badge.name}
                </motion.span>
              ))}
            </div>
            
            {/* Row 2 */}
            <div className="flex flex-wrap justify-center gap-4 w-full">
              {[
                { name: 'Data Drive', bgColor: 'bg-[#7da045]', hoverBg: 'hover:bg-[#658237]' },
                { name: 'Excel Import', bgColor: 'bg-[#3fae96]', hoverBg: 'hover:bg-[#2e8c78]' },
                { name: 'Recording Keeping', bgColor: 'bg-[#5b738c]', hoverBg: 'hover:bg-[#485f74]' },
                { name: 'Letters & Mail Merge', bgColor: 'bg-[#386b40]', hoverBg: 'hover:bg-[#2c5834]' }
              ].map((badge, i) => (
                <motion.span 
                  key={i} 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`${badge.bgColor} ${badge.hoverBg} text-white font-bold text-[15px] lg:text-[16px] px-8 py-3.5 rounded-[16px] text-center cursor-pointer shadow-sm transition-all duration-300 min-w-[210px] flex items-center justify-center`}
                >
                  {badge.name}
                </motion.span>
              ))}
            </div>

            {/* Row 3 */}
            <div className="flex flex-wrap justify-center gap-4 w-full">
              {[
                { name: 'Letters & Mail Merge', bgColor: 'bg-[#386b40]', hoverBg: 'hover:bg-[#2c5834]' }
              ].map((badge, i) => (
                <motion.span 
                  key={i} 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`${badge.bgColor} ${badge.hoverBg} text-white font-bold text-[15px] lg:text-[16px] px-8 py-3.5 rounded-[16px] text-center cursor-pointer shadow-sm transition-all duration-300 min-w-[210px] flex items-center justify-center`}
                >
                  {badge.name}
                </motion.span>
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* ════════════════════════════════════════
          5 · FIFTH SECTION (YOUR WORKPLACE, YOUR WAY)
      ════════════════════════════════════════ */}
      <section className="bg-[#f2faf5] relative overflow-hidden border-t border-b border-slate-100 w-full">
        
        {/* Full-Width Split Hero Header Block */}
        <div className="w-full flex flex-col lg:flex-row items-stretch relative">
          {/* Left Column: Dark Green Banner (Moved left, larger text) */}
          <div className="w-full lg:w-[65%] bg-[#3c7655] px-6 py-16 md:py-24 lg:pl-16 xl:pl-24 lg:pr-16 flex flex-col justify-center text-white relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h2 className="text-5xl md:text-[60px] xl:text-[68px] font-extrabold leading-[1.1] mb-6 tracking-tight">
                Your <br />
                Workplace, <br />
                <span className="text-[#aef359] block mt-1">Your Way</span>
              </h2>
              <p className="text-[17px] md:text-[19px] xl:text-[21px] text-white/90 leading-relaxed font-normal max-w-xl">
                Suggest Info is your trusted tool for liberating yourself from manual HR work and creating the ideal workplace you've always dreamed of creating.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Solid White with overlapping rounded team photo (No extra container border) */}
          <div className="w-full lg:w-[35%] bg-white flex items-center justify-center lg:justify-start p-8 lg:p-0 min-h-[380px] lg:min-h-auto overflow-visible relative z-20">
            <motion.img
              src={twoPeople}
              alt="Team collaborating"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-[320px] lg:max-w-[420px] aspect-[4/5] rounded-[24px] object-cover shadow-[0_30px_60px_rgba(0,0,0,0.32)] z-20 lg:-ml-28 lg:translate-y-16"
            />
          </div>
        </div>

        {/* Cards Content Container */}
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          {/* Cards Asymmetric Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {/* Card 1: Flexibility Control */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.015, boxShadow: "0px 25px 50px rgba(0,0,0,0.12)" }}
              className="bg-[#3d8b74] rounded-[24px] p-6 md:p-8 flex flex-col sm:flex-row items-center gap-8 md:col-span-2 group cursor-default shadow-md"
            >
              <div className="w-full sm:w-[45%] md:w-[38%] aspect-[16/10] rounded-[16px] overflow-hidden flex-shrink-0 bg-white/10 shadow-inner">
                <img
                  src={flexControl}
                  alt="Flexibility Control"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Flexibility Control
                </h3>
              </div>
            </motion.div>

            {/* Card 2: Approval Workflow */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.015, boxShadow: "0px 25px 50px rgba(0,0,0,0.12)" }}
              className="bg-[#53385b] rounded-[24px] p-6 md:p-8 flex flex-row items-center justify-between gap-6 group cursor-default shadow-md"
            >
              <div className="flex-1 text-left">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-none">
                  Approval <br />
                  Workflow
                </h3>
              </div>
              <div className="w-[120px] md:w-[150px] aspect-[4/3] rounded-[16px] overflow-hidden flex-shrink-0 bg-white/10 shadow-inner">
                <img
                  src={approvalWorkflow}
                  alt="Approval Workflow"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Card 3: Scheduling */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.015, boxShadow: "0px 25px 50px rgba(0,0,0,0.12)" }}
              className="bg-[#5f7586] rounded-[24px] p-6 md:p-8 flex flex-col justify-between md:row-span-2 group cursor-default h-full shadow-md min-h-[350px]"
            >
              <div className="w-full aspect-[4/3] rounded-[16px] overflow-hidden bg-white/10 shadow-inner">
                <img
                  src={schedulingImg}
                  alt="Scheduling"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Scheduling
                </h3>
              </div>
            </motion.div>

            {/* Card 4: Regular Attendance */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.015, boxShadow: "0px 25px 50px rgba(0,0,0,0.12)" }}
              className="bg-[#2d623a] rounded-[24px] p-6 md:p-8 flex flex-row items-center justify-between gap-6 group cursor-default shadow-md"
            >
              <div className="flex-1 text-left">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-none">
                  Regular <br />
                  Attendance
                </h3>
              </div>
              <div className="w-[120px] md:w-[150px] aspect-[4/3] rounded-[16px] overflow-hidden flex-shrink-0 bg-white/10 shadow-inner">
                <img
                  src={regularAttendance}
                  alt="Regular Attendance"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Card 5: Reporting */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.015, boxShadow: "0px 25px 50px rgba(0,0,0,0.12)" }}
              className="bg-[#82a43a] rounded-[24px] p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-8 md:col-span-2 group cursor-default shadow-md"
            >
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Reporting
                </h3>
              </div>
              <div className="w-full sm:w-[45%] md:w-[38%] aspect-[16/10] rounded-[16px] overflow-hidden flex-shrink-0 bg-white/10 shadow-inner">
                <img
                  src={reportingImg}
                  alt="Reporting"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          6 · SIXTH SECTION (DATA TAKE THE DRIVER SEAT)
      ════════════════════════════════════════ */}
      <section ref={section6Ref} className="py-24 bg-white px-6 relative overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">

          {/* Heading */}
          <div className="text-center max-w-4xl mb-16 flex flex-col items-center">
            <h2 className="text-4xl lg:text-[48px] font-bold text-gray-900 leading-tight tracking-tight mb-6 text-center">
              With Suggest Info, Data Take <br />
              the <span className="text-[#0da687] font-extrabold">Driver Seat</span>
            </h2>
            <p className="text-[16px] md:text-[18px] text-gray-600 max-w-4xl text-center leading-relaxed font-medium">
              Make all significant decisions in your business based on data and analytics. With Suggest Info, you can quickly and effectively make decisions by having fast access to the most recent data, reports, and dashboards related to HR
            </p>
          </div>

          {/* 3 Containers Row with Slide-out Animation */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 max-w-5xl w-full mb-24 overflow-visible py-10 relative">
            
            {/* Left Card */}
            <motion.div
              style={{
                x: isDesktop ? slideLeftX : 0,
                opacity: isDesktop ? slideLeftOpacity : 1
              }}
              initial={isDesktop ? false : { opacity: 0, y: 30 }}
              whileInView={isDesktop ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6, scale: 1.015, zIndex: 40, transition: { duration: 0.25 } }}
              className="relative z-10 w-full md:w-[33%] bg-[#5fa67d] text-white rounded-[16px] py-8 px-6 flex items-center gap-4 shadow-md cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 shadow-inner">
                <CustomReportingIcon />
              </div>
              <h3 className="text-[17px] font-bold leading-snug">
                Customizable reporting <br className="hidden lg:inline" /> based on needs
              </h3>
            </motion.div>

            {/* Center Card */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.025, transition: { duration: 0.25 } }}
              className="relative z-20 w-full md:w-[36%] bg-[#3c8f79] text-white rounded-[16px] py-12 px-6 flex items-center gap-4 shadow-[0_20px_50px_rgba(10,46,44,0.25)] -my-4 md:-mx-4 cursor-default"
            >
              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 shadow-inner">
                <MultipleMisIcon />
              </div>
              <h3 className="text-[18px] font-extrabold leading-snug">
                Multiple MIS reports
              </h3>
            </motion.div>

            {/* Right Card */}
            <motion.div
              style={{
                x: isDesktop ? slideRightX : 0,
                opacity: isDesktop ? slideRightOpacity : 1
              }}
              initial={isDesktop ? false : { opacity: 0, y: 30 }}
              whileInView={isDesktop ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6, scale: 1.015, zIndex: 40, transition: { duration: 0.25 } }}
              className="relative z-10 w-full md:w-[33%] bg-[#5fa67d] text-white rounded-[16px] py-8 px-6 flex items-center gap-4 shadow-md cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 shadow-inner">
                <HrDashboardIcon />
              </div>
              <h3 className="text-[17px] font-bold leading-snug">
                HR dashboards for <br className="hidden lg:inline" /> insights and patterns
              </h3>
            </motion.div>

          </div>

          {/* Video Player Block */}
          <motion.div
            className="w-full max-w-4xl rounded-3xl overflow-hidden relative shadow-[0_30px_70px_rgba(10,46,44,0.12)] border-4 border-white group cursor-pointer"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Video screenshot placeholder */}
            <img
              src={section2Img}
              alt="HR Portal Video Demonstration"
              className="w-full h-auto object-cover block transition-transform duration-500 group-hover:scale-[1.01]"
            />

            {/* Dark Overlay on hover */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />

            {/* Pulsing Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <motion.div
                className="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl relative z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-8 h-8 fill-current ml-1" />
                <span className="absolute inset-0 rounded-full bg-red-600/35 animate-ping z-0" />
              </motion.div>
            </div>

            {/* Bottom Title Bar Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-6 text-white text-center z-10">
              <p className="text-[18px] md:text-[22px] font-bold tracking-wide">
                ZIMCO - One-Stop Board for Travel &amp; HR Management
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          7 · SEVENTH SECTION (CONTACT FORM)
      ════════════════════════════════════════ */}
      <section className="py-24 bg-[#f3fbf8]/40 px-6 relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">

          {/* Left: Contact Form Component */}
          <div className="lg:col-span-7 w-full">
            <ContactForm />
          </div>

          {/* Right: Copy & CTA details */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
                Ready to Start?
              </p>
              <h2 className="text-dark-teal font-bold text-4xl lg:text-[50px] leading-[1.12] mb-6 tracking-tight">
                Boost Your HR <br />
                Efficiency in Dubai, <br />
                UAE!
              </h2>
              <p className="text-gray-500 text-[20px] leading-[26px] max-w-lg mb-8 font-medium">
                Let our experts help you streamline your operations. Get a tailored, compliant HRMS solution built specifically for your business in UAE.
              </p>
            </div>

            {/* Direct Phone Call Block */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-5 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 max-w-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-dark-teal text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">Direct Hotline</p>
                  <a
                    href="tel:+971524828215"
                    className="text-dark-teal font-bold text-[22px] md:text-[24px] hover:text-brand-green transition-colors tracking-tight block"
                  >
                    +971 52 482 8215
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <a
                href="tel:+971524828215"
                style={{ background: 'linear-gradient(90deg, #3cc994 0%, #8bc34a 100%)' }}
                className="inline-block text-white font-bold px-12 py-5 rounded-full text-[18px] tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_12px_24px_rgba(60,201,148,0.3)] hover:shadow-[0_16px_32px_rgba(60,201,148,0.45)] cursor-pointer text-center"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}

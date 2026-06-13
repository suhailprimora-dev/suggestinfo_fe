import { useState } from 'react';
import { motion } from 'framer-motion';

import woofbykulfiImg from '../assets/woofbykulfi-500x400.png (1).png';
import project1Img from '../assets/Project-1-1.png';
import project2Img from '../assets/Project-2-1.png';
import project3Img from '../assets/Project-3-1.png';
import project4Img from '../assets/Project-4-1.png';

// Eager load all Overlay+Shadow PNG card assets dynamically
const imageModules = import.meta.glob('../assets/Overlay+Shadow*.png', { eager: true });

function getClientImage(index) {
  const path = `../assets/Overlay+Shadow (${index}).png`;
  const module = imageModules[path];
  return module ? (module.default || module) : null;
}

// Static data
const categories = ['All', 'Advertising', 'Branding', 'Lead Generation', 'SEO', 'Website'];

const projects = [
  {
    name: 'NAFFCO',
    categories: ['SEO'],
    imgIndex: 3,
  },
  {
    name: 'Salesforce',
    categories: ['Advertising', 'Branding', 'Lead Generation'],
    imgIndex: 2,
  },
  {
    name: 'Simplilearn',
    categories: ['Advertising', 'Branding'],
    imgIndex: 1,
  },
  {
    name: 'Zimyo',
    categories: ['Advertising', 'Branding', 'Lead Generation'],
    imgIndex: 40,
  },
  {
    name: 'Keka',
    categories: ['Advertising', 'Branding', 'Lead Generation'],
    imgIndex: 4,
  },
  {
    name: 'Bayzat',
    categories: ['Advertising', 'Branding', 'Lead Generation'],
    imgIndex: 5,
  },
  {
    name: 'Folks',
    categories: ['SEO', 'Website'],
    imgIndex: 6,
  },
  {
    name: 'NO BS Marketplace',
    categories: ['Advertising', 'Branding'],
    imgIndex: 7,
  },
  {
    name: 'RASI Restaurant Accounting Services',
    categories: [],
    imgIndex: 11,
  },
  {
    name: 'AltexSoft – Technology & Solution',
    categories: ['SEO', 'Website'],
    imgIndex: 9,
  },
  {
    name: 'ReInvestWealth',
    categories: ['Advertising', 'Branding'],
    imgIndex: 10,
  },
  {
    name: 'Rippling',
    categories: ['Advertising', 'Branding'],
    imgIndex: 8,
  },
  {
    name: 'Call Tracking',
    categories: ['Advertising', 'Branding'],
    imgIndex: 14,
  },
  {
    name: 'Engage Bay',
    categories: ['Advertising', 'Branding'],
    imgIndex: 15,
  },
  {
    name: 'Better Help',
    categories: ['Advertising', 'Branding'],
    imgIndex: 16,
  },
  {
    name: 'Salesmate',
    categories: [],
    imgIndex: 17,
  },
  {
    name: 'We Suggest Software',
    categories: ['Advertising', 'Branding', 'Lead Generation', 'SEO', 'Website'],
    imgIndex: 18,
  },
  {
    name: 'Innovate Excellence Safety Consultancy',
    categories: ['Lead Generation', 'SEO', 'Website'],
    imgIndex: 19,
  },
  {
    name: 'Decon',
    categories: ['Website'],
    imgIndex: 20,
  },
  {
    name: 'Shakthi Academy',
    categories: ['SEO', 'Website'],
    imgIndex: 21,
  },
  {
    name: 'Course Suggest',
    categories: ['Advertising', 'Branding', 'Lead Generation', 'SEO', 'Website'],
    imgIndex: 22,
  },
  {
    name: 'AKS IAS Academy',
    categories: ['Advertising', 'Branding', 'SEO', 'Website'],
    imgIndex: 23,
  },
  {
    name: 'List My Clinic',
    categories: ['Advertising', 'Branding', 'Lead Generation', 'SEO', 'Website'],
    imgIndex: 24,
  },
  {
    name: 'Suggest Properties',
    categories: ['Advertising', 'Branding', 'Lead Generation', 'SEO', 'Website'],
    imgIndex: 25,
  },
  {
    name: 'Denvibes',
    categories: ['SEO'],
    imgIndex: 26,
  },
  {
    name: 'Unibryn',
    categories: ['Website'],
    imgIndex: 27,
  },
  {
    name: 'Sattakadir',
    categories: ['Website'],
    imgIndex: 28,
  },
  {
    name: 'Trading Master Class',
    categories: ['Website'],
    imgIndex: 29,
  },
  {
    name: 'We Shine Academy',
    categories: ['Lead Generation'],
    imgIndex: 30,
  },
  {
    name: 'Mind Space Realtor',
    categories: [],
    imgIndex: 31,
  },
  {
    name: 'Maharastra State Pharmacy Council',
    categories: ['Website'],
    imgIndex: 32,
  },
  {
    name: 'Brightline Trading LLC',
    categories: ['Website'],
    imgIndex: 33,
  },
  {
    name: 'Protrade',
    categories: ['Website'],
    imgIndex: 34,
  },
  {
    name: 'Woofbykulfi',
    categories: ['Website'],
    img: woofbykulfiImg,
  },
  {
    name: 'Moderndude',
    categories: ['Website'],
    imgIndex: 36,
  },
  {
    name: 'Zerospaceinterior',
    categories: ['Website'],
    imgIndex: 37,
  },
  {
    name: 'Prime Commit',
    categories: ['Website'],
    imgIndex: 38,
  },
];

const recentProjects = [
  {
    name: 'Naffco',
    img: project1Img,
    description: 'We recently completed a project on NAFFCO, a leading supplier of firefighting equipment and safety solutions. we analyzed their products, strategies, and innovations, highlighting their safety standards, R&D commitment, and market expansion, revealing how NAFFCO stays competitive.',
  },
  {
    name: 'Learning Management System(LMS)',
    img: project2Img,
    description: 'We recently developed a Learning Management System (LMS) for the Maharashtra State Pharmacy Council to streamline continuing education for pharmacists. The user-friendly platform includes course management, online assessments, and certification tracking, enhancing professional development efficiency and accessibility.',
  },
  {
    name: '5tech',
    img: project3Img,
    description: 'We recently started SEO process for 5Tech Services Engineering, aimed at improving their online visibility and search engine rankings. The project involved keyword optimization, content creation, and technical SEO enhancements, resulting in increased web traffic and better lead generation.',
  },
  {
    name: 'King chartering',
    img: project4Img,
    description: 'We recently completed a social media optimization project for King Chartering. The project focused on enhancing their online presence by optimizing content, increasing engagement, and growing their follower base across various social media platforms. This resulted in improved brand visibility and customer interaction.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export function ClientsPage() {
  const [activeTab, setActiveTab] = useState('All');

  // Filtering logic
  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter((p) => p.categories.includes(activeTab));

  return (
    <div className="w-full min-h-screen bg-white">
      
      {/* Header Banner Section */}
      <section className="pt-20 pb-16 text-center bg-gradient-to-b from-[#e8f8f5] to-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-4xl md:text-[50px] font-extrabold text-gray-900 leading-tight mb-5 tracking-tight">
              Our Case Studies
            </h1>
            <p className="text-[15px] md:text-[16px] text-gray-700 leading-relaxed max-w-2xl mx-auto font-medium">
              View some of our work and case studies for clients. We will work to deliver that strategy by building out your existing campaigns, or establishing accounts at new networks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter Bar */}
      <div className="w-full flex flex-wrap justify-center items-center gap-6 px-6 pb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-5 py-2 rounded-[6px] text-[15px] font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === cat
                ? 'bg-[#f97316] text-white shadow-lg shadow-orange-500/20 scale-105'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Case Studies Card Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        {filteredProjects.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            key={activeTab} // Force animate on tab switch
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {filteredProjects.map((proj) => {
              return (
                <motion.div
                  key={proj.name}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
                  className="flex flex-col group cursor-pointer"
                >
                  {/* Card Logo Box */}
                  <div className="w-full transition-all duration-300">
                    <img
                      src={proj.img || getClientImage(proj.imgIndex)}
                      alt={proj.name}
                      className="w-full h-auto object-contain block"
                    />
                  </div>
                  
                  {/* Card Labels */}
                  <div className="-mt-4 px-2">
                    <span className="text-[13px] text-slate-500 font-medium">
                      {proj.categories.join(', ')}
                    </span>
                    <h3 className="text-[19px] font-extrabold text-[#0f172a] mt-0.5 leading-tight group-hover:text-[#f97316] transition-colors duration-200">
                      {proj.name}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full text-center py-20 flex flex-col items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-700">No Case Studies Found</h3>
            <p className="text-gray-400 mt-1">We are currently working on new projects in this category.</p>
          </motion.div>
        )}
      </section>

      {/* Our Recent Projects Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24 border-t border-slate-100 pt-16">
        <h2 className="text-3xl md:text-[40px] font-bold text-gray-900 mb-12 tracking-tight leading-tight">
          Our Recent Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {recentProjects.map((proj) => (
            <div key={proj.name} className="flex flex-col group">
              <div className="w-full rounded-[24px] overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_55px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                <img
                  src={proj.img}
                  alt={proj.name}
                  className="w-full h-auto object-cover aspect-[1.6/1]"
                />
              </div>
              <h3 className="text-[28px] font-bold text-[#0da687] mt-8 mb-3 leading-tight hover:text-[#f97316] transition-colors duration-200">
                {proj.name}
              </h3>
              <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed font-medium">
                {proj.description}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

import { useState } from 'react';
import { ChevronDown, Menu, X, Phone, ChevronRight } from 'lucide-react';
import logo from '../assets/service/UAE/WEB DEVELOPMENT/logo-02.png';
import { useRouter } from '../router';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about', active: true },
  { label: 'Services', isMegaMenu: true },
  { label: 'Software', href: '/software' },
  { label: 'Our Clients', href: '/clients' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacts', href: '/contact' },
];

const servicesMegaMenuData = {
  UAE: {
    'Digital Marketing': [
      { label: 'SEO Services In Dubai', href: '/services/seo-dubai' },
      { label: 'Digital Marketing In Dubai', href: '/services/digital-marketing-dubai' },
    ],
    'Web Development': [
      { label: 'Web Development In Dubai', href: '/services/web-development-dubai' },
      { label: 'E-commerce websites Development in Dubai', href: '/services/ecommerce-dubai' },
      { label: 'Brand Kit for Dubai UAE', href: '/services/brand-kit-dubai' },
    ],
    'Elearning Development': [
      { label: 'LMS development Services in Dubai', href: '/services/lms-dubai' },
      { label: 'Moodle Development Services In Dubai', href: '/services/moodle-dubai' },
    ],
    'Mobile App Development': [
      { label: 'Mobile App Development in Dubai', href: '/services/mobile-app-dubai' }
    ],
    'Public Relations Services': [
      { label: 'PR Services in Dubai', href: '/services/public-relations-dubai' }
    ],
    'Content Writing Services': [
      { label: 'Content Writing in Dubai', href: '/services/content-writing-dubai' }
    ],
    'Translation Services': [
      { label: 'Translation Services in Dubai', href: '/services/translation-dubai' }
    ],
  },
  India: {
    'Digital Marketing': [
      { label: 'SEO Services in India', href: '/services/india/seo-services' },
      { label: 'Social Media Marketing Services in India', href: '/services/india/social-media-marketing' },
      { label: 'SMS Marketing & Database Services in India', href: '/services/india/sms-marketing' },
      { label: 'Lead Generation (Pay Per Lead Services)', href: '/services/india/lead-generation' }
    ],
    'Web Development': [
      { label: 'Custom Website Development in India', href: '/services/india/custom-website-development' },
      { label: 'WordPress CMS Development in India', href: '/services/india/wordpress-development' },
      { label: 'E-commerce Website Development in India', href: '/services/india/ecommerce-development' },
      { label: 'Website Maintenance and Services in India', href: '/services/india/website-maintenance' },
      { label: 'Brand Kit for Chennai', href: '/services/india/brand-kit' }
    ],
    'Mobile App Development': [
      { label: 'Android App Development in India', href: '/services/india/android-app-development' },
      { label: 'IOS App Development in India', href: '/services/india/ios-app-development' }
    ],
    'Elearning Development': [
      { label: 'LMS Development in india', href: '/services/india/lms-development' }
    ]
  }
};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [forceClose, setForceClose] = useState(false);
  const { currentPath, navigate } = useRouter();

  const [activeCountry, setActiveCountry] = useState('UAE');
  const [activeCategory, setActiveCategory] = useState('Digital Marketing');

  return (
    <header className="w-full z-50 relative shadow-[0_8px_30px_rgba(0,0,0,0.16)]">
      <div style={{ backgroundColor: '#0a2e2c' }} className="shadow-md">
        {/* Nav row — min-h forces the bar to be taller; logo fills it top-to-bottom */}
        <div className="w-full px-6 md:px-12 lg:px-16 flex items-stretch" style={{ minHeight: '110px' }}>

          {/* Logo — far LEFT */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
            className="flex items-center flex-shrink-0 py-3 mr-10"
          >
            <img
              src={logo}
              alt="suggestinfo logo"
              className="h-full max-h-24 w-auto object-contain"
              style={{ minHeight: '80px' }}
            />
          </a>

          {/* Desktop Nav — CENTERED */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-8">
            {navItems.map((item) =>
              item.isMegaMenu ? (
                <div key={item.label} className="dropdown-parent relative" onMouseLeave={() => { setActiveCountry('UAE'); setActiveCategory('Digital Marketing'); }}>
                  <button
                    onClick={() => {
                      if (item.label === 'Services') {
                        navigate('/services');
                      }
                    }}
                    className={`flex items-center gap-1.5 text-[17px] font-semibold transition-colors py-1 cursor-pointer ${(item.label === 'Software' && currentPath.startsWith('/software')) ||
                        (item.label === 'Services' && currentPath.startsWith('/services')) ||
                        (item.label === 'Our Clients' && currentPath.startsWith('/clients'))
                        ? 'text-white border-b-2 border-[#3cc994] pb-0'
                        : 'text-slate-200 hover:text-white'
                      }`}
                  >
                    {item.label}
                    <ChevronDown size={16} className="opacity-70 ml-0.5" />
                  </button>
                  <ul 
                    className="nav-dropdown absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded shadow-xl min-w-[150px] py-2 z-50 border border-slate-100"
                    style={{ display: forceClose ? 'none' : '' }}
                  >
                    {Object.keys(servicesMegaMenuData).map((country) => (
                      <li key={country} className="relative group/country">
                        <button
                          className="w-full flex items-center justify-between px-5 py-2.5 text-[15px] transition-colors group-hover/country:bg-[#3f444c] group-hover/country:text-white text-slate-700 bg-white"
                        >
                          {country}
                          <ChevronRight size={16} />
                        </button>
                        
                        {/* Nested Categories Dropdown */}
                        <ul className="absolute top-0 left-full hidden group-hover/country:block bg-white rounded shadow-xl min-w-[260px] py-2 border border-slate-100">
                          {Object.keys(servicesMegaMenuData[country]).map((cat) => {
                            const catLinks = servicesMegaMenuData[country][cat];
                            const isSingleLink = catLinks?.length === 1;

                            return (
                              <li key={cat} className="relative group/cat">
                                {isSingleLink ? (
                                  <a
                                    href={catLinks[0].href}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setForceClose(true);
                                      setTimeout(() => setForceClose(false), 200);
                                      navigate(catLinks[0].href);
                                    }}
                                    className={`w-full flex items-center justify-between px-5 py-2.5 text-[15px] transition-colors group-hover/cat:bg-[#3f444c] group-hover/cat:text-white ${
                                      currentPath === catLinks[0].href
                                        ? 'text-[#3cc994] bg-slate-50'
                                        : 'text-slate-700 bg-white'
                                    }`}
                                  >
                                    {cat}
                                  </a>
                                ) : (
                                  <>
                                    <button
                                      className="w-full flex items-center justify-between px-5 py-2.5 text-[15px] transition-colors group-hover/cat:bg-[#3f444c] group-hover/cat:text-white text-slate-700 bg-white"
                                    >
                                      {cat}
                                      <ChevronRight size={16} />
                                    </button>
                                    
                                    {/* Nested Links Dropdown */}
                                    <ul className="absolute top-0 left-full hidden group-hover/cat:block bg-white rounded shadow-xl min-w-[340px] py-2 border border-slate-100">
                                      {catLinks?.length > 0 ? (
                                        catLinks.map((link) => (
                                          <li key={link.label}>
                                            <a
                                              href={link.href}
                                              onClick={(e) => {
                                                e.preventDefault();
                                                setForceClose(true);
                                                setTimeout(() => setForceClose(false), 200);
                                                navigate(link.href);
                                              }}
                                              className={`block px-5 py-2.5 text-[15px] font-medium transition-colors ${
                                                currentPath === link.href
                                                  ? 'text-[#3cc994] bg-[#e8f8f5]'
                                                  : 'text-slate-600 hover:text-[#3cc994] hover:bg-[#e8f8f5]'
                                              }`}
                                            >
                                              {link.label}
                                            </a>
                                          </li>
                                        ))
                                      ) : (
                                        <li>
                                          <div className="px-5 py-2.5 text-[15px] text-slate-400 italic">Coming soon...</div>
                                        </li>
                                      )}
                                    </ul>
                                  </>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(item.href);
                  }}
                  className={`text-[17px] font-semibold py-1 transition-colors ${currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href))
                      ? 'text-white border-b-2 border-[#3cc994] pb-0'
                      : 'text-slate-200 hover:text-white'
                    }`}
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Phone numbers — far RIGHT */}
          <div className="hidden lg:flex flex-col justify-center gap-1 text-right flex-shrink-0 ml-10">
            <a
              href="tel:+971524828215"
              className="flex items-center justify-end gap-2 text-[16px] font-semibold text-slate-200 hover:text-[#3cc994] transition-colors"
            >
              <Phone size={16} className="text-[#3cc994]" />
              <span>UAE +971 52 482 8215</span>
            </a>
            <a
              href="tel:+917339131492"
              className="flex items-center justify-end gap-2 text-[16px] font-semibold text-slate-200 hover:text-[#3cc994] transition-colors"
            >
              <Phone size={16} className="text-[#3cc994]" />
              <span>IND +91 73391 31492</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden text-white flex items-center ml-auto"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setMobileOpen(false)} />
          <div style={{ backgroundColor: '#0a2e2c' }} className="fixed top-0 right-0 h-full w-72 z-50 shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);
                  navigate('/');
                }}
              >
                <img src={logo} alt="suggestinfo" className="h-11 w-auto" />
              </a>
              <button onClick={() => setMobileOpen(false)} className="text-white" aria-label="Close menu">
                <X size={22} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) =>
                  item.isMegaMenu ? (
                    <li key={item.label}>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        className={`w-full flex justify-between items-center text-[15px] font-semibold py-2.5 px-2 hover:text-white transition-colors ${(item.label === 'Software' && currentPath.startsWith('/software')) ||
                            (item.label === 'Services' && currentPath.startsWith('/services')) ||
                            (item.label === 'Our Clients' && currentPath.startsWith('/clients'))
                            ? 'text-white bg-white/10 rounded-md font-bold'
                            : 'text-slate-300'
                          }`}
                      >
                        {item.label}
                        <ChevronDown size={14} className={`transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileExpanded === item.label && (
                        <ul className="pl-4 border-l border-white/10 mb-1">
                          {Object.entries(servicesMegaMenuData.UAE).flatMap(([cat, links]) => links).map((c) => (
                            <li key={c.label}>
                              <a
                                href={c.href}
                                className={`block text-[14px] py-2 px-2 transition-colors ${currentPath === c.href
                                    ? 'text-white font-bold'
                                    : 'text-slate-400 hover:text-white'
                                  }`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setMobileOpen(false);
                                  navigate(c.href);
                                }}
                              >
                                {c.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ) : (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className={`block text-[15px] font-semibold py-2.5 px-2 transition-colors ${currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href))
                            ? 'text-white bg-white/10 rounded-md font-bold'
                            : 'text-slate-300 hover:text-white'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          setMobileOpen(false);
                          navigate(item.href);
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>
            <div className="px-6 py-4 border-t border-white/10 flex flex-col gap-2">
              <a href="tel:+971524828215" className="flex items-center gap-2 text-[13px] font-semibold text-slate-400">
                <Phone size={13} className="text-[#3cc994]" /> UAE +971 52 482 8215
              </a>
              <a href="tel:+917339131492" className="flex items-center gap-2 text-[13px] font-semibold text-slate-400">
                <Phone size={13} className="text-[#3cc994]" /> IND +91 73391 31492
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

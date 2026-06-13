import { useState } from 'react';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';
import logo from '../assets/suggestinfo-logo.png';
import { useRouter } from '../router';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about', active: true },
  {
    label: 'Services',
    children: [
      { label: 'Web Development', href: '/services/web' },
      { label: 'SEO Optimization', href: '/services/seo' },
      { label: 'UI/UX Design', href: '/services/design' },
    ],
  },
  {
    label: 'Software',
    href: '/software',
  },
  {
    label: 'Our Clients',
    href: '/clients',
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacts', href: '/contact' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const { currentPath, navigate } = useRouter();

  return (
    <header className="w-full z-50 relative shadow-[0_8px_30px_rgba(0,0,0,0.16)]">
      <div style={{ backgroundColor: '#0a2e2c' }} className="border-b-4 border-white">
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
              item.children ? (
                <div key={item.label} className="dropdown-parent relative">
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
                  <ul className="nav-dropdown absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-md shadow-xl min-w-[185px] py-1.5 z-50 border border-slate-100">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <a
                          href={c.href}
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(c.href);
                          }}
                          className={`block px-5 py-2.5 text-[14px] font-medium transition-colors ${currentPath === c.href
                              ? 'bg-[#e8f8f5] text-[#3cc994]'
                              : 'text-gray-700 hover:bg-[#e8f8f5] hover:text-[#3cc994]'
                            }`}
                        >
                          {c.label}
                        </a>
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
                  item.children ? (
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
                          {item.children.map((c) => (
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

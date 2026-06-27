import { motion } from 'framer-motion';
import logo from '../assets/service/UAE/WEB DEVELOPMENT/logo-02.png';
import { useRouter } from '../router';

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

export function Footer() {
  const { navigate } = useRouter();

  return (
    <footer style={{ backgroundColor: '#03201e' }} className="text-white relative overflow-hidden pt-20 pb-16">

      {/* Floating animated colored dots in background for premium layout */}
      <FloatingDot x="5%" y="35%" size={8} color="#ec4899" duration={8} delay={0} />
      <FloatingDot x="6%" y="65%" size={10} color="#f59e0b" duration={9} delay={1} />
      <FloatingDot x="30%" y="75%" size={8} color="#ec4899" duration={7} delay={2} />
      <FloatingDot x="65%" y="15%" size={8} color="#f59e0b" duration={8} delay={0.5} />
      <FloatingDot x="90%" y="75%" size={10} color="#eab308" duration={10} delay={1.5} />

      <div className="max-w-screen-xl mx-auto px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Column 1: Logo */}
          <div className="flex items-start md:col-span-4 pl-2 md:pl-10">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate('/about/');
              }}
            >
              <img src={logo} alt="suggestinfo" className="h-32 md:h-[135px] w-auto object-contain max-w-full" />
            </a>
          </div>

          {/* Column 2: About */}
          <div className="md:col-span-2">
            <h4 className="text-[17px] font-bold text-white mb-6 tracking-wide">About</h4>
            <ul className="flex flex-col gap-3.5">
              {[
                { label: 'About us', href: '/about/' },
                { label: 'Services', href: '/services/' },
                { label: 'Blog', href: '/blog/' },
                { label: 'Contact Us', href: '/contact/' }
              ].map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.label === 'Contact Us') {
                        e.preventDefault();
                        navigate('/contact/');
                      } else if (item.label === 'About us') {
                        e.preventDefault();
                        navigate('/about/');
                      } else if (item.label === 'Services') {
                        e.preventDefault();
                      }
                    }}
                    className="text-[15px] text-slate-300 hover:text-[#3cc994] transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="md:col-span-2">
            <h4 className="text-[17px] font-bold text-white mb-6 tracking-wide">Company</h4>
            <ul className="flex flex-col gap-3.5">
              {[
                { label: 'Privacy Policy', href: '/privacy/' },
                { label: 'Terms of Service', href: '/terms/' }
              ].map(item => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(item.href);
                    }}
                    className="text-[15px] text-slate-300 hover:text-[#3cc994] transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div className="md:col-span-4">
            <h4 className="text-[17px] font-bold text-white mb-6 tracking-wide">Social Media</h4>
            <ul className="flex flex-col gap-3.5 mb-6">
              {['Facebook', 'Twitter', 'Linkedin', 'Instagram', 'You Tube'].map(l => (
                <li key={l}>
                  <a href="#" className="text-[15px] text-slate-300 hover:text-[#3cc994] transition-colors font-medium">
                    {l}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Icons row, positioned directly under You Tube link inside Column 4 */}
            <div className="flex items-center gap-4 mt-8">
              {/* Facebook Icon: filled white circle with 'f' */}
              <a href="#" aria-label="Facebook" className="hover:scale-110 transition-transform">
                <svg className="w-11 h-11 fill-white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Twitter Icon: Bird */}
              <a href="#" aria-label="Twitter" className="hover:scale-110 transition-transform">
                <svg className="w-11 h-11 fill-white" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>

              {/* LinkedIn Icon: Squared in */}
              <a href="#" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
                <svg className="w-11 h-11 fill-white" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Instagram Icon: Outline Camera */}
              <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform">
                <svg className="w-11 h-11 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright section (Bottom left, no top border, clean) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[15px] text-slate-300 font-medium">
            Copyright 2022@suggestinfo.com
          </p>
        </div>

      </div>
    </footer>
  );
}

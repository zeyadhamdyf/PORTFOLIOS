import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGlobe, FaMoon, FaSun, FaDownload } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../hooks/useLang.jsx';
import { useTheme } from '../hooks/useTheme.jsx';
import cfg from '../data/config.js';

const navLinks = [
  { id: 'home', key: 'home' },
  { id: 'about', key: 'about' },
  { id: 'education', key: 'education' },
  { id: 'experience', key: 'experience' },
  { id: 'skills', key: 'skills' },
  { id: 'projects', key: 'projects' },
  { id: 'social-tree', key: 'socialTree' },
  { id: 'services', key: 'services' },
  { id: 'testimonials', key: 'testimonials' },
  { id: 'contact', key: 'contact' },
];

export default function Navbar() {
  const { t, toggle, lang } = useLang();
  const { theme, toggleTheme, isDark } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link spy
      const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 backdrop-blur-md shadow-md border-b'
          : 'py-4 bg-transparent border-b border-transparent'
      }`}
      style={{
        backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
        borderColor: scrolled ? 'var(--nav-border)' : 'transparent',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-1.5 text-xl sm:text-2xl font-extrabold tracking-tight"
          aria-label="Zeyad Hamdy Portfolio"
        >
          <span className="font-mono text-xs px-2 py-0.5 rounded border transition-colors border-current opacity-70 group-hover:opacity-100">
            &lt;
          </span>
          <span className="theme-accent-gradient">Zeyad</span>
          <span className="font-mono text-xs px-2 py-0.5 rounded border transition-colors border-current opacity-70 group-hover:opacity-100">
            /&gt;
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden xl:flex items-center gap-5 text-sm font-medium">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`transition-colors py-1 relative ${
                    isActive
                      ? isDark
                        ? 'text-dark-goldLight font-semibold'
                        : 'text-light-blueSecondary font-semibold'
                      : isDark
                      ? 'text-gray-300 hover:text-dark-gold'
                      : 'text-light-text hover:text-light-blueSecondary'
                  }`}
                >
                  {t.nav[item.key] || item.key}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute bottom-0 inset-x-0 h-0.5 rounded-full"
                      style={{
                        background: 'var(--accent-gradient)',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Actions (Language Switcher, Theme Switcher, CV Button, Mobile Hamburger) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* CV Button */}
          <a
            href={cfg.cv}
            download="Zeyad_Hamdy_CV.pdf"
            className="btn btn-outline !py-1.5 !px-3 sm:!px-4 text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-sm"
            aria-label={t.nav.cv}
          >
            <FaDownload className="text-xs" />
            <span>{t.nav.cv}</span>
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 sm:p-2.5 rounded-lg border transition-all duration-200 cursor-pointer text-sm sm:text-base hover:scale-105"
            style={{
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--bg-card)',
              color: isDark ? '#F5D77A' : '#123B66',
            }}
            title={isDark ? t.nav.themeLight : t.nav.themeDark}
            aria-label="Toggle visual theme"
          >
            {isDark ? <FaSun className="text-amber-300 animate-spin-slow" /> : <FaMoon />}
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggle}
            className="p-2 sm:py-2 sm:px-3 rounded-lg border flex items-center gap-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 hover:scale-105"
            style={{
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--bg-card)',
            }}
            title="Switch Language"
            aria-label="Switch Language"
          >
            <FaGlobe className={isDark ? 'text-dark-gold' : 'text-light-blueSecondary'} />
            <span className="hidden xs:inline">{t.lang}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 rounded-lg border text-lg focus:outline-none"
            style={{
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--bg-card)',
            }}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close Menu' : 'Open Menu'}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden border-b px-4 py-5 shadow-xl"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-subtle)',
            }}
          >
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className={`block px-3 py-2 rounded-lg transition-colors ${
                        isActive
                          ? isDark
                            ? 'bg-amber-500/10 text-dark-gold font-bold'
                            : 'bg-blue-500/10 text-light-bluePrimary font-bold'
                          : isDark
                          ? 'text-gray-300 hover:bg-neutral-800'
                          : 'text-light-text hover:bg-blue-50'
                      }`}
                    >
                      {t.nav[item.key] || item.key}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 pt-4 border-t flex flex-wrap gap-2 items-center justify-between"
                 style={{ borderColor: 'var(--border-subtle)' }}>
              <a
                href={cfg.cv}
                download="Zeyad_Hamdy_CV.pdf"
                className="btn btn-primary w-full text-center text-sm font-semibold !py-2.5"
                onClick={() => setOpen(false)}
              >
                <FaDownload className="text-xs" />
                <span>{t.nav.cv}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

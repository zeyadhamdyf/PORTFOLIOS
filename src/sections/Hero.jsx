import { motion } from 'framer-motion';
import { FaRocket, FaArrowRight, FaArrowLeft, FaGithub, FaLinkedin, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { useLang } from '../hooks/useLang.jsx';
import { useTheme } from '../hooks/useTheme.jsx';
import Typewriter from '../components/Typewriter.jsx';
import cfg from '../data/config.js';

export default function Hero() {
  const { t, lang } = useLang();
  const { isDark } = useTheme();
  const isRtl = lang === 'ar';

  const quickSocials = [
    { href: cfg.github, icon: FaGithub, label: 'GitHub' },
    { href: cfg.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
    { href: cfg.whatsapp, icon: FaWhatsapp, label: 'WhatsApp' },
    { href: cfg.telegram, icon: FaTelegram, label: 'Telegram' },
  ].filter((s) => s.href);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 -start-24 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-20"
        style={{
          backgroundColor: isDark ? '#D4AF37' : '#2A6F97',
        }}
      />
      <div
        className="absolute bottom-10 -end-24 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-15"
        style={{
          backgroundColor: isDark ? '#F5D77A' : '#012A4A',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Text & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: isRtl ? 40 : -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 text-center lg:text-start order-2 lg:order-1"
        >
          {/* Availability Status Badge */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 border shadow-sm transition-all"
            style={{
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--bg-card)',
              color: isDark ? '#F5D77A' : '#012A4A',
            }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>{t.hero.badge}</span>
          </div>

          {/* Main Name Heading */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] mb-4">
            <span className="block text-opacity-90">{t.hero.name}</span>
            <span className="theme-accent-gradient block mt-1 text-3xl sm:text-5xl xl:text-6xl">
              {t.hero.title}
            </span>
          </h1>

          {/* Animated Typewriter Effect */}
          <div
            className="text-lg sm:text-2xl font-bold min-h-[2.5rem] flex items-center justify-center lg:justify-start gap-2 mb-4"
            style={{ color: isDark ? '#F5D77A' : '#2A6F97' }}
          >
            <Typewriter phrases={t.phrases} />
          </div>

          {/* Professional Description */}
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8"
            style={{ color: 'var(--text-muted)' }}
          >
            {t.hero.desc}
          </p>

          {/* Large Hero Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-stretch sm:items-center">
            {/* Button 1: Hire Me */}
            <a
              href="#contact"
              className="btn btn-primary group !py-3.5 !px-8 text-base shadow-lg"
              aria-label={t.hero.hireMe}
            >
              <FaRocket className="text-lg transition-transform group-hover:-translate-y-1 group-hover:scale-110" />
              <span>{t.hero.hireMe}</span>
            </a>

            {/* Button 2: View Projects */}
            <a
              href="#projects"
              className="btn btn-outline group !py-3.5 !px-8 text-base"
              aria-label={t.hero.viewProjects}
            >
              <span>{t.hero.viewProjects}</span>
              {isRtl ? (
                <FaArrowLeft className="text-sm transition-transform group-hover:-translate-x-1.5" />
              ) : (
                <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1.5" />
              )}
            </a>
          </div>

          {/* Quick Social Channels */}
          <div
            className="mt-8 pt-6 border-t flex items-center gap-4 justify-center lg:justify-start"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <span className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--text-muted)' }}>
              {lang === 'ar' ? 'تواصل فوري:' : 'Quick Connect:'}
            </span>
            <div className="flex items-center gap-3">
              {quickSocials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="p-2 rounded-lg border transition-all duration-200 hover:scale-110"
                  style={{
                    borderColor: 'var(--border-subtle)',
                    backgroundColor: 'var(--bg-card)',
                    color: isDark ? '#D4AF37' : '#2A6F97',
                  }}
                >
                  <s.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Prominent Profile Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center order-1 lg:order-2"
        >
          <div className="relative">
            {/* Glowing Accent Backdrop */}
            <div
              className="absolute -inset-4 rounded-[2.5rem] blur-2xl opacity-40 transition-all duration-500"
              style={{
                background: isDark
                  ? 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, rgba(245,215,122,0.1) 70%, transparent 100%)'
                  : 'radial-gradient(circle, rgba(42,111,151,0.35) 0%, rgba(1,42,74,0.1) 70%, transparent 100%)',
              }}
            />

            {/* Profile Frame Container */}
            <div
              className="float-animation relative p-2 sm:p-3 rounded-[2.2rem] border-2 shadow-2xl transition-all duration-300 w-[min(80vw,340px)] sm:w-[380px] lg:w-[420px] aspect-[4/5] overflow-hidden"
              style={{
                borderColor: isDark ? 'rgba(212, 175, 55, 0.45)' : '#A9D6E5',
                backgroundColor: 'var(--bg-card)',
                boxShadow: isDark
                  ? '0 0 50px rgba(212, 175, 55, 0.25)'
                  : '0 0 50px rgba(42, 111, 151, 0.2)',
              }}
            >
              <img
                src={cfg.images.profile}
                alt={t.hero.name}
                loading="eager"
                className="w-full h-full object-cover rounded-[1.8rem] transition-transform duration-700 hover:scale-105"
              />

              {/* Decorative Corner Tech Accents */}
              <div
                className="absolute top-4 start-4 w-4 h-4 border-t-2 border-s-2 pointer-events-none"
                style={{ borderColor: isDark ? '#D4AF37' : '#2A6F97' }}
              />
              <div
                className="absolute bottom-4 end-4 w-4 h-4 border-b-2 border-e-2 pointer-events-none"
                style={{ borderColor: isDark ? '#D4AF37' : '#2A6F97' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

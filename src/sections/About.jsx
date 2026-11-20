import { motion } from 'framer-motion';
import { FaUserGraduate, FaCode, FaServer, FaChalkboardTeacher } from 'react-icons/fa';
import { useLang } from '../hooks/useLang.jsx';
import { useTheme } from '../hooks/useTheme.jsx';
import Typewriter from '../components/Typewriter.jsx';
import Card3D from '../components/Card3D.jsx';
import cfg from '../data/config.js';

export default function About() {
  const { t } = useLang();
  const { isDark } = useTheme();

  const highlightIcons = [FaCode, FaServer, FaUserGraduate, FaChalkboardTeacher];

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-sec)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="float-animation relative w-full max-w-md">
              {/* Decorative Backdrop Glow */}
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-35"
                style={{
                  background: isDark
                    ? 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)'
                    : 'radial-gradient(circle, rgba(42,111,151,0.3) 0%, transparent 70%)',
                }}
              />

              {/* Workspace Image Frame with Theme Accent Border */}
              <div
                className="relative rounded-3xl p-2.5 sm:p-3 border-2 shadow-2xl overflow-hidden"
                style={{
                  borderColor: isDark ? 'rgba(212, 175, 55, 0.45)' : '#A9D6E5',
                  backgroundColor: 'var(--bg-card)',
                  boxShadow: isDark
                    ? '0 20px 50px -15px rgba(212, 175, 55, 0.25)'
                    : '0 20px 50px -15px rgba(42, 111, 151, 0.2)',
                }}
              >
                <img
                  loading="lazy"
                  src={cfg.images.about}
                  alt={t.about.h}
                  className="w-full aspect-[4/3] object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
                />

                {/* Tech Deco Elements */}
                <div
                  className="absolute top-4 start-4 px-3 py-1 rounded-full text-xs font-mono font-semibold backdrop-blur-md border shadow-sm"
                  style={{
                    backgroundColor: isDark ? 'rgba(8,8,8,0.75)' : 'rgba(255,255,255,0.92)',
                    borderColor: 'var(--border-subtle)',
                    color: isDark ? '#F5D77A' : '#012A4A',
                  }}
                >
                  ENGINEERING // WORKSPACE
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text & Competencies Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 border"
              style={{
                borderColor: 'var(--border-subtle)',
                backgroundColor: 'var(--bg-card)',
                color: isDark ? '#F5D77A' : '#012A4A',
              }}
            >
              <FaCode className="text-xs" />
              <span>{t.about.badge}</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              <span className="theme-accent-gradient">{t.about.h}</span>
            </h2>

            {/* Typewriter phrases */}
            <div
              className="text-lg sm:text-xl font-bold min-h-[2rem] flex items-center mb-6"
              style={{ color: isDark ? '#F5D77A' : '#2A6F97' }}
            >
              <Typewriter phrases={t.about.phrases} />
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 mb-8">
              {t.about.p.map((para, i) => (
                <p
                  key={i}
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Key Engineering Pillars with 3D Tilt Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {t.about.highlights.map((item, idx) => {
                const Icon = highlightIcons[idx] || FaCode;
                return (
                  <Card3D
                    key={idx}
                    maxTilt={7}
                    lift={8}
                    scale={1.01}
                    className="p-4 rounded-xl flex flex-row items-start gap-3.5 overflow-hidden"
                  >
                    <div
                      className="p-2.5 rounded-lg text-lg shrink-0 mt-0.5"
                      style={{
                        backgroundColor: isDark
                          ? 'rgba(212, 175, 55, 0.1)'
                          : 'rgba(169, 214, 229, 0.25)',
                        color: isDark ? '#F5D77A' : '#2A6F97',
                      }}
                    >
                      <Icon />
                    </div>
                    <div>
                      <h4
                        className="font-bold text-sm sm:text-base mb-0.5"
                        style={{ color: 'var(--text-main)' }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-xs leading-normal" style={{ color: 'var(--text-muted)' }}>
                        {item.desc}
                      </p>
                    </div>
                  </Card3D>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

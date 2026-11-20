import { motion } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';
import { useLang } from '../hooks/useLang.jsx';
import { useTheme } from '../hooks/useTheme.jsx';
import Card3D from '../components/Card3D.jsx';
import skills from '../data/skills.js';

export default function Skills() {
  const { t } = useLang();
  const { isDark } = useTheme();

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3 border"
            style={{
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--bg-card)',
              color: isDark ? '#F5D77A' : '#012A4A',
            }}
          >
            <FaLaptopCode className="text-sm" />
            <span>{t.skills.h}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            <span className="theme-accent-gradient">{t.skills.h}</span>
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'var(--text-muted)' }}>
            {t.skills.subtitle}
          </p>
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {skills.map(([catKey, skillList], catIdx) => (
            <motion.div
              key={catKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              className="space-y-4"
            >
              {/* Category Title */}
              <div className="flex items-center gap-3">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: isDark ? '#D4AF37' : '#2A6F97' }}
                />
                <h3
                  className="text-lg sm:text-xl font-bold tracking-tight"
                  style={{ color: isDark ? '#F5D77A' : '#012A4A' }}
                >
                  {t.skills[catKey] || catKey}
                </h3>
                <div
                  className="h-px flex-1 ms-2"
                  style={{
                    background: isDark
                      ? 'linear-gradient(to right, rgba(212, 175, 55, 0.3), transparent)'
                      : 'linear-gradient(to right, #A9D6E5, transparent)',
                  }}
                />
              </div>

              {/* Skills Grid — ICONS ONLY + NAMES UNDERNEATH — STRICTLY NO PERCENTAGES */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
                {skillList.map(([name, IconComponent]) => (
                  <Card3D
                    key={name}
                    maxTilt={10}
                    lift={8}
                    scale={1.03}
                    className="p-4 sm:p-5 flex flex-col items-center justify-center text-center gap-3 group overflow-hidden"
                  >
                    {/* Technology Icon */}
                    <div
                      className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-110"
                      style={{
                        color: isDark ? '#D4AF37' : '#2A6F97',
                      }}
                    >
                      <IconComponent />
                    </div>

                    {/* Technology Name Underneath */}
                    <span
                      className="text-xs sm:text-sm font-semibold tracking-wide leading-tight transition-colors"
                      style={{ color: 'var(--text-main)' }}
                    >
                      {name}
                    </span>
                  </Card3D>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

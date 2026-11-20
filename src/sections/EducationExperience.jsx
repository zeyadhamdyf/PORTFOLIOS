import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaChalkboardTeacher, FaLaptopCode, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useLang } from '../hooks/useLang.jsx';
import { useTheme } from '../hooks/useTheme.jsx';
import Card3D from '../components/Card3D.jsx';

export function Education() {
  const { t } = useLang();
  const { isDark } = useTheme();

  const eduIcons = [FaGraduationCap, FaCertificate];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3 border"
            style={{
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--bg-card)',
              color: isDark ? '#F5D77A' : '#012A4A',
            }}
          >
            <FaGraduationCap className="text-sm" />
            <span>{t.education.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">
            <span className="theme-accent-gradient">{t.education.h}</span>
          </h2>
        </div>

        {/* Timeline Grid */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Spine */}
          <div
            className="absolute top-4 bottom-4 start-4 sm:start-8 w-0.5"
            style={{
              background: isDark
                ? 'linear-gradient(to bottom, #D4AF37, rgba(212, 175, 55, 0.2))'
                : 'linear-gradient(to bottom, #2A6F97, #A9D6E5)',
            }}
          />

          <div className="space-y-8">
            {t.education.items.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative ps-12 sm:ps-20"
                >
                  {/* Timeline Node Point */}
                  <div
                    className="absolute start-1.5 sm:start-5.5 top-5 w-6 h-6 rounded-full border-2 flex items-center justify-center -translate-x-1/2 shadow-md transition-transform hover:scale-125 z-10"
                    style={{
                      borderColor: isDark ? '#F5D77A' : '#2A6F97',
                      backgroundColor: 'var(--bg-main)',
                      color: isDark ? '#F5D77A' : '#2A6F97',
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: isDark ? '#F5D77A' : '#2A6F97' }}
                    />
                  </div>

                  {/* Card Content with 3D Tilt */}
                  <Card3D maxTilt={7} lift={8} scale={1.01} className="p-6 sm:p-7 overflow-hidden">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span
                        className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md border"
                        style={{
                          borderColor: 'var(--border-subtle)',
                          backgroundColor: isDark
                            ? 'rgba(212,175,55,0.08)'
                            : 'rgba(169, 214, 229, 0.25)',
                          color: isDark ? '#F5D77A' : '#012A4A',
                        }}
                      >
                        {item.type}
                      </span>
                      <span
                        className="text-xs font-medium flex items-center gap-1.5"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <FaCalendarAlt className="text-[11px]" />
                        {item.period}
                      </span>
                    </div>

                    <h3
                      className="text-xl sm:text-2xl font-bold mb-1"
                      style={{ color: 'var(--text-main)' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm font-semibold mb-3 flex items-center gap-1.5"
                      style={{ color: isDark ? '#D4AF37' : '#2A6F97' }}
                    >
                      <FaMapMarkerAlt className="text-xs" />
                      {item.institution}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {item.desc}
                    </p>
                  </Card3D>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  const { t } = useLang();
  const { isDark } = useTheme();

  const expIcons = [FaChalkboardTeacher, FaLaptopCode];

  return (
    <section
      id="experience"
      className="py-20 relative"
      style={{ backgroundColor: 'var(--bg-sec)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3 border"
            style={{
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--bg-card)',
              color: isDark ? '#F5D77A' : '#012A4A',
            }}
          >
            <FaLaptopCode className="text-sm" />
            <span>{t.experience.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">
            <span className="theme-accent-gradient">{t.experience.h}</span>
          </h2>
        </div>

        {/* Timeline Grid */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Spine */}
          <div
            className="absolute top-4 bottom-4 start-4 sm:start-8 w-0.5"
            style={{
              background: isDark
                ? 'linear-gradient(to bottom, #D4AF37, rgba(212, 175, 55, 0.2))'
                : 'linear-gradient(to bottom, #2A6F97, #A9D6E5)',
            }}
          />

          <div className="space-y-8">
            {t.experience.items.map((item, index) => {
              const Icon = expIcons[index] || FaLaptopCode;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative ps-12 sm:ps-20"
                >
                  {/* Timeline Node Point */}
                  <div
                    className="absolute start-1.5 sm:start-5.5 top-5 w-6 h-6 rounded-full border-2 flex items-center justify-center -translate-x-1/2 shadow-md transition-transform hover:scale-125 z-10"
                    style={{
                      borderColor: isDark ? '#F5D77A' : '#2A6F97',
                      backgroundColor: 'var(--bg-main)',
                      color: isDark ? '#F5D77A' : '#2A6F97',
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: isDark ? '#F5D77A' : '#2A6F97' }}
                    />
                  </div>

                  {/* Card Content with 3D Tilt */}
                  <Card3D maxTilt={7} lift={8} scale={1.01} className="p-6 sm:p-7 overflow-hidden">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span
                        className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md border flex items-center gap-1.5"
                        style={{
                          borderColor: 'var(--border-subtle)',
                          backgroundColor: isDark
                            ? 'rgba(212,175,55,0.08)'
                            : 'rgba(169, 214, 229, 0.25)',
                          color: isDark ? '#F5D77A' : '#012A4A',
                        }}
                      >
                        <Icon className="text-xs" />
                        {item.role}
                      </span>
                      <span
                        className="text-xs font-medium flex items-center gap-1.5"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <FaCalendarAlt className="text-[11px]" />
                        {item.period}
                      </span>
                    </div>

                    <h3
                      className="text-xl sm:text-2xl font-bold mb-1"
                      style={{ color: 'var(--text-main)' }}
                    >
                      {item.role}
                    </h3>
                    <p
                      className="text-sm font-semibold mb-3 flex items-center gap-1.5"
                      style={{ color: isDark ? '#D4AF37' : '#2A6F97' }}
                    >
                      <FaMapMarkerAlt className="text-xs" />
                      {item.company}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {item.desc}
                    </p>
                  </Card3D>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

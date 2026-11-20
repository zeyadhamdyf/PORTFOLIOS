import { motion } from 'framer-motion';
import { FaCogs } from 'react-icons/fa';
import { useLang } from '../hooks/useLang.jsx';
import { useTheme } from '../hooks/useTheme.jsx';
import Card3D from '../components/Card3D.jsx';
import services from '../data/services.js';

export default function Services() {
  const { t } = useLang();
  const { isDark } = useTheme();

  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-sec)' }}
    >
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
            <FaCogs className="text-sm" />
            <span>{t.services.h}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            <span className="theme-accent-gradient">{t.services.h}</span>
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'var(--text-muted)' }}>
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Cards Grid with 3D Tilt */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {services.map(([key, IconComponent], index) => {
            const serviceData = t.services[key] || ['', ''];
            const [title, desc] = serviceData;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="h-full"
              >
                <Card3D
                  maxTilt={8}
                  lift={10}
                  scale={1.02}
                  className="p-7 flex flex-col justify-between group h-full overflow-hidden"
                >
                  <div>
                    {/* Service Icon Box */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 border transition-transform duration-300 group-hover:scale-110"
                      style={{
                        borderColor: isDark ? 'var(--border-subtle)' : '#A9D6E5',
                        backgroundColor: isDark
                          ? 'rgba(212, 175, 55, 0.1)'
                          : 'rgba(169, 214, 229, 0.25)',
                        color: isDark ? '#F5D77A' : '#2A6F97',
                      }}
                    >
                      <IconComponent />
                    </div>

                    {/* Title & Description */}
                    <h3
                      className="text-xl font-bold mb-2 transition-colors"
                      style={{ color: 'var(--text-main)' }}
                    >
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {desc}
                    </p>
                  </div>

                  {/* Bottom Decorative Indicator */}
                  <div
                    className="mt-6 pt-4 border-t flex items-center justify-between text-xs font-mono font-semibold"
                    style={{ borderColor: 'var(--border-subtle)' }}
                  >
                    <span className="opacity-70" style={{ color: 'var(--text-muted)' }}>
                      SRV // 0{index + 1}
                    </span>
                    <span
                      className="w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-150"
                      style={{ backgroundColor: isDark ? '#F5D77A' : '#2A6F97' }}
                    />
                  </div>
                </Card3D>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

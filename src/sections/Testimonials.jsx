import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaUser, FaComments } from 'react-icons/fa';
import { useLang } from '../hooks/useLang.jsx';
import { useTheme } from '../hooks/useTheme.jsx';
import Card3D from '../components/Card3D.jsx';
import testimonials from '../data/testimonials.js';

export default function Testimonials() {
  const { t, lang } = useLang();
  const { isDark } = useTheme();
  const isRtl = lang === 'ar';

  // Only display genuine (non-placeholder) reviews
  const activeReviews = testimonials.filter((item) => !item.isPlaceholder);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (activeReviews.length === 0) {
    return null;
  }

  const current = activeReviews[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % activeReviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + activeReviews.length) % activeReviews.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background radial highlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[140px] pointer-events-none opacity-10"
        style={{
          backgroundColor: isDark ? '#D4AF37' : '#2A6F97',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
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
            <FaComments className="text-sm" />
            <span>{t.testimonials.h}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">
            <span className="theme-accent-gradient">{t.testimonials.h}</span>
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'var(--text-muted)' }}>
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Carousel Container with 3D Tilt Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + lang}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <Card3D
                maxTilt={6}
                lift={8}
                scale={1.01}
                className="p-8 sm:p-12 relative shadow-2xl overflow-hidden"
              >
                {/* Large decorative quotation mark */}
                <div
                  className="absolute top-6 end-8 text-4xl sm:text-6xl opacity-15 pointer-events-none"
                  style={{ color: isDark ? '#F5D77A' : '#2A6F97' }}
                >
                  <FaQuoteLeft />
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1.5 mb-6">
                  {[...Array(current.rating || 5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-base sm:text-lg"
                      style={{ color: isDark ? '#F5D77A' : '#2A6F97' }}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p
                  className="text-lg sm:text-2xl font-medium leading-relaxed mb-8 italic"
                  style={{ color: 'var(--text-main)' }}
                >
                  "{current.text[lang] || current.text.en}"
                </p>

                {/* Reviewer Details */}
                <div
                  className="flex items-center gap-4 pt-6 border-t"
                  style={{ borderColor: 'var(--border-subtle)' }}
                >
                  {current.avatar ? (
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-14 h-14 rounded-full object-cover border-2 shadow-sm"
                      style={{ borderColor: isDark ? '#D4AF37' : '#2A6F97' }}
                    />
                  ) : (
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-xl border-2 shadow-sm"
                      style={{
                        borderColor: isDark ? '#D4AF37' : '#2A6F97',
                        backgroundColor: 'var(--bg-main)',
                        color: isDark ? '#F5D77A' : '#012A4A',
                      }}
                    >
                      <FaUser />
                    </div>
                  )}

                  <div>
                    <h4 className="text-lg font-bold" style={{ color: 'var(--text-main)' }}>
                      {current.name}
                    </h4>
                    <p
                      className="text-xs sm:text-sm font-medium"
                      style={{ color: isDark ? '#F5D77A' : '#2A6F97' }}
                    >
                      {current.role[lang] || current.role.en}
                    </p>
                    {current.company && (
                      <span className="text-xs block opacity-70" style={{ color: 'var(--text-muted)' }}>
                        {current.company}
                      </span>
                    )}
                  </div>
                </div>
              </Card3D>
            </motion.div>
          </AnimatePresence>

          {/* Controls: Prev & Next buttons */}
          <div className="flex items-center justify-between mt-8">
            {/* Pagination Indicators */}
            <div className="flex items-center gap-2">
              {activeReviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className="h-2.5 rounded-full transition-all duration-300 cursor-pointer"
                  style={{
                    width: currentIndex === idx ? '2rem' : '0.65rem',
                    backgroundColor:
                      currentIndex === idx
                        ? isDark
                          ? '#F5D77A'
                          : '#2A6F97'
                        : 'var(--border-subtle)',
                  }}
                  aria-label={`Jump to review ${idx + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={isRtl ? handleNext : handlePrev}
                className="w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                style={{
                  borderColor: 'var(--border-subtle)',
                  backgroundColor: 'var(--bg-card)',
                  color: isDark ? '#F5D77A' : '#012A4A',
                }}
                aria-label={t.testimonials.prev}
              >
                <FaChevronLeft className="text-sm" />
              </button>
              <button
                onClick={isRtl ? handlePrev : handleNext}
                className="w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                style={{
                  borderColor: 'var(--border-subtle)',
                  backgroundColor: 'var(--bg-card)',
                  color: isDark ? '#F5D77A' : '#012A4A',
                }}
                aria-label={t.testimonials.next}
              >
                <FaChevronRight className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

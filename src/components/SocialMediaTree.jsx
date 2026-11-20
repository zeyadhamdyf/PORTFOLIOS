import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaNetworkWired, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { useLang } from '../hooks/useLang.jsx';
import { useTheme } from '../hooks/useTheme.jsx';
import Card3D from './Card3D.jsx';
import socialLinks from '../data/socialLinks.js';

export default function SocialMediaTree() {
  const { t, lang } = useLang();
  const { isDark } = useTheme();
  const isRtl = lang === 'ar';

  const containerRef = useRef(null);
  const centerNodeRef = useRef(null);
  const cardRefs = useRef([]);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [paths, setPaths] = useState([]);

  // Recalculate SVG connection coordinates whenever window resizes or nodes mount
  const updateConnections = () => {
    if (!containerRef.current || !centerNodeRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const centerRect = centerNodeRef.current.getBoundingClientRect();

    // Central anchor point (bottom-center of central node)
    const startX = centerRect.left + centerRect.width / 2 - containerRect.left;
    const startY = centerRect.bottom - containerRect.top;

    const newPaths = cardRefs.current
      .map((cardEl, index) => {
        if (!cardEl) return null;
        const cardRect = cardEl.getBoundingClientRect();
        // Target anchor (top-center of each social card)
        const endX = cardRect.left + cardRect.width / 2 - containerRect.left;
        const endY = cardRect.top - containerRect.top;

        // Curved cubic Bezier connection
        const controlY1 = startY + (endY - startY) * 0.45;
        const controlY2 = startY + (endY - startY) * 0.75;
        const d = `M ${startX} ${startY} C ${startX} ${controlY1}, ${endX} ${controlY2}, ${endX} ${endY}`;

        return {
          id: socialLinks[index]?.id,
          d,
          startX,
          startY,
          endX,
          endY,
        };
      })
      .filter(Boolean);

    setPaths(newPaths);
  };

  useEffect(() => {
    updateConnections();
    const timer = setTimeout(updateConnections, 400);
    window.addEventListener('resize', updateConnections);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateConnections);
    };
  }, [lang, isDark]);

  const lineColor = isDark ? '#D4AF37' : '#012A4A';
  const lineGlow = isDark ? '#F5D77A' : '#2A6F97';

  return (
    <section id="social-tree" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-[160px] pointer-events-none opacity-10"
        style={{
          backgroundColor: isDark ? '#D4AF37' : '#2A6F97',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 border"
            style={{
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--bg-card)',
              color: isDark ? '#F5D77A' : '#012A4A',
            }}
          >
            <FaNetworkWired className="text-sm" />
            <span>{t.socialTree.h}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            <span className="theme-accent-gradient">{t.socialTree.h}</span>
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'var(--text-muted)' }}>
            {t.socialTree.subtitle}
          </p>
        </div>

        {/* Tree Container */}
        <div ref={containerRef} className="relative min-h-[620px] w-full">
          {/* SVG Connection Lines for Desktop / Tablet */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            style={{ zIndex: 1 }}
          >
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F5D77A" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#AA820A" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2A6F97" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#012A4A" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#012A4A" stopOpacity="0.3" />
              </linearGradient>
              <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {paths.map((p) => {
              const isHovered = hoveredNode === p.id;
              const strokeColor = isHovered
                ? lineGlow
                : isDark
                ? 'rgba(212, 175, 55, 0.35)'
                : 'rgba(1, 42, 74, 0.35)';

              return (
                <g key={p.id}>
                  {/* Baseline path */}
                  <path
                    d={p.d}
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth={isHovered ? 2.5 : 1.5}
                    filter={isHovered ? 'url(#glowEffect)' : undefined}
                    className="transition-all duration-300"
                  />

                  {/* Pulsing Dash Animation */}
                  <path
                    d={p.d}
                    fill="none"
                    stroke={isDark ? '#F5D77A' : '#2A6F97'}
                    strokeWidth={isHovered ? 2 : 1}
                    className="animate-tree-dash opacity-60"
                  />

                  {/* Connection Node Circle */}
                  <circle
                    cx={p.endX}
                    cy={p.endY}
                    r={isHovered ? 4.5 : 3}
                    fill={isDark ? '#F5D77A' : '#2A6F97'}
                    className="transition-all duration-300"
                  />
                </g>
              );
            })}
          </svg>

          {/* Central Identity Root Node */}
          <div className="flex justify-center mb-14 md:mb-20 relative" style={{ zIndex: 10 }}>
            <motion.div
              ref={centerNodeRef}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-7 rounded-3xl border-2 max-w-lg w-full text-center relative shadow-2xl transition-all"
              style={{
                borderColor: isDark ? 'rgba(212, 175, 55, 0.6)' : '#2A6F97',
                backgroundColor: 'var(--bg-card)',
                boxShadow: isDark
                  ? '0 0 45px rgba(212, 175, 55, 0.25)'
                  : '0 0 45px rgba(42, 111, 151, 0.2)',
              }}
            >
              {/* Architecture Core Tag */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 border font-semibold"
                style={{
                  borderColor: 'var(--border-subtle)',
                  backgroundColor: isDark
                    ? 'rgba(212,175,55,0.08)'
                    : 'rgba(169, 214, 229, 0.25)',
                  color: isDark ? '#F5D77A' : '#012A4A',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                <span>{t.socialTree.status}</span>
              </div>

              {/* Central Name */}
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1">
                <span className="theme-accent-gradient">Zeyad Hamdy</span>
              </h3>

              {/* Subtitle / Role */}
              <p className="text-sm sm:text-base font-semibold mb-3" style={{ color: 'var(--text-muted)' }}>
                {t.socialTree.centralRole}
              </p>

              {/* Tech Architecture Metadata */}
              <div
                className="pt-3 border-t grid grid-cols-2 text-xs font-mono opacity-80"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                <div>
                  <span className="block text-[10px] opacity-70">NODE PROTOCOL</span>
                  <span className="font-semibold">MERN_CORE // REST</span>
                </div>
                <div>
                  <span className="block text-[10px] opacity-70">DISPATCH CHANNELS</span>
                  <span className="font-semibold">8 ACTIVE NODES</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Connected Social Nodes Grid (Desktop & Mobile) */}
          <div className="relative" style={{ zIndex: 10 }}>
            {/* Mobile Vertical Spine Indicator */}
            <div
              className="md:hidden absolute top-0 bottom-0 start-1/2 -translate-x-1/2 w-0.5 border-s-2 border-dashed pointer-events-none opacity-40"
              style={{ borderColor: isDark ? '#D4AF37' : '#2A6F97' }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {socialLinks.map((node, index) => {
                const IconComponent = node.icon;
                const isHovered = hoveredNode === node.id;

                return (
                  <motion.div
                    key={node.id}
                    ref={(el) => (cardRefs.current[index] = el)}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className="h-full"
                  >
                    <Card3D
                      as="a"
                      href={node.url}
                      target="_blank"
                      rel="noreferrer"
                      maxTilt={9}
                      lift={10}
                      scale={1.02}
                      className="p-5 flex flex-col justify-between group overflow-hidden h-full cursor-pointer"
                      style={{
                        borderColor: isHovered
                          ? isDark
                            ? '#F5D77A'
                            : '#2A6F97'
                          : 'var(--border-subtle)',
                      }}
                      aria-label={`${node.name}: ${node.handle}`}
                    >
                      {/* Top row: Icon & Status / Placeholder indicator */}
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                          style={{
                            backgroundColor: isDark
                              ? 'rgba(212, 175, 55, 0.1)'
                              : 'rgba(169, 214, 229, 0.25)',
                            color: isDark ? '#F5D77A' : '#2A6F97',
                          }}
                        >
                          <IconComponent />
                        </div>

                        {node.isPlaceholder ? (
                          <span
                            className="text-[10px] px-2 py-0.5 rounded-full font-mono flex items-center gap-1 border"
                            style={{
                              borderColor: isDark ? 'rgba(234, 179, 8, 0.3)' : '#A9D6E5',
                              backgroundColor: isDark
                                ? 'rgba(234, 179, 8, 0.1)'
                                : 'rgba(169, 214, 229, 0.2)',
                              color: isDark ? '#F5D77A' : '#012A4A',
                            }}
                            title="Placeholder link — easily customizable in src/data/socialLinks.js"
                          >
                            <FaExclamationCircle className="text-[9px]" />
                            {lang === 'ar' ? 'تجريبي' : 'Placeholder'}
                          </span>
                        ) : (
                          <span
                            className="text-[10px] px-2 py-0.5 rounded-full font-mono flex items-center gap-1 border"
                            style={{
                              borderColor: 'rgba(16, 185, 129, 0.3)',
                              backgroundColor: 'rgba(16, 185, 129, 0.08)',
                              color: '#10B981',
                            }}
                          >
                            <FaCheckCircle className="text-[9px]" />
                            {lang === 'ar' ? 'موثق' : 'Verified'}
                          </span>
                        )}
                      </div>

                      {/* Middle: Platform Name and handle */}
                      <div className="mb-4">
                        <h4
                          className="text-lg font-bold transition-colors"
                          style={{ color: 'var(--text-main)' }}
                        >
                          {node.name}
                        </h4>
                        <p
                          className="text-xs font-mono truncate mt-0.5"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {node.handle}
                        </p>
                        <span className="text-[11px] block mt-1 opacity-70" style={{ color: 'var(--text-muted)' }}>
                          {node.category}
                        </span>
                      </div>

                      {/* Bottom: Action link & hover indicator */}
                      <div
                        className="pt-3 border-t flex items-center justify-between text-xs font-semibold"
                        style={{ borderColor: 'var(--border-subtle)' }}
                      >
                        <span style={{ color: isDark ? '#F5D77A' : '#2A6F97' }}>
                          {t.socialTree.action}
                        </span>
                        <FaExternalLinkAlt className="text-[10px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>

                      {/* Corner Circuit Decorative Node */}
                      <div
                        className="absolute top-0 end-0 w-8 h-8 pointer-events-none opacity-20 group-hover:opacity-60 transition-opacity"
                        style={{
                          borderTop: `2px solid ${isDark ? '#D4AF37' : '#2A6F97'}`,
                          borderRight: isRtl ? 'none' : `2px solid ${isDark ? '#D4AF37' : '#2A6F97'}`,
                          borderLeft: isRtl ? `2px solid ${isDark ? '#D4AF37' : '#2A6F97'}` : 'none',
                        }}
                      />
                    </Card3D>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

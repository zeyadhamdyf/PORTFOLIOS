import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle, FaTimes, FaLayerGroup } from 'react-icons/fa';
import { useLang } from '../hooks/useLang.jsx';
import { useTheme } from '../hooks/useTheme.jsx';
import Card3D from '../components/Card3D.jsx';
import projects from '../data/projects.js';

// Project Card utilizing Card3D for 3D tilt & dynamic lighting
function ProjectCardItem({ project, details, onSelect }) {
  const { t, lang } = useLang();
  const { isDark } = useTheme();
  const projectTitle = details?.n || project.title;
  const projectDescription = details?.d || project.description;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35 }}
      className="h-full"
    >
      <Card3D
        maxTilt={9}
        lift={12}
        scale={1.02}
        className="overflow-hidden group h-full flex flex-col justify-between"
      >
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden bg-black/20">
          {project.image && (
            <img
              loading="lazy"
              src={project.image}
              alt={projectTitle}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          {!project.image && (
            <div className="absolute inset-0 flex items-center justify-center text-xs font-mono text-white/70">
              {lang === 'ar' ? 'لقطة الشاشة غير متاحة' : 'Screenshot unavailable'}
            </div>
          )}

          {/* Category Pill Tag */}
          <span
            className="absolute top-3 start-3 px-3 py-1 rounded-full text-xs font-mono font-semibold backdrop-blur-md border shadow-sm"
            style={{
              backgroundColor: isDark ? 'rgba(8,8,8,0.75)' : 'rgba(255,255,255,0.92)',
              borderColor: 'var(--border-subtle)',
              color: isDark ? '#F5D77A' : '#012A4A',
            }}
          >
            {details?.category || project.category}
          </span>
        </div>

        {/* Card Body */}
        <div className="p-6 flex flex-col flex-1 justify-between gap-4">
          <div>
            <h3
              className="text-xl sm:text-2xl font-bold mb-2 transition-colors"
              style={{ color: 'var(--text-main)' }}
            >
              {projectTitle}
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
              {projectDescription}
            </p>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-1.5 mb-2">
              {project.tech.map((techItem) => (
                <span
                  key={techItem}
                  className="text-xs px-2.5 py-1 rounded-md border font-mono transition-colors"
                  style={{
                    borderColor: 'var(--border-subtle)',
                    backgroundColor: isDark
                      ? 'rgba(212,175,55,0.06)'
                      : 'rgba(169, 214, 229, 0.22)',
                    color: isDark ? '#F5D77A' : '#012A4A',
                  }}
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className="pt-4 border-t flex flex-wrap items-center gap-2"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline !py-2 !px-3.5 text-xs sm:text-sm font-semibold flex items-center gap-1.5"
              aria-label={`${projectTitle} GitHub Repository`}
            >
              <FaGithub className="text-sm" />
              <span>{t.projects.github}</span>
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline !py-2 !px-3.5 text-xs sm:text-sm font-semibold flex items-center gap-1.5"
                aria-label={`${projectTitle} Live Demo`}
              >
                <FaExternalLinkAlt className="text-xs" />
                <span>{t.projects.demo}</span>
              </a>
            )}

            <button
              onClick={() => onSelect(project)}
              className="btn btn-primary !py-2 !px-3.5 text-xs sm:text-sm font-semibold flex items-center gap-1.5 ms-auto"
              aria-label={`View details of ${projectTitle}`}
            >
              <FaInfoCircle className="text-xs" />
              <span>{t.projects.details}</span>
            </button>
          </div>
        </div>
      </Card3D>
    </motion.div>
  );
}

export default function Projects() {
  const { t, lang } = useLang();
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterTabs = [
    { id: 'all', label: t.projects.all },
    { id: 'fullstack', label: t.projects.fullstack },
    { id: 'backend', label: t.projects.backend },
    { id: 'frontend', label: t.projects.frontend },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory || (p.categories && p.categories.includes(activeCategory));
  });

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-sec)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3 border"
            style={{
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--bg-card)',
              color: isDark ? '#F5D77A' : '#012A4A',
            }}
          >
            <FaLayerGroup className="text-sm" />
            <span>{t.projects.h}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            <span className="theme-accent-gradient">{t.projects.h}</span>
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'var(--text-muted)' }}>
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border cursor-pointer relative ${
                  isActive ? 'shadow-md scale-105' : 'opacity-80 hover:opacity-100 hover:scale-102'
                }`}
                style={{
                  backgroundColor: isActive
                    ? isDark
                      ? 'rgba(212, 175, 55, 0.18)'
                      : 'rgba(169, 214, 229, 0.35)'
                    : 'var(--bg-card)',
                  borderColor: isActive
                    ? isDark
                      ? '#F5D77A'
                      : '#2A6F97'
                    : 'var(--border-subtle)',
                  color: isActive
                    ? isDark
                      ? '#F5D77A'
                      : '#012A4A'
                    : 'inherit',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Animated Project Grid */}
        <motion.div layout className="grid sm:grid-cols-2 gap-8 items-stretch">
          <AnimatePresence>
            {filteredProjects.map((p) => (
              <ProjectCardItem
                key={p.id}
                project={p}
                details={t.projects[p.id]}
                onSelect={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg opacity-70">
              {lang === 'ar'
                ? 'لا توجد مشاريع في هذا التصنيف حالياً.'
                : 'No projects found in this category.'}
            </p>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="theme-card rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative border-2"
              style={{
                borderColor: isDark ? 'rgba(212, 175, 55, 0.4)' : '#2A6F97',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 end-4 z-10 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md border text-lg transition-transform hover:scale-110 cursor-pointer"
                style={{
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  color: '#fff',
                  borderColor: 'rgba(255,255,255,0.2)',
                }}
                aria-label={t.projects.close}
              >
                <FaTimes />
              </button>

              {/* Modal Image */}
              <div className="aspect-video w-full overflow-hidden bg-black/30 relative">
                {selectedProject.image && (
                  <img
                    src={selectedProject.image}
                    alt={
                      t.projects[selectedProject.id]?.n ||
                      selectedProject.title
                    }
                    className="w-full h-full object-cover"
                  />
                )}
                {!selectedProject.image && (
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-mono text-white/70">
                    {lang === 'ar' ? 'لقطة الشاشة غير متاحة' : 'Screenshot unavailable'}
                  </div>
                )}
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span
                    className="text-xs font-mono font-semibold px-3 py-1 rounded-md border"
                    style={{
                      borderColor: 'var(--border-subtle)',
                      backgroundColor: isDark
                        ? 'rgba(212,175,55,0.08)'
                        : 'rgba(169, 214, 229, 0.25)',
                      color: isDark ? '#F5D77A' : '#012A4A',
                    }}
                  >
                    {t.projects[selectedProject.id]?.category || selectedProject.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
                  {t.projects[selectedProject.id]?.n || selectedProject.title}
                </h3>

                <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                  {t.projects[selectedProject.id]?.d || selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider font-bold mb-2.5 opacity-80">
                    {t.projects.techStack}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((x) => (
                      <span
                        key={x}
                        className="text-xs font-mono px-3 py-1.5 rounded-lg border font-semibold"
                        style={{
                          borderColor: 'var(--border-subtle)',
                          backgroundColor: isDark
                            ? 'rgba(212,175,55,0.08)'
                            : 'rgba(169, 214, 229, 0.22)',
                          color: isDark ? '#F5D77A' : '#012A4A',
                        }}
                      >
                        {x}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal CTA Buttons */}
                <div
                  className="flex flex-wrap gap-3 pt-4 border-t"
                  style={{ borderColor: 'var(--border-subtle)' }}
                >
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline flex-1 text-center justify-center"
                  >
                    <FaGithub />
                    <span>{t.projects.github}</span>
                  </a>

                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary flex-1 text-center justify-center"
                    >
                      <FaExternalLinkAlt />
                      <span>{t.projects.demo}</span>
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="btn btn-outline"
                  >
                    {t.projects.close}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

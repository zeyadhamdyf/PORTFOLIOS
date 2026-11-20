import { FaArrowUp, FaGithub, FaLinkedin, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { useLang } from '../hooks/useLang.jsx';
import { useTheme } from '../hooks/useTheme.jsx';
import cfg from '../data/config.js';

export default function Footer() {
  const { t } = useLang();
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#education', label: t.nav.education },
    { href: '#experience', label: t.nav.experience },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#social-tree', label: t.nav.socialTree },
    { href: '#services', label: t.nav.services },
    { href: '#contact', label: t.nav.contact },
  ];

  const socialLinks = [
    { href: cfg.github, icon: FaGithub, label: 'GitHub' },
    { href: cfg.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
    { href: cfg.whatsapp, icon: FaWhatsapp, label: 'WhatsApp' },
    { href: cfg.telegram, icon: FaTelegram, label: 'Telegram' },
  ].filter((s) => s.href);

  return (
    <footer
      className="border-t pt-16 pb-12 relative overflow-hidden transition-colors"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          {/* Col 1: Identity & Role */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              className="inline-flex items-center gap-1.5 text-2xl font-extrabold tracking-tight"
            >
              <span className="font-mono text-xs px-2 py-0.5 rounded border border-current opacity-70">
                &lt;
              </span>
              <span className="theme-accent-gradient">Zeyad</span>
              <span className="font-mono text-xs px-2 py-0.5 rounded border border-current opacity-70">
                /&gt;
              </span>
            </a>
            <p className="text-sm font-semibold" style={{ color: isDark ? '#F5D77A' : '#012A4A' }}>
              ENG. ZEYAD HAMDY
            </p>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'var(--text-muted)' }}>
              {t.footer.role}
            </p>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="md:col-span-4 space-y-3">
            <h4
              className="text-xs uppercase tracking-wider font-bold opacity-80 mb-2"
              style={{ color: 'var(--text-main)' }}
            >
              {t.footer.quickLinks}
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-amber-400 dark:hover:text-dark-goldLight"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social & Back to Top */}
          <div className="md:col-span-3 space-y-4 flex flex-col md:items-end">
            <h4
              className="text-xs uppercase tracking-wider font-bold opacity-80"
              style={{ color: 'var(--text-main)' }}
            >
              {t.footer.socialTitle}
            </h4>
            <div className="flex items-center gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    borderColor: 'var(--border-subtle)',
                    backgroundColor: 'var(--bg-main)',
                    color: isDark ? '#F5D77A' : '#012A4A',
                  }}
                >
                  <s.icon className="text-lg" />
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="btn btn-outline !py-2 !px-4 text-xs font-semibold flex items-center gap-2 mt-4"
              aria-label={t.footer.backToTop}
            >
              <span>{t.footer.backToTop}</span>
              <FaArrowUp className="text-xs" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-center sm:text-start gap-4"
          style={{ color: 'var(--text-muted)' }}
        >
          <p>
            © {new Date().getFullYear()} Eng. Zeyad Hamdy. {t.footer.rights}
          </p>
          <p className="font-mono text-[11px] opacity-75">
            Crafted with React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}

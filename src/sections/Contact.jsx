import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub, FaTelegram, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { useLang } from '../hooks/useLang.jsx';
import { useTheme } from '../hooks/useTheme.jsx';
import Card3D from '../components/Card3D.jsx';
import cfg from '../data/config.js';

export default function Contact() {
  const { t, lang } = useLang();
  const { isDark } = useTheme();

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(''); // 'sending' | 'ok' | 'fail' | 'mail'

  const directLinks = [
    { href: cfg.whatsapp, icon: FaWhatsapp, label: 'WhatsApp', value: '+20 100 481 7363' },
    { href: `${cfg.email}`, icon: FaEnvelope, label: 'Email', value: cfg.email.replace('mailto:', '') },
    { href: cfg.linkedin, icon: FaLinkedin, label: 'LinkedIn', value: 'Zeyad Hamdy' },
    { href: cfg.github, icon: FaGithub, label: 'GitHub', value: 'zeyadhamdyf' },
    { href: cfg.telegram, icon: FaTelegram, label: 'Telegram', value: '@zeyadhamdyf' },
  ].filter((c) => c.href);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = {};

    if (!form.name.trim()) errs.name = t.contact.req;
    if (!form.email.trim()) {
      errs.email = t.contact.req;
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errs.email = t.contact.bad;
    }
    if (!form.subject.trim()) errs.subject = t.contact.req;
    if (!form.message.trim()) errs.message = t.contact.req;

    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const j = cfg.emailjs;
    if (!(j.service && j.template && j.key)) {
      window.location.href = `${cfg.email}?subject=${encodeURIComponent(
        form.subject
      )}&body=${encodeURIComponent(form.message + '\n\n' + form.name + ' <' + form.email + '>')}`;
      setStatus('mail');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: j.service,
          template_id: j.template,
          user_id: j.key,
          template_params: {
            from_name: form.name,
            reply_to: form.email,
            subject: form.subject,
            message: form.message,
          },
        }),
      });

      if (!res.ok) throw new Error();
      setStatus('ok');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('fail');
    }
  };

  return (
    <section
      id="contact"
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
            <FaPaperPlane className="text-xs" />
            <span>{t.contact.h}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            <span className="theme-accent-gradient">{t.contact.h}</span>
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'var(--text-muted)' }}>
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 items-start">
          {/* Left Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="theme-card rounded-3xl p-6 sm:p-8 space-y-5 border-2 shadow-xl"
              style={{
                borderColor: isDark ? 'rgba(212, 175, 55, 0.3)' : '#A9D6E5',
              }}
            >
              {/* Name & Email Row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold mb-1.5 opacity-90">
                    {t.contact.name} *
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl px-4 py-3 text-sm border transition-colors outline-none focus:border-amber-400 dark:focus:border-dark-gold"
                    style={{
                      backgroundColor: 'var(--bg-main)',
                      borderColor: errors.name ? '#EF4444' : 'var(--border-subtle)',
                      color: 'var(--text-main)',
                    }}
                    placeholder={lang === 'ar' ? 'اكتب اسمك هنا' : 'Your full name'}
                  />
                  {errors.name && (
                    <span role="alert" className="text-xs text-red-400 mt-1 block">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5 opacity-90">
                    {t.contact.email} *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl px-4 py-3 text-sm border transition-colors outline-none focus:border-amber-400 dark:focus:border-dark-gold"
                    style={{
                      backgroundColor: 'var(--bg-main)',
                      borderColor: errors.email ? '#EF4444' : 'var(--border-subtle)',
                      color: 'var(--text-main)',
                    }}
                    placeholder="name@example.com"
                  />
                  {errors.email && (
                    <span role="alert" className="text-xs text-red-400 mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-semibold mb-1.5 opacity-90">
                  {t.contact.subject} *
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full rounded-xl px-4 py-3 text-sm border transition-colors outline-none focus:border-amber-400 dark:focus:border-dark-gold"
                  style={{
                    backgroundColor: 'var(--bg-main)',
                    borderColor: errors.subject ? '#EF4444' : 'var(--border-subtle)',
                    color: 'var(--text-main)',
                  }}
                  placeholder={lang === 'ar' ? 'موضوع الرسالة' : 'Project inquiry or message subject'}
                />
                {errors.subject && (
                  <span role="alert" className="text-xs text-red-400 mt-1 block">
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold mb-1.5 opacity-90">
                  {t.contact.message} *
                </label>
                <textarea
                  rows="5"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl px-4 py-3 text-sm border transition-colors outline-none resize-y focus:border-amber-400 dark:focus:border-dark-gold"
                  style={{
                    backgroundColor: 'var(--bg-main)',
                    borderColor: errors.message ? '#EF4444' : 'var(--border-subtle)',
                    color: 'var(--text-main)',
                  }}
                  placeholder={
                    lang === 'ar'
                      ? 'اكتب تفاصيل رسالتك هنا...'
                      : 'Write your project details or message here...'
                  }
                />
                {errors.message && (
                  <span role="alert" className="text-xs text-red-400 mt-1 block">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-primary w-full text-base font-bold !py-3.5 shadow-lg"
              >
                <FaPaperPlane className="text-sm" />
                <span>{status === 'sending' ? t.contact.sending : t.contact.send}</span>
              </button>

              {/* Feedback States */}
              {status === 'ok' && (
                <div className="p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs sm:text-sm flex items-center gap-2">
                  <FaCheckCircle className="shrink-0" />
                  <span>{t.contact.ok}</span>
                </div>
              )}
              {status === 'mail' && (
                <div className="p-3.5 rounded-xl border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs sm:text-sm flex items-center gap-2">
                  <FaCheckCircle className="shrink-0" />
                  <span>{t.contact.mailto}</span>
                </div>
              )}
              {status === 'fail' && (
                <div className="p-3.5 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 text-xs sm:text-sm flex items-center gap-2">
                  <FaExclamationCircle className="shrink-0" />
                  <span>{t.contact.fail}</span>
                </div>
              )}
            </form>
          </motion.div>

          {/* Right Column: Direct Channels with 3D Tilt Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-main)' }}>
              {t.contact.directHeading}
            </h3>

            <div className="space-y-3.5">
              {directLinks.map((item) => (
                <Card3D
                  key={item.label}
                  as="a"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  maxTilt={7}
                  lift={6}
                  scale={1.01}
                  className="p-4 flex flex-row items-center justify-between group overflow-hidden cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: isDark
                          ? 'rgba(212, 175, 55, 0.1)'
                          : 'rgba(169, 214, 229, 0.25)',
                        color: isDark ? '#F5D77A' : '#2A6F97',
                      }}
                    >
                      <item.icon />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm" style={{ color: 'var(--text-main)' }}>
                        {item.label}
                      </h4>
                      <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-lg border transition-colors"
                    style={{
                      borderColor: 'var(--border-subtle)',
                      backgroundColor: 'var(--bg-main)',
                      color: isDark ? '#F5D77A' : '#2A6F97',
                    }}
                  >
                    {lang === 'ar' ? 'تواصل' : 'Open'}
                  </span>
                </Card3D>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

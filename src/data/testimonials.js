/**
 * Centralized Testimonials Data
 * Only non-placeholder testimonials are displayed publicly.
 * You can add new reviews here directly.
 */
export const testimonials = [
  {
    id: 'rev-1',
    name: 'Ahmed K.',
    role: {
      en: 'Web Development Student',
      ar: 'طالب — تطوير الويب',
    },
    company: 'Programming Mentorship',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: {
      en: 'Eng. Zeyad simplifies complex programming and backend concepts with clarity and structured hands-on examples.',
      ar: 'المهندس زياد يشرح المفاهيم البرمجية الصعبة وأنظمة الباك إند بأسلوب مبسط ومنهجي يركز على التطبيق العملي.',
    },
    isPlaceholder: false,
  },
  {
    id: 'rev-2',
    name: 'Youssef M.',
    role: {
      en: 'React & Frontend Student',
      ar: 'طالب — واجهات React',
    },
    company: 'Technical Training',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: {
      en: 'Great instructor who explains not only how code works, but why architectural decisions matter in full-stack projects.',
      ar: 'مدرب رائع لا يشرح فقط كتابة الكود بل يوضح القرارات الهندسية وأهمية بناء الهيكل الصحيح للمشاريع.',
    },
    isPlaceholder: false,
  },
  {
    id: 'sample-client',
    name: 'Sample Client',
    role: {
      en: 'Startup Founder',
      ar: 'مؤسس شركة ناشئة',
    },
    company: 'Enterprise Client',
    avatar: '',
    rating: 5,
    text: {
      en: 'Placeholder testimonial. Replace this with your verified client reviews.',
      ar: 'نص تجريبي للعملاء. استبدل هذا التقييم بآراء العملاء الموثقة.',
    },
    isPlaceholder: true, // Will not be displayed when only genuine reviews are shown
  },
];

export default testimonials;

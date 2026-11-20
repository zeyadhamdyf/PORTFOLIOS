// Central configuration. Update contact links, images, and CV paths here.
import { asset } from '../utils/asset.js';

export default {
  github: 'https://github.com/zeyadhamdyf',
  linkedin: 'https://www.linkedin.com/in/zeyadhamdyf/',
  whatsapp: 'https://wa.me/201004817363',
  telegram: 'https://t.me/zeyadhamdyf',
  instagram: 'https://www.instagram.com/zeyad_hamdy_7',
  tiktok: 'https://www.tiktok.com/@zeyadhamdyf',
  facebook: 'https://www.facebook.com/share/1Fp79A18UM/',
  email: 'mailto:zeyad.hamdyf@gmail.com',
  cv: asset('assets/cv/Zeyad_Hamdy.pdf'),
  emailjs: {
    service: import.meta.env.VITE_EMAILJS_SERVICE || '',
    template: import.meta.env.VITE_EMAILJS_TEMPLATE || '',
    key: import.meta.env.VITE_EMAILJS_KEY || '',
  },
  images: {
    profile: asset('assets/images/profile.png'),
    about: asset('assets/images/about.png'),
  },
};

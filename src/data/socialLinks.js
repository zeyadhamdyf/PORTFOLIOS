import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaEnvelope,
} from 'react-icons/fa';

/**
 * Centralized Social Media Data
 * Update URLs or placeholders here without modifying the component.
 */
export const socialLinks = [
  {
    id: 'github',
    platform: 'GitHub',
    name: 'GitHub',
    handle: '@Zeyad20055',
    icon: FaGithub,
    url: 'https://github.com/zeyadhamdyf',
    enabled: true,
    isPlaceholder: false,
    category: 'VCS & Code Repository',
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    name: 'LinkedIn',
    handle: 'in/zeyadhamdyf',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/zeyadhamdyf/',
    enabled: true,
    isPlaceholder: false,
    category: 'Professional Network',
  },
  {
    id: 'whatsapp',
    platform: 'WhatsApp',
    name: 'WhatsApp',
    handle: '+20 100 481 7363',
    icon: FaWhatsapp,
    url: 'https://wa.me/201004817363',
    enabled: true,
    isPlaceholder: false,
    category: 'Direct Messaging',

  },
  {
    id: 'telegram',
    platform: 'Telegram',
    name: 'Telegram',
    handle: '@zeyadhamdyf',
    icon: FaTelegram,
    url: 'https://t.me/zeyadhamdyf',
    enabled: true,
    isPlaceholder: false,
    category: 'Encrypted Channel',
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    name: 'Instagram',
    handle: '@zeyad_hamdy_7',
    icon: FaInstagram,
    url: 'https://www.instagram.com/zeyad_hamdy_7',
    enabled: true,
    isPlaceholder: false,
    category: 'Media & Tech Updates',
  },
  {
    id: 'tiktok',
    platform: 'TikTok',
    name: 'TikTok',
    handle: '@zeyadhamdyf',
    icon: FaTiktok,
    url: 'https://www.tiktok.com/@zeyadhamdyf',
    enabled: true,
    isPlaceholder: false,
    category: 'Social Network',
  },
  {
    id: 'facebook',
    platform: 'Facebook',
    name: 'Facebook',
    handle: 'Facebook Profile',
    icon: FaFacebook,
    url: 'https://www.facebook.com/share/1Fp79A18UM/',
    enabled: true,
    isPlaceholder: false,
    category: 'Social Network',
  },
  {

    id: 'email',
    platform: 'Gmail / Email',
    name: 'Email',
    handle: 'zeyad.hamdyf@gmail.com',
    icon: FaEnvelope,
    url: 'mailto:zeyad.hamdyf@gmail.com',
    enabled: true,
    isPlaceholder: false,
    category: 'Direct Communication',
  
  },
];

export default socialLinks;

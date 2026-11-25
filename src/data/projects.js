// Centralized, verified project details, asset paths, categories, and links.
import { asset } from '../utils/asset.js';

export const projects = [
  {
    id: 'alagamy',
    title: 'Alagamy Market',
    description:
      'A fully Arabic (RTL) e-commerce storefront with a product catalog, category browsing, cart, and daily offers.',
    category: 'frontend',
    categories: ['frontend'],
    image: 'https://github.com/zeyadhamdyf/PORTFOLIOS/releases/download/assets-v1/alagamy.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'RTL'],
    github: 'https://github.com/zeyadhamdyf/Alagamy_Market',
    demo: 'https://zeyadhamdyf.github.io/Alagamy_Market/',
  },
  {
    id: 'exo',
    title: 'EXO - Beyond the Ordinary',
    description:
      "A luxury men's accessories landing page for watches, rings, and bracelets with a premium dark design and smooth animations.",
    category: 'frontend',
    categories: ['frontend'],
    image: 'https://github.com/zeyadhamdyf/PORTFOLIOS/releases/download/assets-v1/exo.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/zeyadhamdyf/exo',
    demo: 'https://zeyadhamdyf.github.io/exo/',
  },
  {
    id: 'menucoffee',
    title: 'Bite & Bliss',
    description:
      'A restaurant and coffee menu site with categorized dishes, offers, and a bilingual Arabic/English interface.',
    category: 'frontend',
    categories: ['frontend'],
    image: 'https://github.com/zeyadhamdyf/PORTFOLIOS/releases/download/assets-v1/menucoffee.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/zeyadhamdyf/menuCoffee',
    demo: 'https://zeyadhamdyf.github.io/menuCoffee/',
  },
  {
    id: 'dashmin',
    title: 'Dashmin Admin Dashboard',
    description:
      'An Arabic (RTL) admin dashboard for managing products, employees, and orders, with stats and data tables.',
    category: 'frontend',
    categories: ['frontend'],
    image: 'https://github.com/zeyadhamdyf/PORTFOLIOS/releases/download/assets-v1/dashmin.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'RTL'],
    github: 'https://github.com/zeyadhamdyf/dashmin-arabic',
    demo: 'https://zeyadhamdyf.github.io/dashmin-arabic/',
  },
  {
    id: 'studentresults',
    title: 'Student Results Management',
    description:
      'A bilingual dashboard for managing students and grades, with averages, grade distribution, and detailed reports.',
    category: 'frontend',
    categories: ['frontend'],
    image: 'https://github.com/zeyadhamdyf/PORTFOLIOS/releases/download/assets-v1/studentresults.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/zeyadhamdyf/student-results-system',
    demo: 'https://zeyadhamdyf.github.io/student-results-system/',
  },
  {
    id: 'bookstore',
    title: 'Book Store API',
    description:
      'A Node.js REST API for managing books, authors, user accounts, and protected book-management operations.',
    category: 'backend',
    categories: ['backend'],
    image: asset('assets/images/projects/bookstore.jpg'),
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Joi', 'bcryptjs'],
    github: 'https://github.com/zeyadhamdyf/BOOK-STORE-API',
    demo: '',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Application',
    description:
      'A storefront with a product catalog, cart, phone-confirmed orders, and a protected manager dashboard.',
    category: 'fullstack',
    categories: ['fullstack', 'frontend', 'backend'],
    image: asset('assets/images/projects/ecommerce.jpg'),
    tech: ['Angular', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'SCSS'],
    github: 'https://github.com/zeyadhamdyf/ecomers-app',
    demo: '',
  },
  {
    id: 'hotel',
    title: 'Hotel Management System',
    description:
      'A hotel operations platform for rooms, guests, reservations, reception, payments, housekeeping, and reports.',
    category: 'fullstack',
    categories: ['fullstack', 'frontend', 'backend'],
    image: asset('assets/images/projects/hotel.jpg'),
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT'],
    github: 'https://github.com/zeyadhamdyf/hotel-management-system',
    demo: '',
  },
  {
    id: 'maxcode',
    title: 'MAX CODE Academy',
    description:
      'A bilingual academy platform with a course catalog, student registration, and protected course and registration administration.',
    category: 'fullstack',
    categories: ['fullstack', 'frontend', 'backend'],
    image: asset('assets/images/projects/maxcode.jpg'),
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT'],
    github: 'https://github.com/zeyadhamdyf/MaxCode',
    demo: '',
  },
  {
    id: 'backendadmin',
    title: 'Backend Admin and Editor',
    description:
      'A server-rendered product management app with admin/editor roles and an approval queue for editor-submitted changes.',
    category: 'fullstack',
    categories: ['fullstack', 'frontend', 'backend'],
    image: asset('assets/images/projects/backendadmin.jpg'),
    tech: ['Node.js', 'Express.js', 'EJS', 'MongoDB', 'Multer', 'bcrypt', 'express-session'],
    github: 'https://github.com/zeyadhamdyf/backend-admin-and-editor',
    demo: '',
  },
  {
    id: 'studymaster',
    title: 'StudyMaster',
    description:
      'A bilingual study planner with task scheduling, a Pomodoro timer, progress tracking, reminders, and local data persistence.',
    category: 'frontend',
    categories: ['frontend'],
    image: asset('assets/images/projects/studymaster.jpg'),
    tech: ['React', 'JavaScript', 'CSS', 'LocalStorage'],
    github: 'https://github.com/zeyadhamdyf/study-master',
    demo: 'https://zeyadhamdyf.github.io/study-master/',
  },
];

export default projects;

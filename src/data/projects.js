// Centralized, verified project details, asset paths, categories, and links.
import { asset } from '../utils/asset.js';

export const projects = [
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
    demo: '',
  },
];

export default projects;

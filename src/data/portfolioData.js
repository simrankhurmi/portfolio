export const CV_FILE_ID = '1u29qC1vH2SF4wAfAkCXeyEUTPJa_W9hX';

export const CV_VIEW_URL = `https://drive.google.com/file/d/${CV_FILE_ID}/view?usp=sharing`;

export const CV_DOWNLOAD_URL = `https://drive.usercontent.google.com/download?id=${CV_FILE_ID}&export=download`;

export const CONTACT_EMAIL = 'simrankhurmi121@gmail.com';

export function downloadCv() {
  window.open(CV_DOWNLOAD_URL, '_blank', 'noopener,noreferrer');
}

export const profile = {
  name: 'Simran Khurmi',
  title: 'Full Stack Developer',
  tagline: 'Building responsive web apps with React, Next.js & Node.js',
  location: 'Ludhiana, India',
  email: CONTACT_EMAIL,
  bio: 'Full stack developer with hands-on experience designing and shipping responsive web applications. I work across the MERN stack — from polished React/Next.js frontends to scalable Node.js APIs — and bring strong client communication skills from 2 years of professional call handling and stakeholder coordination.',
  github: 'https://github.com/simrankhurmi',
  linkedin: 'https://www.linkedin.com/in/simran-khurmi-0039551b5',
};

export const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '8+', label: 'Projects Built' },
  { value: '10+', label: 'Technologies' },
];

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Material UI', level: 80 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 85 },
      { name: 'MongoDB', level: 82 },
      { name: 'Socket.io', level: 80 },
      { name: 'Redis', level: 75 },
    ],
  },
  {
    category: 'Other',
    items: [
      { name: 'WordPress', level: 78 },
      { name: 'REST APIs', level: 88 },
      { name: 'Git & GitHub', level: 85 },
      { name: 'Client Communication', level: 92 },
    ],
  },
];

export const skillTags = [
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'MongoDB',
  'WordPress',
  'Tailwind CSS',
  'Material UI',
  'Socket.io',
  'Redis',
  'TypeScript',
  'REST APIs',
];

export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Freelance & Client Projects',
    period: '2023 — Present',
    highlights: [
      'Built and deployed full stack web applications using React, Next.js, Node.js, and MongoDB.',
      'Delivered real-time features with Socket.io and session management with Redis.',
      'Collaborated directly with clients to gather requirements, present progress, and iterate on feedback.',
    ],
  },
  {
    role: 'Client Support & Communication',
    company: 'Professional Experience',
    period: '2 Years',
    highlights: [
      'Managed inbound and outbound client calls with clear, professional communication.',
      'Resolved queries efficiently while maintaining accurate records and follow-ups.',
      'Developed strong interpersonal skills that translate into effective stakeholder collaboration on dev projects.',
    ],
  },
];

export const education = [
  {
    degree: 'Bachelor of Technology',
    school: 'Computer Science & Engineering',
    period: 'Graduate',
    note: 'Foundation in algorithms, data structures, and software engineering principles.',
  },
];

export const projects = [
  {
    title: 'SyncBoard — Project Management',
    description:
      'Collaborative real-time project management platform with Kanban boards, role-based access, JWT auth, and live task updates via Socket.io.',
    tech: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Redis', 'Tailwind'],
    github: 'https://github.com/simrankhurmi/realtime-project-management',
    live: 'https://realtime-project-management.vercel.app',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    description:
      'My portfolio website built with React, TypeScript, and Tailwind CSS to showcase my projects and skills.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/simrankhurmi/portfolio',
    live: 'https://simrankhurmi.github.io/portfolio/',
    featured: true,
  },
  {
    title: 'AI Blog Writer',
    description:
      'AI Blog Writer is a content-focused blog application with clean reading experience, post management, and responsive layout for mobile and desktop.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI API', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/simrankhurmi/ai-blog-writer',
    live: 'https://ai-blog-writer-q1cxlhy0d-simran-khurmis-projects.vercel.app',
    featured: true,
  },
  {
    title: 'SmileCraft — Dental Clinic Website',
    description:
      'Responsive dental clinic website with service sections, online appointment booking, FAQ chatbot, floating WhatsApp/call buttons, and Google Maps integration.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Webflow-style', 'Responsive Design'],
    github: 'https://github.com/simrankhurmi/dentalwebsample',
    live: 'https://dentalsamplewebflow.netlify.app',
    featured: true,
  },
  {
    title: 'Lumière Beauty Salon',
    description:
      'Multi-page beauty salon website with services showcase, appointment booking modal, FAQ chatbot, and embedded location map — fully responsive across devices.',
    tech: ['React', 'Vite', 'React Router', 'CSS', 'Responsive Design'],
    github: 'https://github.com/simrankhurmi/beautySalonSample',
    live: 'https://beautysalonsample.netlify.app',
    featured: true,
  },
  {
    title: 'Brand Landing Page',
    description:
      'Modern marketing landing page with animated sections, responsive grid layout, and conversion-focused UI components.',
    tech: ['React', 'CSS', 'Responsive Design'],
    github: 'https://github.com/simrankhurmi/brand',
    live: null,
    featured: false,
  },
  {
    title: 'Contact Management App',
    description:
      'Full stack contact management system with CRUD operations, form validation, and structured data handling.',
    tech: ['JavaScript', 'Node.js', 'Express'],
    github: 'https://github.com/simrankhurmi/contact-tws',
    live: null,
    featured: false,
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

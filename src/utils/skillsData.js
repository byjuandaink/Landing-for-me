const dev = (name, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${name}/${name}-${variant}.svg`;

export const skillCategories = ['backend', 'frontend', 'database', 'methods'];

export const skills = [
  { name: 'C#', category: 'backend', icon: dev('csharp') },
  { name: '.NET', category: 'backend', icon: dev('dotnetcore') },

  { name: 'React', category: 'frontend', icon: dev('react') },
  { name: 'JavaScript', category: 'frontend', icon: dev('javascript') },
  { name: 'TypeScript', category: 'frontend', icon: dev('typescript') },
  { name: 'Vite', category: 'frontend', icon: dev('vitejs') },
  { name: 'Tailwind CSS', category: 'frontend', icon: dev('tailwindcss') },
  { name: 'HTML5', category: 'frontend', icon: dev('html5') },
  { name: 'CSS3', category: 'frontend', icon: dev('css3') },
  { name: 'Axios', category: 'frontend', icon: dev('axios', 'plain') },

  { name: 'PostgreSQL', category: 'database', icon: dev('postgresql') },
  { name: 'SQL Server', category: 'database', icon: dev('microsoftsqlserver') },

  { name: 'Git', category: 'methods', icon: dev('git') },
  { name: 'GitHub', category: 'methods', icon: dev('github'), mono: true },
  { name: 'AWS', category: 'methods', icon: dev('amazonwebservices', 'plain-wordmark'), mono: true },
];

export const concepts = [
  { name: 'Clean Architecture', category: 'backend' },
  { name: 'CQRS', category: 'backend' },
  { name: 'Repository Pattern', category: 'backend' },
  { name: 'Unit of Work', category: 'backend' },
  { name: 'Entity Framework Core', category: 'backend' },
  { name: 'APIs REST', category: 'backend' },
  { name: 'POO', category: 'backend' },
  { name: 'SOLID', category: 'backend' },

  { name: 'Manejo de estado', category: 'frontend' },

  { name: 'Modelado relacional', category: 'database' },
  { name: 'Migraciones', category: 'database' },

  { name: 'Scrum', category: 'methods' },
  { name: 'GitFlow', category: 'methods' },
  { name: 'Active Directory', category: 'methods' },
  { name: 'FTP · HTTP/HTTPS', category: 'methods' },
];
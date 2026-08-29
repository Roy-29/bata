export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  modules?: string[];
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    id: 'ml-specialization',
    title: 'Machine Learning Specialization',
    issuer: 'Coursera',
    date: '7 Oct 2025',
    category: 'Machine Learning',
    modules: [
      'Supervised Machine Learning: Regression and Classification',
      'Advanced Learning Algorithms',
      'Unsupervised Learning, Recommenders, Reinforcement Learning',
    ],
    credentialUrl: '#', // Replace with actual credential URL
  },
  {
    id: 'web-dev',
    title: 'Web Development Fundamentals',
    issuer: 'Ostad',
    date: 'Dec 2024',
    category: 'Web Development',
    modules: [
      'HTML5, CSS3, & Responsive Design',
      'JavaScript ES6+ & DOM Manipulation',
      'React.js Component Architecture'
    ],
    credentialUrl: '#', // Replace with actual credential URL
  },
];

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
    date: '',
    category: 'Web Development',
    credentialUrl: '#', // Replace with actual credential URL
  },
];

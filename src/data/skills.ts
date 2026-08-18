export interface Skill {
  name: string;
  category: SkillCategory;
  filters: SkillFilter[];
}

export type SkillCategory = 'software' | 'engineering' | 'soft';
export type SkillFilter = 'all' | 'design' | 'simulation' | 'programming' | 'manufacturing' | 'research';

export const skillFilters: { key: SkillFilter; label: string }[] = [
  { key: 'all', label: 'ALL' },
  { key: 'design', label: 'DESIGN' },
  { key: 'simulation', label: 'SIMULATION' },
  { key: 'programming', label: 'PROGRAMMING' },
  { key: 'manufacturing', label: 'MANUFACTURING' },
  { key: 'research', label: 'RESEARCH' },
];

export const skills: Skill[] = [
  // Software / Computational
  { name: 'Machine Learning', category: 'software', filters: ['all', 'programming', 'research'] },
  { name: 'SolidWorks', category: 'software', filters: ['all', 'design'] },
  { name: 'ANSYS', category: 'software', filters: ['all', 'simulation'] },
  { name: 'Abaqus', category: 'software', filters: ['all', 'simulation'] },
  { name: 'AutoCAD', category: 'software', filters: ['all', 'design'] },
  { name: 'MATLAB', category: 'software', filters: ['all', 'simulation', 'programming'] },
  { name: 'Arduino', category: 'software', filters: ['all', 'programming', 'manufacturing'] },
  { name: 'Python', category: 'software', filters: ['all', 'programming'] },
  { name: 'C', category: 'software', filters: ['all', 'programming'] },
  { name: 'C++', category: 'software', filters: ['all', 'programming'] },
  { name: 'Web Programming', category: 'software', filters: ['all', 'programming'] },
  { name: 'LaTeX', category: 'software', filters: ['all', 'research'] },
  { name: 'Microsoft PowerPoint', category: 'software', filters: ['all', 'research'] },
  { name: 'Microsoft Office', category: 'software', filters: ['all'] },
  { name: 'Microsoft Excel', category: 'software', filters: ['all'] },
  { name: 'CapCut', category: 'software', filters: ['all'] },
  { name: 'Photoshop', category: 'software', filters: ['all', 'design'] },
  { name: 'Premiere Pro', category: 'software', filters: ['all'] },

  // Engineering
  { name: 'Thermo-fluid Analysis', category: 'engineering', filters: ['all', 'simulation'] },
  { name: 'CFD', category: 'engineering', filters: ['all', 'simulation'] },
  { name: 'Mechanical Design', category: 'engineering', filters: ['all', 'design'] },
  { name: 'Machine & Component Design', category: 'engineering', filters: ['all', 'design'] },
  { name: 'Engineering Problem Solving', category: 'engineering', filters: ['all'] },
  { name: 'CAD Modeling', category: 'engineering', filters: ['all', 'design'] },
  { name: 'Experimental Work & Data Interpretation', category: 'engineering', filters: ['all', 'research', 'manufacturing'] },
  { name: 'Basic Manufacturing & Materials Engineering', category: 'engineering', filters: ['all', 'manufacturing'] },

  // Soft Skills
  { name: 'Communication', category: 'soft', filters: ['all'] },
  { name: 'Problem Solving', category: 'soft', filters: ['all'] },
  { name: 'Teamwork & Collaboration', category: 'soft', filters: ['all'] },
  { name: 'Research & Analytical Thinking', category: 'soft', filters: ['all', 'research'] },
  { name: 'Time Management', category: 'soft', filters: ['all'] },
  { name: 'Project Management', category: 'soft', filters: ['all'] },
  { name: 'Fast Learning & Adaptability', category: 'soft', filters: ['all'] },
];

export const categoryLabels: Record<SkillCategory, string> = {
  software: 'SOFTWARE & COMPUTATIONAL',
  engineering: 'ENGINEERING',
  soft: 'SOFT SKILLS',
};

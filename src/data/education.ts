export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  current?: boolean;
}

export const education: EducationEntry[] = [
  {
    id: 'kuet',
    institution: 'Khulna University of Engineering & Technology',
    degree: 'BSc in Mechanical Engineering',
    period: '2023 – Present',
    current: true,
  },
  {
    id: 'hsc',
    institution: 'Govt. Majeed Memorial City College, Khulna',
    degree: 'Higher Secondary Certificate (HSC)',
    period: '2019 – 2021',
    gpa: '5.00',
  },
  {
    id: 'ssc',
    institution: 'Khulna Zilla School',
    degree: 'Secondary School Certificate (SSC)',
    period: '2011 – 2019',
    gpa: '5.00',
  },
];

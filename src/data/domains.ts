export interface Domain {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
  icon: string; // SVG path or identifier
}

export const domains: Domain[] = [
  {
    id: 'mechanical-design',
    title: 'Mechanical Design',
    subtitle: 'DESIGN / CAD',
    description: 'Machine and component design, CAD modeling, and mechanical power transmission systems.',
    tools: ['SolidWorks', 'AutoCAD'],
    icon: 'gear',
  },
  {
    id: 'cae-simulation',
    title: 'CAE & Simulation',
    subtitle: 'ANALYSIS / FEA / CFD',
    description: 'Computational analysis and simulation for thermo-fluid systems and structural behavior.',
    tools: ['ANSYS', 'Abaqus', 'MATLAB'],
    icon: 'simulation',
  },
  {
    id: 'motorsport',
    title: 'Motorsport',
    subtitle: 'FORMULA STUDENT / POWERTRAIN',
    description: 'Formula Student vehicle powertrain design, performance optimization, and manufacturability.',
    tools: ['Kilo Flight', 'Vehicle Dynamics'],
    icon: 'motorsport',
  },
  {
    id: 'computational',
    title: 'Computational Engineering',
    subtitle: 'PROGRAMMING / ML / DATA',
    description: 'Programming, machine learning, and data-driven engineering approaches to mechanical problems.',
    tools: ['Python', 'MATLAB', 'C/C++', 'Machine Learning'],
    icon: 'code',
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Materials',
    subtitle: 'FABRICATION / TESTING',
    description: 'Basic manufacturing processes, materials engineering, experimental work and data interpretation.',
    tools: ['Arduino', 'Lab Equipment'],
    icon: 'manufacturing',
  },
];

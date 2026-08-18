export interface Project {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  tags: string[];
  details: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'me-3000',
    code: 'ME-3000',
    title: 'Mechanical Grass Cutter',
    subtitle: 'Design & Construction of a Mechanical Grass Cutter',
    date: 'Aug 2025 – Apr 2026',
    description:
      'A comprehensive mechanical design project involving power transmission system design, component selection, CAD modeling, and practical construction of a low-cost, reliable grass cutting machine.',
    tags: [
      'Power Transmission',
      'Gear Ratio',
      'Torque',
      'Shaft Loading',
      'Component Selection',
      'CAD Modeling',
      'Spur Gear Transmission',
      'Bearings',
      'Reliability',
    ],
    details: [
      'Mechanical power transmission system with spur gear transmission',
      'Shaft design and bearing selection for rotating components',
      'Power transmission calculations including gear ratio and torque analysis',
      'Shaft loading analysis and component selection',
      'CAD modeling for design visualization',
      'Focus on practical, low-cost design with reliability',
    ],
    featured: true,
  },
];

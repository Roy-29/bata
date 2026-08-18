export interface ToolchainStage {
  id: string;
  label: string;
  description: string;
  tools: string[];
}

export const toolchain: ToolchainStage[] = [
  { id: 'idea', label: 'IDEA', description: 'Conceptualization and requirements', tools: [] },
  { id: 'cad', label: 'CAD', description: 'Design and 3D modeling', tools: ['SolidWorks', 'AutoCAD'] },
  { id: 'analysis', label: 'ANALYSIS', description: 'Structural and thermal analysis', tools: ['ANSYS', 'Abaqus'] },
  { id: 'simulation', label: 'SIMULATION', description: 'CFD and thermo-fluid simulation', tools: ['ANSYS', 'MATLAB'] },
  { id: 'calculation', label: 'CALCULATION', description: 'Computational engineering', tools: ['MATLAB', 'Python', 'C/C++'] },
  { id: 'prototype', label: 'PROTOTYPE', description: 'Fabrication and embedded systems', tools: ['Arduino'] },
  { id: 'test', label: 'TEST', description: 'Experimental validation', tools: ['Lab Equipment'] },
  { id: 'data', label: 'DATA', description: 'Data interpretation and ML', tools: ['Python', 'Machine Learning'] },
  { id: 'iterate', label: 'ITERATE', description: 'Refine and optimize', tools: [] },
];

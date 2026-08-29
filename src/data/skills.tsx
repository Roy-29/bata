import React from 'react';
import { 
  BrainCircuit, 
  Settings, 
  Layers, 
  Box, 
  Wrench, 
  PenTool,
  Code,
  Activity,
  Wind,
  Cpu,
  Target,
  FlaskConical,
  MessageSquare,
  Users,
  Lightbulb,
  Clock,
  Zap,
  Image,
  Video,
  FileText,
  Table,
  Presentation
} from 'lucide-react';
import { 
  SiPython, 
  SiCplusplus, 
  SiArduino, 
  SiAutocad, 
  SiLatex
} from 'react-icons/si';
import { FaCogs } from 'react-icons/fa';

export interface Skill {
  name: string;
  category: SkillCategory;
  filters: SkillFilter[];
  icon: React.ReactNode;
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
  { name: 'Machine Learning', category: 'software', filters: ['all', 'programming', 'research'], icon: <BrainCircuit size={16} /> },
  { name: 'SolidWorks', category: 'software', filters: ['all', 'design'], icon: <Box size={16} /> },
  { name: 'ANSYS', category: 'software', filters: ['all', 'simulation'], icon: <Layers size={16} /> },
  { name: 'Abaqus', category: 'software', filters: ['all', 'simulation'], icon: <Activity size={16} /> },
  { name: 'AutoCAD', category: 'software', filters: ['all', 'design'], icon: <SiAutocad size={14} /> },
  { name: 'MATLAB', category: 'software', filters: ['all', 'simulation', 'programming'], icon: <FaCogs size={16} /> },
  { name: 'Arduino', category: 'software', filters: ['all', 'programming', 'manufacturing'], icon: <SiArduino size={14} /> },
  { name: 'Python', category: 'software', filters: ['all', 'programming'], icon: <SiPython size={14} /> },
  { name: 'C', category: 'software', filters: ['all', 'programming'], icon: <Code size={16} /> },
  { name: 'C++', category: 'software', filters: ['all', 'programming'], icon: <SiCplusplus size={14} /> },
  { name: 'Web Programming', category: 'software', filters: ['all', 'programming'], icon: <Code size={16} /> },
  { name: 'LaTeX', category: 'software', filters: ['all', 'research'], icon: <SiLatex size={14} /> },
  { name: 'Microsoft PowerPoint', category: 'software', filters: ['all', 'research'], icon: <Presentation size={14} /> },
  { name: 'Microsoft Office', category: 'software', filters: ['all'], icon: <FileText size={14} /> },
  { name: 'Microsoft Excel', category: 'software', filters: ['all'], icon: <Table size={14} /> },
  { name: 'CapCut', category: 'software', filters: ['all'], icon: <Activity size={16} /> },
  { name: 'Photoshop', category: 'software', filters: ['all', 'design'], icon: <Image size={14} /> },
  { name: 'Premiere Pro', category: 'software', filters: ['all'], icon: <Video size={14} /> },

  // Engineering
  { name: 'Thermo-fluid Analysis', category: 'engineering', filters: ['all', 'simulation'], icon: <Wind size={16} /> },
  { name: 'CFD', category: 'engineering', filters: ['all', 'simulation'], icon: <Wind size={16} /> },
  { name: 'Mechanical Design', category: 'engineering', filters: ['all', 'design'], icon: <Wrench size={16} /> },
  { name: 'Machine & Component Design', category: 'engineering', filters: ['all', 'design'], icon: <Settings size={16} /> },
  { name: 'Engineering Problem Solving', category: 'engineering', filters: ['all'], icon: <Target size={16} /> },
  { name: 'CAD Modeling', category: 'engineering', filters: ['all', 'design'], icon: <PenTool size={16} /> },
  { name: 'Experimental Work & Data Interpretation', category: 'engineering', filters: ['all', 'research', 'manufacturing'], icon: <FlaskConical size={16} /> },
  { name: 'Basic Manufacturing & Materials Engineering', category: 'engineering', filters: ['all', 'manufacturing'], icon: <Cpu size={16} /> },

  // Soft Skills
  { name: 'Communication', category: 'soft', filters: ['all'], icon: <MessageSquare size={16} /> },
  { name: 'Problem Solving', category: 'soft', filters: ['all'], icon: <Lightbulb size={16} /> },
  { name: 'Teamwork & Collaboration', category: 'soft', filters: ['all'], icon: <Users size={16} /> },
  { name: 'Research & Analytical Thinking', category: 'soft', filters: ['all', 'research'], icon: <BrainCircuit size={16} /> },
  { name: 'Time Management', category: 'soft', filters: ['all'], icon: <Clock size={16} /> },
  { name: 'Project Management', category: 'soft', filters: ['all'], icon: <Target size={16} /> },
  { name: 'Fast Learning & Adaptability', category: 'soft', filters: ['all'], icon: <Zap size={16} /> },
];

export const categoryLabels: Record<SkillCategory, string> = {
  software: 'SOFTWARE & COMPUTATIONAL',
  engineering: 'ENGINEERING',
  soft: 'SOFT SKILLS',
};

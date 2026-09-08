// ─── Auth Types ───────────────────────────────────────────────────────────────

export interface User {
  id: string;
  email: string;
  name: string;
  username: string;
  avatarUrl?: string;
  githubId?: string;
  githubUsername?: string;
  createdAt: Date;
  updatedAt: Date;
}

// ─── CV Types ─────────────────────────────────────────────────────────────────

export interface CV {
  id: string;
  userId: string;
  title: string;
  slug: string;
  templateId: string;
  isPublic: boolean;
  status: CVStatus;
  content: CVContent;
  createdAt: Date;
  updatedAt: Date;
}

export type CVStatus = 'draft' | 'published' | 'archived';

export interface CVContent {
  personalInfo: PersonalInfo;
  summary: string;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  certifications: Certification[];
  languages: Language[];
  links: SocialLink[];
}

export interface PersonalInfo {
  fullName: string;
  email: string;
  phone?: string;
  location?: string;
  website?: string;
  avatarUrl?: string;
}

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  description: string;
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  gpa?: number;
  description?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  url?: string;
  githubUrl?: string;
  stars?: number;
  technologies: string[];
  highlights: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Language {
  name: string;
  level: 'basic' | 'conversational' | 'professional' | 'native';
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'website' | 'other';
  url: string;
}

// ─── Template Types ────────────────────────────────────────────────────────────

export interface Template {
  id: string;
  name: string;
  description: string;
  previewUrl: string;
  category: TemplateCategory;
  isPremium: boolean;
  tags: string[];
}

export type TemplateCategory = 'minimal' | 'modern' | 'creative' | 'classic';

// ─── GitHub Types ─────────────────────────────────────────────────────────────

export interface GitHubProfile {
  username: string;
  name: string;
  bio?: string;
  company?: string;
  location?: string;
  blog?: string;
  followers: number;
  following: number;
  publicRepos: number;
  avatarUrl: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  fullName: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
  url: string;
  topics: string[];
  isForked: boolean;
  updatedAt: string;
}

// ─── API Response Types ────────────────────────────────────────────────────────

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// ─── AI Generation Types ──────────────────────────────────────────────────────

export interface AIGenerationJob {
  jobId: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  progress: number;
  result?: Partial<CVContent>;
  error?: string;
}

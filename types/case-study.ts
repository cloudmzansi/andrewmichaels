// Case Study specific type definitions for CloudMzansi Lexend project

import { BaseComponentProps, ImageConfig } from './index';
import { MetricItem } from '@/components/case-studies/ImpactDashboard';

// Case Study Project Information
export interface CaseStudyProject {
  id: string;
  title: string;
  tagline: string;
  client: string;
  industry: string;
  projectDate: string;
  role: string;
  heroImage: ImageConfig;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: MetricItem[];
  beforeImage: ImageConfig;
  afterImage: ImageConfig;
  technologies: string[];
  duration: string;
  teamSize: string;
}

// Case Study Section Props
export interface CaseStudySectionProps extends BaseComponentProps {
  project: CaseStudyProject;
}

// Case Study Hero Section Props
export interface CaseStudyHeroProps extends BaseComponentProps {
  title: string;
  tagline: string;
  heroImage: ImageConfig;
}

// Case Study Overview Props
export interface CaseStudyOverviewProps extends BaseComponentProps {
  client: string;
  industry: string;
  projectDate: string;
  role: string;
  overview: string;
}

// Case Study Challenge Props
export interface CaseStudyChallengeProps extends BaseComponentProps {
  challenge: string;
}

// Case Study Solution Props
export interface CaseStudySolutionProps extends BaseComponentProps {
  solution: string;
}

// Case Study Results Props
export interface CaseStudyResultsProps extends BaseComponentProps {
  results: string[];
}

// Case Study Before After Props
export interface CaseStudyBeforeAfterProps extends BaseComponentProps {
  beforeImage: ImageConfig;
  afterImage: ImageConfig;
}

// Case Study CTA Props
export interface CaseStudyCTAProps extends BaseComponentProps {
  primaryAction: {
    text: string;
    href: string;
    variant: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'ghost-primary' | 'ghost-secondary' | 'ghost-tertiary' | 'alt-dark';
  };
  secondaryAction?: {
    text: string;
    href: string;
    variant: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'ghost-primary' | 'ghost-secondary' | 'ghost-tertiary' | 'alt-dark';
  };
}

// Case Study Metadata Props
export interface CaseStudyMetadataProps {
  project: CaseStudyProject;
}

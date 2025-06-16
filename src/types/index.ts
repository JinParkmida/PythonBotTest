export type LearningMode = 'explore' | 'guided';

export type ContentModality = 'video' | 'audio' | 'text' | 'interactive' | 'diagram';

export type LearningStyle = 'visual' | 'auditory' | 'reading' | 'kinesthetic';

export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced';

export interface UserProfile {
  learningStyle: LearningStyle;
  experience: ExperienceLevel;
  preferences: {
    codeFirst: boolean;
    visualDiagrams: boolean;
    stepByStep: boolean;
  };
}

export interface ConceptAtomType {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  prerequisites: string[];
  nextConcepts: string[];
  estimatedTime: number;
  content: {
    video?: {
      url: string;
      transcript: string;
    };
    audio?: {
      url: string;
      transcript: string;
    };
    text?: {
      sections: Array<{
        title: string;
        content: string;
        codeExample?: string;
      }>;
    };
    interactive?: {
      challenges: Array<{
        type: 'code' | 'quiz' | 'drag-drop';
        question: string;
        solution?: string;
        options?: string[];
        hints: string[];
      }>;
    };
    diagram?: {
      type: 'flowchart' | 'mindmap' | 'process';
      elements: Array<{
        id: string;
        type: string;
        content: string;
        position: { x: number; y: number };
        connections?: string[];
      }>;
    };
  };
  tags: string[];
}

export interface GraphNode {
  id: string;
  x: number;
  y: number;
  level: number;
  connections: string[];
}
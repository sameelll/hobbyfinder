export interface HobbyRecommendation {
  name: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  costLevel: string;
  timeCommitment: string;
  icon: string;
  benefits: string[];
  requirements: string[];
  category: 'physical' | 'creative' | 'mental' | 'social';
  environment: 'outdoor' | 'indoor' | 'both';
} 
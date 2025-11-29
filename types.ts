export type CategoryType = 
  | "Health" 
  | "Education" 
  | "Agriculture" 
  | "Social Security" 
  | "Employment" 
  | "Technology" 
  | "Current Affairs" 
  | "Govt Exams"
  | "Movies";

export interface Article {
  id: string;
  title: string;
  hindiTitle?: string;
  category: CategoryType;
  imageUrl?: string; // URL for article thumbnail
  summary: string; // Short description for the card
  content?: string; // Long form content for articles (paragraphs)
  date: string;
  author?: string;
  rating?: string; // For Movies

  // Specific to Government Schemes
  isScheme?: boolean;
  eligibility?: string[];
  benefits?: string[];
  applicationProcess?: string;
  officialLink?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isThinking?: boolean;
}
export enum MessageSender {
  User = 'user',
  System = 'system'
}

export interface FlashcardData {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ScenarioOption {
  id: string;
  label: string;
  feedback: string;
  isCorrect: boolean;
}

export interface ScenarioData {
  id: string;
  prompt: string;
  options: ScenarioOption[];
  context?: string; // e.g., "Raj is writing an email..."
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: number;
}
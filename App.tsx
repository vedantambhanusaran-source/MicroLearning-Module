import React from 'react';
import { Target, AlertTriangle } from 'lucide-react';
import { Flashcards } from './components/Flashcards';
import { ScenarioPlayer } from './components/ScenarioPlayer';
import { Checklist } from './components/Checklist';
import { FlashcardData } from './types';

function App() {
  const canDoCards: FlashcardData[] = [
    { id: 'c1', title: 'Automate Tasks', description: 'AI can simplify repetitive tasks like data entry and scheduling, saving valuable time.', iconName: 'Zap' },
    { id: 'c2', title: 'Summarize Content', description: 'AI can quickly digest and summarize long documents, emails, or meeting transcripts.', iconName: 'FileText' },
    { id: 'c3', title: 'Pattern Detection', description: 'AI excels at organizing large datasets into meaningful patterns, trends, and themes.', iconName: 'BarChart3' },
    { id: 'c4', title: 'Generate Drafts', description: 'AI can create solid first drafts for emails, reports, and social posts to overcome writer\'s block.', iconName: 'PenTool' },
  ];

  const cannotDoCards: FlashcardData[] = [
    { id: 'n1', title: 'Understand Nuance', description: 'AI lacks understanding of your company specific culture, subtext, and unwritten rules.', iconName: 'Brain' },
    { id: 'n2', title: 'Ethical Judgement', description: 'AI cannot make moral decisions. It cannot distinguish between what is appropriate or sensitive.', iconName: 'Scale' },
    { id: 'n3', title: 'Emotional Context', description: 'AI frequently misinterprets human tone, emotions, and subtle interpersonal cues.', iconName: 'Smile' },
    { id: 'n4', title: 'Replace Expertise', description: 'AI is a tool, not a replacement. It requires your human insight and expert judgement.', iconName: 'UserCheck' },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      {/* Sticky Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-zinc-200 z-40 supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-violet-600 p-1.5 rounded-lg shadow-md shadow-violet-200">
                <Target className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-zinc-900 tracking-tight">MicroLearn: AI Literacy</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1920&auto=format&fit=crop" 
            alt="Futuristic Office" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-transparent to-zinc-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 mix-blend-overlay"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-violet-100 text-violet-700 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm border border-violet-200">
            5-Minute Microlearning
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-zinc-900 tracking-tight mb-6">
            AI Literacy at Work
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Understand what AI can—and cannot—do to boost your productivity safely.
          </p>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="py-12 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                <div className="text-sm font-bold uppercase text-zinc-400 tracking-widest">You will learn to:</div>
                <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-lg shadow-cyan-200"></div>
                        <span className="font-medium text-zinc-700">Identify Capabilities</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-fuchsia-500 shadow-lg shadow-fuchsia-200"></div>
                        <span className="font-medium text-zinc-700">Recognize Limitations</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-200"></div>
                        <span className="font-medium text-zinc-700">Make Ethical Decisions</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Can Do Section */}
      <section id="can-do">
        <Flashcards 
            title="What AI Can Do" 
            subtitle="AI is a powerful engine for efficiency and creation." 
            cards={canDoCards} 
        />
      </section>

      {/* Cannot Do Section */}
      <section id="cannot-do">
        <Flashcards 
            title="What AI Cannot Do" 
            subtitle="Technology has hard limits. Human oversight is non-negotiable." 
            cards={cannotDoCards} 
            variant="negative"
        />
      </section>

      {/* Scenario Section */}
      <section id="scenario">
        <ScenarioPlayer />
      </section>

      {/* Best Practices */}
      <section id="checklist">
        <Checklist />
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-400 py-12 text-center border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-center items-center gap-2 mb-4">
                <Target className="w-6 h-6 text-violet-500" />
                <span className="font-bold text-zinc-200">MicroLearn</span>
            </div>
            <p className="text-sm">© {new Date().getFullYear()} Corporate Training Division.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
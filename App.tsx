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
      <header className="fixed top-0 w-full bg-gradient-to-r from-white via-white to-violet-50/50 backdrop-blur-md border-b border-zinc-200 z-40 supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-gradient-to-br from-violet-600 to-violet-700 p-2 rounded-lg shadow-md shadow-violet-200 group-hover:shadow-lg group-hover:shadow-violet-300 transition-all">
                <Target className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg text-zinc-900 tracking-tight block">MicroLearn</span>
              <span className="text-xs text-violet-600 font-semibold">AI Literacy</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-violet-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block py-2 px-4 rounded-full bg-gradient-to-r from-violet-100 to-fuchsia-100 text-violet-700 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm border border-violet-300/50 backdrop-blur">
            ✨ 5-Minute Microlearning
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-violet-800 to-fuchsia-700 tracking-tight mb-6">
            AI Literacy at Work
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Understand what AI can—and cannot—do to boost your productivity safely.
          </p>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="py-16 bg-gradient-to-r from-white via-violet-50/30 to-white border-y border-zinc-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
                <div className="text-sm font-bold uppercase text-violet-600 tracking-widest">📚 You will learn to:</div>
                <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg border border-cyan-100/50 hover:border-cyan-300/50 transition-all">
                        <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-lg shadow-cyan-300"></div>
                        <span className="font-semibold text-zinc-700">Identify Capabilities</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg border border-fuchsia-100/50 hover:border-fuchsia-300/50 transition-all">
                        <div className="w-3 h-3 rounded-full bg-fuchsia-500 shadow-lg shadow-fuchsia-300"></div>
                        <span className="font-semibold text-zinc-700">Recognize Limitations</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg border border-emerald-100/50 hover:border-emerald-300/50 transition-all">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-300"></div>
                        <span className="font-semibold text-zinc-700">Make Ethical Decisions</span>
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
      <footer className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-zinc-400 py-16 text-center border-t border-zinc-700/50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-center items-center gap-2 mb-4">
                <Target className="w-6 h-6 text-violet-500" />
                <span className="font-bold text-lg text-zinc-100">MicroLearn</span>
            </div>
            <p className="text-sm mb-8">© {new Date().getFullYear()} Corporate Training Division. Empowering AI Literacy.</p>
            <div className="border-t border-zinc-700/30 pt-8 text-xs text-zinc-500">
              <p>Built with ❤️ for modern learners | 5-minute microlearning modules for busy professionals</p>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
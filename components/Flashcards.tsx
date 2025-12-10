import React, { useState } from 'react';
import { FlashcardData } from '../types';
import { Zap, FileText, BarChart3, PenTool, Brain, Scale, Smile, UserCheck } from 'lucide-react';

const getIcon = (name: string) => {
  switch (name) {
    case 'Zap': return <Zap className="w-8 h-8 text-cyan-500" />;
    case 'FileText': return <FileText className="w-8 h-8 text-violet-500" />;
    case 'BarChart3': return <BarChart3 className="w-8 h-8 text-emerald-500" />;
    case 'PenTool': return <PenTool className="w-8 h-8 text-orange-500" />;
    case 'Brain': return <Brain className="w-8 h-8 text-rose-500" />;
    case 'Scale': return <Scale className="w-8 h-8 text-amber-500" />;
    case 'Smile': return <Smile className="w-8 h-8 text-pink-500" />;
    case 'UserCheck': return <UserCheck className="w-8 h-8 text-indigo-500" />;
    default: return <Zap className="w-8 h-8 text-zinc-500" />;
  }
};

const Flashcard: React.FC<{ card: FlashcardData }> = ({ card }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group h-64 w-full perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)} // Mobile support
    >
      <div
        className={`relative w-full h-full duration-500 preserve-3d transition-all ${
          isHovered ? 'rotate-y-180' : ''
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div className="absolute w-full h-full bg-gradient-to-br from-white to-zinc-50 rounded-xl shadow-lg border border-zinc-200 p-6 flex flex-col items-center justify-center backface-hidden hover:shadow-xl transition-all group-hover:border-violet-300">
          <div className="mb-4 p-4 bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-full border border-zinc-200 group-hover:bg-violet-50 group-hover:border-violet-300 transition-all">
            {getIcon(card.iconName)}
          </div>
          <h3 className="text-xl font-bold text-zinc-800 text-center">{card.title}</h3>
          <p className="mt-4 text-xs text-zinc-400 uppercase tracking-widest font-semibold group-hover:text-violet-600 transition-colors">Hover to learn</p>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full bg-gradient-to-br from-violet-600 via-violet-700 to-fuchsia-600 rounded-xl shadow-xl p-6 flex items-center justify-center rotate-y-180 backface-hidden">
          <p className="text-white text-lg font-medium text-center leading-relaxed">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
};

interface Props {
  title: string;
  subtitle: string;
  cards: FlashcardData[];
  variant?: 'positive' | 'negative';
}

export const Flashcards: React.FC<Props> = ({ title, subtitle, cards, variant = 'positive' }) => {
  return (
    <div className={`py-20 px-4 sm:px-6 lg:px-8 ${variant === 'negative' ? 'bg-gradient-to-b from-zinc-50 to-white' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-zinc-900 sm:text-5xl mb-4">{title}</h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto font-medium">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <div key={card.id} className="animate-fadeIn" style={{ animationDelay: `${idx * 100}ms` }}>
              <Flashcard card={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
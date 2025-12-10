import React, { useState } from 'react';
import { ScenarioData, ScenarioOption } from '../types';
import { CheckCircle, XCircle, RefreshCw, Loader2, Send } from 'lucide-react';
import { generateNewScenario } from '../services/geminiService';

const RAJ_SCENARIO: ScenarioData = {
  id: 'raj-001',
  context: "Raj uses AI to write an email to a client, but the tone is too casual.",
  prompt: "What should Raj do?",
  options: [
    {
      id: 'opt1',
      label: "Send as is",
      feedback: "Not ideal. Tone mismatch can lead to misunderstandings. Always adjust tone before sending.",
      isCorrect: false
    },
    {
      id: 'opt2',
      label: "Edit tone manually",
      feedback: "Correct! Always review and revise AI drafts. Ensure tone matches the relationship and context.",
      isCorrect: true
    },
    {
      id: 'opt3',
      label: "Add an apology",
      feedback: "Not necessary. Avoid adding apologies unless required. Maintain professional confidence.",
      isCorrect: false
    }
  ]
};

export const ScenarioPlayer: React.FC = () => {
  const [currentScenario, setCurrentScenario] = useState<ScenarioData>(RAJ_SCENARIO);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelect = (id: string) => {
    if (selectedOption) return; // Prevent changing after selection
    setSelectedOption(id);
  };

  const loadNewScenario = async () => {
    setIsLoading(true);
    setSelectedOption(null);
    const newScenario = await generateNewScenario();
    if (newScenario) {
      setCurrentScenario(newScenario);
    }
    setIsLoading(false);
  };

  const currentOptionData = currentScenario.options.find(o => o.id === selectedOption);

  return (
    <div className="py-16 px-4 bg-zinc-900 text-zinc-50 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
            <div>
                <span className="text-violet-400 font-bold tracking-wider uppercase text-sm">Interactive Scenario</span>
                <h2 className="text-3xl font-bold mt-1 text-white">What would you do?</h2>
            </div>
            <button
                onClick={loadNewScenario}
                disabled={isLoading}
                className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 disabled:opacity-50 px-4 py-2 rounded-lg transition-colors text-sm font-medium text-white shadow-lg shadow-violet-900/50"
            >
                {isLoading ? <Loader2 className="animate-spin w-4 h-4" /> : <RefreshCw className="w-4 h-4" />}
                New Scenario (AI)
            </button>
        </div>

        {/* Scenario Card */}
        <div className="bg-zinc-800 rounded-2xl shadow-2xl overflow-hidden border border-zinc-700">
            {/* Email Header Simulation */}
            <div className="bg-zinc-900/50 p-4 border-b border-zinc-700 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="ml-4 text-zinc-400 text-sm font-mono">Simulated Workspace</span>
            </div>

            <div className="p-8">
                <div className="mb-6">
                    <p className="text-zinc-400 italic mb-2 text-sm">{currentScenario.context}</p>
                    <p className="text-xl font-medium text-white">{currentScenario.prompt}</p>
                </div>

                <div className="space-y-3">
                    {currentScenario.options.map((option) => (
                        <button
                            key={option.id}
                            onClick={() => handleSelect(option.id)}
                            disabled={!!selectedOption}
                            className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group
                                ${selectedOption === option.id
                                    ? option.isCorrect
                                        ? 'bg-emerald-900/30 border-emerald-500/50 ring-1 ring-emerald-500'
                                        : 'bg-rose-900/30 border-rose-500/50 ring-1 ring-rose-500'
                                    : 'bg-zinc-700/50 border-zinc-600 hover:bg-zinc-700 hover:border-zinc-500'
                                }
                                ${selectedOption && selectedOption !== option.id ? 'opacity-50' : 'opacity-100'}
                            `}
                        >
                            <span className="font-medium text-zinc-100">{option.label}</span>
                            {selectedOption === option.id && (
                                option.isCorrect
                                    ? <CheckCircle className="w-5 h-5 text-emerald-400" />
                                    : <XCircle className="w-5 h-5 text-rose-400" />
                            )}
                            {!selectedOption && (
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Send className="w-4 h-4 text-zinc-400" />
                                </div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Feedback Section */}
                {selectedOption && currentOptionData && (
                    <div className={`mt-8 p-6 rounded-xl border animate-in fade-in slide-in-from-bottom-4 duration-500
                        ${currentOptionData.isCorrect ? 'bg-emerald-950/40 border-emerald-900 text-emerald-100' : 'bg-rose-950/40 border-rose-900 text-rose-100'}
                    `}>
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                            {currentOptionData.isCorrect ? 'Correct!' : 'Not quite.'}
                        </h4>
                        <p className="leading-relaxed">
                            {currentOptionData.feedback}
                        </p>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};
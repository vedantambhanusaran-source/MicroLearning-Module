import React from 'react';
import { ShieldCheck } from 'lucide-react';

const items = [
  "Review outputs every time",
  "Never paste confidential data into AI tools",
  "Provide clear context to AI",
  "Use AI for drafts, not decisions",
  "Maintain professional judgement"
];

export const Checklist: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 border border-violet-100 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
            <div className="p-4 bg-white rounded-2xl shadow-md text-violet-600">
                <ShieldCheck className="w-10 h-10" />
            </div>
            <div>
                <h2 className="text-2xl font-bold text-zinc-900">Best Practices Checklist</h2>
                <p className="text-zinc-600">Keep these rules in mind for every interaction.</p>
            </div>
          </div>
          
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <span className="text-zinc-800 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
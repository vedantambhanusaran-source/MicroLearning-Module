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
    <div className="py-20 px-4 bg-gradient-to-b from-white to-zinc-50">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 border border-violet-200/50 rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
            <div className="p-4 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl shadow-lg shadow-violet-300/30 text-white">
                <ShieldCheck className="w-10 h-10" />
            </div>
            <div>
                <h2 className="text-3xl font-extrabold text-zinc-900">Best Practices Checklist</h2>
                <p className="text-zinc-600 mt-2 font-medium">Keep these rules in mind for every interaction.</p>
            </div>
          </div>
          
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-4 bg-white p-5 rounded-xl border border-zinc-200/50 shadow-sm hover:shadow-md hover:border-violet-300/50 transition-all group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 border-2 border-emerald-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <span className="text-zinc-800 font-semibold group-hover:text-violet-700 transition-colors">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
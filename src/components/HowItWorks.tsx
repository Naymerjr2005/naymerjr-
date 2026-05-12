import React from 'react';
import { MousePointer2, Calendar, Gem, UserCheck } from 'lucide-react';

const STEPS = [
  {
    icon: MousePointer2,
    title: "Tap Verse logo",
    desc: "Simply tap the glowing logo on your dashboard to start earning rewards instantly."
  },
  {
    icon: Calendar,
    title: "Daily limit",
    desc: "Maximize your earnings by hitting the 100 taps daily limit. Resets every 24 hours."
  },
  {
    icon: Gem,
    title: "Earn Verse",
    desc: "Each tap grants you 1 VERSE token. Watch your balance grow in real-time."
  },
  {
    icon: UserCheck,
    title: "For everyone",
    desc: "Open to the entire community. No complex setup required to start your journey."
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-display font-bold">HOW IT WORKS</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {STEPS.map((step, index) => (
          <div key={index} className="glow-card border-white/5 hover:bg-white/[0.02]">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
              index % 2 === 0 ? 'bg-verse-purple/10 text-verse-purple' : 'bg-verse-blue/10 text-verse-blue'
            }`}>
              <step.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

import React from 'react';
import { LayoutGrid } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-verse-purple to-verse-blue rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
          <LayoutGrid className="text-white w-6 h-6" />
        </div>
        <h1 className="text-xl font-display font-bold tracking-tight">
          VERSE <span className="verse-gradient-text">TAP</span>
        </h1>
      </div>
      
      <div className="hidden md:flex items-center gap-4">
        <div className="glow-card py-2 px-4 flex items-center gap-3 border-verse-purple/30">
          <div className="w-2 h-2 rounded-full bg-verse-purple animate-pulse shadow-[0_0_8px_rgba(139,92,246,1)]" />
          <span className="text-sm font-medium text-zinc-400">Total Verse Pool</span>
          <span className="text-sm font-bold text-white">50,000 VERSE</span>
        </div>
      </div>
    </header>
  );
};

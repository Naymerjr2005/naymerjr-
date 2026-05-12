import React from 'react';
import { Twitter, Github, Globe, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 pb-10 border-t border-white/5 pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-verse-purple rounded-lg flex items-center justify-center">
              <span className="font-bold text-white text-xs">V</span>
            </div>
            <span className="font-display font-bold tracking-tight">VERSE TAP</span>
          </div>
          <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
            Accelerating the transition to a decentralized future through community-driven gamified experiences.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-widest">Ecosystem</h4>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-verse-purple transition-colors">Verse Exchange</a></li>
            <li><a href="#" className="hover:text-verse-purple transition-colors">Governance</a></li>
            <li><a href="#" className="hover:text-verse-purple transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-verse-purple transition-colors">Bug Bounty</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-widest">Support</h4>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-verse-purple transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-verse-purple transition-colors">Security</a></li>
            <li><a href="#" className="hover:text-verse-purple transition-colors">Terms of Use</a></li>
            <li><a href="#" className="hover:text-verse-purple transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-widest">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center hover:bg-verse-purple/20 hover:text-verse-purple transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center hover:bg-verse-purple/20 hover:text-verse-purple transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center hover:bg-verse-purple/20 hover:text-verse-purple transition-all">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 gap-4">
        <p className="text-xs text-zinc-600">
          © 2026 Verse Ecosystem. All rights reserved.
        </p>
        <div className="flex items-center gap-2 text-xs text-zinc-600">
          Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for the <span className="text-zinc-400 font-bold">Verse Community</span>
        </div>
      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { Wallet, Users, LayoutList, CheckCircle2 } from 'lucide-react';

export const SidebarActions: React.FC = () => {
  const [wallet, setWallet] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    if (!wallet) return;
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-6 lg:h-full">
      <div className="glow-card h-full space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-verse-purple/10 rounded-lg">
              <Wallet className="w-5 h-5 text-verse-purple" />
            </div>
            <h3 className="font-bold text-white">Wallet Address</h3>
          </div>
          
          <div className="space-y-3">
            <input 
              type="text" 
              placeholder="0x... or ENS"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-verse-purple/50 transition-colors"
            />
            <button 
              onClick={handleSave}
              className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                isSaved 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                : 'bg-verse-purple hover:bg-verse-purple/80 text-white'
              }`}
            >
              {isSaved ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Address Saved
                </>
              ) : (
                'Assign Reward Wallet'
              )}
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 space-y-3">
          <button className="w-full py-4 bg-zinc-800/50 hover:bg-zinc-800 border border-white/5 rounded-2xl flex items-center justify-between px-6 transition-all group">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-verse-blue group-hover:neon-text-blue transition-all" />
              <span className="text-sm font-bold text-zinc-300 group-hover:text-white">Join Community</span>
            </div>
            <div className="w-6 h-6 rounded-full bg-zinc-700/50 flex items-center justify-center text-[10px] font-bold">
              +
            </div>
          </button>

          <button className="w-full py-4 bg-verse-blue/10 hover:bg-verse-blue/20 border border-verse-blue/20 rounded-2xl flex items-center justify-between px-6 transition-all group">
            <div className="flex items-center gap-3">
              <LayoutList className="w-5 h-5 text-verse-blue" />
              <span className="text-sm font-bold text-white">Registration</span>
            </div>
            <span className="text-[10px] font-bold text-verse-blue uppercase tracking-widest">Early Access</span>
          </button>
        </div>

        <div className="pt-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-verse-purple/10 to-verse-blue/10 border border-white/5">
            <p className="text-xs font-bold text-verse-purple uppercase tracking-[0.2em] mb-2">Announcement</p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Mainnet bridge is opening next week. Users with 10k+ VERSE will be eligible for early validator slots.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

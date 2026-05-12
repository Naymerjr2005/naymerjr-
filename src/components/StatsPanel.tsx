import React from 'react';
import { Wallet, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface StatsPanelProps {
  balance: number;
  todayTaps: number;
  dailyLimit: number;
}

export const StatsPanel: React.FC<StatsPanelProps> = ({ balance, todayTaps, dailyLimit }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Your Stats</h2>
      
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="glow-card glow-card-purple"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-verse-purple/20 flex items-center justify-center">
            <Wallet className="text-verse-purple w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-zinc-500 font-medium">Available Balance</p>
            <p className="text-2xl font-display font-bold text-white">{balance.toLocaleString()} VERSE</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="glow-card"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
            <Zap className="text-blue-400 w-6 h-6" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-zinc-500 font-medium">Today's Taps</p>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-display font-bold text-white">{todayTaps} <span className="text-sm text-zinc-500 font-medium">/ {dailyLimit}</span></p>
              <span className="text-[10px] font-bold text-blue-400 mb-1">{Math.round((todayTaps / dailyLimit) * 100)}%</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-800 rounded-full mt-2 overflow-hidden">
              <motion.div 
                className="h-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]"
                initial={{ width: 0 }}
                animate={{ width: `${(todayTaps / dailyLimit) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="glow-card border-zinc-800"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center">
            <ShieldCheck className="text-zinc-400 w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-zinc-500 font-medium">Daily Limit Status</p>
            <p className="text-lg font-display font-bold text-green-400">Verified</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

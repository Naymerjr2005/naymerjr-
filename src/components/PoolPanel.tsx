import React from 'react';
import { motion } from 'motion/react';
import { Database, TrendingUp, Users } from 'lucide-react';

interface PoolPanelProps {
  balance: number;
}

export const PoolPanel: React.FC<PoolPanelProps> = ({ balance }) => {
  const totalPool = 50000;
  const distributed = 12450 + balance;
  const percentage = (distributed / totalPool) * 100;

  return (
    <div className="space-y-4">
      <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1 text-right">Verse Pool</h2>
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="glow-card glow-card-blue bg-zinc-900/40"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center">
            <Database className="text-blue-400 w-6 h-6" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-zinc-500 font-medium">Total Resource Pool</p>
            <p className="text-2xl font-display font-bold text-white tracking-tight">50,000.00 <span className="text-sm text-blue-400">VERSE</span></p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs font-medium">
            <span className="text-zinc-500">Distributed Reward</span>
            <span className="text-white">{distributed.toLocaleString()} VERSE</span>
          </div>
          <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden border border-white/5">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              className="h-full bg-gradient-to-r from-verse-blue to-verse-purple"
            />
          </div>
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
            <span className="text-blue-400">{percentage.toFixed(1)}% Claimed</span>
            <span className="text-zinc-600">{(100 - percentage).toFixed(1)}% Remaining</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 gap-3"
      >
        <div className="glow-card p-4 flex flex-col gap-2">
          <TrendingUp className="w-4 h-4 text-green-400" />
          <p className="text-[10px] font-bold text-zinc-500 uppercase">Growth</p>
          <p className="text-sm font-bold text-white">+12.5%</p>
        </div>
        <div className="glow-card p-4 flex flex-col gap-2">
          <Users className="w-4 h-4 text-purple-400" />
          <p className="text-[10px] font-bold text-zinc-500 uppercase">Active</p>
          <p className="text-sm font-bold text-white">1,248</p>
        </div>
      </motion.div>
    </div>
  );
};

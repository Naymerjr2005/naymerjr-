import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutGrid, Info } from 'lucide-react';

interface TapPanelProps {
  onTap: () => void;
  canTap: boolean;
  todayTaps: number;
}

export const TapPanel: React.FC<TapPanelProps> = ({ onTap, canTap, todayTaps }) => {
  const [tapEffects, setTapEffects] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleTap = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!canTap) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const id = Date.now();
    setTapEffects((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setTapEffects((prev) => prev.filter((eff) => eff.id !== id));
    }, 1000);

    onTap();
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-8">
      <div className="relative">
        {/* Background Glows */}
        <div className="absolute inset-0 bg-verse-purple/20 blur-[100px] rounded-full scale-150 animate-pulse" />
        <div className="absolute inset-0 bg-verse-blue/10 blur-[60px] rounded-full -translate-x-12 translate-y-12" />

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleTap}
          disabled={!canTap}
          className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center transition-all duration-300 group ${
            canTap 
            ? 'cursor-pointer' 
            : 'cursor-not-allowed opacity-50 grayscale'
          }`}
        >
          {/* Outer Border Glow */}
          <div className="absolute inset-0 rounded-full border-4 border-verse-purple/30 group-hover:border-verse-purple/50 transition-colors shadow-[0_0_40px_rgba(139,92,246,0.2)]" />
          
          {/* Inner Circle */}
          <div className="absolute inset-4 rounded-full bg-zinc-900 flex flex-col items-center justify-center overflow-hidden border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-b from-verse-purple/10 to-transparent pointer-events-none" />
            
            <motion.div
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-20"
            >
              <div className="w-full h-full border-[1px] border-dashed border-verse-purple rounded-full scale-110" />
            </motion.div>

            <LayoutGrid className="w-24 h-24 md:w-32 md:h-32 text-verse-purple group-hover:neon-text-purple transition-all duration-300 mb-4" />
            
            <p className="text-xl md:text-2xl font-display font-black tracking-widest text-white/90 group-hover:text-white transition-colors">
              TAP
            </p>
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em] mt-1">
              & Earn VERSE
            </p>
          </div>

          {/* Particle Effects on Tap */}
          <AnimatePresence>
            {tapEffects.map((effect) => (
              <motion.div
                key={effect.id}
                initial={{ opacity: 1, y: 0, scale: 0.5 }}
                animate={{ opacity: 0, y: -100, scale: 1.5 }}
                exit={{ opacity: 0 }}
                style={{ position: 'absolute', left: effect.x, top: effect.y, pointerEvents: 'none' }}
                className="text-verse-purple font-display font-bold text-2xl z-50 drop-shadow-[0_0_10px_rgba(139,92,246,1)]"
              >
                +1
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.button>
      </div>

      <div className="w-full max-w-md">
        <div className="glow-card bg-zinc-950/80 border-verse-blue/20">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-verse-blue/10 rounded-lg">
              <Info className="w-5 h-5 text-verse-blue" />
            </div>
            <div>
              <p className="text-sm font-bold text-white mb-1">Earning Guide</p>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Click the Verse logo to earn rewards. You can tap up to 100 times per day. Your progress resets at midnight UTC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: "What is Bitcoin?",
    answer: "Bitcoin is the first decentralized cryptocurrency, a digital asset that uses cryptography to secure its transactions and to control the creation of new units."
  },
  {
    question: "What is Verse Token?",
    answer: "Verse is the native token of the Verse ecosystem, designed to reward users for participation and provide governance benefits within the platform."
  },
  {
    question: "What is Blockchain?",
    answer: "A blockchain is a decentralized, distributed, digital ledger that is used to record transactions across many computers so that the record cannot be altered retroactively."
  },
  {
    question: "What is Gas Fee?",
    answer: "Gas fees are payments made by users to compensate for the computing energy required to process and validate transactions on a blockchain network."
  },
  {
    question: "What is Web3?",
    answer: "Web3 is the next generation of the internet, where users have ownership of their data and digital identities, powered by blockchain technology."
  }
];

export const FaqSection: React.FC = () => {
  const [selectedFaq, setSelectedFaq] = useState<typeof FAQS[0] | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-display font-bold">CRYPTO QUESTIONS</h2>
        <div className="p-2 bg-verse-purple/10 rounded-lg">
          <HelpCircle className="w-5 h-5 text-verse-purple" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {FAQS.map((faq, index) => (
          <motion.button
            key={index}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedFaq(faq)}
            className="glow-card text-left flex flex-col justify-between h-32 group hover:border-verse-purple/50"
          >
            <p className="text-sm font-bold text-white group-hover:text-verse-purple transition-colors">{faq.question}</p>
            <div className="flex items-center text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
              Read Details <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedFaq && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFaq(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-zinc-900 border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-verse-purple to-verse-blue" />
              
              <button 
                onClick={() => setSelectedFaq(null)}
                className="absolute top-4 right-4 p-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-zinc-500" />
              </button>

              <HelpCircle className="w-12 h-12 text-verse-purple mb-6" />
              <h3 className="text-2xl font-display font-bold text-white mb-4">{selectedFaq.question}</h3>
              <p className="text-zinc-400 leading-relaxed text-lg">
                {selectedFaq.answer}
              </p>
              
              <button 
                onClick={() => setSelectedFaq(null)}
                className="mt-8 w-full py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-2xl transition-all"
              >
                Got it
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

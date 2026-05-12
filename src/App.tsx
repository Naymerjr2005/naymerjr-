import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MarketTicker } from './components/MarketTicker';
import { StatsPanel } from './components/StatsPanel';
import { TapPanel } from './components/TapPanel';
import { PoolPanel } from './components/PoolPanel';
import { FaqSection } from './components/FaqSection';
import { HowItWorks } from './components/HowItWorks';
import { SidebarActions } from './components/SidebarActions';
import { Footer } from './components/Footer';

const DAILY_LIMIT = 100;

export default function App() {
  const [balance, setBalance] = useState(0);
  const [todayTaps, setTodayTaps] = useState(0);
  const [lastResetDate, setLastResetDate] = useState('');

  // Load state from localStorage
  useEffect(() => {
    const savedBalance = localStorage.getItem('verse_balance');
    const savedTaps = localStorage.getItem('verse_taps');
    const savedDate = localStorage.getItem('verse_last_reset');
    const currentDate = new Date().toISOString().split('T')[0];

    if (savedBalance) {
      const parsed = parseInt(savedBalance);
      if (!isNaN(parsed)) setBalance(parsed);
    }
    
    if (savedDate !== currentDate) {
      // New day, reset taps
      setTodayTaps(0);
      setLastResetDate(currentDate);
      localStorage.setItem('verse_taps', '0');
      localStorage.setItem('verse_last_reset', currentDate);
    } else {
      if (savedTaps) {
        const parsed = parseInt(savedTaps);
        if (!isNaN(parsed)) setTodayTaps(parsed);
      }
      setLastResetDate(savedDate || currentDate);
    }
  }, []);

  // Save state to localStorage
  useEffect(() => {
    localStorage.setItem('verse_balance', balance.toString());
    localStorage.setItem('verse_taps', todayTaps.toString());
    localStorage.setItem('verse_last_reset', lastResetDate);
  }, [balance, todayTaps, lastResetDate]);

  const handleTap = () => {
    if (todayTaps < DAILY_LIMIT) {
      setBalance(prev => prev + 1);
      setTodayTaps(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-verse-purple/30">
      <Header />
      <MarketTicker />
      
      <main className="flex-grow container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Panel */}
          <section className="lg:col-span-3 order-2 lg:order-1">
            <StatsPanel 
              balance={balance} 
              todayTaps={todayTaps} 
              dailyLimit={DAILY_LIMIT} 
            />
          </section>

          {/* Center Panel */}
          <section className="lg:col-span-6 order-1 lg:order-2">
            <TapPanel 
              onTap={handleTap} 
              canTap={todayTaps < DAILY_LIMIT}
              todayTaps={todayTaps}
            />
          </section>

          {/* Right Panel */}
          <section className="lg:col-span-3 order-3">
            <PoolPanel balance={balance} />
          </section>
        </div>

        <div className="space-y-20 mb-20">
          <FaqSection />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <HowItWorks />
            </div>
            <div className="lg:col-span-1">
              <SidebarActions />
            </div>
          </div>
        </div>

        <Footer />
      </main>

      {/* Decorative background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
      <div className="fixed top-1/4 left-0 w-96 h-96 bg-verse-purple/20 blur-[150px] rounded-full -translate-x-1/2 -z-20" />
      <div className="fixed bottom-1/4 right-0 w-96 h-96 bg-verse-blue/20 blur-[150px] rounded-full translate-x-1/2 -z-20" />
    </div>
  );
}


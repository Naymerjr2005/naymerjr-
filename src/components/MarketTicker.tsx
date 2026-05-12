import React, { useEffect, useState } from 'react';
import { TrendingUp, AlertCircle } from 'lucide-react';

interface CryptoPrice {
  id: string;
  symbol: string;
  price: number;
  change: number;
}

export const MarketTicker: React.FC = () => {
  const [prices, setPrices] = useState<CryptoPrice[]>([
    { id: 'bitcoin', symbol: 'BTC', price: 0, change: 0 },
    { id: 'matic-network', symbol: 'MATIC', price: 0, change: 0 },
  ]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,matic-network&vs_currencies=usd&include_24hr_change=true'
        );
        const data = await response.json();
        
        setPrices([
          { 
            id: 'bitcoin', 
            symbol: 'BTC', 
            price: data?.bitcoin?.usd ?? 0, 
            change: data?.bitcoin?.usd_24h_change ?? 0 
          },
          { 
            id: 'matic-network', 
            symbol: 'MATIC', 
            price: data?.['matic-network']?.usd ?? 0, 
            change: data?.['matic-network']?.usd_24h_change ?? 0 
          },
        ]);
      } catch (error) {
        console.error('Error fetching prices:', error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="bg-zinc-900/50 border-b border-white/5 py-2 px-6 flex items-center justify-between overflow-hidden whitespace-nowrap">
        <div className="flex items-center gap-6 animate-marquee">
          {prices[0].price === 0 ? (
            <div className="flex items-center gap-2">
              <div className="w-20 h-2 bg-zinc-800 rounded animate-pulse" />
              <div className="w-20 h-2 bg-zinc-800 rounded animate-pulse" />
            </div>
          ) : (
            prices.map((crypto) => (
              <div key={crypto.id} className="flex items-center gap-2">
                <span className="text-xs font-bold text-zinc-500 uppercase">{crypto.symbol}/USD</span>
                <span className="text-xs font-mono font-medium text-white">
                  ${(crypto.price || 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </span>
                <span className={`text-[10px] font-bold ${crypto.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {crypto.change >= 0 ? '+' : ''}{crypto.change.toFixed(2)}%
                </span>
              </div>
            ))
          )}

          
          <div className="flex items-center gap-2 ml-4">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">LIVE DATA</span>
          </div>
          
          <div className="flex items-center gap-2 ml-4 border-l border-white/10 pl-4">
            <span className="text-[10px] font-medium text-zinc-600 italic">Powered by CoinGecko</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <AlertCircle className="w-3 h-3 text-verse-blue" />
          <span className="text-[10px] text-zinc-400 font-medium overflow-hidden text-ellipsis max-w-[300px]">
             Verse Token is launching soon. Stay tuned for rewards!
          </span>
        </div>
      </div>
      
      {/* News Ticker */}
      <div className="bg-verse-purple/5 py-1.5 border-b border-white/5 overflow-hidden">
        <div className="flex gap-12 animate-marquee-fast whitespace-nowrap px-6">
          {[1, 2, 3].map((i) => (
            <span key={i} className="text-[10px] uppercase tracking-[0.2em] font-bold text-verse-purple/60">
              NEW TOKEN LISTING SOON • COMMUNITY REWARDS LIVE • VERSE TAP BETA v1.0 • BLOCKCHAIN INNOVATION
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

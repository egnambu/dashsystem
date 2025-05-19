import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { Card } from '@/components/ui/card';

// Sample data for the chart
const data = [
  { value: 220 },
  { value: 650 },
  { value: 3100 },
  { value: 180 },
  { value: 440 },
  { value: 560 },
  { value: 7020 },
  { value: 450 },
  { value: 580 },
  { value: 1060 },
  { value: 700 },
  { value: 520 },
  { value: 200 },
  { value: 380 },
  { value: 790 },
  { value: 900 },
  { value: 1120 },
  { value: 1140 },
];

export default function CryptoWidget() {
  return (
    
      <div className="relative w-full rounded-xl overflow-hidden">
        
        
        {/* Crypto Widget */}
        <div className="bg-zinc-900 px-2 py-2 rounded-xl">
          <Card className="bg-zinc-800 bg-opacity-80 backdrop-blur-md rounded-xl border-0 overflow-hidden">
            <div className="flex">
              {/* Left section - ETH balance */}
              <div className="p-3 flex-1 border-r border-zinc-700">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="bg-zinc-700 rounded-full p-1">
                    <svg width="14" height="14" viewBox="0 0 256 417" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                      <path fill="#fff" d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z" />
                      <path fill="#fff" d="M127.962 0L0 212.32l127.962 75.639V154.158z" />
                      <path fill="#fff" d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z" />
                      <path fill="#fff" d="M127.962 416.905v-104.72L0 236.585z" />
                      <path fill="#fff" d="M127.961 287.958l127.96-75.637-127.96-58.162z" />
                      <path fill="#fff" d="M0 212.32l127.96 75.638v-133.8z" />
                    </svg>
                  </div>
                  <div className="text-gray-300 text-xs font-medium truncate">0x662...0117e3</div>
                </div>
                
                <div className="text-gray-400 text-sm mb-1">23.324 ETH</div>
                <div className="text-white text-xl font-semibold">$25,536.51</div>
              </div>
              
              {/* Right section - ETH price chart */}
              <div className="p-3 flex-1">
                <div className="flex justify-end mb-1">
                  <div className="text-green-500 text-sm font-medium">+5.43%</div>
                </div>
                
                <div className="w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#22c55e" 
                        strokeWidth={2} 
                        dot={false}
                        isAnimationActive={true}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="text-white text-xl font-semibold text-right">$1,089.03</div>
              </div>
            </div>
          </Card>
          
          <div className="mt-2 text-zinc-400 text-center text-sm">Curerency Values are Up to Date with a 1 hour DIfference</div>
          
          {/* App icons row */}
          <div className="mt-4 grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-zinc-800 rounded-2xl h-16"></div>
            ))}
          </div>
        </div>
      </div> 
  );
}
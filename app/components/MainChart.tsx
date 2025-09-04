'use client';

import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, BarChart, Bar } from 'recharts';

const data = [
  { name: 'Jan', value: 20 },
  { name: 'Feb', value: 35 },
  { name: 'Mar', value: 25 },
  { name: 'Apr', value: 45 },
  { name: 'May', value: 30 },
  { name: 'Jun', value: 55 },
  { name: 'Jul', value: 40 },
  { name: 'Aug', value: 65 },
  { name: 'Sep', value: 50 },
  { name: 'Oct', value: 75 },
  { name: 'Nov', value: 60 },
  { name: 'Dec', value: 85 },
];

export function MainChart() {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 text-white">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">ChronoFilter</h2>
          <p className="text-blue-100 text-sm">Curate feeds on X/Twitter</p>
        </div>
        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded opacity-80"></div>
        </div>
      </div>
      
      <div className="flex items-center space-x-6 mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
          <span className="text-sm">Posts</span>
          <span className="text-lg font-bold">52.5k</span>
          <span className="text-green-300 text-sm">6,079 ▲</span>
        </div>
      </div>
      
      <div className="h-32 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <Area
              type="monotone"
              dataKey="value"
              stroke="#ffffff"
              strokeWidth={2}
              fill="rgba(255,255,255,0.1)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

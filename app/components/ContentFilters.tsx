'use client';

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const filterData = [
  { name: 'Mon', value: 40 },
  { name: 'Tue', value: 30 },
  { name: 'Wed', value: 50 },
  { name: 'Thu', value: 35 },
  { name: 'Fri', value: 60 },
  { name: 'Sat', value: 45 },
  { name: 'Sun', value: 70 },
];

export function ContentFilters() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Content Filterers</h3>
        <div className="text-2xl font-bold text-gray-800">$19,608</div>
      </div>
      
      <div className="text-xs text-gray-500 mb-4">FILTERED POSTS</div>
      
      <div className="h-24 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={filterData}>
            <Bar dataKey="value" fill="#6366f1" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600">EMF - From: Goals</span>
        <span className="text-gray-600">Σ/μ</span>
      </div>
    </div>
  );
}

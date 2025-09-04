'use client';

interface StatsCardProps {
  title: string;
  value: string;
  subtitle?: string;
  trend?: string;
  trendUp?: boolean;
}

export function StatsCard({ title, value, subtitle, trend, trendUp }: StatsCardProps) {
  return (
    <div className="bg-gray-800/90 backdrop-blur-lg rounded-xl p-4 text-white">
      <div className="text-sm text-gray-300 mb-1">{title}</div>
      <div className="text-xl font-bold mb-2">{value}</div>
      {subtitle && <div className="text-xs text-gray-400">{subtitle}</div>}
      {trend && (
        <div className={`text-xs flex items-center space-x-1 ${trendUp ? 'text-green-400' : 'text-red-400'}`}>
          <span>{trend}</span>
        </div>
      )}
    </div>
  );
}

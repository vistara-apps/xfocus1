'use client';

import { Search, Plus, Mic } from 'lucide-react';

export function Header() {
  return (
    <div className="h-16 bg-white/90 backdrop-blur-lg border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4 flex-1">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="ChronoFilter For"
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Plus className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Mic className="w-4 h-4 text-gray-600" />
        </button>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

'use client';

import { Settings, MoreHorizontal } from 'lucide-react';

const settingsItems = [
  { label: 'Marketing', enabled: true, amount: '$3,556' },
  { label: 'Movie/Titans', enabled: true },
  { label: 'ComTactics', enabled: true },
  { label: 'Dropout filterin', enabled: false },
  { label: 'Consent Save Options', enabled: false },
  { label: 'ComTactics', enabled: false },
  { label: 'HEARTSPECT', enabled: false },
  { label: 'Facilitatorship', enabled: false },
];

const bottomItems = [
  { label: 'Download', value: '9.0.2' },
  { label: 'Macros', value: '93.2mm' },
  { label: 'Materials', value: '9.0.2' },
  { label: 'Tuner Plugins' },
];

export function RightSidebar() {
  return (
    <div className="w-64 bg-gray-900/95 backdrop-blur-lg p-4 text-white">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Settings</h3>
          <Settings className="w-4 h-4" />
        </div>
        
        <div className="space-y-3">
          {settingsItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between py-1">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  {item.label === 'Marketing' && '💰'}
                  {item.label === 'Movie/Titans' && '🎬'}
                  {item.label === 'ComTactics' && '💬'}
                  {item.label === 'Dropout filterin' && '⚡'}
                  {item.label === 'Consent Save Options' && '💾'}
                  {item.label === 'HEARTSPECT' && '❤️'}
                  {item.label === 'Facilitatorship' && '🤝'}
                  {!['Marketing', 'Movie/Titans', 'ComTactics', 'Dropout filterin', 'Consent Save Options', 'HEARTSPECT', 'Facilitatorship'].includes(item.label) && '⚙️'}
                </div>
                <span className="text-sm">{item.label}</span>
              </div>
              <div className="flex items-center space-x-2">
                {item.amount && <span className="text-xs">{item.amount}</span>}
                <div className={`w-8 h-4 rounded-full ${item.enabled ? 'bg-blue-500' : 'bg-gray-600'} relative`}>
                  <div className={`w-3 h-3 bg-white rounded-full absolute top-0.5 transition-transform ${item.enabled ? 'translate-x-4' : 'translate-x-0.5'}`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="border-t border-gray-700 pt-4">
        <h4 className="font-semibold mb-3">Settings</h4>
        <div className="space-y-3">
          {bottomItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <span>⚙️</span>
                <span>{item.label}</span>
              </div>
              {item.value && (
                <span className="text-gray-400">{item.value} {item.label === 'Macros' ? '' : '▶'}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

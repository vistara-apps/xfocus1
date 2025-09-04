'use client';

import { 
  Home, 
  BarChart3, 
  Filter, 
  Settings, 
  User, 
  Bell, 
  Calendar,
  FileText,
  Search,
  Bookmark
} from 'lucide-react';

const sidebarItems = [
  { icon: Home, label: 'Home' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: Filter, label: 'Filters' },
  { icon: Search, label: 'Search' },
  { icon: Bell, label: 'Notifications' },
  { icon: Calendar, label: 'Schedule' },
  { icon: Bookmark, label: 'Saved' },
  { icon: FileText, label: 'Reports' },
  { icon: User, label: 'Profile' },
  { icon: Settings, label: 'Settings' },
];

export function Sidebar() {
  return (
    <div className="w-16 bg-white/90 backdrop-blur-lg border-r border-gray-200 flex flex-col items-center py-6 space-y-6">
      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
        <div className="w-4 h-4 bg-white rounded-sm"></div>
      </div>
      
      <div className="flex flex-col space-y-4">
        {sidebarItems.map((item, index) => (
          <button
            key={index}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
          >
            <item.icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
          </button>
        ))}
      </div>
    </div>
  );
}

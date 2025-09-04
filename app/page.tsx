'use client';

import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { MainChart } from './components/MainChart';
import { StatsCard } from './components/StatsCard';
import { ContentFilters } from './components/ContentFilters';
import { UserSettings } from './components/UserSettings';
import { RightSidebar } from './components/RightSidebar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-main">
      <div className="flex h-screen">
        <Sidebar />
        
        <div className="flex-1 flex flex-col">
          <Header />
          
          <div className="flex-1 flex">
            <div className="flex-1 p-6 space-y-6">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-8">
                  <MainChart />
                </div>
                <div className="col-span-4 grid grid-rows-4 gap-4">
                  <StatsCard 
                    title="Experience" 
                    value="£14.4" 
                    subtitle="/5 DOMAINS" 
                  />
                  <StatsCard 
                    title="Status" 
                    value="11,906" 
                  />
                  <StatsCard 
                    title="Actions" 
                    value="$263,595..." 
                  />
                  <div className="bg-white rounded-xl p-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-1">CLICKS</div>
                      <div className="text-xl font-bold">$11.4M</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <ContentFilters />
                <UserSettings />
              </div>
            </div>
            
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

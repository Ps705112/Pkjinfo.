import React from 'react';
import { BookOpen, CalendarDays, Radio } from 'lucide-react';

interface HeaderProps {
  onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  const currentDate = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={onLogoClick}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-orange-600 blur opacity-20 rounded-xl group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-orange-600 to-red-600 p-2.5 rounded-xl text-white shadow-lg transform group-hover:scale-105 transition-transform duration-200">
                <BookOpen size={26} />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-extrabold text-2xl text-gray-900 leading-none tracking-tight">
                PKJ<span className="text-orange-600">hub</span>
              </span>
              <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">
                Info & Entertainment
              </span>
            </div>
          </div>

          {/* Right Side Info (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-red-50 text-red-700 rounded-full border border-red-100 text-xs font-semibold animate-pulse">
              <Radio size={14} />
              <span>LIVE UPDATES</span>
            </div>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="flex flex-col items-end">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Today</span>
              <span className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                <CalendarDays size={14} className="text-orange-500" />
                {currentDate}
              </span>
            </div>
          </div>

          {/* Mobile Menu Placeholder */}
          <div className="md:hidden flex items-center">
             <div className="flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 rounded-lg text-xs font-medium border border-green-100">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                Online
             </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
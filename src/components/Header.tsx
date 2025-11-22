import React from 'react';
import { Sprout, Bell, User, Globe } from 'lucide-react';

interface HeaderProps {
  currentSection: string;
  language: string;
  onLanguageChange: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentSection, language, onLanguageChange }) => {
  return (
    <header className="bg-white shadow-md border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-green-600 p-2 rounded-lg">
              <Sprout className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">FarmAssist</h1>
              <p className="text-sm text-gray-500 capitalize">{currentSection}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select 
                value={language} 
                onChange={(e) => onLanguageChange(e.target.value)}
                className="appearance-none bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 pr-8 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="mr">मराठी</option>
              </select>
              <Globe className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
            
            <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
            </button>
            
            <button className="flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-lg hover:bg-green-100 transition-colors">
              <User className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
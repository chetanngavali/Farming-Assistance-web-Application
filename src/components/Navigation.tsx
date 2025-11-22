import React from 'react';
import { 
  Home, Cloud, TrendingUp, ShoppingCart, MessageCircle, 
  FileText, BookOpen, Calculator 
} from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'weather', label: 'Weather', icon: Cloud },
    { id: 'market', label: 'Market Prices', icon: TrendingUp },
    { id: 'marketplace', label: 'Marketplace', icon: ShoppingCart },
    { id: 'expert', label: 'Expert Chat', icon: MessageCircle },
    { id: 'schemes', label: 'Govt Schemes', icon: FileText },
    { id: 'learning', label: 'Learning', icon: BookOpen },
    { id: 'calculator', label: 'Calculator', icon: Calculator },
  ];

  return (
    <nav className="bg-white shadow-sm border-r border-gray-200 h-full">
      <div className="p-4">
        <div className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                  isActive 
                    ? 'bg-green-100 text-green-800 border border-green-200 shadow-sm' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-green-600' : 'text-gray-400'}`} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
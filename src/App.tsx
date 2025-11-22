import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Weather from './components/Weather';
import MarketPrices from './components/MarketPrices';
import Marketplace from './components/Marketplace';
import ExpertChat from './components/ExpertChat';
import GovernmentSchemes from './components/GovernmentSchemes';
import Learning from './components/Learning';
import Calculator from './components/Calculator';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [language, setLanguage] = useState('en');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'weather':
        return <Weather />;
      case 'market':
        return <MarketPrices />;
      case 'marketplace':
        return <Marketplace />;
      case 'expert':
        return <ExpertChat />;
      case 'schemes':
        return <GovernmentSchemes />;
      case 'learning':
        return <Learning />;
      case 'calculator':
        return <Calculator />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentSection={activeSection} 
        language={language}
        onLanguageChange={setLanguage}
      />
      
      <div className="flex h-screen pt-16">
        <div className="w-64 flex-shrink-0">
          <Navigation 
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
        </div>
        
        <main className="flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
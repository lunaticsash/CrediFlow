import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import HowItWorksPage from './pages/HowItWorksPage';
import PrivacyPage from './pages/PrivacyPage';
import LendersPage from './pages/LendersPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'dashboard' | 'how' | 'privacy' | 'lenders'>('landing');

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={setCurrentPage} />;
      case 'dashboard':
        return <DashboardPage onNavigate={setCurrentPage} />;
      case 'how':
        return <HowItWorksPage onNavigate={setCurrentPage} />;
      case 'privacy':
        return <PrivacyPage onNavigate={setCurrentPage} />;
      case 'lenders':
        return <LendersPage onNavigate={setCurrentPage} />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {renderPage()}
    </div>
  );
}

export default App;

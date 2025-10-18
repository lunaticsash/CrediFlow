import Navigation from '../components/Navigation';
import { TrendingUp, Shield, Zap, Users, ArrowRight, Brain, CreditCard, PiggyBank } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: 'landing' | 'dashboard' | 'how' | 'privacy' | 'lenders') => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="landing" onNavigate={onNavigate} />

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-violet-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Powering 77M+ Gig Workers in India
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Credit that understands{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                  how you earn
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                AI that builds a credit profile from your UPI and gig earnings. No salary slips needed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  Try Demo <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => onNavigate('how')}
                  className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-xl font-semibold hover:border-gray-300 transition-all"
                >
                  How It Works
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-violet-600 rounded-3xl p-8 shadow-2xl transform rotate-3">
                <div className="bg-white rounded-2xl p-6 transform -rotate-3 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-violet-100 rounded-full flex items-center justify-center">
                      <Users className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Credit Score</div>
                      <div className="text-2xl font-bold text-gray-900">520</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-violet-50 rounded-xl p-4">
                      <div className="text-sm text-gray-600 mb-1">Weekly Income</div>
                      <div className="text-xl font-bold text-gray-900">₹8,500</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4">
                      <div className="text-sm text-gray-600 mb-1">Loan Eligible</div>
                      <div className="text-xl font-bold text-green-600">₹5,000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Problem
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              77 million gig and freelance workers in India earn through UPI, wallets, and platforms but banks reject their loan applications because they lack salary slips.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 sm:p-12 border border-red-100">
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">77M+</div>
                <div className="text-gray-700">Gig Workers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">0%</div>
                <div className="text-gray-700">Credit Access</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">36%+</div>
                <div className="text-gray-700">Interest Rates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Solution
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              CrediFlow uses AI to analyze your real income patterns and create a dynamic credit score that updates weekly.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4">
                <Brain className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">AI Analysis</h3>
              <p className="text-gray-600">
                Analyzes UPI, SMS, and platform earnings data
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-100 to-violet-200 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="text-violet-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dynamic Score</h3>
              <p className="text-gray-600">
                Credit score updated weekly based on real data
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-4">
                <CreditCard className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Loans</h3>
              <p className="text-gray-600">
                Personalized loan options and BNPL access
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mb-4">
                <PiggyBank className="text-orange-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Financial Tips</h3>
              <p className="text-gray-600">
                Actionable advice to improve your score
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <Shield className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Secure</h3>
              <p className="text-gray-700">
                Your data is encrypted, read-only, and can be deleted anytime. Powered by RBI Account Aggregator APIs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-2xl p-8 border border-violet-200">
              <Zap className="text-violet-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Analysis</h3>
              <p className="text-gray-700">
                Get your credit score and recommendations in minutes, not weeks.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <Users className="text-green-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Built for You</h3>
              <p className="text-gray-700">
                Designed specifically for delivery partners, freelancers, creators, and gig workers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-violet-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            See how CrediFlow can help you access fair credit today.
          </p>
          <button
            onClick={() => onNavigate('dashboard')}
            className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
          >
            Try Demo <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="text-xl font-bold">CrediFlow</span>
              </div>
              <p className="text-gray-400 text-sm">
                Building Credit, Empowering Hustle
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <button onClick={() => onNavigate('how')} className="block hover:text-white">How It Works</button>
                <button onClick={() => onNavigate('dashboard')} className="block hover:text-white">Demo</button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <button onClick={() => onNavigate('privacy')} className="block hover:text-white">Privacy</button>
                <button onClick={() => onNavigate('lenders')} className="block hover:text-white">For Lenders</button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <button className="block hover:text-white">Terms</button>
                <button className="block hover:text-white">Security</button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            2025 Workers. Empowering India's workforce.
          </div>
        </div>
      </footer>
    </div>
  );
}

import Navigation from '../components/Navigation';
import { Building2, FileCheck, TrendingUp, Users, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';

interface LendersPageProps {
  onNavigate: (page: 'landing' | 'dashboard' | 'how' | 'privacy' | 'lenders') => void;
}

export default function LendersPage({ onNavigate }: LendersPageProps) {
  const handleRequestDemo = () => {
    alert('Thanks for your interest! In production, this would open a contact form for lenders to request API access and schedule a demo.');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="lenders" onNavigate={onNavigate} />

      <section className="bg-gradient-to-br from-blue-50 via-violet-50 to-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl mb-6">
            <Building2 className="text-white" size={32} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Partner with Workers to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              Reach 77M+ Gig Workers
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Access verified credit profiles and tap into India's fastest-growing workforce segment
          </p>
          <button
            onClick={handleRequestDemo}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
          >
            Request API Demo <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Opportunity
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              India's gig economy is booming, but traditional credit systems leave millions underserved
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">77M+</div>
              <div className="text-gray-900 font-semibold mb-1">Gig Workers</div>
              <div className="text-sm text-gray-600">Delivery, ride-hailing, freelance</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-violet-600 mb-2">₹12K+</div>
              <div className="text-gray-900 font-semibold mb-1">Average Monthly Income</div>
              <div className="text-sm text-gray-600">Regular, verifiable earnings</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-900 font-semibold mb-1">Loan Demand</div>
              <div className="text-sm text-gray-600">Underserved by traditional banks</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-200 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Traditional Lending Gap</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-gray-700">No salary slips or credit history</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-gray-700">Irregular income patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-gray-700">High perceived risk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-gray-700">Limited documentation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">CrediFlow Solution</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">Verified income from UPI and platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">AI-analyzed spending patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">Dynamic credit scoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">Complete digital documentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What You Get
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive credit profiles designed for modern lending
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <FileCheck className="text-blue-600 mb-3" size={32} />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Verified Credit Resumes</h3>
              <p className="text-gray-600">
                Digital credit profiles with verified income data, spending analysis, and credit scores
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <TrendingUp className="text-violet-600 mb-3" size={32} />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dynamic Scoring</h3>
              <p className="text-gray-600">
                Weekly updated credit scores reflecting current financial behavior and stability
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <Users className="text-green-600 mb-3" size={32} />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Pre-Qualified Leads</h3>
              <p className="text-gray-600">
                Access borrowers who match your lending criteria and risk appetite
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <Shield className="text-orange-600 mb-3" size={32} />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Risk Assessment</h3>
              <p className="text-gray-600">
                AI-powered risk analysis based on real income patterns and spending behavior
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <Zap className="text-red-600 mb-3" size={32} />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Integration</h3>
              <p className="text-gray-600">
                RESTful API for seamless integration with your existing lending infrastructure
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <Building2 className="text-blue-600 mb-3" size={32} />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Compliance Ready</h3>
              <p className="text-gray-600">
                Built on RBI Account Aggregator framework with full regulatory compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Integration</h3>
                <p className="text-gray-700">
                  Connect to our API and configure your lending criteria, risk parameters, and loan products
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-violet-50 to-violet-100 border border-violet-200 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-violet-600 text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Matching</h3>
                <p className="text-gray-700">
                  Receive pre-qualified borrower profiles that match your lending requirements
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-green-600 text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Review</h3>
                <p className="text-gray-700">
                  Access detailed credit resumes with income verification, spending analysis, and credit scores
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-orange-600 text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Decision</h3>
                <p className="text-gray-700">
                  Make informed lending decisions with comprehensive data and AI-powered risk assessment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-violet-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Tap into India's Gig Economy?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join leading financial institutions in providing fair credit to millions of underserved workers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRequestDemo}
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2"
            >
              Request API Demo <ArrowRight size={20} />
            </button>
            <button
              onClick={() => onNavigate('privacy')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all"
            >
              View Security Details
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Leading Institutions
            </h2>
            <p className="text-gray-600">
              CrediFlow partners with progressive lenders who believe in financial inclusion
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Building2 className="text-blue-600" size={24} />
                </div>
                <div className="text-lg font-bold text-gray-900">NBFCs</div>
              </div>
              <p className="text-gray-600 text-sm">
                Non-banking financial companies offering microloans and BNPL solutions
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center">
                  <Building2 className="text-violet-600" size={24} />
                </div>
                <div className="text-lg font-bold text-gray-900">Digital Lenders</div>
              </div>
              <p className="text-gray-600 text-sm">
                Fintech companies providing instant credit and flexible repayment options
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

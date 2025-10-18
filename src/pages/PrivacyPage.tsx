import Navigation from '../components/Navigation';
import { Shield, Lock, Eye, Trash2, CheckCircle, Key, FileText } from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (page: 'landing' | 'dashboard' | 'how' | 'privacy' | 'lenders') => void;
}

export default function PrivacyPage({ onNavigate }: PrivacyPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="privacy" onNavigate={onNavigate} />

      <section className="bg-gradient-to-br from-blue-50 via-violet-50 to-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl mb-6">
            <Shield className="text-white" size={32} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Your Privacy is{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              Non-Negotiable
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Data is 100% user-consented, read-only, encrypted, and can be deleted anytime
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-8">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Lock className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bank-Grade Encryption</h3>
              <p className="text-gray-700">
                All data is encrypted end-to-end using 256-bit AES encryption, the same standard used by banks worldwide.
              </p>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-violet-100 border border-violet-200 rounded-2xl p-8">
              <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
                <Eye className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Read-Only Access</h3>
              <p className="text-gray-700">
                We can only view your financial data. We cannot initiate transactions or move money from your accounts.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-8">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">User Consent Required</h3>
              <p className="text-gray-700">
                Every data access requires your explicit consent through RBI Account Aggregator framework. You control what we see.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-2xl p-8">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-4">
                <Trash2 className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Delete Anytime</h3>
              <p className="text-gray-700">
                You can revoke access and delete all your data instantly with one click. No questions asked, no delays.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Powered by RBI Account Aggregator
            </h2>
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl flex items-center justify-center">
                    <Key className="text-white" size={28} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    What is RBI Account Aggregator?
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Reserve Bank of India's Account Aggregator framework is a secure, consent-based system that allows you to share financial data across institutions. It's regulated, audited, and designed to give you complete control over your financial information.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                      <span className="text-gray-700">RBI-regulated and licensed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                      <span className="text-gray-700">No data storage by intermediaries</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Consent valid only for specified duration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Revocable at any time</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What Data We Collect
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <FileText className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Transaction History</h4>
                    <p className="text-gray-600">
                      UPI payments, wallet transactions, and platform earnings to understand your income patterns and consistency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <FileText className="text-violet-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Spending Categories</h4>
                    <p className="text-gray-600">
                      Categorized expenses to analyze your needs vs. wants ratio and provide personalized financial advice.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <FileText className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Account Balance Trends</h4>
                    <p className="text-gray-600">
                      Historical balance information to assess financial stability and cash flow management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">What We DON'T Do</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">✗</span>
                </div>
                <span>We never sell your data to third parties</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">✗</span>
                </div>
                <span>We never access your data without consent</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">✗</span>
                </div>
                <span>We never initiate transactions from your accounts</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">✗</span>
                </div>
                <span>We never share your password or credentials</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Security Measures</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">256-bit</div>
              <div className="text-gray-600">AES Encryption</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-violet-600 mb-2">ISO 27001</div>
              <div className="text-gray-600">Certified Systems</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Security Monitoring</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Navigation from '../components/Navigation';
import { Link2, Brain, TrendingUp, CreditCard, Shield, Zap, ArrowRight } from 'lucide-react';

interface HowItWorksPageProps {
  onNavigate: (page: 'landing' | 'dashboard' | 'how' | 'privacy' | 'lenders') => void;
}

export default function HowItWorksPage({ onNavigate }: HowItWorksPageProps) {
  const steps = [
    {
      number: 1,
      icon: Link2,
      title: 'Connect UPI / Earnings Data',
      description: 'Securely link your UPI account, digital wallets, or platform earnings using RBI Account Aggregator APIs. Your data is read-only and encrypted.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      number: 2,
      icon: Brain,
      title: 'AI Analyzes Patterns',
      description: 'Our agentic AI analyzes your income consistency, spending behavior, and payment patterns to understand your financial health.',
      color: 'from-violet-500 to-violet-600',
      bgColor: 'bg-violet-50',
      borderColor: 'border-violet-200',
    },
    {
      number: 3,
      icon: TrendingUp,
      title: 'Get Dynamic Credit Score',
      description: 'Receive your personalized credit score (300-1000) that updates weekly based on your latest activity. Watch it improve in real-time.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      number: 4,
      icon: CreditCard,
      title: 'Receive Smart Loan Options',
      description: 'Get matched with microloans, BNPL options, and savings plans tailored to your profile. Apply directly through the platform.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="how" onNavigate={onNavigate} />

      <section className="bg-gradient-to-br from-blue-50 via-violet-50 to-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            How CrediFlow{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              Actually Flows
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed italic">
            "Building Credit, Empowering Hustle"
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden sm:block absolute left-10 top-24 w-0.5 h-20 bg-gradient-to-b from-gray-300 to-transparent"></div>
                )}
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                      <step.icon className="text-white" size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className={`${step.bgColor} ${step.borderColor} border rounded-2xl p-6 sm:p-8`}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-sm font-bold text-gray-400`}>STEP {step.number}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Powered by Advanced Technology
            </h2>
            <p className="text-lg text-gray-600">
              Built on secure, regulated infrastructure
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <Shield className="text-blue-600 mb-3" size={28} />
              <h3 className="text-lg font-bold text-gray-900 mb-2">RBI Account Aggregator</h3>
              <p className="text-gray-600 text-sm">
                Regulated framework for secure financial data access with user consent
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <Brain className="text-violet-600 mb-3" size={28} />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Agentic AI Engine</h3>
              <p className="text-gray-600 text-sm">
                Machine learning models trained on gig economy income patterns
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <Zap className="text-green-600 mb-3" size={28} />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Real-time Processing</h3>
              <p className="text-gray-600 text-sm">
                Instant analysis and weekly score updates based on latest data
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-violet-600 rounded-3xl p-8 sm:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                  See it in action
                </h2>
                <p className="text-blue-100 text-lg">
                  Try our interactive demo to see how Workers can transform your access to credit
                </p>
              </div>
              <button
                onClick={() => onNavigate('dashboard')}
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center gap-2 whitespace-nowrap"
              >
                Try Demo <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                Is my data safe?
              </summary>
              <p className="mt-3 text-gray-600">
                Absolutely. We use RBI-regulated Account Aggregator APIs with bank-grade encryption. Your data is read-only, never shared without consent, and can be deleted anytime.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                How is this different from traditional credit scores?
              </summary>
              <p className="mt-3 text-gray-600">
                Traditional credit scores require formal employment and credit history. Workers analyzes your actual gig income and spending patterns, updating weekly to reflect your current financial health.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                What platforms do you support?
              </summary>
              <p className="mt-3 text-gray-600">
                We support UPI payments, digital wallets, and earnings from platforms like Zomato, Swiggy, Uber, Ola, Urban Company, freelance marketplaces, and more.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                How quickly can I get a loan?
              </summary>
              <p className="mt-3 text-gray-600">
                Once your credit score is generated, you can apply for microloans immediately. Approval typically takes 24-48 hours depending on the lender.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}

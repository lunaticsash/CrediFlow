import Navigation from '../components/Navigation';
import { TrendingUp, TrendingDown, Download, IndianRupee, AlertCircle, CheckCircle, Sparkles } from 'lucide-react';

interface DashboardPageProps {
  onNavigate: (page: 'landing' | 'dashboard' | 'how' | 'privacy' | 'lenders') => void;
}

export default function DashboardPage({ onNavigate }: DashboardPageProps) {
  const handleGenerateResume = () => {
    alert('In production, this would generate a PDF credit resume with your verified income and credit score data.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage="dashboard" onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Welcome back, Raj Singh</h1>
            <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Zomato Delivery Partner
            </div>
          </div>
          <p className="text-gray-600">Here's your financial overview</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-medium opacity-90">Dynamic Credit Score</h2>
                <div className="flex items-center gap-1 text-xs bg-white/20 px-2 py-1 rounded-full">
                  <TrendingUp size={12} />
                  <span>+12</span>
                </div>
              </div>
              <div className="text-5xl font-bold mb-2">520</div>
              <p className="text-sm opacity-90 mb-4">Updated weekly based on your activity</p>

              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-xs opacity-75 mb-2">Score Range</div>
                <div className="relative h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="absolute left-0 top-0 h-full bg-white rounded-full" style={{ width: '52%' }}></div>
                </div>
                <div className="flex justify-between text-xs mt-2 opacity-75">
                  <span>300</span>
                  <span>1000</span>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-violet-600" size={24} />
                <h3 className="font-bold text-gray-900">AI Insights</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Your score increased by 12 points this week due to consistent income and reduced discretionary spending.
              </p>
              <div className="text-xs text-gray-500">
                Next update: 3 days
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Weekly Income Trend</h3>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {[
                  { day: 'Mon', amount: 1200, height: 60 },
                  { day: 'Tue', amount: 1400, height: 70 },
                  { day: 'Wed', amount: 1100, height: 55 },
                  { day: 'Thu', amount: 1500, height: 75 },
                  { day: 'Fri', amount: 1300, height: 65 },
                  { day: 'Sat', amount: 1600, height: 80 },
                  { day: 'Sun', amount: 1400, height: 70 },
                ].map((bar) => (
                  <div key={bar.day} className="flex flex-col items-center">
                    <div className="w-full bg-gray-100 rounded-lg h-32 flex items-end justify-center relative group">
                      <div
                        className="w-full bg-gradient-to-t from-blue-600 to-violet-600 rounded-lg transition-all hover:opacity-80"
                        style={{ height: `${bar.height}%` }}
                      ></div>
                      <div className="absolute -top-8 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        ₹{bar.amount}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">{bar.day}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <div className="text-sm text-gray-500">Total This Week</div>
                  <div className="text-2xl font-bold text-gray-900">₹8,500</div>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <TrendingUp size={20} />
                  <span className="font-semibold">+8%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Spending Breakdown</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Needs (Food, Rent, Transport)</span>
                    <span className="font-semibold text-gray-900">72%</span>
                  </div>
                  <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Wants (Entertainment, Dining)</span>
                    <span className="font-semibold text-gray-900">28%</span>
                  </div>
                  <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-violet-500 to-violet-600 rounded-full" style={{ width: '28%' }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-start gap-2">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                <p className="text-sm text-green-800">
                  Great job! Your spending ratio is healthy and improving your credit score.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Personalized Recommendations</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <IndianRupee className="text-green-600" size={20} />
                </div>
                <h3 className="font-bold text-gray-900">Microloan Ready</h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                You're eligible for a microloan up to ₹5,000 at 18% annual interest.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Amount</span>
                  <span className="font-semibold text-gray-900">₹5,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Interest</span>
                  <span className="font-semibold text-gray-900">18% p.a.</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Tenure</span>
                  <span className="font-semibold text-gray-900">3 months</span>
                </div>
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                Apply Now
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="text-blue-600" size={20} />
                </div>
                <h3 className="font-bold text-gray-900">Boost Your Score</h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Save ₹200 per week to increase your credit score by 15-20 points.
              </p>
              <div className="bg-blue-50 rounded-xl p-3 mb-4">
                <div className="text-xs text-blue-700 mb-1">Projected Score</div>
                <div className="text-2xl font-bold text-blue-900">540</div>
                <div className="text-xs text-blue-600 mt-1">in 4 weeks</div>
              </div>
              <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Start Saving Plan
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center">
                  <AlertCircle className="text-violet-600" size={20} />
                </div>
                <h3 className="font-bold text-gray-900">Spending Alert</h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Your discretionary spending increased last week. Consider reducing by 10%.
              </p>
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center gap-2">
                  <TrendingDown className="text-red-500" size={16} />
                  <span className="text-gray-600">Entertainment: ₹800</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingDown className="text-red-500" size={16} />
                  <span className="text-gray-600">Dining Out: ₹600</span>
                </div>
              </div>
              <button className="w-full py-3 bg-violet-600 text-white rounded-xl font-semibold hover:bg-violet-700 transition-colors">
                View Tips
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Generate Your Credit Resume</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Download a verified PDF with your credit score, income analysis, and financial profile to share with lenders.
          </p>
          <button
            onClick={handleGenerateResume}
            className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
          >
            <Download size={20} />
            Generate Credit Resume (PDF)
          </button>
        </div>
      </div>
    </div>
  );
}

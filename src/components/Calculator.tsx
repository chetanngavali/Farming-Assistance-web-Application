import React, { useState } from 'react';
import { Calculator as CalcIcon, IndianRupee, TrendingUp, PieChart } from 'lucide-react';

const Calculator: React.FC = () => {
  const [activeCalculator, setActiveCalculator] = useState<'loan' | 'profit' | 'fertilizer'>('loan');

  // Loan Calculator State
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(7);
  const [loanTenure, setLoanTenure] = useState(12);

  // Profit Calculator State
  const [cropType, setCropType] = useState('rice');
  const [landSize, setLandSize] = useState(1);
  const [seedCost, setSeedCost] = useState(5000);
  const [fertilizerCost, setFertilizerCost] = useState(15000);
  const [laborCost, setLaborCost] = useState(20000);
  const [expectedYield, setExpectedYield] = useState(40);
  const [marketPrice, setMarketPrice] = useState(3200);

  // Fertilizer Calculator State
  const [soilType, setSoilType] = useState('loamy');
  const [cropArea, setCropArea] = useState(1);
  const [targetYield, setTargetYield] = useState(40);

  // Loan Calculator Logic
  const calculateEMI = () => {
    const monthlyRate = interestRate / 100 / 12;
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTenure)) / 
                (Math.pow(1 + monthlyRate, loanTenure) - 1);
    return emi;
  };

  const emi = calculateEMI();
  const totalAmount = emi * loanTenure;
  const totalInterest = totalAmount - loanAmount;

  // Profit Calculator Logic
  const totalCosts = seedCost + fertilizerCost + laborCost;
  const totalRevenue = expectedYield * marketPrice * landSize;
  const netProfit = totalRevenue - totalCosts;
  const profitMargin = (netProfit / totalRevenue) * 100;

  // Fertilizer Calculator Logic
  const getFertilizerRecommendation = () => {
    const baseNPK = { N: 120, P: 60, K: 40 }; // kg per hectare
    const multiplier = targetYield / 40; // base yield of 40 quintals
    
    return {
      nitrogen: Math.round(baseNPK.N * multiplier * cropArea),
      phosphorus: Math.round(baseNPK.P * multiplier * cropArea),
      potassium: Math.round(baseNPK.K * multiplier * cropArea)
    };
  };

  const fertilizerRecommendation = getFertilizerRecommendation();

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Farming Calculators</h2>
          <p className="text-gray-600">Financial and agricultural planning tools</p>
        </div>
        <div className="flex items-center space-x-2 text-green-600">
          <CalcIcon className="h-6 w-6" />
          <span className="font-medium">Smart Calculations</span>
        </div>
      </div>

      {/* Calculator Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-1">
        <div className="grid grid-cols-3 gap-1">
          <button
            onClick={() => setActiveCalculator('loan')}
            className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-colors ${
              activeCalculator === 'loan' 
                ? 'bg-green-600 text-white shadow-sm' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <IndianRupee className="h-4 w-4" />
            <span>Loan & EMI</span>
          </button>
          <button
            onClick={() => setActiveCalculator('profit')}
            className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-colors ${
              activeCalculator === 'profit' 
                ? 'bg-green-600 text-white shadow-sm' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <TrendingUp className="h-4 w-4" />
            <span>Profit Calculator</span>
          </button>
          <button
            onClick={() => setActiveCalculator('fertilizer')}
            className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-colors ${
              activeCalculator === 'fertilizer' 
                ? 'bg-green-600 text-white shadow-sm' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <PieChart className="h-4 w-4" />
            <span>Fertilizer Guide</span>
          </button>
        </div>
      </div>

      {/* Calculator Content */}
      {activeCalculator === 'loan' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Loan Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount (₹)
                </label>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interest Rate (% per annum)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Tenure (months)
                </label>
                <input
                  type="number"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">EMI Calculation</h3>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-green-600 mb-1">Monthly EMI</p>
                <p className="text-2xl font-bold text-green-800">₹{emi.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm text-blue-600 mb-1">Total Amount</p>
                  <p className="text-lg font-semibold text-blue-800">₹{totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-3">
                  <p className="text-sm text-orange-600 mb-1">Total Interest</p>
                  <p className="text-lg font-semibold text-orange-800">₹{totalInterest.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeCalculator === 'profit' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Crop Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Crop Type</label>
                <select
                  value={cropType}
                  onChange={(e) => setCropType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="rice">Rice</option>
                  <option value="wheat">Wheat</option>
                  <option value="tomato">Tomato</option>
                  <option value="onion">Onion</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Land Size (acres)</label>
                <input
                  type="number"
                  step="0.1"
                  value={landSize}
                  onChange={(e) => setLandSize(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Seed Cost (₹)</label>
                <input
                  type="number"
                  value={seedCost}
                  onChange={(e) => setSeedCost(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fertilizer Cost (₹)</label>
                <input
                  type="number"
                  value={fertilizerCost}
                  onChange={(e) => setFertilizerCost(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Labor Cost (₹)</label>
                <input
                  type="number"
                  value={laborCost}
                  onChange={(e) => setLaborCost(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expected Yield (quintals/acre)</label>
                <input
                  type="number"
                  value={expectedYield}
                  onChange={(e) => setExpectedYield(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Market Price (₹/quintal)</label>
                <input
                  type="number"
                  value={marketPrice}
                  onChange={(e) => setMarketPrice(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Profit Analysis</h3>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-green-600 mb-1">Net Profit</p>
                <p className="text-2xl font-bold text-green-800">₹{netProfit.toLocaleString('en-IN')}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm text-blue-600 mb-1">Total Revenue</p>
                  <p className="text-lg font-semibold text-blue-800">₹{totalRevenue.toLocaleString('en-IN')}</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-3">
                  <p className="text-sm text-orange-600 mb-1">Total Costs</p>
                  <p className="text-lg font-semibold text-orange-800">₹{totalCosts.toLocaleString('en-IN')}</p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-3">
                <p className="text-sm text-purple-600 mb-1">Profit Margin</p>
                <p className="text-lg font-semibold text-purple-800">{profitMargin.toFixed(1)}%</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeCalculator === 'fertilizer' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Field Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Soil Type</label>
                <select
                  value={soilType}
                  onChange={(e) => setSoilType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="clay">Clay</option>
                  <option value="loamy">Loamy</option>
                  <option value="sandy">Sandy</option>
                  <option value="silty">Silty</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Crop Area (hectares)</label>
                <input
                  type="number"
                  step="0.1"
                  value={cropArea}
                  onChange={(e) => setCropArea(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target Yield (quintals/hectare)</label>
                <input
                  type="number"
                  value={targetYield}
                  onChange={(e) => setTargetYield(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Fertilizer Recommendation</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-blue-600 mb-1">Nitrogen (N)</p>
                  <p className="text-xl font-bold text-blue-800">{fertilizerRecommendation.nitrogen} kg</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-green-600 mb-1">Phosphorus (P)</p>
                  <p className="text-xl font-bold text-green-800">{fertilizerRecommendation.phosphorus} kg</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-orange-600 mb-1">Potassium (K)</p>
                  <p className="text-xl font-bold text-orange-800">{fertilizerRecommendation.potassium} kg</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Application Schedule</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Basal: 50% N, 100% P, 100% K at sowing</li>
                  <li>• First top dress: 25% N at 21-30 days</li>
                  <li>• Second top dress: 25% N at 45-60 days</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculator;
import React from 'react';

const DocumentSummary = () => {
  const data = [
    { label: "Approved", count: 25, color: "bg-green-500" },
    { label: "Pending", count: 5, color: "bg-orange-500" },
    { label: "Rejected", count: 14, color: "bg-red-500" }
  ];

  const total = data.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800 underline">Document Summary</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Today</span>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Donut Chart */}
      <div className="flex justify-center mb-6">
        <div className="relative w-48 h-48">
          <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
            />
            
            {/* Segments */}
            {(() => {
              let cumulativePercentage = 0;
              return data.map((item, index) => {
                const percentage = (item.count / total) * 100;
                const circumference = 2 * Math.PI * 40;
                const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
                const strokeDashoffset = -((cumulativePercentage / 100) * circumference);
                
                cumulativePercentage += percentage;
                
                return (
                  <circle
                    key={index}
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke={item.color.replace('bg-', '').replace('-500', '')}
                    strokeWidth="8"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    className="transition-all duration-300"
                  />
                );
              });
            })()}
          </svg>
          
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">{total}</div>
              <div className="text-sm text-gray-600">Total</div>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-4 h-4 rounded ${item.color}`}></div>
              <span className="text-sm text-gray-700">{item.label}</span>
            </div>
            <span className="text-sm font-semibold text-gray-800">{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentSummary;

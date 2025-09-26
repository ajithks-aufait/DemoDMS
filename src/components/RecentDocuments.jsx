import React from 'react';

const RecentDocuments = () => {
  const documents = [
    {
      fileName: "Monthly_Report_January.pdf",
      timestamp: "Today, 9:20 AM"
    },
    {
      fileName: "Staff_Training_Materials.docx",
      timestamp: "Yesterday, 4:30 PM"
    },
    {
      fileName: "Budget_Allocation_2024.xlsx",
      timestamp: "Yesterday, 2:15 PM"
    },
    {
      fileName: "Patient_Satisfaction_Survey.pdf",
      timestamp: "2 days ago, 11:45 AM"
    },
    {
      fileName: "Equipment_Maintenance_Log.docx",
      timestamp: "3 days ago, 3:20 PM"
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Documents</h2>
      
      <div className="space-y-4">
        {documents.map((doc, index) => (
          <div key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 truncate">
                {doc.fileName}
              </p>
              <p className="text-xs text-gray-500">
                {doc.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentDocuments;

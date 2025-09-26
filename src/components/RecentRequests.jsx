import React, { useState } from 'react';

const RecentRequests = () => {
  const [activeTab, setActiveTab] = useState('all');

  const requests = [
    {
      fileName: "Annual_Report_2024.pdf",
      owner: { name: "Sarah Ahmed", avatar: "SA" },
      priority: "High",
      dueDate: "3 Jan 2024",
      status: "Approved"
    },
    {
      fileName: "Budget_Proposal_Q1.docx",
      owner: { name: "Mohammed Ali", avatar: "MA" },
      priority: "Normal",
      dueDate: "5 Jan 2024",
      status: "Rejected"
    },
    {
      fileName: "Staff_Attendance_Sheet.xlsx",
      owner: { name: "Fatima Hassan", avatar: "FH" },
      priority: "Low",
      dueDate: "7 Jan 2024",
      status: "Approved"
    },
    {
      fileName: "Medical_Equipment_List.pdf",
      owner: { name: "Omar Khalil", avatar: "OK" },
      priority: "High",
      dueDate: "10 Jan 2024",
      status: "Approved"
    },
    {
      fileName: "Patient_Records_Summary.docx",
      owner: { name: "Aisha Mohammed", avatar: "AM" },
      priority: "Normal",
      dueDate: "12 Jan 2024",
      status: "Rejected"
    },
    {
      fileName: "Training_Materials_2024.pdf",
      owner: { name: "Khalid Hassan", avatar: "KH" },
      priority: "Low",
      dueDate: "15 Jan 2024",
      status: "Approved"
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High": return "text-red-600";
      case "Normal": return "text-gray-600";
      case "Low": return "text-green-600";
      default: return "text-gray-600";
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Approved": return "bg-blue-100 text-blue-800";
      case "Rejected": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800 underline">Recent Requests</h2>
        </div>
        
        {/* Tabs */}
        <div className="flex gap-6 mb-4">
          <button
            onClick={() => setActiveTab('all')}
            className={`pb-2 text-sm font-medium border-b-2 transition-colors duration-200 ${
              activeTab === 'all' 
                ? 'border-blue-600 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            All requests
          </button>
          <button
            onClick={() => setActiveTab('rejected')}
            className={`pb-2 text-sm font-medium border-b-2 transition-colors duration-200 ${
              activeTab === 'rejected' 
                ? 'border-blue-600 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Rejected requests
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Search</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <span>Filter</span>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-800">File Name</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-800">Owner</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-800">Priority</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-800">Due Date</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-800">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {requests.map((request, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                  {request.fileName}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                      {request.owner.avatar}
                    </div>
                    <span className="text-sm text-gray-800">{request.owner.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-sm ${getPriorityColor(request.priority)}`}>
                    {request.priority}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {request.dueDate}
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(request.status)}`}>
                    {request.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Showing 1 to 6</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <span>of 12,907 items</span>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">
              &lt; Previous
            </button>
            
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-medium">
                1
              </button>
              <button className="w-8 h-8 text-gray-600 hover:text-gray-800 text-sm font-medium">
                2
              </button>
              <button className="w-8 h-8 text-gray-600 hover:text-gray-800 text-sm font-medium">
                3
              </button>
              <button className="w-8 h-8 text-gray-600 hover:text-gray-800 text-sm font-medium">
                4
              </button>
              <button className="w-8 h-8 text-gray-600 hover:text-gray-800 text-sm font-medium">
                5
              </button>
              <span className="text-gray-400">...</span>
              <button className="w-8 h-8 text-gray-600 hover:text-gray-800 text-sm font-medium">
                12,907
              </button>
            </div>
            
            <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">
              Next &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentRequests;

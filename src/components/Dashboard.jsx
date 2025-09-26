import React from 'react';
import Header from './Header';
import SummaryCards from './SummaryCards';
import DocumentsUnderApproval from './DocumentsUnderApproval';
import DocumentSummary from './DocumentSummary';
import RecentDocuments from './RecentDocuments';
import RecentRequests from './RecentRequests';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="p-6 space-y-6">
        {/* Greeting Section */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Good morning, Ali Abdul
            </h1>
            <p className="text-gray-600 text-lg">
              Here's all of your managed documents and their details
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-200 shadow-md">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Document
          </button>
        </div>

        {/* Summary Cards */}
        <SummaryCards />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Documents Under Approval */}
          <div className="lg:col-span-2">
            <DocumentsUnderApproval />
          </div>

          {/* Right Column - Document Summary and Recent Documents */}
          <div className="space-y-6">
            <DocumentSummary />
            <RecentDocuments />
          </div>
        </div>

        {/* Bottom Section - Recent Requests */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RecentRequests />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

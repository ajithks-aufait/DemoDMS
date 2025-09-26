import React from 'react';

const DocumentsUnderApproval = () => {
  const documents = [
    {
      fileName: "Annual_Report_2024.pdf",
      owner: { name: "Sarah Ahmed", avatar: "SA" },
      priority: "High",
      dueDate: "3 Mar 2025"
    },
    {
      fileName: "Budget_Proposal_Q1.docx",
      owner: { name: "Mohammed Ali", avatar: "MA" },
      priority: "Normal",
      dueDate: "5 Mar 2025"
    },
    {
      fileName: "Staff_Attendance_Sheet.xlsx",
      owner: { name: "Fatima Hassan", avatar: "FH" },
      priority: "Low",
      dueDate: "7 Mar 2025"
    },
    {
      fileName: "Medical_Equipment_List.pdf",
      owner: { name: "Omar Khalil", avatar: "OK" },
      priority: "High",
      dueDate: "10 Mar 2025"
    },
    {
      fileName: "Patient_Records_Summary.docx",
      owner: { name: "Aisha Mohammed", avatar: "AM" },
      priority: "Normal",
      dueDate: "12 Mar 2025"
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

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 underline">Documents Under Approval</h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-800">File Name</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-800">Owner</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-800">Priority</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-800">Due Date</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-800">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {documents.map((doc, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                  {doc.fileName}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                      {doc.owner.avatar}
                    </div>
                    <span className="text-sm text-gray-800">{doc.owner.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-sm ${getPriorityColor(doc.priority)}`}>
                    {doc.priority}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {doc.dueDate}
                </td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200">
                    Review for action
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentsUnderApproval;

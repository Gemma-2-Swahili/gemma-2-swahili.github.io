import React, { useState } from 'react';

const TechnicalReportsPage = () => {
  // List of reports with titles and corresponding PDF file paths.
  const reports = [
    { 
      title: "Gemma2 2b Swahili Instruct", 
      file: "/technical-reports/Gemma2 2b Swahili Instruct.pdf" 
    },
    { 
      title: "Gemma2 9b Swahili Instruct", 
      file: "/technical-reports/Gemma2 9b Swahili Instruct.pdf" 
    },
    { 
      title: "Gemma2 27b Swahili Instruct", 
      file: "/technical-reports/Gemma2 27b Swahili Instruct.pdf" 
    },
    { 
      title: "Gemma2 2b Swahili Preview", 
      file: "/technical-reports/Gemma2 2b Swahili Preview.pdf" 
    },
    { 
      title: "Gemma2 Swahili Models Benchmarking Report", 
      file: "/technical-reports/Gemma2 Swahili Models Benchmarking Report.pdf" 
    }
  ];

  // State to track which report (if any) is selected for viewing.
  const [selectedReport, setSelectedReport] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-medium mb-8 text-center">Technical Reports</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reports.map((report) => (
            <div
              key={report.title}
              className="bg-white/5 rounded-lg p-6 cursor-pointer hover:bg-white/10 transition-colors"
              onClick={() => setSelectedReport(report)}
            >
              <h2 className="text-xl font-medium mb-2">{report.title}</h2>
              <p className="text-gray-400">Click to view report</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay for Viewing PDF */}
      {selectedReport && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl h-screen p-4 overflow-y-auto">
            <button
              onClick={() => setSelectedReport(null)}
              className="absolute top-4 right-8 z-10 bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200"
            >
              Close
            </button>
            <iframe
              src={selectedReport.file}
              className="w-full h-full rounded-lg shadow-lg"
              frameBorder="0"
              title={selectedReport.title}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnicalReportsPage;


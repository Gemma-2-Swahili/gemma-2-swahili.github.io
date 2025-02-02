import React, { useState } from 'react';

const TechnicalReportsPage = () => {
  // List of reports with titles and corresponding PDF file paths.
  const reports = [
    { 
      title: "Gemma2 2b Swahili Instruct", 
      file: "/technical-reports/Gemma2_2b_Swahili_Instruct.pdf" 
    },
    { 
      title: "Gemma2 9b Swahili Instruct", 
      file: "/technical-reports/Gemma2_9b_Swahili_Instruct.pdf" 
    },
    { 
      title: "Gemma2 27b Swahili Instruct", 
      file: "/technical-reports/Gemma2_27b_Swahili_Instruct.pdf" 
    },
    { 
      title: "Gemma2 2b Swahili Preview", 
      file: "/technical-reports/Gemma2_2b_Swahili_Preview.pdf" 
    },
    { 
      title: "Gemma2 Swahili Models Benchmarking Report", 
      file: "/technical-reports/Gemma2_Swahili_Models_Benchmarking_Report.pdf" 
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
        
        {selectedReport && (
          <div className="mt-12">
            <h2 className="text-2xl font-medium mb-4 text-center">{selectedReport.title}</h2>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={selectedReport.file}
                className="w-full h-[800px]"
                frameBorder="0"
                title={selectedReport.title}
              ></iframe>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => setSelectedReport(null)}
                className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechnicalReportsPage;


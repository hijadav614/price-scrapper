import React, { useState } from 'react';
import { Target, FileText, Database, RefreshCw } from 'lucide-react';

const stepsData = [
  {
    icon: <Target className="h-6 w-6 text-white" />,
    title: 'Select Your Target',
    description: 'Enter the URL of the website you want to scrape data from.'
  },
  {
    icon: <FileText className="h-6 w-6 text-white" />,
    title: 'Choose Elements',
    description: 'Point and click to select the specific elements containing the data you need.'
  },
  {
    icon: <Database className="h-6 w-6 text-white" />,
    title: 'Extract & Process',
    description: 'Extract your data and apply transformations to clean and structure it.'
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-white" />,
    title: 'Export & Automate',
    description: 'Download your data or set up automatic scraping schedules for fresh data.'
  }
];

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-indigo-100 px-4 py-2 rounded-full text-indigo-700 font-medium text-sm mb-4">
            <span>Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How NoCodeScraper Works
          </h2>
          <p className="text-lg text-gray-600">
            Get from raw websites to structured data in just a few clicks. Our intuitive process makes web scraping accessible to everyone.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="bg-white p-1 rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {activeStep === 0 && (
                <div className="p-6 animate-fadeIn">
                  <div className="bg-gray-800 h-8 rounded-lg flex items-center px-4 gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="h-12 bg-gray-100 rounded-lg mb-6 flex items-center px-4">
                    <div className="h-4 bg-indigo-500 rounded w-1/3"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-8 bg-gray-200 rounded-lg w-full"></div>
                    <div className="h-8 bg-gray-200 rounded-lg w-full"></div>
                    <div className="h-8 bg-gray-200 rounded-lg w-2/3"></div>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <div className="h-10 w-24 bg-indigo-500 rounded-lg"></div>
                  </div>
                </div>
              )}
              
              {activeStep === 1 && (
                <div className="p-6 animate-fadeIn">
                  <div className="bg-gray-800 h-8 rounded-lg flex items-center px-4 gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 mb-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-20 bg-gray-100 rounded-lg p-2 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-8 w-8 bg-indigo-500 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                      <div className="h-20 bg-gray-100 rounded-lg p-2"></div>
                      <div className="h-20 bg-gray-100 rounded-lg p-2"></div>
                      <div className="h-20 bg-gray-100 rounded-lg p-2"></div>
                      <div className="h-20 bg-gray-100 rounded-lg p-2"></div>
                      <div className="h-20 bg-gray-100 rounded-lg p-2"></div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="h-10 w-24 bg-gray-300 rounded-lg"></div>
                    <div className="h-10 w-24 bg-indigo-500 rounded-lg"></div>
                  </div>
                </div>
              )}
              
              {activeStep === 2 && (
                <div className="p-6 animate-fadeIn">
                  <div className="bg-gray-800 h-8 rounded-lg flex items-center px-4 gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="space-y-3">
                      <div className="h-6 bg-gray-200 rounded-lg w-2/3"></div>
                      <div className="h-20 bg-gray-100 rounded-lg p-3">
                        <div className="space-y-2">
                          <div className="h-3 bg-gray-300 rounded w-full"></div>
                          <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                          <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-6 bg-gray-200 rounded-lg w-2/3"></div>
                      <div className="h-20 bg-indigo-100 rounded-lg p-3 border border-indigo-200">
                        <div className="space-y-2">
                          <div className="h-3 bg-indigo-200 rounded w-full"></div>
                          <div className="h-3 bg-indigo-200 rounded w-3/4"></div>
                          <div className="h-3 bg-indigo-200 rounded w-5/6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="h-10 w-24 bg-gray-300 rounded-lg"></div>
                    <div className="h-10 w-24 bg-indigo-500 rounded-lg"></div>
                  </div>
                </div>
              )}
              
              {activeStep === 3 && (
                <div className="p-6 animate-fadeIn">
                  <div className="bg-gray-800 h-8 rounded-lg flex items-center px-4 gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="mb-6 space-y-4">
                    <div className="flex justify-between items-center bg-gray-100 rounded-lg p-3">
                      <div className="flex items-center">
                        <div className="h-8 w-8 bg-indigo-500 rounded-lg mr-3"></div>
                        <div className="h-4 bg-gray-400 rounded w-20"></div>
                      </div>
                      <div className="h-8 w-24 bg-indigo-500 rounded-lg"></div>
                    </div>
                    <div className="flex justify-between items-center bg-gray-100 rounded-lg p-3">
                      <div className="flex items-center">
                        <div className="h-8 w-8 bg-green-500 rounded-lg mr-3"></div>
                        <div className="h-4 bg-gray-400 rounded w-20"></div>
                      </div>
                      <div className="h-8 w-24 bg-green-500 rounded-lg"></div>
                    </div>
                    <div className="flex justify-between items-center bg-gray-100 rounded-lg p-3">
                      <div className="flex items-center">
                        <div className="h-8 w-8 bg-yellow-500 rounded-lg mr-3"></div>
                        <div className="h-4 bg-gray-400 rounded w-20"></div>
                      </div>
                      <div className="h-8 w-24 bg-yellow-500 rounded-lg"></div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="h-10 w-24 bg-gray-300 rounded-lg"></div>
                    <div className="h-10 w-32 bg-green-500 rounded-lg"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="space-y-8">
              {stepsData.map((step, index) => (
                <div 
                  key={index}
                  className={`flex gap-4 p-1 cursor-pointer transition-all duration-300 ${
                    activeStep === index ? 'scale-105' : 'opacity-80 hover:opacity-100'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    activeStep === index ? 'bg-indigo-600' : 'bg-gray-400'
                  }`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 flex justify-center lg:justify-start">
              <button 
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-medium shadow-lg shadow-indigo-200"
                onClick={() => setActiveStep((activeStep + 1) % stepsData.length)}
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
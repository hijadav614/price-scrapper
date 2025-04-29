import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white z-0"></div>
      <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-indigo-100 rounded-tl-[200px] -z-10 opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center bg-indigo-100 px-4 py-2 rounded-full text-indigo-700 font-medium text-sm mb-2">
              <Globe size={16} className="mr-2" />
              <span>Web Scraping Made Simple</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Extract Web Data <span className="text-indigo-600">Without Writing Code</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg">
              NoCodeScraper lets you gather data from any website with a simple point-and-click interface. No programming experience required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#cta" 
                className="px-8 py-3.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-medium text-center shadow-lg shadow-indigo-200"
              >
                Start Scraping for Free
              </a>
              <a 
                href="#how-it-works" 
                className="px-8 py-3.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-medium flex items-center justify-center gap-2"
              >
                How It Works <ArrowRight size={16} />
              </a>
            </div>
            
            <div className="flex items-center gap-4 text-gray-600 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-indigo-${i * 100} flex items-center justify-center text-white font-medium`}>
                    {i}
                  </div>
                ))}
              </div>
              <p>Join 1,000+ users already scraping data</p>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 w-full max-w-lg mx-auto">
              <div className="bg-gray-800 h-8 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="text-gray-400 text-xs ml-2">NoCodeScraper</div>
              </div>
              
              <div className="p-4 bg-gray-50">
                <div className="animate-pulse space-y-4">
                  <div className="h-12 bg-white rounded-lg border border-gray-200 flex items-center px-4">
                    <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                      <div className="h-8 w-8 bg-indigo-200 rounded-full"></div>
                    </div>
                    <div className="h-24 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                      <div className="h-8 w-8 bg-indigo-300 rounded-full"></div>
                    </div>
                    <div className="h-24 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                      <div className="h-8 w-8 bg-indigo-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="h-48 bg-white rounded-lg border border-gray-200 p-4 space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements for visual interest */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-yellow-300 rounded-full opacity-50"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-indigo-400 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
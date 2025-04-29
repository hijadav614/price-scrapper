import React from 'react';
import { MousePointer, FileJson, Clock, Cloud, ShieldCheck, BarChart3 } from 'lucide-react';

const featuresData = [
  {
    icon: <MousePointer className="h-6 w-6 text-indigo-600" />,
    title: 'Point & Click Interface',
    description: 'Simply point to elements on a webpage and select what data you want to extract. No coding skills needed.'
  },
  {
    icon: <FileJson className="h-6 w-6 text-indigo-600" />,
    title: 'Multiple Export Formats',
    description: 'Download your data in CSV, JSON, Excel, or API format depending on your needs.'
  },
  {
    icon: <Clock className="h-6 w-6 text-indigo-600" />,
    title: 'Scheduled Scraping',
    description: 'Set up recurring scrapes to keep your data up-to-date automatically on your preferred schedule.'
  },
  {
    icon: <Cloud className="h-6 w-6 text-indigo-600" />,
    title: 'Cloud-Based Solution',
    description: 'No software to install. Access and manage your scrapers from any device with an internet connection.'
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-indigo-600" />,
    title: 'Ethically Compliant',
    description: 'Built-in features to respect robots.txt, rate limiting, and other ethical web scraping practices.'
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-indigo-600" />,
    title: 'Data Transformation',
    description: 'Clean, transform, and structure your scraped data with our intuitive data processing tools.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-indigo-100 px-4 py-2 rounded-full text-indigo-700 font-medium text-sm mb-4">
            <span>Why Choose NoCodeScraper</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features, No Coding Required
          </h2>
          <p className="text-lg text-gray-600">
            Our platform provides all the tools you need to extract, transform, and utilize web data without writing a single line of code.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 opacity-30"></div>
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Advanced Data Extraction Made Simple
              </h3>
              <p className="text-indigo-100 mb-6">
                Handle complex scraping tasks like pagination, authentication, and dynamic content with our powerful but easy-to-use interface.
              </p>
              <a 
                href="#cta" 
                className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-300 font-medium"
              >
                Try It For Free
              </a>
            </div>
            <div className="md:w-2/5">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="space-y-4">
                  <div className="h-4 bg-white/20 rounded w-3/4"></div>
                  <div className="h-4 bg-white/20 rounded w-1/2"></div>
                  <div className="h-4 bg-white/20 rounded w-5/6"></div>
                  <div className="h-4 bg-white/20 rounded w-2/3"></div>
                  <div className="h-4 bg-white/20 rounded w-3/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
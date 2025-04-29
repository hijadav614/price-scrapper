import React, { useState } from 'react';

const CTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <section id="cta" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute left-0 top-0 w-full h-full opacity-50 z-0">
        <div className="absolute -left-20 -top-20 w-64 h-64 bg-indigo-100 rounded-full opacity-70"></div>
        <div className="absolute right-10 bottom-10 w-48 h-48 bg-yellow-100 rounded-full opacity-70"></div>
        <div className="absolute right-1/4 top-1/3 w-32 h-32 bg-green-100 rounded-full opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl overflow-hidden shadow-xl">
          <div className="px-6 py-16 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Scraping Without Code?
            </h2>
            <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
              Join thousands of users who are already extracting web data with ease. 
              Try NoCodeScraper for free today.
            </p>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white flex-1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-white text-indigo-700 rounded-lg hover:bg-indigo-50 transition-colors duration-300 font-medium whitespace-nowrap shadow-lg"
                  >
                    Get Started Free
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
                <div className="text-white text-lg font-medium mb-2">Thank you for your interest!</div>
                <p className="text-indigo-100">
                  We've sent an email to <span className="font-medium">{email}</span> with instructions to get started. Check your inbox!
                </p>
              </div>
            )}
            
            <div className="mt-8 text-indigo-100 text-sm">
              No credit card required. Free plan includes 100 scrapes/month.
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-indigo-600 text-2xl font-bold">1K+</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Active Users</h3>
            <p className="text-gray-600">Join our growing community of data scrapers.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-indigo-600 text-2xl font-bold">5M+</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Pages Scraped</h3>
            <p className="text-gray-600">Our users extract data from millions of webpages.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-indigo-600 text-2xl font-bold">99%</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Success Rate</h3>
            <p className="text-gray-600">Our scrapers deliver accurate data reliably.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: 'What is NoCodeScraper?',
    answer: 'NoCodeScraper is a web-based platform that allows you to extract data from websites without writing any code. You can use our visual interface to select the elements you want to scrape, and our system will automatically extract the data for you.'
  },
  {
    question: 'Do I need programming experience to use NoCodeScraper?',
    answer: 'No, absolutely not! NoCodeScraper was built specifically for non-technical users. Our intuitive point-and-click interface makes it easy for anyone to extract data from websites without writing a single line of code.'
  },
  {
    question: 'Is web scraping legal?',
    answer: 'Web scraping itself is legal, but how you use it matters. NoCodeScraper is designed to help you scrape publicly available data ethically. We encourage users to respect website terms of service, robots.txt files, and not overload servers with too many requests. Always ensure you have the right to use the data you extract.'
  },
  {
    question: 'What file formats can I export my data to?',
    answer: 'NoCodeScraper supports exporting your scraped data in multiple formats including CSV, JSON, Excel (XLSX), and API format. This gives you flexibility to use your data in various applications and systems.'
  },
  {
    question: 'Can I schedule automatic scraping?',
    answer: 'Yes! With our Pro and Business plans, you can set up scheduled scraping to automatically extract data on your preferred schedule (hourly, daily, weekly, etc.). This keeps your data fresh without manual intervention.'
  },
  {
    question: 'Can NoCodeScraper handle websites that require login?',
    answer: 'Yes, our platform can handle websites that require authentication. You can set up login credentials in a secure way, and our scrapers will handle the authentication process before extracting data.'
  },
  {
    question: 'What if the website structure changes?',
    answer: 'Website changes are a common challenge in web scraping. When a website structure changes, your scraper might need adjustments. We provide monitoring tools that alert you when a scraper stops working correctly, and our intuitive interface makes it easy to update your scrapers as needed.'
  },
  {
    question: 'Is there a limit to how much data I can scrape?',
    answer: 'Yes, we have usage limits based on your subscription plan. The Free plan allows 100 scrapes per month, the Pro plan allows 1,000 scrapes per month, and the Business plan allows 10,000 scrapes per month. If you need more, please contact our sales team for a custom solution.'
  }
];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(i => i !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-indigo-100 px-4 py-2 rounded-full text-indigo-700 font-medium text-sm mb-4">
            <span>Questions & Answers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about NoCodeScraper and web scraping.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${
                  openItems.includes(index) ? 'shadow-md' : 'shadow-sm'
                }`}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between focus:outline-none"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openItems.includes(index)}
                >
                  <span className="text-lg font-semibold text-gray-900 text-left">{item.question}</span>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                <div 
                  className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                    openItems.includes(index) ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-4">Still have questions?</p>
          <a 
            href="#cta" 
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-medium"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
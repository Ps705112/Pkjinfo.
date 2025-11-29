import React, { useEffect } from 'react';
import { Article } from '../types';
import { ArrowLeft, ExternalLink, Calendar, User, Share2, Printer, CheckCircle, Info } from 'lucide-react';
import AdPlaceholder from './AdPlaceholder';

interface ArticleDetailProps {
  article: Article;
  onBack: () => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onBack }) => {
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Navigation Bar for Page */}
      <div className="flex items-center justify-between mb-6 sticky top-20 z-30 bg-gray-50/95 backdrop-blur-sm py-2">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-orange-600 font-medium px-3 py-2 rounded-lg hover:bg-white hover:shadow-sm transition-all"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back
        </button>
        <div className="flex gap-2">
            <button className="p-2 text-gray-400 hover:text-gray-700 hover:bg-white rounded-full transition-colors" title="Share">
                <Share2 size={18} />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-700 hover:bg-white rounded-full transition-colors" title="Print">
                <Printer size={18} />
            </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        
        {/* Article Header */}
        <div className="p-6 sm:p-10 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 uppercase tracking-wide">
              {article.category}
            </span>
            <span className="flex items-center text-gray-400 text-xs font-medium">
              <Calendar size={12} className="mr-1" /> {article.date}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-3">
            {article.title}
          </h1>
          
          {article.hindiTitle && (
            <h2 className="text-xl sm:text-2xl text-gray-600 font-serif mb-6">
              {article.hindiTitle}
            </h2>
          )}

          {article.author && (
            <div className="flex items-center gap-2 text-sm text-gray-500 border-t border-gray-100 pt-4 mt-4">
                <div className="bg-gray-200 p-1.5 rounded-full">
                    <User size={14} className="text-gray-500" />
                </div>
                <span>By <span className="font-semibold text-gray-700">{article.author}</span></span>
            </div>
          )}
        </div>

        {/* Featured Image for Non-Schemes */}
        {article.imageUrl && !article.isScheme && (
            <div className="w-full h-64 sm:h-96 bg-gray-100">
                <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
            </div>
        )}

        {/* Ad Placement: Top of Content */}
        <div className="px-6 sm:px-10 mt-6">
           <AdPlaceholder type="banner" />
        </div>

        {/* Main Content Area */}
        <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Left/Top Column: Main Text */}
            <div className="lg:col-span-2 space-y-6">
                {/* Summary Box */}
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                    <p className="text-orange-900 font-medium italic">
                        "{article.summary}"
                    </p>
                </div>

                {/* Body Content */}
                <div className="prose prose-orange max-w-none text-gray-700 leading-relaxed">
                    {/* If it's a scheme, use description, otherwise use content */}
                    {article.content ? (
                         article.content.split('\n').map((paragraph, idx) => (
                             <React.Fragment key={idx}>
                               <p className="mb-4">{paragraph}</p>
                               {/* Insert Ad after 2nd paragraph */}
                               {idx === 1 && <AdPlaceholder type="in-feed" className="my-8" />}
                             </React.Fragment>
                         ))
                    ) : (
                        <p>{article.summary}</p> // Fallback if no content
                    )}
                </div>

                {/* Scheme Specific: Application Process */}
                {article.isScheme && article.applicationProcess && (
                    <div className="mt-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Info className="text-blue-600" />
                            Application Process
                        </h3>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-blue-900">
                            {article.applicationProcess}
                        </div>
                    </div>
                )}
            </div>

            {/* Right/Bottom Column: Sidebar (Eligibility/Benefits for Schemes) */}
            <div className="lg:col-span-1 space-y-8">
                
                {article.isScheme ? (
                    <>
                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                            <h4 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Eligibility</h4>
                            <ul className="space-y-3">
                                {article.eligibility?.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Sidebar Ad */}
                        <AdPlaceholder type="sidebar" />

                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                            <h4 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Benefits</h4>
                            <ul className="space-y-3">
                                {article.benefits?.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                                        <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {article.officialLink && (
                            <a 
                                href={article.officialLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-3.5 px-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-center rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                            >
                                Visit Official Website
                                <ExternalLink size={18} />
                            </a>
                        )}
                    </>
                ) : (
                    // Sidebar for non-schemes
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                         <h4 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Trending Now</h4>
                         <p className="text-sm text-gray-500 mb-4">Stay updated with the latest government announcements and technology trends.</p>
                         <AdPlaceholder type="sidebar" className="h-[400px] w-full" />
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
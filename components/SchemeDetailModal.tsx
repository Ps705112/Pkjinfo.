import React from 'react';
import { Article } from '../types';
import { X, ExternalLink, FileText, Users, Gift, ScrollText } from 'lucide-react';

interface SchemeDetailModalProps {
  scheme: Article | null;
  onClose: () => void;
}

const SchemeDetailModal: React.FC<SchemeDetailModalProps> = ({ scheme, onClose }) => {
  if (!scheme) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-gray-100 bg-gray-50/50">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 uppercase tracking-wide">
                {scheme.category}
              </span>
              <span className="text-xs text-gray-500">ID: {scheme.id}</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-1">{scheme.title}</h2>
            {scheme.hindiTitle && (
              <h3 className="text-lg text-gray-600 font-serif">{scheme.hindiTitle}</h3>
            )}
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-8">
          
          <section>
            <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-3">
              <FileText className="text-orange-500" size={20} />
              Description
            </h4>
            <div className="text-gray-700 leading-relaxed text-sm sm:text-base whitespace-pre-line">
              {scheme.content || scheme.summary}
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            {scheme.eligibility && scheme.eligibility.length > 0 && (
              <section>
                <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-3">
                  <Users className="text-blue-500" size={20} />
                  Eligibility
                </h4>
                <ul className="space-y-2">
                  {scheme.eligibility.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-700 bg-blue-50 p-2.5 rounded-lg border border-blue-100">
                      <span className="block w-1.5 h-1.5 mt-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {scheme.benefits && scheme.benefits.length > 0 && (
              <section>
                <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-3">
                  <Gift className="text-green-500" size={20} />
                  Benefits
                </h4>
                <ul className="space-y-2">
                  {scheme.benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-700 bg-green-50 p-2.5 rounded-lg border border-green-100">
                      <span className="block w-1.5 h-1.5 mt-1.5 rounded-full bg-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {scheme.applicationProcess && (
            <section>
              <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-3">
                <ScrollText className="text-purple-500" size={20} />
                Application Process
              </h4>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-sm text-gray-700">
                {scheme.applicationProcess}
              </div>
            </section>
          )}

        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg text-gray-700 font-medium hover:bg-gray-200 transition-colors"
          >
            Close
          </button>
          {scheme.officialLink && (
            <a 
              href={scheme.officialLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-700 transition-colors flex items-center gap-2 shadow-sm"
            >
              Apply Now
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchemeDetailModal;
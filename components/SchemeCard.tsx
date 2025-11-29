import React from 'react';
import { Article } from '../types';
import { ChevronRight, Calendar, CheckCircle } from 'lucide-react';

interface SchemeCardProps {
  scheme: Article;
  onClick: (scheme: Article) => void;
}

const SchemeCard: React.FC<SchemeCardProps> = ({ scheme, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 overflow-hidden cursor-pointer flex flex-col h-full"
      onClick={() => onClick(scheme)}
    >
      <div className="p-6 flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
            {scheme.category}
          </span>
          <div className="flex items-center text-gray-400 text-xs">
            <Calendar size={12} className="mr-1" />
            {scheme.date}
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-1 leading-snug group-hover:text-orange-600 transition-colors">
          {scheme.title}
        </h3>
        {scheme.hindiTitle && (
          <p className="text-sm text-gray-600 font-medium mb-3 font-serif">
            {scheme.hindiTitle}
          </p>
        )}
        
        <p className="text-gray-500 text-sm line-clamp-3 mb-4">
          {scheme.summary}
        </p>
        
        {scheme.benefits && (
          <div className="space-y-2">
            {scheme.benefits.slice(0, 2).map((benefit, idx) => (
              <div key={idx} className="flex items-start text-xs text-gray-600">
                <CheckCircle size={14} className="mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </div>
            ))}
            {scheme.benefits.length > 2 && (
              <span className="text-xs text-gray-400 pl-6">+{scheme.benefits.length - 2} more benefits</span>
            )}
          </div>
        )}
      </div>

      <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex items-center justify-between group">
        <span className="text-sm font-medium text-orange-600 group-hover:text-orange-700">View Details</span>
        <ChevronRight size={16} className="text-orange-500 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};

export default SchemeCard;
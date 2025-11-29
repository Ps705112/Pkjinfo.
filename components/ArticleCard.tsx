import React from 'react';
import { Article } from '../types';
import { ChevronRight, Calendar, Bookmark, Newspaper, GraduationCap, Cpu, FileText, Clapperboard, Star } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  onClick: (article: Article) => void;
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Technology': return <Cpu size={14} />;
    case 'Govt Exams': return <GraduationCap size={14} />;
    case 'Current Affairs': return <Newspaper size={14} />;
    case 'Movies': return <Clapperboard size={14} />;
    default: return <FileText size={14} />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Technology': return 'bg-blue-100 text-blue-700';
    case 'Govt Exams': return 'bg-purple-100 text-purple-700';
    case 'Current Affairs': return 'bg-green-100 text-green-700';
    case 'Movies': return 'bg-pink-100 text-pink-700';
    default: return 'bg-orange-100 text-orange-800';
  }
};

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onClick }) => {
  return (
    <div 
      className="group bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-orange-200 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col h-full"
      onClick={() => onClick(article)}
    >
      {/* Image Section for Tech/News/Movies */}
      {article.imageUrl && !article.isScheme && (
        <div className="h-40 w-full overflow-hidden relative">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
          
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
             <span className={`px-2 py-1 rounded-md text-xs font-bold bg-white/90 backdrop-blur-sm shadow-sm ${getCategoryColor(article.category).replace('bg-', 'text-').split(' ')[1]}`}>
                {article.category}
             </span>
             {article.rating && (
                <span className="flex items-center gap-1 px-2 py-1 rounded-md text-xs font-bold bg-yellow-400 text-black shadow-sm">
                    <Star size={10} fill="currentColor" />
                    {article.rating}
                </span>
             )}
          </div>
        </div>
      )}

      <div className="p-5 flex-1 flex flex-col">
        {/* Header for Schemes (No Image) */}
        {(!article.imageUrl || article.isScheme) && (
           <div className="flex items-center justify-between mb-3">
             <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${getCategoryColor(article.category)}`}>
               {getCategoryIcon(article.category)}
               {article.category}
             </span>
             {article.isScheme && <Bookmark size={16} className="text-gray-300 fill-current" />}
           </div>
        )}
        
        <div className="mb-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-orange-600 transition-colors line-clamp-2">
            {article.title}
            </h3>
            
            {article.hindiTitle && (
            <p className="text-sm text-gray-500 font-medium mb-3 font-serif line-clamp-1">
                {article.hindiTitle}
            </p>
            )}
            
            <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
            {article.summary}
            </p>
        </div>

        {/* Footer Meta */}
        <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-100 text-xs text-gray-500">
            <div className="flex items-center">
                <Calendar size={12} className="mr-1.5" />
                {article.date}
            </div>
            {article.author && (
                <span className="font-medium text-gray-400">By {article.author}</span>
            )}
        </div>
      </div>

      <div className="bg-gray-50 px-5 py-3 border-t border-gray-100 flex items-center justify-between group-hover:bg-orange-50/50 transition-colors">
        <span className="text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-orange-600 transition-colors">
            {article.category === 'Movies' ? 'Read Review' : (article.isScheme ? 'Check Eligibility' : 'Read Full Article')}
        </span>
        <div className="bg-white p-1.5 rounded-full border border-gray-200 group-hover:border-orange-200 group-hover:bg-orange-600 transition-all">
            <ChevronRight size={14} className="text-gray-400 group-hover:text-white transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
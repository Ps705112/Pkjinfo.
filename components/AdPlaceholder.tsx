import React from 'react';

interface AdPlaceholderProps {
  type?: 'banner' | 'sidebar' | 'in-feed';
  className?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ type = 'banner', className = '' }) => {
  const getSize = () => {
    switch (type) {
      case 'sidebar': return 'h-[600px] w-full';
      case 'in-feed': return 'h-32 w-full';
      case 'banner': default: return 'h-24 w-full';
    }
  };

  return (
    <div className={`bg-gray-100 border border-gray-200 border-dashed rounded-lg flex flex-col items-center justify-center overflow-hidden my-6 ${getSize()} ${className}`}>
      <span className="text-gray-400 text-xs font-bold tracking-widest uppercase">Advertisement</span>
      <span className="text-gray-300 text-[10px] mt-1">Ad Space</span>
    </div>
  );
};

export default AdPlaceholder;
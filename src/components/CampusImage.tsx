import { useState } from 'react';
import { Building2 } from 'lucide-react';

interface CampusImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClass?: string;
  fallbackTitle?: string;
}

export function CampusImage({
  src,
  alt,
  className = '',
  aspectClass = 'aspect-[4/3]',
  fallbackTitle = 'Sri Krishna Arts and Science College',
}: CampusImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative w-full ${aspectClass} overflow-hidden bg-[#1A0D21] border border-[#3B1E4A] flex flex-col items-center justify-center p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Building2 className="w-8 h-8 text-[#F7B8D6]/80 mb-3" strokeWidth={1.5} />
        <p className="font-editorial text-base font-medium text-[#FAF5F8] max-w-xs">
          {fallbackTitle}
        </p>
        <p className="text-xs text-[#C8B0C2] mt-1">Kuniyamuthur Campus, Coimbatore</p>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${aspectClass} overflow-hidden bg-[#1A0D21] ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

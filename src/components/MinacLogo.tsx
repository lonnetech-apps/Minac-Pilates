import React from 'react';

interface MinacLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const MinacEmblem: React.FC<{ className?: string; size?: number }> = ({ 
  className = "w-10 h-10", 
  size = 40 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Logo MINAC"
    >
      {/* Terracotta outer crescent curve */}
      <path
        d="M 28 82 C 16 70 12 48 24 30 C 34 16 54 12 72 20 C 78 23 82 28 84 32 C 81 31 73 29 64 30 C 46 32 32 44 28 62 C 26 70 27 76 28 82 Z"
        fill="#B85B38"
      />
      {/* Olive green inner dynamic stroke */}
      <path
        d="M 52 38 C 58 35 68 36 74 42 C 78 46 80 52 79 58 C 76 68 68 76 56 80 C 60 76 64 70 65 64 C 66 57 63 50 58 46 C 55 43 53 40 52 38 Z"
        fill="#4A5645"
      />
      {/* Soft warm sand accent dot/arc */}
      <circle cx="48" cy="56" r="3" fill="#B85B38" opacity="0.6" />
    </svg>
  );
};

export const MinacFlourish: React.FC<{ className?: string }> = ({ className = "w-20 h-12" }) => {
  return (
    <svg 
      viewBox="0 0 120 70" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M 10 65 C 25 25 70 15 110 35"
        stroke="#B85B38"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M 25 68 C 38 35 75 28 115 48"
        stroke="#8B9884"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeOpacity="0.85"
      />
    </svg>
  );
};

export const MinacLogo: React.FC<MinacLogoProps> = ({ 
  className = "", 
  size = 'md',
  showText = true 
}) => {
  const iconSizes = {
    sm: 32,
    md: 42,
    lg: 52
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <MinacEmblem size={iconSizes[size]} className="shrink-0 transition-transform hover:scale-105 duration-300" />
      {showText && (
        <div className="flex flex-col">
          <span 
            className="tracking-[0.28em] font-semibold text-[#B85B38] leading-none"
            style={{ 
              fontSize: size === 'sm' ? '1.1rem' : size === 'lg' ? '1.65rem' : '1.35rem',
              fontFamily: "'Lora', Georgia, serif"
            }}
          >
            MINAC
          </span>
          <span 
            className="text-[10px] md:text-[11px] font-medium tracking-[0.08em] text-[#4A5645] mt-0.5 whitespace-nowrap"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Pilates e Fisioterapia
          </span>
        </div>
      )}
    </div>
  );
};

import React from 'react';

interface MinacLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
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
      aria-label="Emblema MINAC"
    >
      {/* Iconic Green Arch N with Orange Accents */}
      <path
        d="M 22 80 L 38 80 L 38 48 C 38 32 50 20 66 20 C 82 20 94 32 94 48 L 94 80 L 110 80 L 110 48 C 110 24 88 4 66 4 C 44 4 22 24 22 48 Z"
        fill="#236B35"
        transform="scale(0.75) translate(8, 14)"
      />
      {/* Orange C-Curve flourish */}
      <path
        d="M 68 34 C 74 38 78 46 78 54 C 78 62 74 70 68 74"
        stroke="#FF4D00"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const MinacFlourish: React.FC<{ className?: string }> = ({ className = "w-24 h-12" }) => {
  return (
    <svg 
      viewBox="0 0 120 70" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Orange curve */}
      <path
        d="M 10 65 C 28 22 72 14 112 36"
        stroke="#FF4D00"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Forest Green arch */}
      <path
        d="M 26 68 C 40 32 78 26 116 50"
        stroke="#236B35"
        strokeWidth="4"
        strokeLinecap="round"
        strokeOpacity="0.9"
      />
    </svg>
  );
};

export const MinacLogo: React.FC<MinacLogoProps> = ({ 
  className = "", 
  size = 'md',
  showSubtitle = true 
}) => {
  // Height sizing
  const heights = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24'
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg 
        viewBox="0 0 940 225" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`${heights[size]} w-auto object-contain transition-transform hover:scale-[1.02] duration-300`}
        aria-label="MINAC Pilates e Fisioterapia"
      >
        {/* Letter M (Vibrant Orange) - 2 upright pillars with central movement curve */}
        <path
          d="M 20 15 L 42 15 L 42 25 C 60 85 78 118 100 118 C 122 118 140 85 158 25 L 158 15 L 180 15 L 180 155 L 158 155 L 158 45 C 140 105 122 138 100 138 C 78 138 60 105 42 45 L 42 155 L 20 155 Z"
          fill="#FF4D00"
        />

        {/* Letter I (Vibrant Orange) - Vertical pillar */}
        <rect x="245" y="15" width="22" height="140" fill="#FF4D00" />

        {/* Letter N (Deep Forest Green) - Architectural Bridge Arch */}
        <path
          d="M 340 155 L 362 155 L 362 85 C 362 58 383 37 410 37 C 437 37 458 58 458 85 L 458 155 L 480 155 L 480 85 C 480 46 449 15 410 15 C 371 15 340 46 340 85 Z"
          fill="#236B35"
        />

        {/* Letter A (Vibrant Orange) - Clean inverted V apex */}
        <path
          d="M 550 155 L 574 155 L 608 50 C 612 38 616 35 620 35 C 624 35 628 38 632 50 L 666 155 L 690 155 L 647 30 C 639 15 631 15 620 15 C 609 15 601 15 593 30 Z"
          fill="#FF4D00"
        />

        {/* Letter C (Vibrant Orange) - Pilates C-Curve */}
        <path
          d="M 890 15 L 830 15 C 791.34 15 760 46.34 760 85 C 760 123.66 791.34 155 830 155 L 890 155 L 890 133 L 830 133 C 803.49 133 782 111.51 782 85 C 782 58.49 803.49 37 830 37 L 890 37 Z"
          fill="#FF4D00"
        />

        {/* Subtitle: PILATES E FISIOTERAPIA (Directly aligned under N, A, C) */}
        {showSubtitle && (
          <text
            x="340"
            y="208"
            fontFamily="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif"
            fontSize="28"
            fontWeight="800"
            letterSpacing="0.28em"
            textLength="550"
            lengthAdjust="spacing"
            fill="#262927"
          >
            PILATES E FISIOTERAPIA
          </text>
        )}
      </svg>
    </div>
  );
};

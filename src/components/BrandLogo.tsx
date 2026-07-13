import React from 'react';

interface BrandLogoProps {
  variant?: 'icon' | 'horizontal' | 'stacked';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function BrandLogo({ variant = 'horizontal', className = '', size = 'md' }: BrandLogoProps) {
  // Size mapping
  const sizeClasses = {
    sm: {
      box: 'h-8',
      icon: 'w-8 h-8',
      textTitle: 'text-sm',
      textSub: 'text-[7px]'
    },
    md: {
      box: 'h-10',
      icon: 'w-10 h-10',
      textTitle: 'text-lg',
      textSub: 'text-[9px]'
    },
    lg: {
      box: 'h-14',
      icon: 'w-14 h-14',
      textTitle: 'text-2xl',
      textSub: 'text-[11px]'
    },
    xl: {
      box: 'h-20',
      icon: 'w-20 h-20',
      textTitle: 'text-3xl',
      textSub: 'text-[13px]'
    }
  };

  const currentSize = sizeClasses[size];

  // SVG Logo Icon Mark
  const logoIcon = (
    <svg
      viewBox="0 0 100 100"
      className={`${currentSize.icon} shrink-0`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer compass teal ring with dynamic gaps */}
      <circle
        cx="53"
        cy="50"
        r="28"
        stroke="#00A79D"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="145 25"
        strokeDashoffset="-5"
      />
      
      {/* Inner navy concentric ring */}
      <circle
        cx="53"
        cy="50"
        r="22"
        stroke="#0B2545"
        strokeWidth="2.5"
      />

      {/* Electronic Circuit Traces on the Left */}
      {/* Middle horizontal line */}
      <path
        d="M 31 50 L 14 50"
        stroke="#0B2545"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="14" cy="50" r="3.5" fill="#0B2545" />

      {/* Top diagonal circuit line */}
      <path
        d="M 34 38 L 22 38 L 15 31"
        stroke="#0B2545"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="15" cy="31" r="3.5" fill="#00A79D" />

      {/* Bottom diagonal circuit line */}
      <path
        d="M 34 62 L 22 62 L 15 69"
        stroke="#0B2545"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="15" cy="69" r="3.5" fill="#00A79D" />

      {/* Compass Tick Marks (Triangles) */}
      {/* North */}
      <polygon points="53,24 50.5,20 55.5,20" fill="#0B2545" />
      {/* South */}
      <polygon points="53,76 50.5,80 55.5,80" fill="#0B2545" />
      {/* West */}
      <polygon points="29,50 25,47.5 25,52.5" fill="#0B2545" />

      {/* Center Stylized Child/Student Figure (Teal) */}
      {/* Head */}
      <circle cx="53" cy="45.5" r="4.5" fill="#00A79D" />
      {/* Body: Energetic curved shape looking upwards and right */}
      <path
        d="M 48 59 C 47.5 54, 50 50.5, 53 50.5 C 55 50.5, 57.5 53.5, 56.5 59 C 55 57, 51 57, 48 59 Z"
        fill="#00A79D"
      />

      {/* Compass Needle/Arrow (Golden Orange) */}
      {/* Slices through top-right quadrant, breaking out of the ring! */}
      {/* Left-side (lighter gold shade) */}
      <polygon
        points="46,54 82,18 64,36"
        fill="#F1941F"
      />
      {/* Right-side (darker gold-orange shadow for beautiful 3D relief effect) */}
      <polygon
        points="46,54 82,18 73,27"
        fill="#D67B0F"
      />
    </svg>
  );

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {logoIcon}
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {logoIcon}
        <div className="mt-3">
          <h1 className={`${currentSize.textTitle} font-display font-black text-brand-primary tracking-tight leading-none uppercase`}>
            CAREER COMPASS
          </h1>
          <p className={`${currentSize.textSub} font-display font-bold text-brand-gold tracking-[0.2em] uppercase mt-1`}>
            by B BRIGHT TECH HUB
          </p>
        </div>
      </div>
    );
  }

  // Horizontal (Default)
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {logoIcon}
      <div className="flex flex-col text-left">
        <h1 className={`${currentSize.textTitle} font-display font-black text-brand-primary tracking-tight leading-none uppercase`}>
          CAREER COMPASS
        </h1>
        <p className={`${currentSize.textSub} font-display font-bold text-brand-gold tracking-[0.2em] uppercase mt-0.5`}>
          by B BRIGHT TECH HUB
        </p>
      </div>
    </div>
  );
}

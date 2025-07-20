'use client';

import React from 'react';

// Utility for joining class names (no changes needed here)
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'accent' | 'outline';
  fullWidth?: boolean;
};

export default function Button({
  className,
  variant = 'primary',
  fullWidth,
  children,
  ...props
}: ButtonProps) {
  // --- Base Styles ---
  // A consistent foundation for all buttons.
  // Includes layout, typography, transitions, and interactive states.
  const baseStyles =
    'group relative cursor-pointer inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 font-semibold tracking-wide text-lg shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-95 disabled:cursor-not-allowed disabled:opacity-70';

  // --- Variant-Specific Styles ---
  // Defines the unique appearance and hover effects for each button type.
  const variants = {
    primary:
      'bg-brand-primary text-brand-secondary hover:shadow-2xl hover:-translate-y-1 focus-visible:ring-brand-accent/50',
    accent:
      'bg-brand-accent text-brand-secondary hover:shadow-2xl hover:-translate-y-1 focus-visible:ring-brand-accent/50',
    outline:
      'border-2 border-brand-primary bg-transparent text-brand-primary hover:bg-brand-primary hover:text-brand-secondary hover:border-transparent hover:shadow-2xl hover:-translate-y-1 focus-visible:ring-brand-primary/50',
  };

  // The ripple effect is only for solid-background buttons
  const showRippleEffect = variant !== 'outline';

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        fullWidth ? 'w-full' : '',
        className
      )}
      {...props}
    >
      {/* --- Content Span --- */}
      {/* Sits on top of the ripple effect */}
      <span className="relative z-10">{children}</span>

      {/* --- Background Ripple Effect --- */}
      {/* A circle that scales up from the center on hover for a dynamic effect.
          Only rendered for 'primary' and 'accent' variants. */}
      {showRippleEffect && (
        <span
          className="absolute inset-0 z-0 h-full w-full scale-0 rounded-full bg-brand-accent/90 transition-transform duration-500 ease-in-out group-hover:scale-150"
          aria-hidden="true"
        />
      )}
    </button>
  );
}

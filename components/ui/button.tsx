'use client';

import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = '',
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'right',
      isLoading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    // Focus ring styling conforms to WCAG AA standards
    const baseStyles =
      'inline-flex items-center justify-center font-heading font-bold rounded-3xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-olive focus-visible:ring-offset-2 disabled:opacity-40 disabled:pointer-events-none cursor-pointer';

    const variants = {
      primary: 'bg-brand-charcoal text-brand-warm-white hover:bg-brand-charcoal/90 border border-brand-charcoal',
      secondary: 'bg-brand-olive text-brand-warm-white hover:bg-brand-olive/90 border border-brand-olive',
      outline: 'border border-brand-charcoal text-brand-charcoal bg-transparent hover:bg-brand-charcoal hover:text-brand-warm-white',
      ghost: 'text-brand-charcoal hover:bg-brand-charcoal/5 bg-transparent',
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs uppercase tracking-wider',
      md: 'px-6 py-3 text-sm uppercase tracking-wider',
      lg: 'px-8 py-4 text-base uppercase tracking-wider',
    };

    const isBtnDisabled = disabled || isLoading;

    return (
      <motion.button
        ref={ref}
        disabled={isBtnDisabled}
        whileHover={{ scale: isBtnDisabled ? 1 : 1.01 }}
        whileTap={{ scale: isBtnDisabled ? 1 : 0.99 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...(props as HTMLMotionProps<'button'>)}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-3 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {!isLoading && icon && iconPosition === 'left' && (
          <span className="mr-2 inline-flex items-center">{icon}</span>
        )}
        <span>{children}</span>
        {!isLoading && icon && iconPosition === 'right' && (
          <span className="ml-2 inline-flex items-center">{icon}</span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
export default Button;

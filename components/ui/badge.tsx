import * as React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'olive' | 'earth' | 'charcoal' | 'sand' | 'outline';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className = '',
  variant = 'olive',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center px-3 py-1 text-[10px] font-heading font-bold uppercase tracking-wider rounded-full transition-all duration-200';

  const variants = {
    olive: 'bg-brand-olive text-brand-warm-white',
    earth: 'bg-brand-earth text-brand-warm-white',
    charcoal: 'bg-brand-charcoal text-brand-warm-white',
    sand: 'bg-brand-sand text-brand-charcoal border border-brand-charcoal/10',
    outline: 'border border-brand-charcoal text-brand-charcoal bg-transparent',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
};

export default Badge;

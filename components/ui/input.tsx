'use client';

import * as React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    return (
      <div className="w-full space-y-2 text-left">
        {label && (
          <label htmlFor={id} className="block font-heading text-xs font-bold uppercase tracking-wider text-brand-charcoal/80">
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={`w-full rounded-3xl border border-brand-charcoal/20 bg-brand-warm-white px-5 py-3 font-body text-sm text-brand-charcoal placeholder-brand-charcoal/40 focus:border-brand-charcoal focus:ring-1 focus:ring-brand-charcoal focus:outline-none transition-all duration-200 disabled:opacity-40 disabled:pointer-events-none ${
            error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="font-body text-xs font-medium text-red-500 mt-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    return (
      <div className="w-full space-y-2 text-left">
        {label && (
          <label htmlFor={id} className="block font-heading text-xs font-bold uppercase tracking-wider text-brand-charcoal/80">
            {label}
          </label>
        )}
        <textarea
          id={id}
          ref={ref}
          className={`w-full rounded-3xl border border-brand-charcoal/20 bg-brand-warm-white px-5 py-4 font-body text-sm text-brand-charcoal placeholder-brand-charcoal/40 focus:border-brand-charcoal focus:ring-1 focus:ring-brand-charcoal focus:outline-none transition-all duration-200 disabled:opacity-40 disabled:pointer-events-none ${
            error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="font-body text-xs font-medium text-red-500 mt-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

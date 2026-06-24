'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface AccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const Accordion: React.FC<AccordionProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-brand-charcoal/10 py-6">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-olive rounded-lg p-1 group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-bold text-lg text-brand-charcoal group-hover:text-brand-charcoal/80 transition-colors duration-200">
          {question}
        </span>
        <span className="text-brand-charcoal flex-shrink-0 ml-4 p-1">
          {isOpen ? (
            <Minus className="h-5 w-5" strokeWidth={1.5} />
          ) : (
            <Plus className="h-5 w-5" strokeWidth={1.5} />
          )}
        </span>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-2 text-brand-charcoal/80 font-body leading-relaxed text-sm max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;

'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf } from 'lucide-react';
import Button from './ui/button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Productos', path: '/productos' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-charcoal/10 bg-brand-warm-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.2 }}
              className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-charcoal text-brand-warm-white"
            >
              <Leaf className="h-5 w-5" />
            </motion.div>
            <span className="font-heading text-2xl font-bold tracking-tight text-brand-charcoal">
              Oriz<span className="text-brand-olive font-medium">Pak</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className="relative py-2 font-heading text-xs font-bold uppercase tracking-wider text-brand-charcoal/70 hover:text-brand-charcoal transition-colors duration-200"
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBorder"
                      className="absolute bottom-0 left-0 h-[2px] w-full bg-brand-charcoal"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link href="/contacto">
              <Button variant="outline" size="sm">
                Contacto
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburguer Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-brand-charcoal hover:bg-brand-charcoal/5 focus:outline-none transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-t border-brand-charcoal/10 bg-brand-warm-white overflow-hidden"
          >
            <div className="space-y-1 px-4 pt-2 pb-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-2xl px-4 py-3 font-heading text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                      isActive
                        ? 'bg-brand-charcoal text-brand-warm-white'
                        : 'text-brand-charcoal/70 hover:bg-brand-charcoal/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 px-4">
                <Link href="/contacto" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" size="md" className="w-full">
                    Contacto
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

'use client';

import React from 'react';
import { useNavigation } from '../hooks/useNavigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  className?: string;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'contact', label: 'Contact' },
] as const;

export function Navigation({ className }: NavigationProps) {
  const { currentSection, isMenuOpen, navigateTo, toggleMenu, closeMenu } = useNavigation();

  return (
    <nav className={cn('fixed top-0 left-0 right-0 z-50 bg-[var(--color-background)]/60 backdrop-blur-md border-b border-[var(--color-border)]/50', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-[var(--color-primary)]',
                  currentSection === item.id
                    ? 'text-[var(--color-primary)]'
                    : 'text-[var(--color-muted-foreground)]'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-[var(--color-accent)]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={cn(
                  'block w-full text-left px-4 py-2 rounded-md transition-colors',
                  currentSection === item.id
                    ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)]'
                    : 'hover:bg-[var(--color-accent)]'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

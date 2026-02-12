'use client';

import React, { useEffect } from 'react';
import { useTimeline } from '../hooks/useTimeline';
import { useTimelineAnimation } from '../hooks/useTimelineAnimation';
import { cn } from '@/lib/utils';

interface TimelineProps {
  className?: string;
}

const defaultTimelineItems = [
  {
    id: '1',
    title: 'Software Engineer',
    date: '2023-01-01',
    description: 'Working on scalable web applications',
    category: 'work' as const,
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    date: '2022-01-01',
    description: 'Built modern web solutions',
    category: 'work' as const,
  },
  {
    id: '3',
    title: 'Computer Science Degree',
    date: '2021-06-01',
    description: 'Graduated with honors',
    category: 'education' as const,
  },
];

export function Timeline({ className }: TimelineProps) {
  const {
    items,
    activeItem,
    setActiveItem,
  } = useTimeline(defaultTimelineItems);

  const { containerRef, play } = useTimelineAnimation({
    duration: 0.8,
    stagger: 0.15,
  });

  useEffect(() => {
    play();
  }, [play]);

  return (
    <div ref={containerRef} className={cn('py-12 px-4', className)}>
      <h2 className="text-4xl font-bold text-center mb-12">Timeline</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              'timeline-item p-6 rounded-lg border transition-all duration-300 cursor-pointer',
              activeItem === item.id
                ? 'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] border-[var(--color-primary)]'
                : 'bg-[var(--color-card)] hover:bg-[var(--color-accent)] border-[var(--color-border)]',
              index % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0',
              'lg:w-[calc(50%-2rem)]'
            )}
            onClick={() => setActiveItem(item.id)}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)]">
                {item.category}
              </span>
              <span className="text-sm text-[var(--color-muted-foreground)]">{item.date}</span>
            </div>
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm opacity-90">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

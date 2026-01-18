import { ReactNode } from 'react';
// import { cn } from '@/lib/utils';

// Setup a simple utility if we don't have one, or just use strings.
// For now, I'll assume we might want clsx/tailwind-merge later, but I'll stick to template literals for simplicity unless complex.

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export const Section = ({ id, className, children }: SectionProps) => {
  return (
    <section
      id={id}
      className={`relative flex min-h-screen w-full snap-start snap-always flex-col justify-center px-6 md:px-24 ${className || ''}`}
    >
      {/* Optional: Add common background elements like the "premium glow" here */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center">
        {children}
      </div>
    </section>
  );
};

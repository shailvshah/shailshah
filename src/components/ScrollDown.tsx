'use client';

import { ChevronDown } from 'lucide-react';

export const ScrollDown = () => {
  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      onClick={handleScroll}
      className="mt-12 animate-bounce cursor-pointer self-center rounded-full p-2 text-[var(--text-tertiary)] transition-colors hover:bg-[var(--bg-secondary)]/50 hover:text-[var(--accent-core)]"
      aria-label="Scroll Down"
    >
      <ChevronDown className="h-8 w-8 md:h-10 md:w-10" />
    </div>
  );
};

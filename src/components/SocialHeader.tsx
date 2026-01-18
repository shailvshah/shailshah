'use client';

import { Github, Linkedin, FileText, Mail } from 'lucide-react';

export const SocialHeader = () => {
  return (
    <header className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 flex-row gap-6 rounded-full bg-[var(--bg-primary)] p-3 shadow-xl transition-all duration-300 md:top-12 md:bottom-auto md:left-12 md:translate-x-0 md:flex-col md:bg-transparent md:p-4 md:shadow-none md:hover:bg-[var(--bg-primary)]/80 md:hover:backdrop-blur-md">
      <nav className="flex flex-row gap-4 md:flex-col">
        <a
          href="https://github.com/shailvshah"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-[var(--text-primary)] transition-colors hover:text-[var(--accent-core)]"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
          <span className="hidden font-mono text-xs font-bold tracking-widest uppercase opacity-0 transition-all group-hover:translate-x-2 group-hover:opacity-100 md:block">
            GitHub
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/shail-shah7/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-[var(--text-primary)] transition-colors hover:text-[var(--accent-core)]"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
          <span className="hidden font-mono text-xs font-bold tracking-widest uppercase opacity-0 transition-all group-hover:translate-x-2 group-hover:opacity-100 md:block">
            LinkedIn
          </span>
        </a>

        <a
          href="https://medium.com/@shailvshah"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-[var(--text-primary)] transition-colors hover:text-[var(--accent-core)]"
          aria-label="Medium"
        >
          <FileText className="h-5 w-5" />
          <span className="hidden font-mono text-xs font-bold tracking-widest uppercase opacity-0 transition-all group-hover:translate-x-2 group-hover:opacity-100 md:block">
            Medium
          </span>
        </a>

        <a
          href="mailto:shailvshah@gmail.com"
          className="group flex items-center gap-2 text-[var(--text-primary)] transition-colors hover:text-[var(--accent-core)]"
          aria-label="Email"
        >
          <Mail className="h-5 w-5" />
          <span className="hidden font-mono text-xs font-bold tracking-widest uppercase opacity-0 transition-all group-hover:translate-x-2 group-hover:opacity-100 md:block">
            Contact
          </span>
        </a>
      </nav>
    </header>
  );
};

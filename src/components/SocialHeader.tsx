'use client';

import { Github, Linkedin, FileText, Mail } from 'lucide-react';

export const SocialHeader = () => {
  return (
    <header className="fixed top-8 left-8 z-50 flex flex-col gap-6 mix-blend-difference md:top-12 md:left-12">
      <nav className="flex flex-col gap-4">
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

'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { DecodeText } from './DecodeText';

export const Home = () => {
  // Simple typewriter effect hook or logic
  const [text, setText] = useState('');
  // const fullText = 'Building the future with AI.';
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      // const i = loopNum % 1; // Just one phrase for now or array of phrases
      // For simplicity, just one phrase: "Building the future with AI."
      const fullText = 'Building enterprise AI agents that actually work..';

      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(300);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(300);
      } else {
        setTypingSpeed(isDeleting ? 20 : 50);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="flex flex-col items-start gap-6">
      <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-[var(--border-subtle)] md:h-48 md:w-48">
        <Image
          src="/shailshah/Shail-Profile.jpeg"
          alt="Shail Shah"
          fill
          className="object-cover"
          priority
        />
      </div>
      <h1 className="font-heading text-5xl font-bold tracking-tight text-[var(--text-primary)] md:text-8xl">
        <DecodeText text="Shail Shah" />
      </h1>
      <h2 className="font-heading h-[60px] text-2xl font-light text-[var(--text-secondary)] md:text-4xl">
        {text}
        <span className="animate-pulse text-[var(--accent-core)]">|</span>
      </h2>
    </div>
  );
};

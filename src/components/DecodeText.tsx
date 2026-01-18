'use client';

import { useEffect, useState } from 'react';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#@$';

interface DecodeTextProps {
  text: string;
  className?: string;
}

export const DecodeText = ({ text, className }: DecodeTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let iteration = 0;

    const animate = () => {
      interval = setInterval(() => {
        setDisplayText(() =>
          text
            .split('')
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return letters[Math.floor(Math.random() * letters.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3; // Slower resolve speed
      }, 30);
    };

    animate();

    return () => clearInterval(interval);
  }, [text, isHovered]); // Re-run on hover if desired, or just once on mount

  return (
    <span
      className={className}
      onMouseEnter={() => setIsHovered(!isHovered)} // Optional: trigger on hover
    >
      {displayText}
    </span>
  );
};

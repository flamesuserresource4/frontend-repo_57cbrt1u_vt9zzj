import React, { useEffect, useMemo, useRef, useState } from 'react';

/**
 * TypewriterText
 * - Types multiple paragraphs sequentially
 * - Starts when `start` becomes true
 * - Optional per-char speed and per-paragraph delay
 */
export default function TypingText({
  paragraphs = [],
  start = false,
  charSpeed = 18,
  paragraphDelay = 350,
  className = '',
}) {
  const [currentIndex, setCurrentIndex] = useState(0); // which paragraph is being typed
  const [typedParts, setTypedParts] = useState(() => paragraphs.map(() => ''));
  const timersRef = useRef([]);

  const safeParagraphs = useMemo(() => paragraphs.filter(Boolean), [paragraphs]);

  useEffect(() => {
    // Clear timers on unmount
    return () => {
      timersRef.current.forEach((t) => clearTimeout(t));
      timersRef.current = [];
    };
  }, []);

  useEffect(() => {
    if (!start || safeParagraphs.length === 0) return;

    let cancelled = false;

    const typeParagraph = (pIndex) => {
      if (cancelled || pIndex >= safeParagraphs.length) return;
      const text = safeParagraphs[pIndex];
      let i = 0;

      const step = () => {
        if (cancelled) return;
        i += 1;
        setTypedParts((prev) => {
          const next = [...prev];
          next[pIndex] = text.slice(0, i);
          return next;
        });
        if (i < text.length) {
          timersRef.current.push(setTimeout(step, charSpeed));
        } else {
          // move to next paragraph after a brief delay
          timersRef.current.push(
            setTimeout(() => {
              setCurrentIndex((ci) => ci + 1);
              typeParagraph(pIndex + 1);
            }, paragraphDelay)
          );
        }
      };

      step();
    };

    // kick off
    typeParagraph(0);

    return () => {
      cancelled = true;
    };
  }, [start, safeParagraphs, charSpeed, paragraphDelay]);

  return (
    <div className={className}>
      {safeParagraphs.map((p, idx) => {
        const isActive = idx === currentIndex && start;
        const showCaret = isActive && typedParts[idx].length < p.length;
        return (
          <p key={idx} className="relative">
            <span>{typedParts[idx]}</span>
            {showCaret && (
              <span
                className="ml-0.5 inline-block h-[1.1em] w-[1px] align-[-0.15em] bg-[#CFCFFF] opacity-80 animate-pulse"
                aria-hidden
              />
            )}
          </p>
        );
      })}
    </div>
  );
}

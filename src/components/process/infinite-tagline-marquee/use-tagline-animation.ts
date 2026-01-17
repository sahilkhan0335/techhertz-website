"use client";
import { useEffect, useRef, useState } from "react";

interface UseTaglineAnimationReturn {
  displayedText: string;
}

export const useTaglineAnimation = (tagline: string, typingSpeed: number = 250): UseTaglineAnimationReturn => {
  const [displayedText, setDisplayedText] = useState("");
  const currentIndexRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const animateText = () => {
      if (currentIndexRef.current < tagline.length) {
        setDisplayedText(tagline.slice(0, currentIndexRef.current + 1));
        currentIndexRef.current++;
        timeoutRef.current = setTimeout(animateText, typingSpeed);
      } else {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText("");
          currentIndexRef.current = 0;
          timeoutRef.current = setTimeout(animateText, 500);
        }, 2000);
      }
    };

    animateText();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [tagline, typingSpeed]);

  return { displayedText };
};

"use client";
import AnimatedLetter from "./animated-letter";
import TypingCursor from "./typing-cursor";
import { useTaglineAnimation } from "./use-tagline-animation";

interface InfiniteTaglineMarqueeProps {
  className?: string;
}

const InfiniteTaglineMarquee = ({ className = "" }: InfiniteTaglineMarqueeProps) => {
  const tagline = "KEEP GROWING WITH US";
  const { displayedText } = useTaglineAnimation(tagline, 250);

  return (
    <div className={`flex items-center justify-center w-full min-h-15 ${className}`}>
      <div className="text-center">
        <span className="text-black font-bold text-base sm:text-lg md:text-xl uppercase tracking-[0.3em] font-mono inline-block">
          {displayedText.split("").map((letter, index) => (
            <AnimatedLetter key={index} letter={letter} index={index} />
          ))}
          {displayedText.length < tagline.length && <TypingCursor />}
        </span>
      </div>
    </div>
  );
};

export default InfiniteTaglineMarquee;


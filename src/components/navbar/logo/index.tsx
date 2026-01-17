"use client";
import LogoImage from "./logo-image";
import LogoImageWrapper from "./logo-image-wrapper";
import LogoLink from "./logo-link";
import LogoText from "./logo-text";
import LogoTextWrapper from "./logo-text-wrapper";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <LogoLink className={className}>
      <LogoImageWrapper>
        <LogoImage />
      </LogoImageWrapper>
      <LogoTextWrapper>
        <LogoText />
      </LogoTextWrapper>
    </LogoLink>
  );
};

export default Logo;

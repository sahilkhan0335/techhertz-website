"use client";
import { useState } from "react";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="md:hidden"
    >
      ☰
    </button>
  );
};

export default MobileMenu;

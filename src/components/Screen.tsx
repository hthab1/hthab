"use client";

import React, { ReactNode, useState, useEffect, useRef } from "react";

interface ScreenProps {
  children: ReactNode;
}

function Screen({ children }: ScreenProps) {
  const [cursorPosition, setCursorPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY + scrollY });
    };

    const element = ref.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [scrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen items-center relative" ref={ref}>
      <div
        className="pointer-events-none fixed top-0 inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(700px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(29, 78, 216, 0.15), transparent 70%)`,
        }}
      ></div>
      <div className="w-full max-w-6xl px-2">{children}</div>
    </div>
  );
}

export default Screen;

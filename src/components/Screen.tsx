import React, { ReactNode } from "react";

interface ScreenProps {
  children: ReactNode;
}

function Screen({ children }: ScreenProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-6xl px-2">{children}</div>
    </div>
  );
}

export default Screen;

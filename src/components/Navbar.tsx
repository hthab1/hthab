"use client";

import React, { useState } from "react";

function Navbar() {
  const [selected, setSelected] = useState<string>("about");
  const OnClick = (menu: string) => {
    setSelected(menu);
  };

  const items = [
    {
      name: "ABOUT",
      value: "about",
    },
    {
      name: "EXPERIENCE",
      value: "experience",
    },
    {
      name: "PROJECTS",
      value: "projects",
    },
  ];

  return (
    <div className="flex flex-col tracking-widest w-fit mt-16">
      {items?.map((item, index) => (
        <span
          key={index}
          onClick={() => OnClick(item.value)}
          className={`nav-text ${
            item.value === selected && "nav-selected"
          } text-xs font-bold py-4`}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
}

export default Navbar;

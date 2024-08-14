import Link from "next/link";
import React from "react";

function Socials() {
  const items = [
    { icon: "/iconGithub.svg", link: "https://github.com/hthab1" },
    {
      icon: "/iconInstagram.svg",
      link: "https://www.instagram.com/habteweldyimer",
    },
    { icon: "/iconLinkedin.svg", link: "www.linkedin.com/in/habteweld-yimer" },
    { icon: "/iconTwitter.svg", link: "https://x.com/Ht_hab" },
  ];

  return (
    <div className="flex flex-col flex-1">
      <div className="flex lg:flex-1 mt-4"></div>
      <div className="flex gap-5">
        {items.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center opacity-40 hover:opacity-100 rounded-md transition-all duration-300"
          >
            <img className="h-5 w-5" src={item.icon} alt="social media icon" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Socials;

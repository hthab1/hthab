import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["greek-ext"] });

export const metadata: Metadata = {
  title: "Habteweld Yimer",
  description:
    "Explore my portfolio. I am a skilled front-end developer with expertise in the MERN stack, React Native, and web development. Discover projects showcasing advanced UI/UX design, responsive web applications, and mobile app development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

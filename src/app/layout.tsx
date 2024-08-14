import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["greek-ext"] });

export const metadata: Metadata = {
  title: "Habteweld Yimer",
  description: "Habteweld  Yimer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

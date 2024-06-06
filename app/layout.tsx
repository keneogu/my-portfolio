import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Kene Portfolio",
  description: "This is an update on my recent Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

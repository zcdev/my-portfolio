import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";

const arimo = Arimo({
  variable: "--arimo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zoe Chang — Front-end Developer",
  description: "Project portfolio and dev blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${arimo.variable} antialiased`}>{children}</body>
    </html>
  );
}

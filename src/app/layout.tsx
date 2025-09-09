import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";

const arimo = Arimo({
  variable: "--arimo",
  subsets: ["latin"],
});

metadataBase: new URL("https://zoechang.dev");

export const metadata: Metadata = {
  title: "Zoe Chang — Front-end Developer",
  description: "Frontend portfolio, interactive projects, and dev blog",
  openGraph: {
    title: "Zoe Chang — Front-end Developer",
    description: "Frontend portfolio, interactive projects, and dev blog",
    url: "https://zoechang.dev",
    siteName: "Zoe Chang's Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zoe Chang's Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoe Chang — Front-end Developer",
    description: "Frontend portfolio, interactive projects, and dev blog",
    images: ["/og-image.png"],
  },
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

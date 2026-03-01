import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TopCorner.football | CalcioKx Corner Targets",
  description:
    "Train smarter. Hit the corners. CalcioKx curved corner targets attach to any goal post — perfect for precision shooting practice. UK delivery only.",
  keywords:
    "football corner targets, goal corner targets, shooting practice, CalcioKx, football training aids UK",
  openGraph: {
    title: "TopCorner.football | CalcioKx Corner Targets",
    description:
      "Curved corner targets that clip onto any goal post. Train your precision.",
    url: "https://topcorner.football",
    siteName: "TopCorner.football",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

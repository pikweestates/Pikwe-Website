import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.scss";

const regular = localFont({
  src: "../fonts/NeueMontreal-Regular.ttf",
  variable: "--regular-font",
});

const medium = localFont({
  src: "./fonts/NeueMontreal-Medium.ttf",
  variable: "--medium-font",
});

export const metadata: Metadata = {
  title: "PIKWE ESTATES - Land Ownership made Simple & Safe",
  description: "Land Ownership made Simple & Safe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${regular.variable} ${medium.variable}`}>
        {children}
      </body>
    </html>
  );
}

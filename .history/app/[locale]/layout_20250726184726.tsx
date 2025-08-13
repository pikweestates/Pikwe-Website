import type { Metadata } from "next";
import localFont from "next/font/local";
import TranslationsProvider from "@/utils/TranslationsProvider";
import initTranslations from "../i18n";
import "../../styles/globals.scss";

const regular = localFont({
  src: "../fonts/NeueMontreal-Regular.ttf",
  variable: "--regular-font",
});

const medium = localFont({
  src: "../fonts/NeueMontreal-Medium.ttf",
  variable: "--medium-font",
});

export const metadata: Metadata = {
  title: "PIKWE ESTATES - Land Ownership made Simple & Safe",
  description: "Land Ownership made Simple & Safe",
};

/**Translations */
const i18nNamespaces = [
  "Navigation",
];

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang="en">
      <body className={`${regular.variable} ${medium.variable}`}>
        {children}
      </body>
    </html>
  );
}

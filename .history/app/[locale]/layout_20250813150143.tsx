import type { Metadata } from "next";
import localFont from "next/font/local";
import TranslationsProvider from "@/utils/TranslationsProvider";
import initTranslations from "../i18n";
import CookieConsent from "@/components/ReUsables/CookieConsent";
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
const i18nNamespaces = ["Navigation", "HomePage", "Portfolio", "Blog", "Gallery", "About", "Privacy"];

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // ① Await the promise:
  const { locale } = await params;

  const { resources } = await initTranslations(
    locale,
    i18nNamespaces
  );
  return (
    <html lang={locale}>
      <body className={`${regular.variable} ${medium.variable}`}>
        <TranslationsProvider
          resources={resources}
          locale={locale}
          namespaces={i18nNamespaces}
        >
          {children}
          <CookieConsent/>
        </TranslationsProvider>
      </body>
    </html>
  );
}

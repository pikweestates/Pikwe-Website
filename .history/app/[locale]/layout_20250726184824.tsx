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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  const { t, resources } = await initTranslations(
    params.locale,
    i18nNamespaces
  ); 
  return (
    <html lang={params.locale}>
      <body className={`${regular.variable} ${medium.variable}`}>
      <TranslationsProvider
          resources={resources}
          locale={params.locale}
          namespaces={i18nNamespaces}
        >
          {children}
          <Footer/>
        </TranslationsProvider>
      </body>
    </html>
  );
}

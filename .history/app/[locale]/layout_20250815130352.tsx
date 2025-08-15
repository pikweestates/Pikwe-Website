import type { Metadata, ResolvingMetadata } from "next";
import localFont from "next/font/local";
import TranslationsProvider from "@/utils/TranslationsProvider";
import initTranslations from "../i18n";
import "../../styles/globals.scss";
import CookieConsent from "@/components/ReUsables/CookieConsent";

const regular = localFont({
  src: "../fonts/NeueMontreal-Regular.ttf",
  variable: "--regular-font",
});

const medium = localFont({
  src: "../fonts/NeueMontreal-Medium.ttf",
  variable: "--medium-font",
});

type Props = {
  params: Promise<{ locale: string }>
}

//MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const {locale} = await params;
  const { t } = await initTranslations(locale, i18nNamespaces);
  
  return {
    title: t("Navigation:homemetatitle"),
    description: t("HomePage:metadatadesc"),
    applicationName: "Pikwe Estates",
    twitter: {
      card: "summary_large_image"
    }
  };
}

/**Translations */
const i18nNamespaces = [
  "Navigation",
  "HomePage",
  "Portfolio",
  "Blog",
  "Gallery",
  "About",
  "Privacy",
];

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // ① Await the promise:
  const { locale } = await params;

  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <html lang={locale}>
      <body className={`${regular.variable} ${medium.variable}`}>
        <TranslationsProvider
          resources={resources}
          locale={locale}
          namespaces={i18nNamespaces}
        >
          {children}
          <CookieConsent />
        </TranslationsProvider>
      </body>
    </html>
  );
}

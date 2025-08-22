import type { Metadata } from 'next'
import TranslationsProvider from "@/utils/TranslationsProvider";
import initTranslations from "../../i18n"

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
    description: t("HomePage:herotext"),
    applicationName: "Pikwe Estates",
    twitter: {
      card: "summary_large_image"
    }
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
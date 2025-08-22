import type { Metadata } from 'next'
import initTranslations from "../../i18n"

type Props = {
  params: Promise<{ locale: string }>
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

//MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const {locale} = await params;
  const { t } = await initTranslations(locale, i18nNamespaces);
  
  return {
    title: t("Navigation:aboutmetatitle"),
    description: t("About:herotext"),
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
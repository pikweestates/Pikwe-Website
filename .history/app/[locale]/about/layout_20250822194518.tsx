import type { Metadata } from 'next'
import TranslationsProvider from "@/utils/TranslationsProvider";
import initTranslations from '@/app/i18n';

type Props = {
  params: Promise<{ locale: string }>
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
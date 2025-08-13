import type { Metadata } from 'next'
import initTranslations from '@/app/i18n';


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
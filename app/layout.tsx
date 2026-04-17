import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Adrian Tapia — IT Support Analyst',
  description: 'Portfolio of Adrian Tapia — IT Support Analyst with 4+ years of experience in service desk, cloud platforms, and platform operations.',
  keywords: ['Adrian Tapia', 'IT Support', 'Platform Support', 'Appen', 'Infosys', 'Cavite'],
  openGraph: {
    title: 'Adrian Tapia — IT Support Analyst',
    description: 'Portfolio of Adrian Tapia — IT Support Analyst with 4+ years of experience.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

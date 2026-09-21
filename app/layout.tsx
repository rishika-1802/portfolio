import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rishika B.S. — AI & Data Science Engineer',
  description:
    'Portfolio of Rishika B.S. — Final-year AI & Data Science Engineering Student building intelligent systems that turn data into meaningful decisions.',
  keywords: [
    'AI Engineering',
    'Data Science',
    'Computer Vision',
    'Machine Learning',
    'Explainable AI',
    'Deep Learning',
    'Python',
  ],
  authors: [{ name: 'Rishika B.S.' }],
  openGraph: {
    title: 'Rishika B.S. — AI & Data Science Engineer',
    description:
      'Portfolio of Rishika B.S. — Final-year AI & Data Science Engineering Student.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark-base text-light-primary font-sans antialiased selection:bg-violet-primary/30 selection:text-light-primary min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  )
}

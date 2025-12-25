import { Inter_Tight, JetBrains_Mono, Funnel_Display } from 'next/font/google'
import './globals.css'

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter-tight',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
})

const funnelDisplay = Funnel_Display({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-funnel-display',
})

export const metadata = {
  title: 'INWREN | Intelligent Email Platform',
  description: 'Send emails with precision. Optimize campaigns with clarity.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${interTight.variable}
          ${jetbrainsMono.variable}
          ${funnelDisplay.variable}
          font-sans antialiased
        `}
      >
        {children}
      </body>
    </html>
  )
}

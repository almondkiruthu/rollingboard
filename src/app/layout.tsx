import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

import Providers from '@/components/providers'
import '../styles/globals.css'

const fontRegularSans = localFont({
  src: '../../assets/fonts/Inter-Regular.ttf',
  variable: '--font-sans',
})

const fontBoldSans = localFont({
  src: '../../assets/fonts/Inter-Bold.ttf',
  variable: '--font-BoldSans',
})

const fontHeading = localFont({
  src: '../../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'Rollingboard',
  description: 'Your go to project management tool',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen font-sans_regular antialiased',
          fontRegularSans.variable,
          fontBoldSans.variable,
          fontHeading.variable,
        )}
      >
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}

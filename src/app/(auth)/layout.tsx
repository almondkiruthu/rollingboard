'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { ArrowLeftFromLine } from 'lucide-react'

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname()
  const isSignIn = pathname === '/sign-in'

  return (
    <main className="grainy min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="hidden md:inline-block" />
            <span className="hidden font-bold md:inline-block">
              Rolling Board
            </span>
          </Link>
          <Button asChild variant="muted">
            <Link href={'/'} className="ml-auto mr-4 flex">
              <ArrowLeftFromLine className="mr-2 h-4 w-4" />
              <span className="text-cyan-700">Home</span>
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href={isSignIn ? '/sign-up' : '/sign-in'}>
              {isSignIn ? 'Sign Up' : 'Login'}
            </Link>
          </Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  )
}

export default AuthLayout

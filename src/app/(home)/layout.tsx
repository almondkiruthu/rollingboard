import { ReactNode } from 'react'

import Link from 'next/link'

import MainNav from '@/app/(home)/_components/main-nav'
import { Icons } from '@/components/icons'
import SiteFooter from '@/components/site-footer'
import { buttonVariants } from '@/components/ui/button'
import { marketingConfig } from '@/config/marketing'
import { siteConfig } from '@/config/site'
import { getCurrent } from '@/features/auth/queries'
import { cn } from '@/lib/utils'
import { UserButton } from '@/features/auth/components/user-button'

interface MarketingLayoutProps {
  children: ReactNode
}

const MarketingLayout = async ({ children }: MarketingLayoutProps) => {
  const user = await getCurrent()

  return (
    <div className="grid-bg relative flex h-full min-h-screen w-full flex-col">
      <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] md:bg-[size:4rem_4rem]"></div>
      <header className="fixed z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center py-6 md:justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.mainLogo className="hidden md:inline-block" />
            <span className="hidden font-bold md:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          <div className="flex h-20 items-center py-6">
            <MainNav items={marketingConfig.mainNav} />
          </div>
          <nav className="ml-auto flex gap-x-4 md:ml-0">
            <Link
              href="/sign-in"
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                }),
                'px-4',
              )}
            >
              Login
            </Link>
            <Link
              href="/sign-up"
              className={cn(
                buttonVariants({
                  variant: 'outline',
                  size: 'sm',
                }),
                'border-white px-4',
              )}
            >
              Sign Up
            </Link>
            {user ? <UserButton/> : null}
          </nav>
        </div>
      </header>
      <main className="flex-1 pt-24">{children}</main>
      <SiteFooter />
    </div>
  )
}

export default MarketingLayout

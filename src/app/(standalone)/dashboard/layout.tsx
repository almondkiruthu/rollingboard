import Link from 'next/link'

import { Icons } from '@/components/icons'
import { siteConfig } from '@/config/site'
import { UserButton } from '@/features/auth/components/user-button'
import { getCurrent } from '@/features/auth/queries'
import { redirect } from 'next/navigation'

interface StandloneLayoutProps {
  children: React.ReactNode
}

const StandloneLayout = async ({ children }: StandloneLayoutProps) => {
  const user = await getCurrent()
  if (!user) redirect('/sign-in')
  return (
    <main className="min-h-screen bg-neutral-100">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex h-[73px] items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.mainLogo className="hidden md:inline-block" />
            <span className="hidden font-bold md:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          <UserButton />
        </nav>
        <div className="flex flex-col items-center justify-center py-4">
          {children}
        </div>
      </div>
    </main>
  )
}

export default StandloneLayout

import Link from 'next/link'

// import { Projects } from "./projects";
import { Navigation } from "./navigation";
import { DottedSeparator } from './dotted-separator'
import { WorkspaceSwitcher } from './workspace-switcher'
import { Icons } from './icons'
import { siteConfig } from '@/config/site'

export const Sidebar = () => {
  return (
    <aside className="h-full w-full bg-neutral-100 p-4">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.mainLogo className="hidden md:inline-block" />
        <span className="hidden font-bold md:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <DottedSeparator className="my-4" />
      <WorkspaceSwitcher />
      <DottedSeparator className="my-4" />
      <Navigation />
      <DottedSeparator className="my-4" />
      {/* <Projects /> */}
    </aside>
  )
}

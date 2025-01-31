import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Icons } from './icons'

const SiteFooter = ({ className }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.mainLogo />
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{' '}
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Almond
            </a>
            . Inspired by{' '}
            <a
              href="https://tx.shadcn.com/"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Taxonomy
            </a>
            {/* . Built by{" "}
            <a
              href="https://twitter.com/shadcn"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Shadcn
            </a> */}
            . The source code is available on{' '}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <p className="text-center text-sm leading-loose md:text-left">
          Light mode is the new dark mode 😊
        </p>
      </div>
    </footer>
  )
}

export default SiteFooter

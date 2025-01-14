import Link from 'next/link'

import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

const MarketingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:pt-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={siteConfig.links.twitter || ''}
            className="rounded-2xl bg-gradient-to-tr from-cyan-700/10 to-cyan-700/10 px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow along on Github
          </Link>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Collaborate and build <br /> faster, together.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Create, share, and get feedback with collaborative <br /> boards for
            rapid development.
          </p>
          <div className="flex items-center space-x-4">
            <Link
              href="/sign-up"
              className={cn(buttonVariants({ size: 'lg' }), 'bg-cyan-700')}
            >
              Get Started
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="lg:pb-18 container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:pt-20"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-1 md:max-w-[64rem] md:grid-cols-3">
          {/* Integrate Card*/}
          <div className="relative overflow-hidden rounded-lg border bg-gradient-to-b from-background p-2">
            <div className="flex h-[220px] flex-col items-center justify-between rounded-md p-6 text-center">
              <Icons.intergrate />
              <div className="space-y-4">
                <h3 className="font-bold">Integrate</h3>
                <p className="text-sm text-muted-foreground">
                  The ability to quickly set up and customize workflows for just
                  about anything.
                </p>
              </div>
            </div>
          </div>
          {/* Integrate Card*/}
          <div className="relative overflow-hidden rounded-lg border bg-gradient-to-b from-background p-2">
            <div className="flex h-[220px] flex-col items-center justify-between rounded-md p-6 text-center">
              <Icons.collaborate />
              <div className="space-y-2">
                <h3 className="font-bold">Collaborate</h3>
                <p className="text-sm text-muted-foreground">
                  Manage projects, organize tasks, and build team spirit—all in
                  one place.
                </p>
              </div>
            </div>
          </div>
          {/* Integrate Card*/}
          <div className="relative overflow-hidden rounded-lg border bg-gradient-to-b from-background p-2">
            <div className="flex h-[220px] flex-col items-center justify-between rounded-md p-6 text-center">
              <Icons.succeed />
              <div className="space-y-4">
                <h3 className="font-bold">Succeed</h3>
                <p className="text-sm text-muted-foreground">
                  Every single part of your task can be managed, tracked, and
                  shared with teammates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Proudly Open Source
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Rollingboard is open source and powered by open source software.{' '}
            <br />
            The code is available on{'  '}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}

export default MarketingPage

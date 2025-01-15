import { Icons } from '@/components/icons'
import { Models } from 'node-appwrite'

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SideBarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)

export type Siteconfig = {
  name: string
  description: string
  url: string
  links: {
    github: string
    twitter?: string
  }
}

export type MarketingConfig = {
  mainNav: MainNavItem[]
}

export type Workspace = Models.Document & {
  name: string
  imageUrl: string
  inviteCode: string
  userId: string
}

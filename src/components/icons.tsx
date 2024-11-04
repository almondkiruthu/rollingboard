import {
  Activity,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  FileText,
  HelpCircle,
  Layout,
  Loader2,
  LucideIcon,
  LucideProps,
  Menu,
  MoreHorizontal,
  Plus,
  Settings,
  User,
  X,
  XCircle,
} from 'lucide-react'

export type Icon = LucideIcon

export const Icons = {
  close: X,
  closeIcon: XCircle,
  menu: Menu,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  project: FileText,
  billing: CreditCard,
  settings: Settings,
  user: User,
  arrowRight: ArrowRight,
  add: Plus,
  boards: Layout,
  activity: Activity,
  question: HelpCircle,
  check: Check,
  more: MoreHorizontal,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  logo: ({ ...props }: LucideProps) => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="rollingBoard-Logo"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="6.79412" cy="5.74407" r="3.29412" fill="#50ADBB" />
      <circle
        cx="6.79412"
        cy="13.65"
        r="3.29412"
        fill="#50ADBB"
        fillOpacity="0.6"
      />
      <ellipse
        cx="6.79412"
        cy="21.5558"
        rx="3.29412"
        ry="3.29412"
        fill="#50ADBB"
        fillOpacity="0.3"
      />
      <ellipse
        cx="14.7"
        cy="5.74407"
        rx="3.29412"
        ry="3.29412"
        fill="#50ADBB"
        fillOpacity="0.01"
      />
      <ellipse
        cx="14.7"
        cy="13.65"
        rx="3.29412"
        ry="3.29412"
        fill="#50ADBB"
        fillOpacity="0.9"
      />
      <ellipse
        cx="14.7"
        cy="21.5558"
        rx="3.29412"
        ry="3.29412"
        fill="#50ADBB"
        fillOpacity="0.6"
      />
      <circle
        cx="22.6059"
        cy="5.74407"
        r="3.29412"
        fill="#50ADBB"
        fillOpacity="0.01"
      />
      <circle
        cx="22.6059"
        cy="13.65"
        r="3.29412"
        fill="#50ADBB"
        fillOpacity="0.01"
      />
      <ellipse
        cx="22.6059"
        cy="21.5558"
        rx="3.29412"
        ry="3.29412"
        fill="#50ADBB"
      />
    </svg>
  ),
  intergrate: ({ ...props }: LucideProps) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="rollingIntegrate-Logo"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20 0H0V40H20V0Z" fill="url(#paint0_linear_2254_330)" />
      <path d="M40 0H20V40H40V0Z" fill="#306870" />
      <path d="M20 10H10V30H20V10Z" fill="#50ADBB" />
      <path d="M30 10H20V30H30V10Z" fill="#306870" />
      <defs>
        <linearGradient
          id="paint0_linear_2254_330"
          x1="10"
          y1="0"
          x2="10"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#183438" />
          <stop offset="1" stopColor="#183438" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
  collaborate: ({ ...props }: LucideProps) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="rollimgCollaborate-Logo"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.66667 13.3333C10.3486 13.3333 13.3333 10.3486 13.3333 6.66667C13.3333 2.98477 10.3486 0 6.66667 0C2.98477 0 0 2.98477 0 6.66667C0 10.3486 2.98477 13.3333 6.66667 13.3333Z"
        fill="#489CA8"
      />
      <path
        opacity="0.6"
        d="M33.3334 13.3333C37.0153 13.3333 40 10.3486 40 6.66667C40 2.98477 37.0153 0 33.3334 0C29.6515 0 26.6667 2.98477 26.6667 6.66667C26.6667 10.3486 29.6515 13.3333 33.3334 13.3333Z"
        fill="#306870"
      />
      <path
        d="M6.66667 40C10.3486 40 13.3333 37.0153 13.3333 33.3334C13.3333 29.6515 10.3486 26.6667 6.66667 26.6667C2.98477 26.6667 0 29.6515 0 33.3334C0 37.0153 2.98477 40 6.66667 40Z"
        fill="#50ADBB"
      />
      <path
        opacity="0.8"
        d="M33.3334 40C37.0153 40 40 37.0153 40 33.3334C40 29.6515 37.0153 26.6667 33.3334 26.6667C29.6515 26.6667 26.6667 29.6515 26.6667 33.3334C26.6667 37.0153 29.6515 40 33.3334 40Z"
        fill="#489CA8"
      />
    </svg>
  ),
  succeed: ({ ...props }: LucideProps) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="rollimgCollaborate-Logo"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
        fill="url(#paint0_linear_2254_348)"
      />
      <path
        d="M30 40V20C30 14.4772 25.5228 10 20 10C14.4772 10 10 14.4772 10 20V40H30Z"
        fill="url(#paint1_linear_2254_348)"
      />
      <path
        d="M19.9999 30C25.5228 30 29.9999 25.5228 29.9999 20C29.9999 14.4772 25.5228 10 19.9999 10C14.4771 10 9.99994 14.4772 9.99994 20C9.99994 25.5228 14.4771 30 19.9999 30Z"
        fill="#3E8C97"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2254_348"
          x1="20"
          y1="0"
          x2="20"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#46E8FF" stopOpacity="0.71" />
          <stop offset="1" stopColor="#489CA8" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2254_348"
          x1="20"
          y1="10"
          x2="20"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#167785" />
          <stop offset="1" stopColor="#167785" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
  google: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  ),
}

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:bg-neutral-100 disabled:from-neutral-100 disabled:to-neutral-100 disabled:text-netural-300 border border-neutral-200 shadow-sm',
  {
    variants: {
      variant: {
        primary:
          'bg-gradient-to-b from-cyan-600 to-cyan-700 text-primary-foreground hover:from-cyan-700 hover:to-cyan-700',
        destructive:
          'bg-gradient-to-b from-rose-600 to-rose-700 text-destructive-foreground hover:from-rose-700 hover:to-rose-700',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-slate-800 text-white hover:bg-slate-500',
        ghost:
          'border-transparent shadow-none hover:bg-accent hover:text-accent-foreground',
        muted: 'bg-neutral-200 text-neutral-600 hover:bg-neutral-200/80',
        teritary:
          'bg-cyan-100 text-cyan-600 border-transparent hover:bg-cyan-200 shadow-none',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 rounded-md px-3',
        xs: 'h-7 rounded-md px-2 text-xs',
        lg: 'h-12 rounded-md px-8',
        icon: 'h-8 w-8',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }

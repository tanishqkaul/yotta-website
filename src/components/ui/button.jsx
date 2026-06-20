import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue disabled:pointer-events-none disabled:opacity-50 select-none',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-brand text-white shadow-brand hover:shadow-brand-lg hover:scale-[1.02] active:scale-[0.98]',
        outline:
          'border border-brand-blue/40 text-brand-blue bg-transparent hover:bg-brand-blue/10 hover:border-brand-blue/70',
        ghost:
          'text-slate-300 hover:text-white hover:bg-white/5',
        secondary:
          'bg-space-600 border border-slate-700/50 text-slate-200 hover:bg-space-500 hover:border-slate-600',
        ai:
          'bg-gradient-ai text-white shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] hover:scale-[1.02] active:scale-[0.98]',
        link:
          'text-brand-cyan hover:text-brand-cyan-light underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        default: 'h-11 px-6 py-2.5',
        sm: 'h-9 px-4 py-2 text-xs',
        lg: 'h-13 px-8 py-3.5 text-base',
        xl: 'h-14 px-10 py-4 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = 'Button'

export { Button, buttonVariants }

import * as React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default:
          'border-brand-blue/30 bg-brand-blue/10 text-brand-blue px-3 py-1',
        secondary:
          'border-slate-700 bg-slate-800/50 text-slate-300 px-3 py-1',
        cyan:
          'border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan px-3 py-1',
        ai:
          'border-brand-purple/30 bg-brand-purple/10 text-brand-purple px-3 py-1',
        gold:
          'border-brand-gold/30 bg-brand-gold/10 text-brand-gold px-3 py-1',
        success:
          'border-emerald-500/30 bg-emerald-500/10 text-emerald-400 px-3 py-1',
        outline:
          'border-slate-600 text-slate-300 px-3 py-1',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }

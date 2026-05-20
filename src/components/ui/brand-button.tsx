import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { MessageCircle } from 'lucide-react';

type Variant = 'primary' | 'outline' | 'outline-light' | 'whatsapp';
type Size = 'sm' | 'md' | 'lg';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

const base =
  'inline-flex items-center justify-center gap-2 font-body font-bold uppercase tracking-[0.06em] rounded-[4px] cursor-pointer transition-[background-color,box-shadow,transform,color,border-color] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:ring-offset-2 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed';

const sizes: Record<Size, string> = {
  sm: 'text-xs px-4 py-2',
  md: 'text-sm px-5 py-2.5',
  lg: 'text-sm px-7 py-3.5',
};

const variants: Record<Variant, string> = {
  primary:
    'bg-secondary text-white border-0 hover:bg-secondary-dark hover:-translate-y-[1px] hover:shadow-copper',
  outline:
    'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white',
  'outline-light':
    'bg-transparent text-dark-text border-2 border-[rgba(245,245,240,0.5)] hover:border-[rgba(245,245,240,0.9)] hover:bg-[rgba(245,245,240,0.08)]',
  whatsapp:
    'bg-whatsapp text-white border-0 hover:bg-whatsapp-dark hover:-translate-y-[1px]',
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(base, sizes[size], variants[variant], className)}
        {...props}
      >
        {variant === 'whatsapp' && <MessageCircle size={16} strokeWidth={2.5} />}
        {children}
      </button>
    );
  },
);
Button.displayName = 'Button';

// Anchor variant for use as a link
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
};

export function ButtonLink({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: AnchorProps) {
  return (
    <a
      className={cn(base, sizes[size], variants[variant], className)}
      {...props}
    >
      {variant === 'whatsapp' && <MessageCircle size={16} strokeWidth={2.5} />}
      {children}
    </a>
  );
}

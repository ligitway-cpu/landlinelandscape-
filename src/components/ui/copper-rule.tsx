import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { lineReveal } from '@/lib/variants';

interface Props {
  width?: 'sm' | 'md' | 'lg';
  align?: 'left' | 'center';
  className?: string;
}

const widths = { sm: 'w-10', md: 'w-14', lg: 'w-20' };

export function CopperRule({ width = 'md', align = 'left', className }: Props) {
  return (
    <motion.span
      variants={lineReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      className={cn(
        'block h-[3px] rounded-full bg-secondary my-3',
        widths[width],
        align === 'center' && 'mx-auto',
        className,
      )}
    />
  );
}

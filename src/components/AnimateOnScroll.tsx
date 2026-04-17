import { ReactNode, ElementType } from 'react';

type AnimationVariant = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';

interface AnimateOnScrollProps {
  children: ReactNode;
  /** Animation variant for this element itself */
  variant?: AnimationVariant;
  /** Stagger index (1–5) to apply aos-delay-N to this element */
  delay?: 1 | 2 | 3 | 4 | 5;
  /** HTML tag to render as */
  as?: ElementType;
  className?: string;
  staggerChildren?: boolean; // Kept for backwards compatibility type signature
}

/**
 * Drop-in wrapper that adds 'animate-on-scroll' class and variants.
 * Actual observer logic is centrally managed in App.tsx.
 */
export default function AnimateOnScroll({
  children,
  variant,
  delay,
  as: Tag = 'div',
  className = '',
}: AnimateOnScrollProps) {
  const variantClass = variant ? `aos-${variant}` : '';
  const delayClass = delay ? `aos-delay-${delay}` : '';

  return (
    <Tag className={['animate-on-scroll', variantClass, delayClass, className].filter(Boolean).join(' ')}>
      {children}
    </Tag>
  );
}

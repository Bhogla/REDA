import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to a container element.
 * Every child that has an `aos-*` class will receive `aos-animate`
 * once it enters the viewport — triggering the CSS transition defined
 * in index.css. The observer fires only once per element (unobserves
 * after animating) to avoid repeated triggering.
 */
export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Collect all direct and nested animatable children
    const targets = el.querySelectorAll<HTMLElement>(
      '.aos-fade-up, .aos-fade-in, .aos-slide-left, .aos-slide-right'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
            observer.unobserve(entry.target); // fire only once
          }
        });
      },
      { threshold }
    );

    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

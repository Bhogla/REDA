import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type PageId =
  | 'home'
  | 'about'
  | 'projects'
  | 'initiatives'
  | 'partnerships'
  | 'gallery'
  | 'blog'
  | 'blogDetail'
  | 'policy'
  | 'contact';

interface NavigationContextType {
  currentPage: PageId;
  blogSlug: string | null;
  navigate: (page: PageId, slug?: string) => void;
}

const NavigationContext = createContext<NavigationContextType | null>(null);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [blogSlug, setBlogSlug] = useState<string | null>(null);

  const navigate = useCallback((page: PageId, slug?: string) => {
    setCurrentPage(page);
    setBlogSlug(slug ?? null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <NavigationContext.Provider value={{ currentPage, blogSlug, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error('useNavigation must be used within NavigationProvider');
  return ctx;
}

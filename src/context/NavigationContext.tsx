import { createContext, useContext, useState, ReactNode } from 'react';

export type PageId =
  | 'home'
  | 'about'
  | 'projects'
  | 'initiatives'
  | 'partnerships'
  | 'policy'
  | 'contact';

interface NavigationContextType {
  currentPage: PageId;
  navigate: (page: PageId) => void;
}

const NavigationContext = createContext<NavigationContextType | null>(null);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  const navigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error('useNavigation must be used within NavigationProvider');
  return ctx;
}

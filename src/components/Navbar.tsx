import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigation, PageId } from '../context/NavigationContext';
import Button from './Button';
import logoImage from '../assets/logo.png';

const navLinks: { label: string; page: PageId }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Projects', page: 'projects' },
  { label: 'Initiatives', page: 'initiatives' },
  { label: 'Partnerships', page: 'partnerships' },
  { label: 'Gallery & Events', page: 'gallery' },
  { label: 'Policy & Advocacy', page: 'policy' },
];

export default function Navbar() {
  const { currentPage, navigate } = useNavigation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: PageId) => {
    navigate(page);
    setMobileOpen(false);
  };

  const isSolid = scrolled || mobileOpen || currentPage !== 'home';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid ? 'bg-white/95 backdrop-blur shadow-md py-2' : 'bg-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => handleNav('home')}
              className="flex items-center group shrink-0"
            >
              <img 
                src={logoImage} 
                alt="REDA – Renewable Energy Development Association" 
                className="h-8 md:h-10 w-auto object-contain transition-all duration-300 group-hover:opacity-80"
              />
            </button>

            <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => handleNav(page)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  currentPage === page
                    ? (isSolid ? 'text-green-deep bg-green-50 font-semibold' : 'text-white bg-white/20 font-semibold')
                    : (isSolid ? 'text-brand-secondary hover:text-green-deep hover:bg-gray-50' : 'text-white/90 hover:text-white hover:bg-white/10')
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
          </div>

          <div className="hidden lg:block">
            <Button size="sm" onClick={() => handleNav('contact')}>
              Get Consultation
            </Button>
          </div>

          <button
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${isSolid ? 'text-brand-secondary hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => handleNav(page)}
                className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  currentPage === page
                    ? 'text-green-deep bg-green-50 font-semibold'
                    : 'text-brand-secondary hover:text-green-deep hover:bg-gray-50'
                }`}
              >
                {label}
              </button>
            ))}
            <div className="pt-2 border-t border-gray-100 mt-2">
              <Button fullWidth onClick={() => handleNav('contact')}>
                Get Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

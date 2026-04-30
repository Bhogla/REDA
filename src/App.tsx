import { useEffect } from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Initiatives from './pages/Initiatives';
import Partnerships from './pages/Partnerships';
import GalleryEvents from './pages/GalleryEvents';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import PolicyAdvocacy from './pages/PolicyAdvocacy';
import Contact from './pages/Contact';

function PageRouter() {
  const { currentPage } = useNavigation();

  const pages = {
    home: <Home />,
    about: <About />,
    projects: <Projects />,
    initiatives: <Initiatives />,
    partnerships: <Partnerships />,
    gallery: <GalleryEvents />,
    blog: <Blog />,
    blogDetail: <BlogDetail />,
    policy: <PolicyAdvocacy />,
    contact: <Contact />,
  };

  useEffect(() => {
    // Clear and re-trigger animations universally on every route change
    const components = document.querySelectorAll('.animate-on-scroll');
    
    // Reset classes sequentially so the browser treats it as a fresh animation cycle if we visit again
    components.forEach(node => node.classList.remove('aos-animate'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    components.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [currentPage]);

  return pages[currentPage] ?? <Home />;
}

export default function App() {
  return (
    <NavigationProvider>
      <div className="min-h-screen bg-bg-warm font-sans text-brand-primary antialiased">
        <Navbar />
        <main>
          <PageRouter />
        </main>
        <Footer />
      </div>
    </NavigationProvider>
  );
}

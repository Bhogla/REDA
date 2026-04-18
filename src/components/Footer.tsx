import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, ExternalLink } from 'lucide-react';
import { useNavigation, PageId } from '../context/NavigationContext';
import logoImage from '../assets/logo.png';

const exploreLinks: { label: string; page: PageId }[] = [
  { label: 'About REDA', page: 'about' },
  { label: 'Our Projects', page: 'projects' },
  { label: 'Initiatives', page: 'initiatives' },
  { label: 'Partnerships', page: 'partnerships' },
  { label: 'Policy & Advocacy', page: 'policy' },
  { label: 'Contact Us', page: 'contact' },
];

const governmentLinks: { label: string; url: string }[] = [
  { label: 'UPCL', url: 'https://upcl.org/' },
  { label: 'UREDA', url: 'https://ureda.uk.gov.in/' },
  { label: 'MNRE', url: 'https://mnre.gov.in/' },
  { label: 'Invest Uttarakhand', url: 'https://investuttarakhand.uk.gov.in/' },
  { label: 'PM Surya Ghar Yojana', url: 'https://pmsuryaghar.gov.in/' },
  { label: 'UREC', url: 'https://www.urec.in/' },
];

export default function Footer() {
  const { navigate } = useNavigation();

  return (
    <footer className="bg-green-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-8 lg:gap-10 mb-16 items-start">
          <div className="lg:col-span-1">
            <button onClick={() => navigate('home')} className="inline-block mb-4 transition-opacity hover:opacity-80">
              <div className="bg-white rounded-xl p-2 inline-flex items-center justify-center">
                <img 
                  src={logoImage} 
                  alt="REDA – Renewable Energy Development Association" 
                  className="h-8 md:h-10 w-auto object-contain" 
                />
              </div>
            </button>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Renewable Energy Development Association promoting solar energy adoption and sustainable development across Uttarakhand, India.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-solar flex items-center justify-center transition-colors duration-200"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold text-white text-sm uppercase tracking-widest mb-6">
              Explore
            </h3>
            <ul className="space-y-3.5">
              {exploreLinks.map(({ label, page }) => (
                <li key={page}>
                  <button
                    onClick={() => navigate(page)}
                    className="text-white/80 hover:text-solar hover:translate-x-1.5 text-[15px] transition-all duration-200 block text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold text-white text-sm uppercase tracking-widest mb-6">
              Useful Government Links
            </h3>
            <ul className="space-y-3.5">
              {governmentLinks.map(({ label, url }) => (
                <li key={label}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-solar hover:translate-x-1.5 text-[15px] transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span>{label}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold text-white text-sm uppercase tracking-widest mb-6">
              Contact
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-white/80 text-sm">
                <MapPin className="w-3.5 h-3.5 text-solar mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-white/90 mb-1.5">Registered Office</p>
                  <span>Lakshya Enclave Block C, Banjarawala,<br />Dehradun – 248001 (Uttarakhand)</span>
                </div>
              </li>
              <li className="flex items-start gap-4 text-white/80 text-sm">
                <Phone className="w-3.5 h-3.5 text-solar mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-white/90 mb-1.5">Mobile</p>
                  <div className="flex flex-col gap-1.5">
                    <a href="tel:+918881220222" className="hover:text-solar transition-colors">888 1220 222</a>
                    <a href="tel:+919997015895" className="hover:text-solar transition-colors">999 7015 895</a>
                    <a href="tel:+917830144244" className="hover:text-solar transition-colors">783 0144 244</a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4 text-white/80 text-sm">
                <Mail className="w-3.5 h-3.5 text-solar mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-white/90 mb-1.5">Mail ID</p>
                  <a href="mailto:redauttarakhand@gmail.com" className="hover:text-solar transition-colors break-all">
                    redauttarakhand@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/30 pt-8 pb-2">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-white/60 text-[13px] tracking-wide text-center sm:text-left">
              &copy; {new Date().getFullYear()} Renewable Energy Development Association. All rights reserved.
            </p>
            <p className="text-white/50 text-[12px] tracking-wider uppercase">
              Registered NGO | Uttarakhand, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

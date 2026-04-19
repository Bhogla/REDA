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
    <footer className="bg-[#FAFDF7] text-neutral-900 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 md:gap-10 lg:gap-8 items-start">
          <div className="lg:col-span-4 lg:pr-8 flex flex-col">
            <button onClick={() => navigate('home')} className="inline-block mb-5 self-start transition-opacity hover:opacity-70">
              <div className="bg-white rounded-xl p-2.5 inline-flex items-center justify-center shadow-sm">
                <img 
                  src={logoImage} 
                  alt="REDA – Renewable Energy Development Association" 
                  className="h-8 md:h-10 w-auto object-contain" 
                />
              </div>
            </button>
            <p className="text-neutral-800 text-sm leading-relaxed mb-6 max-w-xs font-medium">
              Renewable Energy Development Association promoting solar energy adoption and sustainable development across Uttarakhand, India.
            </p>
            <div className="flex gap-2.5">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-neutral-900/5 hover:bg-orange-500 text-neutral-900 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col">
            <h3 className="font-bold text-neutral-900 text-sm uppercase tracking-widest mb-6">
              Explore
            </h3>
            <ul className="space-y-3.5">
              {exploreLinks.map(({ label, page }) => (
                <li key={page}>
                  <button
                    onClick={() => navigate(page)}
                    className="text-neutral-800 hover:text-orange-500 hover:translate-x-1 text-[15px] transition-all duration-200 block text-left font-medium"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col">
            <h3 className="font-bold text-neutral-900 text-sm uppercase tracking-widest mb-6">
              Useful Government Links
            </h3>
            <ul className="space-y-3.5">
              {governmentLinks.map(({ label, url }) => (
                <li key={label}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-800 hover:text-orange-500 hover:translate-x-1 text-[15px] transition-all duration-200 flex items-center gap-2 group font-medium"
                  >
                    <span>{label}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col">
            <h3 className="font-bold text-neutral-900 text-sm uppercase tracking-widest mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3.5 text-neutral-800 text-sm">
                <MapPin className="w-4 h-4 text-neutral-900 mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-neutral-900 mb-1">Registered Office</p>
                  <span className="leading-snug font-medium">Lakshya Enclave Block C, Banjarawala, Dehradun – 248001 (Uttarakhand)</span>
                </div>
              </li>
              <li className="flex items-start gap-3.5 text-neutral-800 text-sm">
                <Phone className="w-4 h-4 text-neutral-900 mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-neutral-900 mb-1">Mobile</p>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-medium leading-snug">
                    <a href="tel:+918881220222" className="hover:text-orange-500 transition-colors whitespace-nowrap">888 1220 222</a>
                    <span className="text-neutral-300">|</span>
                    <a href="tel:+919997015895" className="hover:text-orange-500 transition-colors whitespace-nowrap">999 7015 895</a>
                    <span className="text-neutral-300">|</span>
                    <a href="tel:+917830144244" className="hover:text-orange-500 transition-colors whitespace-nowrap">783 0144 244</a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3.5 text-neutral-800 text-sm">
                <Mail className="w-4 h-4 text-neutral-900 mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-neutral-900 mb-1">Mail ID</p>
                  <a href="mailto:redauttarakhand@gmail.com" className="hover:text-orange-500 transition-colors break-all font-medium leading-snug">
                    redauttarakhand@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-orange-200 via-orange-100 to-orange-300 border-t border-orange-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-neutral-900 text-[14px] tracking-wide text-center sm:text-left font-semibold">
              &copy; {new Date().getFullYear()} Renewable Energy Development Association. All rights reserved.
            </p>
            <p className="text-neutral-900 text-[13px] tracking-wider uppercase font-semibold">
              Registered NGO | Uttarakhand, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

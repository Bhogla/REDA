import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { useNavigation, PageId } from '../context/NavigationContext';
import logoImage from '../assets/logo.png';

const footerLinks: { heading: string; links: { label: string; page: PageId }[] }[] = [
  {
    heading: 'Organisation',
    links: [
      { label: 'About REDA', page: 'about' },
      { label: 'Our Projects', page: 'projects' },
      { label: 'Initiatives', page: 'initiatives' },
    ],
  },
  {
    heading: 'Get Involved',
    links: [
      { label: 'Partnerships', page: 'partnerships' },
      { label: 'Policy & Advocacy', page: 'policy' },
      { label: 'Contact Us', page: 'contact' },
    ],
  },
];

export default function Footer() {
  const { navigate } = useNavigation();

  return (
    <footer className="bg-green-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
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

          {footerLinks.map(({ heading, links }) => (
            <div key={heading}>
              <h3 className="font-semibold text-white text-sm uppercase tracking-widest mb-5">
                {heading}
              </h3>
              <ul className="space-y-3">
                {links.map(({ label, page }) => (
                  <li key={page}>
                    <button
                      onClick={() => navigate(page)}
                      className="text-white/70 hover:text-solar text-sm transition-colors duration-150"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-solar mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white/90 mb-0.5">Registered Office</p>
                  <span>Lakshya Enclave Block C, Banjarawala,<br />Dehradun – 248001 (Uttarakhand)</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Phone className="w-4 h-4 text-solar mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white/90 mb-1">Mobile</p>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+918881220222" className="hover:text-solar transition-colors">888 1220 222</a>
                    <a href="tel:+919997015895" className="hover:text-solar transition-colors">999 7015 895</a>
                    <a href="tel:+917830144244" className="hover:text-solar transition-colors">783 0144 244</a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Mail className="w-4 h-4 text-solar mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white/90 mb-0.5">Mail ID</p>
                  <a href="mailto:redauttarakhand@gmail.com" className="hover:text-solar transition-colors break-all">
                    redauttarakhand@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Renewable Energy Development Association. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Registered NGO | CIN: XXXXXXXXXX | Uttarakhand, India
          </p>
        </div>
      </div>
    </footer>
  );
}

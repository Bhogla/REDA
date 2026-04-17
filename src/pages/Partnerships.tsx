import {
  Building2, Leaf, TrendingUp, GraduationCap, Handshake,
  CheckCircle, ArrowRight, Globe
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import AnimateOnScroll from '../components/AnimateOnScroll';

const partnerCategories = [
  {
    icon: Building2,
    title: 'Government Bodies',
    color: 'text-blue-trust',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    desc: 'Working with authorities to align renewable initiatives with policy. We ensure that our network’s efforts support the state’s broader energy goals.',
    partners: [
      'Uttarakhand Renewable Energy Development Agency (UREDA)',
      'Ministry of New and Renewable Energy (MNRE)',
      'Uttarakhand Government – Department of Energy',
      'National Bank for Agriculture and Rural Development (NABARD)',
      'District Administrations across Uttarakhand',
    ],
    benefits: [
      'Access to government subsidies and schemes',
      'Policy alignment and compliance support',
      'Joint awareness campaigns and events',
    ],
  },
  {
    icon: Leaf,
    title: 'NGOs & Outreach Partners',
    color: 'text-green-deep',
    bg: 'bg-green-50',
    border: 'border-green-100',
    desc: 'Expanding grassroots impact through partnerships. Our NGO network amplifies our reach into remote communities, enabling last-mile delivery of solar education.',
    partners: [
      'HimalayaClean Foundation',
      'Uttarakhand Mahila Samakhya',
      'Rural Development Trust India',
      'Green Himalaya Society',
      'Community Health & Energy Network',
    ],
    benefits: [
      'Deep community penetration and trust',
      'Joint capacity building programmes',
      'Shared monitoring and evaluation frameworks',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Private Sector Members',
    color: 'text-solar',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    desc: 'Supporting solar adoption across industries. We collaborate with companies within the ecosystem to foster innovation and sustainable business growth.',
    partners: [
      'Tata Power Solar Systems',
      'Luminous Power Technologies',
      'Jakson Group',
      'Adani Solar',
      'Local MSME solar installers network',
    ],
    benefits: [
      'Member-exclusive growth opportunities',
      'Technical training and certification support',
      'CSR collaboration for collective impact',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Academic Institutions',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    desc: 'Collaborating on research and innovation. We bridge the gap between academic expertise and industry application to stay at the forefront of solar technology.',
    partners: [
      'IIT Roorkee – Energy Department',
      'Graphic Era University, Dehradun',
      'Srinagar Garhwal University',
      'CEPT University',
      'Uttarakhand Technical University',
    ],
    benefits: [
      'Joint research and publication',
      'Internship placements for students',
      'Technology pilot projects and trials',
    ],
  },
];

const partnershipTypes = [
  {
    title: 'Co-Implementation Partner',
    desc: 'Co-design and deliver solar projects on the ground with shared resources and accountability.',
    icon: Handshake,
  },
  {
    title: 'CSR Partner',
    desc: 'Channel your company\'s CSR funds into impactful solar projects with full transparency.',
    icon: TrendingUp,
  },
  {
    title: 'Knowledge Partner',
    desc: 'Share expertise, research, and technical knowledge to improve our programme quality.',
    icon: GraduationCap,
  },
  {
    title: 'Advocacy Partner',
    desc: 'Join our coalition advocating for stronger solar policies and enabling regulatory frameworks.',
    icon: Globe,
  },
];

export default function Partnerships() {
  const { navigate } = useNavigation();

  return (
    <div className="bg-bg-warm pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Partnerships"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-trust/88" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-solar mb-4">
            Partnerships
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight hero-text-shadow">
            Collaborating for a Stronger Renewable Ecosystem
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed hero-text-shadow">
            REDA's impact is powered by a diverse ecosystem of government agencies, NGOs, corporations, and academic institutions all working toward a common goal.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {partnerCategories.map(({ icon: Icon, title, color, bg, border, desc, partners, benefits }, idx) => (
            <AnimateOnScroll key={title} variant="fade-up" delay={(Math.min(idx + 1, 5)) as 1|2|3|4|5}>
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 md:p-12 shadow-card border border-gray-100"
              >
                {/* Left Side: Info & Partners */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 ${bg} rounded-2xl flex items-center justify-center shadow-sm`}>
                      <Icon className={`w-7 h-7 ${color}`} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight">{title}</h2>
                  </div>
                  
                  <p className="text-brand-secondary text-lg leading-relaxed max-w-lg">
                    {desc}
                  </p>

                  <div className="space-y-4 pt-2">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-secondary/60">
                      Our Network Includes
                    </p>
                    <ul className="space-y-2 mt-4">
                      {partners.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-brand-secondary">
                          <span className="text-green-600 font-bold">✔</span>
                          <span className="text-sm md:text-base font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Side: Benefits Box */}
                <div className={`${bg.replace('bg-', 'bg-opacity-40 bg-')} rounded-3xl p-8 md:p-10 border border-gray-50 flex flex-col justify-center h-full relative overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 ${bg} opacity-50 blur-3xl -mr-16 -mt-16 rounded-full`} />
                  
                  <div className="relative z-10">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-secondary/50 mb-6">
                      Partnership Benefits
                    </p>
                    <ul className="space-y-5">
                      {benefits.map((b) => (
                        <li key={b} className="flex items-start gap-4">
                          <div className={`w-2 h-2 rounded-full ${color.replace('text-', 'bg-')} mt-2 shrink-0`} />
                          <span className="text-brand-primary font-bold text-base leading-tight">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fade-up">
            <SectionHeader
              label="How to Partner"
              title="Ways to Collaborate with REDA"
              subtitle="We offer flexible partnership models to match your organisation's goals and capacity."
            />
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {partnershipTypes.map(({ title, desc, icon: Icon }, idx) => (
              <AnimateOnScroll key={title} variant="fade-up" delay={(Math.min(idx + 1, 5)) as 1|2|3|4|5}>
              <div className="bg-bg-warm rounded-2xl p-6 border border-gray-100 hover:border-solar/30 hover:shadow-card transition-all text-center h-full">
                <div className="w-12 h-12 bg-solar/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-solar" />
                </div>
                <h3 className="font-bold text-brand-primary mb-2">{title}</h3>
                <p className="text-sm text-brand-secondary leading-relaxed">{desc}</p>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg-warm">
        <AnimateOnScroll variant="fade-up" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Handshake className="w-12 h-12 text-solar mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-primary mb-4">
            Interested in Partnering with REDA?
          </h2>
          <p className="text-brand-secondary leading-relaxed mb-8">
            Whether you're a government body, NGO, corporation, or academic institution, we'd love to explore how we can work together to accelerate solar energy in Uttarakhand.
          </p>
          <Button size="lg" onClick={() => navigate('contact')}>
            Start a Conversation <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </AnimateOnScroll>
      </section>
    </div>
  );
}

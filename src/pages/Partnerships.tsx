import {
  Building2, Leaf, TrendingUp, GraduationCap, Handshake,
  ArrowRight, Globe
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import AnimateOnScroll from '../components/AnimateOnScroll';

const partnerCategories = [
  {
    icon: Building2,
    title: 'Institutional & Stakeholder Collaboration',
    eyebrow: 'INSTITUTIONAL',
    color: 'text-blue-trust',
    bg: 'bg-blue-50',
    dot: 'bg-blue-trust',
    border: 'border-blue-100',
    desc: 'REDA engages with institutions and stakeholders to encourage dialogue, awareness, and coordination that supports renewable participation across Uttarakhand.',
    partners: [
      'Renewable awareness collaboration',
      'Information exchange initiatives',
      'Stakeholder coordination',
      'Knowledge-sharing engagement',
      'Public participation support',
    ],
    benefits: [
      'Awareness collaboration',
      'Stakeholder engagement',
      'Collaborative outreach initiatives',
    ],
  },
  {
    icon: Leaf,
    title: 'NGOs & Outreach Partners',
    color: 'text-green-deep',
    bg: 'bg-green-50',
    dot: 'bg-green-deep',
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
    title: 'Industry & Member Ecosystem',
    eyebrow: 'INDUSTRY',
    color: 'text-solar',
    bg: 'bg-orange-50',
    dot: 'bg-solar',
    border: 'border-orange-100',
    desc: 'Connecting members and industry participants to strengthen collaboration, engagement, and collective growth across the renewable ecosystem.',
    partners: [
      'Member engagement opportunities',
      'Knowledge exchange',
      'Collaborative participation',
      'Industry interaction',
      'Ecosystem networking',
    ],
    benefits: [
      'Member networking',
      'Knowledge collaboration',
      'Shared opportunities',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Academic & Knowledge Collaboration',
    eyebrow: 'KNOWLEDGE',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    dot: 'bg-rose-600',
    border: 'border-rose-100',
    desc: 'Encouraging collaboration through learning, research dialogue, and knowledge exchange to support renewable awareness.',
    partners: [
      'Knowledge partnerships',
      'Learning initiatives',
      'Academic engagement',
      'Collaborative discussions',
      'Awareness support',
    ],
    benefits: [
      'Knowledge exchange',
      'Learning collaboration',
      'Research dialogue',
    ],
  },
];

const partnershipTypes = [
  {
    title: 'Community Partner',
    desc: 'Support awareness and participation initiatives.',
    icon: Handshake,
  },
  {
    title: 'Knowledge Partner',
    desc: 'Share expertise and strengthen learning.',
    icon: GraduationCap,
  },
  {
    title: 'Awareness Partner',
    desc: 'Expand outreach and engagement activities.',
    icon: TrendingUp,
  },
  {
    title: 'Collaboration Partner',
    desc: 'Contribute to ecosystem development.',
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
            PARTNERSHIPS
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight hero-text-shadow">
            Collaborating for a Stronger Renewable Ecosystem
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed hero-text-shadow">
            REDA brings together members, institutions, stakeholders, and organisations to strengthen renewable awareness, knowledge-sharing, and sustainable participation across Uttarakhand. Building meaningful collaboration through engagement, participation, and shared renewable goals.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {partnerCategories.map(({ icon: Icon, title, color, bg, dot, desc, partners, benefits, eyebrow }, idx) => (
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
                    <div>
                      {eyebrow && (
                        <span className={`text-xs font-bold uppercase tracking-[0.25em] ${color} mb-1 block`}>
                          {eyebrow}
                        </span>
                      )}
                      <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight">{title}</h2>
                    </div>
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
                          <div className={`w-2 h-2 rounded-full ${dot} mt-2 shrink-0`} />
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
              label="HOW TO COLLABORATE"
              title="Ways to Collaborate with REDA"
              subtitle="Explore flexible collaboration opportunities that support awareness, participation, and ecosystem engagement."
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
            Interested in Collaborating with REDA?
          </h2>
          <p className="text-brand-secondary leading-relaxed mb-8">
            Connect with REDA to explore opportunities for awareness, engagement, and renewable ecosystem collaboration across Uttarakhand.
          </p>
          <Button size="lg" onClick={() => navigate('contact')}>
            Start a Conversation <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </AnimateOnScroll>
      </section>
    </div>
  );
}

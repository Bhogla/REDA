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
    desc: 'We collaborate closely with state and central government agencies to align our programmes with policy frameworks and leverage public funding.',
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
    title: 'NGOs & Civil Society',
    color: 'text-green-deep',
    bg: 'bg-green-50',
    border: 'border-green-100',
    desc: 'Our NGO network amplifies our reach into remote communities, enabling last-mile delivery of solar solutions and education programmes.',
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
    title: 'Private Sector',
    color: 'text-solar',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    desc: 'Industry partnerships enable us to offer competitive pricing, access cutting-edge technology, and create employment opportunities for local youth.',
    partners: [
      'Tata Power Solar Systems',
      'Luminous Power Technologies',
      'Jakson Group',
      'Adani Solar',
      'Local MSME solar installers network',
    ],
    benefits: [
      'Preferred pricing for REDA beneficiaries',
      'Technical training and certification support',
      'CSR co-investment in community projects',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Academic Institutions',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    desc: 'Research partnerships help us stay at the forefront of solar technology and ensure evidence-based programme design.',
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Stronger Together for a Solar Uttarakhand
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            REDA's impact is powered by a diverse ecosystem of government agencies, NGOs, corporations, and academic institutions all working toward a common goal.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {partnerCategories.map(({ icon: Icon, title, color, bg, border, desc, partners, benefits }, idx) => (
            <AnimateOnScroll key={title} variant="fade-up" delay={(Math.min(idx + 1, 5)) as 1|2|3|4|5}>
            <div
              className={`grid lg:grid-cols-5 gap-8 items-start bg-white rounded-2xl p-8 shadow-card border ${border}`}
            >
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${color}`} />
                  </div>
                  <h2 className="text-2xl font-extrabold text-brand-primary">{title}</h2>
                </div>
                <p className="text-brand-secondary leading-relaxed mb-5">{desc}</p>
                <div className="space-y-2">
                  {partners.map((p) => (
                    <div key={p} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-deep mt-0.5 shrink-0" />
                      <span className="text-sm text-brand-secondary">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className={`${bg} rounded-xl p-5 border ${border}`}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-secondary mb-3">
                    Partnership Benefits
                  </p>
                  <ul className="space-y-2">
                    {benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <div className={`w-5 h-5 rounded-full ${bg} flex items-center justify-center shrink-0 mt-0.5`}>
                          <div className={`w-2 h-2 rounded-full ${color.replace('text-', 'bg-')}`} />
                        </div>
                        <span className="text-sm text-brand-secondary">{b}</span>
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

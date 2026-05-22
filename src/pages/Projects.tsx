import { Sun, Users, Wind, CheckCircle, Wrench, BarChart, ShieldCheck, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import AnimateOnScroll from '../components/AnimateOnScroll';

const projects = [
  {
    id: 'residential',
    icon: Sun,
    title: 'Household Renewable Awareness',
    tagline: 'POWERING COMMUNITIES THROUGH AWARENESS',
    color: 'text-solar',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    img: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Supporting households with awareness, information access, and guidance on renewable energy opportunities and government initiatives through REDA’s member ecosystem.',
    features: [
      'Renewable energy awareness sessions',
      'Information on available government initiatives',
      'Community engagement programs',
      'Member-led educational outreach',
      'Understanding rooftop solar opportunities',
      'Public participation support',
    ],
    ctaText: 'Learn More',
  },
  {
    id: 'community',
    icon: Users,
    title: 'Community Energy Initiatives',
    tagline: 'COLLECTIVE PARTICIPATION FOR SHARED IMPACT',
    color: 'text-green-deep',
    bg: 'bg-green-50',
    border: 'border-green-100',
    img: 'https://images.pexels.com/photos/9799712/pexels-photo-9799712.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Encouraging community participation and renewable energy awareness through collaborative programs, local engagement, and knowledge-sharing initiatives.',
    features: [
      'Community participation initiatives',
      'Renewable awareness campaigns',
      'Local capacity building',
      'Community engagement activities',
      'Government initiative awareness',
      'Member collaboration',
    ],
    ctaText: 'Explore Initiative',
  },
  {
    id: 'offgrid',
    icon: Wind,
    title: 'Rural & Remote Renewable Outreach',
    tagline: 'RENEWABLE OUTREACH FOR EVERY COMMUNITY',
    color: 'text-blue-trust',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    img: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Supporting awareness and accessibility of renewable energy solutions for remote and underserved communities through ecosystem collaboration and local participation.',
    features: [
      'Rural outreach programs',
      'Renewable awareness drives',
      'Sustainable energy education',
      'Community engagement support',
      'Knowledge-sharing activities',
      'Inclusive participation initiatives',
    ],
    ctaText: 'Get Involved',
  },
];

const processSteps = [
  { step: '01', title: 'Awareness', desc: 'Educating communities on renewable opportunities' },
  { step: '02', title: 'Engagement', desc: 'Connecting stakeholders and members' },
  { step: '03', title: 'Collaboration', desc: 'Supporting collective participation' },
  { step: '04', title: 'Initiative Support', desc: 'Facilitating community-led efforts' },
  { step: '05', title: 'Outreach', desc: 'Expanding renewable awareness' },
  { step: '06', title: 'Long-Term Impact', desc: 'Strengthening sustainable participation' },
];

const whyUs = [
  { icon: ShieldCheck, label: 'Community Focused', desc: 'Programs designed to encourage inclusive participation and renewable awareness.' },
  { icon: Wrench, label: 'Member Network', desc: 'Strengthening collaboration across the renewable energy ecosystem.' },
  { icon: BarChart, label: 'Sustainable Impact', desc: 'Supporting long-term awareness, engagement, and community development.' },
];

export default function Projects() {
  const { navigate } = useNavigation();

  return (
    <div className="bg-bg-warm pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Solar services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.25))' }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-solar mb-4">
            OUR PROGRAMS
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight hero-text-shadow">
            Driving Renewable Energy Awareness Across Communities
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed hero-text-shadow mb-8">
            REDA supports and strengthens renewable energy awareness, stakeholder engagement, and collaborative initiatives across Uttarakhand through its member ecosystem and community participation.
          </p>
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm px-4 py-2 rounded-full border border-white/20">
              <CheckCircle className="w-4 h-4 text-solar" />
              Programs are supported through member collaboration and community-driven participation.
            </span>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {projects.map(({ icon: Icon, title, tagline, color, bg, border, img, desc, features, ctaText }, idx) => (
            <AnimateOnScroll key={title} variant="fade-up" delay={(Math.min(idx + 1, 5)) as 1|2|3|4|5}>
            <div
              className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <p className={`text-sm font-semibold uppercase tracking-widest ${color} mb-2`}>{tagline}</p>
                <h2 className="text-3xl font-extrabold text-brand-primary mb-4">{title}</h2>
                <p className="text-brand-secondary text-lg leading-relaxed mb-6">{desc}</p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-deep mt-0.5 shrink-0" />
                      <span className="text-sm text-brand-secondary">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button onClick={() => navigate('contact')}>
                  {ctaText} <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className={`relative ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img
                  src={img}
                  alt={title}
                  className={`rounded-2xl shadow-card-hover w-full object-cover aspect-[4/3] border ${border}`}
                />
              </div>
            </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fade-up">
            <SectionHeader
              label="OUR APPROACH"
              title="How REDA Programs Create Impact"
            />
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {processSteps.map(({ step, title, desc }, i) => (
              <AnimateOnScroll key={step} variant="fade-up" delay={(Math.min(i + 1, 5)) as 1|2|3|4|5}>
              <div className="relative bg-bg-warm rounded-2xl p-6 border border-gray-100 hover:border-solar/30 hover:shadow-card transition-all h-full">
                <div className="text-5xl font-extrabold text-solar/15 mb-4 leading-none">{step}</div>
                <h3 className="font-bold text-brand-primary text-lg mb-2">{title}</h3>
                <p className="text-sm text-brand-secondary leading-relaxed">{desc}</p>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {whyUs.map(({ icon: Icon, label, desc }, i) => (
              <AnimateOnScroll key={label} variant="fade-up" delay={(Math.min(i + 1, 5)) as 1|2|3|4|5}>
              <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 flex gap-4 items-start h-full">
                <div className="w-11 h-11 bg-solar/10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-solar" />
                </div>
                <div>
                  <div className="font-bold text-brand-primary mb-1">{label}</div>
                  <div className="text-sm text-brand-secondary">{desc}</div>
                </div>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll variant="fade-up" className="text-center">
            <Button size="lg" onClick={() => navigate('contact')}>
              Schedule a Free Consultation
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}

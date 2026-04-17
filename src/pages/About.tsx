import { Target, Eye, Heart, Users, Award, Leaf, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import AnimateOnScroll from '../components/AnimateOnScroll';

const values = [
  {
    icon: Leaf,
    title: 'Sustainability',
    desc: 'Every decision we make is guided by long-term environmental stewardship.',
    color: 'text-green-deep',
    bg: 'bg-green-50',
  },
  {
    icon: Users,
    title: 'Community First',
    desc: 'We place the needs of local communities at the heart of our work.',
    color: 'text-blue-trust',
    bg: 'bg-blue-50',
  },
  {
    icon: Award,
    title: 'Integrity',
    desc: 'Transparent operations, honest communication, and accountable outcomes.',
    color: 'text-solar',
    bg: 'bg-orange-50',
  },
  {
    icon: Heart,
    title: 'Inclusivity',
    desc: 'Clean energy for everyone — regardless of geography or economic status.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
];

const team = [
  {
    name: 'Dr. Arun Sharma',
    role: 'Founder & President',
    img: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Priya Negi',
    role: 'Director – Field Operations',
    img: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Rahul Bisht',
    role: 'Head – Policy & Research',
    img: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Kavita Rawat',
    role: 'Community Engagement Lead',
    img: 'https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const milestones = [
  { year: '2018', event: 'REDA founded in Dehradun with a focus on rural solar adoption.' },
  { year: '2019', event: 'First community solar project commissioned in Chamoli district.' },
  { year: '2020', event: 'Launched school outreach programmes across 5 hill districts.' },
  { year: '2021', event: 'Crossed 200 residential solar installations milestone.' },
  { year: '2022', event: 'Partnered with UREDA for the state-wide solar awareness campaign.' },
  { year: '2023', event: 'Surpassed 500 installations and 100 communities served.' },
];

export default function About() {
  const { navigate } = useNavigation();

  return (
    <div className="bg-bg-warm pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Uttarakhand mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.25))' }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-solar mb-4">
            About REDA
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight hero-text-shadow">
            Championing Clean Energy Across the Himalayas
          </h1>
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto hero-text-shadow">
            Since 2018, the Renewable Energy Development Association has been working tirelessly to bring affordable, reliable solar energy to every corner of Uttarakhand.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateOnScroll variant="fade-up" className="bg-white rounded-2xl p-8 shadow-card border border-gray-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-deep" />
                </div>
                <h2 className="text-2xl font-extrabold text-brand-primary">Our Mission</h2>
              </div>
              <p className="text-brand-secondary leading-relaxed text-lg">
                To democratise access to clean, affordable solar energy for every household, community, and institution across Uttarakhand — eliminating energy poverty and reducing dependence on fossil fuels through education, advocacy, and direct action.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" delay={2} className="bg-white rounded-2xl p-8 shadow-card border border-gray-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-blue-trust" />
                </div>
                <h2 className="text-2xl font-extrabold text-brand-primary">Our Vision</h2>
              </div>
              <p className="text-brand-secondary leading-relaxed text-lg">
                A carbon-neutral Uttarakhand where every family benefits from clean solar energy by 2040 — a thriving, self-reliant state that serves as a model for sustainable development in India.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fade-up">
            <SectionHeader
              label="Our Values"
              title="Principles That Guide Us"
              subtitle="Our work is grounded in four core values that shape every programme, partnership, and policy position we take."
            />
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {values.map(({ icon: Icon, title, desc, color, bg }, i) => (
              <AnimateOnScroll key={title} variant="fade-up" delay={(Math.min(i + 1, 5)) as 1|2|3|4|5}>
              <div className="text-center p-6 bg-bg-warm rounded-2xl border border-gray-100 h-full">
                <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <h3 className="font-bold text-brand-primary mb-2">{title}</h3>
                <p className="text-sm text-brand-secondary leading-relaxed">{desc}</p>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fade-up">
            <SectionHeader
              label="Our Journey"
              title="Five Years of Impact"
              subtitle="From a small Dehradun office to a state-wide movement — our story is one of persistence, community, and solar power."
            />
          </AnimateOnScroll>
          <div className="relative max-w-3xl mx-auto mt-4">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-solar/20 hidden sm:block" />
            <div className="space-y-6">
              {milestones.map(({ year, event }) => (
                <AnimateOnScroll key={year} variant="slide-left">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-solar rounded-2xl flex items-center justify-center shadow-md">
                    <span className="text-white font-extrabold text-sm">{year}</span>
                  </div>
                  <div className="bg-white rounded-xl p-5 flex-1 shadow-card border border-gray-100">
                    <p className="text-brand-secondary leading-relaxed">{event}</p>
                  </div>
                </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fade-up">
            <SectionHeader
              label="Our Team"
              title="Meet the Changemakers"
              subtitle="Passionate professionals working on the frontlines of Uttarakhand's renewable energy revolution."
            />
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {team.map(({ name, role, img }, i) => (
              <AnimateOnScroll key={name} variant="fade-up" delay={(Math.min(i + 1, 5)) as 1|2|3|4|5}>
              <div className="group text-center">
                <div className="relative mb-4 overflow-hidden rounded-2xl aspect-square">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-deep/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-bold text-brand-primary">{name}</h3>
                <p className="text-sm text-solar font-medium mt-1">{role}</p>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why REDA */}
      <section className="py-20 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll variant="slide-left" as="div">
              <img
                src="https://images.pexels.com/photos/9799712/pexels-photo-9799712.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Community solar project"
                className="rounded-2xl shadow-card-hover w-full object-cover aspect-[4/3]"
              />
            </AnimateOnScroll>
            <AnimateOnScroll variant="slide-right" as="div">
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-solar mb-4">
                Why Choose REDA
              </span>
              <h2 className="text-3xl font-extrabold text-brand-primary mb-6 leading-tight">
                Your Trusted Solar Partner in the Himalayas
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  'Deep expertise in high-altitude solar installations',
                  'Network spanning 12+ districts of Uttarakhand',
                  'Government-certified quality standards',
                  'After-installation support and maintenance',
                  'Subsidies and finance guidance support',
                  'Local team with knowledge of terrain and climate',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-deep mt-0.5 shrink-0" />
                    <span className="text-brand-secondary">{item}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={() => navigate('contact')}>
                Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}

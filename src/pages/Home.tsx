import {
  Sun, Wind, Zap, Users, Building2, Leaf, ArrowRight, CheckCircle,
  BookOpen, Megaphone, GraduationCap, ChevronRight, TrendingUp, Globe, Award
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import AnimateOnScroll from '../components/AnimateOnScroll';
import homeImage from '../assets/home1.webp';

const stats = [
  { value: '500+', label: 'Solar Installations', icon: Sun },
  { value: '100+', label: 'Communities Served', icon: Users },
  { value: '2MW+', label: 'Clean Energy Generated', icon: Zap },
  { value: '12+', label: 'Districts Covered', icon: Globe },
];

const projects = [
  {
    icon: Sun,
    title: 'Residential Solar',
    desc: 'Tailored rooftop solar solutions for homes across Uttarakhand — reduce your electricity bills and carbon footprint.',
    color: 'text-solar',
    bg: 'bg-orange-50',
  },
  {
    icon: Users,
    title: 'Community Solar',
    desc: 'Shared solar infrastructure for villages and communities, bringing clean energy to areas without individual resources.',
    color: 'text-green-deep',
    bg: 'bg-green-50',
  },
  {
    icon: Wind,
    title: 'Off-Grid Solutions',
    desc: 'Reliable solar systems for remote mountain communities and areas with unreliable grid connectivity.',
    color: 'text-blue-trust',
    bg: 'bg-blue-50',
  },
];

const initiatives = [
  {
    icon: GraduationCap,
    title: 'School Outreach',
    desc: 'Solar literacy programs in schools across hill districts, nurturing the next generation of green energy advocates.',
    tag: 'Education',
  },
  {
    icon: BookOpen,
    title: 'Skill Workshops',
    desc: 'Hands-on training workshops empowering local youth and electricians to install and maintain solar systems.',
    tag: 'Training',
  },
  {
    icon: Megaphone,
    title: 'Awareness Campaigns',
    desc: 'State-wide campaigns and community events educating citizens on solar benefits, subsidies, and adoption pathways.',
    tag: 'Outreach',
  },
];

const partners = [
  { label: 'Government Bodies', icon: Building2, desc: 'UREDA, MNRE, State Govt.' },
  { label: 'NGO Networks', icon: Leaf, desc: 'Environmental & development NGOs' },
  { label: 'Private Sector', icon: TrendingUp, desc: 'Solar companies & industries' },
  { label: 'Academic Institutions', icon: Award, desc: 'IITs, Universities, Research bodies' },
];

const benefits = [
  'State government–recognised organisation',
  'Trained field experts across Uttarakhand',
  'End-to-end project support and handholding',
  'Transparent processes and accountable outcomes',
];

export default function Home() {
  const { navigate } = useNavigation();

  return (
    <div className="bg-bg-warm">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={homeImage}
            alt="Solar panels in Uttarakhand"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-deep/90 via-green-deep/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-white/20">
              <Sun className="w-4 h-4 text-solar" />
              Based in Uttarakhand, India
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              Powering a{' '}
              <span className="text-solar">Sustainable</span>{' '}
              Future with Solar Energy
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10">
              Promoting renewable energy adoption across Uttarakhand — from Himalayan villages to urban households. REDA is your trusted partner for a cleaner, greener tomorrow.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => navigate('contact')}>
                Get Solar Consultation
              </Button>
              <Button size="lg" variant="outline-white" onClick={() => navigate('initiatives')}>
                Join Our Initiative
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap gap-6">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-2 text-white/90 text-sm">
                  <CheckCircle className="w-4 h-4 text-solar shrink-0" />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, label, icon: Icon }, i) => (
              <AnimateOnScroll key={label} variant="fade-up" delay={(Math.min(i + 1, 5)) as 1|2|3|4|5} className="text-center group">
                <div className="w-12 h-12 bg-solar/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-solar/20 transition-colors">
                  <Icon className="w-6 h-6 text-solar" />
                </div>
                <div className="text-3xl font-extrabold text-brand-primary mb-1">{value}</div>
                <div className="text-sm text-brand-secondary font-medium">{label}</div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll variant="slide-left" as="div">
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-solar mb-3">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary leading-tight mb-6">
                Dedicated to Renewable Energy Development in Uttarakhand
              </h2>
              <p className="text-brand-secondary text-lg leading-relaxed mb-6">
                The Renewable Energy Development Association (REDA) is a non-profit organisation committed to accelerating the adoption of solar and renewable energy across Uttarakhand. We bridge the gap between policy, technology, and communities.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                  <div className="text-lg font-bold text-green-deep mb-2">Our Mission</div>
                  <p className="text-sm text-brand-secondary leading-relaxed">
                    To democratise access to clean solar energy for every household and community in Uttarakhand.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                  <div className="text-lg font-bold text-blue-trust mb-2">Our Vision</div>
                  <p className="text-sm text-brand-secondary leading-relaxed">
                    A carbon-neutral Uttarakhand powered entirely by renewable energy by 2040.
                  </p>
                </div>
              </div>
              <Button variant="ghost" onClick={() => navigate('about')}>
                Learn More About REDA <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </AnimateOnScroll>
            <AnimateOnScroll variant="slide-right" as="div" className="relative">
              <img
                src="https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Solar panels"
                className="rounded-2xl shadow-card w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card-hover p-5 border border-gray-100">
                <div className="text-2xl font-extrabold text-solar mb-1">Est. 2018</div>
                <div className="text-sm text-brand-secondary">Serving Uttarakhand</div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fade-up">
            <SectionHeader
              label="Our Projects"
              title="Solar Solutions for Every Need"
              subtitle="From individual homes to entire communities, we design, install, and support solar energy systems across Uttarakhand."
            />
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            {projects.map(({ icon: Icon, title, desc, color, bg }, i) => (
              <AnimateOnScroll key={title} variant="fade-up" delay={(Math.min(i + 1, 5)) as 1|2|3|4|5}>
              <div
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer h-full"
                onClick={() => navigate('projects')}
              >
                <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <h3 className="text-xl font-bold text-brand-primary mb-3">{title}</h3>
                <p className="text-brand-secondary text-sm leading-relaxed mb-5">{desc}</p>
                <div className={`flex items-center gap-1 text-sm font-semibold ${color}`}>
                  Learn more <ChevronRight className="w-4 h-4" />
                </div>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll variant="fade-up" className="text-center mt-10">
            <Button variant="ghost" onClick={() => navigate('projects')}>
              View All Projects <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fade-up">
            <SectionHeader
              label="Initiatives"
              title="Building Awareness, One Community at a Time"
              subtitle="Through education, training, and outreach, we empower citizens across Uttarakhand to embrace renewable energy."
            />
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            {initiatives.map(({ icon: Icon, title, desc, tag }, i) => (
              <AnimateOnScroll key={title} variant="fade-up" delay={(Math.min(i + 1, 5)) as 1|2|3|4|5}>
              <div
                className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group h-full"
              >
                <div className="h-2 bg-gradient-to-r from-green-deep to-blue-trust" />
                <div className="p-7">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 bg-solar/10 rounded-xl flex items-center justify-center group-hover:bg-solar/20 transition-colors">
                      <Icon className="w-5 h-5 text-solar" />
                    </div>
                    <span className="text-xs font-semibold text-green-deep bg-green-50 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-primary mb-2">{title}</h3>
                  <p className="text-brand-secondary text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll variant="fade-up" className="text-center mt-10">
            <Button variant="ghost" onClick={() => navigate('initiatives')}>
              Explore All Initiatives <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fade-up">
            <SectionHeader
              label="Partnerships"
              title="Collaborating for Greater Impact"
              subtitle="We work alongside government bodies, NGOs, private companies, and academic institutions to scale solar adoption."
            />
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
            {partners.map(({ label, icon: Icon, desc }, i) => (
              <AnimateOnScroll key={label} variant="fade-up" delay={(Math.min(i + 1, 5)) as 1|2|3|4|5}>
              <div
                className="text-center p-6 bg-bg-warm rounded-2xl border border-gray-100 hover:border-solar/30 hover:shadow-card transition-all duration-200 h-full"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-card flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-green-deep" />
                </div>
                <div className="font-semibold text-brand-primary mb-1">{label}</div>
                <div className="text-xs text-brand-secondary">{desc}</div>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll variant="fade-up" className="text-center mt-10">
            <Button variant="ghost" onClick={() => navigate('partnerships')}>
              View Partnerships <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #1B5E20 0%, #1E3A8A 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll variant="fade-up">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-solar mb-4">
              Take Action Today
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
              Ready to Switch to Solar Energy?
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Whether you're a homeowner, a community leader, or an organisation — REDA is here to guide you every step of the way. Get your free consultation today.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={2} className="flex flex-wrap justify-center gap-4">
            <Button size="lg" onClick={() => navigate('contact')}>
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline-white" onClick={() => navigate('partnerships')}>
              Partner With Us
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}

import { Sun, Users, Wind, CheckCircle, Wrench, BarChart, ShieldCheck, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import AnimateOnScroll from '../components/AnimateOnScroll';

const projects = [
  {
    id: 'residential',
    icon: Sun,
    title: 'Residential Solar',
    tagline: 'Power your home with clean sunshine',
    color: 'text-solar',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    img: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Our residential solar solutions are designed for the unique climate and terrain of Uttarakhand. From Dehradun plains to Munsiyari peaks — we have you covered.',
    features: [
      'Free site assessment and solar feasibility study',
      'Custom system design (1kW – 20kW)',
      'DISCOM-approved grid-tied and hybrid systems',
      'Government subsidy facilitation under PM Surya Ghar',
      'Net metering registration and documentation',
      '10-year after-sales support and AMC',
    ],
  },
  {
    id: 'community',
    icon: Users,
    title: 'Community Solar',
    tagline: 'Shared power for shared progress',
    color: 'text-green-deep',
    bg: 'bg-green-50',
    border: 'border-green-100',
    img: 'https://images.pexels.com/photos/9799712/pexels-photo-9799712.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Community solar enables villages and groups to jointly invest in solar infrastructure, making clean energy accessible even when individual households cannot afford their own systems.',
    features: [
      'Village-level micro-grid design and installation',
      'Gram Sabha coordination and consent facilitation',
      'Shared metering and billing management systems',
      'Training of local solar operators and maintenance staff',
      'Integration with MNRE community energy schemes',
      'Monitoring dashboards for real-time energy tracking',
    ],
  },
  {
    id: 'offgrid',
    icon: Wind,
    title: 'Off-Grid Solutions',
    tagline: 'Energy independence for remote mountains',
    color: 'text-blue-trust',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    img: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Designed for the remotest corners of Uttarakhand where grid connectivity remains a dream. Our off-grid solar systems provide 24/7 reliable power with battery storage.',
    features: [
      'Solar + battery storage hybrid systems',
      'Weather-resistant mountain-grade equipment',
      'Solar pumping for irrigation and drinking water',
      'Remote monitoring via IoT-enabled controllers',
      'Solar street lighting for rural roads and paths',
      'Emergency solar kits for disaster-prone areas',
    ],
  },
];

const processSteps = [
  { step: '01', title: 'Consultation', desc: 'Free assessment of your energy needs and site conditions.' },
  { step: '02', title: 'Design & Quote', desc: 'Custom system design with transparent costing and ROI projections.' },
  { step: '03', title: 'Approvals', desc: 'We handle DISCOM approvals, permits, and subsidy paperwork.' },
  { step: '04', title: 'Installation', desc: 'Certified technicians complete installation within committed timelines.' },
  { step: '05', title: 'Handover', desc: 'Training, documentation, and net metering activation.' },
  { step: '06', title: 'Support', desc: 'Ongoing monitoring, maintenance, and AMC services.' },
];

const whyUs = [
  { icon: ShieldCheck, label: 'Quality Certified', desc: 'All installations meet BIS and MNRE standards.' },
  { icon: Wrench, label: 'Expert Technicians', desc: '100+ certified solar engineers across the state.' },
  { icon: BarChart, label: 'Proven ROI', desc: 'Average payback period of 4–6 years.' },
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
            Our Projects
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight hero-text-shadow">
            Comprehensive Solar Solutions for Uttarakhand
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed hero-text-shadow">
            From individual homes to remote villages, we deliver end-to-end solar energy services tailored to the unique landscape and needs of our state.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {projects.map(({ icon: Icon, title, tagline, color, bg, border, img, desc, features }, idx) => (
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
                  Get a Quote <ArrowRight className="w-4 h-4 ml-2" />
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
              label="Our Process"
              title="Simple Steps to Going Solar"
              subtitle="We handle all the complexity — from paperwork to commissioning. Your only job is to enjoy clean energy."
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

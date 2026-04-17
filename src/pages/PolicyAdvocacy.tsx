import {
  Scale, FileText, Globe, TrendingUp, CheckCircle, ArrowRight,
  Newspaper, Users, BarChart
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import AnimateOnScroll from '../components/AnimateOnScroll';

const focusAreas = [
  {
    icon: Scale,
    title: 'Regulatory Reform',
    color: 'text-blue-trust',
    bg: 'bg-blue-50',
    desc: 'Advocating for simplified DISCOM net-metering processes, single-window clearances, and reduced bureaucratic barriers to solar adoption in Uttarakhand.',
    points: [
      'Simplification of net metering applications',
      'Standardised state-level solar installation guidelines',
      'Streamlined subsidy disbursement timelines',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Solar Finance Policy',
    color: 'text-green-deep',
    bg: 'bg-green-50',
    desc: 'Promoting affordable solar financing through NABARD, co-op banks, and microfinance institutions — making solar accessible for every income bracket.',
    points: [
      'Low-interest solar loans for rural households',
      'NBFC onboarding for solar lease/EMI models',
      'Carbon credit monetisation for community projects',
    ],
  },
  {
    icon: FileText,
    title: 'State Solar Policy',
    color: 'text-solar',
    bg: 'bg-orange-50',
    desc: 'Contributing to the design and revision of Uttarakhand\'s State Solar Policy — ensuring it reflects ground realities and community needs.',
    points: [
      'Representation on state renewable energy committees',
      'Submission of position papers to state legislature',
      'Stakeholder consultations for policy drafting',
    ],
  },
  {
    icon: Globe,
    title: 'National Advocacy',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    desc: 'Representing Uttarakhand\'s unique mountain context at national platforms — ensuring hill state challenges are reflected in national solar policies.',
    points: [
      'Participation in MNRE consultations',
      'Representation at national renewable energy conferences',
      'Coalition building with hill state NGOs',
    ],
  },
];

const publications = [
  {
    type: 'Report',
    title: 'State of Solar Energy in Uttarakhand 2024',
    date: 'January 2024',
    desc: 'A comprehensive annual review of solar adoption progress, challenges, and policy recommendations.',
  },
  {
    type: 'Position Paper',
    title: 'Simplifying Net Metering for Hill States',
    date: 'September 2023',
    desc: 'Policy brief submitted to UREDA recommending procedural reforms for net metering applications.',
  },
  {
    type: 'Research',
    title: 'Off-Grid Solar for Remote Himalayan Communities',
    date: 'May 2023',
    desc: 'Field research on off-grid solar adoption patterns and barriers in high-altitude villages.',
  },
  {
    type: 'Brief',
    title: 'Solar Finance Gap in Rural Uttarakhand',
    date: 'February 2023',
    desc: 'Analysis of credit access challenges for rural solar adoption and policy recommendations.',
  },
];

const typeColors: Record<string, string> = {
  Report: 'bg-blue-50 text-blue-trust',
  'Position Paper': 'bg-green-50 text-green-deep',
  Research: 'bg-orange-50 text-solar',
  Brief: 'bg-rose-50 text-rose-600',
};

const achievements = [
  'Contributed to Uttarakhand Solar Policy revision in 2022',
  "Net metering process simplified following REDA's representation",
  'PM Surya Ghar scheme awareness campaigns in 10 districts',
  'Member of UREDA State Advisory Committee since 2021',
  'Joint submission with 6 NGOs to MNRE hill state task force',
  'Published 12+ policy research papers and briefs',
];

export default function PolicyAdvocacy() {
  const { navigate } = useNavigation();

  return (
    <div className="bg-bg-warm pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Policy advocacy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-trust/88" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-solar mb-4">
            Policy & Advocacy
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Shaping a Solar-Friendly Policy Landscape
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            REDA works alongside policymakers, regulators, and civil society to create an environment where solar energy can thrive — for the benefit of every Uttarakhand citizen.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: FileText, value: '12+', label: 'Policy Papers Published' },
              { icon: Users, value: '6', label: 'Government Committees' },
              { icon: Newspaper, value: '3', label: 'Policy Reforms Contributed To' },
              { icon: BarChart, value: '5+', label: 'Years of Advocacy' },
            ].map(({ icon: Icon, value, label }, idx) => (
              <AnimateOnScroll key={label} variant="fade-up" delay={(Math.min(idx + 1, 5)) as 1|2|3|4|5}>
                <div className="w-11 h-11 bg-solar/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-solar" />
                </div>
                <div className="text-2xl font-extrabold text-brand-primary">{value}</div>
                <div className="text-sm text-brand-secondary mt-1">{label}</div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fade-up">
            <SectionHeader
              label="Focus Areas"
              title="Our Policy Priorities"
              subtitle="We focus our advocacy efforts where policy change can have the greatest impact on solar adoption."
            />
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            {focusAreas.map(({ icon: Icon, title, color, bg, desc, points }, idx) => (
              <AnimateOnScroll key={title} variant="fade-up" delay={(Math.min(idx + 1, 5)) as 1|2|3|4|5}>
              <div className="bg-white rounded-2xl p-7 shadow-card border border-gray-100 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${color}`} />
                  </div>
                  <h3 className="text-xl font-extrabold text-brand-primary">{title}</h3>
                </div>
                <p className="text-brand-secondary leading-relaxed mb-5 text-sm">{desc}</p>
                <ul className="space-y-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-deep mt-0.5 shrink-0" />
                      <span className="text-sm text-brand-secondary">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll variant="slide-left" as="div">
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-solar mb-3">
                Impact
              </span>
              <h2 className="text-3xl font-extrabold text-brand-primary mb-6 leading-tight">
                Measurable Policy Impact
              </h2>
              <p className="text-brand-secondary leading-relaxed mb-8">
                Our advocacy isn't theoretical — we track concrete outcomes and ensure our work translates into real policy changes that benefit communities across Uttarakhand.
              </p>
              <ul className="space-y-3">
                {achievements.map((a) => (
                  <li key={a} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-deep shrink-0 mt-0.5" />
                    <span className="text-brand-secondary">{a}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
            <AnimateOnScroll variant="slide-right" as="div">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Policy meetings"
                className="rounded-2xl shadow-card-hover w-full object-cover aspect-[4/3]"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fade-up">
            <SectionHeader
              label="Knowledge Hub"
              title="Research & Publications"
              subtitle="Our policy research is freely available for download. We believe in open knowledge for greater impact."
            />
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 gap-5 mt-4">
            {publications.map(({ type, title, date, desc }, idx) => (
              <AnimateOnScroll
                key={title}
                variant="fade-up"
                delay={(Math.min(idx + 1, 5)) as 1|2|3|4|5}
              >
              <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 hover:shadow-card-hover transition-shadow group cursor-pointer h-full">
                <div className="flex items-start justify-between mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${typeColors[type]}`}>{type}</span>
                  <span className="text-xs text-brand-secondary">{date}</span>
                </div>
                <h3 className="font-bold text-brand-primary text-lg mb-2 group-hover:text-green-deep transition-colors">{title}</h3>
                <p className="text-sm text-brand-secondary leading-relaxed mb-4">{desc}</p>
                <div className="flex items-center gap-1 text-sm font-semibold text-solar">
                  Download PDF <ArrowRight className="w-4 h-4" />
                </div>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll variant="fade-up" className="mt-10 text-center">
            <Button variant="ghost" onClick={() => navigate('contact')}>
              Request More Publications <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}

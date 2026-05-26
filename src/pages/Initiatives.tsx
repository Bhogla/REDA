import {
  GraduationCap, BookOpen, Megaphone, Zap,
  CheckCircle, ArrowRight, Calendar, MapPin
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import AnimateOnScroll from '../components/AnimateOnScroll';
import heroImage from '../assets/initiative.jpg';
import initiative1Image from '../assets/initiative1.jpg';
import initiative2Image from '../assets/initiative2.jpg';
import initiative3Image from '../assets/initiative3.jpg';

const initiatives = [
  {
    icon: BookOpen,
    title: 'Stakeholder Engagement & Capacity Building',
    tag: 'ENGAGEMENT',
    color: 'text-green-deep',
    bg: 'bg-green-50',
    img: initiative1Image,
    summary: 'Fostering stakeholder collaboration and renewable energy awareness.',
    desc: 'REDA conducts engagement sessions and collaborative initiatives that strengthen awareness, encourage participation, and support knowledge exchange across the renewable ecosystem.',
    highlights: [
      'Renewable awareness workshops',
      'Member engagement sessions',
      'Knowledge-sharing initiatives',
      'Community participation activities',
      'Public interaction forums',
      'Statewide collaborative outreach',
    ],
    districts: ['Across Uttarakhand'],
    ctaText: 'Explore Initiative',
  },
  {
    icon: GraduationCap,
    title: 'Community Awareness & Public Participation',
    tag: 'COMMUNITY',
    color: 'text-solar',
    bg: 'bg-orange-50',
    img: initiative2Image,
    summary: 'Promoting understanding of renewable opportunities and public participation.',
    desc: 'Through outreach initiatives and local engagement, REDA promotes understanding of renewable opportunities and encourages informed participation.',
    highlights: [
      'Awareness sessions',
      'Community interaction programs',
      'Renewable education activities',
      'Public engagement initiatives',
      'Local outreach efforts',
    ],
    districts: ['Across Uttarakhand'],
    ctaText: 'Learn More',
  },
  {
    icon: Megaphone,
    title: 'Policy Awareness & Advocacy',
    tag: 'ADVOCACY',
    color: 'text-blue-trust',
    bg: 'bg-blue-50',
    img: initiative3Image,
    summary: 'Fostering transparent communication and stakeholder coordination.',
    desc: 'REDA undertakes awareness and engagement initiatives to encourage transparent communication, informed participation, and stakeholder coordination on renewable energy matters.',
    highlights: [
      'Stakeholder representation',
      'Public communication initiatives',
      'Policy awareness efforts',
      'Government engagement support',
      'Renewable participation dialogue',
    ],
    districts: ['Across Uttarakhand'],
    ctaText: 'Explore Initiative',
  },
];

const upcomingEvents = [
  {
    title: 'Community Awareness Session',
    date: 'May 12, 2026',
    location: 'Dehradun',
    type: 'Awareness',
  },
  {
    title: 'Stakeholder Interaction',
    date: 'May 18, 2026',
    location: 'Haldwani',
    type: 'Engagement',
  },
  {
    title: 'Renewable Participation Drive',
    date: 'May 20, 2026',
    location: 'Almora',
    type: 'Outreach',
  },
  {
    title: 'Public Engagement Initiative',
    date: 'May 24, 2026',
    location: 'Uttarkashi',
    type: 'Advocacy',
  },
];

const tagColors: Record<string, string> = {
  Education: 'bg-orange-50 text-solar',
  Training: 'bg-green-50 text-green-deep',
  Outreach: 'bg-blue-50 text-blue-trust',
  ENGAGEMENT: 'bg-green-50 text-green-deep',
  COMMUNITY: 'bg-orange-50 text-solar',
  ADVOCACY: 'bg-blue-50 text-blue-trust',
  Awareness: 'bg-orange-50 text-solar',
  Engagement: 'bg-green-50 text-green-deep',
  Advocacy: 'bg-blue-50 text-blue-trust',
};

export default function Initiatives() {
  const { navigate } = useNavigation();

  return (
    <div className="bg-bg-warm pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Community initiative"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-deep/88" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-solar mb-4">
            OUR INITIATIVES
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight hero-text-shadow">
            Driving Awareness. Enabling Participation. Creating Impact.
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed hero-text-shadow">
            REDA initiatives focus on renewable energy awareness, stakeholder engagement, public participation, and collaborative action across Uttarakhand to support sustainable energy development. Building awareness, strengthening participation, and supporting renewable initiatives across communities.
          </p>
        </div>
      </section>



      {/* Initiative Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {initiatives.map(({ icon: Icon, title, tag, color, bg, img, summary, desc, highlights, districts, ctaText }, idx) => (
            <AnimateOnScroll key={title} variant="fade-up" delay={(Math.min(idx + 1, 5)) as 1|2|3|4|5}>
            <div
              className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? '' : ''}`}
            >
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-11 h-11 ${bg} rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tagColors[tag]}`}>{tag}</span>
                </div>
                <h2 className="text-3xl font-extrabold text-brand-primary mb-3">{title}</h2>
                <p className={`text-sm font-medium ${color} mb-4`}>{summary}</p>
                <p className="text-brand-secondary leading-relaxed mb-6">{desc}</p>
                <ul className="space-y-2 mb-6">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-deep mt-0.5 shrink-0" />
                      <span className="text-sm text-brand-secondary">{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-6">
                  {districts.map((d) => (
                    <span key={d} className="flex items-center gap-1 text-xs bg-bg-warm border border-gray-200 rounded-full px-3 py-1 text-brand-secondary">
                      <MapPin className="w-3 h-3 text-solar" /> {d}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" onClick={() => navigate('contact')}>
                  {ctaText || 'Get Involved'} <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                <img
                  src={img}
                  alt={title}
                  className="rounded-2xl shadow-card-hover w-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fade-up">
            <SectionHeader
              label="ACTIVITIES"
              title="Recent Activities & Community Engagement"
              subtitle="Explore REDA’s recent awareness initiatives, stakeholder interactions, and renewable engagement activities across Uttarakhand."
            />
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
            {upcomingEvents.map(({ title, date, location, type }, idx) => (
              <AnimateOnScroll key={title} variant="fade-up" delay={(Math.min(idx + 1, 5)) as 1|2|3|4|5}>
              <div className="bg-bg-warm rounded-2xl p-6 border border-gray-100 hover:shadow-card transition-shadow">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${tagColors[type]} mb-4 inline-block`}>
                  {type}
                </span>
                <h3 className="font-bold text-brand-primary mb-3 leading-snug">{title}</h3>
                <div className="flex items-center gap-2 text-sm text-brand-secondary mb-2">
                  <Calendar className="w-4 h-4 text-solar" /> {date}
                </div>
                <div className="flex items-center gap-2 text-sm text-brand-secondary">
                  <MapPin className="w-4 h-4 text-solar" /> {location}
                </div>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll variant="fade-up" className="mt-10 text-center">
            <Button onClick={() => navigate('contact')}>
              View Activities <Zap className="w-4 h-4 ml-2" />
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}

import {
  GraduationCap, BookOpen, Megaphone, Users, Sun, Zap,
  CheckCircle, ArrowRight, Calendar, MapPin
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import AnimateOnScroll from '../components/AnimateOnScroll';

const initiatives = [
  {
    icon: BookOpen,
    title: 'Workshops & Training',
    tag: 'Training',
    color: 'text-green-deep',
    bg: 'bg-green-50',
    img: 'https://images.pexels.com/photos/8923811/pexels-photo-8923811.jpeg?auto=compress&cs=tinysrgb&w=800',
    summary: 'Conducting skill development programs for solar adoption.',
    desc: 'Our specialized workshops empower local youth and electricians with the technical skills needed for solar installation and maintenance, creating livelihoods while accelerating clean energy uptake.',
    highlights: [
      'Technical skills for local electricians',
      'Youth empowerment and job readiness',
      'Hands-on installation experience',
      'Certified training programs',
      'Support for women in renewable energy',
    ],
    districts: ['All 13 districts covered'],
  },
  {
    icon: GraduationCap,
    title: 'School Outreach',
    tag: 'Education',
    color: 'text-solar',
    bg: 'bg-orange-50',
    img: 'https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=800',
    summary: 'Educating students about renewable energy and sustainability.',
    desc: 'Through interactive school sessions, we introduce students to the fundamentals of solar energy and the importance of environmental conservation, fostering a generation of clean energy advocates.',
    highlights: [
      'Interactive classroom sessions',
      'Renewable energy science kits',
      'Sustainability workshops for teachers',
      'State-wide solar science fairs',
      'Environmental awareness awards',
    ],
    districts: ['Dehradun', 'Haridwar', 'Nainital', 'Chamoli', 'Almora'],
  },
  {
    icon: Megaphone,
    title: 'Awareness Campaigns',
    tag: 'Outreach',
    color: 'text-blue-trust',
    bg: 'bg-blue-50',
    img: 'https://images.pexels.com/photos/3810756/pexels-photo-3810756.jpeg?auto=compress&cs=tinysrgb&w=800',
    summary: 'Promoting solar energy adoption through public initiatives.',
    desc: 'Our public awareness campaigns simplify solar energy for the general public, using community meetings, radio, and digital media to demonstrate the long-term benefits of clean power for Uttarakhand.',
    highlights: [
      'Public community meetings (Gram Sabhas)',
      'Digital awareness materials',
      'Informational radio broadcasts',
      'Multilingual solar adoption guides',
      'Community-led solar forums',
    ],
    districts: ['Statewide coverage'],
  },
];

const upcomingEvents = [
  {
    title: 'Solar Science Fair 2025',
    date: 'March 15, 2025',
    location: 'Dehradun',
    type: 'Education',
  },
  {
    title: 'Skill Workshop – Batch 24',
    date: 'April 1–5, 2025',
    location: 'Haldwani',
    type: 'Training',
  },
  {
    title: 'Solar Utsav Almora',
    date: 'April 20, 2025',
    location: 'Almora',
    type: 'Outreach',
  },
  {
    title: 'Women in Solar Workshop',
    date: 'May 10, 2025',
    location: 'Uttarkashi',
    type: 'Training',
  },
];

const tagColors: Record<string, string> = {
  Education: 'bg-orange-50 text-solar',
  Training: 'bg-green-50 text-green-deep',
  Outreach: 'bg-blue-50 text-blue-trust',
};

export default function Initiatives() {
  const { navigate } = useNavigation();

  return (
    <div className="bg-bg-warm pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3810756/pexels-photo-3810756.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Community initiative"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-deep/88" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-solar mb-4">
            Our Initiatives
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight hero-text-shadow">
            Empowering Communities Through Renewable Energy
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed hero-text-shadow">
            Our initiatives go beyond installations — we build knowledge, skills, and community-level momentum for a solar-powered Uttarakhand.
          </p>
        </div>
      </section>

      {/* Impact row */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: GraduationCap, value: '200+', label: 'Schools Reached' },
              { icon: Users, value: '1,500+', label: 'People Trained' },
              { icon: Megaphone, value: '50+', label: 'Villages Covered' },
              { icon: Sun, value: '8', label: 'Districts Active' },
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

      {/* Initiative Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {initiatives.map(({ icon: Icon, title, tag, color, bg, img, summary, desc, highlights, districts }, idx) => (
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
                  Get Involved <ArrowRight className="w-4 h-4 ml-2" />
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
              label="Calendar"
              title="Upcoming Events & Programmes"
              subtitle="Join us at our upcoming workshops, campaigns, and outreach events across Uttarakhand."
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
              Register for an Event <Zap className="w-4 h-4 ml-2" />
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}

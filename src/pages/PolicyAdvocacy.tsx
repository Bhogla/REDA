import { useState } from 'react';
import {
  Search, Megaphone, Handshake, Globe, CheckCircle,
  Users, Building2, TrendingUp
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import AnimateOnScroll from '../components/AnimateOnScroll';
import policycard1 from '../assets/policy/policycard1.JPG';
import policycard2 from '../assets/policy/policycard2.JPG';
import policycard3 from '../assets/policy/policycard3.JPG';
import policycard4 from '../assets/policy/policycard4.JPG';
import policycard5 from '../assets/policy/policycard5.JPG';
import policycard6 from '../assets/policy/policycard6.JPG';
import policycard7 from '../assets/policy/policycard7.JPG';
import policycard8 from '../assets/policy/policycard8.JPG';
import policyHero from '../assets/policy/policy.jpg';
import policyImpact from '../assets/policy/impact.jpg';

const focusAreas = [
  {
    icon: Search,
    title: 'Government Engagement',
    color: 'text-blue-trust',
    bg: 'bg-blue-50',
    desc: 'Engaging with government departments and agencies to communicate stakeholder concerns, support renewable energy development, and encourage constructive dialogue across Uttarakhand.',
    points: [
      'Engaging with government departments',
      'Supporting renewable energy development',
      'Encouraging constructive dialogue',
    ],
  },
  {
    icon: Megaphone,
    title: 'Stakeholder Representation',
    color: 'text-green-deep',
    bg: 'bg-green-50',
    desc: 'Representing renewable energy professionals, vendors, entrepreneurs, consumers, and industry participants by bringing their concerns and recommendations to relevant authorities.',
    points: [
      'Representing professionals and vendors',
      'Bringing concerns to relevant authorities',
      'Unified voice for recommendations',
    ],
  },
  {
    icon: Handshake,
    title: 'Public Awareness',
    color: 'text-solar',
    bg: 'bg-orange-50',
    desc: 'Promoting awareness about rooftop solar, clean energy adoption, EV infrastructure, government schemes, and sustainable energy opportunities through outreach initiatives.',
    points: [
      'Rooftop solar adoption guidance',
      'EV infrastructure scheme promotion',
      'Sustainable outreach initiatives',
    ],
  },
  {
    icon: Globe,
    title: 'Industry Collaboration',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    desc: 'Building partnerships between industry stakeholders, institutions, local communities, and government bodies to strengthen Uttarakhand’s renewable energy ecosystem.',
    points: [
      'Building strong partnerships',
      'Connecting communities and government',
      'Ecosystem development campaigns',
    ],
  },
];

const achievements = [
  'Renewable energy awareness campaigns across Uttarakhand',
  'PM Surya Ghar awareness and stakeholder support initiatives',
  'Government engagement regarding renewable energy implementation challenges',
  'Stakeholder consultations and industry discussions',
  'Public outreach through media, awareness campaigns, and community engagement',
  'Support for clean energy adoption and sustainable development',
];

const mediaEngagement = [
  {
    title: 'PM Surya Ghar Subsidy Clarification',
    category: 'PM Surya Ghar',
    desc: 'Official REDA poster clarifying subsidy concerns, rules, and Direct Benefit Transfer processes for consumers.',
    img: policycard1,
    aspect: 'aspect-[3/4]',
    fit: 'object-contain',
  },
  {
    title: 'Together, We Power Change',
    category: 'Stakeholder Outreach',
    desc: 'Official REDA poster highlighting ecosystem collaboration and renewable dialogues across Uttarakhand.',
    img: policycard2,
    aspect: 'aspect-[3/4]',
    fit: 'object-contain',
  },
  {
    title: 'EV Charging Policy Awareness',
    category: 'EV Charging',
    desc: 'Official REDA poster raising awareness regarding EV charging guidelines, corridors, and green mobility grids.',
    img: policycard3,
    aspect: 'aspect-[3/4]',
    fit: 'object-contain',
  },
  {
    title: 'Press Conferences',
    category: 'Media Event',
    desc: 'REDA representatives interacting with media to communicate renewable energy developments, stakeholder concerns, and awareness initiatives.',
    img: policycard4,
    aspect: 'aspect-video',
    fit: 'object-cover',
  },
  {
    title: 'Newspaper Coverage',
    category: 'Press Release',
    desc: 'Media coverage highlighting REDA’s renewable energy advocacy, awareness campaigns, and stakeholder engagement activities.',
    img: policycard5,
    aspect: 'aspect-video',
    fit: 'object-cover',
  },
  {
    title: 'Awareness Campaign Posters',
    category: 'Campaign Poster',
    desc: 'Educational and awareness-focused creatives promoting renewable energy adoption, government schemes, rooftop solar initiatives, and sustainability.',
    img: policycard6,
    aspect: 'aspect-[3/4]',
    fit: 'object-contain',
  },
  {
    title: 'Public Announcements',
    category: 'Announcement',
    desc: 'Public communications, notices, stakeholder updates, and information related to renewable energy initiatives and implementation challenges.',
    img: policycard7,
    aspect: 'aspect-[4/3]',
    fit: 'object-cover',
  },
  {
    title: 'Renewable Energy Awareness Creatives',
    category: 'Digital Creative',
    desc: 'Visual educational content designed to increase public awareness regarding clean energy, sustainability, and renewable energy opportunities.',
    img: policycard8,
    aspect: 'aspect-square',
    fit: 'object-cover',
  },
];

export default function PolicyAdvocacy() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <div className="bg-bg-warm pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={policyHero}
            alt="REDA Policy Advocacy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-trust/45" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-solar mb-4">
            Policy & Advocacy
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight hero-text-shadow">
            Advocating Renewable Energy Growth in Uttarakhand
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed hero-text-shadow">
            REDA serves as a bridge between renewable energy stakeholders, government institutions, industry professionals, and citizens by promoting awareness, constructive dialogue, and sustainable energy development across Uttarakhand.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Handshake, value: '✓', label: 'Government Engagement' },
              { icon: Users, value: '✓', label: 'Stakeholder Representation' },
              { icon: Megaphone, value: '✓', label: 'Public Awareness Initiatives' },
              { icon: Globe, value: '✓', label: 'Renewable Energy Advocacy' },
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

      {/* What We Do */}
      <section className="py-20 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fade-up">
            <SectionHeader
              label="What We Do"
              title="Strengthening Uttarakhand’s Renewable Energy Ecosystem"
              subtitle="REDA acts as an active catalyst for green energy development, collaborative dialogue, and sustainable growth across the state."
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: Building2,
                title: 'Government Dialogue',
                desc: 'Facilitating communication with government departments and authorities regarding renewable energy initiatives and stakeholder concerns.',
                color: 'text-blue-trust',
                bg: 'bg-blue-50',
              },
              {
                icon: Users,
                title: 'Stakeholder Representation',
                desc: 'Representing renewable energy professionals, entrepreneurs, vendors, and consumers across Uttarakhand.',
                color: 'text-green-deep',
                bg: 'bg-green-50',
              },
              {
                icon: Megaphone,
                title: 'Public Awareness',
                desc: 'Promoting awareness about renewable energy schemes, rooftop solar adoption, sustainability, and clean energy opportunities.',
                color: 'text-solar',
                bg: 'bg-orange-50',
              },
              {
                icon: TrendingUp,
                title: 'Industry Development',
                desc: 'Supporting the growth of Uttarakhand’s renewable energy ecosystem through collaboration and engagement.',
                color: 'text-rose-600',
                bg: 'bg-rose-50',
              },
            ].map(({ icon: Icon, title, desc, color, bg }, idx) => (
              <AnimateOnScroll key={title} variant="fade-up" delay={(Math.min(idx + 1, 5)) as 1|2|3|4|5}>
                <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover border border-gray-100 hover:border-brand-primary/10 transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full group">
                  <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-brand-primary mb-3 group-hover:text-green-deep transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-brand-secondary text-sm leading-relaxed flex-grow">
                    {desc}
                  </p>
                </div>
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
                Advocacy & Engagement Highlights
              </h2>
              <p className="text-brand-secondary leading-relaxed mb-8">
                REDA’s efforts focus on awareness, stakeholder engagement, government communication, and supporting renewable energy development across Uttarakhand.
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
                src={policyImpact}
                alt="Advocacy and Engagement Highlights"
                className="rounded-2xl shadow-card-hover w-full object-cover aspect-[4/3]"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Key Advocacy Milestones */}
      <section className="py-20 bg-bg-warm border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fade-up">
            <SectionHeader
              label="Milestones"
              title="Key Advocacy Milestones"
              subtitle="REDA's evolutionary journey in driving key policy shifts, community engagement, and clean mobility campaigns across Uttarakhand."
            />
          </AnimateOnScroll>

          {/* Timeline Wrapper */}
          <div className="mt-16 relative">
            {/* Desktop Horizontal Line */}
            <div className="hidden lg:block absolute top-[22px] left-[10%] right-[10%] h-0.5 bg-gray-200">
              <div className="absolute top-0 left-0 h-full bg-solar w-3/4 animate-pulse" /> {/* Progress indicator */}
            </div>

            {/* Timeline Items */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
              {[
                {
                  date: 'Phase 1',
                  title: 'Renewable Energy Awareness Campaigns',
                  desc: 'Statewide awareness initiatives promoting renewable energy adoption, sustainability, and public participation across Uttarakhand.',
                  icon: Megaphone,
                },
                {
                  date: 'Phase 2',
                  title: 'Stakeholder Consultations',
                  desc: 'Facilitating dialogue between renewable energy professionals, vendors, consumers, and industry participants to address sector challenges and opportunities.',
                  icon: Users,
                },
                {
                  date: 'Phase 3',
                  title: 'PM Surya Ghar Representation Activities',
                  desc: 'Supporting stakeholder concerns related to PM Surya Ghar Muft Bijli Yojana and facilitating communication with relevant authorities.',
                  icon: Handshake,
                },
                {
                  date: 'Phase 4',
                  title: 'Government Engagement Initiatives',
                  desc: 'Engaging with government departments and officials to communicate stakeholder concerns and implementation challenges affecting the renewable energy sector.',
                  icon: Building2,
                },
                {
                  date: 'Phase 5',
                  title: 'EV Policy Awareness Activities',
                  desc: 'Promoting awareness and discussion around EV charging infrastructure, clean mobility, and emerging energy opportunities in Uttarakhand.',
                  icon: Globe,
                },
              ].map(({ date, title, desc, icon: Icon }, idx) => (
                <AnimateOnScroll key={title} variant="fade-up" delay={(Math.min(idx + 1, 5)) as 1|2|3|4|5}>
                  {/* Vertical layout on mobile / Horizontal spacing on desktop */}
                  <div className="flex flex-col lg:items-center text-left lg:text-center relative group">
                    {/* Mobile Vertical Line */}
                    <div className="lg:hidden absolute left-[22px] top-10 bottom-[-48px] w-0.5 bg-gray-200" />
                    
                    {/* Icon Node Container */}
                    <div className="flex items-center lg:flex-col lg:justify-center">
                      <div className="w-11 h-11 bg-white border-2 border-solar text-solar rounded-full flex items-center justify-center font-extrabold text-sm shadow-md group-hover:scale-110 group-hover:bg-solar group-hover:text-white transition-all duration-300 z-20 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="ml-4 lg:ml-0 lg:mt-3 text-xs font-bold uppercase tracking-wider text-solar bg-solar/10 px-2.5 py-1 rounded-full">
                        {date}
                      </span>
                    </div>

                    {/* Content Box */}
                    <div className="ml-16 lg:ml-0 lg:mt-6 bg-white lg:bg-transparent p-5 lg:p-0 rounded-2xl border border-gray-100 lg:border-none shadow-sm lg:shadow-none hover:shadow-card lg:hover:shadow-none transition-all duration-300">
                      <h4 className="text-base font-extrabold text-brand-primary mb-2 group-hover:text-solar transition-colors duration-300">
                        {title}
                      </h4>
                      <p className="text-brand-secondary text-xs leading-relaxed max-w-xs mx-auto">
                        {desc}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REDA Awareness & Advocacy Media Hub */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fade-up">
            <SectionHeader
              label="Media Hub"
              title="REDA Awareness & Advocacy Media Hub"
              subtitle="Showcasing REDA’s awareness campaigns, policy communications, stakeholder outreach activities, public information materials, renewable energy initiatives, and advocacy-related publications across Uttarakhand."
            />
          </AnimateOnScroll>

          {/* Responsive Poster Gallery Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaEngagement.map((item, idx) => (
              <AnimateOnScroll key={item.title} variant="fade-up" delay={(Math.min(idx + 1, 5)) as 1|2|3|4|5}>
                <div
                  onClick={() => setLightboxIdx(idx)}
                  className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover border border-gray-100 transition-all duration-300 transform hover:-translate-y-1.5 group cursor-pointer flex flex-col h-full"
                >
                  {/* Fixed Image Container */}
                  <div className="relative w-full h-[300px] sm:h-[360px] lg:h-[420px] bg-[#f8f8f8] flex items-center justify-center overflow-hidden rounded-t-2xl border-b border-gray-100/50">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-contain object-center group-hover:scale-102 transition-transform duration-500 p-4"
                    />
                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-solar/95 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm z-10">
                      {item.category}
                    </div>
                    {/* Hover magnification overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                      <span className="text-white text-3xl font-light">⤢</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="pt-3.5 px-5 pb-5 flex flex-col flex-grow">
                    <h3 className="text-[17px] font-bold text-brand-primary group-hover:text-green-deep transition-colors duration-300 line-clamp-2 leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-brand-secondary text-xs leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIdx !== null && (
        <div
          onClick={() => setLightboxIdx(null)}
          className="fixed inset-0 z-[9999] bg-black/95 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 animate-fade-in"
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIdx(null)}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white flex items-center justify-center text-xl transition-all active:scale-95 z-50 cursor-pointer"
          >
            ✕
          </button>

          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full flex flex-col items-center"
          >
            <img
              src={mediaEngagement[lightboxIdx].img}
              alt={mediaEngagement[lightboxIdx].title}
              className="max-h-[70vh] max-w-full object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-6 text-center max-w-xl text-white">
              <span className="text-solar text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-solar/10 rounded-full">
                {mediaEngagement[lightboxIdx].category}
              </span>
              <h3 className="text-xl font-bold mt-3">
                {mediaEngagement[lightboxIdx].title}
              </h3>
              <p className="text-white/70 text-sm mt-2 leading-relaxed">
                {mediaEngagement[lightboxIdx].desc}
              </p>
            </div>

            {/* Navigation buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIdx(lightboxIdx === 0 ? mediaEngagement.length - 1 : lightboxIdx - 1);
                }}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer"
              >
                ←
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIdx(lightboxIdx === mediaEngagement.length - 1 ? 0 : lightboxIdx + 1);
                }}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

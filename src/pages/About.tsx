import { Target, Eye, Heart, Users, Award, Leaf, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import AnimateOnScroll from '../components/AnimateOnScroll';
import peopleImage from '../assets/people.jpg';
import atulBaluniImage from '../assets/atulbaluni.jpg';
import alokBahugunaImage from '../assets/alokbahuguna.jpg';
import ashwaniChaudharyImage from '../assets/ashwanichaudhary.jpg';
import aboutImage from '../assets/about.jpg';

const values = [
  {
    icon: Leaf,
    title: 'Sustainability',
    desc: 'Supporting long-term environmental responsibility and sustainable energy awareness initiatives.',
    color: 'text-green-deep',
    bg: 'bg-green-50',
  },
  {
    icon: Users,
    title: 'Community First',
    desc: 'Encouraging community participation and public engagement in renewable energy awareness efforts.',
    color: 'text-blue-trust',
    bg: 'bg-blue-50',
  },
  {
    icon: Award,
    title: 'Integrity',
    desc: 'Promoting transparency, responsible communication, and accountable institutional practices.',
    color: 'text-solar',
    bg: 'bg-orange-50',
  },
  {
    icon: Heart,
    title: 'Inclusivity',
    desc: 'Advocating accessible renewable energy awareness and sustainability participation for all communities.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
];



const milestones = [
  { year: '2023', event: 'REDA was established in Uttarakhand as a renewable energy awareness association focused on sustainability initiatives, stakeholder engagement, and community participation.' },
  { year: '2024', event: 'Participated in awareness initiatives, public outreach activities, and collaborative renewable energy discussions across communities and institutions in Uttarakhand.' },
  { year: '2025', event: 'Actively engaged in public awareness and stakeholder communication regarding PM Surya Ghar Yojana subsidy-related concerns and renewable energy policy discussions in Uttarakhand.' },
  { year: '2026', event: 'Expanded renewable energy awareness efforts through public outreach, media engagement, stakeholder participation, and sustainability-focused advocacy initiatives across Uttarakhand.' },
];

export default function About() {
  const { navigate } = useNavigation();

  return (
    <div className="bg-bg-warm pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${aboutImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.25))' }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-solar mb-4">
            ABOUT REDA
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight hero-text-shadow">
            Advancing Renewable Energy Awareness Across Uttarakhand
          </h1>
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto hero-text-shadow">
            Renewable Energy Development Association (REDA) is a non-commercial association dedicated to renewable energy awareness, sustainability initiatives, stakeholder engagement, and community-focused participation across Uttarakhand.
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
                To promote renewable energy awareness, encourage sustainable practices, and support collaborative initiatives that contribute toward a cleaner and more informed energy ecosystem.
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
                To build a more sustainable and energy-aware Uttarakhand where communities actively participate in renewable energy awareness and environmental responsibility.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Intro & Role */}
      <section className="pt-20 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll variant="slide-left">
              <h2 className="text-3xl font-extrabold text-brand-primary mb-6">Who We Are</h2>
              <p className="text-brand-secondary text-lg leading-relaxed">
                The Renewable Energy Development Association (REDA) is a registered non-commercial association working to promote renewable energy awareness, sustainability initiatives, stakeholder engagement, and public participation across Uttarakhand. REDA serves as a collaborative platform encouraging dialogue, awareness, and collective efforts toward a cleaner and more sustainable future.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variant="slide-right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Community Awareness', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
                  { title: 'Stakeholder Engagement', icon: Award, color: 'text-green-600', bg: 'bg-green-50' },
                  { title: 'Institutional Collaboration', icon: Target, color: 'text-orange-600', bg: 'bg-orange-50' },
                  { title: 'Sustainability Initiatives', icon: Leaf, color: 'text-solar', bg: 'bg-solar/10' },
                ].map((role) => (
                  <div key={role.title} className={`${role.bg} p-6 rounded-2xl border border-black/5`}>
                    <role.icon className={`w-6 h-6 ${role.color} mb-3`} />
                    <h3 className="font-bold text-brand-primary text-sm leading-tight">{role.title}</h3>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pt-8 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fade-up">
            <SectionHeader
              label="Our Values"
              title="Principles That Guide Us"
              subtitle="Our initiatives and activities are guided by values that support sustainability, community participation, transparency, and responsible renewable energy awareness across Uttarakhand."
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
              title="Our Journey Since 2023"
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
              title="Leadership & Community Participation"
              subtitle="Meet the individuals and collaborative initiatives contributing towards renewable energy awareness, stakeholder engagement, and sustainability efforts across Uttarakhand."
            />
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {/* Card 1 */}
            <AnimateOnScroll variant="fade-up" delay={1}>
              <div className="group text-center flex flex-col h-full">
                <div className="relative mb-4 overflow-hidden rounded-2xl aspect-square shrink-0">
                  <img
                    src={atulBaluniImage}
                    alt="Mr. Atul Baluni"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-deep/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-primary text-lg">Mr. Atul Baluni</h3>
                  <p className="text-sm text-solar font-medium mt-1">Founder & President</p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Card 2 */}
            <AnimateOnScroll variant="fade-up" delay={2}>
              <div className="group text-center flex flex-col h-full">
                <div className="relative mb-4 overflow-hidden rounded-2xl aspect-square shrink-0">
                  <img
                    src={alokBahugunaImage}
                    alt="Mr. Alok Bahuguna"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-deep/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-primary text-lg">Mr. Alok Bahuguna</h3>
                  <p className="text-sm text-solar font-medium mt-1">Director – Field Operations</p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Card 3 */}
            <AnimateOnScroll variant="fade-up" delay={3}>
              <div className="group text-center flex flex-col h-full">
                <div className="relative mb-4 overflow-hidden rounded-2xl aspect-square shrink-0">
                  <img
                    src={ashwaniChaudharyImage}
                    alt="Mr. Ashwani Chaudhary"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-deep/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-primary text-lg">Mr. Ashwani Chaudhary</h3>
                  <p className="text-sm text-solar font-medium mt-1">Core Team Member</p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Card 4 */}
            <AnimateOnScroll variant="fade-up" delay={4}>
              <div className="group text-center flex flex-col h-full">
                <div className="relative mb-4 overflow-hidden rounded-2xl aspect-square shrink-0">
                  <img
                    src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Mr. Varun Mittal"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-deep/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-primary text-lg">Mr. Varun Mittal</h3>
                  <p className="text-sm text-solar font-medium mt-1">Core Team Member</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Why REDA */}
      <section className="py-16 sm:py-24 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fade-up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest text-solar mb-3 sm:mb-4">
              WHY CHOOSE REDA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-primary leading-tight">
              Supporting Renewable Energy Awareness Across Uttarakhand
            </h2>
          </AnimateOnScroll>

          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            <AnimateOnScroll variant="slide-left" as="div" className="w-full flex justify-center">
              <img
                src={peopleImage}
                alt="Community awareness and stakeholder engagement"
                className="rounded-2xl shadow-card-hover w-full max-w-2xl lg:max-w-full h-auto object-cover aspect-video lg:aspect-[4/3] xl:aspect-[16/10] object-center"
              />
            </AnimateOnScroll>
            <AnimateOnScroll variant="slide-right" as="div" className="w-full flex justify-center lg:justify-start">
              <div className="w-full max-w-2xl lg:max-w-xl">
                <ul className="space-y-4 sm:space-y-5 lg:space-y-6 mb-8 sm:mb-10">
                  {[
                    'Promoting renewable energy awareness through community-focused initiatives.',
                    'Encouraging stakeholder engagement and collaborative participation across Uttarakhand.',
                    'Supporting sustainability-focused outreach and public awareness activities.',
                    'Participating in renewable energy advocacy and awareness-driven initiatives.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 sm:gap-4">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-deep mt-0.5 shrink-0" />
                      <span className="text-sm sm:text-base text-brand-secondary leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center lg:text-left">
                  <Button onClick={() => navigate('contact')}>
                    Connect With REDA <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}

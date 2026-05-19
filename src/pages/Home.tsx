import { useRef, useState } from 'react';
import {
  Sun, Wind, Zap, Users, Building2, Leaf, ArrowRight, CheckCircle,
  FileText, ChevronRight, TrendingUp, Globe, Award, ChevronDown,
  HelpCircle, BookOpen, Lightbulb, ShieldCheck
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { useNavigation } from '../context/NavigationContext';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import AnimateOnScroll from '../components/AnimateOnScroll';
import homeImage from '../assets/home1.webp';
import aboutImage from '../assets/home2.webp';
import banner1 from '../assets/banner1.webp';
import banner2 from '../assets/banner2.webp';
import banner3 from '../assets/banner3.webp';

const stats = [
  { value: '50+', label: 'Awareness Initiatives', icon: Sun },
  { value: '25+', label: 'Community Outreach Activities', icon: Users },
  { value: '100+', label: 'Stakeholder Engagement Programs', icon: Zap },
  { value: '12+', label: 'District Participation', icon: Globe },
];

const projects = [
  {
    icon: Sun,
    title: 'Renewable Energy Awareness',
    desc: 'Promoting awareness and informed participation in renewable energy adoption through public outreach and educational initiatives.',
    color: 'text-solar',
    bg: 'bg-orange-50',
  },
  {
    icon: Users,
    title: 'Stakeholder Engagement',
    desc: 'Encouraging collaboration and dialogue among stakeholders, institutions, and communities to support sustainable energy development.',
    color: 'text-green-deep',
    bg: 'bg-green-50',
  },
  {
    icon: Wind,
    title: 'Sustainability Initiatives',
    desc: 'Supporting sustainability-focused activities and awareness programs that contribute towards a cleaner and more responsible future.',
    color: 'text-blue-trust',
    bg: 'bg-blue-50',
  },
];

const initiatives = [
  {
    icon: Users,
    title: 'Community Engagement',
    desc: 'Encouraging renewable energy awareness and public participation through outreach activities, discussions, and community-focused initiatives.',
    tag: 'Engagement',
  },
  {
    icon: Award,
    title: 'Stakeholder Collaboration',
    desc: 'Supporting dialogue and collaboration among stakeholders, institutions, and communities to strengthen renewable energy awareness and sustainable development efforts.',
    tag: 'Technical',
  },
  {
    icon: FileText,
    title: 'Policy & Awareness Advocacy',
    desc: 'Promoting awareness and constructive engagement regarding renewable energy policies, sustainability initiatives, and public-interest concerns.',
    tag: 'Advocacy',
  },
];

const partners = [
  { label: 'Government Bodies', icon: Building2, desc: 'Collaborating with public institutions and government organizations to support renewable energy awareness and sustainability initiatives.' },
  { label: 'NGO Networks', icon: Leaf, desc: 'Working alongside environmental and community-focused organizations to encourage awareness and sustainable development efforts.' },
  { label: 'Industry Stakeholders', icon: TrendingUp, desc: 'Encouraging collaboration and dialogue among renewable energy stakeholders to support informed and responsible energy practices.' },
  { label: 'Academic Institutions', icon: Award, desc: 'Partnering with educational and research institutions to promote renewable energy awareness, innovation, and knowledge-sharing initiatives.' },
];

const benefits = [
  'Renewable energy awareness initiatives across Uttarakhand',
  'Stakeholder engagement & collaborative participation',
  'Sustainability-focused public outreach activities',
  'Advocacy-driven renewable energy awareness efforts',
];

const schemes = [
  {
    tag: 'Government Scheme',
    title: 'PM Surya Ghar Muft Bijli Yojana',
    desc: 'Free electricity for eligible households with solar panel installation and grid connectivity.',
    cta: 'Get Consultation',
    image: banner1,
  },
  {
    tag: 'Government Scheme',
    title: 'MSSY Scheme',
    desc: 'Mukhya Mantri Solar Yojana - State-backed subsidy for residential solar installations in Uttarakhand.',
    cta: 'Learn More',
    image: banner2,
  },
  {
    tag: 'Solar Solution',
    title: 'Commercial Solar Solutions',
    desc: 'Customized solar systems for businesses, industries, and commercial buildings with attractive ROI.',
    cta: 'Get Quote',
    image: banner3,
  },
];

const faqs = [
  {
    question: 'What is REDA and what does it do?',
    answer: 'Renewable Energy Development Association (REDA) is a non-commercial association focused on renewable energy awareness, stakeholder engagement, sustainability initiatives, and public participation across Uttarakhand.',
  },
  {
    question: 'Is REDA a solar installation company?',
    answer: 'No. REDA is not involved in commercial installation or product sales. The association primarily focuses on awareness, advocacy, stakeholder engagement, and sustainability initiatives.',
  },
  {
    question: 'What are REDA’s primary areas of focus?',
    answer: 'REDA focuses on renewable energy awareness, sustainability advocacy, public engagement, collaborative participation, and community-focused initiatives.',
  },
  {
    question: 'Does REDA support awareness regarding renewable energy policies and schemes?',
    answer: 'Yes. REDA actively participates in awareness initiatives and public communication regarding renewable energy-related policies, schemes, and sustainability efforts.',
  },
  {
    question: 'How can organizations or individuals connect with REDA?',
    answer: 'Institutions, stakeholders, organizations, and individuals interested in renewable energy awareness and sustainability initiatives can connect with REDA for collaboration and participation opportunities.',
  },
];

const knowledgeCards = [
  {
    icon: BookOpen,
    title: 'Renewable Energy Awareness Resources',
    desc: 'Educational resources and awareness materials for informed renewable energy participation.',
  },
  {
    icon: ShieldCheck,
    title: 'Sustainability & Policy Updates',
    desc: 'Latest awareness initiatives, sustainability programs, and policy-related updates.',
  },
  {
    icon: Lightbulb,
    title: 'Community Outreach Initiatives',
    desc: 'Explore public engagement activities and collaborative awareness programs.',
  },
  {
    icon: HelpCircle,
    title: 'Knowledge & Best Practices',
    desc: 'Access awareness-focused guides, sustainability resources, and renewable energy best practices.',
  },
];

export default function Home() {
  const { navigate } = useNavigation();
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
          <div className="max-w-xl lg:max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-5 sm:mb-6 border border-white/20">
              <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-solar" />
              Based in Uttarakhand, India
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] sm:leading-[1.1] tracking-tight mb-5 sm:mb-6">
              Empowering Uttarakhand Through Renewable Energy <span className="text-solar">Awareness & Advocacy</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-[1.7] max-w-[540px] lg:max-w-[600px] mb-6 sm:mb-8">
              Renewable Energy Development Association (REDA) is a non-commercial association dedicated to renewable energy awareness, stakeholder engagement, sustainability initiatives, and public participation across Uttarakhand.
            </p>
            <p className="text-sm sm:text-base text-white/90 font-medium mb-8 sm:mb-10 flex items-start sm:items-center gap-2.5">
              <span className="w-1.5 h-1.5 bg-solar rounded-full shrink-0 mt-1.5 sm:mt-0"></span>
              Connecting communities, stakeholders, and institutions for a more sustainable future.
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Button onClick={() => navigate('initiatives')}>
                Explore Initiatives
              </Button>
              <Button variant="outline-white" onClick={() => navigate('blog')}>
                Media & Updates
              </Button>
            </div>

            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-5">
              {benefits.map((b) => (
                <div key={b} className="flex items-start sm:items-center gap-2 text-white/90 text-sm font-medium">
                  <CheckCircle className="w-4 h-4 text-solar shrink-0 mt-0.5 sm:mt-0" />
                  <span className="leading-snug">{b}</span>
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
              <AnimateOnScroll key={label} variant="fade-up" delay={(Math.min(i + 1, 5)) as 1 | 2 | 3 | 4 | 5} className="text-center group">
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
                Dedicated to Renewable Energy Awareness & Sustainable Development in Uttarakhand
              </h2>
              <p className="text-brand-secondary text-lg leading-relaxed mb-6">
                Renewable Energy Development Association (REDA) is a non-commercial association working towards renewable energy awareness, stakeholder engagement, sustainability initiatives, and public participation across Uttarakhand. REDA provides a collaborative platform that encourages awareness, dialogue, and collective efforts toward a cleaner and more sustainable future.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                  <div className="text-lg font-bold text-green-deep mb-2">Our Mission</div>
                  <p className="text-sm text-brand-secondary leading-relaxed">
                    To promote renewable energy awareness, encourage sustainable practices, and support collaborative initiatives that contribute to a cleaner and more informed energy ecosystem.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                  <div className="text-lg font-bold text-blue-trust mb-2">Our Vision</div>
                  <p className="text-sm text-brand-secondary leading-relaxed">
                    To build a more sustainable and energy-aware Uttarakhand where communities actively participate in renewable energy adoption and environmental responsibility.
                  </p>
                </div>
              </div>
              <Button variant="ghost" onClick={() => navigate('about')}>
                Discover REDA <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </AnimateOnScroll>
            <AnimateOnScroll variant="slide-right" as="div" className="relative">
              <img
                src={aboutImage}
                alt="Solar panels"
                className="w-full h-full object-cover rounded-xl shadow-card aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card-hover p-5 border border-gray-100">
                <div className="text-2xl font-extrabold text-solar mb-1">Est. 2023</div>
                <div className="text-sm text-brand-secondary">Serving Uttarakhand</div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Schemes Gallery (Coverflow) */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mb-3">
              Key Initiatives & Schemes
            </h2>
            <p className="text-brand-secondary text-lg max-w-2xl mx-auto">
              Explore renewable energy awareness programs and government-backed sustainability initiatives across Uttarakhand.
            </p>
          </div>
          <div className="relative">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              loop={true}
              speed={600}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
              className="gallery-swiper"
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {[...schemes, ...schemes].map((scheme, i) => (
                <SwiperSlide key={i} className="gallery-slide">
                  <div className="w-full h-full p-2">
                    <img
                      src={scheme.image}
                      alt={scheme.title}
                      className="gallery-image"
                    />
                    <div className="mt-3 md:mt-6 text-center">
                      <h3 className="text-sm md:text-lg font-bold text-brand-primary line-clamp-1">
                        {scheme.title}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom Navigation Below */}
            <div className="flex items-center justify-center gap-8 mt-4">
              <button
                className="gallery-nav-btn"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous slide"
              >
                <ArrowRight className="w-6 h-6 rotate-180" />
              </button>
              <div className="flex gap-2">
                {schemes.map((_, i) => (
                  <div key={i} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === activeIndex % schemes.length ? 'bg-solar w-6' : 'bg-gray-200'}`} />
                ))}
              </div>
              <button
                className="gallery-nav-btn"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next slide"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fade-up">
            <SectionHeader
              label="WHAT WE DO"
              title="Driving Renewable Energy Awareness & Community Engagement"
              subtitle="Supporting renewable energy awareness, stakeholder collaboration, public engagement, and sustainability-focused initiatives across Uttarakhand."
            />
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            {projects.map(({ icon: Icon, title, desc, color, bg }, i) => (
              <AnimateOnScroll key={title} variant="fade-up" delay={(Math.min(i + 1, 5)) as 1 | 2 | 3 | 4 | 5}>
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
              Explore Initiatives <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fade-up">
            <SectionHeader
              label="INITIATIVES"
              title="Promoting Renewable Energy Awareness Across Communities"
              subtitle="Through awareness initiatives, stakeholder engagement, public outreach, and collaborative efforts, REDA encourages informed participation in renewable energy and sustainability-focused practices across Uttarakhand."
            />
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            {initiatives.map(({ icon: Icon, title, desc, tag }, i) => (
              <AnimateOnScroll key={title} variant="fade-up" delay={(Math.min(i + 1, 5)) as 1 | 2 | 3 | 4 | 5}>
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
              label="PARTNERSHIPS"
              title="Collaborating for Sustainable Energy Awareness & Community Impact"
              subtitle="REDA collaborates with government bodies, institutions, organizations, and stakeholders to promote renewable energy awareness, sustainability initiatives, and community-focused engagement across Uttarakhand."
            />
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
            {partners.map(({ label, icon: Icon, desc }, i) => (
              <AnimateOnScroll key={label} variant="fade-up" delay={(Math.min(i + 1, 5)) as 1 | 2 | 3 | 4 | 5}>
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
              Explore Collaborations <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQs & Knowledge Hub */}
      <section className="py-20 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fade-up">
            <SectionHeader
              label="FAQs & Knowledge Hub"
              title="Everything You Need to Know"
              subtitle="Find answers to common questions and explore resources to help you make informed decisions about solar energy."
            />
          </AnimateOnScroll>

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 mt-8 items-start">
            {/* FAQ Accordion — Left ~58% */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100/80 overflow-hidden">
                {faqs.map((faq, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div key={i} className={`border-b border-gray-100/80 last:border-b-0 transition-colors duration-200 ${isOpen ? 'bg-orange-50/30' : ''}`}>
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left group transition-colors hover:bg-orange-50/20"
                      >
                        <span className={`text-[15px] font-semibold pr-4 transition-colors ${isOpen ? 'text-solar' : 'text-brand-primary group-hover:text-solar'
                          }`}>
                          {faq.question}
                        </span>
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-solar text-white rotate-180' : 'bg-gray-100 text-brand-secondary group-hover:bg-solar/10'
                          }`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>
                      <div
                        className="overflow-hidden transition-all duration-300 ease-in-out"
                        style={{
                          maxHeight: isOpen ? '200px' : '0px',
                          opacity: isOpen ? 1 : 0,
                        }}
                      >
                        <p className="px-5 pb-4 text-brand-secondary text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Knowledge Cards — Right ~42% */}
            <div className="lg:col-span-5 flex flex-col gap-3.5">
              {knowledgeCards.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-4 border border-gray-100/80 shadow-sm hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 bg-solar/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-solar/20 transition-colors">
                      <Icon className="w-5 h-5 text-solar" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-bold text-brand-primary mb-0.5 truncate">{title}</h4>
                      <p className="text-xs text-brand-secondary">{desc}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-solar shrink-0 transition-colors" />
                  </div>
                </div>
              ))}

              {/* Mini CTA — separated */}
              <div className="bg-gradient-to-br from-green-deep to-blue-trust rounded-xl p-5 text-white mt-2">
                <h4 className="text-base font-bold mb-1.5">Still Have Questions?</h4>
                <p className="text-white/80 text-sm mb-3 leading-relaxed">
                  Our team is here to help you learn more about renewable energy awareness initiatives, sustainability efforts, and stakeholder engagement activities.
                </p>
                <Button size="sm" onClick={() => navigate('contact')}>
                  Connect With REDA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

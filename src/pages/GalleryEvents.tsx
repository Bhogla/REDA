import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigation } from '../context/NavigationContext';
import AnimateOnScroll from '../components/AnimateOnScroll';
import galleryHeroImage from '../assets/Gallery/hero.webp';
import galleryCTAImage from '../assets/Gallery/CTA.webp';
import gallery1 from '../assets/Gallery/1.webp';
import gallery2 from '../assets/Gallery/2.webp';
import gallery3 from '../assets/Gallery/3.webp';
import gallery4 from '../assets/Gallery/4.webp';
import gallery5 from '../assets/Gallery/5.webp';
import gallery6 from '../assets/Gallery/6.webp';
import gallery7 from '../assets/Gallery/7.webp';
import gallery8 from '../assets/Gallery/8.webp';
import gallery9 from '../assets/Gallery/9.webp';

/* ─── Design tokens ─── */
const C = {
  navy:      '#0f1e35',
  navyLight: '#1a2c4e',
  orange:    '#e8401a',
  amber:     '#f5a623',
  amberBg:   '#fef3d8',
  teal:      '#2ab3b8',
  slate:     '#5a6a7a',
  border:    '#e8e0d4',
  white:     '#ffffff',
  cream:     '#fdf8f0',
} as const;

const playfair = '"Playfair Display", Georgia, serif';
const manrope  = '"Manrope", "Inter", system-ui, sans-serif';

/* ─── Data ─── */
const heroStats = [
  { value: '✓', label: 'Community Activities' },
  { value: '✓', label: 'Public Participation' },
  { value: '✓', label: 'District Outreach' },
  { value: '✓', label: 'Renewable Network' },
];

const featuredEvent = {
  category: 'FEATURED ACTIVITY',
  title: 'Renewable Awareness & Stakeholder Interaction',
  description:
    'Highlights from REDA’s awareness initiatives, stakeholder engagement, and community participation activities across Uttarakhand.',
  date: { day: 'Recent', month: 'Activity', year: '' },
  targetDate: new Date('2025-06-28T09:00:00+05:30'),
  meta: [
    { icon: '📅', text: 'Recent Activity' },
    { icon: '📍', text: 'Across Uttarakhand' },
    { icon: '👥', text: 'Community Engagement' },
  ],
};

const upcomingEvents = [
  {
    gradient: 'linear-gradient(135deg, #0f1e35, #1a2c4e)',
    emoji: '📢',
    dateLabel: 'Active',
    category: 'Awareness',
    title: 'Community Awareness Session',
    description: 'Interactive awareness and public engagement activities supporting renewable participation.',
    location: 'Across Uttarakhand',
    ctaText: 'View Activity',
  },
  {
    gradient: 'linear-gradient(135deg, #1a6b6e, #2ab3b8)',
    emoji: '🤝',
    dateLabel: 'Active',
    category: 'Engagement',
    title: 'Stakeholder Interaction',
    description: 'Collaborative discussions and participation initiatives across the renewable ecosystem.',
    location: 'Across Uttarakhand',
    ctaText: 'View Activity',
  },
  {
    gradient: 'linear-gradient(135deg, #b5400f, #e8401a)',
    emoji: '🌍',
    dateLabel: 'Active',
    category: 'Outreach',
    title: 'Public Outreach Activity',
    description: 'Community-led awareness and engagement initiatives across Uttarakhand.',
    location: 'Across Uttarakhand',
    ctaText: 'View Activity',
  },
];

const galleryCategories = ['All Photos', 'Awareness', 'Stakeholder Activities', 'Community Outreach', 'Events'];

const galleryItems = [
  { src: gallery1, title: 'Stakeholder Dialogue Session', category: 'Stakeholder Activities', year: '2024' },
  { src: gallery2, title: 'Community Outreach Drive', category: 'Community Outreach', year: '2024' },
  { src: gallery3, title: 'Regional Engagement Forum', category: 'Events', year: '2024' },
  { src: gallery4, title: 'Public Awareness Initiative', category: 'Awareness', year: '2024' },
  { src: gallery5, title: 'Renewable Participation Meet', category: 'Community Outreach', year: '2023' },
  { src: gallery6, title: 'Collaborative Exchange Session', category: 'Events', year: '2024' },
  { src: gallery7, title: 'Public Engagement Dialogue', category: 'Community Outreach', year: '2024' },
  { src: gallery8, title: 'Awareness Campaign Meet', category: 'Awareness', year: '2024' },
  { src: gallery9, title: 'Ecosystem Networking Forum', category: 'Stakeholder Activities', year: '2024' },
];

const pastEvents = [
  { name: 'Awareness Initiative', location: 'Dehradun', gradient: 'linear-gradient(135deg, #0f1e35, #1a2c4e)' },
  { name: 'Stakeholder Meeting', location: 'Haldwani', gradient: 'linear-gradient(135deg, #1a6b6e, #2ab3b8)' },
  { name: 'Community Outreach', location: 'Rishikesh', gradient: 'linear-gradient(135deg, #b5400f, #e8401a)' },
  { name: 'Renewable Participation Event', location: 'Uttarkashi', gradient: 'linear-gradient(135deg, #8b6914, #f5a623)' },
];

/* ─── Helpers ─── */
function getTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

/* ────────────────────────────────────────────────────────────
   COMPONENT
──────────────────────────────────────────────────────────── */
export default function GalleryEvents() {
  const { navigate } = useNavigation();

  /* countdown */
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(featuredEvent.targetDate));
  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(featuredEvent.targetDate)), 1000);
    return () => clearInterval(id);
  }, []);

  /* gallery filter */
  const [activeFilter, setActiveFilter] = useState('All Photos');
  const [visibleItems, setVisibleItems] = useState(galleryItems);
  const [fading, setFading] = useState(false);

  const handleFilter = useCallback((cat: string) => {
    if (cat === activeFilter) return;
    setFading(true);
    setTimeout(() => {
      setActiveFilter(cat);
      setVisibleItems(cat === 'All Photos' ? galleryItems : galleryItems.filter(i => i.category === cat));
      setFading(false);
    }, 300);
  }, [activeFilter]);

  /* lightbox */
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prevImage = () => {
    if (lightboxIdx === null) return;
    setLightboxIdx(lightboxIdx === 0 ? visibleItems.length - 1 : lightboxIdx - 1);
  };
  const nextImage = () => {
    if (lightboxIdx === null) return;
    setLightboxIdx(lightboxIdx === visibleItems.length - 1 ? 0 : lightboxIdx + 1);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  /* ─── Render ─── */
  return (
    <div style={{ fontFamily: manrope, color: C.slate, background: C.white }}>
      {/* ═══════════════ HERO ═══════════════ */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '140px',
          paddingBottom: '80px',
        }}
      >
        {/* full hero background image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: `url(${galleryHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }} />
        {/* dark navy overlay (50% opacity) */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: 'rgba(15, 30, 53, 0.50)',
        }} />
        {/* decorative glows */}
        <div style={{
          position: 'absolute', top: '-120px', right: '-80px', width: '500px', height: '500px',
          borderRadius: '50%', background: `radial-gradient(circle, ${C.amber}22 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-100px', left: '-60px', width: '400px', height: '400px',
          borderRadius: '50%', background: `radial-gradient(circle, ${C.teal}20 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <AnimateOnScroll variant="fade-up">
            <span style={{
              display: 'inline-block', fontSize: '12px', fontWeight: 700, letterSpacing: '3px',
              textTransform: 'uppercase' as const, color: C.orange, marginBottom: '20px',
            }}>
              GALLERY & EVENTS
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={1}>
            <h1 style={{
              fontFamily: playfair, fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800,
              color: C.white, lineHeight: 1.15, marginBottom: '24px', maxWidth: '720px',
            }}>
              Moments of <span style={{ color: C.amber }}>Awareness</span>, Participation & <span style={{ color: C.amber }}>Community</span> Engagement
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={2}>
            <p style={{
              fontSize: '17px', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)',
              maxWidth: '620px', marginBottom: '48px',
            }}>
              Explore REDA’s initiatives, stakeholder interactions, public outreach activities, and community engagement across Uttarakhand.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={3}>
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '0', borderTop: `1px solid rgba(255,255,255,0.15)`,
              paddingTop: '32px', maxWidth: '720px',
            }}>
              {heroStats.map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    flex: '1 1 140px', padding: '0 24px',
                    borderRight: i < heroStats.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                    textAlign: 'center', marginBottom: '12px',
                  }}
                >
                  <div style={{ fontFamily: playfair, fontSize: '28px', fontWeight: 800, color: C.amber }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', marginTop: '4px' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════ UPCOMING & RECENT EVENTS ═══════════════ */}
      <section style={{ background: C.cream, padding: '96px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <AnimateOnScroll variant="fade-up">
            <span style={{
              display: 'inline-block', fontSize: '12px', fontWeight: 700, letterSpacing: '3px',
              textTransform: 'uppercase' as const, color: C.orange, marginBottom: '12px',
            }}>
              UPCOMING & RECENT
            </span>
            <h2 style={{
              fontFamily: playfair, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800,
              color: C.navyLight, marginBottom: '12px',
            }}>
              REDA Events 2025
            </h2>
            <p style={{ color: C.slate, maxWidth: '560px', marginBottom: '48px', lineHeight: 1.7, fontSize: '15px' }}>
              From summits to workshops – explore what's coming up and register to be part of the movement.
            </p>
          </AnimateOnScroll>

          {/* ── Featured Event Card ── */}
          <AnimateOnScroll variant="fade-up" delay={1}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'clamp(240px, 30%, 320px) 1fr',
              borderRadius: '16px', overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(15,30,53,0.10)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              background: C.white,
            }}
              className="ge-featured-card"
            >
              {/* left date panel */}
              <div style={{
                background: `linear-gradient(180deg, ${C.navy}, ${C.navyLight})`,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                padding: '40px 24px', gap: '28px',
              }}>
                <div>
                  <span style={{
                    display: 'inline-block', background: C.orange, color: C.white,
                    fontSize: '11px', fontWeight: 700, padding: '5px 14px', borderRadius: '20px',
                    letterSpacing: '1px', marginBottom: '20px',
                  }}>
                    ⭐ Featured Activity
                  </span>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: playfair, fontSize: '36px', fontWeight: 800, color: C.amber, lineHeight: 1.2 }}>
                      Recent
                    </div>
                    <div style={{ fontSize: '18px', color: C.white, fontWeight: 600, marginTop: '8px' }}>
                      Activity
                    </div>
                  </div>
                </div>
              </div>

              {/* right body panel */}
              <div style={{ padding: 'clamp(24px, 4vw, 48px)' }}>
                <span style={{
                  display: 'inline-block', background: `${C.teal}18`, color: C.teal,
                  fontSize: '12px', fontWeight: 700, padding: '5px 14px', borderRadius: '20px',
                  marginBottom: '16px',
                }}>
                  {featuredEvent.category}
                </span>
                <h3 style={{
                  fontFamily: playfair, fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 700,
                  color: C.navyLight, marginBottom: '14px', lineHeight: 1.3,
                }}>
                  {featuredEvent.title}
                </h3>
                <p style={{ color: C.slate, lineHeight: 1.7, marginBottom: '24px', fontSize: '14.5px' }}>
                  {featuredEvent.description}
                </p>

                {/* meta rows */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                  {featuredEvent.meta.map(m => (
                    <div key={m.text} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{
                        width: '36px', height: '36px', background: C.amberBg, borderRadius: '8px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0,
                      }}>
                        {m.icon}
                      </span>
                      <span style={{ fontSize: '14px', color: C.slate }}>{m.text}</span>
                    </div>
                  ))}
                </div>

                {/* buttons */}
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => document.getElementById('photo-gallery')?.scrollIntoView({ behavior: 'smooth' })}
                    className="ge-btn-primary"
                    style={{
                      background: C.orange, color: C.white, border: 'none', padding: '12px 28px',
                      borderRadius: '8px', fontSize: '14px', fontWeight: 700, cursor: 'pointer',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    View Gallery
                  </button>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* ── Upcoming Events Grid ── */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px', marginTop: '48px',
          }}>
            {upcomingEvents.map(({ title, description, location, category, dateLabel, emoji, gradient, ctaText }, idx) => (
              <AnimateOnScroll key={title} variant="fade-up" delay={Math.min(idx + 1, 5) as 1|2|3|4|5}>
                <div className="ge-event-card" style={{
                  borderRadius: '16px', overflow: 'hidden', background: C.white,
                  border: `1px solid ${C.border}`, transition: 'all 0.3s ease',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                }}>
                  {/* gradient header */}
                  <div style={{
                    background: gradient, padding: '20px 24px',
                    position: 'relative', minHeight: '80px',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  }}>
                    <span style={{
                      background: C.amber, color: C.navy, fontSize: '12px', fontWeight: 800,
                      padding: '5px 12px', borderRadius: '6px',
                    }}>
                      {dateLabel}
                    </span>
                    <span style={{ fontSize: '28px' }}>{emoji}</span>
                  </div>

                  {/* body */}
                  <div style={{ padding: '24px' }}>
                    <span style={{
                      display: 'inline-block', fontSize: '11px', fontWeight: 700,
                      background: `${C.teal}15`, color: C.teal, padding: '4px 10px',
                      borderRadius: '6px', marginBottom: '12px', letterSpacing: '0.5px',
                    }}>
                      {category}
                    </span>
                    <h4 style={{
                      fontFamily: playfair, fontSize: '18px', fontWeight: 700,
                      color: C.navyLight, marginBottom: '10px', lineHeight: 1.35,
                    }}>
                      {title}
                    </h4>
                    <p style={{ fontSize: '13.5px', color: C.slate, lineHeight: 1.6, marginBottom: '20px' }}>
                      {description}
                    </p>
                  </div>

                  {/* footer */}
                  <div style={{
                    padding: '0 24px 24px', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', gap: '12px',
                  }}>
                    <span style={{ fontSize: '13px', color: C.slate }}>📍 {location}</span>
                    <button
                      onClick={() => navigate('contact')}
                      style={{
                        background: C.orange, color: C.white, border: 'none', padding: '8px 18px',
                        borderRadius: '6px', fontSize: '12.5px', fontWeight: 700, cursor: 'pointer',
                        transition: 'all 0.25s ease', flexShrink: 0,
                      }}
                      className="ge-btn-primary"
                    >
                      {ctaText || 'Register'}
                    </button>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PHOTO GALLERY ═══════════════ */}
      <section id="photo-gallery" style={{ background: C.white, padding: '96px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <AnimateOnScroll variant="fade-up">
            <span style={{
              display: 'inline-block', fontSize: '12px', fontWeight: 700, letterSpacing: '3px',
              textTransform: 'uppercase' as const, color: C.orange, marginBottom: '12px',
            }}>
              PHOTO GALLERY
            </span>
            <h2 style={{
              fontFamily: playfair, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800,
              color: C.navyLight, marginBottom: '12px',
            }}>
              Moments from REDA
            </h2>
            <p style={{ color: C.slate, maxWidth: '520px', marginBottom: '36px', lineHeight: 1.7, fontSize: '15px' }}>
              Explore moments from REDA’s awareness initiatives, stakeholder interactions, community engagement, and renewable participation activities across Uttarakhand.
            </p>
          </AnimateOnScroll>

          {/* filter tabs */}
          <AnimateOnScroll variant="fade-up" delay={1}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
              {galleryCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleFilter(cat)}
                  style={{
                    padding: '9px 20px', borderRadius: '24px', fontSize: '13px', fontWeight: 600,
                    cursor: 'pointer', transition: 'all 0.25s ease', border: '1.5px solid',
                    ...(activeFilter === cat
                      ? { background: C.navy, color: C.white, borderColor: C.navy }
                      : { background: C.white, color: C.slate, borderColor: C.border }),
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          {/* uniform grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              opacity: fading ? 0 : 1,
              transition: 'opacity 0.3s ease',
            }}
            className="ge-gallery-grid"
          >
            {visibleItems.map((item, idx) => (
              <div
                key={`${item.src}-${activeFilter}`}
                data-category={item.category}
                onClick={() => openLightbox(idx)}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  aspectRatio: '4/3',
                }}
                className="ge-gallery-item"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.background = `linear-gradient(135deg, ${C.navy}, ${C.teal})`;
                    target.style.objectFit = 'contain';
                    target.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect fill="%231a2c4e" width="400" height="300"/><text x="200" y="150" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="14" fill="%23f5a623">Image unavailable</text></svg>');
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                />
                {/* hover overlay */}
                <div className="ge-gallery-overlay" style={{
                  position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
                  justifyContent: 'flex-end', padding: '20px',
                  background: 'linear-gradient(to top, rgba(10,15,30,0.85) 0%, transparent 60%)',
                  opacity: 0, transition: 'opacity 0.35s ease',
                }}>
                  <span style={{
                    position: 'absolute', top: '12px', right: '12px', fontSize: '18px',
                    color: 'rgba(255,255,255,0.7)',
                  }}>⤢</span>
                  <div style={{ fontWeight: 700, color: C.white, fontSize: '15px', marginBottom: '4px' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '12px', color: C.amber }}>
                    {item.category} · {item.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ LIGHTBOX ═══════════════ */}
      {lightboxIdx !== null && (
        <div
          ref={lightboxRef}
          onClick={(e) => { if (e.target === lightboxRef.current) closeLightbox(); }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(10,15,30,0.95)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            padding: '24px',
            animation: 'gefadeIn 0.3s ease',
          }}
        >
          {/* close */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute', top: '20px', right: '20px',
              width: '44px', height: '44px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)', border: 'none',
              color: C.white, fontSize: '20px', cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
          >
            ✕
          </button>

          {/* image area */}
          <div style={{ maxWidth: '900px', width: '100%', textAlign: 'center' }}>
            <img
              src={visibleItems[lightboxIdx].src}
              alt={visibleItems[lightboxIdx].title}
              style={{
                maxHeight: '70vh', maxWidth: '100%', objectFit: 'contain',
                borderRadius: '12px', boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
              }}
            />
            <div style={{ marginTop: '20px' }}>
              <div style={{ fontFamily: playfair, fontSize: '20px', fontWeight: 700, color: C.white }}>
                {visibleItems[lightboxIdx].title}
              </div>
              <div style={{ fontSize: '14px', color: C.amber, marginTop: '6px' }}>
                {visibleItems[lightboxIdx].category} · {visibleItems[lightboxIdx].year}
              </div>
            </div>
          </div>

          {/* navigation */}
          <div style={{ display: 'flex', gap: '16px', marginTop: '28px' }}>
            <button
              onClick={prevImage}
              style={{
                width: '48px', height: '48px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)', border: 'none',
                color: C.white, fontSize: '20px', cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            >
              ←
            </button>
            <button
              onClick={nextImage}
              style={{
                width: '48px', height: '48px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)', border: 'none',
                color: C.white, fontSize: '20px', cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            >
              →
            </button>
          </div>
        </div>
      )}

      {/* ═══════════════ PAST EVENTS ═══════════════ */}
      <section style={{ background: C.amberBg, padding: '96px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <AnimateOnScroll variant="fade-up">
            <span style={{
              display: 'inline-block', fontSize: '12px', fontWeight: 700, letterSpacing: '3px',
              textTransform: 'uppercase' as const, color: C.orange, marginBottom: '12px',
            }}>
              RECENT HIGHLIGHTS
            </span>
            <h2 style={{
              fontFamily: playfair, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800,
              color: C.navyLight, marginBottom: '12px',
            }}>
              Community Moments & Activities
            </h2>
            <p style={{ color: C.slate, maxWidth: '520px', marginBottom: '48px', lineHeight: 1.7, fontSize: '15px' }}>
              A look back at awareness initiatives, stakeholder participation, and community engagement activities.
            </p>
          </AnimateOnScroll>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '24px',
          }}>
            {pastEvents.map(({ name, location, gradient }, idx) => (
              <AnimateOnScroll key={name} variant="fade-up" delay={Math.min(idx + 1, 5) as 1|2|3|4|5}>
                <div className="ge-event-card" style={{
                  borderRadius: '16px', overflow: 'hidden', background: C.white,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  transition: 'all 0.3s ease',
                }}>
                  <div style={{ background: gradient, height: '120px' }} />
                  <div style={{ padding: '20px' }}>
                    <h4 style={{
                      fontFamily: playfair, fontSize: '17px', fontWeight: 700,
                      color: C.navyLight, marginBottom: '8px',
                    }}>
                      {name}
                    </h4>
                    <p style={{ fontSize: '13px', color: C.slate, marginBottom: '0px' }}>
                      📍 {location}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '96px 24px' }}>
        {/* full section background image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: `url(${galleryCTAImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        {/* dark overlay (55% opacity) with subtle gradient from bottom to top */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: 'linear-gradient(to top, rgba(15, 30, 53, 0.65) 0%, rgba(15, 30, 53, 0.45) 100%)',
        }} />

        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <AnimateOnScroll variant="fade-up">
            <h2 style={{
              fontFamily: playfair, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800,
              color: C.white, marginBottom: '20px',
            }}>
              Be Part of REDA Activities
            </h2>
            <p style={{
              fontSize: '16px', lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '600px', margin: '0 auto 36px',
            }}>
              Join REDA in creating stronger awareness, participation, and renewable engagement across Uttarakhand.
            </p>
            <button
              onClick={() => navigate('contact')}
              className="ge-btn-primary"
              style={{
                background: '#FF9644', color: C.white, border: 'none', padding: '14px 36px',
                borderRadius: '8px', fontSize: '15px', fontWeight: 700, cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}
            >
              Connect With REDA
            </button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════ PAGE-SPECIFIC STYLES ═══════════════ */}
      <style>{`
        /* Lightbox fade-in */
        @keyframes gefadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* Gallery item hover */
        .ge-gallery-item:hover img {
          transform: scale(1.03);
        }
        .ge-gallery-item:hover .ge-gallery-overlay {
          opacity: 1 !important;
        }

        /* Card hover lift */
        .ge-event-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(15,30,53,0.12) !important;
          border-color: ${C.amber} !important;
        }

        /* Featured card hover */
        .ge-featured-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(15,30,53,0.15) !important;
        }

        /* Button hover */
        .ge-btn-primary:hover {
          background-color: #f97316 !important;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
          transform: translateY(-1px);
        }
        .ge-btn-primary:active {
          transform: scale(0.95) !important;
        }
        .ge-btn-outline:hover {
          border-color: ${C.navyLight} !important;
          background: ${C.cream} !important;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .ge-featured-card {
            grid-template-columns: 1fr !important;
          }
          .ge-gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .ge-gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

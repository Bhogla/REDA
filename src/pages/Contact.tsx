import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import AnimateOnScroll from '../components/AnimateOnScroll';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Registered Office',
    value: 'Lakshya Enclave Block C, Banjarawala, Dehradun – 248001 (Uttarakhand)',
    color: 'text-solar',
    bg: 'bg-orange-50',
  },
  {
    icon: Phone,
    label: 'Mobile',
    value: '888 1220 222 / 999 7015 895 / 783 0144 244',
    href: 'tel:+918881220222',
    color: 'text-green-deep',
    bg: 'bg-green-50',
  },
  {
    icon: Mail,
    label: 'Mail ID',
    value: 'redauttarakhand@gmail.com',
    href: 'mailto:redauttarakhand@gmail.com',
    color: 'text-blue-trust',
    bg: 'bg-blue-50',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Monday – Saturday, 9:00 AM – 6:00 PM IST',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
];

const inquiryTypes = [
  'Solar Consultation',
  'Partnership Inquiry',
  'Volunteer / Internship',
  'Policy & Advocacy',
  'Media & Press',
  'Other',
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    'w-full rounded-xl border border-gray-200 bg-bg-warm px-4 py-3 text-brand-primary placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-solar/40 focus:border-solar transition-all';

  return (
    <div className="bg-bg-warm pt-20">
      {/* Hero */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #1B5E20 0%, #1E3A8A 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-solar mb-4">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Let's Start a Conversation
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Whether you need a solar consultation, want to partner, or simply have a question — our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info panel */}
            <AnimateOnScroll variant="slide-left" className="lg:col-span-2 space-y-5">
              <h2 className="text-2xl font-extrabold text-brand-primary mb-2">Get in Touch</h2>
              <p className="text-brand-secondary leading-relaxed text-sm">
                Our team is available Monday through Saturday. We typically respond to all inquiries within 24 business hours.
              </p>

              {contactInfo.map(({ icon: Icon, label, value, href, color, bg }) => (
                <div key={label} className="flex gap-4 items-start bg-white rounded-2xl p-5 shadow-card border border-gray-100">
                  <div className={`w-11 h-11 ${bg} rounded-xl flex items-center justify-center shrink-0`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-brand-secondary mb-1">
                      {label}
                    </div>
                    {href ? (
                      <a href={href} className="text-brand-primary font-medium text-sm hover:text-solar transition-colors">
                        {value}
                      </a>
                    ) : (
                      <div className="text-brand-primary font-medium text-sm">{value}</div>
                    )}
                  </div>
                </div>
              ))}

              <div className="bg-solar-light rounded-2xl p-6 mt-6">
                <p className="text-brand-primary font-semibold text-sm mb-1">WhatsApp Helpline</p>
                <p className="text-brand-secondary text-sm mb-3">Quick solar queries? Chat with our experts on WhatsApp.</p>
                <a
                  href="https://wa.me/918881220222"
                  className="inline-flex items-center gap-2 bg-green-deep text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </AnimateOnScroll>

            {/* Form */}
            <AnimateOnScroll variant="slide-right" className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-card-hover border border-gray-100 p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-8 h-8 text-green-deep" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-brand-primary mb-3">
                      Message Received!
                    </h3>
                    <p className="text-brand-secondary leading-relaxed max-w-md mx-auto">
                      Thank you for reaching out. Our team will review your inquiry and respond within 24 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', inquiryType: '', subject: '', message: '' }); }}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-solar hover:text-orange-600 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-xl font-extrabold text-brand-primary mb-1">Send Us a Message</h3>
                      <p className="text-sm text-brand-secondary">All fields marked * are required.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-brand-secondary uppercase tracking-wider mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-brand-secondary uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-brand-secondary uppercase tracking-wider mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-brand-secondary uppercase tracking-wider mb-2">
                          Inquiry Type *
                        </label>
                        <select
                          name="inquiryType"
                          required
                          value={form.inquiryType}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Select a type</option>
                          {inquiryTypes.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-secondary uppercase tracking-wider mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Brief subject of your inquiry"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-secondary uppercase tracking-wider mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your query or how we can help you..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <Button type="submit" fullWidth size="lg" disabled={loading}>
                      {loading ? 'Sending...' : (
                        <>Send Message <Send className="w-4 h-4 ml-2" /></>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fade-up">
            <SectionHeader
              label="Our Presence"
              title="Offices Across Uttarakhand"
              subtitle="REDA has field offices and partners across the state for on-ground support."
            />
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {[
              { city: 'Dehradun', role: 'Headquarters', district: 'Dehradun District' },
              { city: 'Haridwar', role: 'Field Office', district: 'Haridwar District' },
              { city: 'Nainital', role: 'Field Office', district: 'Kumaon Region' },
              { city: 'Chamoli', role: 'Project Centre', district: 'Chamoli District' },
              { city: 'Pithoragarh', role: 'Field Office', district: 'Pithoragarh District' },
              { city: 'Uttarkashi', role: 'Project Centre', district: 'Uttarkashi District' },
            ].map(({ city, role, district }, idx) => (
              <AnimateOnScroll key={city} variant="fade-up" delay={(Math.min(idx + 1, 5)) as 1|2|3|4|5}>
              <div className="flex gap-4 items-start p-5 bg-bg-warm rounded-2xl border border-gray-100 h-full">
                <div className="w-10 h-10 bg-solar/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-solar" />
                </div>
                <div>
                  <div className="font-bold text-brand-primary">{city}</div>
                  <div className="text-xs text-solar font-semibold mb-0.5">{role}</div>
                  <div className="text-xs text-brand-secondary">{district}</div>
                </div>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

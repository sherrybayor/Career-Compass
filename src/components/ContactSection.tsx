import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Check, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [newsEmail, setNewsEmail] = React.useState('');
  const [formSent, setFormSent] = React.useState(false);
  const [newsSent, setNewsSent] = React.useState(false);

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setFormSent(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setFormSent(false);
    }, 3000);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail) return;
    setNewsSent(true);
    setTimeout(() => {
      setNewsEmail('');
      setNewsSent(false);
    }, 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-extrabold tracking-[0.25em] text-brand-teal uppercase bg-brand-teal/10 px-3 py-1 rounded-md">
          GET IN TOUCH
        </span>
        <h1 className="font-display font-black text-3xl md:text-4xl text-brand-primary mt-4 tracking-tight uppercase leading-none">
          We're Ready to Support Your Journey
        </h1>
        <p className="text-brand-dark/70 text-xs md:text-sm mt-3 font-medium">
          Have questions about your assessment, tech courses, or partnerships? Contact the B Bright Tech Hub team to support your technology dreams.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-start">
        
        {/* Left column: Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-brand-primary/10 shadow-xs">
            <h3 className="font-display font-semibold text-lg text-brand-primary mb-4">Direct Channels</h3>
            
            <div className="space-y-4">
              <a
                href="mailto:bbrightkidsconsult@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-primary/5 transition-colors text-brand-dark/80 text-xs font-semibold"
              >
                <div className="h-8 w-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-[9px] font-mono font-bold text-brand-dark/40 uppercase">Email Support</span>
                  bbrightkidsconsult@gmail.com
                </div>
              </a>

              <a
                href="https://wa.me/2348140312097"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-primary/5 transition-colors text-brand-dark/80 text-xs font-semibold"
              >
                <div className="h-8 w-8 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-[9px] font-mono font-bold text-brand-dark/40 uppercase">WhatsApp Career Desk</span>
                  +234 814 031 2097
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl text-brand-dark/80 text-xs font-semibold">
                <div className="h-8 w-8 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-[9px] font-mono font-bold text-brand-dark/40 uppercase">Makerspace Location</span>
                  19, Gbola Onibiyo street, Red House, Ahmadiyyah, Lagos, Nigeria
                </div>
              </div>
            </div>
          </div>

          {/* Clean Stylized Interactive Maps placeholder to prevent Iframe exception */}
          <div className="bg-brand-primary/10 border border-brand-primary/15 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 h-24 w-24 bg-brand-teal/10 rounded-bl-full"></div>
            <h4 className="font-display font-semibold text-brand-primary text-sm mb-1">Our Ahmadiyyah Makerspace</h4>
            <p className="text-brand-dark/70 text-[11px] leading-relaxed">
              Drop by our makerspace for hands-on coding, robotics, artificial intelligence, and STEM education. We inspire children and teenagers to achieve their technology dreams. Open Monday - Saturday, 9:00 AM - 5:00 PM.
            </p>
            
            <div className="mt-4 bg-white p-3 rounded-xl border border-brand-primary/10 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-teal animate-ping"></span>
              <span className="text-[10px] font-mono font-bold text-brand-primary uppercase">📍 Makerspace Coordinates Verified</span>
            </div>
          </div>

        </div>

        {/* Right column: Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-brand-primary/10 shadow-sm">
          <h3 className="font-display font-bold text-xl text-brand-primary mb-6">Send an Inquiry</h3>

          {formSent ? (
            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl text-center space-y-3">
              <div className="h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                <Check className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-brand-primary text-sm">Message Transmitted Successfully!</h4>
              <p className="text-xs text-brand-dark/60">A technology coordinator from B Bright Tech Hub will reach out within 24 business hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmitContact} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-mono font-bold text-brand-dark/40 uppercase block mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Busola"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-brand-primary/15 focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono font-bold text-brand-dark/40 uppercase block mb-1.5">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. email@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-brand-primary/15 focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono font-bold text-brand-dark/40 uppercase block mb-1.5">Your Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can we assist you with career alignment today?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-brand-primary/15 focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 bg-brand-primary hover:bg-brand-primary/95 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-brand-primary/10 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Send className="h-4 w-4" />
                Send Inquiry
              </button>
            </form>
          )}

          {/* Newsletter Signup */}
          <div className="mt-10 border-t border-brand-primary/10 pt-8">
            <h4 className="font-display font-semibold text-brand-primary text-sm flex items-center gap-1.5 mb-1">
              <Sparkles className="h-4 w-4 text-brand-gold animate-pulse" />
              Subscribe to the Bright Careers Newsletter
            </h4>
            <p className="text-[11px] text-brand-dark/60 leading-relaxed mb-4">
              Get weekly updates on scholarship opportunities, JAMB changes, and emerging technological trends in Nigeria.
            </p>

            {newsSent ? (
              <p className="text-xs font-bold text-brand-teal">✓ Thank you for subscribing! Your address was saved.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs rounded-xl border border-brand-primary/15 focus:outline-none bg-brand-bg/40"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-brand-teal hover:bg-brand-teal/95 text-white text-xs font-bold rounded-xl cursor-pointer"
                >
                  Join List
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}

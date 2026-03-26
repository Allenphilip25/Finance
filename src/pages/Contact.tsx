import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-blue mb-6">
            Let's Discuss Your <br /> Financial Future
          </h1>
          <p className="text-brand-blue/60 text-lg">
            Whether you're an individual looking for investment advice or a corporation seeking strategic solutions, we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h3 className="text-2xl font-display font-bold text-brand-blue mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-gold shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-blue mb-1">Our Office</h5>
                    <p className="text-brand-blue/50 text-sm leading-relaxed">
                      Level 42, Emirates Towers, <br />
                      Sheikh Zayed Road, Dubai, UAE
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-gold shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-blue mb-1">Phone Number</h5>
                    <p className="text-brand-blue/50 text-sm">
                      +971 4 123 4567 <br />
                      +971 50 987 6543
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-gold shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-blue mb-1">Email Address</h5>
                    <p className="text-brand-blue/50 text-sm">
                      info@elitefinance.ae <br />
                      support@elitefinance.ae
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-brand-blue rounded-3xl text-white relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-4 text-brand-gold">Business Hours</h4>
                <div className="space-y-3 text-sm text-white/60">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-brand-gold">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-brand-blue/5"
            >
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-blue/70 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-brand-gold outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-blue/70 ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-brand-gold outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-blue/70 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+971 50 000 0000"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-brand-gold outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-blue/70 ml-1">Service Required</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-brand-gold outline-none transition-all appearance-none">
                    <option>Investment Advisory</option>
                    <option>Personal Finance</option>
                    <option>Taxation & VAT</option>
                    <option>Corporate Finance</option>
                    <option>Company Formation</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-brand-blue/70 ml-1">Your Message</label>
                  <textarea
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-brand-gold outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button
                    type="submit"
                    className="w-full bg-brand-blue text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-brand-blue/90 transition-all shadow-xl"
                  >
                    Send Message
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

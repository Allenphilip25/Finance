import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, WHY_CHOOSE_US, PROCESS_STEPS, TESTIMONIALS } from '@/src/constants';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-48 md:pb-64 px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue/90 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
            alt="Modern Office"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/20 text-brand-gold text-sm font-bold mb-6 border border-brand-gold/30">
              Trusted Financial Partners in UAE
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
              Empowering Your <br />
              <span className="text-brand-gold italic">Financial Growth</span> <br />
              with Expert Guidance
            </h1>
            <p className="text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
              Investment, Taxation & Corporate Solutions tailored for your unique journey. We turn financial complexity into strategic clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-brand-gold hover:bg-brand-gold-light text-brand-blue px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                Get Free Consultation
                <ArrowRight size={20} />
              </Link>
              <button className="glass text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                Talk to an Expert
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-md border-t border-white/10 py-10 px-6 hidden md:block">
          <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8">
            {[
              { label: 'Assets Managed', value: '$500M+' },
              { label: 'Corporate Clients', value: '250+' },
              { label: 'Success Rate', value: '99%' },
              { label: 'Years of Experience', value: '15+' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-display font-bold text-brand-gold mb-1">{stat.value}</div>
                <div className="text-white/50 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1974"
                alt="Our Team"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-gold p-8 rounded-3xl shadow-xl hidden md:block">
              <div className="text-4xl font-display font-bold text-brand-blue mb-1">15+</div>
              <div className="text-brand-blue/70 font-bold text-sm uppercase tracking-widest">Years of Trust</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">About Our Firm</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-blue mb-6 leading-tight">
              A Dedicated Team of <br /> Financial Professionals
            </h2>
            <p className="text-brand-blue/60 text-lg leading-relaxed mb-8">
              At Elite Finance Advisory, we combine deep local knowledge of the UAE market with global financial expertise. Our mission is to provide personalized, transparent, and high-impact solutions that drive growth for both individuals and corporations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                { title: 'Expertise', desc: 'Specialized knowledge across all financial sectors.' },
                { title: 'Trust', desc: 'Built on years of reliable and ethical service.' },
                { title: 'Personalized', desc: 'Every client receives a custom-tailored strategy.' },
                { title: 'Reliability', desc: 'Consistent results in a changing economic landscape.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-blue">{item.title}</h4>
                    <p className="text-sm text-brand-blue/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-brand-blue font-bold border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-colors"
            >
              Learn More About Us
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-blue mb-6">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-brand-blue/60 text-lg">
              We offer a wide range of services designed to meet the complex needs of modern investors and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group border border-brand-blue/5"
              >
                <div className="w-14 h-14 bg-brand-blue/5 rounded-2xl flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-gold group-hover:text-brand-blue transition-colors">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-4">{service.title}</h3>
                <p className="text-brand-blue/60 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm group-hover:text-brand-gold transition-colors"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-brand-blue text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 -skew-x-12 transform translate-x-1/4" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">The Elite Advantage</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                Why Global Leaders <br /> Trust Our Advisory
              </h2>
              <div className="space-y-8">
                {WHY_CHOOSE_US.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-gold shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-white/60 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573164060897-425941c30241?auto=format&fit=crop&q=80&w=2069"
                  alt="Professional Meeting"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-brand-gold rounded-3xl -z-10" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-gold/20 rounded-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-blue mb-6">
              A Seamless Journey to Success
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-brand-blue/5 hidden lg:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative z-10 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-brand-blue/5 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:border-brand-gold transition-colors">
                    <span className="text-2xl font-display font-bold text-brand-gold">0{i + 1}</span>
                  </div>
                  <h4 className="text-xl font-bold text-brand-blue mb-3">{step.title}</h4>
                  <p className="text-brand-blue/50 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Testimonials</span>
              <h2 className="text-4xl font-display font-bold text-brand-blue mb-6">
                What Our Clients Say About Us
              </h2>
              <p className="text-brand-blue/60 mb-8">
                We take pride in the success of our clients. Here's how we've helped them navigate their financial journeys.
              </p>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full border border-brand-blue/10 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all cursor-pointer">
                  <ArrowRight size={20} className="rotate-180" />
                </div>
                <div className="w-12 h-12 rounded-full border border-brand-blue/10 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all cursor-pointer">
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {TESTIMONIALS.slice(0, 2).map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white p-10 rounded-3xl shadow-sm border border-brand-blue/5"
                >
                  <div className="flex text-brand-gold mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-brand-blue/70 italic mb-8 leading-relaxed">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-blue/10 overflow-hidden">
                      <img
                        src={`https://i.pravatar.cc/150?u=${t.name}`}
                        alt={t.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h5 className="font-bold text-brand-blue">{t.name}</h5>
                      <p className="text-xs text-brand-blue/40 uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-blue rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                Start Your Financial <br /> Journey Today
              </h2>
              <p className="text-white/60 text-lg mb-12">
                Join hundreds of successful individuals and corporations who have secured their financial future with Elite Finance Advisory.
              </p>
              <Link
                to="/contact"
                className="bg-brand-gold hover:bg-brand-gold-light text-brand-blue px-10 py-5 rounded-2xl font-bold text-xl transition-all inline-flex items-center gap-3"
              >
                Book a Consultation
                <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/97141234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

export default Home;

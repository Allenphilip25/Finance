import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '@/src/constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Our Expertise</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-blue mb-6">
            Specialized Financial <br /> Solutions for Every Need
          </h1>
          <p className="text-brand-blue/60 text-lg max-w-3xl mx-auto">
            From individual wealth management to complex corporate structuring, we provide the expertise required to navigate the modern financial landscape.
          </p>
        </div>
      </section>

      {/* Services Detailed */}
      <section className="px-6 space-y-32">
        {SERVICES.map((service, i) => (
          <div key={service.id} className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={i % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="w-16 h-16 bg-brand-blue/5 rounded-2xl flex items-center justify-center text-brand-gold mb-8">
                  <service.icon size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-blue mb-6">{service.title}</h2>
                <p className="text-brand-blue/60 text-lg leading-relaxed mb-8">
                  {service.description} We provide deep insights and strategic planning to ensure your financial objectives are not just met, but exceeded. Our team of experts stays ahead of market trends and regulatory changes to give you a competitive edge.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    'Customized strategic planning',
                    'Regulatory compliance & reporting',
                    'Risk assessment & mitigation',
                    'Continuous performance monitoring'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-brand-blue/70">
                      <CheckCircle2 size={18} className="text-brand-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2 hover:bg-brand-blue/90 transition-all"
                >
                  Get Started
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img
                    src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?auto=format&fit=crop&q=80&w=1200`}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl -z-10" />
              </motion.div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="px-6 mt-32">
        <div className="max-w-7xl mx-auto bg-brand-gold rounded-[3rem] p-12 md:p-20 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-blue mb-6">
            Ready to Optimize Your Finances?
          </h2>
          <p className="text-brand-blue/70 text-lg mb-10 max-w-2xl mx-auto">
            Schedule a session with our specialist advisors to discuss a tailored solution for your specific needs.
          </p>
          <Link
            to="/contact"
            className="bg-brand-blue text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-brand-blue/90 transition-all shadow-xl"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;

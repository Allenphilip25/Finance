import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Award, Users2 } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-blue mb-8 leading-tight">
                Excellence in Financial <br /> <span className="text-brand-gold italic">Advisory Since 2011</span>
              </h1>
              <p className="text-brand-blue/60 text-lg leading-relaxed mb-8">
                Founded with a vision to bridge the gap between complex financial regulations and business growth, Elite Finance Advisory has grown into one of the UAE's most trusted boutique firms.
              </p>
              <div className="flex gap-12">
                <div>
                  <div className="text-3xl font-display font-bold text-brand-blue">500+</div>
                  <div className="text-sm text-brand-blue/40 uppercase tracking-widest">Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-brand-blue">15+</div>
                  <div className="text-sm text-brand-blue/40 uppercase tracking-widest">Awards</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-brand-blue">100%</div>
                  <div className="text-sm text-brand-blue/40 uppercase tracking-widest">Compliance</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070"
                  alt="Team Collaboration"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3rem] bg-white/5 border border-white/10"
          >
            <div className="w-14 h-14 bg-brand-gold rounded-2xl flex items-center justify-center text-brand-blue mb-8">
              <Target size={28} />
            </div>
            <h3 className="text-3xl font-display font-bold mb-6">Our Mission</h3>
            <p className="text-white/60 text-lg leading-relaxed">
              To empower our clients with innovative financial strategies and unwavering support, enabling them to achieve sustainable growth and long-term financial security in an ever-evolving global economy.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-12 rounded-[3rem] bg-white/5 border border-white/10"
          >
            <div className="w-14 h-14 bg-brand-gold rounded-2xl flex items-center justify-center text-brand-blue mb-8">
              <Shield size={28} />
            </div>
            <h3 className="text-3xl font-display font-bold mb-6">Our Vision</h3>
            <p className="text-white/60 text-lg leading-relaxed">
              To be the premier financial advisory firm in the Middle East, recognized for our integrity, expertise, and commitment to excellence, shaping the future of financial advisory services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Our Values</span>
            <h2 className="text-4xl font-display font-bold text-brand-blue">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Integrity', icon: Shield, desc: 'We uphold the highest ethical standards in all our interactions.' },
              { title: 'Excellence', icon: Award, desc: 'We strive for perfection in every strategy and solution we deliver.' },
              { title: 'Collaboration', icon: Users2, desc: 'We work as partners with our clients to achieve shared goals.' },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-brand-blue/5 rounded-3xl flex items-center justify-center text-brand-gold mx-auto mb-8">
                  <value.icon size={36} />
                </div>
                <h4 className="text-2xl font-bold text-brand-blue mb-4">{value.title}</h4>
                <p className="text-brand-blue/50 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

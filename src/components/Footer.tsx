import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-brand-gold rounded flex items-center justify-center">
              <span className="text-brand-blue font-bold text-lg">E</span>
            </div>
            <span className="text-lg font-display font-bold tracking-tight">
              ELITE <span className="text-brand-gold">FINANCE</span>
            </span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Empowering individuals and corporations with strategic financial guidance and innovative solutions in the UAE and beyond.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-brand-gold font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-brand-gold font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li><Link to="/services" className="hover:text-white transition-colors">Investment Advisory</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Taxation & VAT</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Corporate Finance</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Company Formation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-brand-gold font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-gold shrink-0" />
              <span>Level 42, Emirates Towers, Sheikh Zayed Road, Dubai, UAE</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-gold shrink-0" />
              <span>+971 4 123 4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-gold shrink-0" />
              <span>info@elitefinance.ae</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <p>© 2026 Elite Finance Advisory. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

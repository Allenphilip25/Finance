import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

const LeadMagnet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  // Trigger popup after 5 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem('leadMagnetShown')) {
        setShowPopup(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem('leadMagnetShown', 'true');
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-40 bg-brand-gold text-brand-blue px-6 py-3 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform flex items-center gap-2"
      >
        <CheckCircle2 size={20} />
        Free Health Check
      </button>

      <AnimatePresence>
        {(isOpen || showPopup) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-brand-blue/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full"
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-brand-blue/40 hover:text-brand-blue transition-colors"
              >
                <X size={24} />
              </button>

              <div className="p-8">
                {step === 1 ? (
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-brand-gold/20 rounded-2xl flex items-center justify-center text-brand-gold">
                      <CheckCircle2 size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-brand-blue mb-2">
                        Free Financial Health Check
                      </h3>
                      <p className="text-brand-blue/60">
                        Get a complimentary 15-minute assessment of your current financial standing and growth potential.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-3 rounded-xl border border-brand-blue/10 focus:border-brand-gold outline-none transition-colors"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 rounded-xl border border-brand-blue/10 focus:border-brand-gold outline-none transition-colors"
                      />
                      <button
                        onClick={() => setStep(2)}
                        className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-blue/90 transition-colors"
                      >
                        Get My Assessment
                        <ArrowRight size={18} />
                      </button>
                    </div>
                    <p className="text-center text-xs text-brand-blue/40">
                      No commitment required. Your data is 100% secure.
                    </p>
                  </div>
                ) : (
                  <div className="text-center space-y-6 py-8">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={40} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-brand-blue mb-2">
                        Request Received!
                      </h3>
                      <p className="text-brand-blue/60">
                        One of our senior advisors will contact you within 24 hours to schedule your free health check.
                      </p>
                    </div>
                    <button
                      onClick={handleClose}
                      className="text-brand-gold font-bold hover:underline"
                    >
                      Back to Website
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LeadMagnet;

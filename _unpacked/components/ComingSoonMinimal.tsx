import { Logo } from './Logo';
import { CountdownTimer } from './CountdownTimer';
import { WaitlistForm } from './WaitlistForm';
import { Instagram, Mail } from 'lucide-react';

export function ComingSoonMinimal() {
  // Launch date: February 14, 2026 (Valentine's Day launch)
  const launchDate = '2026-02-14T00:00:00';

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FDFBF6 0%, #f5ebe5 50%, #fdf0ed 100%)'
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-30"
           style={{ background: '#E8B4BC' }}></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20"
           style={{ background: '#72513C' }}></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 md:p-8 text-center">
          <Logo size="lg" />
        </header>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-6 md:px-12 pb-16">
          <div className="max-w-3xl w-full text-center">
            {/* Hero Text */}
            <div className="mb-8 md:mb-12">
              <div className="inline-block mb-4 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-[#72513C]/20">
                <span className="text-sm uppercase tracking-wider" style={{ color: '#72513C' }}>
                  Coming Soon
                </span>
              </div>
              
              <h1 
                className="text-5xl md:text-7xl lg:text-8xl mb-6 luxury-heading"
                style={{ color: '#121212', lineHeight: '1.1' }}
              >
                LuxeLine is<br />launching soon
              </h1>
              <p 
                className="text-lg md:text-2xl max-w-2xl mx-auto"
                style={{ color: '#72513C', lineHeight: '1.6' }}
              >
                Luxury wigs designed for confidence, comfort, and flawless beauty.
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="mb-12 flex justify-center">
              <CountdownTimer launchDate={launchDate} />
            </div>

            {/* Waitlist Form */}
            <div className="flex justify-center mb-10">
              <WaitlistForm variant="primary" />
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 max-w-4xl mx-auto">
              {[
                { title: 'Natural Hairline', desc: 'Flawless blend' },
                { title: 'Glueless Comfort', desc: 'Easy application' },
                { title: 'Premium Hair', desc: '100% human hair' },
                { title: 'Fast Shipping', desc: 'Worldwide delivery' },
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <p className="text-[#72513C] mb-1" style={{ fontWeight: 600 }}>
                    {benefit.title}
                  </p>
                  <p className="text-sm text-[#72513C]/60">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center space-x-6 mb-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#72513C] hover:text-[#E8B4BC] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#72513C] hover:text-[#E8B4BC] transition-colors"
                aria-label="TikTok"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="mailto:hello@luxeline.com"
                className="text-[#72513C] hover:text-[#E8B4BC] transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="p-6 md:p-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-sm max-w-4xl mx-auto" style={{ color: '#72513C', opacity: 0.6 }}>
            <p>© 2026 LuxeLine. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="#privacy" className="hover:opacity-100 transition-opacity">Privacy</a>
              <a href="#terms" className="hover:opacity-100 transition-opacity">Terms</a>
              <a href="#refund" className="hover:opacity-100 transition-opacity">Refund</a>
              <a href="#shipping" className="hover:opacity-100 transition-opacity">Shipping</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

import { Logo } from './Logo';
import { CountdownTimer } from './CountdownTimer';
import { WaitlistForm } from './WaitlistForm';
import { Instagram, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ComingSoonModel() {
  // Launch date: February 14, 2026 (Valentine's Day launch)
  const launchDate = '2026-02-14T00:00:00';

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1762843353166-e0542bba1a66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWF1dHklMjBtb2RlbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODIyMjgwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="LuxeLine Model"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF6]/95 via-[#FDFBF6]/85 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 md:p-8">
          <Logo size="md" />
        </header>

        {/* Main Content */}
        <div className="flex-1 flex items-center px-6 md:px-12 lg:px-16 pb-16">
          <div className="max-w-2xl">
            {/* Hero Text */}
            <div className="mb-8 md:mb-12">
              <h1 
                className="text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-6 luxury-heading"
                style={{ color: '#121212', lineHeight: '1.1' }}
              >
                LuxeLine is<br />launching soon
              </h1>
              <p 
                className="text-lg md:text-xl max-w-lg"
                style={{ color: '#72513C', lineHeight: '1.6' }}
              >
                Luxury wigs designed for confidence, comfort, and flawless beauty.
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="mb-12">
              <CountdownTimer launchDate={launchDate} />
            </div>

            {/* Waitlist Form */}
            <div>
              <WaitlistForm variant="primary" />
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center space-x-6">
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
        <footer className="p-6 md:p-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm" style={{ color: '#72513C', opacity: 0.6 }}>
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

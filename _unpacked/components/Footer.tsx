import { Logo } from './Logo';
import { Instagram, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#FDFBF6] border-t border-[#72513C]/10 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Logo size="md" className="mb-4" />
            <p className="text-[#72513C]/70 text-sm leading-relaxed max-w-md mb-6">
              Luxury wigs designed for confidence, comfort, and flawless beauty. 
              Elevate your look with premium quality and natural elegance.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#72513C] hover:text-[#E8B4BC] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#72513C] hover:text-[#E8B4BC] transition-colors"
                aria-label="TikTok"
              >
                <svg
                  width="20"
                  height="20"
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
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#72513C] mb-4" style={{ fontWeight: 600 }}>Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#shop" className="text-[#72513C]/70 hover:text-[#E8B4BC] text-sm transition-colors">
                  Shop All
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#72513C]/70 hover:text-[#E8B4BC] text-sm transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#lookbook" className="text-[#72513C]/70 hover:text-[#E8B4BC] text-sm transition-colors">
                  Lookbook
                </a>
              </li>
              <li>
                <a href="#faq" className="text-[#72513C]/70 hover:text-[#E8B4BC] text-sm transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[#72513C] mb-4" style={{ fontWeight: 600 }}>Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#shipping" className="text-[#72513C]/70 hover:text-[#E8B4BC] text-sm transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#refund" className="text-[#72513C]/70 hover:text-[#E8B4BC] text-sm transition-colors">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-[#72513C]/70 hover:text-[#E8B4BC] text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-[#72513C]/70 hover:text-[#E8B4BC] text-sm transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#72513C]/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#72513C]/60 text-sm">
              © {currentYear} LuxeLine. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4">
              <a href="#privacy" className="text-[#72513C]/60 hover:text-[#72513C] text-sm transition-colors">
                Privacy
              </a>
              <span className="text-[#72513C]/30">•</span>
              <a href="#terms" className="text-[#72513C]/60 hover:text-[#72513C] text-sm transition-colors">
                Terms
              </a>
              <span className="text-[#72513C]/30">•</span>
              <a href="#refund" className="text-[#72513C]/60 hover:text-[#72513C] text-sm transition-colors">
                Refund
              </a>
              <span className="text-[#72513C]/30">•</span>
              <a href="#shipping" className="text-[#72513C]/60 hover:text-[#72513C] text-sm transition-colors">
                Shipping
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}